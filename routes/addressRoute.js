import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { addAddress, getMyAddresses, deleteAddress } from '../controllers/addressController.js';

const router = express.Router();

// Tất cả API này đều cần đăng nhập
router.use(authenticateToken);

/**
 * @swagger
 * /addresses:
 *   get:
 *     summary: Lấy danh sách địa chỉ của user
 *     tags: [Addresses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách địa chỉ
 *       401:
 *         description: Unauthorized
 */
router.get('/', getMyAddresses);

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Thêm địa chỉ mới
 *     tags: [Addresses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - phone
 *               - province_id
 *               - district_id
 *               - ward_id
 *               - addressDetail
 *             properties:
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *               province_id:
 *                 type: string
 *               district_id:
 *                 type: string
 *               ward_id:
 *                 type: string
 *               addressDetail:
 *                 type: string
 *               isDefault:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Thêm địa chỉ thành công
 *       400:
 *         description: Lỗi thêm địa chỉ
 */
router.post('/', addAddress);

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Xóa địa chỉ
 *     tags: [Addresses]
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
 *         description: Xóa địa chỉ thành công
 *       404:
 *         description: Không tìm thấy địa chỉ
 */
router.delete('/:id', deleteAddress);

export default router;