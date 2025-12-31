import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Load environment variables from backend/.env first
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

const { sequelize, Category } = await import("../models/index.js");

const CATEGORIES = [
  {
    id: 13,
    name: "Áo",
    slug: "ao",
    parent_id: null,
    level: 0,
    sort_order: 1,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 15,
    name: "Phụ Kiện",
    slug: "phu-kien",
    parent_id: null,
    level: 0,
    sort_order: 2,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 1,
    name: "Áo Sơ Mi",
    slug: "ao-so-mi",
    parent_id: 13,
    level: 1,
    sort_order: 1,
    created_at: "2025-12-24T18:50:41.473Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 2,
    name: "Áo Polo",
    slug: "ao-polo",
    parent_id: 13,
    level: 1,
    sort_order: 2,
    created_at: "2025-12-24T18:53:02.812Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 3,
    name: "Áo Thun",
    slug: "ao-thun",
    parent_id: 13,
    level: 1,
    sort_order: 3,
    created_at: "2025-12-24T18:55:12.490Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 4,
    name: "Áo Khoác",
    slug: "ao-khoac",
    parent_id: 13,
    level: 1,
    sort_order: 4,
    created_at: "2025-12-24T18:57:23.557Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 5,
    name: "Áo Tanktop",
    slug: "ao-tanktop",
    parent_id: 13,
    level: 1,
    sort_order: 5,
    created_at: "2025-12-24T18:59:22.458Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 14,
    name: "Quần",
    slug: "quan",
    parent_id: null,
    level: 0,
    sort_order: 3,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 6,
    name: "Quần Âu",
    slug: "quan-au",
    parent_id: 14,
    level: 1,
    sort_order: 1,
    created_at: "2025-12-24T19:01:27.599Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 7,
    name: "Quần Regular Fit",
    slug: "quan-regular-fit",
    parent_id: 14,
    level: 1,
    sort_order: 2,
    created_at: "2025-12-24T19:03:31.778Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 8,
    name: "Quần Kaki",
    slug: "quan-kaki",
    parent_id: 14,
    level: 1,
    sort_order: 3,
    created_at: "2025-12-24T19:05:32.539Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 9,
    name: "Quần Slim Fit",
    slug: "quan-slim-fit",
    parent_id: 14,
    level: 1,
    sort_order: 4,
    created_at: "2025-12-24T19:07:36.975Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 10,
    name: "Quần Jeans",
    slug: "quan-jeans",
    parent_id: 14,
    level: 1,
    sort_order: 5,
    created_at: "2025-12-24T19:09:44.540Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 11,
    name: "Quần Cropped",
    slug: "quan-cropped",
    parent_id: 14,
    level: 1,
    sort_order: 6,
    created_at: "2025-12-24T19:11:16.993Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 12,
    name: "Nước Hoa",
    slug: "nuoc-hoa",
    parent_id: null,
    level: 0,
    sort_order: 4,
    created_at: "2025-12-24T19:13:19.978Z",
    updated_at: "2025-12-24T19:13:19.978Z",
  },
  {
    id: 16,
    name: "Thắt Lưng",
    slug: "that-lung",
    parent_id: 15,
    level: 1,
    sort_order: 1,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 17,
    name: "Ví Da",
    slug: "vi-da",
    parent_id: 15,
    level: 1,
    sort_order: 2,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 18,
    name: "Cà Vạt",
    slug: "ca-vat",
    parent_id: 15,
    level: 1,
    sort_order: 3,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 19,
    name: "Giày",
    slug: "giay",
    parent_id: 15,
    level: 1,
    sort_order: 4,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
  {
    id: 20,
    name: "Đồng Hồ",
    slug: "dong-ho",
    parent_id: 15,
    level: 1,
    sort_order: 5,
    created_at: "2025-12-25T10:00:00.000Z",
    updated_at: "2025-12-25T10:00:00.000Z",
  },
];

const toDate = (value) => (value ? new Date(value) : null);

async function main() {
  await sequelize.authenticate();

  const transaction = await sequelize.transaction();
  try {
    const ordered = [...CATEGORIES].sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level;
      return a.sort_order - b.sort_order;
    });

    for (const item of ordered) {
      await Category.upsert(
        {
          id: item.id,
          name: item.name,
          slug: item.slug,
          parent_id: item.parent_id,
          level: item.level,
          sort_order: item.sort_order,
          created_at: toDate(item.created_at),
          updated_at: toDate(item.updated_at),
        },
        { transaction }
      );
    }

    await sequelize.query(
      "SELECT setval(pg_get_serial_sequence('categories','id'), (SELECT MAX(id) FROM categories));",
      { transaction }
    );

    await transaction.commit();
    console.log(`✅ Imported ${CATEGORIES.length} categories.`);
  } catch (err) {
    await transaction.rollback();
    console.error("❌ Import categories failed:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
