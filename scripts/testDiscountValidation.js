/**
 * Test Script for Product-Based Discount Validation
 *
 * This script demonstrates how to create discounts with different product eligibility criteria
 * and test if they work correctly.
 *
 * Usage: node scripts/testDiscountValidation.js
 */

import { Discount } from "../models/index.js";
import { sequelize } from "../config/db.config.js";

async function testProductBasedDiscounts() {
  console.log("=== Testing Product-Based Discount Validation ===\n");

  try {
    await sequelize.authenticate();
    console.log("✅ Database connected.\n");

    // Example 1: Category-based discount
    console.log("📦 Example 1: Category-based Discount");
    console.log("─".repeat(50));
    const categoryDiscount = await Discount.create({
      name: "Giảm giá Áo nam",
      code: "AO20",
      description: "Giảm 20% cho các sản phẩm thuộc danh mục Áo nam",
      discount_type: "percentage",
      discount_value: 20,
      max_discount_amount: 200000,
      min_order_value: 0,
      apply_type: "code",
      applicable_to: "category",
      target_ids: [1, 2, 3], // Category IDs: Shirts, Polos, T-shirts
      start_date: new Date(),
      end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      usage_limit: 100,
      usage_count: 0,
      is_active: true,
    });
    console.log(`Created: ${categoryDiscount.code}`);
    console.log(`Applicable to: Category IDs [${categoryDiscount.target_ids.join(", ")}]`);
    console.log(`Discount: ${categoryDiscount.discount_value}% (max ${categoryDiscount.max_discount_amount}đ)\n`);

    // Example 2: Brand-based discount
    console.log("🏷️ Example 2: Brand-based Discount");
    console.log("─".repeat(50));
    const brandDiscount = await Discount.create({
      name: "Giảm giá thương hiệu Aristino",
      code: "ARISTINO15",
      description: "Giảm 15% cho các sản phẩm Aristino",
      discount_type: "percentage",
      discount_value: 15,
      min_order_value: 500000,
      apply_type: "code",
      applicable_to: "brand",
      target_ids: ["Aristino", "ARISTINO"], // Brand names
      start_date: new Date(),
      end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      usage_limit: 50,
      usage_count: 0,
      is_active: true,
    });
    console.log(`Created: ${brandDiscount.code}`);
    console.log(`Applicable to: Brand [${brandDiscount.target_ids.join(", ")}]`);
    console.log(`Min order value: ${brandDiscount.min_order_value}đ\n`);

    // Example 3: Product-specific discount
    console.log("🎯 Example 3: Product-Specific Discount");
    console.log("─".repeat(50));
    const productDiscount = await Discount.create({
      name: "Giảm giá Sản phẩm cụ thể",
      code: "SPECIAL50",
      description: "Giảm 50k cho sản phẩm ID 5, 10, 15",
      discount_type: "fixed_amount",
      discount_value: 50000,
      min_order_value: 200000,
      apply_type: "code",
      applicable_to: "product",
      target_ids: [5, 10, 15], // Product IDs
      start_date: new Date(),
      end_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days
      usage_limit: 200,
      usage_count: 0,
      is_active: true,
    });
    console.log(`Created: ${productDiscount.code}`);
    console.log(`Applicable to: Product IDs [${productDiscount.target_ids.join(", ")}]`);
    console.log(`Discount: ${productDiscount.discount_value}đ\n`);

    // Example 4: Auto-apply discount (all products)
    console.log("🚀 Example 4: Auto-Apply Discount (All Products)");
    console.log("─".repeat(50));
    const autoDiscount = await Discount.create({
      name: "Flash Sale Tự Động",
      code: null, // No code = auto-apply
      description: "Tự động giảm 10% cho đơn hàng trên 1 triệu",
      discount_type: "percentage",
      discount_value: 10,
      max_discount_amount: 100000,
      min_order_value: 1000000,
      apply_type: "auto_apply",
      applicable_to: "all", // Applies to all products
      target_ids: [],
      start_date: new Date(),
      end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      usage_limit: 1000,
      usage_count: 0,
      is_active: true,
    });
    console.log(`Created: Auto-apply discount`);
    console.log(`Applicable to: All products`);
    console.log(`Min order value: ${autoDiscount.min_order_value}đ\n`);

    // Example 5: Free shipping discount
    console.log("🚚 Example 5: Free Shipping Discount");
    console.log("─".repeat(50));
    const shippingDiscount = await Discount.create({
      name: "Freeship nội thành",
      code: "FREESHIP",
      description: "Miễn phí vận chuyển cho đơn hàng từ 300k",
      discount_type: "free_shipping",
      discount_value: 0, // Not used for free_shipping
      min_order_value: 300000,
      apply_type: "code",
      applicable_to: "all",
      target_ids: [],
      start_date: new Date(),
      end_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
      usage_limit: 500,
      usage_count: 0,
      is_active: true,
    });
    console.log(`Created: ${shippingDiscount.code}`);
    console.log(`Type: Free shipping`);
    console.log(`Min order value: ${shippingDiscount.min_order_value}đ\n`);

    console.log("=".repeat(50));
    console.log("✅ Successfully created 5 test discounts!");
    console.log("=".repeat(50));
    console.log("\n📝 Test Scenarios:");
    console.log("─────────────────────────────────────────");
    console.log("1. Try applying 'AO20' code:");
    console.log("   - Cart with Category 1 products → ✅ Should apply");
    console.log("   - Cart with Category 5 products → ❌ Should reject\n");
    console.log("2. Try applying 'ARISTINO15' code:");
    console.log("   - Cart with Aristino brand products → ✅ Should apply");
    console.log("   - Cart with other brand products → ❌ Should reject\n");
    console.log("3. Try applying 'SPECIAL50' code:");
    console.log("   - Cart with Product ID 5 → ✅ Should apply");
    console.log("   - Cart with Product ID 20 → ❌ Should reject\n");
    console.log("4. Add products worth >1M to cart:");
    console.log("   - Should auto-apply Flash Sale discount\n");
    console.log("5. Try applying 'FREESHIP' code:");
    console.log("   - Cart with total >= 300k → ✅ Free shipping");
    console.log("   - Cart with total < 300k → ❌ Should reject\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

testProductBasedDiscounts();
