
import { loadEnv } from "../config/env.js";
import { sequelize } from "../config/db.config.js";
import { QueryTypes, DataTypes } from "sequelize";

loadEnv();

/**
 * Migration: Add new fields to products table
 * Fields: collection, slug, sale_price, is_new, tags
 */
export const up = async () => {
  const queryInterface = sequelize.getQueryInterface();

  try {
    console.log("🔄 Starting migration: addProductFields...");

    // Check columns
    const tableDescription = await queryInterface.describeTable("products");
    const columnsToAdd = [];

    // 1. collection (ENUM)
    if (!tableDescription.collection) {
      console.log("  ➕ Adding column: collection");

      await sequelize.query(
        `DO $$ BEGIN
          CREATE TYPE "enum_products_collection" AS ENUM ('men', 'women', 'accessories');
        EXCEPTION
          WHEN duplicate_object THEN null;
        END $$;`,
        { type: QueryTypes.RAW }
      );

      await queryInterface.addColumn("products", "collection", {
        type: DataTypes.ENUM("men", "women", "accessories"),
        allowNull: true, // tạm cho null, sau có thể update not null + default
      });

      columnsToAdd.push("collection");
    } else {
      console.log("  ⏭️  Column 'collection' already exists");
    }

    // 2. slug
    if (!tableDescription.slug) {
      console.log("  ➕ Adding column: slug");
      await queryInterface.addColumn("products", "slug", {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      });
      columnsToAdd.push("slug");
    } else {
      console.log("  ⏭️  Column 'slug' already exists");
    }

    // 3. sale_price
    if (!tableDescription.sale_price) {
      console.log("  ➕ Adding column: sale_price");
      await queryInterface.addColumn("products", "sale_price", {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      });
      columnsToAdd.push("sale_price");
    } else {
      console.log("  ⏭️  Column 'sale_price' already exists");
    }

    // 4. is_new
    if (!tableDescription.is_new) {
      console.log("  ➕ Adding column: is_new");
      await queryInterface.addColumn("products", "is_new", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
      columnsToAdd.push("is_new");
    } else {
      console.log("  ⏭️  Column 'is_new' already exists");
    }

    // 5. tags
    if (!tableDescription.tags) {
      console.log("  ➕ Adding column: tags");
      await queryInterface.addColumn("products", "tags", {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
      });
      columnsToAdd.push("tags");
    } else {
      console.log("  ⏭️  Column 'tags' already exists");
    }

    // Cập nhật default cho data cũ nếu cần
    if (columnsToAdd.length > 0) {
      console.log("  🔄 Updating existing products with default values...");

      if (columnsToAdd.includes("is_new")) {
        await sequelize.query(
          `UPDATE products SET is_new = false WHERE is_new IS NULL;`,
          { type: QueryTypes.UPDATE }
        );
      }

      if (columnsToAdd.includes("tags")) {
        await sequelize.query(
          `UPDATE products SET tags = '[]'::jsonb WHERE tags IS NULL;`,
          { type: QueryTypes.UPDATE }
        );
      }

      console.log("  ✅ Updated existing products");
    }

    console.log("✅ Migration completed successfully!");
    return true;
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  }
};

/**
 * Rollback migration: Remove added columns
 */
export const down = async () => {
  const queryInterface = sequelize.getQueryInterface();

  try {
    console.log("🔄 Rolling back migration: addProductFields...");

    const tableDescription = await queryInterface.describeTable("products");

    if (tableDescription.tags) {
      console.log("  ➖ Removing column: tags");
      await queryInterface.removeColumn("products", "tags");
    }

    if (tableDescription.is_new) {
      console.log("  ➖ Removing column: is_new");
      await queryInterface.removeColumn("products", "is_new");
    }

    if (tableDescription.sale_price) {
      console.log("  ➖ Removing column: sale_price");
      await queryInterface.removeColumn("products", "sale_price");
    }

    if (tableDescription.slug) {
      console.log("  ➖ Removing column: slug");
      await queryInterface.removeColumn("products", "slug");
    }

    if (tableDescription.collection) {
      console.log("  ➖ Removing column: collection");
      await queryInterface.removeColumn("products", "collection");

      try {
        await sequelize.query(
          `DROP TYPE IF EXISTS "enum_products_collection";`,
          { type: QueryTypes.RAW }
        );
        console.log("  ➖ Dropped ENUM type: enum_products_collection");
      } catch (enumError) {
        console.warn("  ⚠️  Could not drop ENUM type (may be in use):", enumError.message);
      }
    }

    console.log("✅ Rollback completed successfully!");
    return true;
  } catch (error) {
    console.error("❌ Rollback failed:", error);
    throw error;
  }
};

// Run migration if called directly
// Usage: node backend/migrations/addProductFields.js [up|down]
const isMainModule =
  process.argv[1] &&
  (process.argv[1].endsWith("addProductFields.js") ||
    process.argv[1].includes("addProductFields.js"));

if (isMainModule) {
  (async () => {
    try {
      console.log("🔄 Connecting to database...");
      await sequelize.authenticate();
      console.log("✅ Database connected!");

      const command = process.argv[2] || "up";
      if (command === "up") {
        await up();
      } else if (command === "down") {
        await down();
      } else {
        console.error("❌ Invalid command. Use 'up' or 'down'");
        process.exit(1);
      }

      await sequelize.close();
      console.log("✅ Connection closed.");
      process.exit(0);
    } catch (error) {
      console.error("❌ Error:", error.message);
      if (error.original) {
        console.error("Original error:", error.original.message);
      }
      process.exit(1);
    }
  })();
}
