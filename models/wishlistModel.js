import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

const Wishlist = sequelize.define("wishlists", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: { model: 'users', key: 'id' } // (Không bắt buộc ghi ở đây nếu đã làm association bên dưới)
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: { model: 'products', key: 'id' }
  }
}, {
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'product_id'] // Chặn 1 người thích 1 món 2 lần
    }
  ]
});

export default Wishlist;