import express from "express";
import { 
    getDashboardStatsController, 
    getRevenueController, 
    getRecentOrdersController, 
    getBestSellersController,
    // Legacy controllers for backward compatibility
    getRevenueStatsController, 
    getTopProductsController 
} from "../../controllers/admin/statsController.js";

const router = express.Router();

/**
 * @swagger
 * /admin/dashboard/stats:
 *   get:
 *     summary: Dashboard KPIs overview (Admin)
 *     tags: [Admin, Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Aggregated KPI metrics for the admin dashboard
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
 */
router.get("/dashboard/stats", getDashboardStatsController);

/**
 * @swagger
 * /admin/dashboard/revenue:
 *   get:
 *     summary: Revenue stats for charts (Admin)
 *     tags: [Admin, Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date filter
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *         description: End date filter
 *       - in: query
 *         name: groupBy
 *         schema:
 *           type: string
 *           enum: [day, month]
 *           default: day
 *         description: Group revenue by day or month
 *     responses:
 *       200:
 *         description: Revenue data grouped for dashboard charts
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
 */
router.get("/dashboard/revenue", getRevenueController);

/**
 * @swagger
 * /admin/dashboard/recent-orders:
 *   get:
 *     summary: Recent orders widget data (Admin)
 *     tags: [Admin, Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of recent orders to return
 *     responses:
 *       200:
 *         description: Recent orders list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 */
router.get("/dashboard/recent-orders", getRecentOrdersController);

/**
 * @swagger
 * /admin/dashboard/best-sellers:
 *   get:
 *     summary: Top best seller products (Admin)
 *     tags: [Admin, Dashboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of products to return
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Best seller list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 */
router.get("/dashboard/best-sellers", getBestSellersController);

// Legacy endpoints for backward compatibility
/**
 * @swagger
 * /admin/stats/revenue:
 *   get:
 *     summary: Lấy thống kê doanh thu (Admin)
 *     tags: [Admin, Stats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Thống kê doanh thu
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
 */
router.get("/stats/revenue", getRevenueStatsController);

/**
 * @swagger
 * /admin/stats/top-products:
 *   get:
 *     summary: Lấy top sản phẩm bán chạy (Admin)
 *     tags: [Admin, Stats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Danh sách top sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 message:
 *                   type: string
 */
router.get("/stats/top-products", getTopProductsController);

export default router;
