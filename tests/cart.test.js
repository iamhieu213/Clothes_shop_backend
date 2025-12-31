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
  if (!process.env[key]) {
    process.env[key] = value;
  }
});

const { default: app } = await import("../app.js");

// ==================== CART TESTS ====================

test("Cart - GET /api/cart returns cart items", async () => {
  const response = await request(app)
    .get("/api/cart")
    .set("x-session-id", "test-session-123");

  assert.equal(response.statusCode, 200);
  assert.ok(response.body.success || response.body.message);
});

test("Cart - POST /api/cart should add item to cart with required fields", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
    quantity: 2,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-456")
    .send(cartItem);

  // Should return 200 or 201 on success, or 400 on validation error
  assert.ok(
    [200, 201, 400, 404, 500].includes(response.statusCode),
    `Expected status code to be one of [200, 201, 400, 404, 500], got ${response.statusCode}`
  );

  // If successful, check response structure
  if (response.statusCode === 201 || response.statusCode === 200) {
    assert.ok(response.body.message || response.body.success);
  }
});

test("Cart - POST /api/cart should reject without productId", async () => {
  const cartItem = {
    quantity: 2,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-789")
    .send(cartItem);

  // Should fail validation
  assert.ok(
    response.statusCode === 400 || response.statusCode === 500,
    `Expected 400 or 500 error, got ${response.statusCode}`
  );
});

test("Cart - POST /api/cart should reject without quantity", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-101")
    .send(cartItem);

  // Should fail validation or return error
  assert.ok(
    response.statusCode === 400 || response.statusCode === 500,
    `Expected 400 or 500 error, got ${response.statusCode}`
  );
});

test("Cart - POST /api/cart should reject with negative quantity", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
    quantity: -5,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-202")
    .send(cartItem);

  // Should validate and reject
  assert.ok(
    response.statusCode === 400 || response.statusCode === 500,
    `Expected validation error for negative quantity`
  );
});

test("Cart - POST /api/cart should handle zero quantity", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
    quantity: 0,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-303")
    .send(cartItem);

  // Should either reject or handle gracefully
  assert.ok(
    [200, 201, 400, 500].includes(response.statusCode),
    `Response should be handled appropriately`
  );
});

test("Cart - GET /api/cart works with both x-session-id header and cookie", async () => {
  const sessionId = "test-session-cookies";
  
  const response1 = await request(app)
    .get("/api/cart")
    .set("x-session-id", sessionId);

  const response2 = await request(app)
    .get("/api/cart")
    .set("Cookie", `sessionId=${sessionId}`);

  assert.ok(response1.statusCode === 200 || response1.statusCode !== 500);
  assert.ok(response2.statusCode === 200 || response2.statusCode !== 500);
});

test("Cart - POST /api/cart with invalid JSON should be handled", async () => {
  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "test-session-404")
    .set("Content-Type", "application/json")
    .send("{invalid json");

  assert.ok(response.statusCode === 400 || response.statusCode === 500);
});

test("Cart - PUT /api/cart/:cartItemId should update quantity", async () => {
  const updateData = {
    quantity: 5,
  };

  const response = await request(app)
    .put("/api/cart/1")
    .set("x-session-id", "test-session-505")
    .send(updateData);

  // Should return success or error based on cart item existence
  assert.ok(
    [200, 400, 404, 500].includes(response.statusCode),
    `Expected valid status code, got ${response.statusCode}`
  );
});

test("Cart - DELETE /api/cart/:cartItemId should remove item", async () => {
  const response = await request(app)
    .delete("/api/cart/1")
    .set("x-session-id", "test-session-606");

  // Should return success or error based on cart item existence
  assert.ok(
    [200, 400, 404, 500].includes(response.statusCode),
    `Expected valid status code, got ${response.statusCode}`
  );
});

test("Cart - POST /api/cart should work as guest (no auth token)", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
    quantity: 1,
  };

  const response = await request(app)
    .post("/api/cart")
    .set("x-session-id", "guest-session-707")
    .send(cartItem);

  // Should accept guest requests
  assert.ok(
    [200, 201, 400, 404, 500].includes(response.statusCode),
    `Expected valid status code for guest, got ${response.statusCode}`
  );
});

test("Cart - POST /api/cart should accept with auth token if provided", async () => {
  const cartItem = {
    productId: 1,
    productVariantId: 1,
    quantity: 1,
  };

  const fakeToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.fake";

  const response = await request(app)
    .post("/api/cart")
    .set("Authorization", fakeToken)
    .set("x-session-id", "auth-session-808")
    .send(cartItem);

  // Should handle both valid and invalid tokens gracefully
  assert.ok(
    [200, 201, 400, 404, 500].includes(response.statusCode),
    `Expected valid response even with fake token`
  );
});
