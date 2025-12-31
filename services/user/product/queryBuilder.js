import { Op } from "sequelize";
import { sequelize } from "../../../models/index.js";
import { buildBasePriceSubquery, defaultProductOrder } from "../../../repositories/productRepository.js";

export const normalizeFilterArray = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : item))
      .filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
};

export const buildVariantWhereClause = ({ sizes, colors }) => {
  const variantConditions = [];

  const normalizedSizes = normalizeFilterArray(sizes).map((size) =>
    size.toString().toLowerCase()
  );
  if (normalizedSizes.length > 0) {
    variantConditions.push(
      sequelize.where(
        sequelize.fn("LOWER", sequelize.col("variants.size")),
        {
          [Op.in]: normalizedSizes,
        }
      )
    );
  }

  const normalizedColors = normalizeFilterArray(colors).map((color) =>
    color.toString().toLowerCase()
  );
  if (normalizedColors.length > 0) {
    variantConditions.push(
      sequelize.where(
        sequelize.fn("LOWER", sequelize.col("variants.color")),
        {
          [Op.in]: normalizedColors,
        }
      )
    );
  }

  if (variantConditions.length === 0) return undefined;
  if (variantConditions.length === 1) return variantConditions[0];

  return {
    [Op.and]: variantConditions,
  };
};

export const buildOrderClause = (sort) => {
  const priceSubquery = buildBasePriceSubquery();
  switch (sort) {
    case "newest":
      return [["created_at", "DESC"]];
    case "price-low":
      return [[priceSubquery, "ASC"]];
    case "price-high":
      return [[priceSubquery, "DESC"]];
    case "popular":
      return [["created_at", "DESC"]];
    case "featured":
    default:
      return defaultProductOrder;
  }
};

export const appendPriceAndStockFilters = (
  whereClause,
  { priceMin, priceMax, inStockOnly }
) => {
  const priceSubquery = buildBasePriceSubquery();

  if (priceMin !== undefined || priceMax !== undefined) {
    whereClause[Op.and] = whereClause[Op.and] || [];
    const priceCondition = {};
    if (priceMin !== undefined) {
      priceCondition[Op.gte] = parseFloat(priceMin);
    }
    if (priceMax !== undefined) {
      priceCondition[Op.lte] = parseFloat(priceMax);
    }
    whereClause[Op.and].push(sequelize.where(priceSubquery, priceCondition));
  }

  if (inStockOnly) {
    whereClause[Op.and] = whereClause[Op.and] || [];
    whereClause[Op.and].push(
      sequelize.literal(
        "EXISTS (SELECT 1 FROM product_variants WHERE product_variants.product_id = products.id AND product_variants.stock_quantity > 0)"
      )
    );
  }

  return whereClause;
};

export const buildPagination = (page = 1, pageSize = 12) => {
  const parsedPage = Math.max(1, Number.parseInt(page, 10) || 1);
  const rawPageSize = Number.parseInt(pageSize, 10);
  const parsedPageSize = Math.min(
    100,
    Math.max(1, Number.isFinite(rawPageSize) ? rawPageSize : 12)
  );

  return {
    limit: parsedPageSize,
    offset: (parsedPage - 1) * parsedPageSize,
    page: parsedPage,
    pageSize: parsedPageSize,
  };
};
