import express from "express";
import productRoutes from "../productRoute.js";

const router = express.Router();

// Deprecated: keep legacy user products path for backward compatibility.
router.use((req, res, next) => {
  console.warn("[DEPRECATED] /api/user/products will be removed soon. Migrate to /api/products.");
  next();
});

router.use("/", productRoutes);

export default router;
