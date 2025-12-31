// Kiểm tra quyền Admin
export const isAdmin = (req, res, next) => {
  // req.user được tạo ra từ middleware xác thực (authenticateToken) chạy trước đó
  if (req.user && req.user.role === 'admin') {
    return next(); // Là Admin -> Cho qua
  }

  return res.status(403).json({
    success: false,
    message: "Truy cập bị từ chối! Bạn không phải là Admin."
  });
};