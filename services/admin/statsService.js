import { Op, fn, col, literal } from 'sequelize';
import { User, Product, Cart, CartItem, Order, OrderItem} from '../../models/index.js';

//default 30 ngay gan nhat
const normalizeDate = ({ from, to }) => {
    const now = new Date();

    const toDate = to ? new Date(to) : now;

    const fromDate = from ? new Date(from) : new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000 );

    return { fromDate, toDate };
}

//Doanh thu theo ngay thang
export const getRevenueStats = async ({ from, to, groupBy = 'day'}) => {
    const { fromDate, toDate } = normalizeDate({ from, to});

    //Lay danh sach order trong khoang, chi tinh paid/completed
    const orders = await Order.findAll({
        attributes: ["id", "total_amount", "created_at"],
        where: {
             status: {
                [Op.in]: ["paid", "completed"],
             },
             created_at: {
                [Op.gte]: fromDate,
                [Op.lte]: toDate,
             }
        },
        raw: true,
    });

    //Gom nhom theo ngay thang
    const buckets = {}; 
    for( const order of orders) {
        const d = new Date(order.created_at);
        let key;

        if( groupBy === 'month') {
            const y = d.getFullYear();
            const m = String(d.getMonth()+1).padStart(2, "0");
            key = `${y}-${m}`;
        }else{
            key = d.toISOString().slice(0,10);
        }

        if(!buckets[key]){
            buckets[key] = {
                period: key,
                revenue: 0,
                order_count: 0,
            };
        }
        buckets[key].revenue += Number(order.total_amount || 0);
        buckets[key].order_count += 1;
    }
    //Chuyen ve array & sort tang dan theo period
    const result = Object.values(buckets).sort((a,b) =>
          a.period.localeCompare(b.period)
    );
    return result;
}

//Hien thi top san pham ban chay

export const getTopProducts = async({ from, to , limit = 10}) => {
    const { fromDate, toDate} = normalizeDate({ from, to});
    
    const rows = await OrderItem.findAll({
        attributes: [
            "product_id",
            [fn("SUM", col("quantity")), "total_quantity"],
            //tinh doanh thu tren san pham
            [fn("SUM", literal("quantity * unit_price")), "total_revenue"],
        ],

        include: [
            {
                model: Product,
                as: 'product',
                attributes: ["id", "name", "slug"],
            },
            {
                model: Order,
                as: 'order',
                attributes: [],
                where: {
                    status: {
                        [Op.in]: ["paid", "completed"],
                    },
                    created_at: {
                        [Op.gte]: fromDate,
                        [Op.lte]: toDate,
                    },
                },
            },
        ],
        group: ["product_id", "product.id", "product.name", "product.slug"],
        order: [[literal("total_quantity"), "DESC"]],
        limit: Number(limit),
        raw: true,
        nest: true,
    });
    return rows.map(row => ({
        product_id: row.product_id,
        total_quantity: parseInt(row.total_quantity) || 0,
        total_revenue: parseFloat(row.total_revenue) || 0,
        product: row.product
    }));
}

// Dashboard KPIs overview
export const getDashboardStats = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Get counts for KPIs
    const [
        totalUsers,
        totalProducts,
        ordersToday,
        ordersThisMonth,
        revenueToday,
        revenueThisMonth,
        recentOrders
    ] = await Promise.all([
        User.count(),
        Product.count(),
        Order.count({
            where: {
                created_at: {
                    [Op.gte]: today,
                }
            }
        }),
        Order.count({
            where: {
                created_at: {
                    [Op.gte]: thisMonthStart,
                }
            }
        }),
        Order.sum('total_amount', {
            where: {
                status: {
                    [Op.in]: ["paid", "completed"],
                },
                created_at: {
                    [Op.gte]: today,
                }
            }
        }),
        Order.sum('total_amount', {
            where: {
                status: {
                    [Op.in]: ["paid", "completed"],
                },
                created_at: {
                    [Op.gte]: thisMonthStart,
                }
            }
        }),
        Order.findAll({
            where: {
                created_at: {
                    [Op.gte]: yesterday,
                }
            },
            include: [
                {
                    model: User,
                    attributes: ["id", "name", "email"],
                    as: "user"
                }
            ],
            order: [["created_at", "DESC"]],
            limit: 10
        })
    ]);

    return {
        users: {
            total: totalUsers || 0
        },
        products: {
            total: totalProducts || 0
        },
        orders: {
            today: ordersToday || 0,
            thisMonth: ordersThisMonth || 0
        },
        revenue: {
            today: parseFloat(revenueToday || 0),
            thisMonth: parseFloat(revenueThisMonth || 0)
        },
        recentOrders: recentOrders.map(order => {
            const orderData = order.toJSON ? order.toJSON() : order;
            return {
                id: orderData.id,
                total_amount: parseFloat(orderData.total_amount || 0),
                status: orderData.status,
                created_at: orderData.created_at,
                user: orderData.user ? {
                    id: orderData.user.id,
                    name: orderData.user.name,
                    email: orderData.user.email
                } : null
            };
        })
    };
}

// Get recent orders
export const getRecentOrders = async (limit = 10) => {
    const orders = await Order.findAll({
        where: {
            created_at: {
                [Op.gte]: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
            }
        },
        include: [
            {
                model: User,
                attributes: ["id", "name", "email"],
                as: "user"
            }
        ],
        order: [["created_at", "DESC"]],
        limit: Number(limit)
    });

    return orders.map(order => {
        const orderData = order.toJSON ? order.toJSON() : order;
        return {
            id: orderData.id,
            total_amount: parseFloat(orderData.total_amount || 0),
            status: orderData.status,
            created_at: orderData.created_at,
            user: orderData.user ? {
                id: orderData.user.id,
                name: orderData.user.name,
                email: orderData.user.email
            } : null
        };
    });
}

