import { Category, sequelize } from "../models/index.js";
import { slugify } from "../utils/slug.js";

const generateUniqueSlug = async (name, transaction) => {
  const base = slugify(name);
  if (!base) return null;

  let slug = base;
  let counter = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await Category.findOne({
      where: { slug },
      transaction,
    });
    if (!existing) break;
    slug = `${base}-${counter++}`;
  }

  return slug;
};

export const getAllCategories = async () => {
  const categories = await Category.findAll({
    order: [
      ["level", "ASC"],
      ["sort_order", "ASC"],
      ["id", "ASC"],
    ],
  });
  return categories.map((category) => category.get({ plain: true }));
};

export const getCategoryBySlug = async (slug) => {
  const category = await Category.findOne({ where: { slug } });
  return category ? category.get({ plain: true }) : null;
};

export const createCategory = async (payload, transaction) => {
  const { name, slug, ...rest } = payload;

  // Auto-generate slug from name if not provided
  const categorySlug = slug || (name ? await generateUniqueSlug(name, transaction) : null);

  const created = await Category.create(
    {
      ...rest,
      name,
      slug: categorySlug,
    },
    { transaction }
  );
  return created.get({ plain: true });
};

export const updateCategory = async (id, payload) => {
  const category = await Category.findByPk(id);
  if (!category) return null;

  const { name, slug, ...rest } = payload;

  // If slug is provided but name changed, check if we need to update slug
  let finalSlug = slug;
  if (!slug && name && name !== category.name) {
    // Auto-generate new slug from new name if not explicitly provided
    finalSlug = await generateUniqueSlug(name);
  } else if (!slug) {
    // Keep existing slug if neither slug nor name changed
    finalSlug = category.slug;
  }

  const updated = await category.update({
    ...rest,
    name: name || category.name,
    slug: finalSlug,
  });
  return updated.get({ plain: true });
};

export const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return false;
  await category.destroy();
  return true;
};

export const ensureCategory = async (
  { categoryId, name, slug, parentId, fallbackName },
  transaction
) => {
  // If category ID is provided, return it directly
  if (categoryId) {
    return categoryId;
  }

  // Try to find existing category by slug or name
  if (slug || name) {
    const existing = await Category.findOne({
      where: slug ? { slug } : { name },
      transaction,
    });
    if (existing) {
      return existing.id;
    }
  }

  // Create new category if name is provided
  const categoryName = name || fallbackName;
  if (categoryName) {
    const newCategory = await Category.create(
      {
        name: categoryName,
        slug: slug || categoryName.toLowerCase().replace(/\s+/g, "-"),
        parent_id: parentId || null,
      },
      { transaction }
    );
    return newCategory.id;
  }

  // Return null if no category information provided
  return null;
};

export const findCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category ? category.get({ plain: true }) : null;
};

export const findCategoryBySlug = async (slug) => {
  return getCategoryBySlug(slug);
};

export const findCategoryByName = async (name) => {
  const category = await Category.findOne({ where: { name } });
  return category ? category.get({ plain: true }) : null;
};

export const collectDescendantCategoryIds = async (categoryId) => {
  const [rows] = await sequelize.query(
    `
    WITH RECURSIVE category_tree AS (
      SELECT id, parent_id FROM categories WHERE id = :categoryId
      UNION ALL
      SELECT c.id, c.parent_id
      FROM categories c
      INNER JOIN category_tree ct ON ct.id = c.parent_id
    )
    SELECT id FROM category_tree;
    `,
    { replacements: { categoryId } }
  );

  return rows.map((row) => row.id);
};
