import "pg";
import app from "../app.js";
import { startServer } from "../bootstrap.js";

let initialized = false;
let initError = null;

export default async function handler(req, res) {
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
