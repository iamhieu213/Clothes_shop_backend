import express from "express";
import multer from "multer";
import { authenticateToken } from "../middlewares/auth.js";
import {
  listProductReviewsController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
} from "../controllers/user/reviewController.js";

const router = express.Router();
const uploadDir = typeof process.env.VERCEL !== "undefined" ? "/tmp" : "tmp/";
const upload = multer({ dest: uploadDir });

/**
 * @swagger
 * /reviews/product/{productId}:
 *   get:
 *     summary: Lấy danh sách đánh giá theo sản phẩm
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 6
 *     responses:
 *       200:
 *         description: Danh sách đánh giá
 *       404:
 *         description: Không tìm thấy sản phẩm
 */
router.get("/product/:productId", listProductReviewsController);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Tạo đánh giá sản phẩm
 *     tags: [Reviews]
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
 *               - rating
 *             properties:
 *               productId:
 *                 type: integer
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comment:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Tạo đánh giá thành công
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
router.post("/", authenticateToken, upload.array("images", 5), createReviewController);

/**
 * @swagger
 * /reviews/{reviewId}:
 *   patch:
 *     summary: Cập nhật đánh giá sản phẩm
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comment:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Cập nhật đánh giá thành công
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Chỉ có thể cập nhật đánh giá của chính mình
 *       404:
 *         description: Không tìm thấy đánh giá
 */
router.patch("/:reviewId", authenticateToken, upload.array("images", 5), updateReviewController);

/**
 * @swagger
 * /reviews/{reviewId}:
 *   delete:
 *     summary: Xóa đánh giá sản phẩm
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa đánh giá thành công
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Chỉ có thể xóa đánh giá của chính mình
 *       404:
 *         description: Không tìm thấy đánh giá
 */
router.delete("/:reviewId", authenticateToken, deleteReviewController);

export default router;
