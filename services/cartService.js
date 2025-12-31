import {
    Cart,
    CartItem,
    Product,
    ProductVariant,
    // Promotion, // Tạm thời comment để tránh lỗi, sẽ xử lý discount sau
    sequelize, // Dùng cho transactions (đảm bảo an toàn dữ liệu)
} from "../models/index.js";
import { Op, col } from "sequelize";

/**
 * Hàm nội bộ: Tìm giỏ hàng của user, nếu chưa có thì tạo mới
 */
const getOrCreateCart = async (userId) => {
    if (!userId) {
        throw new Error("Vui lòng đăng nhập để sử dụng giỏ hàng");
    }

    const [cart] = await Cart.findOrCreate({
        where: { user_id: userId },
        defaults: { user_id: userId },
    });
    return cart;
};

const resolveVariant = async ({ productVariantId, productId, transaction }) => {
    if (productVariantId) {
        const variant = await ProductVariant.findByPk(productVariantId, {
            transaction,
            lock: transaction?.LOCK?.UPDATE,
        });
        if (!variant) {
            throw new Error("Biến thể sản phẩm không tồn tại");
        }
        return variant;
    }

    if (productId) {
        const variant = await ProductVariant.findOne({
            where: { product_id: productId },
            order: [["id", "ASC"]],
            transaction,
            lock: transaction?.LOCK?.UPDATE,
        });
        if (!variant) {
            throw new Error("Sản phẩm không có biến thể khả dụng");
        }
        return variant;
    }

    throw new Error("Vui lòng chọn sản phẩm");
};

const clampQuantityToStock = (requested, stockQuantity) => {
    const safeStock = Number(stockQuantity) || 0;
    if (safeStock <= 0) {
        throw new Error("Sản phẩm không còn trong kho");
    }

    const safeRequested = Number(requested) || 0;
    if (safeRequested <= 0) {
        throw new Error("Số lượng phải là một số dương");
    }

    return Math.min(safeRequested, safeStock);
};

/**
 * 1. Thêm sản phẩm vào giỏ hàng
 */
export const addProductToCart = async (
    userId,
    productVariantId,
    quantity,
    productId
) => {
    const addQuantity = parseInt(quantity, 10);
    // --- Xử lý logic (trong 1 transaction) ---
    const result = await sequelize.transaction(async (t) => {
        const variant = await resolveVariant({ productVariantId, productId, transaction: t });
        const resolvedVariantId = variant.id;
        const quantityToAdd = clampQuantityToStock(addQuantity, variant.stock_quantity);

        // --- Tìm giỏ hàng & sản phẩm ---
        const cart = await getOrCreateCart(userId);

        // Kiểm tra xem item đã có trong giỏ chưa
        let cartItem = await CartItem.findOne({
            where: {
                cart_id: cart.id,
                product_variant_id: resolvedVariantId,
            },
            transaction: t,
        });

        let newQuantity;
        if (cartItem) {
            // Đã có -> Cập nhật số lượng
            newQuantity = cartItem.quantity + quantityToAdd;
            cartItem.quantity = newQuantity;
        } else {
            // Chưa có -> Tạo mới
            newQuantity = quantityToAdd;
            cartItem = await CartItem.create(
                {
                    cart_id: cart.id,
                    product_variant_id: resolvedVariantId,
                    quantity: newQuantity,
                },
                { transaction: t }
            );
        }

        // Kiểm tra tồn kho
        const clampedQuantity = clampQuantityToStock(newQuantity, variant.stock_quantity);
        cartItem.quantity = clampedQuantity;

        await cartItem.save({ transaction: t });
        return cartItem;
    });

    return result;
};

/**
 * 2. Cập nhật số lượng sản phẩm trong giỏ
 */
