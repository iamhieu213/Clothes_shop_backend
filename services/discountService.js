import { Op } from "sequelize";
import {
  Discount,
  ProductVariant,
  Product,
} from "../models/index.js";

function now() {
  return new Date();
}

/**
 * Validate if cart products are eligible for the discount based on
 * applicable_to and target_ids criteria
 *
 * @param {Object} discount - Discount model instance
 * @param {Array} cartItems - Array of cart items with product_variant_id
 * @returns {Object} - { eligible: boolean, reason?: string, message?: string, matchingAmount?: number }
 */
async function validateProductEligibility(discount, cartItems = []) {
  // If no cart items provided, skip validation (backward compatibility)
  if (!cartItems || cartItems.length === 0) {
    return { eligible: true };
  }

  // If 'all' or null - applies to all products
  if (!discount.applicable_to || discount.applicable_to === 'all') {
    return { eligible: true };
  }

  const targetIds = discount.target_ids || [];
  if (targetIds.length === 0) {
    return { eligible: true }; // No targets specified = applies to all
  }

  // Extract product variant IDs from cart items
  const productVariantIds = cartItems
    .map(item => item.product_variant_id || item.productVariantId)
    .filter(id => id); // Remove null/undefined

  if (productVariantIds.length === 0) {
    return { eligible: false, reason: "no_products", message: "Không có sản phẩm nào trong giỏ hàng" };
  }

  // Fetch all variants with their products
  const variants = await ProductVariant.findAll({
    where: { id: { [Op.in]: productVariantIds } },
    include: [
      {
        model: Product,
        as: 'product',
        attributes: ['id', 'name', 'category_id', 'brand']
      }
    ]
  });

  if (!variants || variants.length === 0) {
    return { eligible: false, reason: "products_not_found", message: "Không tìm thấy thông tin sản phẩm" };
  }

  // Check each variant against the discount criteria
  let matchingAmount = 0;
  const targetIdSet = new Set(targetIds);

  for (const variant of variants) {
    if (!variant.product) continue;

    const product = variant.product;
    const itemQuantity = cartItems.find(
      i => (i.product_variant_id || i.productVariantId) === variant.id
    )?.quantity || 1;

    let isMatch = false;

    switch (discount.applicable_to) {
      case 'product':
        // Check if product ID is in target_ids
        isMatch = targetIdSet.has(product.id);
        break;

      case 'category':
        // Check if category_id is in target_ids
        isMatch = product.category_id && targetIdSet.has(product.category_id);
        break;

      case 'brand':
        // Check if brand name is in target_ids (stored as strings)
        isMatch = product.brand && targetIdSet.includes(product.brand);
        break;

      default:
        isMatch = true;
    }

    if (isMatch) {
      // Calculate the amount for matching items only using product-level pricing
      const price = parseFloat(product.sale_price || product.base_price || 0);
      matchingAmount += price * itemQuantity;
    }
  }

  // If no products match, discount is not applicable
  if (matchingAmount === 0) {
    let message = "Mã giảm giá không áp dụng cho sản phẩm này";
    switch (discount.applicable_to) {
      case 'category':
        message = "Mã giảm giá chỉ áp dụng cho danh mục sản phẩm cụ thể";
        break;
      case 'brand':
        message = "Mã giảm giá chỉ áp dụng cho thương hiệu cụ thể";
        break;
      case 'product':
        message = "Mã giảm giá chỉ áp dụng cho sản phẩm cụ thể";
        break;
    }
    return {
      eligible: false,
      reason: "no_eligible_products",
      message
    };
  }

  // Return the matching amount for percentage discount calculation
  return { eligible: true, matchingAmount };
}

function calculateDiscountAmount(discount, subtotal = 0, shippingFee = 0, matchingAmount = null) {
  if (!discount) return 0;
  const type = discount.discount_type;
  const value = parseFloat(discount.discount_value || 0);
  let amount = 0;

  // Use matchingAmount for percentage discounts if products are filtered
  const baseAmount = matchingAmount !== null ? matchingAmount : subtotal;

  if (type === "percentage") {
    amount = (baseAmount * value) / 100;
    if (discount.max_discount_amount) {
      amount = Math.min(amount, parseFloat(discount.max_discount_amount));
    }
  } else if (type === "fixed_amount") {
    amount = value;
  } else if (type === "free_shipping") {
    amount = shippingFee || 0;
  }

  return Math.max(0, parseFloat(amount.toFixed(2)));
}

export async function getActiveDiscounts() {
  const nowDate = now();
  const discounts = await Discount.findAll({
    where: {
      is_active: true,
      start_date: { [Op.lte]: nowDate },
      end_date: { [Op.gte]: nowDate },
      usage_count: { [Op.lt]: Discount.sequelize.literal("COALESCE(usage_limit, 9999999)") },
    },
  });
  return discounts;
}

export async function validateCode(code, cartItems = []) {
  if (!code) return { valid: false, reason: "empty" };
  const nowDate = now();
  const discount = await Discount.findOne({ where: { code, is_active: true } });
  if (!discount) return { valid: false, reason: "not_found" };
  if (discount.start_date && discount.start_date > nowDate) return { valid: false, reason: "not_started" };
  if (discount.end_date && discount.end_date < nowDate) return { valid: false, reason: "expired" };
  if (discount.usage_limit && discount.usage_count >= discount.usage_limit) return { valid: false, reason: "exhausted" };

  // NEW: Validate product eligibility
  const eligibility = await validateProductEligibility(discount, cartItems);
  if (!eligibility.eligible) {
    return {
      valid: false,
      reason: eligibility.reason,
      message: eligibility.message,
      discount
    };
  }

  return { valid: true, discount, eligibility };
}

