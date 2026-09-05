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
// Default to 'none' to avoid running slow ALTER TABLE queries on every boot.
// Set SYNC_STRATEGY=alter in .env when you modify model definitions.
const syncStrategy = process.env.SYNC_STRATEGY || "none";

async function syncModel(model, label) {
  if (syncStrategy === "force") {
    await model.sync({ force: true });
  } else if (syncStrategy === "alter") {
    await model.sync({ alter: true });
  } else if (syncStrategy === "none") {
    // Skip sync for fast server boot
    return;
  } else {
    await model.sync();
  }
}

async function initDatabase() {
  const startTime = Date.now();
  try {
    console.log("⏳ Authenticating database connection...");
    await sequelize.authenticate();
    console.log("✅ Database authentication successful.");

    const models = [
      { model: User, name: "User" },
      { model: Category, name: "Category" },
      { model: Discount, name: "Discount" },
      { model: ShippingAddress, name: "ShippingAddress" },
      { model: Product, name: "Product" },
      { model: ProductVariant, name: "ProductVariant" },
      { model: Cart, name: "Cart" },
      { model: CartItem, name: "CartItem" },
      { model: Order, name: "Order" },
      { model: OrderItem, name: "OrderItem" },
      { model: Payment, name: "Payment" },
      { model: Review, name: "Review" },
      { model: Wishlist, name: "Wishlist" },
      { model: Collection, name: "Collection" },
      { model: ProductCollection, name: "ProductCollection" },
    ];

    console.log(`🔄 Sync strategy: ${syncStrategy}`);
    
    if (syncStrategy === "none") {
      console.log("⚡ Skipping database table sync (SYNC_STRATEGY=none). Server boots instantly!");
    } else {
      for (const item of models) {
        const stepStart = Date.now();
        process.stdout.write(`   - Syncing ${item.name}... `);
        await syncModel(item.model, item.name);
        console.log(`done (${Date.now() - stepStart}ms)`);
      }
    }

    const duration = Date.now() - startTime;
    console.log(`✨ Database initialization completed in ${duration}ms`);
  } catch (error) {
    console.error("❌ Database initialization failed after", Date.now() - startTime, "ms");
    console.error("Error details:", error.message);
    throw error;
  }
}

export const startServer = async () => {
  await initDatabase();
};

