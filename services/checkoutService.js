import {
  Cart,
  CartItem,
  ProductVariant,
  Product,
  ShippingAddress,
} from "../models/index.js";
import discountService from "./discountService.js";
import { Op } from "sequelize";

const SUPPORTED_PAYMENTS = ["COD", "VNPAY"];

const findCartForValidation = async (userId) => {
  if (!userId) {
    const error = new Error("Không xác định được giỏ hàng");
    error.status = 400;
    throw error;
  }

  const cart = await Cart.findOne({
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

  const cartItems = cart
    ? cart.CartItems || cart.cart_items || cart.cartItems || []
    : [];

  if (!cart || cartItems.length === 0) {
    const error = new Error("Giỏ hàng trống");
    error.status = 400;
    throw error;
  }

  return { cart, cartItems };
};

const validateCartItems = (cartItems) => {
  let subtotal = 0;

  for (const item of cartItems) {
    const variant = item.product_variant;
    if (!variant || !variant.product) {
      const error = new Error("Sản phẩm trong giỏ hàng không còn tồn tại");
      error.status = 400;
      throw error;
    }

    if (!variant.stock_quantity || variant.stock_quantity < item.quantity) {
      const error = new Error(
        `Sản phẩm "${variant.product.name}" không đủ tồn kho`
      );
      error.status = 400;
      throw error;
    }

    // Use product-level pricing (base_price or sale_price)
    const price = parseFloat(variant.product.sale_price || variant.product.base_price || 0);
    subtotal += price * item.quantity;
  }

  return subtotal;
};

const validateShippingAddress = async ({ userId, shippingAddressId }) => {
  if (!userId) {
    const error = new Error("Cần đăng nhập để thực hiện thanh toán");
    error.status = 401;
    throw error;
  }

  if (!shippingAddressId) {
    const error = new Error("Thiếu thông tin địa chỉ giao hàng");
    error.status = 400;
    throw error;
  }

  const address = await ShippingAddress.findOne({
    where: { id: shippingAddressId, user_id: userId },
  });

  if (!address) {
    const error = new Error("Địa chỉ giao hàng không hợp lệ");
    error.status = 400;
    throw error;
  }

  return address;
};

const validatePaymentMethod = (paymentMethod) => {
  if (!paymentMethod) {
    const error = new Error("Thiếu phương thức thanh toán");
    error.status = 400;
    throw error;
  }

  const normalized = paymentMethod.toUpperCase();
  if (!SUPPORTED_PAYMENTS.includes(normalized)) {
    const error = new Error("Phương thức thanh toán không được hỗ trợ");
    error.status = 400;
    throw error;
  }
  return normalized;
};

const validatePromotion = async ({ promotionCode, subtotal }) => {
  if (!promotionCode) return { applied: false };

  const result = await discountService.applyDiscount(
    { subtotal, shipping_fee: 0 },
    promotionCode
  );

  if (!result.applied) {
    const error = new Error("Mã khuyến mãi không hợp lệ hoặc không áp dụng được");
    error.status = 400;
    throw error;
  }

  return {
    applied: true,
    amount: result.amount,
    code: promotionCode,
    discount: result.discount,
  };
};

export const validateCheckout = async ({
  userId,
  shippingAddressId,
  paymentMethod,
  promotionCode,
}) => {
  const { cart, cartItems } = await findCartForValidation(userId);
  const subtotal = validateCartItems(cartItems);
  const address = await validateShippingAddress({ userId, shippingAddressId });
  const payment = validatePaymentMethod(paymentMethod);
  const promotion = await validatePromotion({ promotionCode, subtotal });

  return {
    subtotal,
    itemCount: cartItems.length,
    paymentMethod: payment,
    shippingAddress: address,
    promotion,
  };
};
