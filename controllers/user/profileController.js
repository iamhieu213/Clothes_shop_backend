import { sendError, sendSuccess } from "../controllerUtils.js";

export const getProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return sendError(res, "Unauthorized", 401);
    }

    const profile = {
      id: user.id,
      email: user.email,
      name: user.name || null,
      roles: user.role ? [user.role] : [],
    };

    return sendSuccess(res, { data: profile });
  } catch (error) {
    return sendError(res, error);
  }
};
