import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const Product = sequelize.define("products", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING(255),
  description: DataTypes.TEXT,
  brand: DataTypes.STRING(100),
  base_price: DataTypes.DECIMAL(12,2),
  category_id: DataTypes.INTEGER,
  images: { type: DataTypes.JSONB, defaultValue: [] },
  status: { type: DataTypes.STRING(20), defaultValue: "active" },
  slug: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: true,
  },
  sale_price: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: true,
  },
  is_new: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tags: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  collection: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

setUpdatedAtHook(Product);

// Hook: Tự động xóa product_variant và reviews khi xóa product

Product.beforeDestroy(async (product, options) => {
  try {
    const ProductVariant = sequelize.models.product_variants;
    const Review = sequelize.models.reviews;

    // Xóa tất cả product_variants của product này
    if (ProductVariant) {
      await ProductVariant.destroy({
        where: { product_id: product.id },
        transaction: options.transaction,
      });
    }

    // Xóa tất cả reviews của product này
    if (Review) {
      await Review.destroy({
        where: { product_id: product.id },
        transaction: options.transaction,
      });
    }
  } catch (error) {
    console.error("Error deleting related data:", error);
    throw error;
  }
});
