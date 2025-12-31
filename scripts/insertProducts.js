import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join, isAbsolute } from "path";
import fs from "fs/promises";

// Load environment variables from backend/.env FIRST
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

// Import models after env is loaded
const {
  sequelize,
  Category,
  Product,
  ProductVariant,
  CartItem,
  Wishlist
} = await import("../models/index.js");

const now = () => new Date();

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

function coerceArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

async function loadProductsFromFile(filePath) {
  const absolutePath = isAbsolute(filePath)
    ? filePath
    : join(process.cwd(), filePath);
  const raw = await fs.readFile(absolutePath, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    throw new Error("Input JSON must be an array of products");
  }
  return data;
}

// Minimal inline fallback sample (use a JSON file in practice)
const PRODUCTS_FALLBACK = [
  // {
  //   name: "Sample Product",
  //   brand: "Brand",
  //   basePrice: 100000,
  //   salePrice: null,
  //   description: "...",
  //   images: ["https://example.com/image.jpg"],
  //   tags: ["NEW"],
  //   slug: "sample-product", // optional
  //   category: "Áo Sơ Mi",
  //   variants: [
  //     { sku: "SAMPLE-001", size: "M", color: "Đen", price: 100000, stock: 10, imageUrl: "https://example.com/variant.jpg" }
  //   ]
  // }
];

async function upsertProductAndVariants(p, { transaction }) {
  const cat = await upsertCategoryByName(p.category || "Uncategorized", { transaction });
  const slug = p.slug || slugify(p.name);
  const images = coerceArray(p.images);
  const tags = coerceArray(p.tags);

  // Upsert product by slug
  let product = await Product.findOne({ where: { slug }, transaction });
  const basePayload = {
    name: p.name,
    description: p.description ?? null,
    brand: p.brand ?? null,
    base_price: p.basePrice ?? null,
    sale_price: p.salePrice ?? null,
    category_id: cat?.id ?? null,
    images,
    tags,
    slug,
    status: "active",
    is_new: tags.includes("NEW"),
  };

  if (product) {
    await product.update({ ...basePayload, updated_at: now() }, { transaction });
  } else {
    product = await Product.create(
      { ...basePayload, created_at: now(), updated_at: now() },
      { transaction }
    );
  }

  // Upsert variants by SKU (or generated one)
  const variants = Array.isArray(p.variants) ? p.variants : [];
  let created = 0;
  let updated = 0;
  for (const v of variants) {
    const fallbackSkuParts = [slug, v.size || "one-size", v.color || "default"]
      .map((x) => slugify(x))
      .filter(Boolean);
    const variantSku = v.sku || fallbackSkuParts.join("-");
    let variant = await ProductVariant.findOne({ where: { sku: variantSku }, transaction });
    const variantPayload = {
      product_id: product.id,
      color: v.color ?? null,
      size: v.size ?? null,
      sku: variantSku,
      price: v.price ?? p.basePrice ?? null,
      stock_quantity: v.stock ?? 0,
      image_url: v.imageUrl ?? (images[0] || null),
    };

    if (variant) {
      await variant.update({ ...variantPayload, updated_at: now() }, { transaction });
      updated += 1;
    } else {
      await ProductVariant.create(
        { ...variantPayload, created_at: now(), updated_at: now() },
        { transaction }
      );
      created += 1;
    }
  }

  return { product, variantsCreated: created, variantsUpdated: updated };
}

async function main() {
  const inputPath = process.argv[2];
  let productsInput = PRODUCTS_FALLBACK;

  if (inputPath) {
    console.log(`📄 Loading products from: ${inputPath}`);
    productsInput = await loadProductsFromFile(inputPath);
  } else {
    console.log("ℹ️ No file provided. Using inline PRODUCTS_FALLBACK (likely empty).");
  }

  await sequelize.authenticate();
  const transaction = await sequelize.transaction();

  try {
    
    // Xóa toàn bộ sản phẩm và variants hiện có
    console.log("🧹 Clearing cart items referencing variants...");
    const deletedCartItems = await CartItem.destroy({ where: {}, transaction });
    console.log("🧹 Clearing wishlists referencing products...");
const deletedWishlists = await Wishlist.destroy({ where: {}, transaction });
    console.log("🗑️ Deleting all existing products and variants...");
    const deletedVariants = await ProductVariant.destroy({ where: {}, transaction });
    const deletedProducts = await Product.destroy({ where: {}, transaction });
    console.log(
      `✅ Deleted ${deletedCartItems} cart items, ${deletedWishlists} wishlists, ${deletedVariants} variants and ${deletedProducts} products.`
    );

    let productCount = 0;
    let variantCreated = 0;
    let variantUpdated = 0;

    for (const [index, p] of productsInput.entries()) {
      if (!p?.name || p.basePrice == null) {
        console.warn("⚠️ Skipping product without required fields 'name' and 'basePrice'", p);
        continue;
      }
      console.log(
        `➡️  [${index + 1}/${productsInput.length}] Inserting: ${p.name} (${p.variants?.length ?? 0} variants)`
      );
      const { variantsCreated, variantsUpdated } = await upsertProductAndVariants(p, { transaction });
      productCount += 1;
      variantCreated += variantsCreated;
      variantUpdated += variantsUpdated;
      console.log(
        `✅  Done: ${p.name} (created ${variantsCreated}, updated ${variantsUpdated})`
      );
    }

    await transaction.commit();
    console.log("✅ Insert completed:", {
      products: productCount,
      variants_created: variantCreated,
      variants_updated: variantUpdated,
    });
  } catch (err) {
    await transaction.rollback();
    console.error("❌ ERROR while inserting products:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
