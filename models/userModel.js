import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING(255), // Hashed password
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null
  },
  phone: DataTypes.STRING(20),
  role: { type: DataTypes.STRING(20), defaultValue: "customer" },
  is_locked: { type: DataTypes.BOOLEAN, defaultValue: false }, //lock account
  provider: DataTypes.STRING(50),
  provider_id: DataTypes.STRING(100),
  refresh_token: DataTypes.TEXT,
  token_version: { type: DataTypes.INTEGER, defaultValue: 0 },
  email_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  email_verification_token: { type: DataTypes.STRING(255), allowNull: true, defaultValue: null },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});


User.addScope('withoutSecrets', {
  attributes: {
    exclude: ['password', 'refresh_token']
  }
});

User.addScope('public', {
  attributes: ['id', 'email', 'name', 'phone', 'role', 'provider', 'created_at']
});

setUpdatedAtHook(User);
