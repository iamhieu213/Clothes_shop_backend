import * as userService from "../../services/admin/userService.js";

export const getUsers = async (req, res) => {
  try {
    const { page, limit, search, role } = req.query;
    const data = await userService.getAllUsers(page, limit, search, role);
    res.json({ success: true, data });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
};

export const toggleLock = async (req, res) => {
  try {
    const user = await userService.toggleUserLock(req.params.id);
    res.json({ success: true, message: user.is_locked ? "Đã khóa" : "Đã mở khóa", user });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
};

export const setRole = async (req, res) => {
  try {
    const user = await userService.changeUserRole(req.params.id, req.body.role);
    res.json({ success: true, message: "Cập nhật quyền thành công", user });
  } catch (e) { res.status(400).json({ success: false, message: e.message }); }
};

export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ success: true, message: "Xóa thành công" });
  } catch (e) { res.status(500).json({ success: false, message: e.message }); }
};