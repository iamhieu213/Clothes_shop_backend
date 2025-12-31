#!/usr/bin/env node

/**
 * Database Reset Script
 *
 * This script completely resets the database by:
 * 1. Dropping all existing tables and their data
 * 2. Recreating tables with the updated model definitions
 *
 * WARNING: This will DELETE ALL DATA in the database!
 *
 * Usage:
 *   node scripts/resetDatabase.js           # Reset with 5-second warning
 *   node scripts/resetDatabase.js --force   # Reset immediately without warning
 *
 * For production use, consider using proper migrations instead.
 */

import { loadEnv } from "../config/env.js";
import { sequelize } from "../config/db.config.js";
import {
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
} from "../models/index.js";

// Parse command line arguments
const args = process.argv.slice(2);
const forceMode = args.includes("--force");

/**
 * Main reset function
 */
async function resetDatabase() {
  try {
    // Load environment variables first
    loadEnv();

    console.log("\n" + "=".repeat(60));
    console.log("🗄️  DATABASE RESET SCRIPT");
    console.log("=".repeat(60) + "\n");

    console.log("🔗 Connecting to database...");
    await sequelize.authenticate();
    console.log(`  ✓ Connected to: ${sequelize.config.database}\n`);

    if (!forceMode) {
      console.log("\n⚠️  WARNING: This will DROP ALL TABLES and recreate them!");
      console.log("Press Ctrl+C now to cancel, or wait 5 seconds to continue...\n");

      // Give user time to cancel
      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    console.log("🔨 Dropping and recreating tables with updated schema...\n");

    // Sync in correct order - respecting foreign key dependencies
    // Level 1: No dependencies
    console.log("Level 1: Creating base tables...");
    await User.sync({ force: true });
    console.log("  ✓ users");

    await Category.sync({ force: true });
    console.log("  ✓ categories");

    await Discount.sync({ force: true });
    console.log("  ✓ discounts");

    // Level 2: Depends on User, Category
    console.log("\nLevel 2: Creating dependent tables...");
    await ShippingAddress.sync({ force: true });
    console.log("  ✓ shipping_addresses");

    await Product.sync({ force: true });
    console.log("  ✓ products");

    // Level 3: Depends on Product, User
    console.log("\nLevel 3: Creating variant and cart tables...");
    await ProductVariant.sync({ force: true });
    console.log("  ✓ product_variants");

    await Cart.sync({ force: true });
    console.log("  ✓ carts");

    // Level 4: Depends on Cart, ProductVariant
    console.log("\nLevel 4: Creating cart item tables...");
    await CartItem.sync({ force: true });
    console.log("  ✓ cart_items");

    // Level 5: Depends on User, ShippingAddress, Discount
    console.log("\nLevel 5: Creating order tables...");
    await Order.sync({ force: true });
    console.log("  ✓ orders");

    // Level 6: Depends on Order, Product, ProductVariant
    console.log("\nLevel 6: Creating order item and payment tables...");
    await OrderItem.sync({ force: true });
    console.log("  ✓ order_items");

    await Payment.sync({ force: true });
    console.log("  ✓ payments");

    // Level 7: Depends on User, Product
    console.log("\nLevel 7: Creating review and wishlist tables...");
    await Review.sync({ force: true });
    console.log("  ✓ reviews");

    await Wishlist.sync({ force: true });
    console.log("  ✓ wishlists");

    // Level 8: Collection tables (many-to-many relationship)
    console.log("\nLevel 8: Creating collection tables...");
    await Collection.sync({ force: true });
    console.log("  ✓ collections");

    await ProductCollection.sync({ force: true });
    console.log("  ✓ product_collections");

    console.log("\n" + "=".repeat(60));
    console.log("✅ ALL TABLES RECREATED SUCCESSFULLY!");
    console.log("=".repeat(60));
    console.log("\n🎉 Database reset complete! You can now restart the server.");
    console.log("\nChanges applied:");
    console.log("  • Removed: final_total from orders");
    console.log("  • Removed: collection enum from products");
    console.log("  • Removed: payment_method from payments (use provider)");
    console.log("  • Removed: access_token, expires_at, full_name from users");
    console.log("  • Removed: created_at from cart_items (use added_at)");
    console.log("  • Added: unique constraint to categories.slug");
    console.log("  • Added: validation (1-5) to reviews.rating");
    console.log("  • Added: setUpdatedAtHook to all applicable models");
    console.log("  • Added: OrderItem <-> ProductVariant association");
    console.log("  • Fixed: bootstrap.js sync order (Discount before Order)");
    console.log("\n");

    // Close database connection
    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Database reset failed:");
    console.error("   Error:", error.message);
    if (error.parent) {
      console.error("   Detail:", error.parent.message);
    }
    console.error("\n");
    await sequelize.close();
    process.exit(1);
  }
}

// Run the script
resetDatabase();
