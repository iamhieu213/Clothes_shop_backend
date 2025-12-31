import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

export const Discount = sequelize.define("discounts", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, unique: true, allowNull: true }, // Nếu NULL -> auto_apply (flash sale)
  description: DataTypes.TEXT,
  
  // Loại discount
  discount_type: { 
    type: DataTypes.ENUM('percentage', 'fixed_amount', 'free_shipping'), 
    allowNull: false 
  },
  discount_value: { type: DataTypes.DECIMAL(12,2), allowNull: false }, // VD: 10 (%) hoặc 50000 (VND)
  max_discount_amount: DataTypes.DECIMAL(12,2), // Giảm tối đa bao nhiêu (khi dùng %)
  min_order_value: { type: DataTypes.DECIMAL(12,2), defaultValue: 0 }, // Đơn tối thiểu
  
  // Loại áp dụng
  apply_type: {
    type: DataTypes.ENUM('auto_apply', 'code'),
    allowNull: false,
    defaultValue: 'code'
  },
  
  // Thời gian
  start_date: DataTypes.DATE, 
  end_date: DataTypes.DATE,
  
  // Giới hạn lượt dùng
  usage_limit: { type: DataTypes.INTEGER, defaultValue: 1000 },
  usage_count: { type: DataTypes.INTEGER, defaultValue: 0 },
  
  // Phạm vi áp dụng: 'all', 'brand', 'category', 'product'
  applicable_to: { 
    type: DataTypes.STRING(20), 
    defaultValue: 'all' 
  },
 
  target_ids: { 
    type: DataTypes.JSONB, 
    defaultValue: [] 
  },
  
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

setUpdatedAtHook(Discount);
