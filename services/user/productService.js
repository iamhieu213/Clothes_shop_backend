import { Op } from "sequelize";
import {
  collectDescendantCategoryIds,
  findCategoryBySlug,
  findCategoryById,
  findCategoryByName,
} from "../../repositories/categoryRepository.js";
import {
  listProductsWithRelations,
  countProductsWithRelations,
  findProductWithRelations,
  findProductBySlugWithRelations,
} from "../../repositories/productRepository.js";
import {
  appendPriceAndStockFilters,
  buildOrderClause,
  buildPagination,
  buildVariantWhereClause,
  normalizeFilterArray,
} from "./product/queryBuilder.js";
import {
  calculateDiscountPercent,
  calculatePriceFromVariants,
} from "./product/priceUtils.js";

const transformVariantDetail = (variant) => {
  const data = variant.toJSON ? variant.toJSON() : variant;
  return {
    id: data.id,
    color: data.color || null,
    size: data.size || null,
    sku: data.sku || null,
    stockQuantity: data.stock_quantity || 0,
    imageUrl: data.image_url || null,
  };
};

const pickDefaultVariantId = (variants) => {
  const list = Array.isArray(variants) ? variants : [];
  const inStock = list.filter((variant) => (variant.stock_quantity || 0) > 0);
  const pool = inStock.length ? inStock : list;

  if (!pool.length) return null;

  // Pick first available variant by ID
  return pool[0]?.id ?? null;
};

const summarizeProduct = (product) => {
  const data = product.toJSON();
  const images = Array.isArray(data.images) ? data.images : [];
  const tags = Array.isArray(data.tags) ? data.tags : [];

  const variants = data.variants || [];
  const colors = [...new Set(variants.map((v) => v.color).filter(Boolean))];
  const sizes = [...new Set(variants.map((v) => v.size).filter(Boolean))];

  const price = calculatePriceFromVariants(data.base_price, variants);
  const salePrice = data.sale_price ? parseFloat(data.sale_price) : null;
  const discountPercent = calculateDiscountPercent(price, salePrice);

  const inStock = variants.some((v) => (v.stock_quantity || 0) > 0);

  const category = data.category
    ? {
        id: data.category.id,
        name: data.category.name,
        slug: data.category.slug,
      }
    : null;

  const rawRating = data.average_rating;
  const rawReviewCount = data.review_count;
  const rawSoldCount = data.sold_count;

  const averageRating = rawRating ? parseFloat(Number(rawRating).toFixed(1)) : 0;
  const reviewCount = rawReviewCount ? parseInt(rawReviewCount, 10) : 0;
  const soldCount = rawSoldCount ? parseInt(rawSoldCount, 10) : 0;

  return {
    id: data.id,
    slug: data.slug || null,
    name: data.name,
    brand: data.brand,
    collection: data.collection || null,
    category,
    price,
    salePrice,
    discountPercent,
    images,
    colors,
    sizes,
    rating: averageRating,
    reviewCount: reviewCount,
    soldCount: soldCount,
    isNew: data.is_new || false,
    inStock,
    tags: data.tags || [],
    createdAt: data.created_at ? new Date(data.created_at).toISOString() : null,
    updatedAt: data.updated_at ? new Date(data.updated_at).toISOString() : null,
    defaultVariantId: pickDefaultVariantId(variants),
  };
};

// Build detailed payload for PDP with product-level pricing
const buildProductDetailData = (product) => {
  const data = product.toJSON ? product.toJSON() : product;
  const summary = summarizeProduct(product);

  const rawVariants = Array.isArray(data.variants)
    ? data.variants
    : Array.isArray(data.ProductVariants)
    ? data.ProductVariants
    : [];

  const variants = rawVariants.map(transformVariantDetail);
  const variantsWithStock = variants.filter((v) => (v.stockQuantity || 0) > 0);

  const availableColors = [
    ...new Set(variantsWithStock.map((v) => v.color).filter(Boolean)),
  ];
  const availableSizes = [
    ...new Set(variantsWithStock.map((v) => v.size).filter(Boolean)),
  ];

  // Use product-level pricing only
  const productPrice = parseFloat(data.base_price || 0);
  const salePrice = data.sale_price ? parseFloat(data.sale_price) : null;

  return {
    ...summary,
    description: data.description || null,
    variants,
    availableColors,
    availableSizes,
    minPrice: productPrice,
    maxPrice: productPrice,
  };
};

const buildBaseWhereClause = ({ collection, brands }) => {
  const whereClause = {};

  if (collection) {
    whereClause.collection = collection;
  }

  if (brands && brands.length > 0) {
    whereClause.brand = {
      [Op.in]: Array.isArray(brands) ? brands : [brands],
    };
  }

  return whereClause;
};

