import nodemailer from "nodemailer";
import { loadEnv } from "../config/env.js";
import { EMAIL_SENDER } from "../config/constants.js";

const env = loadEnv();

// Cấu hình Transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
    },
});

/**
 * Gửi email thông báo trạng thái đơn hàng
 */
export const sendOrderStatusEmail = async (to, orderId, newStatus, orderDetails = null) => {
    if (!to) return;

    const subject = `Cập nhật trạng thái đơn hàng #${orderId}`;
    let statusText = "";
    let message = "";
    let statusColor = "";

    switch (newStatus) {
        case 'pending':
            statusText = "ĐÃ NHẬN ĐƠN HÀNG";
            message = "Cảm ơn bạn đã đặt hàng! Chúng tôi đã nhận được đơn hàng của bạn và sẽ xác nhận sớm nhất.";
            statusColor = "#ffc107";
            break;
        case 'confirmed':
            statusText = "ĐÃ ĐƯỢC XÁC NHẬN";
            message = "Chúng tôi đang chuẩn bị hàng để giao cho bạn. Đơn hàng của bạn sẽ được gửi trong thời gian sớm nhất.";
            statusColor = "#28a745";
            break;
        case 'shipping':
            statusText = "ĐANG ĐƯỢC GIAO";
            message = "Đơn hàng đang được giao đến địa chỉ của bạn. Vui lòng chú ý điện thoại để nhận hàng.";
            statusColor = "#007bff";
            break;
        case 'paided':
            statusText = "THANH TOÁN THÀNH CÔNG";
            message = "Chúng tôi đã nhận được thanh toán. Đơn hàng sẽ sớm được xử lý.";
            statusColor = "#17a2b8";
            break;
        case 'completed':
            statusText = "ĐÃ HOÀN THÀNH";
            message = "Cảm ơn bạn đã mua sắm tại cửa hàng! Hy vọng bạn sẽ hài lòng với sản phẩm.";
            statusColor = "#28a745";
            break;
        case 'canceled':
            statusText = "ĐÃ BỊ HỦY";
            message = "Rất tiếc đơn hàng của bạn đã bị hủy. Vui lòng liên hệ nếu có nhầm lẫn hoặc cần hỗ trợ.";
            statusColor = "#dc3545";
            break;
        default:
            statusText = newStatus.toUpperCase();
            statusColor = "#6c757d";
    }

    // HTML email template
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .status-box { background: ${statusColor}; color: white; padding: 15px; text-align: center; border-radius: 5px; margin: 20px 0; font-size: 18px; font-weight: bold; }
                .order-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
                .order-info h3 { margin-top: 0; color: #667eea; }
                .footer { text-align: center; margin-top: 30px; color: #777; font-size: 14px; }
                .btn { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🛍️ Shop Quần Áo</h1>
                </div>
                <div class="content">
                    <h2>Cập nhật đơn hàng</h2>
                    <p>Xin chào,</p>
                    <p>Đơn hàng <strong>#${orderId}</strong> của bạn có trạng thái mới:</p>

                    <div class="status-box">
                        ✅ ${statusText}
                    </div>

                    <p>${message}</p>

                    ${orderDetails ? `
                    <div class="order-info">
                        <h3>📦 Chi tiết đơn hàng</h3>
                        <p><strong>Tổng tiền:</strong> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(orderDetails.total_amount)}</p>
                        ${orderDetails.notes ? `<p><strong>Ghi chú:</strong> ${orderDetails.notes}</p>` : ''}
                    </div>
                    ` : ''}

                    <div style="text-align: center;">
                        <a href="${env.FRONTEND_URL || 'http://localhost:5173'}/orders/${orderId}" class="btn">Xem chi tiết đơn hàng</a>
                    </div>

                    <div class="footer">
                        <p>Cần hỗ trợ? Liên hệ với chúng tôi</p>
                        <p>Email: ${env.EMAIL_USER}</p>
                        <p>© ${new Date().getFullYear()} Shop Quần Áo. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    // Plain text version for email clients that don't support HTML
    let orderInfoText = "";
    if (orderDetails) {
        const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(orderDetails.total_amount);
        orderInfoText = `\nTổng tiền: ${formattedAmount}`;
        if (orderDetails.notes) {
            orderInfoText += `\nGhi chú: ${orderDetails.notes}`;
        }
    }

    const text = `Xin chào,

Đơn hàng #${orderId} của bạn hiện tại: ${statusText}.

${message}
${orderInfoText}

Xem chi tiết đơn hàng tại: ${env.FRONTEND_URL || 'http://localhost:5173'}/orders/${orderId}

Trân trọng,
Shop Quần Áo`;

    try {
        await transporter.sendMail({
            from: EMAIL_SENDER,
            to,
            subject,
            text,
            html,
        });
        console.log(`✅ Email sent to ${to} for order #${orderId} - status: ${newStatus}`);
    } catch (error) {
        console.error("❌ Lỗi gửi email:", error);
    }
};

/**
 * Gửi email xác thực đăng ký tài khoản
 */
export const sendVerificationEmail = async (to, token, userName = "Bạn") => {
    if (!to) return;

    const verificationUrl = `${env.FRONTEND_URL || 'http://localhost:5173'}/verify-email?token=${token}`;

    const subject = "Xác thực email đăng ký tài khoản";

    // HTML email template
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .verification-box { background: white; padding: 30px; border-radius: 5px; margin: 20px 0; text-align: center; }
                .btn { display: inline-block; padding: 15px 40px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
                .footer { text-align: center; margin-top: 30px; color: #777; font-size: 14px; }
                .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🛍️ Shop Quần Áo</h1>
                </div>
                <div class="content">
                    <h2>Xác thực email đăng ký</h2>
                    <p>Xin chào <strong>${userName}</strong>,</p>
                    <p>Cảm ơn bạn đã đăng ký tài khoản tại Shop Quần Áo!</p>
                    
                    <div class="verification-box">
                        <p>Vui lòng click vào nút bên dưới để xác thực email của bạn:</p>
                        <a href="${verificationUrl}" class="btn">Xác thực email</a>
                    </div>

                    <div class="warning">
                        <p><strong>⚠️ Lưu ý:</strong></p>
                        <p>Link xác thực sẽ hết hạn sau 48 giờ. Nếu bạn không click vào link, bạn sẽ không thể đăng nhập vào tài khoản.</p>
                    </div>

                    <p>Nếu nút không hoạt động, bạn có thể copy và paste link sau vào trình duyệt:</p>
                    <p style="word-break: break-all; color: #667eea;">${verificationUrl}</p>

                    <div class="footer">
                        <p>Nếu bạn không đăng ký tài khoản này, vui lòng bỏ qua email này.</p>
                        <p>Cần hỗ trợ? Liên hệ với chúng tôi</p>
                        <p>Email: ${env.EMAIL_USER}</p>
                        <p>© ${new Date().getFullYear()} Shop Quần Áo. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    // Plain text version
    const text = `Xin chào ${userName},

Cảm ơn bạn đã đăng ký tài khoản tại Shop Quần Áo!

Vui lòng click vào link sau để xác thực email của bạn:
${verificationUrl}

Link xác thực sẽ hết hạn sau 48 giờ.

Nếu bạn không đăng ký tài khoản này, vui lòng bỏ qua email này.

Trân trọng,
Shop Quần Áo`;

    try {
        await transporter.sendMail({
            from: EMAIL_SENDER,
            to,
            subject,
            text,
            html,
        });
        console.log(`✅ Verification email sent to ${to}`);
    } catch (error) {
        console.error("❌ Lỗi gửi email xác thực:", error);
        throw error;
    }
};