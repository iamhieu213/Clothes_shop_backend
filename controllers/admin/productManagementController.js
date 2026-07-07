import {
    createProductService,
    updateProductService,
    deleteProductService
} from "../../services/admin/productService.js";
import { getAllProductsSimple } from "../../services/admin/simpleProductsService.js";
import { findProductWithRelations, findProductBySlugWithRelations } from "../../repositories/productRepository.js";
import { sendSuccess, sendError } from "../controllerUtils.js";

export const listProductsController = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = "", category_id = null, status = null } = req.query;
        
        const result = await getAllProductsSimple(
            parseInt(page),
            parseInt(limit),
            search,
            category_id,
            status
        );

        return sendSuccess(res, {
            items: result.products,
            pagination: result.pagination,
            message: "Products fetched successfully"
        });
    } catch (error) {
        return sendError(res, {
            message: "Failed to fetch products",
            error
        });
    }
};

export const getProductDetailController = async (req, res) => {
    try {
        const { id } = req.params;
        
        let product;
        // Try to find by ID first
        const possibleId = parseInt(id, 10);
        if (!isNaN(possibleId)) {
            product = await findProductWithRelations(possibleId);
        }
        
        // If not found by ID, try to find by slug
        if (!product) {
            product = await findProductBySlugWithRelations(id);
        }
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            data: product,
            message: "Product detail fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch product detail"
        });
    }
};

export const createProductController = async (req, res) => {
    try {
        const product = await createProductService(req.body, req.files);
        
        return res.status(201).json({
            success: true,
            data: product,
            message: "Product created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to create product"
        });
    }
};

export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await updateProductService(id, req.body, req.files);
        
        return sendSuccess(res, {
            data: product,
            message: "Product updated successfully"
        });
    } catch (error) {
        return sendError(res, {
            message: "Failed to update product",
            error
        });
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await deleteProductService(id);
        
        return res.status(200).json({
            success: true,
            data: result,
            message: "Product deactivated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to delete product"
        });
    }
};
