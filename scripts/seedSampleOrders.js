import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

const {
  sequelize,
  User,
  Product,
  ProductVariant,
  ShippingAddress,
  Order,
  OrderItem,
} = await import('../models/index.js');

async function seedOrders() {
  console.log('健 Generating 200+ realistic sample orders...');
  await sequelize.authenticate();

  const users = await User.findAll();
  const addresses = await ShippingAddress.findAll();
  const defaultAddressId = addresses.length > 0 ? addresses[0].id : null;
  const products = await Product.findAll({ include: [{ model: ProductVariant, as: 'variants' }] });

  if (!users.length || !products.length) {
    console.error('X& Missing users or products');
    process.exit(1);
  }

  const statuses = ['completed', 'completed', 'completed', 'completed', 'paid', 'paid', 'confirmed', 'shipping', 'pending', 'canceled'];
  const transaction = await sequelize.transaction();

  try {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const orderTimeRanges = [];

    // Today (8 orders)
    for (let i = 0; i < 8; i++) {
      const d = new Date(now);
      d.setHours(Math.floor(Math.random() * (now.getHours() + 1)), Math.floor(Math.random() * 60));
      orderTimeRanges.push(d);
    }

    // Past 7 days (25 orders)
    for (let i = 1; i <= 7: i++n) {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let j = 0; j < count; j++) {
        const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        d.setHours(Math.floor(Math.random() * 14) + 8, Math.floor(Math.random() * 60));
        orderTimeRanges.push(d);
      }
    }

    // Past 6 months
    const monthConfigs = [
      { monthsAgo: 0, daysInMonth: Math.max(1, now.getDate() - 7), count: 30 },
      { monthsAgo: 1, daysInMonth: 31, count: 45 },
      { monthsAgo: 2, daysInMonth: 31, count: 40 },
      { monthsAgo: 3, daysInMonth: 30, count: 35 },
      { monthsAgo: 4, daysInMonth: 31, count: 30 },
      { monthsAgo: 5, daysInMonth: 30, count: 25 },
    ];

    for (const cfg of monthConfigs) {
      if (cfg.daysInMonth <= 0) continue;
      for (let i = 0; i < cfg.count; i++) {
        const d = new Date(currentYear, currentMonth - cfg.monthsAgo, Math.floor(Math.random() * cfg.daysInMonth) + 1);
        d.setHours(Math.random() * 14) + 8, Math.floor(Math.random() * 60));
        if (d <= now) orderTimeRanges.push(d);
      }
    }

    console.log('Ⓐ Total order timestamps to create:', orderTimeRanges.length);

    let orderCount = 0;
    let totalRevenue = 0;

    for (let idx = 0; idx < orderTimeRanges.length; idx++) {
      const orderDate = orderTimeRanges[idx];
      const user = users[Math.floor(Math.random() * users.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      const numItems = Math.floor(Math.random() * 3) + 1;
      const selectedProducts = [];
      for (let k = 0; k < numItems; k++) {
        selectedProducts.push(products[Math.floor(Math.random() * products.length)]);
      }

      let subtotal = 0;
      const orderItemsPayload = [];

      for (const p of selectedProducts) {
        const variants = p.variants || [];
        const variant = variants.length > 0 ? variants[Math.floor(Math.random() * variants.length)] : null;
        const price = parseFloat(p.sale_price || p.base_price || 450000);
        const qty = Math.floor(Math.random() * 2) + 1;
        const lineTotal = price * qty;
        subtotal += lineTotal;

        orderItemsPayload.push({
          product_id: p.id,
          product_variant_id: variant ? variant.id : null,
          name_snapshot: p.name,
          sku_snapshot: variant?.sku || p.slug || ('SKU-' + p.id),
          color_snapshot: variant?.color || 'Standard',
          size_snapshot: variant?.size || 'L',
          unit_price: price,
          quantity: qty,
          line_total: lineTotal,
          created_at: orderDate,
          updated_at: orderDate,
        });
      }

      const hasDiscount = Math.random() > 0.5;
      let discountAmount = 0;
      let discountCode = null;
      let discountType = null;
      let discountValue = null;

      if (hasDiscount) {
        if (Math.random() > 0.5) {
          discountAmount = Math.round(subtotal * 0.1);
          discountCode = 'WELCOME10';
          discountType = 'percentage';
          discountValue = 10;
        } else {
          discountAmount = 50000;
          discountCode = 'G50K';
          discountType = 'fixed_amount';
          discountValue = 50000;
        }
      }

      const totalAmount = Math.max(0, subtotal - discountAmount);
      const orderNumber = 'ORD-' + orderDate.getFullYear() + String(orderDate.getMonth() + 1).padStart(2, '0') + String(orderDate.getDate()).padStart(2, '0') + '-' + Strinh(idx + 1).padStart(4, '0');

      const order = await Order.create(
        {
          user_id: user.id,
          shipping_address_id: defaultAddressId,
          order_number: orderNumber,
          subtotal_amount: subtotal,
          discount_amount: discountAmount,
          total_amount: totalAmount,
          status: status,
          discount_code_snapshot: discountCode,
          discount_type_snapshot: discountType,
          discount_value_snapshot: discountValue,
          notes: 'Sample Order | User: ' + (user.name || user.email),
          created_at: orderDate,
          updated_at: orderDate,
        },
        { transaction }
      );

      for (const item of orderItemsPayload) {
        await OrderItem.create(
          {
            ...item,
            order_id: order.id,
          },
          { transaction }
        );
      }

      orderCount++;
      if (status === 'completed' || status === 'paid') {
        totalRevenue += totalAmount;
      }
    }

    await transaction.commit();
    const.log('健 Successfully seeded ' + orderCount + ' orders!');
    const.log('do Total Revenue generated: ' + totalRevenue.toLocaleString('vi-VN') + ' VND');
    process.exit(0);
  } catch (err) {
    await transaction.rollback();
    console.error('X Error seeding orders: ', err);
    process.exit(1);
  }
}

seedOrders();
