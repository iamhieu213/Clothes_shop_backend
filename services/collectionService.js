import collectionRepository from "../repositories/collectionRepository.js";
import productCollectionRepository from "../repositories/productCollectionRepository.js";

/**
 * Collection Service
 *
 * Business logic for collection operations
 */
export class CollectionService {
  /**
   * Get all active collections (public-facing)
   */
  async getActiveCollections() {
    return await collectionRepository.getActiveCollections();
  }

  /**
   * Get collection by slug (public-facing)
   */
  async getCollectionBySlug(slug) {
    const collection = await collectionRepository.findBySlug(slug);

    if (!collection) {
      throw new Error('Collection not found');
    }

    // Check if collection is active and within date range
    if (collection.status !== 'active') {
      throw new Error('Collection is not active');
    }

    const now = new Date();
    if (collection.start_date && collection.start_date > now) {
      throw new Error('Collection is not yet available');
    }
    if (collection.end_date && collection.end_date < now) {
      throw new Error('Collection has expired');
    }

    return collection;
  }

  /**
   * Get all collections (admin)
   */
  async getAllCollections(filters = {}) {
    return await collectionRepository.findAll(filters);
  }

  /**
   * Get collection by ID (admin)
   */
  async getCollectionById(id) {
    const collection = await collectionRepository.findById(id);
    if (!collection) {
      throw new Error('Collection not found');
    }
    return collection;
  }

  /**
   * Create a new collection (admin)
   */
  async createCollection(data) {
    // Validate slug uniqueness
    const slugExists = await collectionRepository.slugExists(data.slug);
    if (slugExists) {
      throw new Error('Collection with this slug already exists');
    }

    // Validate date ranges
    if (data.start_date && data.end_date && data.start_date > data.end_date) {
      throw new Error('start_date must be before end_date');
    }

    // Set default values
    const collectionData = {
      name: data.name,
      slug: data.slug,
      description: data.description || null,
      banner_image: data.banner_image || null,
      start_date: data.start_date || null,
      end_date: data.end_date || null,
      status: data.status || 'draft',
      sort_order: data.sort_order || 0
    };

    return await collectionRepository.create(collectionData);
  }

  /**
   * Update collection (admin)
   */
  async updateCollection(id, data) {
    const collection = await collectionRepository.findById(id);
    if (!collection) {
      throw new Error('Collection not found');
    }

    // Validate slug uniqueness if slug is being changed
    if (data.slug && data.slug !== collection.slug) {
      const slugExists = await collectionRepository.slugExists(data.slug, id);
      if (slugExists) {
        throw new Error('Collection with this slug already exists');
      }
    }

    // Validate date ranges
    const startDate = data.start_date !== undefined ? data.start_date : collection.start_date;
    const endDate = data.end_date !== undefined ? data.end_date : collection.end_date;

    if (startDate && endDate && startDate > endDate) {
      throw new Error('start_date must be before end_date');
    }

    // Filter out undefined values
    const updates = Object.keys(data).reduce((acc, key) => {
      if (data[key] !== undefined) {
        acc[key] = data[key];
      }
      return acc;
    }, {});

    await collection.update(updates);
    return collection;
  }

  /**
   * Delete collection (admin)
   */
  async deleteCollection(id) {
    const collection = await collectionRepository.findById(id);
    if (!collection) {
      throw new Error('Collection not found');
    }

    // Check if collection has products
    const productCount = await productCollectionRepository.countProductsInCollection(id);
    if (productCount > 0) {
      throw new Error(`Cannot delete collection with ${productCount} products. Remove products first.`);
    }

    await collectionRepository.delete(id);
    return { message: 'Collection deleted successfully' };
  }

  /**
   * Update collection status (admin)
   */
  async updateCollectionStatus(id, status) {
    if (!['draft', 'active', 'archived'].includes(status)) {
      throw new Error('Invalid status. Must be draft, active, or archived');
    }

    const collection = await collectionRepository.updateStatus(id, status);
    if (!collection) {
      throw new Error('Collection not found');
    }

    return collection;
  }

  /**
   * Reorder collections (admin)
   */
  async reorderCollections(collectionOrders) {
    if (!Array.isArray(collectionOrders) || collectionOrders.length === 0) {
      throw new Error('Invalid collection orders');
    }

    // Validate all collections exist
    for (const { id } of collectionOrders) {
      const exists = await collectionRepository.findById(id);
      if (!exists) {
        throw new Error(`Collection with id ${id} not found`);
      }
    }

    await collectionRepository.reorderCollections(collectionOrders);
    return { message: 'Collections reordered successfully' };
  }

  /**
   * Add products to collection (admin)
   */
  async addProductsToCollection(collectionId, productIds, options = {}) {
    const collection = await collectionRepository.findById(collectionId);
    if (!collection) {
      throw new Error('Collection not found');
    }

    if (!Array.isArray(productIds) || productIds.length === 0) {
      throw new Error('Invalid product IDs');
    }

    const results = await productCollectionRepository.addProductsToCollection(
      productIds,
      collectionId,
      { featured: options.featured || false }
    );

    return {
      message: `Added ${results.length} products to collection`,
      added: results.length
    };
  }

  /**
   * Remove product from collection (admin)
   */
  async removeProductFromCollection(collectionId, productId) {
    const collection = await collectionRepository.findById(collectionId);
    if (!collection) {
      throw new Error('Collection not found');
    }

    const removed = await productCollectionRepository.removeProductFromCollection(
      productId,
      collectionId
    );

    if (!removed) {
      throw new Error('Product not found in this collection');
    }

    return { message: 'Product removed from collection' };
  }

  /**
   * Reorder products in collection (admin)
   */
  async reorderProducts(collectionId, productOrders) {
    const collection = await collectionRepository.findById(collectionId);
    if (!collection) {
      throw new Error('Collection not found');
    }

    if (!Array.isArray(productOrders) || productOrders.length === 0) {
      throw new Error('Invalid product orders');
    }

    await productCollectionRepository.reorderProducts(collectionId, productOrders);
    return { message: 'Products reordered successfully' };
  }

  /**
   * Toggle product featured status (admin)
   */
  async toggleProductFeatured(collectionId, productId) {
    const collection = await collectionRepository.findById(collectionId);
    if (!collection) {
      throw new Error('Collection not found');
    }

    const productCollection = await productCollectionRepository.toggleFeatured(
      productId,
      collectionId
    );

    if (!productCollection) {
      throw new Error('Product not found in this collection');
    }

    return {
      message: `Product ${productCollection.featured ? 'featured' : 'unfeatured'}`,
      featured: productCollection.featured
    };
  }

  /**
   * Get products in a collection (with pagination support)
   */
  async getCollectionProducts(collectionId, options = {}) {
    const collection = await collectionRepository.findById(collectionId);
    if (!collection) {
      throw new Error('Collection not found');
    }

    const productCollections = await productCollectionRepository.getProductsByCollection(
      collectionId,
      { includeProductDetails: true }
    );

    // Filter out inactive products and null products
    const products = productCollections
      .map(pc => ({
        ...pc.product?.toJSON(),
        featured: pc.featured,
        sort_order: pc.sort_order,
        added_at: pc.created_at
      }))
      .filter(p => p && p.status === 'active');

    return {
      collection: {
        id: collection.id,
        name: collection.name,
        slug: collection.slug,
        description: collection.description,
        banner_image: collection.banner_image
      },
      products,
      total: products.length
    };
  }
}

export default new CollectionService();