export const updateCartItem = async (userId, cartItemId, payload) => {
    const { quantity, productVariantId } = payload || {};
    const hasQuantity = quantity !== undefined && quantity !== null;

    if (!hasQuantity && !productVariantId) {
        throw new Error("Thiếu thông tin cập nhật");
    }

    const newQuantity = hasQuantity ? parseInt(quantity, 10) : null;
    if (hasQuantity && (isNaN(newQuantity) || newQuantity < 0)) {
        throw new Error("Số lượng không hợp lệ");
    }

    if (hasQuantity && newQuantity === 0) {
        return await removeItemFromCart(userId, cartItemId);
    }

    return sequelize.transaction(async (t) => {
        const cart = await getOrCreateCart(userId);
        const cartItem = await CartItem.findByPk(cartItemId, {
            transaction: t,
            lock: t.LOCK.UPDATE,
        });

        if (!cartItem) {
            throw new Error("Sản phẩm không có trong giỏ hàng");
        }
        if (cartItem.cart_id !== cart.id) {
            throw new Error("Bạn không có quyền cập nhật sản phẩm này");
        }

        const currentVariant = await ProductVariant.findByPk(cartItem.product_variant_id, {
            transaction: t,
            lock: t.LOCK.UPDATE,
        });
        if (!currentVariant) {
            await cartItem.destroy({ transaction: t });
            throw new Error(
                "Sản phẩm không còn tồn tại và đã được xóa khỏi giỏ hàng"
            );
        }

        let targetVariant = currentVariant;
        if (productVariantId) {
            const selectedVariant = await ProductVariant.findByPk(productVariantId, {
                transaction: t,
                lock: t.LOCK.UPDATE,
            });
            if (!selectedVariant) {
                throw new Error("Biến thể sản phẩm không tồn tại");
            }
            if (selectedVariant.product_id !== currentVariant.product_id) {
                throw new Error("Biến thể không thuộc cùng sản phẩm");
            }
            targetVariant = selectedVariant;
        }

        const desiredQuantity = hasQuantity ? newQuantity : cartItem.quantity;
        const clampedQuantity = clampQuantityToStock(
            desiredQuantity,
            targetVariant.stock_quantity
        );

        if (productVariantId && targetVariant.id !== cartItem.product_variant_id) {
            const existingItem = await CartItem.findOne({
                where: {
                    cart_id: cart.id,
                    product_variant_id: targetVariant.id,
                },
                transaction: t,
                lock: t.LOCK.UPDATE,
            });

            if (existingItem && existingItem.id !== cartItem.id) {
                const mergedQuantity = clampQuantityToStock(
                    existingItem.quantity + clampedQuantity,
                    targetVariant.stock_quantity
                );
                existingItem.quantity = mergedQuantity;
                await existingItem.save({ transaction: t });
                await cartItem.destroy({ transaction: t });
                return existingItem;
            }

            cartItem.product_variant_id = targetVariant.id;
        }

        cartItem.quantity = clampedQuantity;
        await cartItem.save({ transaction: t });
        return cartItem;
    });
};

/**
 * 3. Xóa sản phẩm khỏi giỏ
 */
export const removeItemFromCart = async (userId, cartItemId) => {
    const cart = await getOrCreateCart(userId);
    const cartItem = await CartItem.findByPk(cartItemId);

    if (!cartItem) {
        throw new Error("Sản phẩm không có trong giỏ hàng");
    }
    // --- Security check: Đảm bảo item này thuộc giỏ hàng của user ---
    if (cartItem.cart_id !== cart.id) {
        throw new Error("Bạn không có quyền xóa sản phẩm này");
    }

    // --- Xóa ---
    await cartItem.destroy();
    return { message: "Đã xóa sản phẩm khỏi giỏ hàng" };
};

/**
 * 4. Lấy chi tiết giỏ hàng và tính tổng tiền
 */
