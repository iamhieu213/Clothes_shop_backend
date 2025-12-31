import {
  Cart,
  CartItem,
  ProductVariant,
  Product,
  ShippingAddress,
  Order,
  OrderItem,
  Payment,
  User,
  Discount,
} from "../models/index.js";

export const findCartWithItems = (userId) => {
  if (!userId) {
    const error = new Error("Cần đăng nhập để xem giỏ hàng");
    error.status = 401;
    throw error;
  }

  return Cart.findOne({
    where: { user_id: userId },
    include: [
      {
        model: CartItem,
        include: [
          {
            model: ProductVariant,
            as: "product_variant",
            include: [{ model: Product, as: "product" }],
          },
        ],
      },
    ],
  });
};

export const findShippingAddress = (addressId, userId) => {
  if (!userId) {
    const error = new Error("Cần đăng nhập để sử dụng địa chỉ giao hàng");
    error.status = 401;
    throw error;
  }

  return ShippingAddress.findOne({
    where: { id: addressId, user_id: userId },
  });
};

export const createOrderRecord = (payload, transaction) =>
  Order.create(payload, { transaction });

export const bulkCreateOrderItems = (items, transaction) =>
  OrderItem.bulkCreate(items, { transaction });

export const createPaymentRecord = (payload, transaction) =>
  Payment.create(payload, { transaction });

export const clearCartItems = (cartId, transaction) =>
  CartItem.destroy({ where: { cart_id: cartId }, transaction });

export const findOrdersForUser = (userId) =>
  Order.findAll({
    where: { user_id: userId },
    order: [["created_at", "DESC"]],
    include: [
      { model: ShippingAddress, as: "shipping_address" },
      { model: Payment },
      { model: OrderItem, as: "order_items" },
      { model: Discount, as: "discount", attributes: ["id", "name", "code", "discount_type", "discount_value"] }
    ],
  });

export const findOrderForUser = (userId, orderId) =>
  Order.findOne({
    where: { id: orderId, user_id: userId },
    include: [
      { model: ShippingAddress, as: "shipping_address" },
      { model: Payment, required: false }, // required: false để không fail nếu chưa có payment
      { model: OrderItem, as: "order_items" },
      { model: Discount, as: "discount", attributes: ["id", "name", "code", "discount_type", "discount_value"], required: false }
    ],
  });

export const findAllOrders = () =>
  Order.findAll({
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        as: 'user',
        attributes: ["id", "name", "email", "phone"],
      },
      { model: ShippingAddress, as: "shipping_address" },
      { model: Payment },
      { model: OrderItem, as: "order_items" },
      { model: Discount, as: "discount", attributes: ["id", "name", "code", "discount_type", "discount_value"] }
    ],
  });

export const findOrderWithRelations = (orderId) =>
  Order.findByPk(orderId, {
    include: [
      { model: User, as: 'user' },
      { model: ShippingAddress, as: "shipping_address" },
      { model: OrderItem, as: "order_items" }
    ],
  });

export const findPaymentByOrderId = (orderId) =>
  Payment.findOne({
    where: { order_id: orderId },
    include: [{ model: Order }],
  });

export const findOrderById = (orderId) =>
  Order.findByPk(orderId, {
    include: [
      { model: ShippingAddress, as: "shipping_address" },
      { model: Payment },
      { model: User, as: 'user' },
      { model: Discount, as: "discount", attributes: ["id", "name", "code", "discount_type", "discount_value"] }
    ],
  });

export const updatePaymentStatus = (paymentId, updates, transaction) =>
  Payment.update(updates, {
    where: { id: paymentId },
    transaction,
  });
