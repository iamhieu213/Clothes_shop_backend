import { Product, ProductVariant, ShippingAddress } from "../models/index.js";
import discountService from "./discountService.js";
import { sendOrderStatusEmail } from "./emailService.js";
import { Op } from "sequelize";
import crypto from "crypto";
import querystring from "qs";
import moment from "moment";
import { loadEnv } from "../config/env.js";
import {
    findCartWithItems,
    findShippingAddress,
    createOrderRecord,
    bulkCreateOrderItems,
    createPaymentRecord,
    clearCartItems,
    findOrdersForUser,
    findOrderForUser,
    findOrderWithRelations,
    findPaymentByOrderId,
    findOrderById,
    updatePaymentStatus
} from "../repositories/orderRepository.js";
import { withTransaction } from "../utils/transactions.js";
import { Order, User } from "../models/index.js";
import { emitToAdmins } from "../lib/socket.js";

const env = loadEnv();

// === CẤU HÌNH ===
const SHOP_PROVINCE_ID = parseInt(env.SHOP_PROVINCE_ID || "1", 10);
const SHOP_CITY_NAME = env.SHOP_CITY || "Hà Nội";

const findOrCreateShippingAddress = async ({ userId, addressId, transaction }) => {
    if (!userId) {
        const error = new Error("Cần đăng nhập để thực hiện thanh toán");
        error.status = 401;
        throw error;
    }

    if (!addressId) {
        const error = new Error("Thiếu thông tin địa chỉ giao hàng");
        error.status = 400;
        throw error;
    }

    const address = await findShippingAddress(addressId, userId);
    if (!address) {
        const error = new Error("Địa chỉ giao hàng không tồn tại");
        error.status = 400;
        throw error;
    }

    return address;
};

/**
 * Hàm tính phí ship cơ bản (Theo địa chỉ)
 */
const calculateFeeLogic = (addressData, subtotal) => {
    // 1. Mặc định > 1tr Free Ship (Logic cứng của Shop)
    if (subtotal >= 1000000) {
        return { fee: 0, note: "Miễn phí vận chuyển (Đơn > 1tr)" };
    }

    let fee = 50000; // Mặc định: Ngoại tỉnh
    let isInnerCity = false;

    // So sánh địa chỉ (Ưu tiên ID)
    if (addressData.province_id) {
        if (Number(addressData.province_id) === SHOP_PROVINCE_ID) isInnerCity = true;
    } else if (addressData.city) {
        if (addressData.city.toLowerCase().includes(SHOP_CITY_NAME.toLowerCase())) isInnerCity = true;
    }

    if (isInnerCity) {
        return { fee: 30000, note: "Phí ship nội thành" };
    }
    return { fee: 50000, note: "Phí ship ngoại thành" };
};

/**
 * Wrapper that delegates discount calculation/validation to the new discountService.
 * Keeps the returned shape compatible with existing callers: { amount, code, id, applicable_to }
 */
const calculateDiscount = async (promotionCode, subtotal, shippingFee) => {
    // If a code is provided, validate and compute using discountService
    if (promotionCode) {
        const res = await discountService.applyDiscount({ subtotal, shipping_fee: shippingFee }, promotionCode);
        if (!res.applied) {
            throw new Error(`Mã "${promotionCode}" không hợp lệ hoặc đã hết hạn.`);
        }
        return {
            amount: Math.round(res.amount),
            code: res.discount && res.discount.code ? res.discount.code : promotionCode,
            id: res.discount ? res.discount.id : null,
            applicable_to: res.discount && res.discount.applicable_to ? res.discount.applicable_to : 'order'
        };
    }

    // No code => try to find best auto discount
    const auto = await discountService.getBestAutoDiscount({ subtotal, shipping_fee: shippingFee });
    if (!auto || !auto.discount) return { amount: 0, code: null, id: null, applicable_to: null };
    return {
        amount: Math.round(auto.amount),
        code: auto.discount.code || null,
        id: auto.discount.id || null,
        applicable_to: auto.discount.applicable_to || 'order'
    };
};

/**
 * Tạo URL VNPay (Giữ nguyên)
 */
