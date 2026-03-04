import { APP_CONSTANTS } from "./constants.js";

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://localhost:8080",
  "https://clothes-shop-men.vercel.app",
  "https://admin-panel-clothes-shop-deploy.vercel.app",
  "https://clothes-shop-frontend-admin.vercel.app",
].concat(APP_CONSTANTS.frontendUrl ? [APP_CONSTANTS.frontendUrl] : []);

const isOriginAllowed = (origin) => {
  if (!origin) return true;
  const isDev = !APP_CONSTANTS.isProduction;
  if (isDev && /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/.test(origin)) return true;
  if (ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".vercel.app")) return true;
  return false;
};

export const setCorsHeaders = (req, res) => {
  const origin = req.headers.origin;
  if (origin && isOriginAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Max-Age", "86400");
};

export const buildCorsOptions = () => {
  return {
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (isOriginAllowed(origin)) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    maxAge: 86400,
    optionsSuccessStatus: 204,
  };
};
