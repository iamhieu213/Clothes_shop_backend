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
          // Kiểm tra email đã tồn tại
          const existingUser = await User.findOne({ 
            where: { email, provider: "local" } 
          });
          
          if (existingUser) {
            return done(
              null,
              false,
              { message: "Email này đã được dùng cho tài khoản local" }
            );
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