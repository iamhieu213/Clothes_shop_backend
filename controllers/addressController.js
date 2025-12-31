import { z } from "zod";
import {
  createAddress,
  listUserAddresses,
  removeAddress,
} from "../services/addressService.js";
import { sendError, sendSuccess, validateRequest } from "./controllerUtils.js";

const addressPayloadSchema = z.object({
  name: z.string().min(1, "Vui lòng cung cấp tên người nhận"),
  phone: z.string().min(8, "Vui lòng cung cấp số điện thoại"),
  city: z.string().min(1, "Thiếu tỉnh/thành phố"),
  district: z.string().min(1, "Thiếu quận/huyện"),
  ward: z.string().min(1, "Thiếu phường/xã"),
  address: z.string().min(1, "Thiếu địa chỉ cụ thể"),
  is_default: z.boolean().optional(),
});

export const addAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const payload = validateRequest(addressPayloadSchema, req.body);
        const newAddress = await createAddress(userId, payload);

        sendSuccess(res, {
            status: 201,
            message: "Thêm địa chỉ thành công",
            data: newAddress,
        });
    } catch (error) {
        sendError(res, error);
    }
};

export const getMyAddresses = async (req, res) => {
    try {
        const userId = req.user.id;
        const addresses = await listUserAddresses(userId);

        sendSuccess(res, { data: addresses });
    } catch (error) {
        sendError(res, error);
    }
};

export const deleteAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        await removeAddress(userId, id);
        sendSuccess(res, { message: "Đã xóa địa chỉ" });
    } catch (error) {
        sendError(res, error);
    }
};