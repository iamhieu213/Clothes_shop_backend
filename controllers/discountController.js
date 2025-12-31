import { Discount } from "../models/index.js";
import * as discountService from "../services/discountService.js";

export const getActive = async (req, res) => {
  try {
    const discounts = await discountService.getActiveDiscounts();
    return res.json({ success: true, data: discounts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const validateCode = async (req, res) => {
  try {
    const { code } = req.params;
    const { cart_items } = req.body; // Get cart_items from request body
    const result = await discountService.validateCode(code, cart_items || []);
    return res.json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const apply = async (req, res) => {
  try {
    const { code, orderDraft } = req.body;
    const result = await discountService.applyDiscount(orderDraft || {}, code);

    // If discount not applied, return error status with message
    if (!result.applied && result.reason) {
      return res.status(400).json({
        success: false,
        data: result,
        message: result.message || discountService.getErrorMessage(result.reason)
      });
    }

    return res.json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Admin CRUD
export const listDiscounts = async (req, res) => {
  try {
    const filters = {};
    const { Op } = await import("sequelize");

    if (req.query.apply_type) filters.apply_type = req.query.apply_type;
    if (typeof req.query.is_active === 'string') {
      filters.is_active = req.query.is_active === 'true';
    } else if (typeof req.query.is_active === 'boolean') {
      filters.is_active = req.query.is_active;
    }

    // Handle status filter (active/expired/all)
    if (req.query.status && req.query.status !== 'all') {
      const now = new Date();
      if (req.query.status === 'active') {
        filters.is_active = true;
        filters.end_date = { [Op.gte]: now };
      } else if (req.query.status === 'expired') {
        filters[Op.or] = [
          { is_active: false },
          { end_date: { [Op.lt]: now } }
        ];
      }
    }

    // Handle search filter
    const searchCondition = {};
    if (req.query.search) {
      searchCondition[Op.or] = [
        { name: { [Op.iLike]: `%${req.query.search}%` } },
        { code: { [Op.iLike]: `%${req.query.search}%` } },
        { description: { [Op.iLike]: `%${req.query.search}%` } }
      ];
    }

    const whereClause = { ...filters, ...searchCondition };

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows: discounts } = await Discount.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order: [['created_at', 'DESC']]
    });

    return res.json({
      success: true,
      data: {
        items: discounts,
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit)
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createDiscount = async (req, res) => {
  try {
    const payload = req.body;
    const created = await Discount.create(payload);
    return res.status(201).json({ success: true, data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateDiscount = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const d = await Discount.findByPk(id);
    if (!d) return res.status(404).json({ success: false, message: 'Not found' });
    await d.update(payload);
    return res.json({ success: true, data: d });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteDiscount = async (req, res) => {
  try {
    const id = req.params.id;
    const d = await Discount.findByPk(id);
    if (!d) return res.status(404).json({ success: false, message: 'Not found' });
    await d.destroy();
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default {
  getActive,
  validateCode,
  apply,
  listDiscounts,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
