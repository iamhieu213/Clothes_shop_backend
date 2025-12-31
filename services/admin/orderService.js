import { Op, fn, col, literal } from "sequelize";
import { Order, OrderItem, Product, User, ShippingAddress } from "../../models/index.js";

const normalizeDate = ({ from, to }) => {
    const now = new Date();
    const toDate = to ? new Date(to) : now;
    const fromDate = from ? new Date(from) : new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    return { fromDate, toDate };
};

export const listOrders = async ({
    page = 1,
    limit = 10,
    status = null,
    startDate = null,
    endDate = null,
    customer = null,
    sortBy = 'created_at',
    sortDir = 'DESC'
}) => {
    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Simple where clause for now
    const whereClause = {};
    if (status) {
        whereClause.status = status;
    }

    try {
        const { count, rows } = await Order.findAndCountAll({
            where: whereClause,
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name', 'email'],
                    required: false
                }
            ],
            order: [[sortBy, sortDir.toUpperCase()]],
            limit: parseInt(limit),
            offset
        });

        const totalPages = Math.ceil(count / limit);

        // Transform orders to match frontend expected format
        const transformedOrders = rows.map(order => ({
            id: order.id,
            code: order.order_number,
            status: order.status,
            customer_id: order.user_id,
            customer_name: order.user?.name || null,
            email: order.user?.email || null,
            total_amount: order.total_amount,
            created_at: order.created_at,
            updated_at: order.updated_at,
            user: order.user ? {
                id: order.user.id,
                name: order.user.name,
                email: order.user.email
            } : null,
            items: [] // Will be populated when fetching individual order
        }));

        return {
            items: transformedOrders,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: count,
                totalPages
            }
        };
    } catch (error) {
        console.error('Error in listOrders:', error);
        throw error;
    }
};

export const getOrderDetail = async (orderId) => {
    const order = await Order.findByPk(orderId, {
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            },
            {
                model: OrderItem,
                as: 'order_items',
                attributes: ['id', 'product_id', 'quantity', 'unit_price', 'line_total'],
                include: [
                    {
                        model: Product,
                        as: 'product',
                        attributes: ['id', 'name', 'slug']
                    }
                ]
            },
            {
                model: ShippingAddress,
                as: 'shipping_address',
                attributes: ['id', 'name', 'phone', 'address', 'city', 'district']
            }
        ]
    });

    if (!order) {
        throw new Error("Order not found");
    }

    // Transform order to match frontend expected format
    const transformedOrder = {
        id: order.id,
        code: order.order_number,
        status: order.status,
        customer_id: order.user_id,
        customer_name: order.user?.name || null,
        email: order.user?.email || null,
        phone: order.shipping_address?.phone || null,
        address: order.shipping_address ?
            `${order.shipping_address.address}, ${order.shipping_address.city}, ${order.shipping_address.district}` : null,
        payment_method: null, // Add when Payment model is integrated
        total_amount: order.total_amount,
        subtotal_amount: order.subtotal_amount,
        discount_amount: order.discount_amount,
        notes: order.notes,
        created_at: order.created_at,
        updated_at: order.updated_at,
        user: order.user ? {
            id: order.user.id,
            name: order.user.name,
            email: order.user.email
        } : null,
        order_items: order.order_items?.map(item => ({
            id: item.id,
            order_id: item.order_id,
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            line_total: item.line_total,
            product_name: item.product?.name || null,
            product: item.product ? {
                id: item.product.id,
                name: item.product.name,
                slug: item.product.slug
            } : null,
            variant_name: null // Add variant when ProductVariant is integrated
        })) || []
    };

    return transformedOrder;
};

const validStatusTransitions = {
    pending: ['confirmed', 'canceled'],
    confirmed: ['shipping', 'canceled'],
    shipping: ['completed', 'canceled'],
    completed: [], // This is a terminal state
    canceled: [] // This is a terminal state
};

export const updateOrderStatus = async (orderId, newStatus) => {
    const order = await Order.findByPk(orderId, {
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }
        ]
    });

    if (!order) {
        throw new Error("Order not found");
    }

    const currentStatus = order.status;
    const allowedNewStatuses = validStatusTransitions[currentStatus] || [];

    if (!allowedNewStatuses.includes(newStatus)) {
        throw new Error(`Cannot change order status from ${currentStatus} to ${newStatus}`);
    }

    order.status = newStatus;
    await order.save();

    // Return transformed order to match frontend format
    return {
        id: order.id,
        code: order.order_number,
        status: order.status,
        customer_id: order.user_id,
        customer_name: order.user?.name || null,
        email: order.user?.email || null,
        total_amount: order.total_amount,
        created_at: order.created_at,
        updated_at: order.updated_at,
        user: order.user ? {
            id: order.user.id,
            name: order.user.name,
            email: order.user.email
        } : null
    };
};

export const processRefund = async (orderId, refundData) => {
    const order = await Order.findByPk(orderId, {
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }
        ]
    });

    if (!order) {
        throw new Error("Order not found");
    }

    // For now, just update status to 'refunded' and save refund data
    order.status = 'refunded';
    // In a real implementation, you would process the refund through payment gateway
    // and store refund details in a separate refunds table

    // For simplicity, we'll store refund data in notes field
    const refundNote = refundData.reason
        ? `Refund processed: ${refundData.reason}. Amount: ${refundData.amount}`
        : 'Refund processed';

    order.notes = refundNote;
    await order.save();

    // Return transformed order to match frontend format
    return {
        id: order.id,
        code: order.order_number,
        status: order.status,
        customer_id: order.user_id,
        customer_name: order.user?.name || null,
        email: order.user?.email || null,
        total_amount: order.total_amount,
        notes: order.notes,
        created_at: order.created_at,
        updated_at: order.updated_at,
        user: order.user ? {
            id: order.user.id,
            name: order.user.name,
            email: order.user.email
        } : null
    };
};