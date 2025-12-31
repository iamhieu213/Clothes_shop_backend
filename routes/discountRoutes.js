import express from "express";
import discountController from "../controllers/discountController.js";

const router = express.Router();

// Public endpoints - no authentication required
/**
 * @swagger
 * /discounts/active:
 *   get:
 *     summary: Lấy danh sách khuyến mãi đang hoạt động
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: Danh sách khuyến mãi
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/active", discountController.getActive);

/**
 * @swagger
 * /discounts/validate/{code}:
 *   post:
 *     summary: Kiểm tra mã khuyến mãi
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product_variant_id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Kết quả kiểm tra mã
 *       500:
 *         description: Lỗi hệ thống
 */
router.post("/validate/:code", discountController.validateCode);

/**
 * @swagger
 * /discounts/apply:
 *   post:
 *     summary: Áp dụng mã khuyến mãi cho đơn nháp
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               orderDraft:
 *                 type: object
 *                 properties:
 *                   subtotal:
 *                     type: number
 *                   shipping_fee:
 *                     type: number
 *     responses:
 *       200:
 *         description: Áp dụng mã thành công
 *       500:
 *         description: Lỗi hệ thống
 */
router.post("/apply", discountController.apply);

export default router;
