import express from "express";
import authRoutes from "./authRoute.js";
import adminRouter from "./admin/index.js";
import userRouter from "./user/index.js";
import productRoutes from "./productRoute.js";
import discountRoutes from "./discountRoutes.js";
import cartRoutes from "./cartRoute.js";
import orderRoutes from "./orderRoute.js";
import addressRoutes from "./addressRoute.js";
import categoryRoutes from "./categoryRoutes.js";
import checkoutRoutes from "./checkoutRoute.js";
import reviewRoutes from "./reviewRoute.js";
import collectionRoutes from "./collections.js";
import adminCollectionRoutes from "./admin/collections.js";

const api = express.Router();

api.use("/", authRoutes);
api.use("/", adminRouter);
api.use("/", userRouter);
api.use("/products", productRoutes);
api.use("/", categoryRoutes);
// Public discount routes - for endpoints like /active, /validate, /apply
api.use("/discounts", discountRoutes);
api.use("/cart", cartRoutes);
api.use("/orders", orderRoutes);
api.use("/addresses", addressRoutes);
api.use("/checkout", checkoutRoutes);
api.use("/reviews", reviewRoutes);
api.use("/collections", collectionRoutes);
api.use("/admin/collections", adminCollectionRoutes);

export default api;
