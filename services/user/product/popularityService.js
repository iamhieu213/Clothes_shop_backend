import { sequelize, Product, Review, OrderItem, Order } from "../../../models/index.js";
import { literal } from "sequelize";

/**
 * Recalculate popularity metrics for all products.
 * - review_count, avg_rating from reviews
 * - order_count from order_items joined with paid/completed orders
 * - popularity_score as weighted blend (reviews + orders)
 */
export const recalculatePopularityMetrics = async () => {
  // Aggregate review counts and ratings
  const reviewAgg = await Review.findAll({
    attributes: [
      "product_id",
      [sequelize.fn("COUNT", sequelize.col("id")), "review_count"],
      [sequelize.fn("AVG", sequelize.col("rating")), "avg_rating"],
    ],
    group: ["product_id"],
    raw: true,
  });

  const reviewMap = new Map(
    reviewAgg.map((row) => [
      row.product_id,
      {
        review_count: Number(row.review_count) || 0,
        avg_rating: Number(row.avg_rating) || 0,
      },
    ])
  );

  // Aggregate order counts for completed/paid orders
  const orderAgg = await OrderItem.findAll({
    attributes: [
      "product_id",
      [sequelize.fn("COUNT", sequelize.col("OrderItem.id")), "order_count"],
    ],
    include: [
      {
        model: Order,
        attributes: [],
        required: true,
        where: { status: "completed" },
      },
    ],
    group: ["OrderItem.product_id"],
    raw: true,
  });

  const orderMap = new Map(
    orderAgg.map((row) => [row.product_id, Number(row.order_count) || 0])
  );

  // Update products
  const products = await Product.findAll({ attributes: ["id"] });
  for (const product of products) {
    const reviews = reviewMap.get(product.id) || { review_count: 0, avg_rating: 0 };
    const orders = orderMap.get(product.id) || 0;

    // Simple scoring: weight reviews and orders
    const popularity_score = reviews.review_count * 2 + reviews.avg_rating * 5 + orders;

    await Product.update(
      {
        review_count: reviews.review_count,
        avg_rating: reviews.avg_rating,
        order_count: orders,
        popularity_score,
      },
      { where: { id: product.id } }
    );
  }
};

/**
 * Incremental update on a single product.
 */
export const updatePopularityForProduct = async (productId) => {
  // Reuse aggregate logic for one product to avoid duplication
  const [result] = await sequelize.query(
    `
    WITH review_stats AS (
      SELECT
        product_id,
        COUNT(*) AS review_count,
        AVG(rating)::decimal(10,2) AS avg_rating
      FROM reviews
      WHERE product_id = :productId
      GROUP BY product_id
    ),
    order_stats AS (
      SELECT
        oi.product_id,
        COUNT(*) AS order_count
      FROM order_items oi
      JOIN orders o ON o.id = oi.order_id
      WHERE oi.product_id = :productId AND o.status = 'completed'
      GROUP BY oi.product_id
    )
    SELECT
      COALESCE(r.review_count, 0) AS review_count,
      COALESCE(r.avg_rating, 0) AS avg_rating,
      COALESCE(o.order_count, 0) AS order_count
    FROM review_stats r
    FULL OUTER JOIN order_stats o ON r.product_id = o.product_id
    `,
    {
      replacements: { productId },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  const stats = result || { review_count: 0, avg_rating: 0, order_count: 0 };
  const popularity_score =
    Number(stats.review_count) * 2 + Number(stats.avg_rating) * 5 + Number(stats.order_count);

  await Product.update(
    {
      review_count: stats.review_count,
      avg_rating: stats.avg_rating,
      order_count: stats.order_count,
      popularity_score,
    },
    { where: { id: productId } }
  );
};
