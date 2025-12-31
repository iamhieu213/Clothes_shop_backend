import { ensureCategory } from "../../../repositories/categoryRepository.js";

export const resolveCategoryId = async (payload, transaction) => {
  const categoryInput = payload.category || {};

  return ensureCategory(
    {
      categoryId: categoryInput.id || payload.category_id,
      name: categoryInput.name || payload.category_name,
      slug: categoryInput.slug || payload.category_slug,
      parentId: categoryInput.parent_id ?? payload.category_parent_id,
      fallbackName: payload.brand,
    },
    transaction
  );
};
