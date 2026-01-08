import { APP_CONSTANTS } from "./constants.js";

export const buildCorsOptions = () => {
  const allowedOrigins = Array.from(
    new Set([
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "http://localhost:8080",
      "https://clothes-shop-men.vercel.app",
      "https://admin-panel-clothes-shop-deploy.vercel.app",
      "https://clothes-shop-frontend-admin.vercel.app", // Add Vercel URL explicitly
      APP_CONSTANTS.frontendUrl,
    ].filter(Boolean))
  );

  const isDev = !APP_CONSTANTS.isProduction;

  return {
    origin(origin, callback) {
      // Cho phép requests không có origin (Postman, curl, etc.)
      if (!origin) {
        return callback(null, true);
      }

      // Log origin để debug
      console.log("Incoming origin:", origin);


      // Trong môi trường dev, cho phép tất cả localhost origins
      if (isDev) {
        const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/.test(origin);
        if (isLocalhost || allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
      }

      // Kiểm tra origin có trong danh sách allowed hoặc là subdomain của vercel.app
      const isVercelOrigin = origin.endsWith(".vercel.app");
      if (allowedOrigins.includes(origin) || isVercelOrigin) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    maxAge: 86400,
  };
};
