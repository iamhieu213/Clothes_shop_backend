import { sequelize } from "../config/db.config.js";

async function verifyUsersSchema() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to database");

    const [results] = await sequelize.query(`
      SELECT column_name, data_type, character_maximum_length
      FROM information_schema.columns
      WHERE table_name = 'users'
      ORDER BY ordinal_position;
    `);

    console.log("\n📋 Users table schema:");
    console.log("━".repeat(60));
    results.forEach(col => {
      const maxLength = col.character_maximum_length
        ? `(${col.character_maximum_length})`
        : "";
      console.log(`  • ${col.column_name.padEnd(20)} ${col.data_type}${maxLength}`);
    });
    console.log("━".repeat(60));

    // Check if name column exists
    const hasNameColumn = results.some(col => col.column_name === 'name');
    if (hasNameColumn) {
      console.log("\n✅ SUCCESS: 'name' column exists in users table");
      console.log("   Login should work properly now!");
    } else {
      console.log("\n❌ ERROR: 'name' column is missing from users table");
      console.log("   Please run the migration again");
    }

    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

verifyUsersSchema();
