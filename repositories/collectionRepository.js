import { Collection } from "../models/index.js";
import { Op } from "sequelize";

/**
 * Collection Repository
 *
 * Handles all database operations for collections
 */
export class CollectionRepository {
  /**
   * Find all collections with optional filters
   */
  async findAll({ status = null, includeDates = false } = {}) {
    const where = {};

    if (status) {
      where.status = status;
    }

    // For active collections, also check date ranges
    if (status === 'active' && includeDates) {
      const now = new Date();
      where[Op.or] = [
        { start_date: null }, // No start date
        { start_date: { [Op.lte]: now } }, // Start date passed
      ];
      where[Op.and] = [
        {
          [Op.or]: [
            { end_date: null }, // No end date
            { end_date: { [Op.gte]: now } }, // End date in future
          ]
        }
      ];
    }

    return await Collection.findAll({
      where,
      order: [['sort_order', 'ASC'], ['created_at', 'DESC']],
    });
  }

  /**
   * Find collection by ID
   */
  async findById(id) {
    return await Collection.findByPk(id);
  }

  /**
   * Find collection by slug
   */
  async findBySlug(slug) {
    return await Collection.findOne({
      where: { slug }
    });
  }

  /**
   * Create a new collection
   */
  async create(collectionData) {
    return await Collection.create(collectionData);
  }

  /**
   * Update collection
   */
  async update(id, collectionData) {
    const collection = await Collection.findByPk(id);
    if (!collection) {
      return null;
    }
    await collection.update(collectionData);
    return collection;
  }

  /**
   * Delete collection
   */
  async delete(id) {
    const collection = await Collection.findByPk(id);
    if (!collection) {
      return false;
    }
    await collection.destroy();
    return true;
  }

  /**
   * Check if slug exists (excluding current collection)
   */
  async slugExists(slug, excludeId = null) {
    const where = { slug };
    if (excludeId) {
      where.id = { [Op.ne]: excludeId };
    }
    const count = await Collection.count({ where });
    return count > 0;
  }

  /**
   * Get active collections (considering date ranges)
   */
  async getActiveCollections() {
    const now = new Date();
    return await Collection.findAll({
      where: {
        status: 'active',
        [Op.or]: [
          { start_date: null },
          { start_date: { [Op.lte]: now } }
        ],
        [Op.and]: [
          {
            [Op.or]: [
              { end_date: null },
              { end_date: { [Op.gte]: now } }
            ]
          }
        ]
      },
      order: [['sort_order', 'ASC'], ['created_at', 'DESC']],
    });
  }

  /**
   * Update collection status
   */
  async updateStatus(id, status) {
    const collection = await Collection.findByPk(id);
    if (!collection) {
      return null;
    }
    await collection.update({ status });
    return collection;
  }

  /**
   * Reorder collections (update sort_order)
   */
  async reorderCollections(collectionOrders) {
    // collectionOrders: [{ id: 1, sort_order: 0 }, { id: 2, sort_order: 1 }, ...]
    const promises = collectionOrders.map(({ id, sort_order }) =>
      Collection.update({ sort_order }, { where: { id } })
    );
    await Promise.all(promises);
    return true;
  }
}

export default new CollectionRepository();
