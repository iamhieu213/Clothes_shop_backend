import collectionService from "../../services/collectionService.js";

/**
 * Admin Collection Controller
 *
 * Handles admin collection management endpoints
 */
export class AdminCollectionController {
  /**
   * GET /api/admin/collections
   * Get all collections (with optional filters)
   */
  async getAllCollections(req, res, next) {
    try {
      const { status } = req.query;
      const collections = await collectionService.getAllCollections({ status });

      res.json({
        success: true,
        data: collections
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/admin/collections/:id
   * Get collection by ID
   */
  async getCollectionById(req, res, next) {
    try {
      const { id } = req.params;
      const collection = await collectionService.getCollectionById(parseInt(id));

      res.json({
        success: true,
        data: collection
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/admin/collections
   * Create a new collection
   */
  async createCollection(req, res, next) {
    try {
      const data = req.body;
      const collection = await collectionService.createCollection(data);

      res.status(201).json({
        success: true,
        message: 'Collection created successfully',
        data: collection
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/admin/collections/:id
   * Update a collection
   */
  async updateCollection(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const collection = await collectionService.updateCollection(parseInt(id), data);

      res.json({
        success: true,
        message: 'Collection updated successfully',
        data: collection
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/admin/collections/:id
   * Delete a collection
   */
  async deleteCollection(req, res, next) {
    try {
      const { id } = req.params;
      const result = await collectionService.deleteCollection(parseInt(id));

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /api/admin/collections/:id/status
   * Update collection status
   */
  async updateStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const collection = await collectionService.updateCollectionStatus(parseInt(id), status);

      res.json({
        success: true,
        message: `Collection status updated to ${status}`,
        data: collection
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/admin/collections/reorder
   * Reorder collections
   */
  async reorderCollections(req, res, next) {
    try {
      const { collections } = req.body;
      const result = await collectionService.reorderCollections(collections);

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/admin/collections/:id/products
   * Add products to collection
   */
  async addProducts(req, res, next) {
    try {
      const { id } = req.params;
      const { productIds, featured } = req.body;
      const result = await collectionService.addProductsToCollection(
        parseInt(id),
        productIds,
        { featured }
      );

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/admin/collections/:id/products/:productId
   * Remove product from collection
   */
  async removeProduct(req, res, next) {
    try {
      const { id, productId } = req.params;
      const result = await collectionService.removeProductFromCollection(
        parseInt(id),
        parseInt(productId)
      );

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/admin/collections/:id/products/reorder
   * Reorder products in collection
   */
  async reorderProducts(req, res, next) {
    try {
      const { id } = req.params;
      const { products } = req.body;
      const result = await collectionService.reorderProducts(parseInt(id), products);

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * PATCH /api/admin/collections/:id/products/:productId/featured
   * Toggle product featured status
   */
  async toggleFeatured(req, res, next) {
    try {
      const { id, productId } = req.params;
      const result = await collectionService.toggleProductFeatured(
        parseInt(id),
        parseInt(productId)
      );

      res.json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/admin/collections/:id/products
   * Get products in collection (for admin management)
   */
  async getCollectionProducts(req, res, next) {
    try {
      const { id } = req.params;
      const result = await collectionService.getCollectionProducts(parseInt(id));

      res.json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AdminCollectionController();
