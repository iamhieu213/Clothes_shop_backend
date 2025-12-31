import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

export const Order = sequelize.define("orders", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: DataTypes.INTEGER,
  shipping_address_id: DataTypes.INTEGER,
  discount_id: { type: DataTypes.INTEGER, allowNull: true }, // FK to unified Discount table
  order_number: { type: DataTypes.STRING(50), unique: true, allowNull: true },
  subtotal_amount: DataTypes.DECIMAL(12,2),
  discount_amount: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 },
  total_amount: DataTypes.DECIMAL(12,2),
  status: { type: DataTypes.STRING(20), defaultValue: "pending" },
  // Snapshot fields for discount to preserve data even if discount rules change
  discount_code_snapshot: DataTypes.STRING,
  discount_type_snapshot: DataTypes.STRING,
  discount_value_snapshot: DataTypes.DECIMAL(12,2),
  notes: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});
