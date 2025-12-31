import * as cartService from '../services/cartService.js';
import { sendError, sendSuccess } from "./controllerUtils.js";

/**
 * Lấy chi tiết giỏ hàng
 */
export const getCart = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new Error("Vui lòng đăng nhập để xem giỏ hàng");
        }
        const cart = await cartService.getCartDetails(userId);

        sendSuccess(res, {
            message: "Lấy giỏ hàng thành công",
            cart,
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Thêm sản phẩm vào giỏ
 */
export const addItem = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new Error("Vui lòng đăng nhập để thêm vào giỏ hàng");
        }
        const { productVariantId, productId, quantity } = req.body;

        const item = await cartService.addProductToCart(
            userId,
            productVariantId,
            quantity,
            productId
        );

        sendSuccess(res, {
            status: 201, // Created
            message: "Thêm sản phẩm thành công",
            item,
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Cập nhật số lượng sản phẩm
 */
export const updateItem = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new Error("Vui lòng đăng nhập để cập nhật giỏ hàng");
        }
        const { cartItemId } = req.params; // Lấy ID item từ URL
        const { quantity, productVariantId } = req.body; // Lấy số lượng/biến thể mới từ body

        const updatedItem = await cartService.updateCartItem(
            userId,
            cartItemId,
            { quantity, productVariantId }
        );

        sendSuccess(res, {
            message: "Cập nhật giỏ hàng thành công",
            item: updatedItem,
        });
    } catch (error) {
        sendError(res, error);
    }
};

/**
 * Xóa sản phẩm khỏi giỏ
 */
export const removeItem = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            throw new Error("Vui lòng đăng nhập để xóa sản phẩm trong giỏ");
        }
        const { cartItemId } = req.params; // Lấy ID item từ URL

        await cartService.removeItemFromCart(userId, cartItemId);

        sendSuccess(res, { message: "Xóa sản phẩm thành công" });
    } catch (error) {
        sendError(res, error);
    }
};
