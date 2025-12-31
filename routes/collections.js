import express from "express";
import collectionController from "../controllers/collectionController.js";

const router = express.Router();

/**
 * @swagger
 * /collections:
 *   get:
 *     summary: Get all active collections
 *     tags: [Collections]
 *     responses:
 *       200:
 *         description: Successful response with active collections
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       slug:
 *                         type: string
 *                       description:
 *                         type: string
 *                       banner_image:
 *                         type: string
 *                         nullable: true
 *                       start_date:
 *                         type: string
 *                         format: date-time
 *                         nullable: true
 *                       end_date:
 *                         type: string
 *                         format: date-time
 *                         nullable: true
 *       500:
 *         description: Server error
 */
/**
 * @route   GET /api/collections
 * @desc    Get all active collections
 * @access  Public
 */
router.get("/", collectionController.getActiveCollections.bind(collectionController));

/**
 * @swagger
 * /collections/{slug}:
 *   get:
 *     summary: Get collection detail by slug
 *     tags: [Collections]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection slug
 *     responses:
 *       200:
 *         description: Collection detail
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
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     slug:
 *                       type: string
 *                     description:
 *                       type: string
 *                     banner_image:
 *                       type: string
 *                       nullable: true
 *                     start_date:
 *                       type: string
 *                       format: date-time
 *                       nullable: true
 *                     end_date:
 *                       type: string
 *                       format: date-time
 *                       nullable: true
 *       404:
 *         description: Collection not found
 *       500:
 *         description: Server error
 */
/**
 * @route   GET /api/collections/:slug
 * @desc    Get collection by slug
 * @access  Public
 */
router.get(
  "/:slug",
  collectionController.getCollectionBySlug.bind(collectionController)
);

/**
 * @swagger
 * /collections/{slug}/products:
 *   get:
 *     summary: Get products in a collection
 *     tags: [Collections]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection slug
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 24
 *         description: Items per page
 *     responses:
 *       200:
 *         description: Collection products
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
 *                     collection:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         slug:
 *                           type: string
 *                         description:
 *                           type: string
 *                         banner_image:
 *                           type: string
 *                           nullable: true
 *                     products:
 *                       type: array
 *                       items:
 *                         type: object
 *                         additionalProperties: true
 *                     total:
 *                       type: integer
 *       404:
 *         description: Collection not found
 *       500:
 *         description: Server error
 */
/**
 * @route   GET /api/collections/:slug/products
 * @desc    Get products in a collection
 * @access  Public
 * @query   page - Page number (default: 1)
 * @query   limit - Items per page (default: 24)
 */
router.get(
  "/:slug/products",
  collectionController.getCollectionProducts.bind(collectionController)
);

export default router;
