
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

// Load environment variables from backend/.env FIRST
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

// Now import models after env is loaded
const {
  sequelize,
  User,
  Category,
  Product,
  ProductVariant,
  Cart,
  CartItem,
  ShippingAddress,
  Discount,
  Wishlist,
} = await import("../models/index.js");

/** =========================
 *  1) RAW PRODUCTS (PASTE MORE HERE)
 *  ========================= */
const PRODUCTS_RAW = [
  {
    name: "Áo Sơ Mi Nam Kẻ Aristino Business Regular Fit 1LS0340S2",
    sku: "AO-SO-MI-NAM-KE-ARIS",
    brand: "Aristino Business",
    basePrice: 1700000,
    salePrice: null,
    description:
      "Tên sản phẩm: Áo Sơ Mi Nam Kẻ Aristino Business Regular Fit 1LS0340S2\nMã rút gọn: 1LS0340S2\nKiểu dáng: Dáng vừa/ Regular Fit\n...",
    images: [
      "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg",
      "https://cdn.hstatic.net/products/200000887901/1_70540c629f094a378b124afef11c2957.png",
      "https://cdn.hstatic.net/products/200000887901/img_7215_46ba75454dab4fe9a66dc57c39cb7d9e.jpg",
      "https://cdn.hstatic.net/products/200000887901/img_7216_f74a0907757246299b87ef0e51f9b000.jpg",
      "https://cdn.hstatic.net/products/200000887901/img_7217_7b2e0385d6004e21bb0bfd5ac74a1eb5.jpg",
      "https://cdn.hstatic.net/products/200000887901/img_7218_df27bd0a60a443e1b6fe11a784771954.jpg",
    ],
    tags: ["NEW"],
    slug: "ao-so-mi-nam-ke-aristino-business-regular-fit-1ls0340s2",
    category: "Áo Sơ Mi",
    variants: [
      {
        sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-Đen kẻ sọc cam-den-ke-soc-cam",
        size: "Đen kẻ sọc cam",
        color: "Đen kẻ sọc cam",
        price: 1700000,
        stock: 51,
        imageUrl:
          "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg",
        isActive: true,
      },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-38-den-ke-soc-cam", size: "38", color: "Đen kẻ sọc cam", price: 1700000, stock: 49, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-39-den-ke-soc-cam", size: "39", color: "Đen kẻ sọc cam", price: 1700000, stock: 41, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-40-den-ke-soc-cam", size: "40", color: "Đen kẻ sọc cam", price: 1700000, stock: 57, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-41-den-ke-soc-cam", size: "41", color: "Đen kẻ sọc cam", price: 1700000, stock: 18, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-42-den-ke-soc-cam", size: "42", color: "Đen kẻ sọc cam", price: 1700000, stock: 42, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-KE-ARISTINO-BUSINESS-REGULAR-FIT-1LS0340S2-43-den-ke-soc-cam", size: "43", color: "Đen kẻ sọc cam", price: 1700000, stock: 56, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg", isActive: true },
    ],
  },
  {
    name: "Áo Sơ Mi Nam Trắng Solid Bamboo Tay Dài Aristino Regular Fit ALS600EDP01",
    sku: "ALS600EDP01",
    brand: "Aristino",
    basePrice: 89500000,
    salePrice: 805500,
    description:
      "Tên sản phẩm: Áo Sơ Mi Nam Trắng Solid Bamboo Tay Dài Aristino Regular Fit ALS600EDP01\n...",
    images: [
      "https://cdn.hstatic.net/products/200000887901/als600edp01___2__232be60b1ec249ae91f3ed22705617b2.jpg",
      "https://cdn.hstatic.net/products/200000887901/als600edp01___1__603b4d16ec4844ec94d9905cf585990f.jpg",
      "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg",
    ],
    tags: ["NEW"],
    slug: "ao-so-mi-nam-trang-solid-bamboo-tay-dai-aristino-regular-fit-als600edp01",
    category: "Áo Sơ Mi",
    variants: [
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-Trắng solid-trang-solid", size: "Trắng solid", color: "Trắng solid", price: 805500, stock: 31, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-38-trang-solid", size: "38", color: "Trắng solid", price: 805500, stock: 50, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-39-trang-solid", size: "39", color: "Trắng solid", price: 805500, stock: 54, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-40-trang-solid", size: "40", color: "Trắng solid", price: 805500, stock: 39, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-41-trang-solid", size: "41", color: "Trắng solid", price: 805500, stock: 51, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-42-trang-solid", size: "42", color: "Trắng solid", price: 805500, stock: 33, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-43-trang-solid", size: "43", color: "Trắng solid", price: 805500, stock: 46, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
      { sku: "AO-SO-MI-NAM-TRANG-SOLID-BAMBOO-TAY-DAI-ARISTINO-REGULAR-FIT-ALS600EDP01-44-trang-solid", size: "44", color: "Trắng solid", price: 805500, stock: 52, imageUrl: "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg", isActive: true },
    ],
  },
  // TODO: paste thêm các object sản phẩm còn lại của bạn vào đây (cùng format)
];

