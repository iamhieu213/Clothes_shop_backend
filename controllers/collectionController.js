import collectionService from "../services/collectionService.js";

/**
 * Public Collection Controller
 *
 * Handles public-facing collection endpoints
 */
export class CollectionController {
  /**
   * GET /api/collections
   * Get all active collections
   */
  async getActiveCollections(req, res, next) {
    try {
      const collections = await collectionService.getActiveCollections();

      res.json({
        success: true,
        data: collections.map(c => ({
          id: c.id,
          name: c.name,
          slug: c.slug,
          description: c.description,
          banner_image: c.banner_image,
          start_date: c.start_date,
          end_date: c.end_date
        }))
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/collections/:slug
   * Get collection by slug
   */
  async getCollectionBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const collection = await collectionService.getCollectionBySlug(slug);

      res.json({
        success: true,
        data: {
          id: collection.id,
          name: collection.name,
          slug: collection.slug,
          description: collection.description,
          banner_image: collection.banner_image,
          start_date: collection.start_date,
          end_date: collection.end_date
        }
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/collections/:slug/products
   * Get products in a collection
   */
  async getCollectionProducts(req, res, next) {
    try {
      const { slug } = req.params;
      const { page = 1, limit = 24 } = req.query;

      // First get the collection
      const collection = await collectionService.getCollectionBySlug(slug);

      // Get products with pagination
      const result = await collectionService.getCollectionProducts(collection.id, {
        page: parseInt(page),
        limit: parseInt(limit)
      });

      res.json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new CollectionController();
