// Test script to verify brands endpoint works
import { getUniqueBrandsService } from "../services/admin/productService.js";

async function verify() {
  try {
    console.log('🔍 Testing brands service...\n');
    const brands = await getUniqueBrandsService();

    console.log(`✅ Found ${brands.length} unique brands:`);
    brands.forEach((brand, index) => {
      console.log(`  ${index + 1}. ${brand}`);
    });

    console.log('\n✅ Brands endpoint is working correctly!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

verify();
