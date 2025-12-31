import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Load environment variables from backend/.env first
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

const { sequelize, ProductCollection } = await import("../models/index.js");

const PRODUCT_COLLECTIONS = [
    {
      "product_id": 166,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:01:57.643Z"
    },
    {
      "product_id": 167,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:03.815Z"
    },
    {
      "product_id": 168,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:11.487Z"
    },
    {
      "product_id": 169,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:19.047Z"
    },
    {
      "product_id": 170,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:28.452Z"
    },
    {
      "product_id": 171,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:36.248Z"
    },
    {
      "product_id": 172,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:44.507Z"
    },
    {
      "product_id": 173,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:51.179Z"
    },
    {
      "product_id": 174,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:02:57.465Z"
    },
    {
      "product_id": 175,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:10.130Z"
    },
    {
      "product_id": 176,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:18.429Z"
    },
    {
      "product_id": 177,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:28.509Z"
    },
    {
      "product_id": 178,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:39.699Z"
    },
    {
      "product_id": 179,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:50.052Z"
    },
    {
      "product_id": 180,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:03:57.860Z"
    },
    {
      "product_id": 181,
      "collection_id": 1,
      "featured": false,
      "sort_order": 0,
      "created_at": "2025-12-26T04:04:06.131Z"
    }
];

const toDate = (value) => (value ? new Date(value) : null);

async function main() {
  await sequelize.authenticate();

  const transaction = await sequelize.transaction();
  try {
    let inserted = 0;
    let skipped = 0;

    for (const item of PRODUCT_COLLECTIONS) {
      const existing = await ProductCollection.findOne({
        where: {
          product_id: item.product_id,
          collection_id: item.collection_id,
        },
        transaction,
      });

      if (existing) {
        skipped += 1;
        continue;
      }

      await ProductCollection.create(
        {
          product_id: item.product_id,
          collection_id: item.collection_id,
          featured: item.featured ?? false,
          sort_order: item.sort_order ?? 0,
          created_at: toDate(item.created_at),
        },
        { transaction }
      );
      inserted += 1;
    }

    await transaction.commit();
    console.log(`✅ Done. Inserted: ${inserted}, skipped(existing): ${skipped}`);
  } catch (err) {
    await transaction.rollback();
    console.error("❌ Import product collections failed:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