export async function getBestAutoDiscount(orderDraft) {
  const subtotal = parseFloat(orderDraft.subtotal || 0);
  const shippingFee = parseFloat(orderDraft.shipping_fee || 0);
  const cartItems = orderDraft.cart_items || [];
  const nowDate = now();

  const discounts = await Discount.findAll({
    where: {
      is_active: true,
      apply_type: "auto_apply",
      start_date: { [Op.lte]: nowDate },
      end_date: { [Op.gte]: nowDate },
      usage_count: { [Op.lt]: Discount.sequelize.literal("COALESCE(usage_limit, 9999999)") },
    },
  });

  let best = null;
  let bestAmount = 0;

  for (const d of discounts) {
    // Basic min order check
    if (d.min_order_value && subtotal < parseFloat(d.min_order_value)) continue;

    // NEW: Check product eligibility
    const eligibility = await validateProductEligibility(d, cartItems);
    if (!eligibility.eligible) continue; // Skip this discount if products don't match

    // Calculate discount using matching amount if available
    const amount = calculateDiscountAmount(d, subtotal, shippingFee, eligibility.matchingAmount);
    if (amount > bestAmount) {
      bestAmount = amount;
      best = d;
    }
  }

  return { discount: best, amount: bestAmount };
}

export async function applyDiscount(orderDraft, code) {
  let subtotal = parseFloat(orderDraft.subtotal || 0);
  const shippingFee = parseFloat(orderDraft.shipping_fee || 0);
  const cartItems = orderDraft.cart_items || [];

  // Fallback: Calculate subtotal from cart items if not provided
  if (subtotal === 0 && cartItems.length > 0) {
    // Fetch product variants to get prices
    const variantIds = cartItems.map(item => item.product_variant_id || item.productVariantId).filter(id => id);
    if (variantIds.length > 0) {
      try {
        const variants = await ProductVariant.findAll({
          where: { id: { [Op.in]: variantIds } },
          include: [{ model: Product, as: 'product', attributes: ['base_price', 'sale_price'] }],
          attributes: ['id', 'product_id']
        });

        for (const item of cartItems) {
          const variant = variants.find(v => v.id === (item.product_variant_id || item.productVariantId));
          if (variant) {
            // Use product-level pricing (base_price or sale_price)
            const price = parseFloat(variant.product?.sale_price || variant.product?.base_price || 0);
            subtotal += price * (item.quantity || 1);
          }
        }
      } catch (error) {
        console.error('Error calculating subtotal from cart items:', error);
        // Keep subtotal as 0 if calculation fails
      }
    }
  }

  if (code) {
    const res = await validateCode(code, cartItems);
    if (!res.valid) {
      return {
        applied: false,
        reason: res.reason,
        message: res.message || getErrorMessage(res.reason)
      };
    }

    // Use matchingAmount from eligibility if available
    const matchingAmount = res.eligibility?.matchingAmount || null;
    const amount = calculateDiscountAmount(res.discount, subtotal, shippingFee, matchingAmount);
    const snapshot = {
      discount_code_snapshot: res.discount.code || null,
      discount_type_snapshot: res.discount.discount_type,
      discount_value_snapshot: res.discount.discount_value,
    };
    return { applied: true, amount, discount: res.discount, snapshot };
  }

  const { discount, amount } = await getBestAutoDiscount(orderDraft);
  if (!discount) return { applied: false, reason: "no_auto_available", message: "Không có mã giảm giá tự động" };

  const snapshot = {
    discount_code_snapshot: discount.code || null,
    discount_type_snapshot: discount.discount_type,
    discount_value_snapshot: discount.discount_value,
  };

  return { applied: true, amount, discount, snapshot };
}

/**
 * Get user-friendly error message for discount validation reasons
 */
function getErrorMessage(reason) {
  const messages = {
    empty: "Vui lòng nhập mã giảm giá",
    not_found: "Mã giảm giá không tồn tại",
    expired: "Mã giảm giá đã hết hạn",
    not_started: "Mã giảm giá chưa có hiệu lực",
    exhausted: "Mã giảm giá đã hết lượt sử dụng",
    no_eligible_products: "Mã giảm giá không áp dụng cho sản phẩm này",
    no_products: "Không có sản phẩm nào trong giỏ hàng",
    products_not_found: "Không tìm thấy thông tin sản phẩm",
    no_auto_available: "Không có mã giảm giá tự động",
  };
  return messages[reason] || "Mã giảm giá không hợp lệ";
}

export async function validateAndReserveDiscount(code, transaction) {
  if (!code) return { valid: false, reason: "empty" };

  const nowDate = now();
  const discount = await Discount.findOne({
    where: { code, is_active: true },
    lock: transaction?.LOCK?.UPDATE,
    transaction,
  });

  if (!discount) return { valid: false, reason: "not_found" };
  if (discount.start_date && discount.start_date > nowDate) return { valid: false, reason: "not_started" };
  if (discount.end_date && discount.end_date < nowDate) return { valid: false, reason: "expired" };

  if (discount.usage_limit && discount.usage_count >= discount.usage_limit) {
    return { valid: false, reason: "exhausted" };
  }

  // Increment inside the same transaction to reserve the slot
  await discount.increment("usage_count", { by: 1, transaction });

  return { valid: true, discount };
}

export { getErrorMessage };

export default {
  getActiveDiscounts,
  validateCode,
  getBestAutoDiscount,
  applyDiscount,
  validateAndReserveDiscount,
  getErrorMessage,
};
