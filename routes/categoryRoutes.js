import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryBySlug,
  updateCategory,
} from "../controllers/categoryController.js";

const router = Router();

// Public category endpoints
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lấy danh sách danh mục (cây danh mục)
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Danh sách danh mục
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/categories", getCategories);

/**
 * @swagger
 * /categories/{slug}:
 *   get:
 *     summary: Lấy danh mục theo slug
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh mục chi tiết
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.get("/categories/:slug", getCategoryBySlug);

// Admin category management
/**
 * @swagger
 * /admin/categories:
 *   post:
 *     summary: Tạo danh mục mới (Admin)
 *     tags: [Admin, Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên danh mục (bắt buộc)
 *                 example: "Áo Khoác"
 *               slug:
 *                 type: string
 *                 description: Slug cho URL (tùy chọn - tự động tạo từ tên nếu không cung cấp)
 *                 example: "ao-khoac"
 *               parent_id:
 *                 type: integer
 *                 description: ID danh mục cha (tùy chọn)
 *                 example: 13
 *               description:
 *                 type: string
 *                 description: Mô tả danh mục (tùy chọn)
 *                 example: "Các loại áo khoác"
 *               image_url:
 *                 type: string
 *                 description: URL hình ảnh (tùy chọn)
 *                 example: "https://example.com/image.jpg"
 *     responses:
 *       201:
 *         description: Tạo danh mục thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       403:
 *         description: Access denied
 *       409:
 *         description: Slug đã tồn tại
 */
router.post("/admin/categories", authenticateToken, isAdmin, createCategory);

/**
 * @swagger
 * /admin/categories/{id}:
 *   put:
 *     summary: Cập nhật danh mục (Admin)
 *     tags: [Admin, Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID danh mục cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên danh mục (tự động tạo slug mới nếu thay đổi)
 *                 example: "Áo Khoác"
 *               slug:
 *                 type: string
 *                 description: Slug cho URL (tùy chọn - giữ nguyên nếu không cung cấp)
 *                 example: "ao-khoac"
 *               parent_id:
 *                 type: integer
 *                 description: ID danh mục cha
 *                 example: 13
 *               description:
 *                 type: string
 *                 description: Mô tả danh mục
 *                 example: "Các loại áo khoác"
 *               image_url:
 *                 type: string
 *                 description: URL hình ảnh
 *                 example: "https://example.com/image.jpg"
 *     responses:
 *       200:
 *         description: Cập nhật danh mục thành công
 *       404:
 *         description: Không tìm thấy danh mục
 *       403:
 *         description: Access denied
 *       409:
 *         description: Slug đã tồn tại
 */
router.put("/admin/categories/:id", authenticateToken, isAdmin, updateCategory);

/**
 * @swagger
 * /admin/categories/{id}:
 *   delete:
 *     summary: Xóa danh mục (Admin)
 *     tags: [Admin, Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa danh mục thành công
 *       404:
 *         description: Không tìm thấy danh mục
 *       403:
 *         description: Access denied
 */
router.delete("/admin/categories/:id", authenticateToken, isAdmin, deleteCategory);

export default router;
