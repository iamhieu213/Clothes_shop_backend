import { Router } from "express";
import { authenticateToken, isAdmin } from "../../middlewares/auth.js";
import productRoutes from "./productRoute.js";
import productManagementRoutes from "./productManagementRoutes.js";
import orderRoutes from "./orderRoutes.js";
import statsRoutes from "./statsRoute.js";
import adminUserRoutes from "./userRoutes.js";
import userManagementRoutes from "./userManagementRoutes.js";
import adminDiscountRoutes from "./discountRoutes.js";

const adminRouter = Router();

// Apply authentication and admin access to all admin routes
adminRouter.use("/admin/products", authenticateToken, isAdmin, productManagementRoutes);
adminRouter.use("/admin/product-management", authenticateToken, isAdmin, productRoutes);
adminRouter.use("/admin/orders", authenticateToken, isAdmin, orderRoutes);
adminRouter.use("/admin", authenticateToken, isAdmin, statsRoutes);
adminRouter.use("/admin/users", authenticateToken, isAdmin, userManagementRoutes);
adminRouter.use("/admin/user-management", authenticateToken, isAdmin, adminUserRoutes);
adminRouter.use("/admin/discounts", authenticateToken, isAdmin, adminDiscountRoutes);

export default adminRouter;