export const getCartDetails = async (userId) => {
    try {
        const cart = await getOrCreateCart(userId);

        // Lấy tất cả item trong giỏ, đồng thời lấy thông tin của
        // ProductVariant (biến thể) và Product (sản phẩm gốc)
        const cartItems = await CartItem.findAll({
            where: { cart_id: cart.id },
            include: [
                {
                    model: ProductVariant,
                    as: "product_variant",
                    required: false, // LEFT JOIN để không bỏ qua items nếu variant bị xóa
                    attributes: [
                        "id",
                        "product_id",
                        "color",
                        "size",
                        "sku",
                        "stock_quantity",
                        "image_url",
                    ],
                    include: [
                        {
                            model: Product,
                            as: "product",
                            required: false, // LEFT JOIN để không bỏ qua items nếu product bị xóa
                            attributes: [
                                "id",
                                "name",
                                "slug",
                                "base_price",
                                "sale_price",
                            ],
                        },
                    ],
                },
            ],
            order: [[col("cart_items.added_at"), "DESC"]], // Sắp xếp theo ngày thêm, chỉ định rõ table name
        });

    let subtotal_amount = 0;
    let items = [];

    for (const item of cartItems) {
        const variant = item.product_variant;
        // Nếu vì lý do nào đó sản phẩm/biến thể không còn, bỏ qua
        if (!variant || !variant.product) {
            continue;
        }

        const product = variant.product;

        // Tính giá cuối cùng của 1 sản phẩm (sử dụng product price, không phải variant price)
        const final_price = parseFloat(product.sale_price || product.base_price || 0);

        // Tính tổng tiền của dòng này
        const line_total = Number((final_price * item.quantity).toFixed(2));

        // Cộng dồn vào tổng tạm tính
        subtotal_amount += line_total;

        // Thêm vào mảng items để trả về
        // Đồng nhất format với product service và thêm product_id để link về product detail
        items.push({
            cart_item_id: item.id,
            quantity: item.quantity,
            product_id: product.id, // Thêm product_id để frontend có thể link về product detail
            product_variant_id: variant.id,
            product_name: product.name || "Unknown Product",
            product_slug: product.slug || null, // Thêm slug để dễ dàng tạo URL
            sku: variant.sku || null,
            color: variant.color || null,
            size: variant.size || null,
            image_url: variant.image_url || null,
            unit_price: final_price,
            line_total: line_total,
            stock_quantity: variant.stock_quantity || 0,
        });
    }

    // === 4. TÍNH TỔNG GIÁ TẠM TÍNH ===
    const discount_amount = 0; // Tạm thời không có discount
    const total_amount = subtotal_amount; // Tổng = subtotal (chưa có discount)

        return {
            id: cart.id,
            user_id: cart.user_id,
            items: items,
            subtotal_amount: parseFloat(subtotal_amount.toFixed(2)),
            discount_amount: parseFloat(discount_amount.toFixed(2)),
            total_amount: parseFloat(total_amount.toFixed(2)),
            applied_promotion_code: null, // Tạm thời không có promotion
        };
    } catch (error) {
        console.error("Error in getCartDetails:", error);
        throw error;
    }
};

/**
 * Dọn dẹp giỏ hàng bị bỏ quên theo số ngày, sử dụng cascade delete trên Cart -> CartItem.
 * Trả về số cart và cart item bị xóa (ước tính dựa trên count trước khi xóa).
 */
export const cleanupAbandonedCarts = async (days = 30) => {
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const staleCarts = await Cart.findAll({
        where: { updated_at: { [Op.lt]: cutoff } },
        attributes: ["id"],
        raw: true,
    });

    if (!staleCarts.length) {
        console.info(`[cleanupAbandonedCarts] No carts older than ${days} days.`);
        return { cartsDeleted: 0, cartItemsDeleted: 0 };
    }

    const cartIds = staleCarts.map((c) => c.id);
    const cartItemsDeleted = await CartItem.count({ where: { cart_id: { [Op.in]: cartIds } } });
    const cartsDeleted = await Cart.destroy({
        where: { id: { [Op.in]: cartIds } },
    });

    console.info(`[cleanupAbandonedCarts] Deleted ${cartsDeleted} carts and ~${cartItemsDeleted} items (cascade).`);
    return { cartsDeleted, cartItemsDeleted };
};

/**
 * Dọn dẹp CartItem mồ côi (cart_id null hoặc không tồn tại), độc lập với Cart.
 */
export const cleanupOrphanedCartItems = async () => {
    const existingCarts = await Cart.findAll({ attributes: ["id"], raw: true });
    const cartIds = existingCarts.map((c) => c.id);

    const orphanCondition = cartIds.length
        ? { [Op.or]: [{ cart_id: null }, { cart_id: { [Op.notIn]: cartIds } }] }
        : { cart_id: { [Op.not]: null } }; // nếu không có cart nào, xóa tất cả item có cart_id khác null

    const deleted = await CartItem.destroy({
        where: orphanCondition,
    });

    console.info(`[cleanupOrphanedCartItems] Deleted ${deleted} orphaned cart items.`);
    return deleted;
};
