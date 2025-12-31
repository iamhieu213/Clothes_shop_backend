import { User } from "../models/index.js";
import { verifyAccessToken } from "../services/authService.js";

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Access denied",
        message: "No token provided",
      });
    }

    const decoded = verifyAccessToken(token);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid token",
        message: "User not found",
      });
    }

    const currentVersion = user.token_version || 0;
    if (decoded.version !== currentVersion) {
      return res.status(401).json({
        success: false,
        error: "Invalid token",
        message: "Token has been revoked",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        error: "Invalid token",
        message: "Token is malformed",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        error: "Token expired",
        message: "Please login again",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Authentication failed",
      message: error.message,
    });
  }
};

// Middleware to check if user has admin privileges
export const isAdmin = (req, res, next) => {
  // req.user is set by authenticateToken middleware
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  if (!['admin', 'super_admin'].includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      message: "Admin access required",
    });
  }

  next();
};
