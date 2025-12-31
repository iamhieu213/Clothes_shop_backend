import express from "express";
import multer from "multer";
import { 
    listProductsController,
    getProductDetailController,
    createProductController,
    updateProductController,
    deleteProductController
} from "../../controllers/admin/productManagementController.js";

const router = express.Router();
const upload = multer({ dest: "tmp/"});

/**
 * @swagger
 * /admin/products:
 *   get:
 *     summary: List products with pagination (Admin)
 *     tags: [Admin, Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
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
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Filter products by name or brand
 *     responses:
 *       200:
 *         description: Products list with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
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
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *       403:
 *         description: Access denied
 */
router.get("/", listProductsController);

/**
 * @swagger
 * /admin/products:
 *   post:
 *     summary: Create new product (Admin)
 *     tags: [Admin, Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - base_price
 *               - category_id
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               base_price:
 *                 type: number
 *               category_id:
 *                 type: integer
 *               brand:
 *                 type: string
 *               collection:
 *                 type: string
 *                 enum: [men, women, accessories]
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *               sale_price:
 *                 type: number
 *               cost_price:
 *                 type: number
 *               is_new:
 *                 type: boolean
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
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
 *       403:
 *         description: Access denied
 */
router.post("/", upload.array("images", 10), createProductController);

/**
 * @swagger
 * /admin/products/{id}:
 *   get:
 *     summary: Get product details (Admin)
 *     tags: [Admin, Products]
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
 *         description: Product details
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
 *         description: Product not found
 *       403:
 *         description: Access denied
 */
router.get("/:id", getProductDetailController);

/**
 * @swagger
 * /admin/products/{id}:
 *   patch:
 *     summary: Update product (Admin)
 *     tags: [Admin, Products]
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               base_price:
 *                 type: number
 *               category_id:
 *                 type: integer
 *               brand:
 *                 type: string
 *               collection:
 *                 type: string
 *                 enum: [men, women, accessories]
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *               sale_price:
 *                 type: number
 *               cost_price:
 *                 type: number
 *               is_new:
 *                 type: boolean
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
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
 *         description: Product not found
 *       403:
 *         description: Access denied
 */
router.patch("/:id", upload.array("images", 10), updateProductController);

/**
 * @swagger
 * /admin/products/{id}:
 *   delete:
 *     summary: Deactivate product (Admin)
 *     tags: [Admin, Products]
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
 *         description: Product deactivated successfully
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
 *         description: Product not found
 *       403:
 *         description: Access denied
 */
router.delete("/:id", deleteProductController);

export default router;
