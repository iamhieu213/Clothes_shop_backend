import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";
import { validateCheckoutController } from "../controllers/checkoutController.js";

const router = Router();

/**
 * @swagger
 * /checkout/validate:
 *   post:
 *     summary: Kiểm tra dữ liệu checkout trước khi đặt hàng
 *     tags: [Checkout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shippingAddressId:
 *                 type: integer
 *                 description: ID địa chỉ lưu trong tài khoản
 *               shippingAddress:
 *                 type: object
 *                 description: Địa chỉ giao hàng thủ công
 *               paymentMethod:
 *                 type: string
 *               promotionCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dữ liệu checkout hợp lệ
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
router.post("/validate", validateCheckoutController);

export default router;
