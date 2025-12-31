import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const CartItem = sequelize.define("cart_items", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  cart_id: DataTypes.INTEGER,
  product_variant_id: DataTypes.INTEGER,
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  added_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

setUpdatedAtHook(CartItem);
