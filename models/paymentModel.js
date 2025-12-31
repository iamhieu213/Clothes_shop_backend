import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const Payment = sequelize.define("payments", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  order_id: DataTypes.INTEGER,
  provider: DataTypes.STRING(50),
  provider_txn_id: DataTypes.STRING(100),
  amount: DataTypes.DECIMAL(12,2),
  currency: { type: DataTypes.STRING(10), defaultValue: "VND" },
  status: DataTypes.STRING(20),
  raw_payload: DataTypes.JSONB,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

setUpdatedAtHook(Payment);

