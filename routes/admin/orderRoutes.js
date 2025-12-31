import express from "express";
import { 
    listOrdersController,
    getOrderDetailController,
    updateOrderStatusController,
    refundOrderController
} from "../../controllers/admin/orderController.js";

const router = express.Router();

/**
 * @swagger
 * /admin/orders:
 *   get:
 *     summary: List orders with filters (Admin)
 *     tags: [Admin, Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number (starting at 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Page size (aka limit)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, confirmed, shipping, completed, canceled]
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: customer
 *         schema:
 *           type: string
 *         description: Filter by customer name or email
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [created_at, total_amount, status, id]
 *       - in: query
 *         name: sortDir
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           default: DESC
 *     responses:
 *       200:
 *         description: Orders list with pagination
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
 *                     items:
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
 *       403:
 *         description: Access denied
 */
router.get("/", listOrdersController);

/**
 * @swagger
 * /admin/orders/{id}:
 *   get:
 *     summary: Get order details with items (Admin)
 *     tags: [Admin, Orders]
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
 *         description: Order details with items, user and shipping info
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
 *         description: Order not found
 *       403:
 *         description: Access denied
 */
router.get("/:id", getOrderDetailController);

/**
 * @swagger
 * /admin/orders/{id}:
 *   patch:
 *     summary: Update order status (Admin)
 *     tags: [Admin, Orders]
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
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, confirmed, shipping, completed, canceled]
 *     responses:
 *       200:
 *         description: Order status updated successfully
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
 *         description: Order not found
 *       403:
 *         description: Access denied
 */
router.patch("/:id", updateOrderStatusController);

/**
 * @swagger
 * /admin/orders/{id}/refund:
 *   post:
 *     summary: Process refund/cancellation (Admin)
 *     tags: [Admin, Orders]
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
 *               - reason
 *               - amount
 *             properties:
 *               reason:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Refund processed successfully
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
 *         description: Order not found
 *       403:
 *         description: Access denied
 */
router.post("/:id/refund", refundOrderController);

export default router;
