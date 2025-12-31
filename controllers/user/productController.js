import { sendSuccess, sendError, sendValidationError } from "../../utils/response.js";
import { getProductsByCategoryService, getProductDetailService, getProductDetailBySlugOrIdService, searchProductsService } from "../../services/user/productService.js";

export const getProductsByCategoryController = async (req, res) => {
    const { categoryId } = req.query;
    const { slug } = req.params;
    const { name } = req.query;
    const includeDescendants = req.query.includeDescendants !== "false";

    // Parse filter params
    const collection = req.query.collection;
    const sizes = req.query.sizes
        ? (Array.isArray(req.query.sizes) ? req.query.sizes : req.query.sizes.split(',').filter(Boolean))
        : undefined;
    const colors = req.query.colors
        ? (Array.isArray(req.query.colors) ? req.query.colors : req.query.colors.split(',').filter(Boolean))
        : undefined;
    const priceMin = req.query.priceMin ? parseFloat(req.query.priceMin) : undefined;
    const priceMax = req.query.priceMax ? parseFloat(req.query.priceMax) : undefined;
    const brands = req.query.brands
        ? (Array.isArray(req.query.brands) ? req.query.brands : req.query.brands.split(',').filter(Boolean))
        : undefined;
    const inStockOnly = req.query.inStockOnly === 'true' || req.query.inStockOnly === true;
    const sort = req.query.sort || 'featured';
    const page = req.query.page ? Math.max(1, parseInt(req.query.page, 10)) : 1;
    const pageSize = req.query.pageSize ? Math.max(1, parseInt(req.query.pageSize, 10)) : 12;

    // Validate sort
    const validSorts = ['featured', 'newest', 'price-low', 'price-high', 'popular'];
    if (!validSorts.includes(sort)) {
        return sendValidationError(res, [
            { message: `Invalid sort. Must be one of: ${validSorts.join(', ')}` }
        ]);
    }

    try {
        const result = await getProductsByCategoryService({
            categoryId: categoryId ? Number(categoryId) : undefined,
            categorySlug: slug,
            categoryName: name,
            includeDescendants,
            collection,
            sizes,
            colors,
            priceMin,
            priceMax,
            brands,
            inStockOnly,
            sort,
            page,
            pageSize,
        });

        return sendSuccess(res, {
            data: result,
            message: "Products fetched successfully"
        });
    } catch (error) {
        const statusCode = error.message === "Category not found" ? 404 : 400;
        return sendError(res, {
            status: statusCode,
            message: error.message || "Failed to fetch products"
        });
    }
};

export const getProductDetailController = async (req, res) => {
    const { productId } = req.params;

    try {
        const data = await getProductDetailService(Number(productId));
        return sendSuccess(res, {
            data,
            message: "Product detail fetched successfully"
        });
    } catch (error) {
        const statusCode =
            error.message === "Product not found" ? 404 : 400;
        return sendError(res, {
            status: statusCode,
            message: error.message || "Failed to fetch product detail"
        });
    }
};

export const getProductDetailBySlugOrIdController = async (req, res) => {
    const { slugOrId } = req.params;

    try {
        const data = await getProductDetailBySlugOrIdService(slugOrId);
        return res.status(200).json({
            success: true,
            data,
            message: "Product detail fetched successfully",
        });
    } catch (error) {
        const statusCode =
            error.message === "Product not found" ? 404 : 400;
        return res.status(statusCode).json({
            success: false,
            message: error.message || "Failed to fetch product detail",
        });
    }
};

