import { loadEnv } from "./config/env.js";
import {
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
  Discount,
  Review,
  Wishlist,
  Collection,
  ProductCollection,
} from "./models/index.js";

loadEnv();

const env = loadEnv();
const isProduction = env.NODE_ENV === "production";

// Sync strategy controlled by `SYNC_STRATEGY` env var.
// In Production: defaults to 'none' (fastest boot, assumes schema is ready).
// In Development: defaults to 'alter' (auto-updates schema).
const syncStrategy = process.env.SYNC_STRATEGY || (isProduction ? "none" : "alter");

async function syncModel(model, label) {
  if (syncStrategy === "force") {
    await model.sync({ force: true });
  } else if (syncStrategy === "alter") {
    await model.sync({ alter: true });
  } else if (syncStrategy === "none") {
    // Skip sync for better performance in production
    return;
  } else {
    await model.sync();
  }
}

async function initDatabase() {
  try {
    await sequelize.authenticate();

    // Level 1: No dependencies
    await syncModel(User, "User");
    await syncModel(Category, "Category");
    await syncModel(Discount, "Discount");

    // Level 2: Depends on User, Category
    await syncModel(ShippingAddress, "ShippingAddress");
    await syncModel(Product, "Product");

    // Level 3: Depends on Product, User
    await syncModel(ProductVariant, "ProductVariant");
    await syncModel(Cart, "Cart");

    // Level 4: Depends on Cart, ProductVariant
    await syncModel(CartItem, "CartItem");

    // Level 5: Depends on User, ShippingAddress, Discount
    await syncModel(Order, "Order");

    // Level 6: Depends on Order, Product, ProductVariant
    await syncModel(OrderItem, "OrderItem");
    await syncModel(Payment, "Payment");

    // Level 7: Depends on User, Product
    await syncModel(Review, "Review");
    await syncModel(Wishlist, "Wishlist");

    // Level 8: Independent collection tables
    await syncModel(Collection, "Collection");
    await syncModel(ProductCollection, "ProductCollection");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    console.error("Error details:", error.message);
    console.error("Stack trace:", error.stack);
    throw error;
  }
}

export const startServer = async () => {
  await initDatabase();
};

