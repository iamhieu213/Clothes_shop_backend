import { randomUUID } from "node:crypto";
import { APP_CONSTANTS } from "../config/constants.js";

export const requestLogger = (enabled = !APP_CONSTANTS.isProduction) => {
  if (!enabled) {
    return (_req, _res, next) => next();
  }

  return (req, res, next) => {
    const requestId = randomUUID();
    const start = Date.now();
    req.id = requestId;

    console.log(`[${requestId}] 📨 ${req.method} ${req.originalUrl}`);
    console.log(
      `[${requestId}] Headers: ${JSON.stringify(
        {
          "content-type": req.headers["content-type"],
          "user-agent": req.headers["user-agent"],
        },
        null,
        2
      )}`
    );
    if (req.body && Object.keys(req.body).length > 0) {
      console.log(`[${requestId}] Body: ${JSON.stringify(req.body, null, 2)}`);
    }

    res.on("finish", () => {
      const duration = Date.now() - start;
      console.log(
        `[${requestId}] ✅ ${res.statusCode} - ${res.statusMessage || ""} (${duration}ms)`
      );
    });

    next();
  };
};