const createVnPayUrl = (orderId, amount, ipAddr = '127.0.0.1') => {
    const tmnCode = (env.VNP_TMN_CODE || "").trim();
    const secretKey = (env.VNP_HASH_SECRET || "").trim();
    const vnpUrl = (env.VNP_URL || "").trim();
    const returnUrl = (env.VNP_RETURN_URL || "").trim();

    const date = new Date();
    const createDate = moment(date).format("YYYYMMDDHHmmss");
    const vnpTxnRef = `${orderId}_${moment(date).format("HHmmss")}`;

    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = 'vn';
    vnp_Params['vnp_CurrCode'] = 'VND';
    vnp_Params['vnp_TxnRef'] = vnpTxnRef;
    vnp_Params['vnp_OrderInfo'] = `Thanh toan don hang #${orderId}`;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = Math.round(amount * 100);
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    let sorted = {};
    let str = [];
    for (let key in vnp_Params) {
        if (vnp_Params.hasOwnProperty(key)) str.push(encodeURIComponent(key));
    }
    str.sort();
    for (let key of str) {
        sorted[key] = encodeURIComponent(vnp_Params[key]).replace(/%20/g, "+");
    }

    const signData = querystring.stringify(sorted, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
    sorted['vnp_SecureHash'] = signed;

    return `${vnpUrl}?${querystring.stringify(sorted, { encode: false })}`;
};

// === CÁC SERVICE EXPORT ===

// 1. Xem trước chi phí (Preview)
export const previewShippingFee = async (userId, locationData, promotionCode) => {
    const cart = await findCartWithItems(userId);

    let subtotal = 0;
    if (cart && cart.cart_items) {
        for (const item of cart.cart_items) {
            const variant = item.product_variant;
            if (variant && variant.product) {
                // Use product-level pricing (base_price or sale_price)
                const price = parseFloat(variant.product.sale_price || variant.product.base_price || 0);
                subtotal += price * item.quantity;
            }
        }
    }

    // Tính Ship gốc
    const { fee: initialShippingFee, note: shippingNote } = calculateFeeLogic(locationData, subtotal);

    // Tính Mã Giảm Giá
    let discountInfo = { amount: 0, code: null, applicable_to: null };
    let discountError = null;

    try {
        discountInfo = await calculateDiscount(promotionCode, subtotal, initialShippingFee);
    } catch (error) {
        discountError = error.message;
    }

    // Logic cộng trừ tổng tiền
    // Nếu giảm ship -> Trừ vào ship fee (nhưng không âm)
    // Nếu giảm order -> Trừ thẳng vào tổng
    // Công thức chung: Total = Subtotal + Ship - Discount

    const total = subtotal + initialShippingFee - discountInfo.amount;

    return {
        subtotal: subtotal,
        shippingFee: initialShippingFee,
        shippingNote: shippingNote,
        discountAmount: discountInfo.amount, // Tổng tiền được giảm
        discountType: discountInfo.applicable_to, // 'shipping' hoặc 'order'
        promotionCode: discountInfo.code,
        promotionError: discountError,
        total: total < 0 ? 0 : total
    };
};

// 2. Tạo đơn hàng (Checkout)
export const createOrder = async (userId, shippingAddressId, paymentMethod, notes, promotionCode) => {
    const validMethods = ['COD', 'VNPAY'];
    if (!validMethods.includes(paymentMethod.toUpperCase())) {
        throw new Error("Phương thức thanh toán không hợp lệ");
    }

    if (!userId) {
        throw new Error("Cần đăng nhập để tạo đơn hàng");
    }

    const cart = await findCartWithItems(userId);

    if (!cart || !cart.cart_items.length) throw new Error("Giỏ hàng trống");

    const result = await withTransaction(async (transaction) => {
        let subtotal = 0;
        const orderItemsData = [];

        const address = await findOrCreateShippingAddress({
            userId,
            addressId: shippingAddressId,
            transaction,
        });

        for (const item of cart.cart_items) {
            const variantId = item.product_variant?.id || item.product_variant_id;
            if (!variantId) continue;

            const variant = await ProductVariant.findByPk(variantId, {
                include: [{ model: Product, as: 'product', required: true }],
                transaction,
                lock: transaction.LOCK.UPDATE,
            });

            if (!variant || !variant.product) continue;
            if (variant.stock_quantity < item.quantity) {
                throw new Error(`Sản phẩm "${variant.product.name}" hết hàng.`);
            }

            // Use product-level pricing (base_price or sale_price)
            const unitPrice = parseFloat(variant.product.sale_price || variant.product.base_price || 0);
            const lineTotal = unitPrice * item.quantity;
            subtotal += lineTotal;

            orderItemsData.push({
                product_id: variant.product_id,
                product_variant_id: variant.id,
                name_snapshot: variant.product.name,
                sku_snapshot: variant.sku,
                color_snapshot: variant.color,
                size_snapshot: variant.size,
                unit_price: unitPrice,
                quantity: item.quantity,
                line_total: lineTotal
            });

            await variant.decrement('stock_quantity', { by: item.quantity, transaction });
        }

        // Tính toán tiền
        const { fee: shippingFee } = calculateFeeLogic(address, subtotal);

        const discountInfo = await calculateDiscount(promotionCode, subtotal, shippingFee);

        // Reserve discount usage atomically
        let discountSnapshot = null;
        if (discountInfo.code) {
            const reserve = await discountService.validateAndReserveDiscount(discountInfo.code, transaction);
            if (!reserve.valid) {
                const error = new Error("Mã khuyến mãi không còn khả dụng");
                error.status = 400;
                throw error;
            }
            discountSnapshot = reserve.discount;
        }

        let totalAmount = subtotal + shippingFee - discountInfo.amount;
        if (totalAmount < 0) totalAmount = 0;

        // Note thông tin giảm giá
        let promoNote = "";
        if (discountInfo.code) {
            promoNote = ` | Mã ${discountInfo.code}: -${discountInfo.amount}đ (${discountInfo.applicable_to})`;
        }
        const finalNotes = (notes ? notes : "") + ` | Ship: ${shippingFee}đ` + promoNote;

        // Tạo Order (lưu cả trường cũ `promotion_id` để tránh phá vỡ code cũ, và trường `discount_id` mới)
        const newOrder = await createOrderRecord({
            user_id: userId,
            shipping_address_id: address.id,
            promotion_id: discountInfo.id,
            discount_id: discountInfo.id,
            subtotal_amount: subtotal,
            discount_amount: discountInfo.amount,
            promotion_code: discountInfo.code,
            discount_code_snapshot: discountSnapshot ? discountSnapshot.code : discountInfo.code,
            discount_type_snapshot: discountSnapshot ? discountSnapshot.discount_type : null,
            discount_value_snapshot: discountSnapshot ? discountSnapshot.discount_value : null,
            total_amount: totalAmount,
            final_total: null,
            status: 'pending',
            notes: finalNotes,
        }, transaction);

        const itemsWithOrderId = orderItemsData.map(item => ({ ...item, order_id: newOrder.id }));
        await bulkCreateOrderItems(itemsWithOrderId, transaction);

        // Thanh toán
        let paymentUrl = null;
        let paymentStatus = 'pending';
        if (paymentMethod.toUpperCase() === 'VNPAY') {
            paymentStatus = 'waiting_gateway';
            paymentUrl = createVnPayUrl(newOrder.id, totalAmount);
        }

        await createPaymentRecord({
            order_id: newOrder.id,
            provider: paymentMethod.toUpperCase(),
            amount: totalAmount,
            currency: 'VND',
            status: paymentStatus,
            raw_payload: paymentUrl ? { paymentUrl } : null
        }, transaction);

        await clearCartItems(cart.id, transaction);

        return {
            order: newOrder,
            user: await User.findByPk(userId, { attributes: ['id', 'email', 'name'] }),
            paymentUrl: paymentUrl,
            financials: { subtotal, shippingFee, discountAmount: discountInfo.amount, totalAmount }
        };
    });

    // Send order confirmation email (outside transaction)
    if (result.user && result.user.email) {
        sendOrderStatusEmail(result.user.email, result.order.id, 'pending', {
            total_amount: result.order.total_amount,
            notes: result.order.notes
        });
    }

    // Emit real-time notification to admins
    emitToAdmins("new_order", {
        orderId: result.order.id,
        customerName: result.user?.name || "Khách hàng",
        totalAmount: result.financials.totalAmount,
        status: result.order.status
    });

    return result;
};

/**
 * 3. Hủy đơn hàng (User tự hủy)
 */
export const cancelOrder = async (userId, orderId) => {
    const order = await findOrderForUser(userId, orderId);

    if (!order) {
        throw new Error("Đơn hàng không tồn tại");
    }

    if (order.status !== 'pending') {
        throw new Error("Không thể hủy đơn hàng này (Đã được xác nhận hoặc đang giao).");
    }

    await withTransaction(async (transaction) => {
        // 1. Đổi trạng thái
        order.status = 'canceled';
        await order.save({ transaction });

        // 2. Hoàn lại tồn kho (Back stock)
        if (order.order_items) {
            for (const item of order.order_items) {
                const variant = await ProductVariant.findByPk(item.product_variant_id);
                if (variant) {
                    await variant.increment('stock_quantity', {
                        by: item.quantity,
                        transaction
                    });
                }
            }
        }
    });

    // 3. Gửi email thông báo hủy đơn
    // Lấy thông tin user để gửi email (vì findOrderForUser chưa chắc đã include User)
    const user = await User.findByPk(userId);
    if (user && user.email) {
        sendOrderStatusEmail(user.email, order.id, 'canceled', {
            total_amount: order.total_amount,
            notes: order.notes
        });
    }

    return order;
};

export const getUserOrders = async (userId) => findOrdersForUser(userId);

export const getOrderById = async (userId, orderId) => {
    const order = await findOrderForUser(userId, orderId);
    if (!order) throw new Error("Đơn hàng không tìm thấy");
    return order;
};

/**
 * Admin: Lấy danh sách toàn bộ đơn hàng
 */
export const getAllOrdersAdmin = async ({
    page = 1,
    limit,
    pageSize,
    status,
    sortBy = "created_at",
    sortDir = "DESC",
    startDate,
    endDate,
    customer,
} = {}) => {
    const normalizedLimit = limit ?? pageSize;
    const pageNumber = Math.max(parseInt(page, 10) || 1, 1);
    const pageSizeNumber = Math.min(Math.max(parseInt(normalizedLimit, 10) || 20, 1), 100);
    const offset = (pageNumber - 1) * pageSizeNumber;

    const where = {};
    if (status) {
        where.status = status.toLowerCase();
    }

    if (startDate || endDate) {
        where.created_at = {};
        if (startDate) where.created_at[Op.gte] = new Date(startDate);
        if (endDate) where.created_at[Op.lte] = new Date(endDate);
    }

    const orderClauses = [];
    const allowedSort = ["created_at", "total_amount", "status", "id"];
    const sortField = allowedSort.includes(sortBy) ? sortBy : "created_at";
    const direction = sortDir && sortDir.toUpperCase() === "ASC" ? "ASC" : "DESC";
    orderClauses.push([sortField, direction]);

    const textOp = Op.iLike || Op.like;
    const userWhere = {};
    if (customer) {
        const customerTerm = customer.toString().trim();
        userWhere[Op.or] = [
            { name: { [textOp]: `%${customerTerm}%` } },
            { email: { [textOp]: `%${customerTerm}%` } },
            { phone: { [textOp]: `%${customerTerm}%` } },
        ];
        const asNumber = parseInt(customerTerm, 10);
        if (!isNaN(asNumber)) {
            userWhere[Op.or].push({ id: asNumber });
        }
    }

    const { rows, count } = await Order.findAndCountAll({
        where,
        include: [
            {
                model: User,
                as: 'user',
                attributes: ["id", "name", "email", "phone"],
                where: Object.keys(userWhere).length ? userWhere : undefined,
            },
        ],
        order: orderClauses,
        limit: pageSizeNumber,
        offset,
    });

    return {
        data: rows,
        meta: {
            page: pageNumber,
            limit: pageSizeNumber,
            total: count,
            totalPages: Math.ceil(count / pageSizeNumber) || 1,
        },
    };
};

/**
 * Admin: Cập nhật trạng thái đơn hàng
 */
export const updateOrderStatusAdmin = async (orderId, newStatus) => {
    const validStatuses = ['pending', 'confirmed', 'shipping', 'completed', 'canceled', 'paided'];
    if (!validStatuses.includes(newStatus)) {
        throw new Error("Trạng thái không hợp lệ");
    }

    const order = await findOrderWithRelations(orderId);

    if (!order) {
        throw new Error("Đơn hàng không tồn tại");
    }

    if (order.status === newStatus) return order;

    // LOGIC HOÀN KHO: Nếu Admin HỦY đơn
    if (newStatus === 'canceled' && order.status !== 'canceled') {
        await withTransaction(async (transaction) => {
            const items = order.order_items;

            if (items) {
                for (const item of items) {
                    const variant = await ProductVariant.findByPk(item.product_variant_id);
                    if (variant) {
                        await variant.increment('stock_quantity', { by: item.quantity, transaction });
                    }
                }
            }

            order.status = newStatus;
            await order.save({ transaction });
        });
    } else {
        order.status = newStatus;
        await order.save();
    }

    // GỬI EMAIL THÔNG BÁO
    if (order.user && order.user.email) {
        sendOrderStatusEmail(order.user.email, order.id, newStatus, {
            total_amount: order.total_amount,
            notes: order.notes
        });
    }

    return order;
};

/**
 * Xử lý callback từ VNPay
 * @param {Object} vnpParams - Các tham số từ VNPay callback
 * @returns {Object} - Kết quả xử lý
 */
export const handleVnPayCallback = async (vnpParams) => {
    const secretKey = (env.VNP_HASH_SECRET || "").trim();

    if (!secretKey) {
        throw new Error("VNPay secret key chưa được cấu hình");
    }

    // Lấy SecureHash từ params
    const secureHash = vnpParams['vnp_SecureHash'];

    // Clone params to avoid modifying original req.query
    const params = { ...vnpParams };
    delete params['vnp_SecureHash'];
    delete params['vnp_SecureHashType'];

    // Sắp xếp và tạo chuỗi để verify
    let sorted = {};
    let str = [];
    for (let key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (let key of str) {
        sorted[key] = encodeURIComponent(params[key]).replace(/%20/g, "+");
    }

    const signData = querystring.stringify(sorted, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

    // Verify signature
    if (secureHash !== signed) {
        throw new Error("Chữ ký không hợp lệ");
    }

    // Lấy thông tin từ callback
    const vnpResponseCode = vnpParams['vnp_ResponseCode'];
    const vnpTxnRef = vnpParams['vnp_TxnRef'];
    const vnpAmount = parseFloat(vnpParams['vnp_Amount']) / 100; // VNPay trả về số tiền * 100
    const vnpTransactionStatus = vnpParams['vnp_TransactionStatus'];
    const vnpTransactionNo = vnpParams['vnp_TransactionNo'];

    // Lấy orderId từ vnpTxnRef (format: orderId_HHmmss)
    const orderId = parseInt(vnpTxnRef.split('_')[0], 10);

    if (!orderId || isNaN(orderId)) {
        throw new Error("Không tìm thấy Order ID từ callback");
    }

    // Tìm order và payment
    const order = await findOrderById(orderId);
    if (!order) {
        throw new Error("Đơn hàng không tồn tại");
    }

    const payment = await findPaymentByOrderId(orderId);
    if (!payment) {
        throw new Error("Thông tin thanh toán không tồn tại");
    }

    // Kiểm tra số tiền
    if (Math.abs(parseFloat(order.total_amount) - vnpAmount) > 0.01) {
        throw new Error("Số tiền thanh toán không khớp");
    }

    // Xử lý kết quả thanh toán
    const result = await withTransaction(async (transaction) => {
        let paymentStatus = 'failed';
        let orderStatus = order.status;

        // ResponseCode = '00' và TransactionStatus = '00' => Thành công
        if (vnpResponseCode === '00' && vnpTransactionStatus === '00') {
            paymentStatus = 'completed';
            // Nếu order đang pending, chuyển sang confirmed
            if (order.status === 'pending') {
                orderStatus = 'paided';
            }
        } else {
            paymentStatus = 'failed';
            // Nếu thanh toán thất bại và order đang pending, có thể giữ nguyên hoặc đổi sang failed
            // Tùy vào business logic
        }

        // Cập nhật payment
        await updatePaymentStatus(
            payment.id,
            {
                status: paymentStatus,
                provider_txn_id: vnpTransactionNo,
                raw_payload: vnpParams
            },
            transaction
        );

        // Cập nhật order status
        if (orderStatus !== order.status) {
            order.status = orderStatus;
            await order.save({ transaction });
        }

        return {
            success: paymentStatus === 'completed',
            orderId: order.id,
            paymentStatus,
            orderStatus,
            message: paymentStatus === 'completed'
                ? 'Thanh toán thành công'
                : `Thanh toán thất bại. Mã lỗi: ${vnpResponseCode}`
        };
    });

    // Gửi email thông báo nếu thanh toán thành công
    if (result.success && order.user && order.user.email) {
        sendOrderStatusEmail(order.user.email, order.id, result.orderStatus, {
            total_amount: order.total_amount,
            notes: order.notes
        });
    }

    // If payment was successful, notify admins again (maybe status changed to paided)
    if (result.success) {
        emitToAdmins("new_order", {
            orderId: result.orderId,
            customerName: order.user?.name || "Khách hàng",
            totalAmount: order.total_amount,
            status: result.orderStatus,
            paymentSuccess: true
        });
    }

    return result;
};
