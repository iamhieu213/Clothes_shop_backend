import express from "express";
import multer from "multer";

import { createProductController, createVariantController, deleteVariantController, deleteProductController, updateProductController, getAllProductsController, searchProductsController, getBrandsController } from "../../controllers/admin/productController.js";

const router = express.Router();
const upload = multer({ dest: "tmp/"})

/**
 * @swagger
 * /admin/product-management/search:
 *   get:
 *     summary: Tìm kiếm sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Từ khóa tìm kiếm
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Kết quả tìm kiếm
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
router.get("/search", searchProductsController);

/**
 * @swagger
 * /admin/product-management/brands:
 *   get:
 *     summary: Lấy danh sách các thương hiệu duy nhất (Admin)
 *     tags: [Admin, Products]
 *     responses:
 *       200:
 *         description: Danh sách thương hiệu
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
 *                     type: string
 *                 message:
 *                   type: string
 */
router.get("/brands", getBrandsController);

/**
 * @swagger
 * /admin/product-management:
 *   get:
 *     summary: Hiển thị tất cả sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
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
router.get("/", getAllProductsController);

/**
 * @swagger
 * /admin/product-management/create-product:
 *   post:
 *     summary: Tạo sản phẩm mới (Admin)
 *     tags: [Admin, Products]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - categoryId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: integer
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Tạo sản phẩm thành công
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
 *       400:
 *         description: Lỗi tạo sản phẩm
 */
router.post("/create-product", upload.array("images", 10), createProductController);

/**
 * @swagger
 * /admin/product-management/{productId}/variants:
 *   post:
 *     summary: Tạo biến thể cho sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               variantImages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Tạo biến thể thành công
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
 *       400:
 *         description: Lỗi tạo biến thể
 */
router.post("/:productId/variants", upload.array("variantImages", 10), createVariantController);

/**
 * @swagger
 * /admin/product-management/{productId}/variants/{variantId}:
 *   delete:
 *     summary: Xóa biến thể sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: variantId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa biến thể thành công
 *       404:
 *         description: Không tìm thấy biến thể
 */
router.delete("/:productId/variants/:variantId", deleteVariantController);

/**
 * @swagger
 * /admin/product-management/{productId}:
 *   delete:
 *     summary: Xóa sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xóa sản phẩm thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Không tìm thấy sản phẩm
 */
router.delete("/:productId", deleteProductController);

/**
 * @swagger
 * /admin/product-management/update-product/{productId}:
 *   patch:
 *     summary: Cập nhật sản phẩm (Admin)
 *     tags: [Admin, Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: integer
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Cập nhật sản phẩm thành công
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
 *       404:
 *         description: Không tìm thấy sản phẩm
 */
router.patch("/update-product/:productId", upload.array("images", 10), updateProductController);

export default router;
