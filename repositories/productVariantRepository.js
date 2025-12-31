import { Op } from "sequelize";
import { ProductVariant, Product } from "../models/index.js";

export const createVariantRecord = async (productId, variant, transaction) => {
  return ProductVariant.create(
    {
      product_id: productId,
      color: variant.color || null,
      size: variant.size || null,
      sku: variant.sku || null,
      stock_quantity: variant.stock_quantity || 0,
      image_url: variant.image_url || null,
    },
    { transaction }
  );
};

export const findVariantForProduct = (productId, variantId, transaction) =>
  ProductVariant.findOne({
    where: { id: variantId, product_id: productId },
    transaction,
  });

export const findVariantBySizeAndColor = async (
  productId,
  { size, color },
  transaction
) => {
  if (!size) return null;

  const where = {
    product_id: productId,
    size,
  };

  if (color) {
    where.color = color;
    return ProductVariant.findOne({ where, transaction });
  }

  const candidates = await ProductVariant.findAll({
    where,
    transaction,
  });

  if (candidates.length === 1) return candidates[0];
  return null;
};

export const updateVariantRecord = (variant, data, transaction) =>
  variant.update(
    {
      color: data.color ?? variant.color,
      size: data.size ?? variant.size,
      sku: data.sku ?? variant.sku,
      stock_quantity: data.stock_quantity ?? variant.stock_quantity,
      image_url: data.image_url ?? variant.image_url,
    },
    { transaction }
  );

export const upsertVariantRecord = async (
  productId,
  variant,
  transaction
) => {
  if (variant.id) {
    const existing = await findVariantForProduct(productId, variant.id, transaction);
    if (!existing) {
      throw new Error(`Variant with id ${variant.id} not found or does not belong to this product`);
    }
    return updateVariantRecord(existing, variant, transaction);
  }

  const matched = await findVariantBySizeAndColor(
    productId,
    { size: variant.size, color: variant.color },
    transaction
  );

  if (matched) {
    return updateVariantRecord(matched, variant, transaction);
  }

  return createVariantRecord(productId, variant, transaction);
};

export const deleteVariantRecord = async (productId, variantId, transaction) => {
  const variant = await findVariantForProduct(productId, variantId, transaction);
  if (!variant) {
    throw new Error("Variant not found or does not belong to this product");
  }
  await variant.destroy({ transaction });
  return variant;
};