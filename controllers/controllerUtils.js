export const sendSuccess = (res, { status = 200, ...payload }) => {
  return res.status(status).json({
    success: true,
    ...payload,
  });
};

export const sendError = (res, error, defaultStatus = 400) => {
  const status = error?.status || defaultStatus;
  const message =
    typeof error === "string" ? error : error?.message || "Unexpected error";

  return res.status(status).json({
    success: false,
    message,
  });
};

export const validateRequest = (schema, payload) => {
  const result = schema.safeParse(payload);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => `${issue.path.join(".") || "body"}: ${issue.message}`)
      .join(", ");
    const error = new Error(message);
    error.status = 422;
    throw error;
  }

  return result.data;
};

