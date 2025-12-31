export const errorHandler = (err, _req, res, _next) => {
  console.error("❌ Server error:", err);

  res.status(err.status || 500).json({
    success: false,
    error: err.name || "InternalServerError",
    message: err.message || "Internal server error",
  });
};

