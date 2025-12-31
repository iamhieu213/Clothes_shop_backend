import express from "express";
import * as wishlistController from "../../controllers/user/wishlistController.js";

const router = express.Router();

/**
 * @swagger
 * /wishlist/add:
 *   post:
 *     summary: Thêm sản phẩm vào wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *             properties:
 *               productId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Thêm vào wishlist thành công
 *       400:
 *         description: Lỗi thêm vào wishlist
 */
router.post("/add", wishlistController.addToWishlist);

/**
 * @swagger
 * /wishlist/{userId}:
 *   get:
 *     summary: Lấy danh sách wishlist của user
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách wishlist
 *       401:
 *         description: Unauthorized
 */
router.get("/:userId", wishlistController.getWishlistByUser);

/**
 * @swagger
 * /wishlist/remove:
 *   delete:
 *     summary: Xóa sản phẩm khỏi wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *             properties:
 *               productId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Xóa khỏi wishlist thành công
 *       404:
 *         description: Không tìm thấy sản phẩm trong wishlist
 */
router.delete("/remove", wishlistController.removeFromWishlist);

export default router;