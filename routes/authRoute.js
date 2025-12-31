import express from 'express';
import passport from "passport";
import { signUp, signIn, signOut, getCurrentUser, sendOTPEmail, verifyOTPEmail, resetPassword, signInGoogleController, facebookAuth, facebookAuthCallback, updateUser, refreshAccessToken, verifyEmail, resendVerificationEmail  } from '../controllers/authController.js';
import { authenticateToken } from '../middlewares/auth.js';
import { redirectOAuthError } from "../utils/oauth.js";

const router = express.Router();

/**
 * @swagger
 * /auth/signUp:
 *   post:
 *     summary: Đăng ký tài khoản
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - fullName
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               fullName:
 *                 type: string
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *       400:
 *         description: Lỗi đăng ký
 */
router.post('/auth/signUp', signUp);

/**
 * @swagger
 * /auth/signIn:
 *   post:
 *     summary: Đăng nhập
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *       401:
 *         description: Sai thông tin đăng nhập
 */
router.post('/auth/signIn', signIn);

/**
 * @swagger
 * /auth/signOut:
 *   get:
 *     summary: Đăng xuất
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 *       401:
 *         description: Unauthorized
 */
router.get('/auth/signOut', authenticateToken, signOut);

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Lấy thông tin user hiện tại
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy thông tin thành công
 *       401:
 *         description: Unauthorized
 */
router.get('/auth/me', authenticateToken, getCurrentUser);

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Gửi OTP để reset mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Gửi OTP thành công
 *       400:
 *         description: Lỗi gửi OTP
 */
router.post('/auth/send-otp', sendOTPEmail);

/**
 * @swagger
 * /auth/verify-otp:
 *   post:
 *     summary: Xác thực OTP
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: Xác thực OTP thành công
 *       400:
 *         description: OTP không hợp lệ
 */
router.post('/auth/verify-otp', verifyOTPEmail);

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *               - newPassword
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reset mật khẩu thành công
 *       400:
 *         description: Lỗi reset mật khẩu
 */
router.post('/auth/reset-password', resetPassword);

/**
 * @swagger
 * /auth/verify-email:
 *   get:
 *     summary: Xác thực email đăng ký
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirect về frontend
 */
router.get('/auth/verify-email', verifyEmail);

/**
 * @swagger
 * /auth/resend-verification:
 *   post:
 *     summary: Gửi lại email xác thực
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Gửi email thành công
 *       400:
 *         description: Lỗi gửi email
 */
router.post('/auth/resend-verification', resendVerificationEmail);

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Đăng nhập bằng Google
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Google OAuth
 */
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback sau khi Google xác thực
router.get(
  "/auth/google/callback",
  (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
      const stateParam = typeof req.query?.state === "string" ? req.query.state : undefined;

      if (err) {
        console.error("Google OAuth error:", err);
        return redirectOAuthError(
          res,
          "Đăng nhập Google thất bại, vui lòng thử lại sau.",
          stateParam
        );
      }

      if (!user) {
        const message =
          info?.message ||
          "Email này đã được đăng ký bằng tài khoản local, vui lòng đăng nhập bằng email & mật khẩu.";
        return redirectOAuthError(res, message, stateParam);
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          console.error("Google OAuth session error:", loginErr);
          return redirectOAuthError(
            res,
            "Không thể hoàn tất đăng nhập, vui lòng thử lại.",
            stateParam
          );
        }
        return signInGoogleController.googleCallback(req, res);
      });
    })(req, res, next);
  }
);

/**
 * @swagger
 * /auth/facebook:
 *   get:
 *     summary: Đăng nhập bằng Facebook
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Facebook OAuth
 */
router.get("/auth/facebook", facebookAuth);

// Callback sau khi Facebook xác thực
router.get(
  "/auth/facebook/callback",
  (req, res, next) => {
    passport.authenticate("facebook", (err, user, info) => {
      const stateParam = typeof req.query?.state === "string" ? req.query.state : undefined;

      if (err) {
        console.error("Facebook OAuth error:", err);
        return redirectOAuthError(
          res,
          "Đăng nhập Facebook thất bại, vui lòng thử lại sau.",
          stateParam
        );
      }

      if (!user) {
        const message =
          info?.message ||
          "Email này đã được đăng ký bằng tài khoản local, vui lòng đăng nhập bằng email & mật khẩu.";
        return redirectOAuthError(res, message, stateParam);
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          console.error("Facebook OAuth session error:", loginErr);
          return redirectOAuthError(
            res,
            "Không thể hoàn tất đăng nhập, vui lòng thử lại.",
            stateParam
          );
        }
        return facebookAuthCallback(req, res);
      });
    })(req, res, next);
  }
);

/**
 * @swagger
 * /auth/profile/{id}:
 *   put:
 *     summary: Cập nhật thông tin tài khoản
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *               avatar:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Lỗi cập nhật
 *       401:
 *         description: Unauthorized
 */
router.put("/auth/profile/:id", authenticateToken, updateUser);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token refreshed successfully
 *       401:
 *         description: Invalid refresh token
 */
router.post('/auth/refresh', refreshAccessToken);

export default router;
