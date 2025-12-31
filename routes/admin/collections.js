import express from "express";
import adminCollectionController from "../../controllers/admin/collectionController.js";

const router = express.Router();

/**
 * @swagger
 * /admin/collections:
 *   get:
 *     summary: Get all collections
 *     tags: [Admin, Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [draft, active, archived]
 *         description: Filter collections by status
 *     responses:
 *       200:
 *         description: List of collections
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
/**
 * @route   GET /api/admin/collections
 * @desc    Get all collections (with optional filters)
 * @access  Admin
 * @query   status - Filter by status (draft, active, archived)
 */
router.get("/", adminCollectionController.getAllCollections.bind(adminCollectionController));

/**
 * @swagger
 * /admin/collections/{id}:
 *   get:
 *     summary: Get collection by ID
 *     tags: [Admin, Collections]
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
 *         description: Collection detail
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   GET /api/admin/collections/:id
 * @desc    Get collection by ID
 * @access  Admin
 */
router.get(
  "/:id",
  adminCollectionController.getCollectionById.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections:
 *   post:
 *     summary: Create a new collection
 *     tags: [Admin, Collections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, slug]
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               description:
 *                 type: string
 *               banner_image:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date-time
 *               end_date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [draft, active, archived]
 *               sort_order:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Collection created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   POST /api/admin/collections
 * @desc    Create a new collection
 * @access  Admin
 * @body    { name, slug, description?, banner_image?, start_date?, end_date?, status?, sort_order? }
 */
router.post(
  "/",
  adminCollectionController.createCollection.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}:
 *   put:
 *     summary: Update a collection
 *     tags: [Admin, Collections]
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               description:
 *                 type: string
 *               banner_image:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date-time
 *               end_date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [draft, active, archived]
 *               sort_order:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Collection updated
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   PUT /api/admin/collections/:id
 * @desc    Update a collection
 * @access  Admin
 * @body    { name?, slug?, description?, banner_image?, start_date?, end_date?, status?, sort_order? }
 */
router.put(
  "/:id",
  adminCollectionController.updateCollection.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}:
 *   delete:
 *     summary: Delete a collection
 *     tags: [Admin, Collections]
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
 *         description: Collection deleted
 *       404:
 *         description: Collection not found
 *       409:
 *         description: Cannot delete because of existing products
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   DELETE /api/admin/collections/:id
 * @desc    Delete a collection
 * @access  Admin
 */
router.delete(
  "/:id",
  adminCollectionController.deleteCollection.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/status:
 *   patch:
 *     summary: Update collection status
 *     tags: [Admin, Collections]
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
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [draft, active, archived]
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: Invalid status
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   PATCH /api/admin/collections/:id/status
 * @desc    Update collection status
 * @access  Admin
 * @body    { status: "draft" | "active" | "archived" }
 */
router.patch(
  "/:id/status",
  adminCollectionController.updateStatus.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/reorder:
 *   put:
 *     summary: Reorder collections
 *     tags: [Admin, Collections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [collections]
 *             properties:
 *               collections:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [id, sort_order]
 *                   properties:
 *                     id:
 *                       type: integer
 *                     sort_order:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Collections reordered
 *       400:
 *         description: Invalid payload
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   PUT /api/admin/collections/reorder
 * @desc    Reorder collections
 * @access  Admin
 * @body    { collections: [{ id, sort_order }, ...] }
 */
router.put(
  "/reorder",
  adminCollectionController.reorderCollections.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/products:
 *   post:
 *     summary: Add products to collection
 *     tags: [Admin, Collections]
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
 *         application/json:
 *           schema:
 *             type: object
 *             required: [productIds]
 *             properties:
 *               productIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *               featured:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       200:
 *         description: Products added
 *       400:
 *         description: Invalid payload
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   POST /api/admin/collections/:id/products
 * @desc    Add products to collection
 * @access  Admin
 * @body    { productIds: number[], featured?: boolean }
 */
router.post(
  "/:id/products",
  adminCollectionController.addProducts.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/products/{productId}:
 *   delete:
 *     summary: Remove product from collection
 *     tags: [Admin, Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product removed
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   DELETE /api/admin/collections/:id/products/:productId
 * @desc    Remove product from collection
 * @access  Admin
 */
router.delete(
  "/:id/products/:productId",
  adminCollectionController.removeProduct.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/products/reorder:
 *   put:
 *     summary: Reorder products inside a collection
 *     tags: [Admin, Collections]
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
 *         application/json:
 *           schema:
 *             type: object
 *             required: [products]
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [product_id, sort_order]
 *                   properties:
 *                     product_id:
 *                       type: integer
 *                     sort_order:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Products reordered
 *       400:
 *         description: Invalid payload
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   PUT /api/admin/collections/:id/products/reorder
 * @desc    Reorder products in collection
 * @access  Admin
 * @body    { products: [{ product_id, sort_order }, ...] }
 */
router.put(
  "/:id/products/reorder",
  adminCollectionController.reorderProducts.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/products/{productId}/featured:
 *   patch:
 *     summary: Toggle product featured status in collection
 *     tags: [Admin, Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Featured flag toggled
 *       404:
 *         description: Collection or product not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   PATCH /api/admin/collections/:id/products/:productId/featured
 * @desc    Toggle product featured status in collection
 * @access  Admin
 */
router.patch(
  "/:id/products/:productId/featured",
  adminCollectionController.toggleFeatured.bind(adminCollectionController)
);

/**
 * @swagger
 * /admin/collections/{id}/products:
 *   get:
 *     summary: Get products within a collection (admin)
 *     tags: [Admin, Collections]
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
 *         description: Collection products
 *       404:
 *         description: Collection not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @route   GET /api/admin/collections/:id/products
 * @desc    Get products in collection (for admin management)
 * @access  Admin
 */
router.get(
  "/:id/products",
  adminCollectionController.getCollectionProducts.bind(adminCollectionController)
);

export default router;
