import { loadEnv } from "./env.js";

const env = loadEnv();

export const API_PREFIX = "/api";

export const APP_CONSTANTS = {
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
  isProduction: env.NODE_ENV === "production",
  frontendUrl: env.FRONTEND_URL,
  sessionCookieName: "sid",
  oauth: {
    googleCallbackUrl:
      env.GOOGLE_CALLBACK_URL ||
      `http://localhost:${env.PORT}${API_PREFIX}/auth/google/callback`,
    facebookCallbackUrl:
      env.FACEBOOK_CALLBACK_URL ||
      `http://localhost:${env.PORT}${API_PREFIX}/auth/facebook/callback`,
  },
};

export const EMAIL_SENDER = `"Shop Quần Áo" <${env.EMAIL_USER}>`;
export const DOCIFY_SUPPORT_SENDER = `"Docify Support" <${env.EMAIL_USER}>`;

