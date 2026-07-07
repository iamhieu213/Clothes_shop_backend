import { User } from "../../models/index.js";
import { Op } from "sequelize";

export const listUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = "", role } = req.query;
        
        const offset = (parseInt(page) - 1) * parseInt(limit);
        
        const where = {};
        
        if (search) {
            where[Op.or] = [
                { email: { [Op.iLike]: `%${search}%` } },
                { name: { [Op.iLike]: `%${search}%` } }
            ];
        }
        
        if (role && role !== 'all') {
            where.role = { [Op.iLike]: role };
        }
        
        const { count, rows } = await User.findAndCountAll({
            where,
            limit: parseInt(limit),
            offset,
            order: [['created_at', 'DESC']],
            attributes: {
                exclude: ['password', 'refresh_token']
            }
        });
        
        const totalPages = Math.ceil(count / limit);
        
        return res.status(200).json({
            success: true,
            data: {
                items: rows,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: count,
                    totalPages
                }
            },
            message: "Users fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch users"
        });
    }
};

export const getUserDetail = async (req, res) => {
    try {
        const { id } = req.params;
        
        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password', 'refresh_token']
            }
        });
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            data: user,
            message: "User detail fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch user detail"
        });
    }
};

export const updateUser = async (req, res, additionalFields = {}) => {
    try {
        const { id } = req.params;

        // Merge request body with additional fields for the new endpoints
        const updateData = { ...req.body, ...additionalFields };
        const { role, is_locked } = updateData;
        
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        // Update role if provided
        if (role !== undefined) {
            user.role = role;
        }
        
        // Update lock status if provided
        if (is_locked !== undefined) {
            user.is_locked = Boolean(is_locked);
        }
        
        await user.save();
        
        return res.status(200).json({
            success: true,
            data: {
                id: user.id,
                role: user.role,
                is_locked: user.is_locked
            },
            message: "User updated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to update user"
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Soft delete by setting is_locked to true instead of hard delete
        const result = await User.update(
            { is_locked: true }, 
            { where: { id } }
        );
        
        if (result[0] === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "User deactivated successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to deactivate user"
        });
    }
};