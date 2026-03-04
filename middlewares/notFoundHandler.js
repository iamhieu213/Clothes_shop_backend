import { setCorsHeaders } from "../config/cors.js";

export const notFoundHandler = (req, res) => {
  setCorsHeaders(req, res);
  res.status(404).json({
    success: false,
    error: "Route not found",
    path: req.path,
  });
};

