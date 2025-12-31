import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

const testEnv = {
  NODE_ENV: "test",
  PORT: "4000",
  FRONTEND_URL: "http://localhost:5173",
  DB_NAME: "test_db",
  DB_USER: "test_user",
  DB_PASSWORD: "test_pass",
  DB_HOST: "localhost",
  DB_PORT: "5432",
  JWT_SECRET: "test-jwt-secret",
  JWT_REFRESH_SECRET: "test-jwt-refresh-secret",
  JWT_RESET_SECRET: "test-jwt-reset-secret",
  SESSION_SECRET: "test-session-secret",
  EMAIL_USER: "test@example.com",
  EMAIL_PASS: "example-pass",
  CLOUDINARY_CLOUD_NAME: "test-cloud",
  CLOUDINARY_API_KEY: "test-key",
  CLOUDINARY_API_SECRET: "test-secret",
  GOOGLE_CLIENT_ID: "test-google-client",
  GOOGLE_CLIENT_SECRET: "test-google-secret",
  GOOGLE_CALLBACK_URL: "http://localhost:3000/api/auth/google/callback",
  FACEBOOK_APP_ID: "test-fb-app",
  FACEBOOK_APP_SECRET: "test-fb-secret",
  FACEBOOK_CALLBACK_URL: "http://localhost:3000/api/auth/facebook/callback",
};

Object.entries(testEnv).forEach(([key, value]) => {
  if (!process.env[key]) process.env[key] = value;
});

const { default: app } = await import("../app.js");

test("GET /api/products/:slugOrId handles unknown product", async () => {
  const res = await request(app).get("/api/products/non-existent-product");

  assert.ok(res.status >= 400);
  assert.match(res.headers["content-type"] || "", /application\/json/);
  assert.equal(typeof res.body, "object");
});
