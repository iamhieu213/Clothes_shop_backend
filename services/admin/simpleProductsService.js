import { Product, Category, ProductVariant } from "../../models/index.js";
import { Op } from "sequelize";
import { collectDescendantCategoryIds } from "../../repositories/categoryRepository.js";

export const getAllProductsSimple = async (
  page = 1,
  limit = 10,
  search = "",
  categoryId = null,
  status = null
) => {
  try {
    const whereClause = {};

    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { brand: { [Op.iLike]: `%${search}%` } },
      ];
    }

    if (categoryId) {
      const categoryIds = await collectDescendantCategoryIds(categoryId);
      if (categoryIds && categoryIds.length > 0) {
        whereClause.category_id = { [Op.in]: categoryIds };
      } else {
        whereClause.category_id = categoryId;
      }
    }

    if (status) {
      whereClause.status = status;
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { count, rows } = await Product.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        },
        {
          model: ProductVariant,
          as: 'variants',
          attributes: ['id', 'color', 'size', 'sku', 'stock_quantity', 'image_url']
        }
      ],
      order: [['created_at', 'DESC']],
      limit: parseInt(limit),
      offset,
      distinct: true
    });

    return {
      products: rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    };
  } catch (error) {
    console.error('Error in getAllProductsSimple:', error);
    throw error;
  }
};