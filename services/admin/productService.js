import { sequelize, Product, Category } from "../../models/index.js";
import { Op } from "sequelize";
import { resolveCategoryId } from "./product/categoryService.js";
import {
  uploadProductImages,
  mergeProductImages,
} from "./product/imageService.js";
import { createVariantsWithImages, upsertVariants } from "./product/variantService.js";
import {
  createProductRecord,
  updateProductRecord,
  findProductWithRelations,
  deleteProductRecord,
  listProductsWithRelations,
  defaultProductOrder,
} from "../../repositories/productRepository.js";

const normalizeVariants = (variants) => {
  if (!variants) return [];
  if (typeof variants === "string") return JSON.parse(variants);
  return variants;
};

const stripCategoryId = (product) => {
  const data = product.toJSON();
  delete data.categoryId;
  return data;
};

export const createProductService = async (data, files) => {
  const transaction = await sequelize.transaction();

  try {
    const imageUrls = await uploadProductImages(files);
    const categoryId = await resolveCategoryId(data, transaction);

    const product = await createProductRecord(
      {
        name: data.name,
        description: data.description,
        brand: data.brand,
        base_price: data.base_price,
        category_id: categoryId,
        status: data.status || "active",
        images: imageUrls,
        collection: data.collection || null,
        sale_price: data.sale_price || null,
        is_new: data.is_new ?? false,
        tags: data.tags || [],
      },
      transaction
    );

    await transaction.commit();
    return stripCategoryId(product);
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const createVariantService = async (productId, variants, files) => {
  const id = parseInt(productId, 10);
  if (!id) throw new Error("Product ID is required");

  const transaction = await sequelize.transaction();

  try {
    const createdVariants = await createVariantsWithImages(
      id,
      variants,
      files,
      transaction
    );
    await transaction.commit();
    return createdVariants;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const deleteVariantService = async (productId, variantId) => {
  const productIdNum = parseInt(productId, 10);
  const variantIdNum = parseInt(variantId, 10);
  
  if (!productIdNum) throw new Error("Product ID is required");
  if (!variantIdNum) throw new Error("Variant ID is required");

  const transaction = await sequelize.transaction();

  try {
    const { deleteVariantRecord } = await import("./product/variantService.js");
    const deletedVariant = await deleteVariantRecord(productIdNum, variantIdNum, transaction);
    await transaction.commit();
    return deletedVariant;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const deleteProductService = async (productId) => {
  const id = parseInt(productId, 10);
  if (!id) {
    throw new Error("Product ID is required");
  }

  const product = await findProductWithRelations(id);
  if (!product) {
    throw new Error("Product not found");
  }

  const transaction = await sequelize.transaction();
  try {
    const payload = product.toJSON();
    await deleteProductRecord(product, transaction);
    await transaction.commit();
    return {
      id: payload.id,
      name: payload.name,
      message: "Product deleted successfully",
    };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const updateProductService = async (productId, data = {}, files) => {
  const id = parseInt(productId, 10);
  if (!id) {
    throw new Error("Product ID is required");
  }

  const product = await findProductWithRelations(id);
  if (!product) {
    throw new Error("Product not found");
  }

  const transaction = await sequelize.transaction();

  try {
    const categoryId = await resolveCategoryId(
      {
        ...data,
        category_id: data.category_id ?? product.category_id,
      },
      transaction
    );

    // Upload new image files to get URLs
    const newImageUrls = await uploadProductImages(files);

    // data.images contains: [existingUrl1, existingUrl2, ..., newFile1, newFile2, ...]
    // We need to separate existing URLs from new Files and upload the Files
    let finalImages;

    if (data.images !== undefined) {
      // Separate existing URLs (strings) from Files
      const existingUrls = [];
      const newFiles = [];

      if (Array.isArray(data.images)) {
        data.images.forEach(item => {
          if (typeof item === 'string') {
            existingUrls.push(item);
          } else if (item instanceof File || item?.name) {
            newFiles.push(item);
          }
        });
      }

      // Upload new files if any
      const uploadedUrls = newFiles.length > 0 ? await uploadProductImages(newFiles) : [];

      // Combine: existing URLs + uploaded URLs
      finalImages = [...existingUrls, ...uploadedUrls, ...newImageUrls];
    } else {
      // No images array provided, just append new uploads to existing
      finalImages = mergeProductImages(product.images, newImageUrls);
    }

    const updatedProduct = await updateProductRecord(
      product,
      {
        name: data.name,
        description: data.description,
        brand: data.brand,
        base_price: data.base_price,
        status: data.status,
        category_id: categoryId,
        images: finalImages,
        collection: data.collection,
        sale_price: data.sale_price,
        is_new: data.is_new,
        tags: data.tags,
      },
      transaction
    );

    const variants = normalizeVariants(data.variants);
    if (variants.length > 0) {
      await upsertVariants(id, variants, [], transaction);
    }

    await updatedProduct.reload({
      include: ["variants", "category"],
      transaction,
    });

    await transaction.commit();
    return stripCategoryId(updatedProduct);
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const getAllProductsService = async (page = 1, limit = 10, search = "") => {
  const whereClause = {};

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.iLike]: `%${search}%` } },
      { brand: { [Op.iLike]: `%${search}%` } },
    ];
  }

  const offset = (parseInt(page) - 1) * parseInt(limit);

  const { count, rows } = await Product.findAndCountAll({
    where: whereClause,
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    ],
    order: defaultProductOrder,
    limit: parseInt(limit),
    offset
  });

  return {
    products: rows.map(stripCategoryId),
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: count,
      totalPages: Math.ceil(count / limit)
    }
  };
};

export const searchProductsService = async (searchTerm) => {
  const whereClause = {};

  if (searchTerm) {
    whereClause[Op.or] = [
      { name: { [Op.iLike]: `%${searchTerm}%` } },
      { brand: { [Op.iLike]: `%${searchTerm}%` } },
    ];
  }

  const products = await listProductsWithRelations({
    where: whereClause,
    order: defaultProductOrder,
  });

  return products.map(stripCategoryId);
};

export const getUniqueBrandsService = async () => {
  try {
    const brands = await Product.findAll({
      attributes: [[sequelize.fn('DISTINCT', sequelize.col('brand')), 'brand']],
      where: {
        brand: {
          [Op.ne]: null,
          [Op.ne]: ''
        }
      },
      order: [['brand', 'ASC']],
      raw: true
    });

    return brands.map(item => item.brand).filter(brand => brand);
  } catch (error) {
    throw new Error(`Failed to fetch brands: ${error.message}`);
  }
};

