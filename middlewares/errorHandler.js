import { setCorsHeaders } from "../config/cors.js";

export const errorHandler = (err, req, res, _next) => {
  console.error("❌ Server error:", err);
  setCorsHeaders(req, res);

  res.status(err.status || 500).json({
    success: false,
    error: err.name || "InternalServerError",
    message: err.message || "Internal server error",
  });
};

