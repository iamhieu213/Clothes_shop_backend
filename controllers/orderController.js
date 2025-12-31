import * as orderService from '../services/orderService.js';
import { sendError, sendSuccess } from "./controllerUtils.js";
import { loadEnv } from '../config/env.js';

/**
 * Tính phí ship (API riêng để Frontend gọi khi chọn xong địa chỉ)
 */
export const getShippingFee = async (req, res) => {
    try {
        const userId = req.user.id;
        // locationData: { province_id, district_id, ... } từ Frontend gửi lên
        const { promotionCode, ...locationData } = req.body;

        const result = await orderService.previewShippingFee(userId, locationData, promotionCode);

        sendSuccess(res, {
            message: "Tính phí ship thành công",
            data: result,
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Tạo đơn hàng (Checkout)
 */
export const createOrder = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            const error = new Error("Cần đăng nhập để đặt hàng");
            error.status = 401;
            return sendError(res, error, 401);
        }

        // Frontend gửi: ID địa chỉ đã lưu, Phương thức thanh toán, Ghi chú, Mã giảm giá
        const { shippingAddressId, paymentMethod, notes, promotionCode } = req.body;

        const result = await orderService.createOrder(
            userId,
            shippingAddressId,
            paymentMethod,
            notes,
            promotionCode
        );

        sendSuccess(res, {
            status: 201,
            message: "Đặt hàng thành công",
            data: {
                orderId: result.order.id,
                totalAmount: result.financials.totalAmount,
                paymentMethod: paymentMethod.toUpperCase(),
                paymentUrl: result.paymentUrl // (Nếu là VNPAY thì có link này)
            }
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Lấy danh sách đơn hàng của tôi
 */
export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await orderService.getUserOrders(userId);

        sendSuccess(res, { data: orders });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Lấy chi tiết một đơn hàng
 */
export const getOrderDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const order = await orderService.getOrderById(userId, id);

        sendSuccess(res, { data: order });
    } catch (error) {
        sendError(res, error);
    }
};
/**
 * Hủy đơn hàng
 */
export const cancelMyOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.id; // Lấy ID từ URL

        const result = await orderService.cancelOrder(userId, orderId);

        sendSuccess(res, {
            message: "Đã hủy đơn hàng thành công",
            data: {
                orderId: result.id,
                status: result.status
            }
        });
    } catch (error) {
        sendError(res, error);
    }
};
// === ADMIN CONTROLLERS ===

export const getAllOrders = async (req, res) => {
    try {
        const {
            page,
            limit,
            pageSize,
            status,
            sortBy,
            sortDir,
            startDate,
            endDate,
            customer,
        } = req.query;

        const result = await orderService.getAllOrdersAdmin({
            page,
            limit: limit ?? pageSize,
            pageSize,
            status,
            sortBy,
            sortDir,
            startDate,
            endDate,
            customer,
        });
        sendSuccess(res, { data: result.data, pagination: result.meta });
    } catch (error) {
        sendError(res, error);
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;   // Order ID
        const { status } = req.body; // Trạng thái mới (VD: "confirmed")

        const order = await orderService.updateOrderStatusAdmin(id, status);

        sendSuccess(res, {
            message: "Cập nhật trạng thái thành công",
            data: {
                orderId: order.id,
                status: order.status
            }
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Xử lý callback từ VNPay
 * VNPay sẽ redirect về URL này sau khi thanh toán
 */
export const vnPayCallback = async (req, res) => {
    try {
        // Lấy tất cả query params từ VNPay
        const vnpParams = req.query;

        const result = await orderService.handleVnPayCallback(vnpParams);

        // Redirect về frontend với kết quả
        const env = loadEnv();
        const frontendUrl = env.FRONTEND_URL || 'http://localhost:5173';
        const redirectUrl = result.success
            ? `${frontendUrl}/orders/${result.orderId}?payment=success`
            : `${frontendUrl}/orders/${result.orderId}?payment=failed&message=${encodeURIComponent(result.message)}`;

        res.redirect(redirectUrl);
    } catch (error) {
        // Nếu có lỗi, redirect về trang lỗi
        const env = loadEnv();
        const frontendUrl = env.FRONTEND_URL || 'http://localhost:5173';
        res.redirect(`${frontendUrl}/payment-error?message=${encodeURIComponent(error.message)}`);
    }
};

/**
 * API endpoint để frontend kiểm tra trạng thái thanh toán
 * (Sau khi redirect từ VNPay)
 */
export const checkPaymentStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const userId = req.user.id;

        const order = await orderService.getOrderById(userId, orderId);

        if (!order) {
            return sendError(res, new Error("Không tìm thấy đơn hàng"), 404);
        }

        // Sequelize có thể trả về Payment với tên khác nhau, kiểm tra cả hai
        let payment = order.Payment || order.payment;
        
        // Nếu không tìm thấy trong include, query trực tiếp
        if (!payment) {
            const { findPaymentByOrderId } = await import('../repositories/orderRepository.js');
            payment = await findPaymentByOrderId(order.id);
        }
        
        if (!payment) {
            return sendError(res, new Error("Không tìm thấy thông tin thanh toán"), 404);
        }

        sendSuccess(res, {
            data: {
                orderId: order.id,
                orderStatus: order.status,
                paymentStatus: payment.status,
                paymentMethod: payment.provider
            }
        });
    } catch (error) {
        sendError(res, error);
    }
};
