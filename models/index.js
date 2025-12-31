// Import các models đã được khởi tạo
import { sequelize } from "../config/db.config.js";
import { User } from "./userModel.js";
import { ShippingAddress } from "./shippingAddressModel.js";
import { Category } from "./categoryModel.js";
import { Product } from "./productModel.js";
import { ProductVariant } from "./productVariantModel.js";
import { Cart } from "./cartModel.js";
import { CartItem } from "./cartItemModel.js";
import { Order } from "./orderModel.js";
import { OrderItem } from "./orderItemModel.js";
import { Payment } from "./paymentModel.js";
import { Discount } from "./discountModel.js";
import { Review } from "./reviewModel.js";
// Sửa lại import Wishlist cho đồng bộ (có ngoặc nhọn nếu export const, không ngoặc nếu export default)
// Dựa trên code cũ của bạn là 'export default Wishlist', nên import thế này là đúng:
import Wishlist from "./wishlistModel.js";
import { Collection } from "./collectionModel.js";
import { ProductCollection } from "./productCollectionModel.js"; 

// ============================================================
// 🔹 Thiết lập các mối quan hệ (Associations)

// ===== Associations =====
User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

Cart.hasMany(CartItem, { foreignKey: 'cart_id' });
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });

// Association between CartItem and ProductVariant
CartItem.belongsTo(ProductVariant, { 
  foreignKey: 'product_variant_id',
  as: 'product_variant'
});
ProductVariant.hasMany(CartItem, { 
  foreignKey: 'product_variant_id'
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",         
});
Category.hasMany(Product, {
  foreignKey: "category_id",
  as: "products",          
})

// Quan hệ Wishlist (Bắt buộc phải có để tính năng Wishlist chạy)
Wishlist.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Wishlist.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
// ------------------------------------

ProductVariant.belongsTo(Product, { 
  foreignKey: 'product_id',
  as: 'product',
  onDelete: 'CASCADE',
});
Product.hasMany(ProductVariant, {
  foreignKey: 'product_id',
  as: 'variants',
  onDelete: 'CASCADE',
});

Category.belongsTo(Category, {
  foreignKey: "parent_id",
  as: "parent",
});
Category.hasMany(Category, {
  foreignKey: "parent_id",
  as: "children",
});



Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });

// Discount associations
Discount.hasMany(Order, { foreignKey: 'discount_id' });
Order.belongsTo(Discount, { foreignKey: 'discount_id', allowNull: true });

Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'order_items' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

// OrderItem to Product association
OrderItem.belongsTo(Product, { foreignKey: 'product_id', as: 'product' });
Product.hasMany(OrderItem, { foreignKey: 'product_id', as: 'orderItems' });

// OrderItem to ProductVariant association
OrderItem.belongsTo(ProductVariant, { foreignKey: 'product_variant_id', as: 'product_variant' });
ProductVariant.hasMany(OrderItem, { foreignKey: 'product_variant_id' });

Order.hasOne(Payment, { foreignKey: 'order_id' });
Payment.belongsTo(Order, { foreignKey: 'order_id' });

// Shipping address linkage
Order.belongsTo(ShippingAddress, { foreignKey: 'shipping_address_id', as: 'shipping_address' });
ShippingAddress.hasMany(Order, { foreignKey: 'shipping_address_id' });

User.hasMany(ShippingAddress, { foreignKey: 'user_id' });
ShippingAddress.belongsTo(User, { foreignKey: 'user_id' });

Product.hasMany(Review, { foreignKey: 'product_id' });
Review.belongsTo(Product, { foreignKey: 'product_id' });

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

// Collection associations (Many-to-Many between Product and Collection)
Product.belongsToMany(Collection, {
  through: ProductCollection,
  foreignKey: 'product_id',
  otherKey: 'collection_id',
  as: 'collections'
});
Collection.belongsToMany(Product, {
  through: ProductCollection,
  foreignKey: 'collection_id',
  otherKey: 'product_id',
  as: 'products'
});

// Direct associations to the junction table for additional fields access
Collection.hasMany(ProductCollection, {
  foreignKey: 'collection_id',
  as: 'productCollections'
});
ProductCollection.belongsTo(Collection, {
  foreignKey: 'collection_id',
  as: 'collection'
});

Product.hasMany(ProductCollection, {
  foreignKey: 'product_id',
  as: 'productCollections'
});
ProductCollection.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product'
});

export {
  sequelize,
  User,
  ShippingAddress,
  Category,
  Product,
  ProductVariant,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  Discount, // Unified Discount model
  Review,
  Wishlist,
  Collection,
  ProductCollection
};