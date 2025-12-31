import { createProductService, createVariantService, deleteVariantService, deleteProductService, updateProductService, getAllProductsService, searchProductsService, getUniqueBrandsService } from "../../services/admin/productService.js";

export const createProductController = async (req, res) => {
    try{
        const newProduct = await createProductService(req.body, req.files);
        return res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product created successfully",
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Create product failed",
            error: error.message
        })      
    }
}

export const createVariantController = async (req, res) => {
    try{
        const { productId } = req.params;
        const { variants } = req.body;
        
        console.log('Create variant request - productId:', productId);
        console.log('Create variant request - variants:', variants);
        console.log('Create variant request - files:', req.files);
        
        if(!productId) {
            return res.status(400).json({ 
                success: false,
                message: "Product ID is required" 
            });
        }
        
        if(!variants) {
            return res.status(400).json({ 
                success: false,
                message: "Variants are required" 
            });
        }

        let variantsArray;
        try {
            variantsArray = typeof variants === "string" ? JSON.parse(variants) : variants;
        } catch (parseError) {
            console.error('Error parsing variants:', parseError);
            return res.status(400).json({
                success: false,
                message: "Invalid variants format",
                error: parseError.message
            });
        }
        
        if(!Array.isArray(variantsArray) || variantsArray.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Variants must be a non-empty array"
            });
        }

        const createdVariants = await createVariantService(productId, variantsArray, req.files || []);

        return res.status(201).json({
            success: true,
            data: createdVariants,
            message: "Variants created successfully",
        })
    }catch(error){
        console.error('Error in createVariantController:', error);
        return res.status(500).json({
            success: false,
            message: "Create variant failed",
            error: error.message
        })
    }
}

export const deleteVariantController = async (req, res) => {
    try {
        const { productId, variantId } = req.params;
        
        if(!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }
        
        if(!variantId) {
            return res.status(400).json({
                success: false,
                message: "Variant ID is required"
            });
        }

        const deletedVariant = await deleteVariantService(productId, variantId);

        return res.status(200).json({
            success: true,
            data: deletedVariant,
            message: "Variant deleted successfully",
        });
    } catch (error) {
        if (error.message === "Variant not found or does not belong to this product") {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
        
        return res.status(500).json({
            success: false,
            message: "Delete variant failed",
            error: error.message
        });
    }
}

//xoa san pham
export const deleteProductController = async(req,res) => {
     try{
         const { productId } = req.params;
         
         // Validate productId
         if (!productId) {
             return res.status(400).json({
                 success: false,
                 message: "Product ID is required"
             });
         }

         const result = await deleteProductService(productId);
         
         return res.status(200).json({
            success: true,
            data: result,
            message: result.message || "Product deleted successfully",
         });
     }catch(error){
        // Xử lý lỗi "Product not found" với status 404
        if (error.message === "Product not found") {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }

        // Xử lý lỗi validation với status 400
        if (error.message === "Product ID is required" || error.message === "Invalid product ID") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        // Lỗi khác với status 500
        return res.status(500).json({
            success: false,
            message: "Delete product failed",
            error: error.message
        });
     }
}

//Update san pham
export const updateProductController = async (req, res) => {
    try {
        const { productId } = req.params;
        
        // Validate productId
        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        const updatedProduct = await updateProductService(productId, req.body, req.files);
        
        return res.status(200).json({
            success: true,
            data: updatedProduct,
            message: "Product updated successfully",
        });
    } catch (error) {
        // Xử lý lỗi "Product not found" với status 404
        if (error.message === "Product not found") {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }

        // Xử lý lỗi validation với status 400
        if (error.message === "Product ID is required" || error.message === "Invalid product ID") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        // Lỗi khác với status 500
        return res.status(500).json({
            success: false,
            message: "Update product failed",
            error: error.message
        });
    }
}

//Hien thi tat ca san pham
export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProductsService();
        
        return res.status(200).json({
            success: true,
            data: products,
            message: "Get all products successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Get all products failed",
            error: error.message
        });
    }
}

//Tim kiem san pham
export const searchProductsController = async (req, res) => {
    try {
        const { q, search } = req.query; // Hỗ trợ cả 'q' và 'search' parameter
        const searchTerm = q || search || '';

        const products = await searchProductsService(searchTerm);

        return res.status(200).json({
            success: true,
            data: products,
            message: "Search products successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Search products failed",
            error: error.message
        });
    }
}

//Lay danh sach brand
export const getBrandsController = async (req, res) => {
    try {
        const brands = await getUniqueBrandsService();

        return res.status(200).json({
            success: true,
            data: brands,
            message: "Get brands successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Get brands failed",
            error: error.message
        });
    }
}
