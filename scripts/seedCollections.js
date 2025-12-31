import sequelize from "../config/db.config.js";
import { Collection } from "../models/collectionModel.js";
import { ProductCollection } from "../models/productCollectionModel.js";
import { Product } from "../models/productModel.js";
import { Category } from "../models/categoryModel.js";

/**
 * Seed Collections Script
 *
 * Creates the main category collections for Vietnamese e-commerce:
 * - Hàng Mới (New Arrivals)
 * - Áo (Shirts/Tops)
 * - Quần (Pants/Bottoms)
 * - Phụ Kiện (Accessories)
 * - Nước Hoa (Perfume)
 */

const COLLECTIONS = [
  {
    name: "Hàng Mới",
    slug: "hang-moi",
    description: "Sản phẩm mới nhất cập nhật hàng tuần",
    banner_image: null,
    status: "active",
    sort_order: 1,
    start_date: null,
    end_date: null
  },
  {
    name: "Áo",
    slug: "ao",
    description: "Thời trang áo: Áo sơ mi, áo polo, áo thun, áo khoác...",
    banner_image: null,
    status: "active",
    sort_order: 2,
    start_date: null,
    end_date: null
  },
  {
    name: "Quần",
    slug: "quan",
    description: "Thời trang quần: Quần tây, quần jeans, quần short, quần kaki...",
    banner_image: null,
    status: "active",
    sort_order: 3,
    start_date: null,
    end_date: null
  },
  {
    name: "Phụ Kiện",
    slug: "phu-kien",
    description: "Phụ kiện thời trang: Thắt lưng, ví da, cà vạt, giày, đồng hồ...",
    banner_image: null,
    status: "active",
    sort_order: 4,
    start_date: null,
    end_date: null
  },
  {
    name: "Nước Hoa",
    slug: "nuoc-hoa",
    description: "Nước hoa nam cao cấp từ các thương hiệu hàng đầu",
    banner_image: null,
    status: "active",
    sort_order: 5,
    start_date: null,
    end_date: null
  }
];

/**
 * Category to Collection mapping
 * Maps category names to collection slugs
 */
const CATEGORY_COLLECTION_MAP = {
  // Áo categories
  "Áo Sơ Mi": "ao",
  "Áo Polo": "ao",
  "Áo Thun": "ao",
  "Áo Khoác": "ao",
  "Áo Vest": "ao",
  "Áo Blazer": "ao",

  // Quần categories
  "Quần Tây": "quan",
  "Quần Jean": "quan",
  "Quần Kaki": "quan",
  "Quần Short": "quan",

  // Phụ kiện categories
  "Thắt Lưng": "phu-kien",
  "Ví Da": "phu-kien",
  "Cà Vạt": "phu-kien",
  "Giày": "phu-kien",
  "Đồng Hồ": "phu-kien",

  // Nước hoa categories
  "Nước Hoa": "nuoc-hoa",
  "Perfume": "nuoc-hoa"
};

async function seedCollections() {
  console.log("🌱 Starting collections seed...\n");

  try {
    // Sync database
    await sequelize.authenticate();
    console.log("✅ Database connected.\n");

    // Create collections
    console.log("📦 Creating collections...");
    const createdCollections = [];

    for (const collectionData of COLLECTIONS) {
      // Check if collection exists
      const existing = await Collection.findOne({
        where: { slug: collectionData.slug }
      });

      let collection;
      if (existing) {
        console.log(`  ⏭️  Collection "${collectionData.name}" already exists (slug: ${collectionData.slug})`);
        collection = existing;
      } else {
        collection = await Collection.create(collectionData);
        console.log(`  ✅ Created collection "${collectionData.name}" (slug: ${collectionData.slug})`);
      }

      createdCollections.push(collection);
    }

    console.log("\n📦 Linking products to collections based on categories...");

    // Get all categories with their products
    const categories = await Category.findAll({
      include: [{
        model: Product,
        as: 'products',
        through: { attributes: [] }
      }]
    });

    let linkedCount = 0;
    let skippedCount = 0;

    for (const category of categories) {
      const collectionSlug = CATEGORY_COLLECTION_MAP[category.name];

      if (!collectionSlug) {
        // Skip categories not in our map
        continue;
      }

      // Find the collection
      const collection = createdCollections.find(c => c.slug === collectionSlug);
      if (!collection) {
        console.log(`  ⚠️  Collection not found for category: ${category.name}`);
        continue;
      }

      // Link each product to the collection
      if (category.products && category.products.length > 0) {
        for (const product of category.products) {
          // Check if already linked
          const existingLink = await ProductCollection.findOne({
            where: {
              product_id: product.id,
              collection_id: collection.id
            }
          });

          if (!existingLink) {
            await ProductCollection.create({
              product_id: product.id,
              collection_id: collection.id,
              featured: false,
              sort_order: 0
            });
            linkedCount++;
          } else {
            skippedCount++;
          }
        }

        console.log(`  ✅ Linked ${category.products.length} products from "${category.name}" to "${collection.name}"`);
      }
    }

    console.log(`\n📊 Summary:`);
    console.log(`  • Collections created/found: ${createdCollections.length}`);
    console.log(`  • New product-collection links: ${linkedCount}`);
    console.log(`  • Existing links skipped: ${skippedCount}`);

    // Summary stats
    for (const collection of createdCollections) {
      const productCount = await ProductCollection.count({
        where: { collection_id: collection.id }
      });
      console.log(`  • "${collection.name}": ${productCount} products`);
    }

    console.log("\n✨ Collections seeded successfully!\n");

  } catch (error) {
    console.error("❌ Error seeding collections:", error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await sequelize.close();
    console.log("🔌 Database connection closed.");
  }
}

// Run the seed
seedCollections();
