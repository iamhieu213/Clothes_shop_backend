import { Server } from "socket.io";
import { loadEnv } from "../config/env.js";

let io;

export const initSocket = (server) => {
  const env = loadEnv();
  const frontendUrl = env.FRONTEND_URL || "http://localhost:5173";
  const adminUrl = env.ADMIN_URL || "http://localhost:5174";

  io = new Server(server, {
    cors: {
      origin: [frontendUrl, adminUrl, "http://localhost:5173", "http://localhost:5174"],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`🔌 New client connected: ${socket.id}`);

    // Join admin room if identified as admin
    socket.on("authenticate", (data) => {
      if (data.role === "admin" || data.role === "ADMIN") {
        socket.join("admin_room");
        console.log(`🛠️ Socket ${socket.id} joined admin_room`);
      }
    });

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};

export const emitToAdmins = (event, data) => {
  if (io) {
    io.to("admin_room").emit(event, data);
  }
};
