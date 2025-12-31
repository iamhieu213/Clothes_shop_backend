// 👇 SỬA ĐƯỜNG DẪN IMPORT: Trỏ vào services/user/wishlistService.js
import * as wishlistService from "../../services/user/wishlistService.js";

export const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const data = await wishlistService.addWishlist(userId, productId);
    res.status(201).json({ success: true, message: "Đã thêm vào yêu thích!", data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getWishlistByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await wishlistService.getWishlist(userId);
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const result = await wishlistService.removeWishlist(userId, productId);
    
    if (result === 0) {
      return res.status(404).json({ success: false, message: "Không tìm thấy để xóa" });
    }
    res.status(200).json({ success: true, message: "Đã xóa thành công" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};