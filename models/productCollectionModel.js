import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

/**
 * ProductCollection Model (Junction Table)
 *
 * Many-to-many relationship between Products and Collections
 * Supports:
 * - Featured flag for highlighted products
 * - Custom ordering within collections
 */
export const ProductCollection = sequelize.define("product_collections", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    },
    onDelete: 'CASCADE',
    comment: "Foreign key to products table"
  },
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'collections',
      key: 'id'
    },
    onDelete: 'CASCADE',
    comment: "Foreign key to collections table"
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "Whether this product is featured in the collection"
  },
  sort_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: "Display order within the collection"
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'product_collections',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
  indexes: [
    {
      unique: true,
      fields: ['product_id', 'collection_id'],
      name: 'unique_product_collection'
    },
    {
      fields: ['collection_id', 'sort_order'],
      name: 'collection_sort_order'
    },
    {
      fields: ['product_id']
    }
  ]
});

// Hook to validate that product and collection exist
ProductCollection.addHook('beforeCreate', 'validateReferences', async (productCollection) => {
  const { Product } = await import('./productModel.js');
  const { Collection } = await import('./collectionModel.js');

  // Validate product exists
  const product = await Product.findByPk(productCollection.product_id);
  if (!product) {
    throw new Error(`Product with id ${productCollection.product_id} not found`);
  }

  // Validate collection exists
  const collection = await Collection.findByPk(productCollection.collection_id);
  if (!collection) {
    throw new Error(`Collection with id ${productCollection.collection_id} not found`);
  }
});
