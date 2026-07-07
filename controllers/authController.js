import { registerUser, loginUser, logoutUser, sendOtpService, verifyOtpService, resetPasswordService, signInGoogle, signInFacebook, updateUserService, verifyRefreshToken, createAccessToken, verifyEmailService, resendVerificationEmailService } from "../services/authService.js";
import passport from "passport";
import { buildOAuthCallbackUrl, redirectOAuthError } from "../utils/oauth.js";
import { APP_CONSTANTS } from "../config/constants.js";
import { sendSuccess, sendError } from "./controllerUtils.js";

// Get current user from token
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    // req.user is set by authenticateToken middleware
    const payload = req.user.toJSON ? req.user.toJSON() : req.user;
    const { password, access_token, refresh_token, ...userResponse } = payload;

    sendSuccess(res, {
      message: "User retrieved successfully",
      data: userResponse
    });
  } catch (error) {
    sendError(res, error);
  }
};

// dang ky bang tai khoa local
export const signUp = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    sendSuccess(res, {
      message: "User registered successfully",
      data: { user: newUser }
    });
  } catch (error) {
    sendError(res, error);
  }
}

//Refresh access token
export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required"
      });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const { User } = await import("../models/index.js");
    const user = await User.findByPk(decoded.id);

    if (!user || user.refresh_token !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token"
      });
    }

    const newAccessToken = createAccessToken(user);

    // Đảm bảo name không null/undefined
    const displayName = user.name && user.name.trim() !== ""
      ? user.name
      : user.email?.split("@")[0] || "User";

    sendSuccess(res, {
      message: "Token refreshed successfully",
      data: {
        accessToken: newAccessToken,
        user: {
          id: user.id,
          email: user.email,
          name: displayName,
          role: user.role
        }
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid refresh token"
    });
  }
};

// dang nhap tai khoan bang local
export const signIn = async (req, res) => {
  try {
    const { email, password, isAdminLogin = false } = req.body;
    const result = await loginUser(email, password);

    // If this is admin login, verify user has admin privileges
    if (isAdminLogin && !['admin', 'super_admin'].includes(result.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required."
      });
    }

    sendSuccess(res, {
      message: "User logged in successfully",
      data: {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user: result.user
      }
    });
  } catch (error) {
    sendError(res, error);
  }
}

//dang xuat tai khoan
export const signOut = async (req, res) => {
  try {
    const email = req.user.email;
    const result = await logoutUser(email);

    // res.clearCookie("accessToken");
    // res.clearCookie("refreshToken");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

//Quen mat khau
export const sendOTPEmail = async (req, res) => {
  try {
    const result = await sendOtpService(req.body.email);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const verifyOTPEmail = async (req, res) => {
  try {
    const result = await verifyOtpService(req.body.email, req.body.otp);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const result = await resetPasswordService(token, newPassword);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Xác thực email
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify-email?error=missing_token`);
    }

    const result = await verifyEmailService(token);

    // Redirect về frontend với success message
    return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify-email?success=true`);
  } catch (err) {
    console.error("Lỗi xác thực email:", err);
    return res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify-email?error=${encodeURIComponent(err.message)}`);
  }
};

// Gửi lại email xác thực
export const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email là bắt buộc"
      });
    }

    const result = await resendVerificationEmailService(email);

    sendSuccess(res, {
      message: result.message,
      data: {}
    });
  } catch (error) {
    sendError(res, error);
  }
};

//Dang nhap bang google
export const signInGoogleController = {
  //Xử lý callback sau khi Google xác thực thành công
  googleCallback: async (req, res) => {
    try {
      if (!req.user) {
        return redirectOAuthError(
          res,
          "Email này đã được đăng ký bằng tài khoản local, vui lòng đăng nhập bằng email & mật khẩu.",
          typeof req.query?.state === "string" ? req.query.state : undefined
        );
      }

      const user = req.user;

      // Tạo JWT access token và refresh token cho user
      const accessToken = signInGoogle.generateAccessToken(user);
      const refreshToken = signInGoogle.generateRefreshToken(user);

      // Lưu tokens vào database
      await signInGoogle.saveTokensToDatabase(user, accessToken, refreshToken);

      // Đảm bảo name không null/undefined - fallback cho email username
      const displayName = user.name && user.name.trim() !== ""
        ? user.name
        : user.email?.split("@")[0] || "User";

      // Redirect về frontend với tokens trong URL params
      const params = {
        accessToken,
        refreshToken,
        userId: user.id.toString(),
        email: user.email,
        fullName: displayName,
      };

      if (typeof req.query?.state === "string" && req.query.state.length > 0) {
        params.state = req.query.state;
      }

      return res.redirect(buildOAuthCallbackUrl(params));
    } catch (error) {
      console.error(" Lỗi khi đăng nhập Google:", error);
      return redirectOAuthError(
        res,
        "Đăng nhập Google thất bại, vui lòng thử lại sau.",
        typeof req.query?.state === "string" ? req.query.state : undefined
      );
    }
  },
};

//Dang nhap bang facebook
export const facebookAuth = passport.authenticate("facebook", { scope: ["email"] });

export const signInFacebookController = {
  //Xử lý callback sau khi Facebook xác thực thành công
  facebookCallback: async (req, res) => {
    try {
      if (!req.user) {
        return redirectOAuthError(
          res,
          "Email này đã được đăng ký bằng tài khoản local, vui lòng đăng nhập bằng email & mật khẩu.",
          typeof req.query?.state === "string" ? req.query.state : undefined
        );
      }

      const user = req.user;

      // Tạo JWT access token và refresh token cho user
      const accessToken = signInFacebook.generateAccessToken(user);
      const refreshToken = signInFacebook.generateRefreshToken(user);

      // Lưu tokens vào database
      await signInFacebook.saveTokensToDatabase(user, accessToken, refreshToken);

      // Đảm bảo name không null/undefined - fallback cho email username
      const displayName = user.name && user.name.trim() !== ""
        ? user.name
        : user.email?.split("@")[0] || "User";

      // Redirect về frontend với tokens trong URL params
      const params = {
        accessToken,
        refreshToken,
        userId: user.id.toString(),
        email: user.email,
        fullName: displayName,
      };

      if (typeof req.query?.state === "string" && req.query.state.length > 0) {
        params.state = req.query.state;
      }

      return res.redirect(buildOAuthCallbackUrl(params));
    } catch (error) {
      console.error(" Lỗi khi đăng nhập Facebook:", error);
      return redirectOAuthError(
        res,
        "Đăng nhập Facebook thất bại, vui lòng thử lại sau.",
        typeof req.query?.state === "string" ? req.query.state : undefined
      );
    }
  },
};

export const facebookAuthCallback = signInFacebookController.facebookCallback;

//Cap nhat thong tin tai khoan
export const updateUser = async (req, res) => {
  try {
    // Lấy id từ params
    const requestedId = parseInt(req.params.id);
    // Lấy id từ token (user đang đăng nhập)
    const authenticatedUserId = req.user.id;

    // Kiểm tra user chỉ có thể cập nhật chính mình
    if (requestedId !== authenticatedUserId) {
      return res.status(403).json({
        success: false,
        message: "Bạn chỉ có thể cập nhật thông tin của chính mình",
      });
    }

    const updateData = req.body;

    // Gọi service để cập nhật
    const updatedUser = await updateUserService(requestedId, updateData);

    // Trả về thông tin user đã cập nhật (không trả về password và tokens)
    const { password, access_token, refresh_token, ...userResponse } = updatedUser.toJSON();

    res.status(200).json({
      success: true,
      message: "Cập nhật thông tin thành công",
      user: userResponse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
