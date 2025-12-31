import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const ShippingAddress = sequelize.define("shipping_addresses", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: DataTypes.INTEGER,
  name: DataTypes.STRING(100),
  phone: DataTypes.STRING(20),
  address: DataTypes.TEXT,
  city: DataTypes.STRING(100),
  district: DataTypes.STRING(100),
  ward: DataTypes.STRING(100),
  is_default: { type: DataTypes.BOOLEAN, defaultValue: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

setUpdatedAtHook(ShippingAddress);
