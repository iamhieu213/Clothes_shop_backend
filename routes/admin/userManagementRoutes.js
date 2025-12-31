import express from "express";
import { 
    listUsers,
    getUserDetail,
    updateUser,
    deleteUser
} from "../../controllers/admin/userManagementController.js";

const router = express.Router();

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: List users with pagination (Admin)
 *     tags: [Admin, Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Filter by name or email
 *     responses:
 *       200:
 *         description: Users list with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     users:
 *                       type: array
 *                       items:
 *                         type: object
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                 message:
 *                   type: string
 *       403:
 *         description: Access denied
 */
router.get("/", listUsers);

/**
 * @swagger
 * /admin/users/{id}:
 *   get:
 *     summary: Get user details by ID (Admin)
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
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 */
router.get("/:id", getUserDetail);

/**
 * @swagger
 * /admin/users/{id}:
 *   patch:
 *     summary: Update user role or status (Admin)
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
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [customer, admin, super_admin]
 *               is_locked:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 */
router.patch("/:id", updateUser);

/**
 * @swagger
 * /admin/users/{id}:
 *   delete:
 *     summary: Deactivate user (Admin)
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
 *         description: User deactivated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 */
router.delete("/:id", deleteUser);

/**
 * @swagger
 * /admin/users/{id}/role:
 *   patch:
 *     summary: Update user role (Admin)
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
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [customer, admin, super_admin]
 *     responses:
 *       200:
 *         description: User role updated successfully
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 */
router.patch("/:id/role", async (req, res) => {
  const { role } = req.body;
  return updateUser(req, res, { role });
});

/**
 * @swagger
 * /admin/users/{id}/lock:
 *   patch:
 *     summary: Lock/unlock user (Admin)
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
 *             properties:
 *               is_locked:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User lock status updated successfully
 *       404:
 *         description: User not found
 *       403:
 *         description: Access denied
 */
router.patch("/:id/lock", async (req, res) => {
  const { is_locked } = req.body;
  return updateUser(req, res, { is_locked });
});

export default router;
