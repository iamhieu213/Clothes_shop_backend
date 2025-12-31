export const invalidJsonHandler = (err, _req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("❌ Invalid JSON:", err.message);
    return res.status(400).json({
      success: false,
      error: "Invalid JSON format",
      message: "Please check your request body",
      detail: err.message,
    });
  }

  return next(err);
};

