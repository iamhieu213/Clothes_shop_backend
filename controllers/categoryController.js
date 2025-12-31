import {
  createCategoryEntry,
  deleteCategoryEntry,
  fetchCategoryTree,
  fetchCategoryWithChildren,
  updateCategoryEntry,
} from "../services/categoryService.js";
import { sendError, sendSuccess } from "./controllerUtils.js";

export const getCategories = async (req, res) => {
  try {
    const data = await fetchCategoryTree();
    return sendSuccess(res, { data });
  } catch (error) {
    return sendError(res, error);
  }
};

export const getCategoryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await fetchCategoryWithChildren(slug);

    if (!category) {
      return sendError(res, "Category not found", 404);
    }

    return sendSuccess(res, { data: category });
  } catch (error) {
    return sendError(res, error);
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, slug, parent_id, description, image_url } = req.body;

    // Validate: name is required
    if (!name || name.trim() === "") {
      return sendError(res, "Category name is required", 400);
    }

    const payload = {
      name: name.trim(),
      slug: slug ? slug.trim() : undefined,
      parent_id: parent_id || null,
      description: description || null,
      image_url: image_url || null,
    };

    const created = await createCategoryEntry(payload);
    return sendSuccess(res, { status: 201, data: created });
  } catch (error) {
    // Handle unique constraint violation for slug
    if (error.name === "SequelizeUniqueConstraintError") {
      return sendError(res, "A category with this slug already exists", 409);
    }
    return sendError(res, error);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, parent_id, description, image_url } = req.body;

    const payload = {
      ...(name !== undefined && { name: name.trim() }),
      ...(slug !== undefined && { slug: slug.trim() }),
      ...(parent_id !== undefined && { parent_id: parent_id || null }),
      ...(description !== undefined && { description: description || null }),
      ...(image_url !== undefined && { image_url: image_url || null }),
    };

    const updated = await updateCategoryEntry(id, payload);

    if (!updated) {
      return sendError(res, "Category not found", 404);
    }

    return sendSuccess(res, { data: updated });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return sendError(res, "A category with this slug already exists", 409);
    }
    return sendError(res, error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteCategoryEntry(id);

    if (!deleted) {
      return sendError(res, "Category not found", 404);
    }

    return sendSuccess(res, { data: true });
  } catch (error) {
    return sendError(res, error);
  }
};
