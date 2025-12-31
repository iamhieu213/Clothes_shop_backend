import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Load environment variables from backend/.env first
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

const { sequelize, Collection } = await import("../models/index.js");

const COLLECTIONS = [
  {
    id: 1,
    name: "Hồn Dân Tộc - Dấu Di Sản Collection",
    slug: "hon-dan-toc-dau-di-san-collection",
    description: null,
    banner_image: null,
    start_date: null,
    end_date: null,
    status: "active",
    sort_order: 1,
    created_at: "2025-12-26T03:32:16.314Z",
    updated_at: "2025-12-26T03:32:16.315Z",
  },
];

const toDate = (value) => (value ? new Date(value) : null);

async function main() {
  await sequelize.authenticate();

  const transaction = await sequelize.transaction();
  try {
    let inserted = 0;
    let skipped = 0;

    for (const item of COLLECTIONS) {
      const [_, created] = await Collection.findOrCreate({
        where: { slug: item.slug },
        defaults: {
          name: item.name,
          slug: item.slug,
          description: item.description,
          banner_image: item.banner_image,
          start_date: toDate(item.start_date),
          end_date: toDate(item.end_date),
          status: item.status,
          sort_order: item.sort_order,
          created_at: toDate(item.created_at),
          updated_at: toDate(item.updated_at),
        },
        transaction,
      });

      if (created) {
        inserted += 1;
      } else {
        skipped += 1;
      }
    }

    await transaction.commit();
    console.log(`✅ Done. Inserted: ${inserted}, skipped(existing): ${skipped}`);
  } catch (err) {
    await transaction.rollback();
    console.error("❌ Import collections failed:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
