import express from "express";
import {
  listProductsController,
  getProductsByCategoryController,
  searchProductsController,
  getProductDetailBySlugOrIdController,
} from "../controllers/user/productController.js";

const router = express.Router();

router.get("/", listProductsController);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: List products with pagination, sorting, and filters
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Current page index
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 12
 *         description: Page size (aka limit)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [featured, newest, price-low, price-high, popular]
 *           default: featured
 *         description: Sort strategy
 *       - in: query
 *         name: collection
 *         schema:
 *           type: string
 *           enum: [men, women, accessories]
 *         description: Filter by collection
 *       - in: query
 *         name: categorySlug
 *         schema:
 *           type: string
 *         description: Filter by a single category slug
 *       - in: query
 *         name: categorySlugs
 *         schema:
 *           type: string
 *         description: Comma separated list of category slugs
 *       - in: query
 *         name: sizes
 *         schema:
 *           type: string
 *         description: Comma separated list of sizes
 *       - in: query
 *         name: colors
 *         schema:
 *           type: string
 *         description: Comma separated list of colors
 *       - in: query
 *         name: priceMin
 *         schema:
 *           type: number
 *         description: Minimum price filter
 *       - in: query
 *         name: priceMax
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *       - in: query
 *         name: brands
 *         schema:
 *           type: string
 *         description: Comma separated list of brands
 *       - in: query
 *         name: inStockOnly
 *         schema:
 *           type: boolean
 *         description: Only return products that are in stock
 *     responses:
 *       200:
 *         description: Paged product list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
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
 *                         pageSize:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Search products with pagination, sorting, and filters
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Free text search across product fields
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by product name
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: Filter by brand
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 12
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [featured, newest, price-low, price-high, popular]
 *           default: featured
 *         description: Sort strategy
 *       - in: query
 *         name: collection
 *         schema:
 *           type: string
 *           enum: [men, women, accessories]
 *       - in: query
 *         name: categorySlug
 *         schema:
 *           type: string
 *       - in: query
 *         name: categorySlugs
 *         schema:
 *           type: string
 *         description: Comma separated list of category slugs
 *       - in: query
 *         name: sizes
 *         schema:
 *           type: string
 *         description: Comma separated list of sizes
 *       - in: query
 *         name: colors
 *         schema:
 *           type: string
 *       - in: query
 *         name: priceMin
 *         schema:
 *           type: number
 *       - in: query
 *         name: priceMax
 *         schema:
 *           type: number
 *       - in: query
 *         name: brands
 *         schema:
 *           type: string
 *         description: Comma separated list of brands
 *       - in: query
 *         name: inStockOnly
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Search results with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
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
 *                         pageSize:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                 message:
 *                   type: string
 */
router.get("/search", searchProductsController);

/**
 * @swagger
 * /products/category/{slug}:
 *   get:
 *     summary: Lấy sản phẩm theo danh mục
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [featured, newest, price-low, price-high, popular]
 *         description: Tiêu chí sắp xếp
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm theo danh mục
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.get("/category/:slug", getProductsByCategoryController);

/**
 * @swagger
 * /products/{slugOrId}:
 *   get:
 *     summary: Get product detail by slug or id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: slugOrId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product detail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       404:
 *         description: Product not found
 */
router.get("/:slugOrId", getProductDetailBySlugOrIdController);

export default router;