export const getProductsByCategoryService = async ({
  categoryId,
  categorySlug,
  categoryName,
  includeDescendants = true,
  collection,
  sizes,
  colors,
  priceMin,
  priceMax,
  brands,
  inStockOnly,
  sort = "featured",
  page = 1,
  pageSize = 12,
}) => {
  if (!categoryId && !categorySlug && !categoryName) {
    throw new Error("Category identifier is required");
  }

  let category = null;
  if (categoryId) category = await findCategoryById(categoryId);
  if (!category && categorySlug) category = await findCategoryBySlug(categorySlug);
  if (!category && categoryName) {
    category = await findCategoryByName(categoryName);
  }

  if (!category) {
    throw new Error("Category not found");
  }

  const categoryIds = includeDescendants
    ? await collectDescendantCategoryIds(category.id)
    : [category.id];

  const whereClause = {
    ...buildBaseWhereClause({ collection, brands }),
    category_id: categoryIds,
  };

  const variantWhere = buildVariantWhereClause({ sizes, colors });
  appendPriceAndStockFilters(whereClause, { priceMin, priceMax, inStockOnly });

  const { limit, offset, page: safePage, pageSize: safePageSize } =
    buildPagination(page, pageSize);

  const total = await countProductsWithRelations({
    where: whereClause,
    variantWhere,
  });

  const products = await listProductsWithRelations({
    where: whereClause,
    variantWhere,
    order: buildOrderClause(sort),
    limit,
    offset,
  });

  const totalPages = Math.ceil(total / safePageSize);

  return {
    products: products.map(summarizeProduct),
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
};

export const getProductDetailService = async (productId) => {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const product = await findProductWithRelations(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  return buildProductDetailData(product);
};

export const getProductDetailBySlugOrIdService = async (slugOrId) => {
  if (!slugOrId) {
    throw new Error("Product slug or ID is required");
  }

  let product;
  // Try to parse as integer ID first
  const possibleId = parseInt(slugOrId, 10);
  if (!isNaN(possibleId)) {
    product = await findProductWithRelations(possibleId);
  }
  
  // If not found by ID or not a valid ID, try to find by slug
  if (!product) {
    product = await findProductBySlugWithRelations(slugOrId);
  }

  if (!product) {
    throw new Error("Product not found");
  }

  return buildProductDetailData(product);
};

export const searchProductsService = async ({
  q,
  name,
  brand,
  collection,
  categorySlug,
  categorySlugs,
  sizes,
  colors,
  priceMin,
  priceMax,
  brands,
  inStockOnly,
  sort = "featured",
  page = 1,
  pageSize = 12,
}) => {
  const whereClause = buildBaseWhereClause({ collection, brands });

  if (q || name || brand) {
    const searchTerm = q || name || brand;
    whereClause[Op.or] = [
      {
        name: {
          [Op.iLike]: `%${searchTerm}%`,
        },
      },
      {
        brand: {
          [Op.iLike]: `%${searchTerm}%`,
        },
      },
    ];
  }

  const normalizedCategorySlugs = Array.from(
    new Set(
      [
        ...normalizeFilterArray(categorySlugs),
        ...normalizeFilterArray(categorySlug),
      ].map((slug) => slug.toString().toLowerCase())
    )
  );

  if (normalizedCategorySlugs.length > 0) {
    const categories = await Promise.all(
      normalizedCategorySlugs.map((slug) => findCategoryBySlug(slug))
    );

    const validCategories = categories.filter(Boolean);

    if (validCategories.length > 0) {
      const categoryIds = (
        await Promise.all(
          validCategories.map((category) =>
            collectDescendantCategoryIds(category.id)
          )
        )
      ).flat();

      if (categoryIds.length > 0) {
        whereClause.category_id = {
          [Op.in]: Array.from(new Set(categoryIds)),
        };
      }
    }
  }

  const variantWhere = buildVariantWhereClause({ sizes, colors });
  appendPriceAndStockFilters(whereClause, { priceMin, priceMax, inStockOnly });

  const { limit, offset, page: safePage, pageSize: safePageSize } =
    buildPagination(page, pageSize);

  const total = await countProductsWithRelations({
    where: whereClause,
    variantWhere,
  });

  const products = await listProductsWithRelations({
    where: whereClause,
    variantWhere,
    order: buildOrderClause(sort),
    limit,
    offset,
  });

  const totalPages = Math.ceil(total / safePageSize);

  return {
    products: products.map(summarizeProduct),
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
};

