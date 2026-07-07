import { getRevenueStats, getTopProducts, getDashboardStats, getRecentOrders, getPerformanceStats } from "../../services/admin/statsService.js";
import { sendSuccess, sendError } from "../controllerUtils.js";

// Dashboard KPIs overview
export const getDashboardStatsController = async (req, res) => {
    try{
        const data = await getDashboardStats();
        
        return sendSuccess(res, {
            data,
            message: "Lấy thống kê dashboard thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}

// Revenue data for charts (by day/month)
export const getRevenueController = async (req, res) => {
    try{
        const { from, to, groupBy } = req.query;

        const data = await getRevenueStats({ from, to, groupBy });
        
        return sendSuccess(res, {
            data,
            message: "Lấy thống kê doanh thu thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}

// Latest orders
export const getRecentOrdersController = async (req, res) => {
    try{
        const { limit } = req.query;
        const data = await getRecentOrders(Number(limit) || 10);

        return sendSuccess(res, {
            data,
            message: "Lấy đơn hàng gần đây thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}

// Top products/best sellers
export const getBestSellersController = async (req, res) => {
    try{
        const { from, to, limit } = req.query;

        const data = await getTopProducts({ from, to, limit: Number(limit) || 10});

        return sendSuccess(res, {
            data,
            message: "Lấy top sản phẩm bán chạy thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}

// Legacy: revenue stats (startDate/endDate)
export const getRevenueStatsController = async (req, res) => {
    try{
        const { from, to, startDate, endDate } = req.query;
        
        // Use from/to if provided (new frontend), fallback to startDate/endDate (legacy)
        const dateRange = {
            from: from || startDate,
            to: to || endDate
        };

        const data = await getPerformanceStats(dateRange);

        return sendSuccess(res, {
            data,
            message: "Lấy thống kê doanh thu thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}

// Legacy: top products
export const getTopProductsController = async (req, res) => {
    try{
        const { limit } = req.query;
        const data = await getTopProducts({ limit: Number(limit) || 10 });

        return sendSuccess(res, {
            data,
            message: "Lấy top sản phẩm thành công"
        });
    }catch(error){
        return sendError(res, {
            message: error.message
        });
    }
}
