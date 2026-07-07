import { ProductCollection, Collection, Product } from "../models/index.js";
import { Op, literal } from "sequelize";

/**
 * ProductCollection Repository
 *
 * Handles many-to-many relationship operations between products and collections
 */
export class ProductCollectionRepository {
  /**
   * Get all products in a collection
   */
  async getProductsByCollection(collectionId, { includeProductDetails = true } = {}) {
    const options = {
      where: { collection_id: collectionId },
      order: [
        ['featured', 'DESC'],
        ['sort_order', 'ASC'],
        ['created_at', 'ASC']
      ]
    };

    if (includeProductDetails) {
      options.include = [
        {
          model: Product,
          as: 'product',
          attributes: {
            include: [
              'id', 'name', 'slug', 'base_price', 'sale_price', 'images', 'status', 'is_new', 'tags',
              [
                literal(`(
                  SELECT COALESCE(AVG(rating), 0)
                  FROM reviews
                  WHERE product_id = "product"."id"
                )`),
                'average_rating'
              ],
              [
                literal(`(
                  SELECT COUNT(id)
                  FROM reviews
                  WHERE product_id = "product"."id"
                )`),
                'review_count'
              ],
              [
                literal(`(
                  SELECT COALESCE(SUM(oi.quantity), 0)
                  FROM order_items oi
                  JOIN orders o ON o.id = oi.order_id
                  WHERE oi.product_id = "product"."id" AND o.status IN ('completed', 'delivered')
                )`),
                'sold_count'
              ]
            ]
          },
          where: { status: 'active' },
          required: false // Include even if product is inactive (can be filtered at service level)
        }
      ];
    }

    return await ProductCollection.findAll(options);
  }

  /**
   * Get all collections for a product
   */
  async getCollectionsByProduct(productId) {
    return await ProductCollection.findAll({
      where: { product_id: productId },
      include: [
        {
          model: Collection,
          as: 'collection',
          attributes: ['id', 'name', 'slug', 'status', 'banner_image']
        }
      ],
      order: [[{ model: Collection, as: 'collection' }, 'sort_order', 'ASC']]
    });
  }

  /**
   * Add a product to a collection
   */
  async addProductToCollection(productId, collectionId, { featured = false, sort_order = 0 } = {}) {
    try {
      return await ProductCollection.create({
        product_id: productId,
        collection_id: collectionId,
        featured,
        sort_order
      });
    } catch (error) {
      // Handle unique constraint violation
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new Error('Product is already in this collection');
      }
      throw error;
    }
  }

  /**
   * Add multiple products to a collection
   */
  async addProductsToCollection(productIds, collectionId, { featured = false } = {}) {
    const productCollections = productIds.map((productId, index) => ({
      product_id: productId,
      collection_id: collectionId,
      featured,
      sort_order: index
    }));

    try {
      return await ProductCollection.bulkCreate(productCollections, {
        ignoreDuplicates: true // Skip if already exists
      });
    } catch (error) {
      throw new Error(`Failed to add products to collection: ${error.message}`);
    }
  }

  /**
   * Remove a product from a collection
   */
  async removeProductFromCollection(productId, collectionId) {
    const deleted = await ProductCollection.destroy({
      where: {
        product_id: productId,
        collection_id: collectionId
      }
    });
    return deleted > 0;
  }

  /**
   * Remove all products from a collection
   */
  async removeAllProductsFromCollection(collectionId) {
    return await ProductCollection.destroy({
      where: { collection_id: collectionId }
    });
  }

  /**
   * Update product-collection relation
   */
  async updateProductCollection(productId, collectionId, updates) {
    const productCollection = await ProductCollection.findOne({
      where: {
        product_id: productId,
        collection_id: collectionId
      }
    });

    if (!productCollection) {
      return null;
    }

    await productCollection.update(updates);
    return productCollection;
  }

  /**
   * Reorder products in a collection
   */
  async reorderProducts(collectionId, productOrders) {
    // productOrders: [{ product_id: 1, sort_order: 0 }, { product_id: 2, sort_order: 1 }, ...]
    const promises = productOrders.map(({ product_id, sort_order }) =>
      ProductCollection.update(
        { sort_order },
        {
          where: {
            collection_id: collectionId,
            product_id
          }
        }
      )
    );
    await Promise.all(promises);
    return true;
  }

  /**
   * Toggle featured status
   */
  async toggleFeatured(productId, collectionId) {
    const productCollection = await ProductCollection.findOne({
      where: {
        product_id: productId,
        collection_id: collectionId
      }
    });

    if (!productCollection) {
      return null;
    }

    await productCollection.update({ featured: !productCollection.featured });
    return productCollection;
  }

  /**
   * Get featured products in a collection
   */
  async getFeaturedProducts(collectionId) {
    return await ProductCollection.findAll({
      where: {
        collection_id: collectionId,
        featured: true
      },
      include: [
        {
          model: Product,
          as: 'product',
          where: { status: 'active' },
          required: false
        }
      ],
      order: [['sort_order', 'ASC']]
    });
  }

  /**
   * Count products in a collection
   */
  async countProductsInCollection(collectionId) {
    return await ProductCollection.count({
      where: { collection_id: collectionId }
    });
  }

  /**
   * Check if product is in collection
   */
  async isProductInCollection(productId, collectionId) {
    const count = await ProductCollection.count({
      where: {
        product_id: productId,
        collection_id: collectionId
      }
    });
    return count > 0;
  }
}

export default new ProductCollectionRepository();
