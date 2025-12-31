import { sendError, sendSuccess } from "../../utils/response.js";
import { createReview, listProductReviews, updateReview, deleteReview } from "../../services/user/reviewService.js";
import { uploadImages } from "../../utils/uploader.js";

export const listProductReviewsController = async (req, res) => {
  const productId = Number(req.params.productId);
  const page = req.query.page ? Number(req.query.page) : 1;
  const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 6;

  if (!productId || Number.isNaN(productId) || productId <= 0) {
    return sendError(res, { status: 400, message: "Invalid product ID" });
  }

  if (page <= 0 || Number.isNaN(page)) {
    return sendError(res, { status: 400, message: "Invalid page number" });
  }

  if (pageSize <= 0 || Number.isNaN(pageSize) || pageSize > 100) {
    return sendError(res, { status: 400, message: "Invalid page size (max 100)" });
  }

  try {
    const data = await listProductReviews({ productId, page, pageSize });
    return sendSuccess(res, 200, data, "Reviews fetched successfully");
  } catch (error) {
    const statusCode = error.message === "Product not found" ? 404 : 400;
    return sendError(res, { status: statusCode, message: error.message });
  }
};

export const createReviewController = async (req, res) => {
  const userId = req.user?.id;
  const { productId, rating, comment } = req.body;
  const files = req.files || [];

  if (!userId) {
    return sendError(res, { status: 401, message: "Authentication required" });
  }

  if (!productId) {
    return sendError(res, { status: 400, message: "Product ID is required" });
  }

  if (!rating) {
    return sendError(res, { status: 400, message: "Rating is required" });
  }

  const numericProductId = Number(productId);
  const numericRating = Number(rating);

  if (Number.isNaN(numericProductId) || numericProductId <= 0) {
    return sendError(res, { status: 400, message: "Invalid product ID" });
  }

  if (Number.isNaN(numericRating)) {
    return sendError(res, { status: 400, message: "Rating must be a number" });
  }

  try {
    // Upload images if any
    let imageUrls = [];
    if (files && files.length > 0) {
      imageUrls = await uploadImages(files, "reviews");
    } else if (req.body.images && Array.isArray(req.body.images)) {
      // Support existing image URLs from JSON body
      imageUrls = req.body.images;
    }

    const data = await createReview({
      userId,
      productId: numericProductId,
      rating: numericRating,
      comment: comment || null,
      images: imageUrls,
    });
    return sendSuccess(res, 201, data, "Review created successfully");
  } catch (error) {
    const statusCode = error.message === "Product not found" ? 404 : 400;
    return sendError(res, { status: statusCode, message: error.message });
  }
};

export const updateReviewController = async (req, res) => {
  const userId = req.user?.id;
  const reviewId = Number(req.params.reviewId);
  const { rating, comment } = req.body;
  const files = req.files || [];

  if (!userId) {
    return sendError(res, { status: 401, message: "Authentication required" });
  }

  if (!reviewId || Number.isNaN(reviewId) || reviewId <= 0) {
    return sendError(res, { status: 400, message: "Invalid review ID" });
  }

  try {
    // Upload new images if any
    let imageUrls = undefined;
    if (files && files.length > 0) {
      // If new files are uploaded, upload them
      const newImageUrls = await uploadImages(files, "reviews");
      // If there are existing images in body, merge them, otherwise use only new ones
      if (req.body.existingImages) {
        const existing = Array.isArray(req.body.existingImages) 
          ? req.body.existingImages 
          : JSON.parse(req.body.existingImages || '[]');
        imageUrls = [...existing, ...newImageUrls];
      } else {
        imageUrls = newImageUrls;
      }
    } else if (req.body.existingImages !== undefined) {
      // Only existing images, no new uploads
      imageUrls = Array.isArray(req.body.existingImages) 
        ? req.body.existingImages 
        : JSON.parse(req.body.existingImages || '[]');
    }
    // If imageUrls is still undefined, it means don't change images

    const data = await updateReview({
      reviewId,
      userId,
      rating: rating ? Number(rating) : undefined,
      comment: comment !== undefined ? comment : undefined,
      images: imageUrls,
    });
    return sendSuccess(res, 200, data, "Review updated successfully");
  } catch (error) {
    const statusCode = error.message === "Review not found" ? 404 : 
                      error.message.includes("own") ? 403 : 400;
    return sendError(res, { status: statusCode, message: error.message });
  }
};

export const deleteReviewController = async (req, res) => {
  const userId = req.user?.id;
  const reviewId = Number(req.params.reviewId);

  if (!userId) {
    return sendError(res, { status: 401, message: "Authentication required" });
  }

  if (!reviewId || Number.isNaN(reviewId) || reviewId <= 0) {
    return sendError(res, { status: 400, message: "Invalid review ID" });
  }

  try {
    await deleteReview({ reviewId, userId });
    return sendSuccess(res, 200, { success: true }, "Review deleted successfully");
  } catch (error) {
    const statusCode = error.message === "Review not found" ? 404 : 
                      error.message.includes("own") ? 403 : 400;
    return sendError(res, { status: statusCode, message: error.message });
  }
};
