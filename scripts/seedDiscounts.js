import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Load environment variables from backend/.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

const { sequelize, Discount } = await import("../models/index.js");

/**
 * Test Discounts for Development
 *
 * Includes various discount types for testing:
 * 1. Code-based percentage discounts
 * 2. Code-based fixed amount discounts
 * 3. Free shipping discounts
 * 4. Auto-apply discounts (flash sales)
 * 5. Category-specific discounts
 * 6. First-time customer discounts
 * 7. Bundle/combo discounts
 */

const DISCOUNTS = [
  // ========== PERCENTAGE DISCOUNTS (CODE-BASED) ==========
  {
    name: "Giảm 20% Đơn Hàng Từ 500K",
    code: "SALE20",
    description: "Giảm 20% cho đơn hàng từ 500.000đ. Giảm tối đa 200.000đ",
    discount_type: "percentage",
    discount_value: 20.00,
    max_discount_amount: 200000.00,
    min_order_value: 500000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 1000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Giảm 15% Đơn Hàng Từ 300K",
    code: "SALE15",
    description: "Giảm 15% cho đơn hàng từ 300.000đ. Giảm tối đa 150.000đ",
    discount_type: "percentage",
    discount_value: 15.00,
    max_discount_amount: 150000.00,
    min_order_value: 300000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 2000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Giảm 50% Đơn Hàng Từ 2 Triệu",
    code: "MEGA50",
    description: "MEGA SALE - Giảm 50% cho đơn hàng từ 2.000.000đ. Giảm tối đa 1.000.000đ",
    discount_type: "percentage",
    discount_value: 50.00,
    max_discount_amount: 1000000.00,
    min_order_value: 2000000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-06-30T23:59:59.000Z"),
    usage_limit: 100,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== FIXED AMOUNT DISCOUNTS (CODE-BASED) ==========
  {
    name: "Giảm Trực Tiếp 100K",
    code: "GIAM100K",
    description: "Giảm trực tiếp 100.000đ cho đơn hàng từ 500.000đ",
    discount_type: "fixed_amount",
    discount_value: 100000.00,
    max_discount_amount: null,
    min_order_value: 500000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 5000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Giảm Trực Tiếp 50K",
    code: "GIAM50K",
    description: "Giảm trực tiếp 50.000đ cho đơn hàng từ 300.000đ",
    discount_type: "fixed_amount",
    discount_value: 50000.00,
    max_discount_amount: null,
    min_order_value: 300000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 10000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Giảm Trực Tiếp 500K",
    code: "GIAM500K",
    description: "Giảm trực tiếp 500.000đ cho đơn hàng từ 3.000.000đ",
    discount_type: "fixed_amount",
    discount_value: 500000.00,
    max_discount_amount: null,
    min_order_value: 3000000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-06-30T23:59:59.000Z"),
    usage_limit: 200,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== FREE SHIPPING DISCOUNTS ==========
  {
    name: "Freeship Đơn Hàng Từ 200K",
    code: "FREESHIP200K",
    description: "Miễn phí vận chuyển cho đơn hàng từ 200.000đ",
    discount_type: "free_shipping",
    discount_value: 0,
    max_discount_amount: null,
    min_order_value: 200000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 10000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Freeship Đơn Hàng Từ 0Đ",
    code: "FREESHIPALL",
    description: "Miễn phí vận chuyển cho mọi đơn hàng (không giới hạn giá trị)",
    discount_type: "free_shipping",
    discount_value: 0,
    max_discount_amount: null,
    min_order_value: 0,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-03-31T23:59:59.000Z"),
    usage_limit: 5000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== AUTO-APPLY DISCOUNTS (FLASH SALE) ==========
  {
    name: "Flash Sale Giảm 10%",
    code: null,
    description: "Flash Sale - Giảm tự động 10% cho tất cả đơn hàng. Giảm tối đa 100.000đ",
    discount_type: "percentage",
    discount_value: 10.00,
    max_discount_amount: 100000.00,
    min_order_value: 0,
    apply_type: "auto_apply",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 100000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Flash Sale Giảm 5% Mua Sắm Online",
    code: null,
    description: "Tự động giảm 5% cho đơn hàng online. Không giới hạn giá trị giảm",
    discount_type: "percentage",
    discount_value: 5.00,
    max_discount_amount: null,
    min_order_value: 100000.00,
    apply_type: "auto_apply",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 50000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== CATEGORY-SPECIFIC DISCOUNTS ==========
  {
    name: "Giảm 25% Áo Sơ Mi",
    code: "AO25",
    description: "Giảm 25% khi mua Áo Sơ Mi. Giảm tối đa 300.000đ",
    discount_type: "percentage",
    discount_value: 25.00,
    max_discount_amount: 300000.00,
    min_order_value: 200000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 1000,
    usage_count: 0,
    applicable_to: "category",
    target_ids: ["ao-so-mi"], // category slug
    is_active: true,
  },
  {
    name: "Giảm 30% Quần Jeans",
    code: "JEANS30",
    description: "Giảm 30% khi mua Quần Jeans. Giảm tối đa 400.000đ",
    discount_type: "percentage",
    discount_value: 30.00,
    max_discount_amount: 400000.00,
    min_order_value: 300000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 800,
    usage_count: 0,
    applicable_to: "category",
    target_ids: ["quan-jeans"], // category slug
    is_active: true,
  },
  {
    name: "Giảm 150K Mua Nước Hoa",
    code: "PERFUME150",
    description: "Giảm trực tiếp 150.000đ khi mua Nước Hoa. Đơn từ 500.000đ",
    discount_type: "fixed_amount",
    discount_value: 150000.00,
    max_discount_amount: null,
    min_order_value: 500000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 500,
    usage_count: 0,
    applicable_to: "category",
    target_ids: ["nuoc-hoa"], // category slug
    is_active: true,
  },

  // ========== NEW CUSTOMER DISCOUNT ==========
  {
    name: "Giảm 50K Khách Hàng Mới",
    code: "NEWUSER50K",
    description: "ƯU ĐÃI DÀNH RIÊNG CHO KHÁCH HÀNG MỚI - Giảm 50.000đ cho đơn từ 200.000đ",
    discount_type: "fixed_amount",
    discount_value: 50000.00,
    max_discount_amount: null,
    min_order_value: 200000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 50000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== LIMITED TIME FLASH SALE ==========
  {
    name: "Flash Sale Giảm 40% Chỉ Trong Tháng 1",
    code: "FLASH40",
    description: "FLASH SALE THÁNG 1 - Giảm 40% chỉ trong tháng 1. Giảm tối đa 1.500.000đ",
    discount_type: "percentage",
    discount_value: 40.00,
    max_discount_amount: 1500000.00,
    min_order_value: 1000000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-01-31T23:59:59.000Z"),
    usage_limit: 500,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== BUNDLE DISCOUNTS ==========
  {
    name: "Combo Giảm 300K Khi Mua 2 Sản Phẩm",
    code: "COMBO2",
    description: "Mua 2 sản phẩm bất kỳ - Giảm 300.000đ. Đơn từ 1.000.000đ",
    discount_type: "fixed_amount",
    discount_value: 300000.00,
    max_discount_amount: null,
    min_order_value: 1000000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 2000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },
  {
    name: "Combo Giảm 500K Khi Mua 3 Sản Phẩm",
    code: "COMBO3",
    description: "Mua 3 sản phẩm bất kỳ - Giảm 500.000đ. Đơn từ 1.500.000đ",
    discount_type: "fixed_amount",
    discount_value: 500000.00,
    max_discount_amount: null,
    min_order_value: 1500000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 1000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: true,
  },

  // ========== EXPIRED/INACTIVE DISCOUNTS (FOR TESTING) ==========
  {
    name: "Mã Đã Hết Hạn",
    code: "EXPIRED10",
    description: "Mã giảm giá đã hết hạn (dùng để test)",
    discount_type: "percentage",
    discount_value: 10.00,
    max_discount_amount: 50000.00,
    min_order_value: 100000.00,
    apply_type: "code",
    start_date: new Date("2024-01-01T00:00:00.000Z"),
    end_date: new Date("2024-12-31T23:59:59.000Z"),
    usage_limit: 1000,
    usage_count: 100,
    applicable_to: "all",
    target_ids: [],
    is_active: false,
  },
  {
    name: "Mã Tạm Thời Vô Hiệu",
    code: "INACTIVE20",
    description: "Mã giảm giá đang bị vô hiệu hóa (dùng để test)",
    discount_type: "percentage",
    discount_value: 20.00,
    max_discount_amount: 100000.00,
    min_order_value: 200000.00,
    apply_type: "code",
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    end_date: new Date("2025-12-31T23:59:59.000Z"),
    usage_limit: 1000,
    usage_count: 0,
    applicable_to: "all",
    target_ids: [],
    is_active: false,
  },
];

async function seedDiscounts() {
  console.log("🎟️  Starting discounts seed...\n");

  try {
    // Authenticate database connection
    await sequelize.authenticate();
    console.log("✅ Database connected.\n");

    let createdCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    console.log(`📦 Processing ${DISCOUNTS.length} discounts...\n`);

    for (const discountData of DISCOUNTS) {
      try {
        // Check if discount already exists (by code or name)
        const existing = await Discount.findOne({
          where: discountData.code
            ? { code: discountData.code }
            : { name: discountData.name, apply_type: "auto_apply" }
        });

        if (existing) {
          // Update existing discount
          await existing.update(discountData);
          console.log(
            `  🔄 Updated: "${discountData.name}" ${discountData.code ? `(${discountData.code})` : "(auto-apply)"}`
          );
          updatedCount++;
        } else {
          // Create new discount
          await Discount.create(discountData);
          console.log(
            `  ✅ Created: "${discountData.name}" ${discountData.code ? `(${discountData.code})` : "(auto-apply)"}`
          );
          createdCount++;
        }
      } catch (error) {
        console.error(
          `  ❌ Error processing "${discountData.name}": ${error.message}`
        );
        skippedCount++;
      }
    }

    console.log("\n📊 Summary:");
    console.log(`  • Created: ${createdCount} discounts`);
    console.log(`  • Updated: ${updatedCount} discounts`);
    console.log(`  • Skipped: ${skippedCount} discounts`);
    console.log(`  • Total processed: ${DISCOUNTS.length} discounts`);

    // Display active discount codes summary
    console.log("\n🎫 Active Discount Codes:");
    const activeDiscounts = DISCOUNTS.filter((d) => d.is_active && d.code);
    const grouped = {
      percentage: activeDiscounts.filter((d) => d.discount_type === "percentage"),
      fixed: activeDiscounts.filter((d) => d.discount_type === "fixed_amount"),
      freeship: activeDiscounts.filter((d) => d.discount_type === "free_shipping"),
    };

    console.log(`  • Percentage (${grouped.percentage.length}): ${grouped.percentage.map((d) => d.code).join(", ")}`);
    console.log(`  • Fixed Amount (${grouped.fixed.length}): ${grouped.fixed.map((d) => d.code).join(", ")}`);
    console.log(`  • Free Shipping (${grouped.freeship.length}): ${grouped.freeship.map((d) => d.code).join(", ")}`);
    console.log(`  • Auto-Apply: ${activeDiscounts.filter((d) => !d.code).length} discounts`);

    // Display inactive/expired for testing
    const inactiveDiscounts = DISCOUNTS.filter((d) => !d.is_active);
    if (inactiveDiscounts.length > 0) {
      console.log(`\n⚠️  Inactive/Expired (for testing): ${inactiveDiscounts.map((d) => d.code || d.name).join(", ")}`);
    }

    console.log("\n✨ Discounts seeded successfully!\n");
  } catch (error) {
    console.error("❌ Error seeding discounts:", error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await sequelize.close();
    console.log("🔌 Database connection closed.");
  }
}

// Run the seed
seedDiscounts();
