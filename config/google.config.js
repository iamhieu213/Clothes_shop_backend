import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {User} from "../models/index.js";
import { loadEnv } from "./env.js";
import { APP_CONSTANTS } from "./constants.js";

const env = loadEnv();

passport.use(
    new GoogleStrategy(
        {
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL: APP_CONSTANTS.oauth.googleCallbackUrl,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const googleEmail = profile.emails[0]?.value?.toLowerCase().trim();
                
                if (!googleEmail) {
                    return done(new Error("Google account does not have an email address"), null);
                }

                // Bước 1: Kiểm tra user đã đăng nhập Google trước đó (theo provider_id)
                let user = await User.findOne({ 
                    where: { provider_id: profile.id, provider: "google" } 
                });

                if (user) {
                    // User đã có tài khoản Google -> Cập nhật tokens
                    user.access_token = accessToken;
                    user.refresh_token = refreshToken;
                    await user.save();
                    return done(null, user);
                }

                // Bước 2: Kiểm tra email đã tồn tại trong hệ thống
                const existingEmailUser = await User.findOne({ 
                    where: { email: googleEmail } 
                });

                if (existingEmailUser) {
                    // Email đã tồn tại -> Liên kết tài khoản Google với tài khoản hiện có
                    // Giữ nguyên provider cũ nếu đã có (local/facebook), nhưng thêm Google info
                    // Hoặc nếu là local thì chuyển sang google
                    if (existingEmailUser.provider === "local" || !existingEmailUser.provider) {
                        // Tài khoản local -> Liên kết với Google
                        existingEmailUser.provider = "google";
                        existingEmailUser.provider_id = profile.id;
                    } else if (existingEmailUser.provider === "google" && !existingEmailUser.provider_id) {
                        // Trường hợp đặc biệt: có provider google nhưng chưa có provider_id
                        existingEmailUser.provider_id = profile.id;
                    }
                    // Nếu đã có provider khác (ví dụ facebook), vẫn giữ nguyên nhưng thêm Google info
                    // Hoặc có thể chọn merge thành "google" tùy business logic

                    existingEmailUser.refresh_token = refreshToken;

                    // Cập nhật name nếu chưa có hoặc rỗng
                    if (!existingEmailUser.name || existingEmailUser.name.trim() === "") {
                        const displayName = profile.displayName || googleEmail.split("@")[0] || "User";
                        existingEmailUser.name = displayName;
                    }

                    await existingEmailUser.save();
                    console.log(`Linked Google account to existing user: ${existingEmailUser.email}`);
                    return done(null, existingEmailUser);
                }

                // Bước 3: Chưa có user nào -> Tạo tài khoản mới
                const displayName = profile.displayName || googleEmail.split("@")[0] || "User";
                user = await User.create({
                    name: displayName,
                    email: googleEmail,
                    provider: "google",
                    provider_id: profile.id,
                    refresh_token: refreshToken,
                    role: "customer",
                });
                
                console.log(`Created new Google user: ${googleEmail}`);
                return done(null, user);
            } catch (error) {
                console.error("Lỗi khi đăng nhập Google:", error);
                return done(error, null);
            }
        }
    )
)

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
})