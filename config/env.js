import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(3000),
  FRONTEND_URL: z.string().url().default("http://localhost:5173"),
  DB_NAME: z.string().min(1, "DB_NAME is required"),
  DB_USER: z.string().min(1, "DB_USER is required"),
  DB_PASSWORD: z.string().min(1, "DB_PASSWORD is required"),
  DB_HOST: z.string().min(1, "DB_HOST is required"),
  DB_PORT: z.coerce.number().int().positive().default(5432),
  DB_SSL: z.enum(["true", "false"]).optional(),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  JWT_REFRESH_SECRET: z.string().min(1, "JWT_REFRESH_SECRET is required"),
  JWT_RESET_SECRET: z.string().min(1, "JWT_RESET_SECRET is required"),
  SESSION_SECRET: z.string().min(1, "SESSION_SECRET is required"),
  EMAIL_USER: z.string().email("EMAIL_USER must be a valid email"),
  EMAIL_PASS: z.string().min(1, "EMAIL_PASS is required"),
  CLOUDINARY_CLOUD_NAME: z.string().min(1),
  CLOUDINARY_API_KEY: z.string().min(1),
  CLOUDINARY_API_SECRET: z.string().min(1),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GOOGLE_CALLBACK_URL: z.string().url().optional(),
  FACEBOOK_APP_ID: z.string().min(1),
  FACEBOOK_APP_SECRET: z.string().min(1),
  FACEBOOK_CALLBACK_URL: z.string().url().optional(),
  SHOP_PROVINCE_ID: z.string().optional(),
  SHOP_CITY: z.string().optional(),
  VNP_TMN_CODE: z.string().optional(),
  VNP_HASH_SECRET: z.string().optional(),
  VNP_URL: z.string().url().optional(),
  VNP_RETURN_URL: z.string().url().optional(),
});

let cachedEnv = null;

export const loadEnv = () => {
  if (cachedEnv) return cachedEnv;

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const messages = parsed.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`
    );
    console.error("❌ Invalid or missing environment variables:", messages);
    const err = new Error(`Env validation failed: ${messages.join("; ")}`);
    if (typeof process.env.VERCEL !== "undefined") {
      throw err;
    }
    process.exit(1);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
};

export const getEnv = (key, fallback = undefined) => {
  const env = loadEnv();
  if (env[key] !== undefined && env[key] !== null && env[key] !== "") {
    return env[key];
  }
  return fallback;
};