/** =========================
 *  2) HELPERS
 *  ========================= */
const now = () => new Date();

async function truncateAll({ transaction }) {
  // Postgres: TRUNCATE ... RESTART IDENTITY CASCADE
  // Lưu ý: tableName đúng theo define() trong models
  const tables = [
    "cart_items",
    "carts",
    "wishlists",
    "payments",
    "order_items",
    "orders",
    "shipping_addresses",
    "product_variants",
    "products",
    "categories",
    "discounts",
    "coupons",
    "promotions",
    "reviews",
    "users",
  ];

  await sequelize.query(
    `TRUNCATE TABLE ${tables.map((t) => `"${t}"`).join(", ")} RESTART IDENTITY CASCADE;`,
    { transaction }
  );
}

async function upsertCategoryByName(name, { transaction }) {
  const slug = slugify(name);
  const [cat] = await Category.findOrCreate({
    where: { slug },
    defaults: {
      name,
      slug,
      parent_id: null,
      level: 0,
      sort_order: 0,
      created_at: now(),
      updated_at: now(),
    },
    transaction,
  });
  return cat;
}

function slugify(str) {
  return String(str || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/** =========================
 *  3) SEED
 *  ========================= */
async function main() {
  await sequelize.authenticate();
  
  console.log("🔄 Syncing database (force: true - will drop and recreate tables)...");
  await sequelize.sync({ force: true });
  
  const transaction = await sequelize.transaction();

  try {
    console.log("👤 Seeding users...");
    const passwordHash = await bcrypt.hash("123456", 10);

    const users = await User.bulkCreate(
      [
        {
          email: "demo1@gmail.com",
          password: passwordHash,
          full_name: "Demo User 1",
          role: "customer",
          is_locked: false,
          token_version: 0,
          created_at: now(),
          updated_at: now(),
        },
        {
          email: "demo2@gmail.com",
          password: passwordHash,
          full_name: "Demo User 2",
          role: "customer",
          is_locked: false,
          token_version: 0,
          created_at: now(),
          updated_at: now(),
        },
      ],
      { transaction, returning: true }
    );

    console.log("🗂️ Seeding categories...");
    const categoryMap = new Map();
    for (const p of PRODUCTS_RAW) {
      const catName = p.category || "Uncategorized";
      if (!categoryMap.has(catName)) {
        const cat = await upsertCategoryByName(catName, { transaction });
        categoryMap.set(catName, cat);
      }
    }

    console.log("📦 Seeding products...");
    const createdProducts = [];
    for (const p of PRODUCTS_RAW) {
      const cat = categoryMap.get(p.category || "Uncategorized");
      const product = await Product.create(
        {
          name: p.name,
          description: p.description,
          brand: p.brand,
          base_price: p.basePrice,
          sale_price: p.salePrice,
          category_id: cat?.id ?? null,
          images: p.images || [],
          tags: p.tags || [],
          slug: p.slug || slugify(p.name),
          status: "active",
          is_new: (p.tags || []).includes("NEW"),
          created_at: now(),
          updated_at: now(),
        },
        { transaction }
      );
      createdProducts.push({ raw: p, product });
    }

    console.log("🎛️ Seeding product variants...");
    const createdVariants = [];
    for (const item of createdProducts) {
      const { raw, product } = item;
      const variants = raw.variants || [];

      for (const v of variants) {
        const variant = await ProductVariant.create(
          {
            product_id: product.id,
            color: v.color || null,
            size: v.size || null,
            sku: v.sku || null,
            price: v.price ?? data.base_price,
            stock_quantity: v.stock ?? 0,
            image_url: v.imageUrl || null,
            created_at: now(),
            updated_at: now(),
          },
          { transaction }
        );
        createdVariants.push(variant);
      }
    }

    console.log("🏷️ Seeding unified discounts...");
    const discounts = await Discount.bulkCreate(
      [
        {
          name: "Welcome Coupon 10%",
          code: "WELCOME10",
          description: "Welcome discount for new users",
          discount_type: "percentage",
          discount_value: 10,
          min_order_value: 200000,
          apply_type: "code",
          start_date: new Date("2025-01-01"),
          end_date: new Date("2026-12-31"),
          usage_limit: 1000,
          usage_count: 0,
          applicable_to: "all",
          target_ids: [],
          is_active: true,
          created_at: now(),
          updated_at: now(),
        },
        {
          name: "Giảm 50K đơn từ 500K",
          code: "G50K",
          description: "Fixed amount discount",
          discount_type: "fixed_amount",
          discount_value: 50000,
          min_order_value: 500000,
          apply_type: "code",
          start_date: new Date("2025-01-01"),
          end_date: new Date("2026-12-31"),
          usage_limit: 1000,
          usage_count: 0,
          applicable_to: "all",
          target_ids: [],
          is_active: true,
          created_at: now(),
          updated_at: now(),
        },
        {
          name: "Flash Sale 5%",
          code: null,
          description: "Auto apply flash sale discount",
          discount_type: "percentage",
          discount_value: 5,
          min_order_value: 0,
          apply_type: "auto_apply",
          start_date: new Date("2025-01-01"),
          end_date: new Date("2026-12-31"),
          usage_limit: 9999,
          usage_count: 0,
          applicable_to: "all",
          target_ids: [],
          is_active: true,
          created_at: now(),
          updated_at: now(),
        },
      ],
      { transaction, returning: true }
    );

    console.log("📍 Seeding shipping addresses...");
    await ShippingAddress.bulkCreate(
      [
        {
          user_id: users[0].id,
          full_name: "Demo User 1",
          phone: "0900000001",
          address: "123 Nguyễn Trãi",
          city: "Hà Nội",
          district: "Thanh Xuân",
          ward: "Thượng Đình",
          is_default: true,
          created_at: now(),
          updated_at: now(),
        },
      ],
      { transaction }
    );

    console.log("🛒 Seeding cart + items (demo)...");
    const cart = await Cart.create(
      {
        user_id: users[0].id,
        session_id: null,
        is_guest: false,
        created_at: now(),
        updated_at: now(),
      },
      { transaction }
    );

    // add 2 items random (nếu có đủ variant)
    const pickVariants = createdVariants.slice(0, 2);
    for (const [idx, v] of pickVariants.entries()) {
      await CartItem.create(
        {
          cart_id: cart.id,
          product_variant_id: v.id,
          quantity: idx === 0 ? 1 : 2,
          added_at: now(),
          created_at: now(),
          updated_at: now(),
        },
        { transaction }
      );
    }

    console.log("💜 Seeding wishlists (demo)...");
    const products = await Product.findAll({ limit: 2, order: [["id", "ASC"]], transaction });
    for (const p of products) {
      await Wishlist.create(
        { user_id: users[0].id, product_id: p.id },
        { transaction }
      );
    }

    await transaction.commit();
    console.log("✅ DONE. Seeded:", {
      users: users.length,
      categories: categoryMap.size,
      products: createdProducts.length,
      variants: createdVariants.length,
      discounts: discounts.length,
    });
  } catch (err) {
    await transaction.rollback();
    console.error("❌ ERROR:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