export const listProductsController = async (req, res) => {
    // Parse filter params
    const collection = req.query.collection;
    const categorySlug = req.query.categorySlug;
    const categorySlugs = req.query.categorySlugs
        ? (Array.isArray(req.query.categorySlugs) ? req.query.categorySlugs : req.query.categorySlugs.split(',').filter(Boolean))
        : undefined;
    const sizes = req.query.sizes
        ? (Array.isArray(req.query.sizes) ? req.query.sizes : req.query.sizes.split(',').filter(Boolean))
        : undefined;
    const colors = req.query.colors
        ? (Array.isArray(req.query.colors) ? req.query.colors : req.query.colors.split(',').filter(Boolean))
        : undefined;
    const priceMin = req.query.priceMin ? parseFloat(req.query.priceMin) : undefined;
    const priceMax = req.query.priceMax ? parseFloat(req.query.priceMax) : undefined;
    const brands = req.query.brands
        ? (Array.isArray(req.query.brands) ? req.query.brands : req.query.brands.split(',').filter(Boolean))
        : undefined;
    const inStockOnly = req.query.inStockOnly === 'true' || req.query.inStockOnly === true;
    const sort = req.query.sort || 'featured';
    const page = req.query.page ? Math.max(1, parseInt(req.query.page, 10)) : 1;
    const pageSize = req.query.pageSize ? Math.max(1, parseInt(req.query.pageSize, 10)) : 12;

    // Validate sort
    const validSorts = ['featured', 'newest', 'price-low', 'price-high', 'popular'];
    if (!validSorts.includes(sort)) {
        return res.status(400).json({
            success: false,
            message: `Invalid sort. Must be one of: ${validSorts.join(', ')}`,
        });
    }

    try {
        const result = await searchProductsService({
            q: undefined, // No search term for general listing
            name: undefined,
            brand: undefined,
            collection,
            categorySlug,
            categorySlugs,
            sizes,
            colors,
            priceMin,
            priceMax,
            brands,
            inStockOnly,
            sort,
            page,
            pageSize,
        });

        return res.status(200).json({
            success: true,
            data: result,
            message: "Products fetched successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message,
        });
    }
};

export const searchProductsController = async (req, res) => {
    const { q, name, brand } = req.query;

    // Parse filter params
    const collection = req.query.collection;
    const categorySlug = req.query.categorySlug;
    const categorySlugs = req.query.categorySlugs
        ? (Array.isArray(req.query.categorySlugs) ? req.query.categorySlugs : req.query.categorySlugs.split(',').filter(Boolean))
        : undefined;
    const sizes = req.query.sizes
        ? (Array.isArray(req.query.sizes) ? req.query.sizes : req.query.sizes.split(',').filter(Boolean))
        : undefined;
    const colors = req.query.colors
        ? (Array.isArray(req.query.colors) ? req.query.colors : req.query.colors.split(',').filter(Boolean))
        : undefined;
    const priceMin = req.query.priceMin ? parseFloat(req.query.priceMin) : undefined;
    const priceMax = req.query.priceMax ? parseFloat(req.query.priceMax) : undefined;
    const brands = req.query.brands
        ? (Array.isArray(req.query.brands) ? req.query.brands : req.query.brands.split(',').filter(Boolean))
        : undefined;
    const inStockOnly = req.query.inStockOnly === 'true' || req.query.inStockOnly === true;
    const sort = req.query.sort || 'featured';
    const page = req.query.page ? Math.max(1, parseInt(req.query.page, 10)) : 1;
    const pageSize = req.query.pageSize ? Math.max(1, parseInt(req.query.pageSize, 10)) : 12;

    // Validate sort
    const validSorts = ['featured', 'newest', 'price-low', 'price-high', 'popular'];
    if (!validSorts.includes(sort)) {
        return res.status(400).json({
            success: false,
            message: `Invalid sort. Must be one of: ${validSorts.join(', ')}`,
        });
    }

    try {
        const result = await searchProductsService({
            q: q || undefined,
            name: name || undefined,
            brand: brand || undefined,
            collection,
            categorySlug,
            categorySlugs,
            sizes,
            colors,
            priceMin,
            priceMax,
            brands,
            inStockOnly,
            sort,
            page,
            pageSize,
        });

        return res.status(200).json({
            success: true,
            data: result,
            message: "Search products successfully",
        });
    } catch (error) {
        return sendError(res, {
            message: "Failed to search products",
            error
        });
    }
};
