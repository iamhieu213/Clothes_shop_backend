import express from "express";
import * as userController from "../../controllers/admin/userController.js";
import { authenticateToken } from "../../middlewares/auth.js";
import { isAdmin } from "../../middlewares/authMiddleware.js"; 

const router = express.Router();

// BẢO VỆ TOÀN BỘ ROUTE: Phải đăng nhập + Phải là Admin
router.use(authenticateToken, isAdmin);

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Xem danh sách tất cả users (Admin only)
 *     tags: [Admin, Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách users
 *       403:
 *         description: Không có quyền truy cập
 */
router.get("/", userController.getUsers);

/**
 * @swagger
 * /admin/users/{id}/lock:
 *   patch:
 *     summary: Khóa/Mở khóa user (Admin only)
 *     tags: [Admin, Users]
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
 *         description: Cập nhật trạng thái khóa thành công
 *       403:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy user
 */
router.patch("/:id/lock", userController.toggleLock);

/**
 * @swagger
 * /admin/users/{id}/role:
 *   patch:
 *     summary: Phân quyền user (Admin only)
 *     tags: [Admin, Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - role
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [USER, ADMIN]
 *     responses:
 *       200:
 *         description: Cập nhật quyền thành công
 *       403:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy user
 */
router.patch("/:id/role", userController.setRole);

/**
 * @swagger
 * /admin/users/{id}:
 *   delete:
 *     summary: Xóa user (Admin only)
 *     tags: [Admin, Users]
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
 *         description: Xóa user thành công
 *       403:
 *         description: Không có quyền truy cập
 *       404:
 *         description: Không tìm thấy user
 */
router.delete("/:id", userController.deleteUser);

export default router;