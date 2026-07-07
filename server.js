// server.js
import { loadEnv } from "./config/env.js";
import { APP_CONSTANTS } from "./config/constants.js";
import app from "./app.js";
import { startServer } from "./bootstrap.js";
import { swaggerUi, swaggerSpec } from "./swagger.js";  

// Loading environment variables...
import { createServer } from "http";
import { initSocket } from "./lib/socket.js";

// Loading environment variables...
loadEnv();

const PORT = APP_CONSTANTS.port;

(async () => {
  try {
    // Starting server initialization...
    await startServer(); // Khởi tạo database
    
    // Create HTTP server
    const httpServer = createServer(app);
    
    // Initialize Socket.io
    initSocket(httpServer);
    
    // Starting HTTP server...
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
      console.log(`📍 http://localhost:${PORT}`);
      console.log(`📍 API: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
