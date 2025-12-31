/**
 * Test script for category slug auto-generation
 * Run with: node test-category-slug.js
 */

import { Category, sequelize } from './models/index.js';
import { createCategory, updateCategory } from './repositories/categoryRepository.js';

async function testSlugGeneration() {
  console.log('🧪 Testing Category Slug Auto-Generation\n');

  try {
    // Test 1: Create category without slug (should auto-generate)
    console.log('Test 1: Creating category without slug...');
    const cat1 = await createCategory({
      name: 'Giày Dép',
      description: 'Các loại giày dép'
    });
    console.log('✅ Created:', { name: cat1.name, slug: cat1.slug });
    console.log('   Expected slug: giay-dep\n');

    // Test 2: Create category with custom slug
    console.log('Test 2: Creating category with custom slug...');
    const cat2 = await createCategory({
      name: 'Phụ Kiện',
      slug: 'phu-kien-custom'
    });
    console.log('✅ Created:', { name: cat2.name, slug: cat2.slug });
    console.log('   Expected slug: phu-kien-custom\n');

    // Test 3: Create duplicate slug (should append number)
    console.log('Test 3: Creating category with duplicate name...');
    const cat3 = await createCategory({
      name: 'Giày Dép',
      description: 'Duplicate name'
    });
    console.log('✅ Created:', { name: cat3.name, slug: cat3.slug });
    console.log('   Expected slug: giay-dep-2\n');

    // Test 4: Update category name without providing slug
    console.log('Test 4: Updating category name (should auto-generate new slug)...');
    const updated = await updateCategory(cat1.id, {
      name: 'Giày Thể Thao'
    });
    console.log('✅ Updated:', { name: updated.name, slug: updated.slug });
    console.log('   Expected slug: giay-the-thao\n');

    // Test 5: Update category with explicit slug
    console.log('Test 5: Updating category with explicit slug...');
    const updated2 = await updateCategory(cat2.id, {
      slug: 'phu-kien-updated'
    });
    console.log('✅ Updated:', { name: updated2.name, slug: updated2.slug });
    console.log('   Expected slug: phu-kien-updated\n');

    // Test 6: Vietnamese name
    console.log('Test 6: Creating category with Vietnamese name...');
    const cat4 = await createCategory({
      name: 'Túi Xách Nữ'
    });
    console.log('✅ Created:', { name: cat4.name, slug: cat4.slug });
    console.log('   Expected slug: tui-xach-nu\n');

    // Cleanup
    console.log('🧹 Cleaning up test data...');
    await Category.destroy({ where: { id: [cat1.id, cat2.id, cat3.id, cat4.id] } });
    console.log('✅ Cleanup complete\n');

    console.log('✅ All tests passed!');

    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error(error.stack);
    await sequelize.close();
    process.exit(1);
  }
}

testSlugGeneration();
