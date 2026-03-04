import app from "../app.js";
import { startServer } from "../bootstrap.js";

let initialized = false;

export default async function handler(req, res) {
  if (!initialized) {
    await startServer();
    initialized = true;
  }
  return app(req, res);
}
