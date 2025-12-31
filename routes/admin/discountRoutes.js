import express from "express";
import discountController from "../../controllers/discountController.js";
import { Discount } from "../../models/index.js";

const router = express.Router();

/**
 * @swagger
 * /admin/discounts/analytics/kpi:
 *   get:
 *     summary: Get discount analytics KPI (Admin)
 *     tags: [Admin, Discounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: KPI data for discount analytics
 *       403:
 *         description: Access denied
 */
router.get("/analytics/kpi", async (req, res) => {
  try {
    const now = new Date();

    // Get all discounts
    const allDiscounts = await Discount.findAll();

    // Calculate KPIs
    const activeCoupons = allDiscounts.filter(d => d.is_active && (!d.end_date || new Date(d.end_date) >= now)).length;
    const expiredCoupons = allDiscounts.filter(d => !d.is_active || (d.end_date && new Date(d.end_date) < now)).length;

    const totalRedemptions = allDiscounts.reduce((sum, d) => sum + (d.usage_count || 0), 0);
    const totalUsageLimit = allDiscounts.reduce((sum, d) => sum + (d.usage_limit || 0), 0);

    // Calculate total revenue impact (estimated)
    let totalRevenueImpact = 0;
    for (const d of allDiscounts) {
      const value = parseFloat(d.discount_value) || 0;
      const count = d.usage_count || 0;
      if (d.discount_type === 'percentage') {
        // Assuming average order value of 500000 VND for percentage calculation
        totalRevenueImpact += (500000 * value / 100) * count;
      } else if (d.discount_type === 'fixed_amount') {
        totalRevenueImpact += value * count;
      }
      // free_shipping doesn't directly impact revenue in this simple model
    }

    const redemptionsProgress = totalUsageLimit > 0 ? {
      current: totalRedemptions,
      total: totalUsageLimit,
      percentage: (totalRedemptions / totalUsageLimit) * 100,
    } : {
      current: totalRedemptions,
      total: totalRedemptions || 1,
      percentage: totalRedemptions > 0 ? 100 : 0,
    };

    const averageDiscountValue = allDiscounts.length > 0
      ? totalRevenueImpact / Math.max(totalRedemptions, 1)
      : 0;

    const kpiData = {
      totalRevenueImpact,
      totalRedemptions,
      activeCoupons,
      expiredCoupons,
      averageDiscountValue,
      redemptionsProgress,
    };

    return res.json({ success: true, data: kpiData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /admin/discounts:
 *   get:
 *     summary: Danh sách khuyến mãi (Admin)
 *     tags: [Admin, Discounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: apply_type
 *         schema:
 *           type: string
 *       - in: query
 *         name: is_active
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, expired, all]
 *     responses:
 *       200:
 *         description: Danh sách khuyến mãi
 *       403:
 *         description: Access denied
 */
router.get("/", discountController.listDiscounts);

/**
 * @swagger
 * /admin/discounts:
 *   post:
 *     summary: Tạo khuyến mãi mới (Admin)
 *     tags: [Admin, Discounts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               description:
 *                 type: string
 *               discount_type:
 *                 type: string
 *                 enum: [percentage, fixed_amount, free_shipping]
 *               discount_value:
 *                 type: number
 *               apply_type:
 *                 type: string
 *                 enum: [auto_apply, code]
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Tạo khuyến mãi thành công
 *       403:
 *         description: Access denied
 */
router.post("/", discountController.createDiscount);

/**
 * @swagger
 * /admin/discounts/{id}:
 *   get:
 *     summary: Lấy chi tiết khuyến mãi (Admin)
 *     tags: [Admin, Discounts]
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
 *         description: Chi tiết khuyến mãi
 *       404:
 *         description: Không tìm thấy khuyến mãi
 *       403:
 *         description: Access denied
 */
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const discount = await Discount.findByPk(id);
    if (!discount) return res.status(404).json({ success: false, message: 'Not found' });
    return res.json({ success: true, data: discount });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /admin/discounts/{id}:
 *   put:
 *     summary: Cập nhật khuyến mãi (Admin)
 *     tags: [Admin, Discounts]
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
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               description:
 *                 type: string
 *               discount_type:
 *                 type: string
 *                 enum: [percentage, fixed_amount, free_shipping]
 *               discount_value:
 *                 type: number
 *               apply_type:
 *                 type: string
 *                 enum: [auto_apply, code]
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cập nhật khuyến mãi thành công
 *       404:
 *         description: Không tìm thấy khuyến mãi
 *       403:
 *         description: Access denied
 */
router.put("/:id", discountController.updateDiscount);

/**
 * @swagger
 * /admin/discounts/{id}:
 *   patch:
 *     summary: Cập nhật trạng thái khuyến mãi (Admin)
 *     tags: [Admin, Discounts]
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
 *               is_active:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy khuyến mãi
 *       403:
 *         description: Access denied
 */
router.patch("/:id", discountController.updateDiscount);

/**
 * @swagger
 * /admin/discounts/{id}:
 *   delete:
 *     summary: Xóa khuyến mãi (Admin)
 *     tags: [Admin, Discounts]
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
 *         description: Xóa khuyến mãi thành công
 *       404:
 *         description: Không tìm thấy khuyến mãi
 *       403:
 *         description: Access denied
 */
router.delete("/:id", discountController.deleteDiscount);

export default router;
