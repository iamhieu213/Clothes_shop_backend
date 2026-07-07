import { literal } from "sequelize";
import { Category, Product, ProductVariant } from "../models/index.js";
import { buildSlugWithFallback, slugify } from "../utils/slug.js";

const generateUniqueSlug = async (name, transaction) => {
  const base = buildSlugWithFallback(name, "product");
  let slug = base;
  let counter = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await Product.findOne({ where: { slug }, transaction });
    if (!existing) break;
    slug = `${base}-${counter++}`;
  }

  return slug;
};

const resolveSlug = async ({ name, slug }, transaction) => {
  if (slug) return slugify(slug);
  if (name) return generateUniqueSlug(name, transaction);
  return undefined;
};

export const createProductRecord = async (data, transaction) => {
  const slug = await resolveSlug(data, transaction);
  return Product.create(
    { ...data, slug },
    {
      transaction,
    }
  );
};

export const updateProductRecord = async (product, data, transaction) => {
  const nextSlug = await resolveSlug(
    {
      name: data.name ?? product.name,
      slug: data.slug,
    },
    transaction
  );

  const updates = { ...data };
  if (nextSlug) {
    updates.slug = nextSlug;
  }

  return product.update(updates, { transaction });
};

export const findProductWithRelations = async (productId, transaction) =>
  Product.findByPk(productId, {
    include: [
      { model: ProductVariant, as: "variants" },
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug", "parent_id"],
      },
    ],
    transaction,
  });

export const findProductBySlugWithRelations = async (productSlug, transaction) =>
  Product.findOne({
    where: { slug: productSlug },
    include: [
      { model: ProductVariant, as: "variants" },
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug", "parent_id"],
      },
    ],
    transaction,
  });

export const deleteProductRecord = async (product, transaction) =>
  product.destroy({ transaction });

export const listProductsWithRelations = async ({
  where,
  variantWhere,
  order,
  limit,
  offset,
}) => {
  return Product.findAll({
    where,
    attributes: {
      include: [
        [
          literal(`(
            SELECT COALESCE(AVG(rating), 0)
            FROM reviews
            WHERE product_id = "products"."id"
          )`),
          'average_rating'
        ],
        [
          literal(`(
            SELECT COUNT(id)
            FROM reviews
            WHERE product_id = "products"."id"
          )`),
          'review_count'
        ],
        [
          literal(`(
            SELECT COALESCE(SUM(oi.quantity), 0)
            FROM order_items oi
            JOIN orders o ON o.id = oi.order_id
            WHERE oi.product_id = "products"."id" AND o.status IN ('completed', 'delivered')
          )`),
          'sold_count'
        ]
      ]
    },
    include: [
      {
        model: ProductVariant,
        as: "variants",
        where: variantWhere,
        required: Boolean(variantWhere),
      },
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug", "parent_id"],
      },
    ],
    order,
    limit,
    offset,
    distinct: true,
  });
};

export const countProductsWithRelations = async ({ where, variantWhere }) => {
  // When variant filters are applied, we need to count products that have at least one matching variant
  if (variantWhere && Object.keys(variantWhere).length > 0) {
    // Use a separate query to count distinct products with matching variants
    const { count } = await Product.findAndCountAll({
      where,
      include: [
        {
          model: ProductVariant,
          as: "variants",
          where: variantWhere,
          required: true, // INNER JOIN - only products with matching variants
          attributes: [], // Don't select variant attributes
        },
      ],
      distinct: true,
      attributes: ['id'], // Only select product ID for counting
    });
    return count;
  }

  // No variant filters - simple count
  return Product.count({
    where,
    distinct: true,
  });
};

export const buildBasePriceSubquery = () =>
  literal(
    "base_price"
  );

export const defaultProductOrder = [["created_at", "DESC"]];
