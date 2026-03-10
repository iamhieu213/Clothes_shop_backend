import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import { buildCorsOptions, setCorsHeaders } from "./config/cors.js";
import { loadEnv } from "./config/env.js";
import "./config/google.config.js";
import "./config/facebook.config.js";
import { requestLogger } from "./middlewares/logger.js";
import { sessionConfig } from "./services/authService.js";
import ApiRouter from "./routes/api.js";
import { invalidJsonHandler } from "./middlewares/invalidJsonHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { swaggerUi, swaggerSpec, swaggerUiOptions } from "./swagger.js";  
loadEnv();

const app = express();

app.use((req, res, next) => {
  setCorsHeaders(req, res);
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});
app.use(cors(buildCorsOptions()));
app.use(express.json());
app.use(requestLogger());
app.use(invalidJsonHandler);

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({
    message: "✅ Server connected with PostgreSQL via Sequelize!",
    timestamp: new Date(),
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

app.use("/api", ApiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

