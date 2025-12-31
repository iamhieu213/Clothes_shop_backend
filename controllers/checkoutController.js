import { sendError, sendSuccess } from "./controllerUtils.js";
import { validateCheckout } from "../services/checkoutService.js";

export const validateCheckoutController = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = new Error("Cần đăng nhập để thực hiện thanh toán");
      error.status = 401;
      return sendError(res, error, 401);
    }

    const { shippingAddressId, paymentMethod, promotionCode } = req.body || {};

    const result = await validateCheckout({
      userId,
      shippingAddressId,
      paymentMethod,
      promotionCode,
    });

    return sendSuccess(res, { data: result });
  } catch (error) {
    return sendError(res, error);
  }
};
