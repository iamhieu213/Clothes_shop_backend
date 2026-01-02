import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { User } from "../models/index.js";
import { loadEnv } from "./env.js";
import { APP_CONSTANTS } from "./constants.js";

const env = loadEnv();

passport.use(
    new FacebookStrategy(
    {
      clientID: env.FACEBOOK_APP_ID,
      clientSecret: env.FACEBOOK_APP_SECRET,
      callbackURL: APP_CONSTANTS.oauth.facebookCallbackUrl,
      profileFields: ["id", "emails", "name"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const facebookId = profile.id;
        
        // Kiểm tra email có tồn tại không
        if (!email) {
          return done(
            null,
            false,
            { message: "Facebook account không có email. Vui lòng cung cấp email trong cài đặt Facebook." }
          );
        }

        // Xử lý fullName an toàn với fallback
        const givenName = profile.name?.givenName || "";
        const familyName = profile.name?.familyName || "";
        let fullName = `${givenName} ${familyName}`.trim();

        // Nếu không có name từ profile, dùng displayName hoặc email username
        if (!fullName) {
            fullName = profile.displayName || email?.split("@")[0] || "Facebook User";
        }

        let user = await User.findOne({ 
          where: { provider_id: facebookId, provider: "facebook" } 
        });

        if (!user) {
          // Kiểm tra email đã tồn tại (bất kể provider nào)
          const existingUser = await User.findOne({ 
            where: { email } 
          });
          
          if (existingUser) {
             // Email đã tồn tại -> Liên kết tài khoản Facebook với tài khoản này
             // Cập nhật provider thành "facebook" (hoặc giữ nguyên logic business của bạn)
             // Ở đây ta sẽ cập nhật provider_id để lần sau đăng nhập được bằng FB
             
             // Nếu user chưa có provider (null) hoặc là local, ta có thể cho phép
             // Nếu user là google, ta cũng cho phép chung email là chung tài khoản
             
             if (!existingUser.provider_id) {
                existingUser.provider = "facebook";
                existingUser.provider_id = facebookId;
             }
             // Nếu muốn support multiple auth providers, cần bảng riêng, nhưng ở đây
             // ta giả định đơn giản là cập nhật thông tin nếu cần thiết hoặc chỉ cần trả về user
             
             // Cập nhật refresh_token nếu có
             if (refreshToken) {
                existingUser.refresh_token = refreshToken;
             }
             
             await existingUser.save();
             return done(null, existingUser);
          }

          user = await User.create({
            email,
            name: fullName,
            phone: null,
            provider: "facebook",
            provider_id: facebookId,
            refresh_token: refreshToken || null
          });
        } else {
          // Cập nhật refresh_token
          if (refreshToken) {
            user.refresh_token = refreshToken;
          }
          await user.save();
        }

        done(null, user);
      } catch (err) {
        console.error("Facebook OAuth error:", err);
        done(err, null);
      }
    }
  )
);