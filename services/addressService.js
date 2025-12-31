import { ShippingAddress } from "../models/index.js";

export const createAddress = async (userId, payload) => {
  const { name, phone, city, district, ward, address, is_default } =
    payload;

  if (is_default) {
    await ShippingAddress.update(
      { is_default: false },
      { where: { user_id: userId } }
    );
  }

  return ShippingAddress.create({
    user_id: userId,
    name,
    phone,
    city,
    district,
    ward,
    address,
    is_default: Boolean(is_default),
  });
};

export const listUserAddresses = async (userId) => {
  return ShippingAddress.findAll({
    where: { user_id: userId },
    order: [
      ["is_default", "DESC"],
      ["created_at", "DESC"],
    ],
  });
};

export const removeAddress = async (userId, addressId) => {
  const deleted = await ShippingAddress.destroy({
    where: { id: addressId, user_id: userId },
  });

  if (!deleted) {
    const error = new Error("Địa chỉ không tồn tại");
    error.status = 404;
    throw error;
  }

  return addressId;
};

