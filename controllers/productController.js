import {
  searchProductsService,
  getProductDetailBySlugOrIdService,
} from "../services/user/productService.js";

const parseArrayParam = (value) => {
  if (!value) return undefined;
  return Array.isArray(value)
    ? value
    : value
        .toString()
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
};

export const getProductsController = async (req, res) => {
  const {
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
  } = req.query;

  try {
    const data = await searchProductsService({
      q: q || undefined,
      name: name || undefined,
      brand: brand || undefined,
      collection: collection || undefined,
      categorySlug,
      categorySlugs: parseArrayParam(categorySlugs),
      sizes: parseArrayParam(sizes),
      colors: parseArrayParam(colors),
      priceMin: priceMin ? parseFloat(priceMin) : undefined,
      priceMax: priceMax ? parseFloat(priceMax) : undefined,
      brands: parseArrayParam(brands),
      inStockOnly: inStockOnly === "true" || inStockOnly === true,
      sort,
      page: page ? Math.max(1, parseInt(page, 10)) : 1,
      pageSize: pageSize ? Math.max(1, parseInt(pageSize, 10)) : 12,
    });

    return res.status(200).json({
      success: true,
      data,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch products",
    });
  }
};

export const getProductBySlugOrIdController = async (req, res) => {
  const { slugOrId } = req.params;

  try {
    const data = await getProductDetailBySlugOrIdService(slugOrId);

    return res.status(200).json({
      success: true,
      data,
      message: "Product detail fetched successfully",
    });
  } catch (error) {
    const statusCode = error.message === "Product not found" ? 404 : 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Failed to fetch product detail",
    });
  }
};
