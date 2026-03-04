import "pg";
import app from "../app.js";
import { startServer } from "../bootstrap.js";

let initialized = false;
let initError = null;

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://clothes-shop-men.vercel.app",
  "https://admin-panel-clothes-shop-deploy.vercel.app",
  "https://clothes-shop-frontend-admin.vercel.app",
];

function setCorsHeadersEarly(req, res) {
  const origin = req.headers?.origin;
  const allow = !origin || ALLOWED_ORIGINS.includes(origin) || (typeof origin === "string" && origin.endsWith(".vercel.app"));
  if (allow && origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Max-Age", "86400");
}

export default async function handler(req, res) {
  setCorsHeadersEarly(req, res);
  if (String(req.method || "").toUpperCase() === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    if (!initialized && !initError) {
      await startServer();
      initialized = true;
    }
    if (initError) {
      return res.status(503).json({
        error: "Service Unavailable",
        message: "Database initialization failed",
        detail: initError.message,
      });
    }
    return app(req, res);
  } catch (err) {
    if (!initialized && !initError) {
      initError = err;
    }
    if (res.headersSent) return;
    const status = err.message?.includes("Database") ? 503 : 500;
    return res.status(status).json({
      error: status === 503 ? "Service Unavailable" : "Internal Server Error",
      message: err.message ?? "Function invocation failed",
    });
  }
}
