import { sequelize, Product } from './models/index.js';

async function checkBrands() {
  try {
    const brands = await Product.findAll({
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('brand')), 'brand']],
      where: {
        brand: {
          [sequelize.Op.ne]: null,
          [sequelize.Op.ne]: ''
        }
      },
      order: [['brand', 'ASC']],
      raw: true
    });
    
    console.log('Found', brands.length, 'unique brands:');
    brands.forEach(b => console.log('  -', b.brand));
    
    await sequelize.close();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

checkBrands();
