import { fn, col } from "sequelize";
import { Product, Review, User } from "../../models/index.js";
import { buildPagination } from "./product/queryBuilder.js";

const buildUserName = (user) => {
  if (!user) return "Anonymous";
  return user.name || user.email || "Anonymous";
};

export const listProductReviews = async ({ productId, page = 1, pageSize = 6 }) => {
  const product = await Product.findByPk(productId, { attributes: ["id"] });
  if (!product) {
    throw new Error("Product not found");
  }

  const { limit, offset, page: safePage, pageSize: safePageSize } =
    buildPagination(page, pageSize);

  const { rows, count } = await Review.findAndCountAll({
    where: { product_id: productId },
    include: [
      {
        model: User,
        attributes: ["id", "name", "email"],
      },
    ],
    order: [["created_at", "DESC"]],
    limit,
    offset,
  });

  const ratingRows = await Review.findAll({
    attributes: ["rating", [fn("COUNT", col("rating")), "count"]],
    where: { product_id: productId },
    group: ["rating"],
    raw: true,
  });

  const avgRow = await Review.findAll({
    attributes: [[fn("AVG", col("rating")), "avg_rating"]],
    where: { product_id: productId },
    raw: true,
  });

  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  ratingRows.forEach((row) => {
    const rating = Number(row.rating);
    if (ratingCounts[rating] !== undefined) {
      ratingCounts[rating] = Number(row.count) || 0;
    }
  });

  const averageRating = avgRow[0]?.avg_rating
    ? Number(avgRow[0].avg_rating)
    : 0;

  const reviews = rows.map((review) => {
    const data = review.toJSON ? review.toJSON() : review;
    return {
      id: data.id,
      rating: data.rating,
      comment: data.comment,
      images: Array.isArray(data.images) ? data.images : [],
      createdAt: data.created_at,
      user: {
        id: data.user?.id || null,
        name: buildUserName(data.user),
      },
    };
  });

  return {
    reviews,
    total: count,
    page: safePage,
    pageSize: safePageSize,
    totalPages: Math.ceil(count / safePageSize),
    ratingStats: {
      averageRating,
      counts: ratingCounts,
    },
  };
};

export const createReview = async ({
  userId,
  productId,
  rating,
  comment,
  images = [],
}) => {
  const product = await Product.findByPk(productId, { attributes: ["id"] });
  if (!product) {
    throw new Error("Product not found");
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be an integer between 1 and 5");
  }

  const payload = {
    user_id: userId,
    product_id: productId,
    rating,
    comment: comment || null,
    images: Array.isArray(images) ? images : [],
  };

  const review = await Review.create(payload);
  return review.toJSON ? review.toJSON() : review;
};

export const updateReview = async ({
  reviewId,
  userId,
  rating,
  comment,
  images = [],
}) => {
  const review = await Review.findByPk(reviewId);
  if (!review) {
    throw new Error("Review not found");
  }

  if (review.user_id !== userId) {
    throw new Error("You can only update your own reviews");
  }

  if (rating !== undefined) {
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      throw new Error("Rating must be an integer between 1 and 5");
    }
  }

  const updateData = {};
  if (rating !== undefined) updateData.rating = rating;
  if (comment !== undefined) updateData.comment = comment || null;
  if (images !== undefined) updateData.images = Array.isArray(images) ? images : [];

  await review.update(updateData);
  return review.toJSON ? review.toJSON() : review;
};

export const deleteReview = async ({ reviewId, userId }) => {
  const review = await Review.findByPk(reviewId);
  if (!review) {
    throw new Error("Review not found");
  }

  if (review.user_id !== userId) {
    throw new Error("You can only delete your own reviews");
  }

  await review.destroy();
  return { success: true };
};