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
};

Object.entries(testEnv).forEach(([key, value]) => {
  if (!process.env[key]) process.env[key] = value;
});

const { default: app } = await import("../app.js");

test("GET /api/products/search responds with JSON", async () => {
  const res = await request(app).get("/api/products/search").query({ q: "shoes" });

  assert.notEqual(res.status, 404);
  assert.match(res.headers["content-type"] || "", /application\/json/);
  assert.equal(typeof res.body, "object");
});
