import { Router } from "express";
import { authenticateToken } from "../../middlewares/auth.js";
import { getProfile } from "../../controllers/user/profileController.js";
import wishlistRoutes from "./wishlistRoutes.js";

const userRouter = Router();

userRouter.use("/wishlist", wishlistRoutes);

/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Lấy thông tin hồ sơ người dùng hiện tại
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Thông tin người dùng
 *       401:
 *         description: Unauthorized
 */
userRouter.get("/user/profile", authenticateToken, getProfile);

export default userRouter;
