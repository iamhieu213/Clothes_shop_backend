import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Load environment variables from backend/.env first
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "..", ".env") });

const { sequelize, Product } = await import("../models/index.js");

const PRODUCTS = [
    {
      "id": 1,
      "name": "Áo Sơ Mi Nam Kẻ Aristino Business Regular Fit 1LS0340S2",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Kẻ Aristino Business Regular Fit 1LS0340S2\nMã rút gọn: 1LS0340S2\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế: \nÁo sơ mi Aristino Buisiness thuộc dòng hàng cao cấp với phom Regular Fit suông, thoải mái nhưng vẫn vừa vặn với cơ thể.\nÁo được thiết kế mang đến phong cách thời thượng và đậm dấu ấn văn hóa với họa tiết kẻ kết hợp cùng hình ảnh Mặt Trời Huyền Thoại được thêu nhỏ tinh tế trên nền vải.\nChữ ký Aristino thêu nổi bật ở tay áo không chỉ là dấu ấn thương hiệu mà còn khẳng định phong thái doanh nhân lịch lãm.\nChất liệu:\n100% Cotton (Bông) thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc.\nMàu sắc: Đen kẻ sọc cam\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino Business",
      "base_price": 1700000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_7215.1_29579bdb1cb64380a36195537221125b.jpg",
        "https://cdn.hstatic.net/products/200000887901/1_70540c629f094a378b124afef11c2957.png",
        "https://cdn.hstatic.net/products/200000887901/img_7215_46ba75454dab4fe9a66dc57c39cb7d9e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7216_f74a0907757246299b87ef0e51f9b000.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7217_7b2e0385d6004e21bb0bfd5ac74a1eb5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7218_df27bd0a60a443e1b6fe11a784771954.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-ke-aristino-business-regular-fit-1ls0340s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:13.149Z",
      "updated_at": "2025-12-24T18:51:13.149Z"
    },
    {
      "id": 2,
      "name": "Áo Sơ Mi Nam Trắng Solid Bamboo Tay Dài Aristino Regular Fit ALS600EDP01",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Trắng Solid Bamboo Tay Dài Aristino Regular Fit ALS600EDP01\nMã sản phẩm: ALS600EDP01\nKiểu dáng: Dáng vừa / Regular Fit\nThiết kế:\nÁo sơ mi dài tay phom dáng Regular Fit, suông nhẹ nhưng vẫn vừa vặn, tôn dáng cho người mặc.\nThiết kế sơ mi trắng basic, mang đến diện mạo lịch lãm và chỉn chu cho các quý ông.\nDễ dàng kết hợp với nhiều trang phục khác nhau.\nChất liệu:\n48% Bamboo từ sợi tre thiên nhiên mang đến sự thoáng mát, thấm hút tốt và tạo cảm giác thoải mái.\n48% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ.\n4% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Trắng solid\nSize: 38, 39, 40, 41, 42, 43, 44\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 89500000,
      "sale_price": 805500,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/als600edp01___2__232be60b1ec249ae91f3ed22705617b2.jpg",
        "https://cdn.hstatic.net/products/200000887901/als600edp01___1__603b4d16ec4844ec94d9905cf585990f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6490_copy.1_1933e7b54d144c9b9b091ba083e21b5c_7928a0f74ebd411c9145cd8f9a7d6bb7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6490_copy_d015c2c3b9514db195abaac385e5c2f1_26190e469dae4203913fec64abeb5189.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6492_8f8dd709e6ad46f19c9b8d02907a52cb_c05dbbd7ef0a4b5d89cf2393e7587a66.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6493_copy_493519f8299a40f4878308220805c195_35e7849c671b401390ded50f4f9669df.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6494_b38b1f1985d24118961b0ceb9c3a51ec_e6f523eef33f4903adfb0fe0b22fc843.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-trang-solid-bamboo-tay-dai-aristino-regular-fit-als600edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:22.831Z",
      "updated_at": "2025-12-24T18:51:22.831Z"
    },
    {
      "id": 3,
      "name": "Áo Sơ Mi Nam Trắng Solid Aristino Regular Fit ALSR07S",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Trắng Solid Aristino Regular Fit ALSR07S\nMã sản phẩm: ALSR07S\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo sơ mi dài tay phom dáng Regular Fit, suông nhẹ nhưng vẫn vừa vặn, tôn dáng cho người mặc.\nThiết kế sơ mi trắng basic, mang đến diện mạo lịch lãm và chỉn chu cho các quý ông.\nDễ dàng kết hợp với nhiều trang phục khác nhau.\nChất liệu:\n45% Visco (Tre)\n29% Polyester\n18% Cool Jade (Polyester)\n8% Tencel (Visco)\nMàu sắc: Trắng solid\nSize: 38, 39, 40, 41, 42, 43, 44\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06670_cf15b8af7c4842929be8b23798fca01a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06665_6054fab407ba4dca91a694e965594759.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06672_b67c5bb35f6d4bda8975201762198777.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06676_ef72bee81b3f4979bf828a3abf7e2fb8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06661_83e3993a14f84688a9e0a0707a005eb2.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06675_34ef81e1f4fa451d878107268f3bc6c1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5546.1_bf196cdcd0ee4ce9915a906dd2b4a540.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5546_dfc1396fa23c4114ba3f1be8f1da6e1f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5548_45ef50b4c72643cdafc19c1a6f66908c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5549_04e6f59b49b3470bb24ebfa6216285ae.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-trang-solid-aristino-regular-fit-alsr07s",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:30.252Z",
      "updated_at": "2025-12-24T18:51:30.252Z"
    },
    {
      "id": 4,
      "name": "Áo Sơ Mi Nam Trắng Solid Aristino Slim Fit ALSR06S",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Trắng Solid Aristino Slim Fit ALSR06S\nMã sản phẩm: ALSR06S\nKiểu dáng: Dáng ôm/ Slim Fit\nThiết kế:\nDáng áo: Slim fit (ôm nhẹ theo cơ thể) giúp tôn dáng, tạo vẻ chỉn chu và hiện đại.\nCổ áo: Kiểu cổ đức truyền thống, giữ phom đứng, dễ kết hợp với cà vạt hoặc mặc đơn giản vẫn toát lên sự thanh lịch.\nTay áo: Dài tay, cổ tay bo nhẹ với hàng cúc tinh tế.\nChi tiết: Toàn bộ áo trơn không họa tiết, tập trung vào sự tinh giản và sang trọng – biểu tượng của sự chuyên nghiệp.\nThiết kế sơ mi trắng basic, mang đến diện mạo lịch lãm và chỉn chu cho các quý ông.\nDễ dàng kết hợp với nhiều trang phục khác nhau.\nChất liệu:\n45% Visco (Tre)\n29% Polyester\n18% Cool Jade (Polyester)\n8% Tencel (Visco)\nBề mặt mịn, sáng nhẹ, giúp người mặc luôn cảm thấy thoải mái và tự tin.\nMàu sắc: Trắng solid\nSize: 38, 39, 40, 41, 42, 43, 44\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06716_5d0e6d7f51e54488b33893a07d231ba5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06713_46cbc4e9628f4e1bab2ecf38cd43da65.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06714_b63dc45e45784c388107bc00e0085128.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06717_c2137c7b4a0e4bb58ece59140bf5d5fd.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06718_1479f299f33641d193edc02ccbb17567.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06704_1b78c89417d54e0fa76b52bf65b865af.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5541.1_2013f6e612974402ae819e4bfb33c69e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5541_1e4cc008f1d547bbb6d805a941756fba.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5542_b1b4808a1f8c478495216f880499ac73.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5543_1544571538c94656a5614c2f1cfdb1f1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-trang-solid-aristino-slim-fit-alsr06s",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:37.223Z",
      "updated_at": "2025-12-24T18:51:37.223Z"
    },
    {
      "id": 5,
      "name": "Áo Sơ Mi Nam Trắng Aristino Business 1SSR18S",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Trắng Aristino Business 1SSR18S\nMã sản phẩm: 1SSR18S\nKiểu dáng: Dáng ôm / Slim Fit\nÁo sơ mi Aristino Business thuộc dòng sản phẩm cao cấp, phom Slim Fit ôm vừa vặn, tôn lên vóc dáng chuẩn mực mà vẫn đảm bảo sự thoải mái.\nThiết kế ấn tượng với nền vải dệt jacquard hoạ tiết Đan Lát gợi lên những giá trị trường tồn của văn hoá Việt Nam.\nChất liệu Polyester giúp giữ phom, chống nhăn, bền màu và nhanh khô, tăng độ bền cho sản phẩm.\nChất liệu: \n100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Trắng\nSize: 38/39/40/41/42/43\nSản xuất: Trung quốc\n\nHướng dẫn bảo quản và giặt ủi:\n\nTreo hoặc gấp gọn áo sau khi sử dụng để giữ phom dáng.\nBảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp để giữ độ bền và màu sắc của áo.\nGiặt máy ở chế độ nhẹ với nước lạnh để bảo vệ chất liệu Cotton.\nKhông sử dụng chất tẩy mạnh để tránh làm hỏng chất liệu.\nỦi ở nhiệt độ thấp để tránh làm co rút vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino Business",
      "base_price": 1295000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02353_f6bb4fa7aec44c45bf25869f2f54d0c4_96a2c3c921dc47ed8fb770215ed91e2f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02352_c451e7df27bf4fffba56c65b41724309_c362431b49b142b1b14e262115f0e5fd.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02359_5547328827b34a64922aa7aa1a2275ed_d31ce432828a4e7d834b847e8cf67209.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02360_6d53509da635437dab6275a0421edcbe_be15a44e7ce749f6a3644a920fe12484.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02349_ee06a33001934d698c87b2480008fefa_e4a8482a06614bcea9a3daaad7097af4.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-trang-aristino-business-1ssr18s",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:43.344Z",
      "updated_at": "2025-12-24T18:51:43.344Z"
    },
    {
      "id": 6,
      "name": "Áo Sơ Mi Nam Trắng Aristino Business 1LSR16S",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Trắng Aristino Business 1LSR16S\nMã rút gọn: 1LSR16S\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nSơ mi trắng dài tay kinh điển, biểu tượng của phong cách nam công sở hiện đại – thanh lịch, tinh gọn và linh hoạt trong mọi hoàn cảnh. Đây là kiểu áo mà bất kỳ quý ông nào cũng nên có trong tủ đồ, vì nó vừa đơn giản, vừa sang trọng, vừa dễ phối với hầu hết trang phục khác.\nChiếc sơ mi này mang tinh thần \"Essential Elegance\" – một thiết kế tối giản nhưng chỉn chu đến từng chi tiết. Không cần họa tiết hay điểm nhấn cầu kỳ, chính sự tinh khiết của màu trắng và form dáng cân đối đã khiến áo trở thành lựa chọn hoàn hảo cho cả công sở, sự kiện hay buổi gặp gỡ thường ngày.\nÁo sơ mi trắng thể hiện hình ảnh người đàn ông hiện đại: tự tin, sạch sẽ, chuyên nghiệp và luôn sẵn sàng cho mọi tình huống.\nPhom dáng: Slim fit – ôm vừa phải, tôn dáng tự nhiên mà vẫn tạo cảm giác thoải mái khi vận động.\nCổ áo: Cổ bẻ truyền thống, form đứng nhẹ, giúp khuôn mặt sáng và thanh thoát. Có thể dễ dàng kết hợp với cà vạt hoặc mặc mở cổ cho phong cách tự nhiên.\nTay áo: Dài tay với măng-sét một khuy, đường may tỉ mỉ, gọn gàng.\nKhuy áo: Khuy cùng màu, được đính ẩn tinh tế để tổng thể thêm tinh gọn và sang trọng.\nĐường may: Thẳng, chắc, được xử lý ép biên kỹ lưỡng, mang lại cảm giác cao cấp khi nhìn gần.\nChất liệu: \n100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nBề mặt vải: Mịn, mát tay, có độ đổ tự nhiên giúp áo luôn đứng dáng.\nKhả năng kháng nhăn: Giúp áo giữ được phom gọn gàng cả ngày, đặc biệt trong môi trường làm việc năng động.\nCảm giác mặc: Nhẹ, thoáng, dễ chịu – thích hợp cho khí hậu nhiệt đới hoặc không gian văn phòng điều hòa\nGợi ý phối đồ:\nCông sở: Phối cùng quần âu đen, navy hoặc xám; thêm blazer để tạo vẻ lịch lãm chuyên nghiệp.\nDạo phố: Kết hợp với quần chinos be hoặc jeans tối màu, xắn tay nhẹ để tạo phong thái năng động.\nSự kiện / gặp đối tác: Có thể mặc kèm cà vạt hoặc áo vest để tăng độ trang trọng mà vẫn giữ sự tinh tế\nMàu sắc: Trắng\nSize: 38/3",
      "brand": "Aristino Business",
      "base_price": 1495000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06863_123577b998844508b70ee39fa9aec95b_83abd614c19d44d0b7161026d5a77883.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06858_63b45bc655a54becbdbb6486337f4e54_aedf7deb7f914e78937700463882d248.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06862_882bc6c4e3e0449e91182c97ed7cf321_e120747ac09042989685a5a3a27ee464.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06865_df1aeac639fb46f99e06af0562bbdec1_67ac91ee39bf4c6ba82f6d4f1c166470.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06867_73b006d5c3b6454099bb70f16f13fa5c_92f6d956f23047c7895694ebfcc77995.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06857_55fbcccca5dc4bb3b42add0fa69da5fe_6e6a38030f9a48dab34d1d7063239694.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4091.1_d3d11028e1744d0286b2df14b134ccfb_7dbf6784bb9f4084904a8f17e016c0b1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4091_7a5d6a3554f0478ba9edea60450dd8a1_5315f5040e3044f39c6c9fa139377f66.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4092_21a46f1c9d4a4f1ca05097a55c6c45a8_ee8a48037cad48959b6233a0482898cb.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4093_6f6576af335f45b793ea8243d1815c01_01d1113014df494f8810634c17beb469.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-trang-aristino-business-1lsr16s",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:51:52.049Z",
      "updated_at": "2025-12-24T18:51:52.049Z"
    },
    {
      "id": 7,
      "name": "Áo Sơ Mi Nam Xanh In Aristino Regular Fit ALS1730S2",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Xanh In Aristino Regular Fit  ALS1730S2\nMã rút gọn: ALS1730S2\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo sơ mi phom Regular Fit suông vừa vặn với hình thể mà vẫn tạo cảm giác thoải mái.\nĐiểm nhấn độc đáo với phần măng sét thêu chữ ký Aristino tỉ mỉ, tinh tế, là điểm nhấn thể hiện phong thái chỉn chu và khác biệt.\nThiết kế ấn tượng với biểu tượng mặt trời huyền thoại cách điệu kết hợp cùng hoạ tiết Đan Lát độc quyền của Aristino được in trên áo, tạo nên vẻ lịch lãm và sang trọng cho quý ông hiện đại.\nChất liệu: \n48% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n48% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n4% Spandex tạo độ co giãn\nMàu sắc: Xanh tím than in\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 125000000,
      "sale_price": 1125000,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02251_a39f30710de84d018425c95c02281732.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02250_9f34519ebe3a404aa33b3f3e4a370e4f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02253_577b67009768433da4e5db1b268701ac.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02252_c2aed51973044541b618e8cdbbeeba40.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02241_34c9c7d35e5d4c1a8a8dd48921b43686.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1607.1_8e099d9fd3a84f1284ed8d0c068d8b31.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1607_9100271b354c444493d11d1f62935aec.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1609_7379ae4023994e77bb7f42e6962f71b6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1611_32afd2b9e8274539a742bdc8d2760a07.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1612_04b96db1cf4b498cab944d704ea7de60.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-xanh-in-aristino-regular-fit-als1730s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:00.262Z",
      "updated_at": "2025-12-24T18:52:00.262Z"
    },
    {
      "id": 8,
      "name": "Áo Sơ Mi Nam Họa Tiết Bamboo Aristino Regular Fit ALS1770S3",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Họa Tiết Bamboo Aristino Regular Fit ALS1770S3\nMã sản phẩm: ALS1770S3\nKiểu dáng: Dáng vừa / Regular Fit\nThiết kế:\nThiết kế sơ mi mang họa tiết Đan Lát đậm chất văn hoá, được lấy cảm hứng từ nghề mây tre đan truyền thống Việt Nam.\nTên thương hiệu được sáng tạo chạy dọc theo thân áo tạo nên dấu ấn độc quyền của Aristino.\nChữ ký Aristino được thêu tỉ mỉ và sắc nét tại phần măng sét mang lại nét tinh tế và sang trọng.\nChất liệu:\n48% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc.\n48% Polyester cải tiến cho bề mặt vải bóng mịn, sắc nét, giữ phom tốt, hạn chế nhăn nhàu.\n4% Spandex tạo độ co giãn giúp linh hoạt và thoải mái khi chuyển động.\nMàu sắc: Xám kẻ dệt họa tiết\nSize: 38, 39, 40, 41, 42, 43, 44\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.\n\nDáng vừa/ Regular Fit,48% Visco (Tre) 48% Polyester 4% Spandex,Việt Nam",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02679_91440c4a67ba426681f1f78e55ad95d2.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02684_b9e0d9b6693948ae99cd58c3b433c9a4.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02685_3632b3cc411b4d1c98ffd99554a08dac.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02686_bcfac5fd89c64405a9a14ed88b725aa8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02666_-_copy_41b94fd279cb449e958c6bceaf25accf.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7950.1_b700537ef48c4edd98d69feb99f534e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7950_764fe8149c744416a3f8faa8dee73357.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7951_b97eed63216a47afb35a615a5dd8ef40.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7952_abf1f5658cd3484b99e8fcb266fe9da7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7953_eed9a54ecf1e44daab75fc43a012adce.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-hoa-tiet-bamboo-aristino-regular-fit-als1770s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:06.414Z",
      "updated_at": "2025-12-24T18:52:06.414Z"
    },
    {
      "id": 9,
      "name": "Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Slim fit ALS1710S4",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Slim fit ALS1710S4\nMã rút gọn: ALS1710S4\nForm Dáng: Dáng ôm/ Slim fit\nThiết kế:\nĐỏ kẻ đen dệt họa tiết - Áo sơ mi dài tay dáng Slim fit vừa vặn với cơ thể nhưng vẫn đảm bảo thoải mái khi vận động. -\nÁo màu đỏ kẻ đen dệt hoạ tiết ấn tượng tạo nên diện mạo nổi bật mà vẫn chỉn chu, lịch lãm.\nChất liệu: \nChất liệu: 50% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n50% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nMàu sắc: Đỏ kẻ đen dệt họa tiết\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1250000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06588_a9850fdc9f974b4d9e4e8fc7baa09e02_832c6346164d4c3e946bbd032a44fa6e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06595_17ac4f84610744d0a11caf09cdcd2902_8ab695b0e235478bad838fb02a04b59b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06597_a7b8f46bd2d54627bb974d0d22a922a4_e7ff725d903e4732b076d81cb6605dfa.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06598_9d8ddf60710a47ef8539084a2309589b_600ce6d34b834075aeb9cf30af266620.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06584_074855c4aa1948a9a320f2b75e6053fb_0dee048f3e2f4a8fa0bb984aafba957c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4086.1_d704c4734aaa4bbaa666e4464c25b701_8c7dc3c9bdbc4137bf327e66dca50bed.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4086_f3c889c2ec8b45e1b4793a1805888a0e_e4463f85280a4b7495357681dddcab22.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4087_ce7f34dadcce4af39acc64ea8bf7ef5e_5487c8358ff5452b8dccb2858b562072.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4088_d7d648a5c3cc4effbc7d4d2718a36f4b_67cc95be99224d52b4699e0ebd24c7e4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4089_c00afd9a28c54671802b02432bee7252_59dbd213463f470babe1695957e02362.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-bamboo-hoa-tiet-aristino-slim-fit-als1710s4",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:14.619Z",
      "updated_at": "2025-12-24T18:52:14.619Z"
    },
    {
      "id": 10,
      "name": "Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Slim fit ALS1700S1",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Slim fit ALS1700S1\nMã rút gọn: ALS1700S1\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nÁo sơ mi phom Slim Fit ôm vừa vặn cơ thể, tôn dáng và mang lại sự thoải mái nhờ bề mặt vải mịn màng, êm ái\nPhần măng sét chữ kỹ Aristino được thêu tỉ mỉ và tinh tế, là điểm nhấn thể hiện phong thái chỉn chu và khác biệt.\nThiết kế ấn tượng với họa tiết Đan Lát độc quyền từ Aristino, tạo nên vẻ lịch lãm và sang trọng cho quý ông hiện đại.\nChất liệu: \n50% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n50% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Xanh tím than kẻ đỏ dệt họa tiết\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1250000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02313_320b6d1477824450be75d1162aaac8cf.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02314_7b53c04757c24b0bafabc21fb05ba46a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02319_1265556566874bad832de335e71265b3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02309_9e4427c36dd24f0ab5aaec82f285fe81.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02318_04bd600bac5a496590d776196728ece1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0754.1_0a6e43351d214476a6b07284b3b99fab.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0754_82624fa1cf634e9a9ab76d6662e88fd4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0755_038045293a4746f0a0f8b4ef905c4424.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0756_58e3204642934f8b81c03141ae4e72e7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0759_31132b5cbc6f4a2dbb1b403beb708db6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-bamboo-hoa-tiet-aristino-slim-fit-als1700s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:28.451Z",
      "updated_at": "2025-12-24T18:52:28.451Z"
    },
    {
      "id": 11,
      "name": "Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Regular Fit ALS1720S2",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Bamboo Họa Tiết Aristino Regular Fit ALS1720S2\nMã rút gọn: ALS1720S2\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo sơ mi phom Regular Fit suông vừa vặn với hình thể mà vẫn tạo cảm giác thoải mái.\nĐiểm nhấn độc đáo với phần măng sét thêu chữ ký Aristino tỉ mỉ, tinh tế, là điểm nhấn thể hiện phong thái chỉn chu và khác biệt.\nThiết kế ấn tượng với họa tiết Đan Lát độc quyền từ Aristino, tạo nên vẻ lịch lãm và sang trọng cho quý ông hiện đại.\nChất liệu: \n50% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n50% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Xanh tím than kẻ xanh rêu dệt họa tiết\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 125000000,
      "sale_price": 1125000,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/b__frame_-_2025-10-20t111918.314_ac83c4cf8dc943359ace36123054e8e4.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02295_d590b43a3a8e49b29bab1ac03cc3aa3c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02297_2b122316a3634d92a5c1c0f9e2f77c75.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02302_83d284be4dd141f981d03293d1128b58.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02301_bbc148ae5a354ccc8ba43942cd7e14ee.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02290_efadbc71888946d8bc5312c3838796af.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1074.1_a7f98fce66284d5d9191dfcfa434053b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1074_9ba25ae9275e41ee9a6943d973fc81fe.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1075_1e4b1f1449da4fb4bb1e01003ae38d8c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1077_fb2d5f4bf78e4a4482f18ed7dcd96efe.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-bamboo-hoa-tiet-aristino-regular-fit-als1720s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:34.101Z",
      "updated_at": "2025-12-24T18:52:34.101Z"
    },
    {
      "id": 12,
      "name": "Áo Sơ Mi Nam Xanh Kẻ Aristino Slim Fit ALS1580S3",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Xanh Kẻ Aristino Slim Fit ALS1580S3\nMã sản phẩm: ALS1580S3\nKiểu dáng: Dáng ôm/ Slim Fit\nThiết kế:\nÁo sơ mi phom Slim Fit ôm vừa vặn cơ thể và tôn dáng tối đa.\nĐiểm nhấn độc đáo với phần măng sét thêu chữ ký Aristino tỉ mỉ và tinh tế, thể hiện phong thái chỉn chu và tạo nên sự khác biệt của thương hiệu.\nThiết kế ấn tượng với họa tiết Đan Lát độc quyền từ Aristino, tạo nên vẻ lịch lãm và sang trọng cho quý ông hiện đại.\nChất liệu:\n48% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc.\n48% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\n4% Spandex tạo độ co giãn.\nMàu sắc: Xanh kẻ\nSize: 38, 39, 40, 41, 42, 43, 44\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1100000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02460_19f6314cd49043cfb1935be633b0ea24.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02462_ffacf795f39a4bfa89fad2ed5e546dff.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02464_41faa936fc7f4a24920f3ebbf502098d.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02465_58b29ef9ad3b4b4388edadc2c0014f1c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02453_de711cb07a164c4a948c744b63e548cd.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7955.1_2c5b8f8b78dd4e4cb2ed22c23eb24a5c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7955_883d8d224da44f8e8b9d2ad1576cf69a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7956_954516f47922416d9f6f60ca88299611.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7957_d41072bec9c846cd874715913a25addf.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7958_62e8407014f14768b4652d6a6e466671.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-xanh-ke-aristino-slim-fit-als1580s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:42.236Z",
      "updated_at": "2025-12-24T18:52:42.236Z"
    },
    {
      "id": 13,
      "name": "Áo Sơ Mi Nam Xanh In Bamboo Aristino Slim Fit ALS1740S3",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Xanh In Bamboo Aristino Slim Fit ALS1740S3\nMã rút gọn: ALS1740S3\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nÁo sơ mi phom Slim Fit ôm vừa vặn cơ thể, tôn dáng và mang lại sự thoải mái nhờ bề mặt vải mịn màng, êm ái\nPhần măng sét chữ kỹ Aristino được thêu tỉ mỉ và tinh tế, là điểm nhấn thể hiện phong thái chỉn chu và khác biệt.\nThiết kế ấn tượng với biểu tượng mặt trời huyền thoại cách điệu in trên áo, tạo nên vẻ lịch lãm và sang trọng cho quý ông hiện đại.\nChất liệu: \n48% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n48% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n4% Spandex tạo độ co giãn\nMàu sắc: Xanh tím than in\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02262_fa382ec9cccf49d795eb034cebf2fceb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02263_10f71e60f45e4d469cd4955e988ccc2f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02267_8ee1a455418348bd87fa07b3574d13c3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02255_4a83ba84e4b741c7b9264b9a0ccb35ce.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02266_1137abadf3324531a1ed3c55088fd46a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1598.1_0b49d90544df46d78f9fef4c0c42be1c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1598_26bd57eb555a483b8c9b110431fe1768.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1601_0b8ffa97f1664f41abd84c8a0d23ac80.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1602_b32bc7b72618479c8f265bf408be1159.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1605_7f8af7c6b7a741759bef746ed6e000c1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-xanh-in-bamboo-aristino-slim-fit-als1740s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:48.400Z",
      "updated_at": "2025-12-24T18:52:48.400Z"
    },
    {
      "id": 14,
      "name": "Áo Sơ Mi Nam Họa Tiết Bamboo Aristino Slim Fit ALS1750S3",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Họa Tiết Bamboo Aristino Slim Fit ALS1750S3\nMã rút gọn: ALS1750S3\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nÁo sơ mi phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nÁo thiết kế đơn giản, dệt hoạ tiết tinh tế trên nền vải gam màu xanh thanh lịch, mang đến phong cách thời thượng cho các quý ông.\nChữ ký Aristino thêu nổi bật ở tay áo không chỉ là dấu ấn thương hiệu mà còn khẳng định phong thái doanh nhân lịch lãm.\nChất liệu: \n48% Visco (Tre) mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc.\n48% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\n4% Spandex tạo độ co giãn.\nMàu sắc: Xanh nhạt dệt họa tiết\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06930_7f0bafeb0ab541f1b58a32d7790c5603.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06932_bc4b984ac46e4776a1c8610cd2aacc6e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06936_eb67fe12f741437f9c8e3e869cb6e797.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06935_15b3629c7b9d4f2792a838ea78a1a80d.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06901_b47369c4210a4571b4bb2f3614ab9b5e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4096.1_8949e1a09a2a4c648b846c733834466d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4096_378bca10e774478aa4c69c65a1fe15e8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4097_eea41be22d8a4e0b8f2548a72acfb6d5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4098_957673208012433d8103cf17022708d2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4099_d0371458e91846edbf4822cfa331a7a6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-hoa-tiet-bamboo-aristino-slim-fit-als1750s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:52:54.717Z",
      "updated_at": "2025-12-24T18:52:54.717Z"
    },
    {
      "id": 15,
      "name": "Áo Sơ Mi Nam Họa Tiết Aristino Business Perfect Fit 1SS069AS2",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Họa Tiết Aristino Business Perfect Fit 1SS069AS2\nMã sản phẩm: 1SS069AS2\nKiểu dáng: Dáng mặc buông, vạt bằng/ Perfect Fit\nÁo sơ mi ngắn tay thuộc dòng sản phẩm cao cấp phom Perfect Fit suông rộng mặc thả ngoài mà vẫn đảm bảo độ lịch sự chỉn chu cho người mặc.\nÁo có túi ngực tiện lợi, đem lại vẻ ngoài lịch lãm, tự tin cho các quý ông.\nThiết kế ấn tượng với hoạ tiết độc đáo được in trên nền vải dệt jacquard hoạ tiết Đan Lát gợi lên những giá trị trường tồn của văn hoá Việt Nam.\nChất liệu: \n100% Cotton (Bông) thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc.\nMàu sắc: Trắng in họa tiết\nSize: 38/39/40/41/42/43\nSản xuất: Trung quốc\n\nHướng dẫn bảo quản và giặt ủi:\n\nTreo hoặc gấp gọn áo sau khi sử dụng để giữ phom dáng.\nBảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp để giữ độ bền và màu sắc của áo.\nGiặt máy ở chế độ nhẹ với nước lạnh để bảo vệ chất liệu Cotton.\nKhông sử dụng chất tẩy mạnh để tránh làm hỏng chất liệu.\nỦi ở nhiệt độ thấp để tránh làm co rút vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino Business",
      "base_price": 1450000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc01833_93e0405a31884bd1a36cd55c4ed7d4a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01846_edb20071855443d9b97fdc3ecbb917de.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01825_fd29138abcfa4946b531564d95bfeda3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01847_e5c2f72b74d44dbea3f5a086005bdac6.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01848_311694f2c3c244e084172dcb0aa0decb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01829_3c7a3095899c4985925c887299c1f4a5.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-hoa-tiet-aristino-business-perfect-fit-1ss069as2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:02.811Z",
      "updated_at": "2025-12-24T18:53:02.811Z"
    },
    {
      "id": 16,
      "name": "[BIGSIZE US] Áo Polo Active thể thao Nam Trắng Aristino tay ngắn phù hợp di chuyển APS004EGP01",
      "description": "Tên sản phẩm: [BIGSIZE US] Áo Polo Active thể thao Nam Trắng Aristino tay ngắn phù hợp di chuyển APS004EGP01\nPhom dáng: Regular Fit – vừa vặn, thoải mái\nChất liệu: 92% Polyester, 8% Spandex- trọng lượng vải 150gsm ±5%\nƯu điểm – Tính năng:\n✔ Thấm hút mồ hôi nhanh, thoáng khí, giữ cơ thể khô ráo khi vận động\n✔ Co giãn linh hoạt, ôm vừa vặn, dễ dàng di chuyển\n✔ Bền bỉ, chống nhăn, giữ form sau nhiều lần giặt\n✔ Vải nhẹ, mềm mịn, dễ giặt và nhanh khô\n✔ Sử dụng vải đạt chứng nhận Bluesign® Approved, đảm bảo:\n An toàn cho người mặc: Không chứa hóa chất độc hại\n Thân thiện môi trường: Giảm thiểu tác động, tiết kiệm năng lượng\n Bền vững & trách nhiệm: Tuân thủ tiêu chuẩn xã hội và môi trường nghiêm ngặt\nPhối cùng: Short, Jeans, Kaki – mặc được bốn mùa\nSản xuất: Việt Nam\nHS Code: 61052010\nEnglish Below\nProduct Name: Aristino Men’s Active Polo Shirt Short Sleeve Bluesign® Approved fabric APS004EGP01\nFit: Regular Fit – comfortable and versatile\nMaterial: 92% Polyester, 8% Spandex - fabric weight 150gsm ±5%\nKey Features & Benefits:\n✔ Moisture-wicking and breathable, keeps you dry and cool during activities\n✔ Stretch fabric for flexibility and ease of movement\n✔ Durable, wrinkle-resistant, retains shape after repeated washes\n✔ Lightweight, smooth texture, easy care and quick-drying\n✔ Made with Bluesign® Approved fabric, ensuring:\n Consumer safety: Free from harmful substances\n Eco-friendly production: Lower environmental impact and energy saving\n Sustainability & responsibility: Meeting strict social and environmental standards\nStyle Pairing: Perfect with shorts, jeans, or chinos – wearable all year round\nMade in: Vietnam\nHS Code: 61052010",
      "brand": "Aristino",
      "base_price": 795000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/4ecf445f6b86a4f2b7597d5a0_large_8353fa163d854d32841c6074e31d96a9_large_8b78b96d54d249f190e4ae2961feb18d.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.1_e411b07c7633492aa021c51696de2187.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.2_a2e3811313154db3847de00f73bf381b.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.3_bb62d2d63ca04517970eb963a4a0773c.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.4_0bc6d511905746a5a93d824849a4845b.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.5_66a577060c4343d99ef1c25961929b08.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.6_1ca63a3cc6fc425fbb19e87e92164378.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.7_d621ca3f6f074b09a2bf6e6fe0cac4f2.jpg",
        "https://cdn.hstatic.net/products/200000887901/polo03.8_55abc63db1c0478cb906a400174ee0e3.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "bigsize-us-ao-polo-active-the-thao-nam-trang-aristino-tay-ngan-phu-hop-di-chuyen-aps004egp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:21.140Z",
      "updated_at": "2025-12-24T18:53:21.140Z"
    },
    {
      "id": 17,
      "name": "[Bigsize Us] Áo Polo Active thể thao Nâu Nam Aristino tay ngắn phù hợp di chuyển APS003EGP01",
      "description": "Tên sản phẩm: [Bigsize Us] Áo Polo Active thể thao Nâu Nam Aristino tay ngắn phù hợp di chuyển APS003EGP01\nPhom dáng: Regular Fit – vừa vặn, thoải mái\nChất liệu: 88% Recycled Polyester, 12%Spandex - trọng lượng vải 180gsm ±5%\nƯu điểm – Tính năng:\n✔ Thấm hút mồ hôi nhanh, thoáng khí, giữ cơ thể khô ráo khi vận động\n✔ Co giãn linh hoạt, ôm vừa vặn, dễ dàng di chuyển\n✔ Bền bỉ, chống nhăn, giữ form sau nhiều lần giặt\n✔ Vải nhẹ, mềm mịn, dễ giặt và nhanh khô\n✔ Sử dụng vải đạt chứng nhận Bluesign® Approved, đảm bảo:\n An toàn cho người mặc: Không chứa hóa chất độc hại\n Thân thiện môi trường: Giảm thiểu tác động, tiết kiệm năng lượng\n Bền vững & trách nhiệm: Tuân thủ tiêu chuẩn xã hội và môi trường nghiêm ngặt\nPhối cùng: Short, Jeans, Kaki – mặc được bốn mùa\nSản xuất: Việt Nam\nHS Code: 61052020",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/1__1__2a540e49d68042fba4b127f12f857347.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.1_dfdbe6c6d5ce4555b115acc8932df391.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.2_215633216ca64302a6e75c71e8d81892.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.3_b355c81277b74cf99baf3ef040f9b73d.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.4_71f7c1a1bf5a4d8983deed1b0b82060a.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.5_c31335cf03004a6295c4460fb4819cd5.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.6_8071ddc7983c4fa99dfc14b1f4ec0589.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.7_3f3f039162fa4b2f8fddd86cadd82b75.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.8_39e6dcbb0cf247fcbb750b077014d70c.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.9_c235b07c22704c3a833efdb3bd32924f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "bigsize-us-ao-polo-active-the-thao-nau-nam-aristino-tay-ngan-phu-hop-di-chuyen-aps003egp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:31.282Z",
      "updated_at": "2025-12-24T18:53:31.282Z"
    },
    {
      "id": 18,
      "name": "[Bigsize Us] Áo Polo Active thể thao Đen Nam Aristino tay ngắn phù hợp di chuyển APS003EGP01",
      "description": "Tên sản phẩm: [Bigsize Us] Áo Polo Active thể thao Đen Nam Aristino tay ngắn phù hợp di chuyển APS003EGP01\nPhom dáng: Regular Fit – vừa vặn, thoải mái\nChất liệu: 88% Recycled Polyester, 12%Spandex - trọng lượng vải 180gsm ±5%\nƯu điểm – Tính năng:\n✔ Thấm hút mồ hôi nhanh, thoáng khí, giữ cơ thể khô ráo khi vận động\n✔ Co giãn linh hoạt, ôm vừa vặn, dễ dàng di chuyển\n✔ Bền bỉ, chống nhăn, giữ form sau nhiều lần giặt\n✔ Vải nhẹ, mềm mịn, dễ giặt và nhanh khô\n✔ Sử dụng vải đạt chứng nhận Bluesign® Approved, đảm bảo:\n An toàn cho người mặc: Không chứa hóa chất độc hại\n Thân thiện môi trường: Giảm thiểu tác động, tiết kiệm năng lượng\n Bền vững & trách nhiệm: Tuân thủ tiêu chuẩn xã hội và môi trường nghiêm ngặt\nPhối cùng: Short, Jeans, Kaki – mặc được bốn mùa\nSản xuất: Việt Nam\nHS Code: 61052020",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/ee98141b4b3b9d60a8fe2b196_large_f8b61e3a93d64a64a4e0da4a5bb80eda_large_9adefca9021646f193f9d8c19eff8b9c.jpg",
        "https://cdn.hstatic.net/products/200000887901/0d2bf49d3bec74c41cdfce45e_large_50db3588730a4a539b30034e31669b85_large_f8c03d6a3ee44035ad1162549e143beb.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.22_6bc4e747ef9f473bb01d864e5477bbc4.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.23_e4b25605683246dba1b351c9901d6abd.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.24_f2ac6810bcb74f649b1db4b74e8a6b8e.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.25_e0ff0d785e7346aa90b89f79713f4b5d.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.26_997fd70d33b34573972e0337e3d3888a.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.27_298822b65f364d73aad5a43887efddc7.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.28_6c7693fea9754e478113a2048f14b10b.jpg",
        "https://cdn.hstatic.net/products/200000887901/po002.29_b3eaa2d5b953404da848c422697c87c2.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "bigsize-us-ao-polo-active-the-thao-den-nam-aristino-tay-ngan-phu-hop-di-chuyen-aps003egp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:39.915Z",
      "updated_at": "2025-12-24T18:53:39.915Z"
    },
    {
      "id": 19,
      "name": "Áo Polo Nam Trắng Aristino Golf ALPG06BS2",
      "description": "Tên sản phẩm: Áo Polo Nam Trắng Aristino Golf ALPG06BS2\nMã sản phẩm: ALPG06BS2\nKiểu dáng: Tech Golf: form áo polo shirt golf, rộng hơn form poloshirt reg thường\nThiết kế:\nÁo polo Golf phom dáng Tech golf được tinh chỉnh các thông số đem lại sự thoải mái tối đa theo từng cử động của golfer.\nÁo thiết kế khỏe khoắn nhưng vẫn đủ tinh tế với điểm nhấn nhẹ tại viền cổ áo\nÁo được nâng cấp tính năng Anti UV, giúp bảo vệ làn da với chỉ số kháng tia UV lên tới 98% và bền bỉ trong suốt thời gian sử dụng. Công nghệ sợi vải Moisture Wicking giúp áo thấm hút tốt, đồng thời khô nhanh hơn\nThiết kế khỏe khoắn, màu sắc nam tính cùng họa tiết ấn tượng, đem đến diện mạo thời thượng và lịch lãm cho người mặc.\nChất liệu: \n85% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n15% Spandex tạo độ co giãn\nMàu sắc: Trắng 4\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Golf",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc07269_a3469812bf28404d8d9c0fcfa71b1ab2_ea1e185b9df14afe9c29fdf8c9eed4be.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07268_fefbd04c5408408684a78033d128b071_9f63c5e4979d4de9a374d726d969a776.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07272_786f2d5b77e1436caea1f745e12a461a_b3f3f85e23eb4c36a789bfb4cf73897e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07274_d9b2ce476e894f22bed16d6b1a190556_8bd8c21fb9c24fdea8c04035e4592c71.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07275_8b6f38bd3ae746ff891d4832ffa02668_71a6ed4ce8194f4b9316fa17dc01b58e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07260_96f212f507bd456e9dd741335f6ba62f_5853cf869ae649f1b9d0121b387751c6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2455.1_b456df25038b4829a16adb4b1bda410a_6ec8458dc0f244b784850c7cde3c9349.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2455_05cd10af2ed347efb588fc42825f95c0_b79ea72877324299bbdc278a2af77890.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2458_83983cb28dc7422084598ed189fe160c_9e235b0375d24ec7ace41d3775f35894.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2449_4b70af909b8d446a9a7346563c7e1659_f303334e2516455c9f1943e13d49d0bc.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-nam-trang-aristino-golf-alpg06bs2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:46.059Z",
      "updated_at": "2025-12-24T18:53:46.059Z"
    },
    {
      "id": 20,
      "name": "Áo Polo dài tay Nam Aristino Business Regular 1LP004BS0",
      "description": "Tên sản phẩm: Áo Polo dài tay Nam Aristino Business Regular 1LP004BS0\nMã sản phẩm: 1LP004BS0\nKiểu dáng: Dáng vừa/ Regular\nThiết kế:\nÁo Polo dài dài Form regular vừa vặn, cổ polo viền chỉ nổi bật mang điểm nhấn tinh tế.\nÁo thiết kế tối giản phù hợp với mọi độ tuổi\nMàu Be trung tính sang trọng, dễ phối cùng quần jean, kaki hoặc quần tây.\nPhù hợp cho cả đi làm, dạo phố hay gặp gỡ cuối tuần – vừa năng động vừa lịch sự\nChất liệu: \n30% Cotton: hoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n46% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n22% Visco: mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n2% Spandex tạo độ co giãn\nMàu sắc: Be 24\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 3950000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000523_72948d2ff3624a21b234ebfbcd07c845.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000529_32681600e06c430f9d466ff960aa03e9.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000531_70db35877dcc43668f0ed5aab7e3eb38.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000532_0e6eeb407fcb464c8096fc986d42cd11.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000519_1f8c725a26134dd49bf3e6bb4f54fa61.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9244.1_67bbcccd1503441d9e7b6519f717193e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9244_f2e19fa39a5b4086bdb31685a4533f9c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9246_6a8772f8d56d4ba29b046bd2672335b0.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9249_df96febbc31641ab814c26edfa617912.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9251_a3dd31dc1a914dcfb9f874789905a880.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-dai-tay-nam-aristino-business-regular-1lp004bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:53:53.854Z",
      "updated_at": "2025-12-24T18:53:53.854Z"
    },
    {
      "id": 21,
      "name": "Áo Polo Nam Trắng Aristino Golf ALPG05BS2",
      "description": "Tên sản phẩm: Áo Polo Nam Trắng Aristino Golf ALPG05BS2\nMã sản phẩm: ALPG05BS2\nKiểu dáng: Tech golf : form áo polo shirt golf, rộng hơn form poloshirt reg thường\nThiết kế:\nÁo polo Golf phom dáng Tech golf được tinh chỉnh các thông số đem lại sự thoải mái tối đa theo từng cử động của golfer.\nÁo thiết kế khỏe khoắn nhưng vẫn đủ tinh tế với điểm nhấn nhẹ tại viền cổ áo\nÁo được nâng cấp tính năng Anti UV, giúp bảo vệ làn da với chỉ số kháng tia UV lên tới 98% và bền bỉ trong suốt thời gian sử dụng. Công nghệ sợi vải Moisture Wicking giúp áo thấm hút tốt, đồng thời khô nhanh hơn\nThiết kế khỏe khoắn, màu sắc nam tính cùng họa tiết ấn tượng, đem đến diện mạo thời thượng và lịch lãm cho người mặc.\nChất liệu: \n85% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n15% Spandex tạo độ co giãn\nMàu sắc: Trắng 4\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Golf",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc07293_5035caabba3d4fd7a4951e22b71e2500_b762b753106b45eda437e7ad62167708.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07291_ba6a7ae6290d4aadaab06333c3e1d377_c5cfae583373487bbd16e530b9d2f3a5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07295_f256f1a6965e43c29ee22f5527e31951_7237de14b44f4805a617b2f0b45ea266.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07298_cbbb957e7c47413582e81980592d6180_006e70f16b97416aa524c47cd443636b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07299_bf8bc324e5a6420a995ea14983a34d9b_9fbb3b94ca9b49ab817650074069bd93.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07278_52a021d9443f45a88bfa9697d7f6adc8_e6ce3d73011b4d9f9349edd099a90733.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2448.1_52b3c4d4d0c04b8e923a1d33c5864aec_8cf738867fd24b85baf2bc67ff373493.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2448_2f68d0fc83364e96a1e1c7c29533439a_1798c533497444e6abc377785ce22e55.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2453_26df3009371e40b09010d3973d6d5fe0_d943b8c152994ae8850d26ef72079ef4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2457_2442345afe6f4259950495afca936f20_97ce10f602f94e4ba03784d87be04a75.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-nam-trang-aristino-golf-alpg05bs2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:02.215Z",
      "updated_at": "2025-12-24T18:54:02.215Z"
    },
    {
      "id": 22,
      "name": "Áo Elite Polo Nam Trắng Aristino Cotton Regular Fit APS168S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Trắng Aristino Cotton Regular Fit APS168S3EC\nMã sản phẩm: APS168S3EC\nKiểu dáng: Dáng suông nhẹ/ Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular Fit, ôm vừa vặn với cơ thể nhưng vẫn đảm bảo sự thoải mái tối đa khi mặc.\nThiết kế thời thượng với cổ áo và tay áo bo rib, kẻ jacquard phối màu nam tính, mang lại vẻ ngoài lịch lãm cho quý ông hiện đại.\nChất liệu:\n75% Cotton giúp áo mềm mại, xốp nhẹ và thoáng khí.\n25% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Trắng 2\nSize: S, M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng để bảo vệ chất lượng vải.\nBảo quản nơi khô ráo, thoáng mát.\n\nHướng dẫn giặt ủi:\n\nGiặt tay hoặc máy ở chế độ nhẹ với nước lạnh.\nKhông sử dụng chất tẩy mạnh.\nPhơi trong bóng râm để giữ màu và độ bền của áo.\n\nLưu ý: Hình ảnh minh họa chỉ mang tính chất tham khảo, màu sắc thực tế của sản phẩm có thể khác biệt do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06954_da565ef9a6c3444ca23ac5e86f8f6e54.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06951_bce1ce3af21d47b8a1e6b034f5f2dd8a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06940_5c472b68ff1345f9ad8f5cc5d6e177d8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06957_447b14499df640af819e5b6c0a0e30ed.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06958_d6349356f024420ab9caf8049b84cd77.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06946_7d66058c56a542498e19c36bff713355.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4068.1_504482e8b86c4c49b98a792f4ceafec8_64d1328bc79d424eb0ad5f401a851bed.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4068_688352d65e2e4f8ba989b124e85b1487_dbc283b0b96b495288240bacd61ed34c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4069_fdaa5840b97048fc8dd25dc0ad5d1d68_a7abc38208484e0baacdb2f7186e7f0b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4070_781dc157071b493c8a5b586446ae8e02_c1379d7d370d48c39a8b3ec23b740d7e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-trang-aristino-cotton-regular-fit-aps168s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:14.428Z",
      "updated_at": "2025-12-24T18:54:14.428Z"
    },
    {
      "id": 23,
      "name": "Áo Elite Polo Nam Xanh Tím Than Aristino Cotton Organic APS165S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Nâu Aristino Cotton Organic APS165S3EC\nMã rút gọn: APS165S3EC\nKiểu dáng: Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc\nThiết kế basic với cổ dệt jacquard phối màu nổi bật, chỉn chu, tay áo bo rib trẻ trung, tạo nên dấu ấn thanh lịch, thời thượng cho quý ông. \nChất liệu: \n53% Cotton Organic thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da\n40.5% polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n6.5% Spandex đem đến độ co giãn nhẹ \nMàu sắc: Xanh tím than 27\nSize: S/ M/ L/ XL/ XXL, XXXL\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06795_dff5bd2b762f42dabb734643f832b69e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06798_20528ded5acb48e7bfff3b4d579ad5f3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06787_d86f038fd2664ea38a3094f610412863.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06802_9971e7b645d14bdda39f7c8626b283cb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06801_5b300dcc484d4510975872be89020607.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06794_fe7aae03fef147808aacbee18e787f7b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06790_80e04672588849bd8c3e4f26461eac99.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4056.1_cfc641c7b35e4517a9889d5039a7e87a_df57d7d742304d11a01ea5c407709081.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4056_2552af68fd4443309196f85625a59c6d_c774ecb5a39e4ca198352e616a1e2c03.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4057_9b84c56c70de4ee4942ac4b8aa031a3c_9429f0b3c44d46069f559deadeb56d53.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-xanh-tim-than-aristino-cotton-organic-aps165s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:20.154Z",
      "updated_at": "2025-12-24T18:54:20.154Z"
    },
    {
      "id": 24,
      "name": "Áo Elite Polo Nam Xanh Aqua Aristino Cotton Organic APS166S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Xanh Aqua Aristino Cotton Organic APS166S3EC\nMã rút gọn: APS166S3EC\nKiểu dáng: Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc\nThiết kế basic với cổ dệt jacquard phối màu nổi bật, chỉn chu, tay áo bo rib trẻ trung, tạo nên dấu ấn thanh lịch, thời thượng cho quý ông. \nChất liệu: \n53% Cotton Organic thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da\n40.5% polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n6.5% Spandex đem đến độ co giãn nhẹ \nMàu sắc: Xanh aqua 10\nSize: S/ M/ L/ XL/ XXL/ XXXL\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06992_16026b0f337b461784e09e179abe06ac.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06987_17c380c396da4cb484bd5f9aaf980b83.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06990_8ba457dde14b43bf94052a7471d8b0c6.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06968_8982bd6df72646a587ca59857fc1f9fe.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06997_df427c67e79c42838698ac54f13fc813.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06979_fe9bcfc6528a496ab63224a8a36749de.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06996_8df3de0672084b289165fc9a46adcee6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4052.1_6eb770a4f8ac44af85238f24274258c2_1edaa23b56ff4695b644f0dce92f144f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4052_adbbbc5027bf4e6c885183aa95a9d70b_616c1919213e447dbd0123556b835e77.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4053_2f1e287c6e684251976545068b274a71_f9f6a0b094894fb78f069402765b616c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-xanh-aqua-aristino-cotton-organic-aps166s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:28.657Z",
      "updated_at": "2025-12-24T18:54:28.657Z"
    },
    {
      "id": 25,
      "name": "Áo Elite Polo Nam Xám Aristino Cotton Organic APS166S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Xám Aristino Cotton Organic APS166S3EC\nMã rút gọn: APS166S3EC\nKiểu dáng: Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc\nThiết kế basic với cổ dệt jacquard phối màu nổi bật, chỉn chu, tay áo bo rib trẻ trung, tạo nên dấu ấn thanh lịch, thời thượng cho quý ông. \nChất liệu: \n53% Cotton Organic thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da\n40.5% polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n6.5% Spandex đem đến độ co giãn nhẹ \nMàu sắc: Xám 21\nSize: S/ M/ L/ XL/ XXL/ XXXL\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06776_a7c26d9a9bf74b44bbeaf28123e7d754.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06773_d0d9abb3d02c4efa850584a87b2dccd9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06762_f173818cfc56435e92521b096a3d6bf7.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06781_7cf01e9e7adf44f0a7423e5dd96ba40b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06772_35a160f74e8c48a486befc33acf305a2.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06780_ffb5b36101434d6c950736d31c97d24a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4048.1_26c9afd85db8413da44b69be7630781a_3a3e3285e5ab415c9738545bbfd4c5c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4048_2bbc7ea8c6f543c698e37a78096c0f7d_eca8d0d5471c417085e5afc0efc2a0b3.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4049_fa1ef6ad687a4c8caac1e5e02cfe159d_3f64fde18cd84ecdbac727e0c8368b86.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4050_f9d2c2fcd4f84e0b85f929e9d94b88d8_8580ffa906b0436ca6cf8478feed4e2b.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-xam-aristino-cotton-organic-aps166s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:36.676Z",
      "updated_at": "2025-12-24T18:54:36.676Z"
    },
    {
      "id": 26,
      "name": "Áo Elite Polo Nam Nâu Aristino Cotton Organic APS165S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Nâu Aristino Cotton Organic APS165S3EC\nMã rút gọn: APS165S3EC\nKiểu dáng: Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc\nThiết kế basic với cổ dệt jacquard phối màu nổi bật, chỉn chu, tay áo bo rib trẻ trung, tạo nên dấu ấn thanh lịch, thời thượng cho quý ông. \nChất liệu: \n53% Cotton Organic thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da\n40.5% polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n6.5% Spandex đem đến độ co giãn nhẹ \nMàu sắc: Nâu 18\nSize: S/ M/ L/ XL/ XXL, XXXL\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc07021_c2331f1f8f9648c6be06cf5d6c9e4569.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07024_ab7165c0fe274d13aed086a95a0ea1a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07002_8df3b0b81b9e474d8ebde4cf1c981c56.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07026_c061ed00e8f54ddf872698cccd9ffa88.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07009_e3eb45b05f0c4ec9b732f925b51c5dec.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4060.1_437950aa73f44593a49600874bf66767_1bd63ff0a7124239ac84c3aa2d713044.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4060_d9f6c30b897b49dbb0ac18bf1554a303_0c9df0b22c9944459474405c6093cbc7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4061_9f87fd44456c4116871250dc13644bbe_da114cfb5b6142e6a07afe7da59ca581.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4062_282e643c86754c87ba25306a12c0398b_f9821499ad1946168611f66a115793ec.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4062.1_ca7e0b00988b442ca198217681d36de1_111ceaae700f4ce6b87631c6eb6ec75b.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-nau-aristino-cotton-organic-aps165s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:43.961Z",
      "updated_at": "2025-12-24T18:54:43.961Z"
    },
    {
      "id": 27,
      "name": "Áo Elite Polo Nam Đen Aristino Cotton Regular Fit APS167S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Đen Aristino Cotton Regular Fit APS167S3EC\nMã sản phẩm: APS167S3EC\nKiểu dáng: Dáng suông nhẹ/ Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular Fit, ôm vừa vặn với cơ thể nhưng vẫn đảm bảo sự thoải mái tối đa khi mặc.\nThiết kế thời thượng với cổ áo và tay áo bo rib, kẻ jacquard phối màu nam tính, mang lại vẻ ngoài lịch lãm cho quý ông hiện đại.\nChất liệu:\n75% Cotton giúp áo mềm mại, xốp nhẹ và thoáng khí.\n25% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Đen 1\nSize: S, M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng để bảo vệ chất lượng vải.\nBảo quản nơi khô ráo, thoáng mát.\n\nHướng dẫn giặt ủi:\n\nGiặt tay hoặc máy ở chế độ nhẹ với nước lạnh.\nKhông sử dụng chất tẩy mạnh.\nPhơi trong bóng râm để giữ màu và độ bền của áo.\n\nLưu ý: Hình ảnh minh họa chỉ mang tính chất tham khảo, màu sắc thực tế của sản phẩm có thể khác biệt do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06753_08fbcff70d1041c583f3b9b9bb3185a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06754_29c0677d9438463a883ae70ea63dbb04.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06760_312c4d642cc7451c81c6ce542ab8d56e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06743_1eb96adbc8c048f7bba66f52e4e99ee5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06748_29c4ccd01b4c435498b64beeacc411c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06758_4e8d04b5ff014cdcbdb459a2af00476c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064.1_1b2b40bcd8c44af283b72fc44502c8b1_867359d46f694f458aa2575277f49147.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064_ce5339a25f574ecf949a19b0c0b5522a_dbe21d6186004c6f9be920c60e759292.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4065_30f0b29d011840efb9c8934b1295c79f_8d3ce0e937074eb1b7713523bc2de231.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4066_153a885df4ac4676838a69556bd58234_548a09ab292442a9979496b005edf99a.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-den-aristino-cotton-regular-fit-aps167s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:52.160Z",
      "updated_at": "2025-12-24T18:54:52.160Z"
    },
    {
      "id": 28,
      "name": "Áo Elite Polo Nam Be Aristino Cotton Regular Fit APS167S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Đen Aristino Cotton Regular Fit APS167S3EC\nMã sản phẩm: APS167S3EC\nKiểu dáng: Dáng suông nhẹ/ Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular Fit, ôm vừa vặn với cơ thể nhưng vẫn đảm bảo sự thoải mái tối đa khi mặc.\nThiết kế thời thượng với cổ áo và tay áo bo rib, kẻ jacquard phối màu nam tính, mang lại vẻ ngoài lịch lãm cho quý ông hiện đại.\nChất liệu:\n75% Cotton giúp áo mềm mại, xốp nhẹ và thoáng khí.\n25% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\nMàu sắc: Be 7\nSize: S, M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng để bảo vệ chất lượng vải.\nBảo quản nơi khô ráo, thoáng mát.\n\nHướng dẫn giặt ủi:\n\nGiặt tay hoặc máy ở chế độ nhẹ với nước lạnh.\nKhông sử dụng chất tẩy mạnh.\nPhơi trong bóng râm để giữ màu và độ bền của áo.\n\nLưu ý: Hình ảnh minh họa chỉ mang tính chất tham khảo, màu sắc thực tế của sản phẩm có thể khác biệt do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 65000000,
      "sale_price": 520000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc07082_ade71a57998c48c9931934228a87e558.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07084_d18e961a41274b49950ae1f7db98cc3a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07069_aa7660a16c7e417b803a17434fb731d0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07090_5ba5f4052a474be3b4e845eb6fb870fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07081_69c0ea009d1547b785371509a2843cd5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07088_26a1a102c6b64c6a98d64e047148d252.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3504.1_3dafbd1ef4944b6598db59b46df5018b_90078640dafb41139a466978a547d811.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3504_2f6d95680a4847339c1456468af7c695_c2afb47dfa7b4de4be73f434e5e584bc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3505_e6b24e17497a4180b0ce500497b6c1a9_1799a6c615f14befb147c39400fddfa8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3506_b42b86a782c34edabd0a5f9115a595e5_951b08bc18b34a93b50bff035de601e1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-be-aristino-cotton-regular-fit-aps167s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:54:58.119Z",
      "updated_at": "2025-12-24T18:54:58.119Z"
    },
    {
      "id": 29,
      "name": "Áo Elite Polo Nam Cổ Dệt Đen Aristino Cotton Regular Fit APSR10EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Cổ Dệt Đen Aristino Cotton Regular Fit APSR10EC\nMã sản phẩm: APSR10EC\nKiểu dáng: Regular Fit\nThiết kế: \nÁo polo form Regular fit suông vừa thoải mải nhưng vẫn vừa vặn với cơ thể.\nThiết kế basic với cổ dệt lịch sự và màu sắc trung tính, khỏe khoắn, tạo nên diện mạo lịch lãm và nam tính cho người mặc.\nChất liệu: 95% Cotton, 5% Spandex\n95% Cotton: Giúp áo mềm mại, xốp nhẹ, có khả năng thấm hút tốt và thoáng khí quanh năm. Chất liệu cotton cũng giữ được độ đứng dáng vừa phải, đảm bảo sự thoải mái khi mặc.\n5% Spandex: Tăng độ co giãn, giúp áo linh hoạt và dễ chịu khi vận động.\nMàu sắc: Đen 1\nSize: S, M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và màu sắc của áo.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi dưới ánh nắng trực tiếp để giữ màu và độ mềm mại của vải.\nLưu trữ áo ở nơi khô ráo, thoáng mát.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 59500000,
      "sale_price": 476000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/b__frame_-_2025-10-20t105851.339_2c21e6ea1c0c4b399f90591a27689e7d.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01869_145a8d3a199844d5b19496a6eaa8da0e_abf6eadfe75146b288660c482fc297a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01890_4f5f3cc5d6144318b7cce1594973821b_340cb65186b04e65a7631198bbdc5276.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01892_7025cb8d1e0f4ded8c1ec41ca33cf3b5_45f38e5cd7c54bb29aea301a56842ed0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01894_8425858190674b4bb455f40a40d6349e_ed1a587a14244ee684093c1ebbda51e0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01895_0106324cf81f482983d9e0585c5b2f90_66d7b670deea463eb7fe7b772dcbc2e3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01878_-_copy_b513bd0bf1504c3198d5a89ccb04bac9_b4a4b8abaa49473c9ecd3bdf28639cbf.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1100.1_514a073b1b12412cb31b4556ad5bf86d_8d233d98e2e84c52903ae48cab7a5605.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1100_4e2162b6d65c47cc9ce4ebf34d138d95_3f11a91fa64946aea20871bc9d80a936.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1101_122da6a300ac4326b2b66f55872cd53d_08d67c0ffa6343e2ab505d73a1c0531c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-co-det-den-aristino-cotton-regular-fit-apsr10ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:06.240Z",
      "updated_at": "2025-12-24T18:55:06.240Z"
    },
    {
      "id": 30,
      "name": "Áo Elite Polo Nam Trắng Aristino Slim Fit APS072S3EC",
      "description": "Tên sản phẩm: Áo Elite Polo Nam Trắng Aristino Slim Fit APS072S3EC\nMã sản phẩm: APS072S3EC\nForm Dáng: Slim Fit \nThiết kế: \nÁo Polo phom dáng Slim fit ôm vừa vặn với cơ thể, tôn dáng tối đa nhưng vẫn đảm bảo thoải mái khi mặc. \nThiết kế basic với cổ - tay áo bo rib, màu sắc thanh lịch phù hợp với nhiều loại trang phục, quý ông dễ dàng mặc cả khi đi làm và đi chơi \nChất liệu: \n62% Polyester giúp áo siêu mỏng nhẹ, bề mặt vải trơn bóng, màu sắc sắc nét và bền màu qua quá trình sử dụng \n38% Seawool Polyester chống tĩnh điện, thoáng khí, bảo vệ da và khả năng kiểm soát mùi vượt trội \nMàu sắc: Trắng 1\nSize: S,M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh.\nKhông sử dụng chất tẩy mạnh để tránh làm hỏng chất liệu và màu sắc.\nỦi ở nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết.\nPhơi trong bóng râm để giữ độ bền màu và chất liệu.\n\nLƯU Ý:\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh do ánh sáng khi chụp ảnh hoặc màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 59500000,
      "sale_price": 476000,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/j_673ae8303c0542ac92420fb4bdb56f51.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01809_7274ba1b2896499c930f9060e1b25bb3_2ca60d469c374c98b2502d799211ac39.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01803_6c1ef48dd3cb4d2eb24c3135c63dbec7_bf6d14c0bda64babaf9d46f0ccdb26f9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01815_ba07c3cc4344414e8214fcd1d8983f07_59af48f9deda462a9bf0f8be5d91fa18.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01818_97669138a31247209e3cd0f7b6dc94f0_fbbf3f0caf744bc9977b79e5095d832f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01819_68494d60520444c583b3db870eac9965_43b1609940cd4568a954721e95712c20.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01806_1e0c8b3eed9349ab8304d5a2e1b9df65_7c61a4d2da5744f69bc32d813abfd421.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1701.1_a459f5cc5415441c99bda2363da3f2c9_1d9979a8670d4839a95a93fa7f764000.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1701_7102985f210f468c901f1b731e85b8d8_ea1a7293c62f48f0a9f33eb28f01443e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1702_43cce817f0bc45ab871da2f776db3101_3494a73d70b5436e9e60cc00ed20c333.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-elite-polo-nam-trang-aristino-slim-fit-aps072s3ec",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:12.489Z",
      "updated_at": "2025-12-24T18:55:12.489Z"
    },
    {
      "id": 31,
      "name": "[Combo 2] Áo Thun Nam Basic Aristino ATS001EXP02",
      "description": "Tên sản phẩm: [Combo 2] Áo Thun Nam Basic Aristino ATS001EXP02\nMã sản phẩm: ATS001EXP02\nThiết kế:\nÁo T-shirt phom dáng suông nhẹ, mang lại cảm giác dễ chịu khi mặc. Thiết kế basic đơn giản, dễ dàng kết hợp với các trang phục khác.\nChất liệu: 100% Cotton tự nhiên:\n100% Cotton tự nhiên: Mang đến sự mềm mại, xốp nhẹ, thấm hút tốt và thoáng khí trong mọi mùa. \nChất liệu giúp áo giữ được độ đứng dáng vừa phải, tạo cảm giác thoải mái khi mặc suốt cả ngày.\nMàu sắc: Trắng\nSize: M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để duy trì độ bền và form dáng.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.",
      "brand": "Aristino",
      "base_price": 23100000,
      "sale_price": 184800,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7088434583089_1d7dc002f5718c8a76e4e1db137f783e_7f6b31453f57476c9e0721d4efa88594.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7088434536057_e17f7ce2d3c6f73ef0155f81dbb3cdc4_3d2fd89040de43628ee797aabd64e022.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0057.1_825802c52cc94c328cb4f_434b30c3a5df4724a8da30ffddbe86a2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0057_173bcc72db324a64b7ff577_b54144f5c1cc4d5a91eb0342e2201c0f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0058_0c5a7e99c95e49c4b90fc4b_e7373b2a9cc7454b9879e7f9753c3691.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0060_89c026c5192f4c2587a50f1_f8eaeca501ed4bb3adbb528a01ecbc89.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0059_c9ef9b3975344d29a2a0625_c57f25500e444478bad40573e74d4518.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "combo-2-ao-thun-nam-basic-aristino-ats001exp02",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:30.474Z",
      "updated_at": "2025-12-24T18:55:30.474Z"
    },
    {
      "id": 32,
      "name": "[Combo 3] Áo Thun Nam Basic Aristino ATS001EXP03",
      "description": "Tên sản phẩm: [Combo 3] Áo Thun Nam Basic Aristino ATS001EXP03\nMã sản phẩm: ATS001EXP03\nThiết kế:\nÁo T-shirt phom dáng suông nhẹ, mang lại cảm giác dễ chịu khi mặc. Thiết kế basic đơn giản, dễ dàng kết hợp với các trang phục khác.\nChất liệu: 100% Cotton tự nhiên:\n100% Cotton tự nhiên: Mang đến sự mềm mại, xốp nhẹ, thấm hút tốt và thoáng khí trong mọi mùa. \nChất liệu giúp áo giữ được độ đứng dáng vừa phải, tạo cảm giác thoải mái khi mặc suốt cả ngày.\nMàu sắc: Trắng\nSize: M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để duy trì độ bền và form dáng.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.",
      "brand": "Aristino",
      "base_price": 34700000,
      "sale_price": 260250,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7088434536041_08bcf3cfd9a815e0d625f672222ab2b4_e1279826c4a84e7aae8040177f63b52d.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7088434536057_e17f7ce2d3c6f73ef0155f81dbb3cdc4_873ca09e0f4c44f68ae6f9b5c620b5cc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0057.1_825802c52cc94c328cb4f_7236861c8913445f89b6891937db2988.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0057_173bcc72db324a64b7ff577_3274fefd010f44f2aba4d666f9876ce7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0058_0c5a7e99c95e49c4b90fc4b_efba211a702d4d449cf80f7e8baba5ba.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0060_89c026c5192f4c2587a50f1_5c256a8d37814aa19ce06ed88b7eca45.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0059_c9ef9b3975344d29a2a0625_be89c47f4c014248babd713bae0fc093.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "combo-3-ao-thun-nam-basic-aristino-ats001exp03",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:38.622Z",
      "updated_at": "2025-12-24T18:55:38.622Z"
    },
    {
      "id": 33,
      "name": "[Mua 1 tặng 1] Áo Thun T-shirt Nam Aristino ATS001EDP01",
      "description": "Tên sản phẩm: Áo Thun T-shirt Nam Aristino ATS001EDP01\nMã rút gọn: ATS001EDP01\nThiết kế:\nÁo T-shirt phom dáng suông nhẹ, mang lại cảm giác dễ chịu khi mặc. Thiết kế basic đơn giản, dễ dàng kết hợp với các trang phục khác.\nChất liệu: 100% Cotton tự nhiên:\n100% Cotton tự nhiên: Mang đến sự mềm mại, xốp nhẹ, thấm hút tốt và thoáng khí trong mọi mùa. \nChất liệu giúp áo giữ được độ đứng dáng vừa phải, tạo cảm giác thoải mái khi mặc suốt cả ngày.\nMàu sắc: Trắng\nSize: M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để duy trì độ bền và form dáng.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.",
      "brand": "Aristino",
      "base_price": 105000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/frame-33914_a38dd8015be74f9a9f53637a7b478da6.jpg",
        "https://cdn.hstatic.net/products/200000887901/frame-33915_37e1979e086c44679439562fefadbc6d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cce3a024fd984ec39ce28961cf892297.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2914_c8ecc2de75bc4897b6949bec7829e3e8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cfccb694b4984e1ea5a97694279a7b7d.jpg",
        "https://cdn.hstatic.net/products/200000887901/att001edp01_2_760bf6d1d772488ea00855bb773ef2c8.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "mua-1-tang-1-ao-thun-t-shirt-nam-aristino-ats001edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:47.610Z",
      "updated_at": "2025-12-24T18:55:47.610Z"
    },
    {
      "id": 34,
      "name": "Áo Thun Giữ Nhiệt Nam Aristino Body Fit ALT008BS0",
      "description": "Tên Sản Phẩm: Áo Thun Giữ Nhiệt Nam Aristino Body Fit ALT008BS0\nMã rút gọn: ALT008BS0\nKiểu dáng: Body fit\nThiết kế:\nÁo thun dài tay phom dáng Body fit ôm tôn dáng nhưng vẫn mang lại sự thoải mái khi hoạt động cả ngày.\nHọa tiết in hiện đại cùng mắc sắc trung tính tạo phong cách trẻ trung, thời thượng.\nChất liệu:\n67% cotton: mềm mại, thoáng khí, thấm hút tốt\n28% Visco (Crabyon): mềm mại, thoáng khí, thấm hút tốt hơn cotton, ít nhăn và có độ bền cao\n5% spandex: tạo độ co giãn\nMàu sắc: Đen 09, Xám 35\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5259_b56c13f79ca74d03af5bc6b36f5f115c.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5263_7c539e8a69e2463daffdb58f4de04f4a.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5267_cbfccd1b8fa84ee0b3e99e82c1eb897e.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5269_c6cec6c9f53b4661a8d07357720ab1f6.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5249_4ae5690ef1754a1eb3348e53432d1e32.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6543.1_bf606e2b45a64799ada14ecf6c20541b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6543_51625bdd3f374c8bb7c3b5d5eb45599d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6544_21c1b73a70ab46f0ad18136185508543.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6547_355d3864e1204077bb18df544ef60dd6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6545_ca166b89dc974630ac5f73f33420665c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-giu-nhiet-nam-aristino-body-fit-alt008bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:55:55.699Z",
      "updated_at": "2025-12-24T18:55:55.699Z"
    },
    {
      "id": 35,
      "name": "Áo Thun Giữ Nhiệt Nam Aristino Body Fit ALT010BS0",
      "description": "Tên Sản Phẩm: Áo Thun Giữ Nhiệt Nam Aristino Body Fit ALT010BS0\nMã rút gọn: ALT010BS0\nKiểu dáng: Body Fit/ Dáng ôm\nThiết kế:\nÁo thun dài tay phom dáng Body fit ôm tôn dáng nhưng vẫn mang lại sự thoải mái khi hoạt động cả ngày.\nCổ ôm sát, giữ ấm tốt vào mùa đông.\nMàu sắc trung tính, dễ dàng kết hợp với nhiều loại trang phục khác nhau.\nChất liệu:\n28% Visco (Modal) mềm mại, thoáng khí, thấm hút tốt hơn cotton, ít nhăn và có độ bền cao.\n67% Cotton (Bông) thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n5% Spandex tạo độ co giãn\nMàu sắc: Đen 1, Xanh tím than 8\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5187_30da7f6435a84453ae970a5e89504a49.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5193_1f0923dc668a4024a8829780e0d22d98.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5199_ddf33e3df88244e0a89a036b54ccf871.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5200_3d86794bbcaf4cf6bda6fc92bbb66836.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5178_10ea34604e7a41039d2c250b15203ddb.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-giu-nhiet-nam-aristino-body-fit-alt010bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:04.586Z",
      "updated_at": "2025-12-24T18:56:04.586Z"
    },
    {
      "id": 36,
      "name": "Áo thun Nam Aristino Cotton ATS004AZ",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton ATS004AZ\nMã rút gọn: ATS004AZ\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế: \nÁo T.shirt phom dáng Regular Fit suông nhẹ thoải mái mà vẫn đảm bảo vừa vặn tôn dáng người mặc.\nThiết kế cổ tròn dệt rib dễ mặc. \nHọa tiết in trên áo mang đến cho người mặc diện mạo ấn tượng. Màu sắc nam tính dễ kết hợp các trang phục khác.\nChất liệu: 57% Cotton, 38% Poly, 5%SPD\nMàu sắc: Xanh biển 197 MF, Đen 1, Đen 9 mf, Trắng 6\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và giữ màu sắc tươi mới.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng mạnh để giữ màu sắc và phom dáng áo.\nLưu trữ áo ở nơi khô ráo, thoáng mát để duy trì chất lượng sản phẩm.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 395000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/tino-cotton-regular-fit-ats004az__22__944bf1b0377842498229876a2c1c4027_89d59a5618c347ecb94041ad16e08d35.jpg",
        "https://product.hstatic.net/200000887901/product/tino-cotton-regular-fit-ats004az__23__103efa921c3249638c71049f0467150f_ea23cd944b77463d8658dd7569f39255.jpg",
        "https://product.hstatic.net/200000887901/product/tino-cotton-regular-fit-ats004az__24__dc769772a05c46489347d58e5845b73a_843b3294c6fc4e17bad5e352ba5ee86a.jpg",
        "https://product.hstatic.net/200000887901/product/tino-cotton-regular-fit-ats004az__25__436f1011103648e7a429bd44e558fcdd_480b26a5bee64ae8866e93e89b496954.jpg",
        "https://product.hstatic.net/200000887901/product/tino-cotton-regular-fit-ats004az__20__65497c6b33a84a5eb6e0387fc136672c_94ebc703580e41e483d750445f06c53f.jpg",
        "https://product.hstatic.net/200000887901/product/stino-cotton-regular-fit-ats004az__6__d4970301e0854c5c8818e748a9baed73_790e4170bb22405b8a374d6c7c0ba825.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5b413635ebc74421923cdd32e66a4664.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7fffb99a18d248c2940c72f41c7fe10b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b9104f35ab0e48159fe2cba0c42a27f3.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_940bb435fd9741888a0c1f5103373102.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-ats004az",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:12.617Z",
      "updated_at": "2025-12-24T18:56:12.617Z"
    },
    {
      "id": 37,
      "name": "Áo thun Nam Aristino Cotton ATS009AZ",
      "description": "Tên sản phẩm:Áo thun Nam Aristino Cotton ATS009AZ\nMã rút gọn: ATS009AZ\nKiểu dáng: Trattoria\nThiết kế: \nÁo thun ngắn tay phom Trattoria mới suông rộng, tạo cảm giác thoải mái khi vận động.\nThiết kế khỏe khoắn, màu sắc cơ bản dễ kết hợp với nhiều trang phục khác mang tới diện mạo trẻ trung, lịch lãm cho người mặc. Họa tiết logo Aristino thêu trên ngực áo tạo điểm nhấn ấn tượng.\nChất liệu: 90% Polyester, 10% Spandex\n74% Cotton giúp áo mềm mại, xốp nhẹ và thoáng khí.\n26% Polyester giúp áo mỏng nhẹ, có độ trơn trượt, màu sắc nét và giữ màu tốt theo thời gian.\nMàu sắc: Đen 1, Trắng 6, Xanh Rêu 96, Nâu 156\nSize: XS, S, M, L, XL, XXL, XXXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và giữ màu sắc tươi mới.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng mạnh để giữ màu sắc và phom dáng áo.\nLưu trữ áo ở nơi khô ráo, thoáng mát để duy trì chất lượng sản phẩm.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 450000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_3f694e4b23b8462591bda49d9a2d8cbd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0200976d3bd54587baf469c465d690f5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ec20dc8d7aaa4c97bd018846dfa04702.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9a63312f0d884f63a70def531efc8b4f.jpg",
        "https://product.hstatic.net/200000887901/product/dsc00493_b0422c6497314dad9cd87bbb44777a6a.jpg",
        "https://product.hstatic.net/200000887901/product/hun-nam-aristino-cotton-ats009az__20__ca0542698baf4bf3b8654386b277591a_e1919bf04ff0460491c13c05e3555b9e.jpg",
        "https://product.hstatic.net/200000887901/product/hun-nam-aristino-cotton-ats009az__19__6cf1f4ef29dc44c1afa3d4f8514175dd_bf3b1cb9ea654c05ad23f9996d52f047.jpg",
        "https://product.hstatic.net/200000887901/product/hun-nam-aristino-cotton-ats009az__17__1076d74a71654aaf8485b065bbdc90f3_d96166d307044b30a1bcdad7980b1bae.jpg",
        "https://product.hstatic.net/200000887901/product/hun-nam-aristino-cotton-ats009az__18__cdd7831c1d1144d989af3b26937c747a_51bc89b3ee0946b189ff22356b6f6ce7.jpg",
        "https://product.hstatic.net/200000887901/product/hun-nam-aristino-cotton-ats009az__16__af79d0f459d243ceb22f617792e8c2b6_4b523f4d7d804d05aa366d29f31dea3e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-ats009az",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:20.684Z",
      "updated_at": "2025-12-24T18:56:20.684Z"
    },
    {
      "id": 38,
      "name": "Áo thun Nam Aristino Cotton ATSM02AZ",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton ATSM02AZ\nMã rút gọn: ATSM02AZ\nKiểu dáng: Trattoria\nThiết kế: \nÁo thun ngắn tay phom Trattoria mới suông rộng, tạo cảm giác thoải mái khi vận động.\nThiết kế khỏe khoắn, màu sắc cơ bản dễ kết hợp với đa dạng trang phục.\nNằm trong BST Xuân Hè 2024, được thiết kế với họa tiết chữ ký lấy cảm hứng từ Hoa trên đảo Vịnh Hạ Long tạo điểm nhấn, mang đến phong cách thời thượng và lịch lãm cho người mặc.\nChất liệu: 90% Polyester, 10% Spandex\n74% Cotton giúp áo mềm mại, xốp nhẹ và thoáng khí.\n26% Tencel giúp vải mềm mát, thoáng khí, ít co rút khi sử dụng.\nMàu sắc: Be 2\nSize: M, L, XL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và giữ màu sắc tươi mới.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng mạnh để giữ màu sắc và phom dáng áo.\nLưu trữ áo ở nơi khô ráo, thoáng mát để duy trì chất lượng sản phẩm.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 475000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc02559_2b2c0f6d6a2c423682836426204fd882.jpg",
        "https://product.hstatic.net/200000887901/product/dsc02558_5b7925a05f214a55a786c7915c690d4a.jpg",
        "https://product.hstatic.net/200000887901/product/dsc02560_c1bc6f26ed9d4d64b35e21764873dcc3.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_283918fe9b4143eea24ed157507cd80b.jpg",
        "https://product.hstatic.net/200000887901/product/dsc02564_898a7b131a19475a9157a67f1c6d9725.jpg",
        "https://product.hstatic.net/200000887901/product/dsc02547_158b19e191034b5caaaac6190f3f53a5.jpg",
        "https://product.hstatic.net/200000887901/product/thun-nam-aristino-cotton-atsm02az__5__5ed2c8e6cd32446aa0545879873199ba_32d45f9d73f34e8a9f2bc0c6f6273137.jpg",
        "https://product.hstatic.net/200000887901/product/thun-nam-aristino-cotton-atsm02az__4__d0a52cadc99c43ad837a1573755eb46d_af71db35abc84e0293f02856b500f5e7.jpg",
        "https://product.hstatic.net/200000887901/product/thun-nam-aristino-cotton-atsm02az__2__a7dea92aa9e941a281b5c5d507193d29_33800c3cf0b6438c89cb42d72c89b27a.jpg",
        "https://product.hstatic.net/200000887901/product/thun-nam-aristino-cotton-atsm02az__3__f2c3adbe59064680b1eadb454a3e8d1e_937531b223a44c2ab9739d758f37a4ee.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-atsm02az",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:28.012Z",
      "updated_at": "2025-12-24T18:56:28.012Z"
    },
    {
      "id": 39,
      "name": "Áo thun Nam Aristino Cotton Organic ATS012S3",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton Organic Regular Fit ATS012S3\nMã rút gọn: ATS012S3\nKiểu dáng: Regular Fit\nThiết kế:\nÁo thun phom Regular Fit, suông nhẹ, mang lại cảm giác thoải mái khi vận động.\nThiết kế khỏe khoắn với màu sắc cơ bản, dễ dàng kết hợp với nhiều trang phục khác, giúp người mặc có diện mạo trẻ trung và lịch lãm.\nHọa tiết logo Aristino được sắp xếp ấn tượng, tạo điểm nhấn cho toàn bộ trang phục.\nChất liệu: 92.5% Cotton, 7.5% Spandex\n92.5% Cotton: Mềm nhẹ, thấm hút tốt, thoáng khí trong mọi mùa, đồng thời giữ được độ đứng dáng vừa phải.\n7.5% Spandex: Tạo độ co giãn cho áo, giúp người mặc thoải mái khi vận động.\nMàu sắc: Trắng 6, Xanh tím than 139, Xanh biển 246, Rêu 54\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để tránh làm hỏng logo.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất liệu.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 39500000,
      "sale_price": 197500,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_3051ad4350a34bfb990bdd709a1bf0be_c9d315135c974e3bad371bd3634ce3a0.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_8383fcc3f7cf40fbaf9a05f2c22e542e_7543ade2254a43a1b6b6cb3b57ecd3b2.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_bf504b0ebcb94387a9b076df1f2e9fd5_d643d0438dca42beba7d4126a7903323.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_7acb29f26ba0418ea893f9ed01fcee4d_69e338c754ec41768e67c582fe755e3f.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_c32d45bf6e334c97817bf0269994b04c_d6f838db0cbb4e4fa6787fdd1173d3b4.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_642ccb6f41cd486caf19c5e7cc1f4c2a_93cb07cbb93b43a98e58ed0cf1fbfe8e.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats012s3_cfe149ac76664b479db037ccb7404336_269dd57b62ff42a18428ec8b7102c151.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-organic-ats012s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:35.705Z",
      "updated_at": "2025-12-24T18:56:35.705Z"
    },
    {
      "id": 40,
      "name": "Áo Thun Nam Aristino Cotton Organic ATS022S3",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton organic Regular Fit ATS022S3\nMã rút gọn: ATS022S3\nKiểu dáng: Dáng vừa / Regular Fit\nThiết kế: \nÁo T-shirt phom dáng Regular Fit, suông nhẹ thoải mái, đảm bảo vừa vặn và tôn dáng người mặc. \nThiết kế cổ tròn đơn giản cùng họa tiết in trước ngực tạo nên vẻ ngoài ấn tượng. \nMàu sắc nam tính, dễ dàng kết hợp với các trang phục khác, mang lại vẻ lịch lãm và hiện đại.\nChất liệu: 97% cotton organic, 3% spandex\n97% Cotton: Thoáng khí, thấm hút mồ hôi tốt và thân thiện với làn da, mang lại sự thoải mái tối đa.\n3% Spandex: Tạo độ co giãn nhẹ, giúp áo linh hoạt và dễ chịu khi vận động.\nMàu sắc: Đen 1, Xanh tím than 11, Trắng\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu cotton và giữ áo luôn tươi mới.\nKhông sử dụng chất tẩy mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng mạnh để giữ màu sắc và độ mềm mại của vải.\nLưu trữ áo ở nơi khô ráo, thoáng mát để duy trì chất lượng sản phẩm.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 39500000,
      "sale_price": 197500,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_ca9d432bd4c844e08f00364550a14d80_90640a888f1246a7892599261526b387.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_6a6dafcc3f6d4c06a73114fbccf85420_434a3843e22f4ea29232992e93d64bc7.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_3aa50d000c9246228ee7fe2e1354570d_915a45c954684d9b917d9ad4b8836181.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_5cc3f9716007433aa7c6b8a399ada50f_5a0ea1cdae144972a51a7c9ff1728272.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_410bd879c76e426abeef5a8afa57904f_f26cf161ae634202964a2f9805922255.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_db72c5323b6a48afbe82e34f145d1562_81b8a63ebc784fc7ae64b733796fb79b.jpg",
        "https://product.hstatic.net/200000887901/product/o-cotton-organic-regular-fit-ats022s3_450eab5e62e241be81815c57d1ca38af_c8ae4c67f68c4eb4b03d94a008f7282f.jpg",
        "https://product.hstatic.net/200000887901/product/img_3797_-_copy_3ad97f68439d413c81dca2b97402a006_6550aed895d24e0a8c700ea1b3e8d76e.jpg",
        "https://product.hstatic.net/200000887901/product/img_3799_-_copy_37b48a523a994a1c9f423be5ea9060af_3ddefd7460e747e3b4f7757f7efc3966.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-organic-ats022s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:43.706Z",
      "updated_at": "2025-12-24T18:56:43.706Z"
    },
    {
      "id": 41,
      "name": "Áo thun Nam Aristino Cotton Regular Fit ATS008S3",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton Regular Fit ATS008S3\nForm dáng: Regular Fit\nThiết kế:\nÁo T-shirt phom dáng Regular Fit, suông nhẹ, tạo sự thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cổ tròn dệt rib dễ mặc, kết hợp với họa tiết in chữ trước ngực, mang đến diện mạo ấn tượng và cá tính. Màu sắc nam tính dễ dàng phối hợp với các trang phục khác.\nChất liệu:\n57% Cotton: Giúp áo có độ xốp nhẹ, đứng dáng vừa đủ.\n38% Polyester: Giữ màu sắc sắc nét và bền màu theo thời gian.\n5% Spandex: Tạo độ co giãn nhẹ, mang lại sự linh hoạt và thoải mái khi vận động.\nMàu sắc: Đen 9 MF, Xanh tím than 35 MF, Xanh biển 197 MF, Cam 61 MF\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ form dáng và chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu sắc và độ bền của áo.",
      "brand": "Aristino",
      "base_price": 35000000,
      "sale_price": 175000,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/_tc_9837x900x900x4_1dfbc9f7b6cc4572a74480bfe941fa1a_87c699604be647819abb6b3da5783963.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_9841x900x900x4_207a5f1f46424cfbad28178bdc0ce0a4_63b17271280b45e0a70e6c34df881287.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_9836x900x900x4_0dc99cc9d1a344db8fc1b399a7f91e12_ac75bf38b08340719cfdf103fbea1869.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_9842x900x900x4_a1b7f6b5e5024170b9aeeab6e3984eff_4f3cc58400d7408a88d3012f85d02d3d.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_9843x900x900x4_bf50bf6f3a1e431fa9a2112980de393d_13804ce28fe3484c986ade05ab7d9c30.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats008s3_79b241e03a2d4027a551bcecd6b10840_366d0ca6455c44ad94787e6f2a28986e.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats008s3_9e3463eedbdf4502a53b2d7ccc7ac86a_cc94109ca51349d28a9d495fb8cfcf4b.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats008s3_83ffe9172cbc493dbda70d496fe776c9_983fa6842ef84e6396c6c079839d328b.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats008s3_5ad36b9fe4384c79a7aa542809003048_9c047315bffd49a88937edf11c33904c.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats008s3_991bd00f95a84710b719a7af21e4e118_e6d2fc50fe5d48d2b4148114e2a3114f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-regular-fit-ats008s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:52.265Z",
      "updated_at": "2025-12-24T18:56:52.265Z"
    },
    {
      "id": 42,
      "name": "Áo thun Nam Aristino Cotton Regular Fit ATS015S3",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton Regular Fit ATS015S3\nMã rút gọn: ATS015S3\nKiểu dáng: Dáng vừa (Regular Fit)\nThiết kế:\nÁo T-shirt phom dáng Regular Fit, suông nhẹ, mang lại sự thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cổ tròn với họa tiết in trước ngực, mang đến diện mạo ấn tượng và cá tính. Màu sắc nam tính dễ dàng kết hợp với nhiều trang phục khác.\nChất liệu:\n95% Cotton: Giúp áo thoáng khí, thấm hút mồ hôi tốt, mang lại sự thoải mái và thân thiện với làn da.\n5% Spandex: Tạo độ co giãn nhẹ, mang lại sự linh hoạt khi vận động.\nMàu sắc: Trắng 6, Xanh Cổ Vịt 84, Xanh Aqua 50\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ phom dáng và chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu sắc và độ bền của áo.",
      "brand": "Aristino",
      "base_price": 375000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_bd29479d3bdf4a61b8b15068cec714b6_f0ddf7e7cddf4a388d9a55920f80bfe3.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_1844f73e53f543c48b9293c9ae40a50a_62228ee55e754b109cb07d0141fffa64.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_93e1272432c14ccab58e303cb772e200_976b5c0d00ab4e3db78ae7ec8bd5ac11.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_d3afbd0185a348b9acb7c0bee40a8a6c_38dd3c8127274115845904987682587e.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0460x900x900x4_0bae35728860420f9645efba0aa84a28_18a3cb1dbb094deeb8c7af31d959e210.jpeg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_a70deae8f7fe4667ab1ea14c74da493e_1df9c811bfcb4d70b8b07f0f49daa880.jpg",
        "https://product.hstatic.net/200000887901/product/img_6761x900x900x4_0b7b2fc9a1d5438fb4915aa5c89b7284_6cf3dfd253724d3990eb694b31a4a28d.jpeg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_b0a57a7db0c24d409c594defbaf92751_2f565e2816ad45d7912285f02ab7c7dc.jpg",
        "https://product.hstatic.net/200000887901/product/-aristino-cotton-regular-fit-ats015s3_f1c3339663e740e195c29683b1781985_b42a1cf23b4d4cd28d93a5fbf1927bb3.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-regular-fit-ats015s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:56:59.307Z",
      "updated_at": "2025-12-24T18:56:59.308Z"
    },
    {
      "id": 43,
      "name": "Áo thun Nam Aristino Cotton Slim fit ATS014S3",
      "description": "Tên sản phẩm: Áo Thun Nam Aristino Cotton Slim Fit ATS014S3\nMã rút gọn: ATS014S3\nKiểu dáng: Slim Fit\nThiết kế:\nÁo thun phom dáng Slim Fit ôm nhẹ, vừa vặn nhưng vẫn thoải mái khi vận động.\nThiết kế khỏe khoắn, màu sắc cơ bản dễ kết hợp với nhiều trang phục khác, mang lại diện mạo trẻ trung và lịch lãm. Họa tiết logo Aristino được sắp xếp ấn tượng, tạo điểm nhấn cho toàn bộ trang phục.\nChất liệu:\n92,5% Cotton: Giúp áo mềm nhẹ, thấm hút tốt và thoáng khí trong mọi thời tiết, đồng thời giữ được độ đứng dáng vừa đủ.\n7,5% Spandex: Tạo độ co giãn cho áo, mang lại sự thoải mái tối đa khi vận động.\nMàu sắc: Xanh Tím Than 139, Xanh Rêu 93, Xám 14\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nBảo quản nơi khô ráo, thoáng mát để tránh ẩm mốc và giữ màu sắc bền lâu. Tránh phơi dưới ánh nắng gắt.\n\nHướng dẫn giặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh để giữ form dáng và chất liệu vải.\nKhông sử dụng chất tẩy mạnh để tránh làm phai màu.\nỦi ở nhiệt độ thấp từ mặt trái để bảo vệ bề mặt vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác biệt do ánh sáng khi chụp ảnh hoặc màn hình hiển thị của khách hàng.",
      "brand": "Aristino",
      "base_price": 35000000,
      "sale_price": 175000,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/m-aristino-cotton-slim-fit-ats014s3-1_ec2049bc4c184d75a33bcc2c0df99467_d64495b3520c492d823439910218dc72.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0522_f51ed9469401453091dbeb7ce851296b_324ac3bc17b349fca9e85e68ddda29c9.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0524_1da634a71f6b4b04b2d7da93719b11f5_eef632be778940989f6a5860b373dae1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-slim-fit-ats014s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:09.202Z",
      "updated_at": "2025-12-24T18:57:09.202Z"
    },
    {
      "id": 44,
      "name": "Áo Thun Nam Aristino Cotton Slim fit ATS023S3",
      "description": "Tên sản phẩm: Áo thun Nam Aristino Cotton Slim fit ATS023S3\nMã rút gọn: ATS023S3\nKiểu dáng: Slim Fit\nThiết kế:\nÁo thun phom dáng Slim Fit ôm nhẹ, vừa vặn nhưng vẫn thoải mái khi vận động.\nThiết kế khỏe khoắn, màu sắc cơ bản dễ kết hợp với nhiều trang phục khác, mang lại diện mạo trẻ trung và lịch lãm. Họa tiết chữ Aristino sắp xếp ấn tượng, tạo điểm nhấn cho toàn bộ trang phục.\nChất liệu:\nCotton: Giúp áo mềm nhẹ, thấm hút tốt và thoáng khí trong mọi thời tiết, đồng thời giữ được độ đứng dáng vừa đủ.\nMàu sắc: Đen 9 in, Xanh cổ vịt 84 in, Trắng 6 in\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nBảo quản nơi khô ráo, thoáng mát để tránh ẩm mốc và giữ màu sắc bền lâu. Tránh phơi dưới ánh nắng gắt.\n\nHướng dẫn giặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh để giữ form dáng và chất liệu vải.\nKhông sử dụng chất tẩy mạnh để tránh làm phai màu.\nỦi ở nhiệt độ thấp từ mặt trái để bảo vệ bề mặt vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác biệt do ánh sáng khi chụp ảnh hoặc màn hình hiển thị của khách hàng.",
      "brand": "Aristino",
      "base_price": 35000000,
      "sale_price": 175000,
      "category_id": 3,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_df30ef5d1020448ca3eb7fb1804fa6cf_c3b5e05216844591bf544c5c58edf664.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_7381197afdc54a21b01558ddf36f778a_99a1f01b941d469eb816bc31c01aa37a.jpg",
        "https://cdn.hstatic.net/products/200000887901/_tc_0497_8066bec6edea4e21ab31cecfc5289416_19045d1a6a6c4764a7a3ec67f6b981ed.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_e5fce38c275242d992ef1f33794a8530_2996917bfd7c4c8c9263d6a2ba6c39ef.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_eede647b33334d71b4cf8490589c4062_972dd9f5f1eb4e05b92414372c9ddc68.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_4de2b795fe86450f9bf0ee99b9b2fd02_4710a199ec20438c9b871a4ee7563510.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_888f0b4fd7a9470398179ee8a0a76d28_469bd107e7b744ab969e087a4871d550.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1484_591f5bdc92d94e98aba6c53cd2744cec_9f0362adc57e4c7696310965f333860a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1485_6038a2772cb04a6fb26eb05b5d62251a_911126f0260a41b1a31d5e67caf732dd.jpg",
        "https://cdn.hstatic.net/products/200000887901/nam-aristino-cotton-slim-fit-ats023s3_ee9810724528493481ea53dfb6cbcb86_c8d0f735f4c342dcbcc9811e4d84f206.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-cotton-slim-fit-ats023s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:17.282Z",
      "updated_at": "2025-12-24T18:57:17.282Z"
    },
    {
      "id": 45,
      "name": "Áo Thun Nam Aristino Regular ATS024S3",
      "description": "Tên sản phẩm: Áo Thun Nam Aristino Regular ATS024S3\nMã rút gọn: ATS024S3\nKiểu dáng: Regular fit/ Dáng suông\nThiết kế: \nÁo thun phom Regular fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc\nThiết kế khỏe khoắn, màu sắc cơ bản dễ kết hợp với nhiều trang phục khác mang tới diện mạo trẻ trung, lịch lãm cho người mặc \nChất liệu: \n87% Nylon cho bề mặt vải độ mịn mượt, mỏng nhẹ\n13% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Trắng 6 kẻ jacquard, Xanh biển 20 kẻ jacquard, Xanh cổ vịt 11 kẻ jacquard\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và giữ màu sắc tươi mới.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi trực tiếp dưới ánh nắng mạnh để giữ màu sắc và phom dáng áo.\nLưu trữ áo ở nơi khô ráo, thoáng mát để duy trì chất lượng sản phẩm.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị của khách hàng.",
      "brand": "Aristino",
      "base_price": 375000,
      "sale_price": null,
      "category_id": 3,
      "images": [
        "https://product.hstatic.net/200000887901/product/aristino-nylon-regular-fit-ats024s3-1_26dc58a708874f8b90641731fe98bec5_88437039e61543a4af1de4e6227eafc1.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0103_30b0d9bad6ea48ee822796ad2c077553.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0104_cc789a1dca974bd181d46fd66bff0e37.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0113_2e7aaadc73864861b34bb85c8902a75c.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0115_d8d1db2903f44882b77e00c48ea22734.jpg",
        "https://product.hstatic.net/200000887901/product/_tc_0100_0bca1fcf65a549439f6689b12b3bdd81.jpg",
        "https://product.hstatic.net/200000887901/product/img_2541.1_e11a88b1c6864fa8aecec8f5f42eec4a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d5d67679785949c7b251fb09305ae7dd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_3b154d5cb2ec424793d2a098fb7b25dd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8e7c8cc6eaef41e2b3ba5eee06c61ebb.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-thun-nam-aristino-regular-ats024s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:23.555Z",
      "updated_at": "2025-12-24T18:57:23.555Z"
    },
    {
      "id": 46,
      "name": "Áo Khoác Lông Vũ Nam Aristino Business 1JK004BS0",
      "description": "Tên sản phẩm: Áo Khoác Lông Vũ Nam Aristino Business 1JK004BS0\nMã sản phẩm: 1JK004BS0\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo khoác Aristino Buisiness thuộc dòng hàng cao cấp.\nLớp giữa của áo là lông vũ mang đến khả năng cách nhiệt tốt và giúp áo có trọng lượng nhẹ, là lựa chọn lý tưởng cho mùa đông lạnh giá.\nChất liệu Polyester giúp áo bền màu, chống nhăn và giữ phom dáng vượt trội.\nChất liệu: \nLớp ngoài : 100% Polyester\nLớp giữa: Lông vũ (85/15)\nLớp lót: 100% Polyester\nMàu sắc: Xanh tím than 29\nSize: S/M/L/XL/XXL\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino Business",
      "base_price": 6500000,
      "sale_price": null,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02277_e5a412b332e3452ab2149bb262c25d7b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02282_73951b7cef154ccfab4cbdeb17657c36.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02280_c7973b3e70a54a5c884cac002ac429e4.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02287_173a6e2140ad4d36b05920950d63979a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02275_04368db9fbb743a29f99d35e1ca5199e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02286_2ba937e18fd44641bb34a35026031426.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4125.1_9e577aa34e2c432c98b9bdd7fa9ffb37.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4125_6c0e7c4edad844a1b62c830465b152ba.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4126_7be22b4b6750436782006763453e609b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4127_062b71f743d24ebea25acfc160b1b089.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-long-vu-nam-aristino-business-1jk004bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:42.354Z",
      "updated_at": "2025-12-24T18:57:42.354Z"
    },
    {
      "id": 47,
      "name": "Áo Khoác 2 lớp Nam Xanh Rêu Aristino Regular Fit AJK606EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 lớp Nam Xanh Rêu Aristino Regular Fit AJK606EDP01\nMã sản phẩm: AJK606EDP01\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nCông nghệ 2 lớp: ngoài cản gió trong lót êm nhẹ giúp giữ ấm từ 18–25°C. Hợp mùa đông Việt Nam, đi làm, chạy xe, cafe đều thoải mái.\nChất vải bền, hạn chế xù, giặt máy mái. Nhờ blend sợi tối ưu: giữ màu tốt, ít biến dạng sau giặt\nKhông quá ôm, không quá rộng, tôn vai và nam tính hợp với mọi dáng người\nMàu sắc thời thượng, phối được với mọi outfit đi làm, Smart casual, cuối tuần. Dễ match các màu trung tính hay màu kinh điển như navy, đen, beige, nâu\nCổ bẻ chuẩn quý ông: tạo đường nét sắc sảo, chỉnh tề.\nThân cắt bổ 3-panel: tôn vóc dáng, che khuyết điểm, tạo khối vai–ngực mạnh mẽ.\nKhuy bấm kim loại tối giản: sang trọng, hiện đại, đậm khí chất đô thị. \nPhong cách “Urban Gentleman” Quý ông Đô thị phối được với áo len, polo, sơ mi, half zip, t-shirt, quần khaki, denim cho cả đi làm lẫn cuối tuần. \nTrucker Jacket là lựa chọn của quý ông Aristino đương đại: mạnh mẽ, chỉnh tề, tinh tế, dễ phối và phù hợp mọi nhịp sống đô thị\nChất liệu:\n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Xanh Rêu\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00240_f709d2d7e34d428ebec8bae60e9b8d71_8ec1cd29af034c258478fc7e0f416a08.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00228_113e923123b74103baea67f8134e8fa9_6bd7bc3b7b874c6a8b3c700340c90bb6.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00242_1527acd85beb45ad98fc31f65c2249e5_c045ec3e7f8e489c96a8c76296edcc1b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00243_fbdf1f8ea1954da080e898b4dd446726_4e2e99df9aec44a7afe4cc1be3eb567c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00245_29a34745cb814e91ae77ec26a6e3e268_62fb861f21e449f399fecc0793b014a5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00219_18669a05270c4df280a25133cdb55dfc_6c35b924eee847c296c756c68fe9bf97.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-xanh-reu-aristino-regular-fit-ajk606edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:50.173Z",
      "updated_at": "2025-12-24T18:57:50.173Z"
    },
    {
      "id": 48,
      "name": "Áo Khoác 2 lớp Nam Xám Aristino Regular Fit AJK606EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 lớp Nam Xám Aristino Regular Fit AJK606EDP01\nMã sản phẩm: AJK606EDP01\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nCông nghệ 2 lớp: ngoài cản gió trong lót êm nhẹ giúp giữ ấm từ 18–25°C. Hợp mùa đông Việt Nam, đi làm, chạy xe, cafe đều thoải mái.\nChất vải bền, hạn chế xù, giặt máy mái. Nhờ blend sợi tối ưu: giữ màu tốt, ít biến dạng sau giặt\nKhông quá ôm, không quá rộng, tôn vai và nam tính hợp với mọi dáng người\nMàu sắc thời thượng, phối được với mọi outfit đi làm, Smart casual, cuối tuần. Dễ match các màu trung tính hay màu kinh điển như navy, đen, beige, nâu\nCổ bẻ chuẩn quý ông: tạo đường nét sắc sảo, chỉnh tề.\nThân cắt bổ 3-panel: tôn vóc dáng, che khuyết điểm, tạo khối vai–ngực mạnh mẽ.\nKhuy bấm kim loại tối giản: sang trọng, hiện đại, đậm khí chất đô thị. \nPhong cách “Urban Gentleman” Quý ông Đô thị phối được với áo len, polo, sơ mi, half zip, t-shirt, quần khaki, denim cho cả đi làm lẫn cuối tuần. \nTrucker Jacket là lựa chọn của quý ông Aristino đương đại: mạnh mẽ, chỉnh tề, tinh tế, dễ phối và phù hợp mọi nhịp sống đô thị\nChất liệu: \n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Xám\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00169_d8a92935c9d24b0b8b2182622c19167a_74ac3c22979245f4aa79748dca4fe6b3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00160_12e96db0f6934af1a875be89fbfdfaad_077392b9593e4eb6b10d161d8ae84cb9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00164_cc8401dda2fc49f5883137a79cd7f22d_2e9b66058a18490bbd1bfb57609a2c0d.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00175_be28a88e4acc4cc49a0be4050fe0fc1d_6b4c5195914948519620b39d254b0100.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00178_add400a037bf40e589cd86d9767f5e7b_13f1ee0e109f4795a26f1bfee6648b84.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00179_9a681e209e854b958a15200164d6396d_8f0e6e0d41cd42068d4fa6d9b717a5e8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00153_e5a728c85b3642778514652bca0057a3_d4ed02d012f943a188e4994bdec4af75.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-xam-aristino-regular-fit-ajk606edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:57:56.447Z",
      "updated_at": "2025-12-24T18:57:56.447Z"
    },
    {
      "id": 49,
      "name": "Áo Khoác 2 lớp Nam Nâu Aristino Regular Fit AJK606EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 lớp Nam Nâu Aristino Regular Fit AJK606EDP01\nMã sản phẩm: AJK606EDP01\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nCông nghệ 2 lớp: ngoài cản gió trong lót êm nhẹ giúp giữ ấm từ 18–25°C. Hợp mùa đông Việt Nam, đi làm, chạy xe, cafe đều thoải mái.\nChất vải bền, hạn chế xù, giặt máy mái. Nhờ blend sợi tối ưu: giữ màu tốt, ít biến dạng sau giặt\nKhông quá ôm, không quá rộng, tôn vai và nam tính hợp với mọi dáng người\nMàu sắc thời thượng, phối được với mọi outfit đi làm, Smart casual, cuối tuần. Dễ match các màu trung tính hay màu kinh điển như navy, đen, beige, nâu\nCổ bẻ chuẩn quý ông: tạo đường nét sắc sảo, chỉnh tề.\nThân cắt bổ 3-panel: tôn vóc dáng, che khuyết điểm, tạo khối vai–ngực mạnh mẽ.\nKhuy bấm kim loại tối giản: sang trọng, hiện đại, đậm khí chất đô thị. \nPhong cách “Urban Gentleman” Quý ông Đô thị phối được với áo len, polo, sơ mi, half zip, t-shirt, quần khaki, denim cho cả đi làm lẫn cuối tuần. \nTrucker Jacket là lựa chọn của quý ông Aristino đương đại: mạnh mẽ, chỉnh tề, tinh tế, dễ phối và phù hợp mọi nhịp sống đô thị\nChất liệu: \n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Nâu\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00631_1942f21bf9f744f8afcca4c35ce0138c_bb4d8d454f5c4d87a0d8aa4772fb3a4c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00635__2__20c343b22fb140e89f7240801c481da6_debf9318ab7b4619bb59d6b8974fa9fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00637__2__053429d4279249e8ac52940503b8180d_188ff09baee04501859f1d719d0cac2b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00640__2__ca4e0e64cd1f42a49fa37fe4f31dbe55_d42f827e89a040308bf0cdfa9ae61901.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00642_a54213464e90444b99720df75d7e5797_577a5e63f3084c929b2672c40c63d95f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00620_88feab86f6694646b8d5844190bac098_222ccf74ff4f43548223c9158a8e8473.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-nau-aristino-regular-fit-ajk606edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:03.207Z",
      "updated_at": "2025-12-24T18:58:03.207Z"
    },
    {
      "id": 50,
      "name": "Áo Khoác 2 Lớp Nam Nâu Bomber Aristino Regular Fit AJK600EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Nâu Bomber Aristino Regular Fit AJK600EDP01\nMã rút gọn: AJK600EDP01\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nThiết kế hiện đại và năng động với cổ bomber trẻ trung khỏe khoắn và 2 túi bên nổi bật, ấn tượng.\nCổ áo bo tròn đứng phom, phần gấu và tay áo cũng bo nhẹ, giúp diện mạo của quý ông luôn lịch lãm và chỉn chu.\nPhần ngực áo có chữ kỹ Aristino được thêu tỉ mỉ tạo nên dấu ấn thương hiệu.\nChất liệu: \nVải chính (Main fabric): \n92% Polyester \n8% spandex\n2. Vải lót (Lining): \n100% Polyester\n3. Vải phối (Secondary fabric): \n96% Polyester \n4% spandex\nMàu sắc: Nâu 17\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/aajk600edp01--_2__b351cf252ee74928b39de0ba590826ef.jpg",
        "https://cdn.hstatic.net/products/200000887901/aajk600edp01--_1__60e81017d8164c328f825ec377803298.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6347.1_9b712ad8dac6452fb50e7d605d336353.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6347_b3212e332d1b414bbc10a20cd8b5b1dd.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6348_1_d5096b4cf0fc4479afd4951e262db06e.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6349_39ba0b631db14658b9b92a18de914c60.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6350_132bbe01db3f4dfaaed5472811b33df3.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-nau-bomber-aristino-regular-fit-ajk600edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:09.592Z",
      "updated_at": "2025-12-24T18:58:09.592Z"
    },
    {
      "id": 51,
      "name": "Áo Khoác 2 Lớp Nam Aristino Regular Fit AJK036BS0",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Aristino Regular Fit AJK036BS0\nMã sản phẩm: AJK036BS0\nKiểu dáng: Dáng suông/ Regular\nThiết kế:\nThiết kế đảm bảo sự tối giản và sang trọng với cổ đức kinh điển.\nHai đường cắt may tối giản chạy ngang ngực tạo điểm nhấn tinh tế.\nTúi hai bên với đường bo cong mềm, tăng sự thời trang và tiện dụng.\nĐiểm nhấn tinh xảo ở khóa kéo khắc chạm họa tiết Đan Lát độc quyền của Aristino, đậm chất văn hóa Việt Nam.\nChất liệu: \nVải chính (Main fabric): 92% Polyester; 8% Spandex;\nVải lót (Lining): 100% Polyester\nMàu sắc: Xanh rêu 36\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi và bảo quản:\n\nTránh phơi dưới ánh nắng trực tiếp để bảo quản chất lượng vải.\nBảo quản nơi khô ráo, thoáng mát.\nGiặt tay hoặc máy ở chế độ nhẹ với nước lạnh.\nKhông sử dụng chất tẩy mạnh.\nPhơi trong bóng râm để giữ màu và độ bền của áo.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 2500000,
      "sale_price": null,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00256_80b9868191db4eb8812ebb3cf5bb24fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00259_4745f52b20af4c828d202c8e35eb6758.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00266_5dcf29a0a9194d8e9e5e292764fff0a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00273_eb3ec17f795e40d7aa12143779d9a502.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00276_4379ab4372a74f27b9f4c2a37bd63b12.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00249.cipoqsja_9fd0a110562f4ec3b1d5646caa0da8c5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00249_bdd4c7c40d4c4552968a669212b1ce0f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-aristino-regular-fit-ajk036bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:16.955Z",
      "updated_at": "2025-12-24T18:58:16.955Z"
    },
    {
      "id": 52,
      "name": "Áo Khoác 2 Lớp Nam Đen Jacquard Aristino AJK602EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Đen Jacquard Aristino AJK602EDP01\nMã sản phẩm: AJK602EDP01\nFom dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo khoác nam dáng bomber cao cấp được thiết kế theo phong cách sang trọng và tinh tế, phù hợp cho các dịp cần sự lịch lãm nhưng vẫn giữ nét trẻ trung hiện đại. \nÁo nổi bật với họa tiết jacquard dập nổi, tạo chiều sâu và hiệu ứng ánh nhẹ khi di chuyển, mang đến vẻ ngoài cuốn hút và đẳng cấp\nVải jacquard cao cấp, bề mặt họa tiết sắc nét, đứng form nhưng vẫn thoáng và nhẹ.\nCổ áo: Cổ bo rib ôm nhẹ, chuẩn phong cách sang trọng.\nKhóa kéo kim loại mượt, bo viền tay và gấu giúp giữ form đẹp khi mặc.\nChất liệu: \nVải chính (Main fabric): 100% Polyester;\nVải lót (Lining): 100% Polyester;\nVải phối (Secondary fabric): 96% Polyester 4% spandex\nMàu sắc: Đen 3 Jacquard họa tiết\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7305436304044_364544ae5b24e6207f4e2c399de22afd_ae999066f58640f2aef93ad32d7126da.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7305436253227_0e42ed3230803e041b3937e1933dc8fc_ea2a681e63b74b16bd02ae54f33b38f9.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7305436253228_06bd9b14993515963de4f596a70696cd_53e6bb74c0f9482ca90f8ed92735c08f.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7305436253229_32a28dd59aac603681baa0d063c9d23d_dc9fea07c0574f82be7aca81012119c5.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7308175416040_4d1a2ea30f5e4102fab4e6a083921c13_3d685ccd81024e6091d928cafc8b73f8.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-den-jacquard-aristino-ajk602edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:24.798Z",
      "updated_at": "2025-12-24T18:58:24.798Z"
    },
    {
      "id": 53,
      "name": "Áo Khoác 2 Lớp Nam Xanh Rêu Aristino Regular Fit AJK601EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Xanh Rêu Aristino Regular Fit AJK601EDP01\nMã sản phẩm: AJK601EDP01\nKiểu dáng: Dáng vừa / Regular Fit\nThiết kế:\nÁo Jacket mang phong cách tối giản, thanh lịch, hiện đại, phù hợp cho cả đi làm lẫn đi chơi.\nThiết kế sử dụng tông xanh olive nhạt rất thời thượng, dễ phối đồ và phù hợp với nhiều tone da.\nCổ bẻ cổ điển, đậm chất menswear.\nHai đường cắt may tối giản chạy ngang ngực tạo điểm nhấn tinh tế.\nTúi ẩn hai bên với đường bo cong mềm, tăng sự thời trang và tiện dụng.\nKhóa kéo kim loại phía trước, dễ mặc – dễ phối.\nChất liệu:\nVải chính (Main fabric): 92% polyester 8%spandex; \nVải lót (Lining): 100% Polyester\nMàu sắc: Xanh rêu 36\nSize: S, M, L, XL, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 250000000,
      "sale_price": 2250000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00256_9635877f55294e0089227338afaea2c4.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00259_fdf591b93d7243378e2864f81e21ee4c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00266_482d4e52a5d949198264721f4a89018f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00273_3f17ce8c216749ed9f3379d59361b98c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00276_6983bb9b13ca4f5baa02c51f19a65b06.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00249_f9a31a29f1ab4ee1a32a3145a310758a.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-xanh-reu-aristino-regular-fit-ajk601edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:33.835Z",
      "updated_at": "2025-12-24T18:58:33.835Z"
    },
    {
      "id": 54,
      "name": "Áo Khoác 2 Lớp Nam Nâu Aristino Regular Fit AJK035BS0",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Nâu Aristino Regular Fit AJK035BS0\nMã rút gọn: AJK035BS0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo khoác 2 lớp có thiết kế hiện đại và năng động với cổ bomber trẻ trung khoẻ khoắn.\nChất liệu vải nhung mang cảm giác ấm áp và mềm mại, đồng thời co giãn nhẹ giúp quý ông thoải mái trong từng cử động.\nChữ ký Aristino đặc trưng thương hiệu được thêu trên phần ngực áo tạo nên dấu ấn thanh lịch, thời thượng cho quý ông.\nChất liệu: \nVải chính (Main fabric): 92% Polyester; 8% Spandex\nVải lót (Lining): 100% Polyester\nVải phối (Secondary fabric): 96% Polyester; 4% Spandex\nMàu sắc: Nâu 17\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 2550000,
      "sale_price": null,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/2i3a6347.1_b78a1cc7f17f454ebccaaa1d45b88f3e.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6347_95c73145cef2475ba2076c54886a05e4.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6348_1_76cf36cc662b42e982db2de653902c47.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6349_92d4ed726e4f4e6f94c8e79882d7830f.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6350_6902437fcf8f4e4882ed59ec56f6e0f5.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-nau-aristino-regular-fit-ajk035bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:40.007Z",
      "updated_at": "2025-12-24T18:58:40.007Z"
    },
    {
      "id": 55,
      "name": "Áo Khoác 2 Lớp Nam Booc Đô Jacquard Aristino AJK602EDP01",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Nam Booc Đô Jacquard Aristino AJK602EDP01\nMã sản phẩm: AJK602EDP01\nFom dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo khoác nam dáng bomber cao cấp được thiết kế theo phong cách sang trọng và tinh tế, phù hợp cho các dịp cần sự lịch lãm nhưng vẫn giữ nét trẻ trung hiện đại. \nÁo nổi bật với họa tiết jacquard dập nổi, tạo chiều sâu và hiệu ứng ánh nhẹ khi di chuyển, mang đến vẻ ngoài cuốn hút và đẳng cấp\nVải jacquard cao cấp, bề mặt họa tiết sắc nét, đứng form nhưng vẫn thoáng và nhẹ.\nCổ áo: Cổ bo rib ôm nhẹ, chuẩn phong cách sang trọng.\nKhóa kéo kim loại mượt, bo viền tay và gấu giúp giữ form đẹp khi mặc.\nChất liệu: \nVải chính (Main fabric): 100% Polyester;\nVải lót (Lining): 100% Polyester;\nVải phối (Secondary fabric): 96% Polyester 4% spandex\nMàu sắc: Booc đô 1 Jacquard họa tiết\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 255000000,
      "sale_price": 2295000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7308175416079_b86038238c1ee952bca0ab084a543013_b51a4133a3cf452799d2b15aee878594.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0783_d046c829d3da4140b095072f1e9024f8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0784_3327e3bff35444a4814de644f0bbe6c2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0785_a181c6f6d4a54af59583196738e0fa22.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0787_67048266bfb24ebc9cb6abe35fa5c25e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-nam-booc-do-jacquard-aristino-ajk602edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:48.047Z",
      "updated_at": "2025-12-24T18:58:48.047Z"
    },
    {
      "id": 56,
      "name": "Áo Khoác Da Lộn Nam Be Aristino Regular Fit AJK006EDP01",
      "description": "Tên sản phẩm: Áo Khoác Da Lộn Nam Be Aristino Regular Fit AJK006EDP01\nMã sản phẩm: AJK006EDP01\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nForm dáng: Regular Fit  – vừa vặn nhưng vẫn đủ thoải mái để mặc nhiều lớp bên trong. Chiều dài áo ngang hông, giúp tôn dáng và dễ phối với quần âu, jeans hoặc chinos.\nCổ áo: Cổ bẻ cổ điển (classic collar) mang hơi hướng menswear truyền thống, giúp gương mặt người mặc trở nên sáng và nghiêm chỉnh hơn.\nKhóa áo: Sử dụng hàng cúc bấm kim loại sáng bóng tạo điểm nhấn nhẹ nhàng, giúp áo vừa hiện đại vừa tiện dụng hơn so với kiểu khóa kéo.\nĐường cắt may: Đường cắt ngang ngực được xử lý khéo léo, tạo cảm giác vai rộng và thân áo cân đối hơn.\nTúi: Hai túi ẩn hai bên sườn áo giúp giữ dáng gọn gàng và tăng tính tiện lợi\nChất liệu:\nLớp ngoài (Shell): 92% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ, 8% Spandex tạo độ co giãn linh hoạt.\nLớp giữa (Filling): 100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nLớp lót (Lining): 100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nMàu sắc: Be 18\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị",
      "brand": "Aristino",
      "base_price": 240000000,
      "sale_price": 2160000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06618_84762d63ec584de48620af601757a4d7_dd808d603b054e578c7f8e258c37cb80.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06609_b71e374ee5174d22b0b2f6a77f8d29f6_bf77ba1440f24ab3a4b516c7d2ae9353.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06611_f027f234c0ed4426b4c063f1e7ff0059_af18e515fc8b4865b621ea79f76dc620.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06619_957338e8a9aa47ffab867dab55c5d8b8_13f0d1556a6d4e8c942eaad080fd55d4.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06621_eb421ee5b8554996921abe308c64fb3b_3b4568592bc94d52ba732753e072bfd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06599_8ca67994c44c4cb2a70caa4f8effce21_1b010d499cfe4ab98d5bb59868a7d87a.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-da-lon-nam-be-aristino-regular-fit-ajk006edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:58:54.509Z",
      "updated_at": "2025-12-24T18:58:54.509Z"
    },
    {
      "id": 57,
      "name": "Áo Khoác Gió Thể Thao 2 Lớp Nam Xanh Rêu Aristino Regular Fit AJK003EDP01",
      "description": "Tên sản phẩm: Áo Khoác Gió Thể Thao 2 Lớp Nam Xanh Rêu Aristino Regular Fit AJK003EDP01\nMã sản phẩm: AJK003EDP01\nKiểu dáng: Regular Fit vừa vặn, dễ mặc, phù hợp nhiều độ tuổi  \nThiết kế nổi bật:  \nDòng áo khoác nam nhẹ kiểu thể thao – business casual, được thiết kế để kết hợp giữa tính năng linh hoạt và phong cách thanh lịch, phù hợp cho thời tiết giao mùa hoặc những ngày se lạnh.\nPhong cách smart-casual cao cấp, phù hợp cho quý ông công sở yêu thích sự năng động nhưng vẫn chỉn chu.\nForm áo đứng dáng vừa vặn, tạo vẻ chuyên nghiệp, giúp người mặc vẫn gọn gàng.\nCổ áo: Dạng đứng nhẹ, có thể kéo cao khi trời lạnh, tạo điểm nhấn hiện đại.\nKhóa kéo ẩn + cúc bấm giúp áo trông tinh gọn và chắc chắn.\nĐường cắt ngang ngực và eo giúp tôn dáng, tạo hiệu ứng vai rộng hơn.\nTay áo: Có bo gập chỉnh độ ôm, tiện dụng khi hoạt động ngoài trời.\nBề mặt mịn lì, ít nhăn, giúp áo giữ form tốt cả ngày.\nBên trong có lớp lót mỏng, tạo cảm giác dễ chịu khi cử động\nChất liệu: \n95% Nylon cho bề mặt vải độ mịn mượt, mỏng nhẹ \n5% Spandex tạo độ co giãn thoải mái khi mặc\nMàu sắc: Xanh rêu 72\nTiện ích kèm theo: Túi gấp nhỏ gọn, dễ mang theo trong balo/túi xách khi di chuyển\nSize: S-M-L-XL-XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản & giặt ủi:\n\nGiặt máy ở chế độ nhẹ hoặc giặt tay với nước lạnh dưới 30°C\nKhông sử dụng chất tẩy mạnh, tránh ngâm lâu\nỦi ở nhiệt độ thấp, không ủi trực tiếp lên logo và khóa kéo\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu sắc và chất liệu\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 170000000,
      "sale_price": 1360000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7191409114996_a0d199e919dd07a7a3c84a9fb5b4a018_ade5bd2486b04f45ac69f27267aa2475.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7191409098059_8878451c4d26c6161b4c1fad9bda3aa4_24f509ceacb54269afcbd7a64e3383a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5734_10fbf215d32547fbacc78b657b781add.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5738_2e7fca78d71e49dd9aa4747474140fbd.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5746_fedc951da1824eb5bbb54dd1c1f191de.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5747_64371bb4f0e04961baec93f8689b2e3e.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5748_afa449dac14743a285fe6cc5b6cfa69b.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5722_16dd1b74c99a4365ad67a7a80275d34d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7769.1_b3c20b8fe6e048dda20febe851cf61f7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7769_aea4b9e29ac643f1b299b1047a0e4d0c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-gio-the-thao-2-lop-nam-xanh-reu-aristino-regular-fit-ajk003edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:02.004Z",
      "updated_at": "2025-12-24T18:59:02.004Z"
    },
    {
      "id": 58,
      "name": "Áo Khoác Gió Thể Thao 2 Lớp Nam Xám Aristino Regular Fit AJK003EDP01",
      "description": "Tên sản phẩm: Áo Khoác Gió Thể Thao 2 Lớp Nam Xám Aristino Regular Fit AJK003EDP01\nMã sản phẩm: AJK003EDP01\nKiểu dáng: Regular Fit vừa vặn, dễ mặc, phù hợp nhiều độ tuổi  \nThiết kế nổi bật:  \nDòng áo khoác nam nhẹ kiểu thể thao – business casual, được thiết kế để kết hợp giữa tính năng linh hoạt và phong cách thanh lịch, phù hợp cho thời tiết giao mùa hoặc những ngày se lạnh.\nPhong cách smart-casual cao cấp, phù hợp cho quý ông công sở yêu thích sự năng động nhưng vẫn chỉn chu.\nForm áo đứng dáng vừa vặn, tạo vẻ chuyên nghiệp, giúp người mặc vẫn gọn gàng.\nCổ áo: Dạng đứng nhẹ, có thể kéo cao khi trời lạnh, tạo điểm nhấn hiện đại.\nKhóa kéo ẩn + cúc bấm giúp áo trông tinh gọn và chắc chắn.\nĐường cắt ngang ngực và eo giúp tôn dáng, tạo hiệu ứng vai rộng hơn.\nTay áo: Có bo gập chỉnh độ ôm, tiện dụng khi hoạt động ngoài trời.\nBề mặt mịn lì, ít nhăn, giúp áo giữ form tốt cả ngày.\nBên trong có lớp lót mỏng, tạo cảm giác dễ chịu khi cử động\nChất liệu: \n95% Nylon cho bề mặt vải độ mịn mượt, mỏng nhẹ \n5% Spandex tạo độ co giãn thoải mái khi mặc\nMàu sắc: Xám 60\nTiện ích kèm theo: Túi gấp nhỏ gọn, dễ mang theo trong balo/túi xách khi di chuyển\nSize: S-M-L-XL-XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản & giặt ủi:\n\nGiặt máy ở chế độ nhẹ hoặc giặt tay với nước lạnh dưới 30°C\nKhông sử dụng chất tẩy mạnh, tránh ngâm lâu\nỦi ở nhiệt độ thấp, không ủi trực tiếp lên logo và khóa kéo\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu sắc và chất liệu\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 170000000,
      "sale_price": 1360000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/z7191409138303_8239ca377bb9a642e85e0c58d751a5a8_b51f60e4560c41b0b0ba2d64a1effe11.jpg",
        "https://cdn.hstatic.net/products/200000887901/z7191409171797_3ec6e4cacecb479dce83b286f0943c37_ca3ded3260b64c4b8e9bdea52b07510b.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5965_a5d606078c524b70a313c2929d6e2a51.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5967_9e18e8480e404bc2b0e9b0c65c948995.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5974_0e87cf18311c49fcac54234bf81c5104.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5975_dccd8be175fb4d709c69496c8ca6b834.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5979_f02b50eced154f50a0615a8e0b46f3b6.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5957_863359561e2e44939f511b7230d0b955.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7784.1_16414bfbc3394462bb4f8849969f8bec.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7784_06b8063c7a5e4c4f91bedd9fec575e02.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-gio-the-thao-2-lop-nam-xam-aristino-regular-fit-ajk003edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:08.422Z",
      "updated_at": "2025-12-24T18:59:08.422Z"
    },
    {
      "id": 59,
      "name": "Áo Gió Nam Xám Đậm Aristino Trượt Nước Thời Trang Tiện Dụng AJK004EDP01",
      "description": "Tên sản phẩm: Áo Gió Nam Xám Đậm Aristino Trượt Nước Thời Trang Tiện Dụng AJK004EDP01\nMã sản phẩm: AJK004EDP01\nKiểu dáng: Regular Fit vừa vặn, dễ mặc, phù hợp nhiều độ tuổi  \nThiết kế nổi bật:  \nCổ cao 5cm tôn dáng, bảo vệ tốt trong gió nhẹ  \nKhóa kéo cao cấp khắc biểu tượng Mặt Trời Huyền Thoại Aristino – chi tiết tinh xảo khẳng định đẳng cấp  \nMũ áo tháo rời, tích hợp dây rút & chốt đồng bộ – linh hoạt trong nhiều điều kiện thời tiết  \nTúi cơi khóa kéo ẩn tinh tế, tiện lợi và gọn gàng  \nĐường cắt can hiện đại, bo gấu & bo tay áo bản 3cm chắc chắn, bền bỉ  Logo Aristino in cao su nổi, cân đối ngực trái – điểm nhấn thương hiệu mạnh mẽ\nChất liệu: 92% Polyester 8% Spandex\nLớp ngoài: Polyester/Spandex – nhẹ, chống nhăn, co giãn thoải mái  \nLớp trong: Lưới thoáng khí đồng màu tạo sự mát mẻ, dễ chịu  \nMàu sắc: Xám 238\nTiện ích kèm theo: Túi gấp nhỏ gọn, dễ mang theo trong balo/túi xách khi di chuyển\nSize: S-M-L-XL-XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản & giặt ủi:\n\nGiặt máy ở chế độ nhẹ hoặc giặt tay với nước lạnh dưới 30°C\nKhông sử dụng chất tẩy mạnh, tránh ngâm lâu\nỦi ở nhiệt độ thấp, không ủi trực tiếp lên logo và khóa kéo\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu sắc và chất liệu",
      "brand": "Aristino",
      "base_price": 170000000,
      "sale_price": 1360000,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc07153_61304625ab8f4088a11f6ab25f0b3821_77765947d3ff4ce5b1ad0a701a157ee5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07148_e57fcfae06e54549b1cf84a6f8e79207_30e6694ad92440bd95f5e2dbfcbd75b2.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07146_27ee0a18432c46f69cc0af25cc3234bf_9f9df31cf5aa409d881b8477626d2858.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07158_5a16cd6fdc19487aa68979537da304d4_d3d36e3c44ea45c2aa7faefdc81bfb72.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07160_9174ecc3370442b1a89d4eb732a19da8_114be2e503ae43d8b8e6522a8ef59d71.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07161_3b7a1df75e9d444a8f665f293d1606b1_4dba0198a5434fff9d70b128f7321943.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07144_56d53e036d5a4606a5e749d60c35500a_66a8b036ccd649c0b8adceef690d6803.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc07192_0aff9464d10a41e0ba0b0060e532acd8_9baf415360004708ae83640f67c93a68.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1125.1_c19b51163cae4823bb3418cbb2079062_1424d2a5ce1e4eeebb8bb018a2929400.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1125_015e8593cf6e4e60be0cc48263c5396e_378e6b55e6634ee49598a5fcf0120499.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-gio-nam-xam-dam-aristino-truot-nuoc-thoi-trang-tien-dung-ajk004edp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:15.579Z",
      "updated_at": "2025-12-24T18:59:15.579Z"
    },
    {
      "id": 60,
      "name": "Áo Khoác 2 Lớp Đen Nam Aristino Business 1JK002BS0",
      "description": "Tên sản phẩm: Áo Khoác 2 Lớp Đen Nam Aristino Business 1JK002BS0\nMã sản phẩm: 1JK002BS0\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo khoác 2 lớp Aristino Buisiness thuộc dòng hàng cao cấp với phom Regular Fit không ôm sát cơ thể, thoải mái nhưng vẫn vừa vặn với cơ thể.\nThiết kế cổ bẻ kinh điển dành cho quý ông theo đuổi phong cách tối giản và sang trọng.\nMàu sắc nam tính mang tới diện mạo lịch lãm cho các quý ông thời thượng.\nChất liệu:\nVải chính:\nLớp ngoài cùng 85.8% Nylon bền chắc, nhẹ, nhanh khô, chống thấm nước và ít nhăn; 14.2%Spandex tạo độ co giãn linh hoạt.\nLớp trong cùng: 100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nLớp giữa: 68% Polyester giữ sắc màu bền đẹp, 32% Viscose mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc.\nVải lót : 100% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\nMàu sắc: Đen 9\nSize: S/M/L/XL/XXL\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 6300000,
      "sale_price": null,
      "category_id": 4,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02376_d9bcc85fb2c541a89a85cacced325c21_60866eefaff54d8ba5544dc47d5b68e2.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02372_e8f40c18db8a45b49b84324a9dde88e8_eea4dece10de4f6b92376f7884c67c07.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02378_6624d2f599a849368919ec0e89de41b6_750e61af19df452cb19015ccb17b234e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02382_85cdaeb81fcf46e48687061267994c0a_2cdac990d82a4258b0ed24181391023c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02383_c3bea9e2763948bc94a1722078031da5_62eb1b83bbf54f5b8357acee86f9933f.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02364_dde9a5f5685941208ded8f26f69d7926_c4c0991459a34309ae4b7376fb8752b6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4130.1_3aa6fd9447f04986a4fc6671ec138144_444baf60dfdc4490b55c71337ebbb1b4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4130_7998f0a5094c4c49bca232e882d87e87_41f91c6ed99d4c14983215627c25fa48.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4131_47f9aa5549c944fa89cdf5c5a9578b0d_0c727cde743344da9ed83973f9b5ad70.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4132_7cdde26e3e9346d9a6a365d1cc7e1a2b_a0e2ca051c7843ce83fbafa0a46be759.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-khoac-2-lop-den-nam-aristino-business-1jk002bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:22.455Z",
      "updated_at": "2025-12-24T18:59:22.455Z"
    },
    {
      "id": 61,
      "name": "Áo Ba Lỗ Tanktop Nam Basic Aristino ATT001EXP01",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Nam Aristino Cotton ATT001EXP01\nKiểu dáng: Basic\nÁo tank top thiết kế cơ bản, phù hợp với phom dáng đàn ông Việt, mang đến sự vừa vặn và thoải mái trong suốt ngày dài. Kiểu dáng đơn giản nhưng tinh tế, dễ dàng kết hợp với nhiều trang phục khác nhau, phù hợp cho cả hoạt động thể thao lẫn mặc thường ngày.\nChất liệu: 100% Cotton\nChất liệu 100% Cotton mang lại cảm giác mềm mại, thấm hút mồ hôi tốt, và thoáng khí, giúp người mặc luôn cảm thấy thoải mái, mát mẻ. Cotton tự nhiên còn thân thiện với làn da, hạn chế gây kích ứng và phù hợp cho mọi loại da.\nMàu sắc: Trắng\nSize: M, L, XL, XXL\nSản xuất: Việt Nam\nĐóng gói: số lượng 01 cái\n\nHướng dẫn bảo quản và giặt ủi:\n\nBảo quản:\n\nTreo hoặc gấp gọn áo sau khi sử dụng để giữ phom dáng.\nBảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp để giữ độ bền và màu sắc của áo.\n\nGiặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh để bảo vệ chất liệu Cotton.\nKhông sử dụng chất tẩy mạnh để tránh làm hỏng chất liệu.\nỦi ở nhiệt độ thấp để tránh làm co rút vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 10500000,
      "sale_price": 94500,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/att001edp01__5__6b968b68f6c04973_8b8d215eb53c45869cc312d3a3106bf4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e7e671760a5147cf8e84266d0_ca9c0c7cc87f499e865f34fafdb6e338.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_551fa21f3c3345179b953fd6b_ad3f930a0f5e419494b8e9de5f9d8c0f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_99bfdecb589d4e00a5e981ee2_89f26e828a084e068816b1fbeb85ab6d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-basic-aristino-att001exp01",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:41.065Z",
      "updated_at": "2025-12-24T18:59:41.065Z"
    },
    {
      "id": 62,
      "name": "[Combo 2] Áo Ba Lỗ Tanktop Nam Basic Aristino ATT001EXP02",
      "description": "Tên sản phẩm: Combo 02 Áo Ba Lỗ Tanktop Nam Aristino Cotton ATT001EXP02\nKiểu dáng: Basic\nÁo tank top thiết kế cơ bản, phù hợp với phom dáng đàn ông Việt, mang đến sự vừa vặn và thoải mái trong suốt ngày dài. Kiểu dáng đơn giản nhưng tinh tế, dễ dàng kết hợp với nhiều trang phục khác nhau, phù hợp cho cả hoạt động thể thao lẫn mặc thường ngày.\nChất liệu: 100% Cotton\nChất liệu 100% Cotton mang lại cảm giác mềm mại, thấm hút mồ hôi tốt, và thoáng khí, giúp người mặc luôn cảm thấy thoải mái, mát mẻ. Cotton tự nhiên còn thân thiện với làn da, hạn chế gây kích ứng và phù hợp cho mọi loại da.\nMàu sắc: Trắng\nSize: M, L, XL, XXL\nSản xuất: Việt Nam\nĐóng gói: số lượng 01 cái\n\nHướng dẫn bảo quản và giặt ủi:\n\nBảo quản:\n\nTreo hoặc gấp gọn áo sau khi sử dụng để giữ phom dáng.\nBảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp để giữ độ bền và màu sắc của áo.\n\nGiặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh để bảo vệ chất liệu Cotton.\nKhông sử dụng chất tẩy mạnh để tránh làm hỏng chất liệu.\nỦi ở nhiệt độ thấp để tránh làm co rút vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 20900000,
      "sale_price": 167200,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/image_175_a173d26da3484d8d905cad_4083d3dba4e74c98a8bfff45109d2a06.jpg",
        "https://cdn.hstatic.net/products/200000887901/image_63_68911a3c1d5f4443839eee5_aaa6ae367bd64839b11e2b9027ff3761.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0052.1_fb999818c68242698f0da_17f67dbd5feb472cb11912cbc2219e6d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0052_98e0e76326dd4b969ff74d7_89078658137146e29f860211fd770bc2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0053_3027e2a7d05d42cfb610173_556d6a2cc47343bfa2c31565a1114e52.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0055_aabc8ad93e6a465987ce239_39baf3f97eb043668b951eb17d891908.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0054_4c322b1b74af49cbbb92c2f_2f30bd22e450452988c1f9cb3691e7c6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "combo-2-ao-ba-lo-tanktop-nam-basic-aristino-att001exp02",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:46.710Z",
      "updated_at": "2025-12-24T18:59:46.710Z"
    },
    {
      "id": 63,
      "name": "[Combo 3] Áo Ba Lỗ Tanktop Nam Basic Aristino ATT001EXP03",
      "description": "Tên sản phẩm: Combo 03 Áo Ba Lỗ Tanktop Nam Insidemen Cotton ATT001EXP03\nMã sản phẩm: ATT001EXP03\nKiểu dáng: Slim fit\nThiết kế:\nÁo tank top với thiết kế cơ bản, vừa vặn với phom dáng đàn ông Việt, mang lại sự thoải mái suốt cả ngày dài.\nChất liệu:\n100% Cotton tự nhiên, mềm mại, thoáng khí, và thân thiện với làn da.\nMàu sắc: Trắng 6\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt máy ở nhiệt độ thấp (tối đa 30°C) với màu tương tự.\nKhông dùng chất tẩy trắng.\nPhơi khô ở nhiệt độ thấp hoặc phơi tự nhiên.\nKhông ủi hoặc giặt khô.\n\nNote: Màu sắc giao ngẫu nhiên.",
      "brand": "Aristino",
      "base_price": 31400000,
      "sale_price": 235500,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/44a65b6b-0966-4e1a-8975-21a5c746_aba5f7484fb847ca9af053b54f515f46.jpg",
        "https://cdn.hstatic.net/products/200000887901/image_63_68911a3c1d5f4443839eee5_3cb4d673a52b494abd4b37b5c0eeb545.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0052.1_fb999818c68242698f0da_38d48be198d046419bf43894b7f1f509.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0052_98e0e76326dd4b969ff74d7_8ff73f305d344813b5e9fe082c239c03.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0053_3027e2a7d05d42cfb610173_8890f5cb9ffc4bf598cea0d519e22b03.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0055_aabc8ad93e6a465987ce239_6aec01bad0bf4b99bf64389eadec595a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0054_4c322b1b74af49cbbb92c2f_016d1272531f4632b73af4b1a18a83ef.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "combo-3-ao-ba-lo-tanktop-nam-basic-aristino-att001exp03",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T18:59:54.811Z",
      "updated_at": "2025-12-24T18:59:54.811Z"
    },
    {
      "id": 64,
      "name": "Áo Ba Lỗ Tanktop Đen Nam Aristino ATT007AS0",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Đen Nam Aristino ATT007AS0\nMã sản phẩm: ATT007AS0\nKiểu dáng: Áo tanktop\nThiết kế:\nÁo tank top dáng suông thoải mái, không tay, cổ tròn sâu vừa phải, phù hợp cho các hoạt động thể thao như gym, chạy bộ, hoặc mặc thường ngày mùa hè.\nMàu đen basic, dễ phối và tôn dáng.\nIn logo ARISTINO và họa tiết graphic kẻ ngang màu xanh nổi bật ở ngực trái, tạo điểm nhấn cá tính.\nĐường may viền gọn gàng, chắc chắn, hạn chế bai nhão khi vận động nhiều.\nChất liệu:\n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Đen 24 Solid\nSize: S, M, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2490_e15a0dca90214558867dd6b5f26933b0.jpg",
        "https://product.hstatic.net/200000887901/product/img_2497_a167a16d716a4807b692d9f1740ff4ce.jpg",
        "https://product.hstatic.net/200000887901/product/img_2501_bd00f7f1c83c478491fb82bf4400eb98.jpg",
        "https://product.hstatic.net/200000887901/product/img_2489_a459a7c8b37943dda4c3841223c1d7d4.jpg",
        "https://product.hstatic.net/200000887901/product/img_2500_f4a04734ea174c0baafd7e535b7fd762.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9f3ad785f45446ffad80cd3ccb93269d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_dd2bd80b83254608821694f6ab26af24.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6c06fb235f8d414ca22912473ec237ff.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_63cbb7a949ef4150ae713f68db47f62a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ab1d859a76844bb7b24040190c83f24f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-den-nam-aristino-att007as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:03.266Z",
      "updated_at": "2025-12-24T19:00:03.266Z"
    },
    {
      "id": 65,
      "name": "Áo Ba Lỗ Tanktop Xám Nam Aristino ATT006AS0",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Xám Nam Aristino ATT006AS0\nMã rút gọn: ATT006AS0\nForm Dáng: Áo Tanktop\nChi tiết:\nVải mềm mịn, co giãn 4 chiều, khô nhanh và thoáng khí cực tốt – lý tưởng cho các hoạt động thể thao hay mặc thường ngày.\nForm áo body-fit nhẹ, ôm dáng gọn gàng, tôn lên vóc dáng nam tính mà vẫn thoải mái vận động.\nCổ tròn rộng, tay sát nách, giúp tăng cường độ linh hoạt khi chơi thể thao hay vận động mạnh.\nLogo ARISTINO cách điệu cùng chi tiết in phản quang phía trước ngực tạo điểm nhấn khỏe khoắn, hiện đại.\nMàu xám ghi sáng nhẹ nhàng, phù hợp với mọi tone da, có thể kết hợp với quần short, jogger hoặc quần thể thao.\nChất liệu:\n90% polyester \n10% spandex\nMàu sắc: Xám 36\nSize: S, M, L, XL, XXL\nXuất xứ: Việt Nam \n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2476_b04b6499a6c44378861b4b32cc59f6e2.jpg",
        "https://product.hstatic.net/200000887901/product/img_2481_49bebbc54f874c428559e4328177cf0a.jpg",
        "https://product.hstatic.net/200000887901/product/img_2483_ec19e486eb92469e9dd17a6d799ca809.jpg",
        "https://product.hstatic.net/200000887901/product/img_2475_6833149b5ca0413695915952b00d564e.jpg",
        "https://product.hstatic.net/200000887901/product/img_2482_a9b8ed0e82cf4c6b9445c8871d39cd3f.jpg",
        "https://product.hstatic.net/200000887901/product/img_1862.1_2784a8ec663046cfbf9108cf4db169ca.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_2a076f7c9a1f4b4cbce9d2ef6e750d1b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_860b57803417401bbf7fd147c1facfca.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b4c9b2e96c7a4ba8a5fecaadb9e39905.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0a4c3c3a0a694bb49da798b316f1f1d4.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-xam-nam-aristino-att006as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:10.513Z",
      "updated_at": "2025-12-24T19:00:10.513Z"
    },
    {
      "id": 66,
      "name": "Áo Ba Lỗ Tanktop Xám Nam Aristino ATT004AS0",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Xám Nam Aristino ATT004AS0\nMã sản phẩm: ATT004AS0\nKiểu dáng: Áo tanktop\nThiết kế:\nÁo tank top dáng suông thoải mái, không tay, cổ tròn sâu vừa phải, phù hợp cho các hoạt động thể thao như gym, chạy bộ, hoặc mặc thường ngày mùa hè.\nMàu xám basic, dễ phối và tôn dáng.\nIn logo ARISTINO và họa tiết graphic kẻ ngang nổi bật ở ngực, tạo điểm nhấn cá tính.\nĐường may viền gọn gàng, chắc chắn, hạn chế bai nhão khi vận động nhiều.\nChất liệu:\n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Xám 36\nSize: S, M, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_6832.1_dea0977369f848adb8aac025ba3eec8f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5dff6f8abfe94b2a93c29690b91b9622.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_17cabaee296e458bb1c87396e9bff76f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f1a5d539d9814f2881dc849ce06b46f9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_3b6ccfbe0d8842509373cb7877ed9d2c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-xam-nam-aristino-att004as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:16.999Z",
      "updated_at": "2025-12-24T19:00:16.999Z"
    },
    {
      "id": 67,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATT003AS0",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATT003AS0\nMã sản phẩm: ATT003AS0\nKiểu dáng: Áo tanktop\nThiết kế:\nÁo tank top dáng suông thoải mái, không tay, cổ tròn sâu vừa phải, phù hợp cho các hoạt động thể thao như gym, chạy bộ, hoặc mặc thường ngày mùa hè.\nMàu xanh tím than basic, dễ phối và tôn dáng.\nIn logo ARISTINO in ở giữa ngực, tạo điểm nhấn cá tính.\nĐường may viền gọn gàng, chắc chắn, hạn chế bai nhão khi vận động nhiều.\nChất liệu:\n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Xanh tím than 20\nSize: S, M, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_9fa691e2286843599706f90e24dea26e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_10581dc39571475f9ab2dea0d5891d4e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6abbc67424f442d69e7c18aa153a7730.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f7fe51aea5674cf2ac33ff52d253a40c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b349c793ef33496b9f93b6b3f9bd9fa4.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-att003as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:24.047Z",
      "updated_at": "2025-12-24T19:00:24.047Z"
    },
    {
      "id": 68,
      "name": "Áo Ba Lỗ Tanktop Đen Nam Aristino ATT005AS0",
      "description": "Tên sản phẩm: Áo Ba Lỗ Tanktop Đen Nam Aristino ATT005AS0\nMã sản phẩm: ATT005AS0\nKiểu dáng: Áo tanktop\nThiết kế:\nÁo tank top dáng suông thoải mái, không tay, cổ tròn sâu vừa phải, phù hợp cho các hoạt động thể thao như gym, chạy bộ, hoặc mặc thường ngày mùa hè.\nMàu xanh tím than basic, dễ phối và tôn dáng.\nIn logo ARISTINO in ở giữa ngực, tạo điểm nhấn cá tính.\nĐường may viền gọn gàng, chắc chắn, hạn chế bai nhão khi vận động nhiều.\nChất liệu:\n90% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n10% Spandex tạo độ co giãn cho áo\nMàu sắc: Đen 24 Solid\nSize: S, M, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_5190.1_89f937ba01a544cfb72900af38dfb907.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f484f24822ac4db595282d3cd5db6432.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b2a4c3fe779b45f7bf2340a162baa4b8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e63f093fdfe64e72afc480f4e98e0abf.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ab6aa37a4c284841ab17d0287b765586.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-den-nam-aristino-att005as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:31.954Z",
      "updated_at": "2025-12-24T19:00:31.954Z"
    },
    {
      "id": 69,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL002AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL001AS0\nMã rút gọn: ATL001AS0\nKiểu dáng: Áo ba lỗ\nThiết kế:\nÁo sát nách mang lại sự mềm mại, nhẹ nhàng, thoáng khí cùng độ co giãn vượt trội. \nÁo có màu sắc trung tính cùng hình in trẻ trung\nLogo thương hiệu in cách điệu ở ngực.\nChất liệu: \n90% polyester 10% spandex\nMàu sắc: Xanh tím than 22\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2430_99b8711ab0e44edb8075178efdd0cc53.jpg",
        "https://product.hstatic.net/200000887901/product/img_2434_98d83c3607f34dd2bef0a2eb371a16dc.jpg",
        "https://product.hstatic.net/200000887901/product/img_2438_f0e79a031cae4ca4a26084e804b87d2f.jpg",
        "https://product.hstatic.net/200000887901/product/img_2422_-_copy_f96c6f28e1b546f9866b37d0e63e22d4.jpg",
        "https://product.hstatic.net/200000887901/product/img_2437_1530df4364934e91a84def4c925748d8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9a25d7b1fbe2457994c2aeee04d38b3c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5d86ad20efd040b2a3f162fdf41af0ff.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_eb16143778f64b9e8872ac7faa1890f0.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9533525e88aa4f83ba5fa589955c0fb2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f3c991c083154aaca87beceff97c78ba.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl002as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:40.020Z",
      "updated_at": "2025-12-24T19:00:40.020Z"
    },
    {
      "id": 70,
      "name": "Áo Ba Lỗ Tanktop Trắng Nam Aristino ATL016AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Trắng Nam Aristino ATL016AS0\nMã rút gọn: ATL016AS0\nKiểu dáng: \nThiết kế:\nÁo sát nách basic, dáng suông thoải mái, phần vai và nách được cắt may gọn gàng, không quá rộng cũng không quá ôm – phù hợp với nhiều vóc dáng.\nMàu trắng basic, tạo cảm giác mát mẻ, năng động và dễ phối đồ.\nLogo thương hiệu Aristino trên ngực cùng với một đường kẻ mảnh ngang nhỏ màu đen, tạo điểm nhấn tinh tế.\nChất liệu: \n90% Polyamide tạo sự mềm mại và độ đàn hồi cao\n10% Spandex tạo độ co giãn nhẹ\nMàu sắc: Trắng 1\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2514_6fc7061d00e0460a8984ed78719505ad.jpg",
        "https://product.hstatic.net/200000887901/product/img_2512_169d87841cca4178bfa400e90bbd0575.jpg",
        "https://product.hstatic.net/200000887901/product/img_2516_1a548b994fa046b6a3a6a466eecc7866.jpg",
        "https://product.hstatic.net/200000887901/product/img_2505_-_copy_0a90600b46f941889d0c28a14c5da5f3.jpg",
        "https://product.hstatic.net/200000887901/product/img_2515_d6934cf5c1064de9833858a3a39ad7c1.jpg",
        "https://product.hstatic.net/200000887901/product/img_6663_copy.1_6a35b6b0eb5f4c938a45352e50d4d4f4.jpg",
        "https://product.hstatic.net/200000887901/product/img_6663_copy_e27e371076d5498aa938aed67fba9aac.jpg",
        "https://product.hstatic.net/200000887901/product/img_6664_copy_60110a3ceadc4a7da75ca52ecec5dee7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ac8c43613a724db1bba5933e5f9ca0bd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_77e5cb46520347d99bea25dfe9f36a03.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-trang-nam-aristino-atl016as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:48.197Z",
      "updated_at": "2025-12-24T19:00:48.197Z"
    },
    {
      "id": 71,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL001AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL001AS0\nMã rút gọn: ATL001AS0\nKiểu dáng: \nThiết kế:\nÁo sát nách mang lại sự mềm mại, nhẹ nhàng, thoáng khí cùng độ co giãn vượt trội. Áo có màu sắc trung tính cùng hình in trẻ trung\nChất liệu: \n90% polyester 10% spandex\nMàu sắc: Xám 12\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2463_34d19dda6d5f484d8f8362c50f737d85.jpg",
        "https://product.hstatic.net/200000887901/product/img_2458_97b512e3ce4c4f768d5415b6902b03ba.jpg",
        "https://product.hstatic.net/200000887901/product/img_2466_0ca597bcfcb143fba1a11135a19d50b7.jpg",
        "https://product.hstatic.net/200000887901/product/img_2448_-_copy_9772cfb2c63a4d5eae41bbc4714ecde0.jpg",
        "https://product.hstatic.net/200000887901/product/img_2465_f60b9cbb4d524cb19f01b4279caec29c.jpg",
        "https://product.hstatic.net/200000887901/product/img_6678_copy.1_bd78c54013f14d23a981e909131739ec.jpg",
        "https://product.hstatic.net/200000887901/product/img_6678_copy_0c737f392d964e7ba31d608756fbb25c.jpg",
        "https://product.hstatic.net/200000887901/product/img_6679_copy_498f7bdbab6144ba92810dc02d252f16.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f057dae3ebdb44f78844378ef518e67c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0070043adf8746c690b060a640dec6bc.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl001as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:00:54.880Z",
      "updated_at": "2025-12-24T19:00:54.880Z"
    },
    {
      "id": 72,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL015AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL015AS0\nMã rút gọn: ATL015AS0\nKiểu dáng: Tanktop\nThiết kế:\nÁo sát nách mang đến sự nhẹ nhàng, thoáng khí và co giãn linh hoạt. \nPolyamide giúp áo bền bỉ, kháng nhăn và giữ form tốt, trong khi Spandex tạo sự linh hoạt và thoải mái khi vận động.Thiết kế đơn giản, hiện đại, phù hợp cho các hoạt động thể thao hoặc phong cách năng động hàng ngày.\nChất liệu: \n85% Polyamide: bền, mịn màng, thấm hút mồ hôi tốt.\n15% Spandex: co giãn linh hoạt, thoải mái vận động. \nMàu sắc: Xám 2\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc08372_4e37ee13fd90427db79069f4d1bf8e35.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08378_f0f3a0d4336347cea664f76c50a78e10.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08382_3781925eb6df4d8db56b21f9892738fe.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08359_-_copy_abc4505aa2c94ddf8750de0eca9196ac.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08380_d42a8d98f1604a94ba512abe641862fe.jpg",
        "https://product.hstatic.net/200000887901/product/img_0391.1_d7d4600bb6514430be8d6d4a36c7e779.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9cd996ec306943128ece148ff0a1b5c1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6b990398c08e492f8a4e76da973e4cce.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6c36956455a8489ea5c71896655eca12.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9f377b7270894755a8287a078746bce2.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl015as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:02.159Z",
      "updated_at": "2025-12-24T19:01:02.159Z"
    },
    {
      "id": 73,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL010AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL010AS0\nMã rút gọn: ATL010AS0\nKiểu dáng: Tanktop\nThiết kế:\nÁo sát nách mang đến sự nhẹ nhàng, thoáng khí và co giãn linh hoạt. \nPolyamide giúp áo bền bỉ, kháng nhăn và giữ form tốt, trong khi Spandex tạo sự linh hoạt và thoải mái khi vận động.Thiết kế đơn giản, hiện đại, phù hợp cho các hoạt động thể thao hoặc phong cách năng động hàng ngày.\nChất liệu: \n85% Polyamide: bền, mịn màng, thấm hút mồ hôi tốt.\n15% Spandex: co giãn linh hoạt, thoải mái vận động. \nMàu sắc: Đen 1\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_7da561c46179418f85a3fbaf8134903a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_98f6e1fa22a0420ca9b37d411043c0c4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f3b829aaceb7422c84eb702679a9a4e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8d1294463b9745e69282fe27cad68e2c.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08305_c89640a253934b4f88fc69457056f6ae.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4889f62b06564e50801e25e123742cde.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_246b23805ee349f2ad604b28aca9dcba.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4d020e1944134e3a967798a1c04b3707.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6152cb3d912b4662a25b60824e7f21f7.jpg",
        "https://product.hstatic.net/200000887901/product/img_9309_5694203717a9416da079bbe12a9c1e01.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl010as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:12.230Z",
      "updated_at": "2025-12-24T19:01:12.230Z"
    },
    {
      "id": 74,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL011AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL011AS0\nMã rút gọn: ATL011AS0\nKiểu dáng: Tanktop\nThiết kế:\nÁo sát nách mang đến sự nhẹ nhàng, thoáng khí và co giãn linh hoạt. \nPolyamide giúp áo bền bỉ, kháng nhăn và giữ form tốt, trong khi Spandex tạo sự linh hoạt và thoải mái khi vận động.Thiết kế đơn giản, hiện đại, phù hợp cho các hoạt động thể thao hoặc phong cách năng động hàng ngày.\nChất liệu: \n85% Polyamide: bền, mịn màng, thấm hút mồ hôi tốt.\n15% Spandex: co giãn linh hoạt, thoải mái vận động. \nMàu sắc: Xám xanh 14\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc08401_bc44d9bc7f8b4635b2078b047cb79ddd.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08405_f1c77f18b5f34577bd55db1f6868511a.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08408_72e2f967d4d54aa0b81dccc8e1baa337.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08387_-_copy_46b43434d8aa4737be76684ee02bf4fa.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08407_6b4f483c47a74614a022256725c0471a.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl011as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:20.587Z",
      "updated_at": "2025-12-24T19:01:20.587Z"
    },
    {
      "id": 75,
      "name": "Áo Ba Lỗ Tanktop Nam Aristino ATL012AS0",
      "description": "Tên Sản Phẩm: Áo Ba Lỗ Tanktop Nam Aristino ATL012AS0\nMã rút gọn: ATL012AS0\nKiểu dáng: Tanktop\nThiết kế:\nÁo sát nách mang đến sự nhẹ nhàng, thoáng khí và co giãn linh hoạt. \nPolyamide giúp áo bền bỉ, kháng nhăn và giữ form tốt, trong khi Spandex tạo sự linh hoạt và thoải mái khi vận động.Thiết kế đơn giản, hiện đại, phù hợp cho các hoạt động thể thao hoặc phong cách năng động hàng ngày.\nChất liệu: \n85% Polyamide: bền, mịn màng, thấm hút mồ hôi tốt.\n15% Spandex: co giãn linh hoạt, thoải mái vận động. \nMàu sắc: Xám 7\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 350000,
      "sale_price": null,
      "category_id": 5,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_c088543cfc184394bdbeba2e312792a3.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_06a7750cb5544b62be4477713afa2087.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4befa3a1e2174468b61d3f164642ad56.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a52344fa40214606be5c35d532639c8a.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08453_-_copy_1bc32f7f30da46f485a0c6c066f3663c.jpg",
        "https://product.hstatic.net/200000887901/product/img_0386.1_0dcadc52ea7d4177a28d64acc88114f0.jpg",
        "https://product.hstatic.net/200000887901/product/img_0386_d129f05468e94526b1ad8e2a8bb420de.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d7ad245dca454d2685483c938e182f70.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e4d2f8384e3745d898facc072dfb6b8f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f0e365ae57194714bacb5a5482889c39.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-ba-lo-tanktop-nam-aristino-atl012as0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:27.597Z",
      "updated_at": "2025-12-24T19:01:27.597Z"
    },
    {
      "id": 76,
      "name": "Quần Âu Nam Aristino Slim Fit ATRR19A",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim Fit ATRR19A\nMã rút gọn: ATRR19A\nKiểu dáng: Dáng ôm / Slim Fit tăng đơ\nThiết kế:\nQuần âu Aristino với phom dáng Slim Fit ôm vừa vặn, tôn lên đường nét lịch lãm nhưng vẫn giữ sự thoải mái trong mọi cử động.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ tạo nên dấu ấn thương hiệu.\nThiết kế tiện dụng với túi xẻ hai bên, túi phụ có cài khuy sau, vừa tăng tính ứng dụng vừa hoàn thiện diện mạo chỉn chu, tinh tế.\nChất liệu:\n68% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n3% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/2i3a6357.1_78da5e75a1fe48ab9f2756495ef83238_06edff54a85641379ad356c887a8e638.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6357_f0d70cab838a497796678449bb5690da_553c2726052a427682206720318052eb.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6358_dda7e2e845934ab9a7c5946136f9d8a2_f507e6cd052f46669e24fbec2d92f670.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6360_fde34fb8701e4771b64ee345f5200864_9e5b32c7caf04e6eb6de83883e982583.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6359_0facfc5d16d4413c93dd143f350d4c8b_92327db696904203899e79eb63d178b7.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atrr19a",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:46.159Z",
      "updated_at": "2025-12-24T19:01:46.159Z"
    },
    {
      "id": 77,
      "name": "Quần Âu Nam Aristino Regular Fit ATRR20A",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATRR20A\nMã rút gọn: ATRR20A\nKiểu dáng: Dáng vừa/ Regular Fit tăng đơ\nThiết kế:\nQuần âu Aristino với phom dáng Regular Fit suông, thoải mái nhưng vẫn vừa vặn với cơ thể.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ tạo nên dấu ấn thương hiệu.\nThiết kế tiện dụng với túi xẻ hai bên, túi phụ có cài khuy sau, vừa tăng tính ứng dụng vừa hoàn thiện diện mạo chỉn chu, tinh tế.\nChất liệu:\n68% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n3% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Xanh tím than 86, Xám 38\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/2i3a6362.1_8451790c04464b2ca4bd11d103be59c3_346c3dc8a35b48d78e0ddc6b15d27888.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6362_e9cb26da503242c9a9826b1c0a41f5ce_7b07da5386444716a9447139e1d96197.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6363_cfe0f57bcfa6471f9be08f1ee5e899e8_01a53e198e1642f99e00740e95abc81e.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6365_4e88c16ea880464c9ca12786e171c972_40771dc474a64d31af88b61fadd003ab.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6364_7f4da7bc20ee4a7f8b66f22c498419b9_7e78f50bfb504d01850c252a2f9893ec.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atrr20a",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:01:52.621Z",
      "updated_at": "2025-12-24T19:01:52.621Z"
    },
    {
      "id": 78,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0080S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATR0080S1\nMã sản phẩm: ATR0080S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu phom Regular Fit phù hợp với nhiều dáng người, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone màu đen basic cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3%Spandex tạo độ co giãn\nMàu sắc: Đen 20\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1043_92ca7894ee28456dac0bdd27944d7cd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0003_1_c4a8fc30f36b420abb9951f1cd4ba511.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1100_6bc548df313e459895f51498514b4d36.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1105_3a8afd9d838646688cb152b0fa016f53.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e3511e5e92f3420c8748db438719e78f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0080s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:00.307Z",
      "updated_at": "2025-12-24T19:02:00.307Z"
    },
    {
      "id": 79,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0090S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATR0090S1\nMã sản phẩm: ATR0090S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu phom Regular Fit phù hợp với nhiều dáng người, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone xanh tím than nam tính cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3%Spandex tạo độ co giãn\nMàu sắc: Xanh tím than 86\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1037_454385874c514b14994a263c1172e7c6.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0031_1_9dc1da378ca74a9ba7aac1be4e87bdd9.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0033_1_f5d9f41bfbeb4954bf627209446c8ecf.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0035_1_c9fbbfcb55cc4f57892eca3b09ca574b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_41f74178d8df4cbaa16932f93717f9fd.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0090s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:08.542Z",
      "updated_at": "2025-12-24T19:02:08.542Z"
    },
    {
      "id": 80,
      "name": "Quần Âu Nam Aristino Cropped ATR0610Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0610Z\nMã sản phẩm: ATR0610Z\nKiểu dáng: Dáng ôm vừa, ngắn/Cropped\nThiết kế:\nQuần âu phom cropped ôm vừa, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone be thanh lịch cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp quần giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3% Spandex tạo độ co giãn nhẹ\nMàu sắc: Be 145 M Slub\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_7082_668a7f4a8b504c41a136a3e9c8a422fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7087_7da21b19964c4b93ba45db6ff4c09bdc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7088_c7aa483dcd704957a83e15cc06cd805a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7078_03a44c2f0da44379808c115f7a6ae400.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0610z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:16.549Z",
      "updated_at": "2025-12-24T19:02:16.549Z"
    },
    {
      "id": 81,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0190S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit  ATR0190S1\nMã sản phẩm: ATR0190S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu Aristino phom Regular Fit suông nhẹ, tôn dáng cân đối, vừa vặn thoải mái, đem lại phong thái tự tin và lịch lãm cho quý ông.\nThiết kế basic tối giản, với chi tiết túi xẻ hai bên, túi phụ và túi cài khuy phía sau, tạo nên diện mạo chỉn chu trong từng đường nét.\nGam xám trung tính thanh lịch giúp quý ông linh hoạt phối đồ từ công sở sang trọng đến những buổi gặp gỡ tinh gọn đầy phong cách.\nChất liệu:\n68% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\n29% Rayon mang lại sự mềm mại, thấm hút tốt và độ rũ tự nhiên, tạo cảm giác thoải mái suốt ngày dài.\n3% Spandex tạo độ co giãn\nMàu sắc: Xám 38\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000624_355b6edaaa344bf7ac632dba157622b1_711566f4015742e88e08b88900fe8205.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000615_1_24a37deeaee24e8b870161293cd3139b_46472f53d49246d1b9c504ad4699522e.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000619_9a996f37abf240379e560b18c87b9460_7b2ce9a9d19f48209fd7ac067f0a9da3.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000625_0fd5d8d76bf746b889917f25c2df88f9_1417ea47904847558f6847b69561280a.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000615_a0858051b6c7403ab5a4dbf90d662917_5721eac95413402592986e389f74c559.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0190s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:24.710Z",
      "updated_at": "2025-12-24T19:02:24.710Z"
    },
    {
      "id": 82,
      "name": "Quần Âu Nam Aristino Cropped ATR0600Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0600Z\nMã sản phẩm: ATR0600Z\nKiểu dáng: Dáng ôm vừa, ngắn/Cropped\nThiết kế:\nQuần âu phom cropped ôm vừa, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone be thanh lịch, hiệu ứng solid cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\nĐang cập nhật\nMàu sắc: Be 104 Solid\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 895000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_3953.1_e766dc6896ce4b12aadeb6deae08f70a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3953_6b88c36c264444a3846bc315a6558e01.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3954_abfe6e26dcea496c81c2a485fb494bd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d4e85d96cd9c4f3080d31a5fa663dba8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3956_cd955348f26d4d05b38dc39fd5728724.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0600z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:32.809Z",
      "updated_at": "2025-12-24T19:02:32.809Z"
    },
    {
      "id": 83,
      "name": "Quần Âu Nam Aristino Slim Fit ATR0360S3",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim Fit ATR0360S3\nKiểu dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nChất liệu thoải mái với độ co giãn cao và thoáng khi, khả năng chống thấm nước tốt\nMàu sắc trang nhã cực kỳ dễ phối đồ, cho phép quý ông tự tin kết hợp với nhiều kiểu áo sơ mi và áo vest khác nhau.\nChất liệu:\n80% Polyamide: Nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex: Co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon: Mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nMàu sắc: Be 88\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_0778.1_847a1eac71fa487a89cbfa9e223c64bb.jpg",
        "https://product.hstatic.net/200000887901/product/img_0778_b8486ea1504c44688e951461b40fe212.jpg",
        "https://product.hstatic.net/200000887901/product/img_0781_0c19dc74ce3948229b1205df31342fdc.jpg",
        "https://product.hstatic.net/200000887901/product/img_0779_7432380b3d124350b455c77377ed7031.jpg",
        "https://product.hstatic.net/200000887901/product/img_0780_5051bd5b61f14ffc844586330bd69d67.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0360s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:39.996Z",
      "updated_at": "2025-12-24T19:02:39.996Z"
    },
    {
      "id": 84,
      "name": "Quần Âu Nam Đen Slim Fit Aristino ATR0350S2",
      "description": "Tên sản phẩm: Quần Âu Nam Đen Slim Fit Aristino ATR0350S2\nKiểu dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nTone đen lịch lãm, hiện đại và chỉn chu\nThiết kế nổi bật với chi tiết chiết 2 đường, túi chéo diễu chỉ tinh xảo, phối logo chữ ký tinh tế\nChất liệu:\n80% Polyamide nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nMàu sắc: Đen 09\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_262a02da6e094e48b52e25add802b45c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6944_277b7b1e27084622a848c8bb4135b2b5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6945_-_copy_5d31e7b52a694a8688df536c39eedc30.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c4eb6b2939e04048931a2a5590a5fc15.jpg",
        "https://product.hstatic.net/200000887901/product/img_1527.1_03031b4d020d452f879ed2fb30ed5d01.jpg",
        "https://product.hstatic.net/200000887901/product/img_1527_6d7dfbe7303e47d6bf6af68c1787e92b.jpg",
        "https://product.hstatic.net/200000887901/product/img_1528_0f6801542c314c72952535de497c4d0d.jpg",
        "https://product.hstatic.net/200000887901/product/img_1530_47db444d45114f368dad168d44e7cd6f.jpg",
        "https://product.hstatic.net/200000887901/product/img_1529_66885cd326104976abef909972dde9e1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-den-slim-fit-aristino-atr0350s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:46.515Z",
      "updated_at": "2025-12-24T19:02:46.515Z"
    },
    {
      "id": 85,
      "name": "Quần Âu Nam Xám Aristino Slim Fit ATR0250S2",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Aristino Slim Fit ATR0250S2\nMã sản phẩm: ATR0250S2\nForm Dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nChất liệu thoải mái với độ co giãn cao và thoáng khi, khả năng chống thấm nước tốt\nMàu sắc trung tính cực kỳ dễ phối đồ, cho phép quý ông tự tin kết hợp với nhiều kiểu áo sơ mi và áo vest khác nhau.\nChất liệu:\n80% Polyamide: Nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex: Co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon: Mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xám 93\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_0783.1_4f2660d189924b53a8e5334632ab9642.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ff2cd2e51cd54e7484e09eca1181e95e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_936c9a0bc03a41238f40603785e82076.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9039ef1536cc44eda71e87520e40bc4d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_130dce84339e412e9412461acfea9ddd.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-aristino-slim-fit-atr0250s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:02:53.190Z",
      "updated_at": "2025-12-24T19:02:53.190Z"
    },
    {
      "id": 86,
      "name": "Quần Âu Nam Xám Kẻ Aristino Cropped ATR0420S3",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Kẻ Aristino Cropped ATR0420S3\nMã sản phẩm: ATR0420S3\nForm Dáng: Cropped/ Dáng ngắn\nThiết kế:\nDáng Cropped ngắn tới mắt cá chân, tạo cảm giác trẻ trung thời thượng.\nThiết kế có ly xếp phía trước – tạo điểm nhấn sang trọng, lịch lãm, đồng thời giúp quần lên form chuẩn khi mặc.\nCạp quần có đai lưng mở rộng và khuy cài, tăng sự chắc chắn và chi tiết tinh tế.\n2 túi xéo trước và 2 túi viền sau, tiện dụng và hài hòa tổng thể.Màu sắc và họa tiết vân chìm cực kỳ tinh tế, hiện đại.\nXám sáng pha họa tiết kẻ nhỏ – mang lại cảm giác tươi mới, phù hợp với khí hậu nóng và tạo sự trẻ trung, sang trọng.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xám 21 Kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_2093_1e5bf9dcd9954a02960989c36e70f710.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2094_2418d49679ad416588fdc7555d289340.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2110_fd919d61fdc143438f01fe2655c86f69.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2084_491b8f8622e44da38af2b59c5593efc8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_273432fb147346ec83ab0f0c02e66eae.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5b059fb1bc7640c592ddaa007a50ad77.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af3040c975e04e87b93cb9625601f4f2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f07e84f3ead448ff82f9af67802c777e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cc2ac9828ffa4f05b22c0163f66b0bb0.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-ke-aristino-cropped-atr0420s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:01.708Z",
      "updated_at": "2025-12-24T19:03:01.708Z"
    },
    {
      "id": 87,
      "name": "Quần Âu Nam Kẻ Aristino Cropped ATR0410S3",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Aristino Cropped ATR0410S3\nMã sản phẩm: ATR0410S3\nForm Dáng: Cropped/ Dáng ngắn\nThiết kế:\nDáng Cropped ngắn tới mắt cá chân, tạo cảm giác trẻ trung thời thượng.\nThiết kế có ly xếp phía trước – tạo điểm nhấn sang trọng, lịch lãm, đồng thời giúp quần lên form chuẩn khi mặc.\nThiết kế tối giản, không hoạ tiết rườm rà – phù hợp với phong cách thanh lịch, chuyên nghiệp.\nCó 2 túi xéo trước và 2 túi viền sau, tiện lợi và cân đối tổng thể.\nĐai quần có đỉa để phối cùng thắt lưng khi cần – tăng vẻ chỉn chu.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xanh tím than 38mf\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_0816_1539bc44afe74ad0a42102a0673b90a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0814_383f65464e6e4f428925128b6aecc8b2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0827_a41b7b16db534b8f9d41185ad1cef296.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0807_-_copy_636c64c25d3c4d0e836f59d72113d4d9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_996523358b9f416ea5b37b3c51275316.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9c2e82cbb0154af0aeda93043656f239.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cc30ea3419b140bf97e835fe14867c73.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b3a7c503d2e64de1a42085b0bb20c0f2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4e7472a0318b43c5a933b2699e764b38.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-aristino-cropped-atr0410s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:09.744Z",
      "updated_at": "2025-12-24T19:03:09.744Z"
    },
    {
      "id": 88,
      "name": "Quần Âu Đen Nam Aristino Business Wool lông cừu Fiero 1TR0090S1",
      "description": "Tên Sản Phẩm: Quần Âu Đen Nam Aristino Business Wool lông cừu Fiero 1TR0090S1\nMã rút gọn: 1TR0090S1\nKiểu dáng: Fiero\nThiết kế:\nMàu Đen cơ bản, dễ phối với mọi loại áo sơ mi hoặc áo polo.\nLưng cạp vừa, có đỉa quần để phối cùng thắt lưng.\nKhuy cài phía trước + khóa kéo, chuẩn chỉnh phong cách quần tây truyền thống.\nHai túi xéo phía trước và túi hậu có nắp, tiện lợi khi mang theo ví hoặc điện thoại.\nLy quần được ép sắc nét, tạo cảm giác chỉnh chu và chuyên nghiệp\nĐộ co giãn nhẹ, giúp di chuyển thoải mái.\nKhông nhăn, dễ ủi, giữ phom quần suốt cả ngày dài.\nThấm hút tốt, phù hợp với môi trường văn phòng hoặc thời tiết nóng ẩm\nChất liệu:  Wool lông cừu cao cấp: 50%Wool (lông cừu )50% Polyester\nMàu sắc: Đen 9\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt dưới 30°C, dùng chất tẩy nhẹ.\nỦi nhiệt độ thấp, tránh ủi trực tiếp lên họa tiết và logo.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp.\nKhông sử dụng máy sấy để tránh co rút và mất form dáng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 2350000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_0180_efc929f901144a308ecad425ed162eb8.jpg",
        "https://product.hstatic.net/200000887901/product/img_0177_9dab3b33782a42cf8c1541cacd6865ef.jpg",
        "https://product.hstatic.net/200000887901/product/img_0184_457312859f4b4a7fa37387cb4d63a490.jpg",
        "https://product.hstatic.net/200000887901/product/img_0158_-_copy_5d21615519ca4bc0905fd4499a930263.jpg",
        "https://product.hstatic.net/200000887901/product/img_0289.1_91c806c360144be8ab14f5d57496df6c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7bd6de0e84f743a68a005597061b6fe6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6c00da533cb74287b120e0d81c602017.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_919f4efd4497428a80512141c33bd5d4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7cdfad2de7484c67bea5a3d00b9be0b6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-den-nam-aristino-business-wool-long-cuu-fiero-1tr0090s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:15.613Z",
      "updated_at": "2025-12-24T19:03:15.613Z"
    },
    {
      "id": 89,
      "name": "Quần Âu Nam Aristino Business Regular Fit 1TR0050S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Business Regular Fit 1TR0050S1\nMã sản phẩm: 1TR0050S1\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nThiết kế cổ điển và thanh lịch – phù hợp cho môi trường công sở, sự kiện trang trọng hoặc phối đồ smart-casual.\nCạp có đỉa quần, phù hợp để phối với thắt lưng.\nLy giữa dập nếp tạo đường gân sắc nét, tăng tính lịch sự, chỉn chu.\nTúi chéo hai bên hông + túi sau: tiện dụng và mang tính thẩm mỹ cao.\nMàu sắc: Navy – tông màu trung tính dễ phối, phù hợp với áo sơ mi trắng, xanh, pastel hay thậm chí là áo thun polo.\nChất vải thoáng khí và nhẹ, tạo cảm giác dễ chịu khi mặc cả ngày dài.\nCo giãn nhẹ, hỗ trợ vận động linh hoạt\nGiữ form tốt, không bị bai dão hay nhăn sau nhiều lần giặt.\nKhả năng chống nhăn cao, giúp giữ vẻ ngoài luôn chỉn chu.\nChất liệu:\n50%Wool (lông cừu )\n50% Polyester\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun, polo hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xám 108\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\n\nHướng dẫn giặt ủi:\n\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 2350000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_5518_665cd5cb402b4570ab94280249342520.jpg",
        "https://product.hstatic.net/200000887901/product/img_5520_0c25989326924db6b0ce8143ddc4d8ca.jpg",
        "https://product.hstatic.net/200000887901/product/img_5544_7a63c7138fa54e899025d12a3b4350b1.jpg",
        "https://product.hstatic.net/200000887901/product/img_5549_82be7bfb099b4654b025f955a1bfaaa1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4bf3d0fb354a4954b1bffb7c03008eeb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d0bb9bd2185d406099ec3114f4c9ebfe.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4dc66d0e9b0a4a22ba982dde2974c710.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_32efdb1704fc41b7a64e386f2dbf31f0.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f9203f9ccc504aec843c2d4941b02f53.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-business-regular-fit-1tr0050s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:23.680Z",
      "updated_at": "2025-12-24T19:03:23.680Z"
    },
    {
      "id": 90,
      "name": "Quần Âu Nam Kẻ Aristino Cropped ATR0460S3",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Aristino Cropped ATR0460S3\nMã sản phẩm: ATR0460S3\nKiểu dáng: Cropped/ Dáng ngắn tới mắt cá chân\nThiết kế:\nQuần tây ống đứng, phần ống không quá rộng cũng không quá ôm, tạo cảm giác gọn gàng và chuyên nghiệp.\nVải có kết cấu nhẹ, thoáng mát và có độ đứng dáng, phù hợp với môi trường công sở hoặc các dịp trang trọng.\nMàu xanh navy đậm (xanh than), rất dễ phối với áo sơ mi trắng, xám, hoặc các màu trung tính.\nCạp quần có đỉa để đeo thắt lưng.\nCó khóa kéo và cúc cài phía trước.\nCó hai túi chéo hai bên.\nNếp ly giữa ống quần giúp tạo sự chỉn chu và kéo dài đôi chân về mặt thị giác.\nChất liệu:\n69% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Visco mịn mượt, giúp quần nhẹ, thoáng mát tối đa\n2% Spandex tạo độ co giãn nhẹ.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xanh tím than 153 kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_0836_e442b86a78ed42b2904a3eb3ff5a1aa6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0837_123969be501b4aa0aeae0ac2b771139e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0840_b1576a97887b47dbbe76f30521fd5893.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0831_ee9abe02cf594af4b626f2f0545475a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d49924da05ac4e62924168775becbb10.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a8a42a7db9154b56b12ab26e1aa2d782.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af7495c5253643b290b41f916ef1fab9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ba05aa2267c4402db5bc6d7be57decdc.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_32b96209a3d844f99bef7b809ef3369c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-aristino-cropped-atr0460s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:31.776Z",
      "updated_at": "2025-12-24T19:03:31.776Z"
    },
    {
      "id": 91,
      "name": "Quần Âu Nam Aristino Regular Fit ATRR20A",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATRR20A\nMã rút gọn: ATRR20A\nKiểu dáng: Dáng vừa/ Regular Fit tăng đơ\nThiết kế:\nQuần âu Aristino với phom dáng Regular Fit suông, thoải mái nhưng vẫn vừa vặn với cơ thể.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ tạo nên dấu ấn thương hiệu.\nThiết kế tiện dụng với túi xẻ hai bên, túi phụ có cài khuy sau, vừa tăng tính ứng dụng vừa hoàn thiện diện mạo chỉn chu, tinh tế.\nChất liệu:\n68% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n3% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Xanh tím than 86, Xám 38\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/2i3a6362.1_8451790c04464b2ca4bd11d103be59c3_346c3dc8a35b48d78e0ddc6b15d27888.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6362_e9cb26da503242c9a9826b1c0a41f5ce_7b07da5386444716a9447139e1d96197.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6363_cfe0f57bcfa6471f9be08f1ee5e899e8_01a53e198e1642f99e00740e95abc81e.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6365_4e88c16ea880464c9ca12786e171c972_40771dc474a64d31af88b61fadd003ab.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6364_7f4da7bc20ee4a7f8b66f22c498419b9_7e78f50bfb504d01850c252a2f9893ec.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atrr20a",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:50.464Z",
      "updated_at": "2025-12-24T19:03:50.464Z"
    },
    {
      "id": 92,
      "name": "Quần Jeans Nam Xanh Đậm Hiệu Ứng Giặt Mài Aristino AJN0060S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Xanh Đậm Hiệu Ứng Giặt Mài Aristino AJN0060S0\nMã rút gọn: AJN0060S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nĐiểm nhấn tinh tế của quần jeans nằm ở phần nút quần với biểu tượng Mặt Trời Huyền Thoại tạo nên vẻ sang trọng và đậm dấu ấn văn hoá.\nQuần jeans phom regular fit có dáng suông, độ ôm vừa phải và thoải mái, không quá bó sát hay quá rộng, giúp che khuyết điểm cơ thể và dễ dàng vận động.\nChất vải có độ bền cao và khả năng chịu mài mòn tốt, dù sau nhiều lần giặt cũng không bị sờn.\nChất liệu: \n99.5% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n0.5% Spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm đậm\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 119500000,
      "sale_price": 1075500,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam_6e47db8a5e2b4f3c83c93abce9efff09_e5235069ac294f0f95f2caa7e9ddb1e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam-2_1d0ef2e6bf9b44f5a3de9eb0ba227cd7_f4a2c54c5db345e8a0c9c2017b74902b.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam-3_14e1dc6ab73c4727baf2b9c2c01623d6_3fcd88872d0b4ffab802008aa6550848.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam1_f6de68f52c2a439e85ab3ef4e5bfbae5_ff885248cbd7449ba4e5113752595dd8.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-xanh-dam-hieu-ung-giat-mai-aristino-ajn0060s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:03:58.880Z",
      "updated_at": "2025-12-24T19:03:58.880Z"
    },
    {
      "id": 93,
      "name": "Quần Jeans Nam Xanh Nhạt Hiệu Ứng Giặt Mài Aristino AJN0060S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Xanh Nhạt Hiệu Ứng Giặt Mài Aristino AJN0060S0\nMã rút gọn: AJN0060S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nĐiểm nhấn tinh tế của quần jeans nằm ở phần nút quần với biểu tượng Mặt Trời Huyền Thoại tạo nên vẻ sang trọng và đậm dấu ấn văn hoá.\nQuần jeans phom regular fit có dáng suông, độ ôm vừa phải và thoải mái, không quá bó sát hay quá rộng, giúp che khuyết điểm cơ thể và dễ dàng vận động.\nChất vải có độ bền cao và khả năng chịu mài mòn tốt, dù sau nhiều lần giặt cũng không bị sờn.\nChất liệu: \n99.5% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n0.5% Spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm nhạt\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 119500000,
      "sale_price": 1075500,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat-2_b8e1c7edecb1480eba3ea272f067b0ea.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat_09429ef0d6af4627abc28e9143adcac1.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat-3_88915544d12b4f5ab8eafc5521de058e.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat1_803f25e2fd054d7bb7264fe6950f1663.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-xanh-nhat-hieu-ung-giat-mai-aristino-ajn0060s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:06.748Z",
      "updated_at": "2025-12-24T19:04:06.748Z"
    },
    {
      "id": 94,
      "name": "Quần Dài Gió Nam Aristino Regular Fit AWP002BS0",
      "description": "Tên sản phẩm: Quần Dài Gió Nam Aristino Regular Fit AWP002BS0\nMã sản phẩm: AWP002BS0\nKiểu dáng: Regular Fit\nThiết kế:\nQuần gió phom dáng Regular Fit có độ suông vừa phải, mang lại cảm giác thoải mái và tự tin trong mọi hoàn cảnh.\nThiết kế basic với màu sắc nam tính, dễ phối đồ, giữ phom dáng tối đa và phù hợp với nhiều dáng người.\nỐng côn nhẹ, gấu suông (không bo)\nCạp chun co giãn thoải mái; túi xẻ hai bên tiện dụng.\nVải gió nhẹ, ít nhăn, khô nhanh; thích hợp di chuyển hằng ngày, tập nhẹ, du lịch.\nĐường cắt–may panel ở khu vực gối và ống tạo form gọn; logo nhỏ đặt dọc ống trái làm điểm nhấn.\nChất liệu:\n- 100% Polyester giúp quần mỏng nhẹ, có độ trơn trượt, màu sắc nét và giữ màu tốt theo thời gian\nMàu sắc: Đen 8, Xanh tím than 73\nSize: S/M/L/XL/XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nBảo quản nơi khô ráo, thoáng mát để tránh ẩm mốc và giữ màu sắc bền lâu. Tránh phơi dưới ánh nắng gắt.\n\nHướng dẫn giặt ủi:\n\nGiặt máy ở chế độ nhẹ với nước lạnh để giữ form dáng và chất liệu vải.\nKhông sử dụng chất tẩy mạnh để tránh làm phai màu.\nỦi ở nhiệt độ thấp để bảo vệ bề mặt vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác biệt do ánh sáng khi chụp ảnh hoặc màn hình hiển thị của khách hàng.",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5161_b7eb66d24957401298d568f440f947e6.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5164_4c7bb1687aa74e4c819ea9f690880778.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5172_0788d6c911a14c77b564765f4037017c.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5140_-_copy_da4b9dd7875d4fb48d6e818df008e303.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-dai-gio-nam-aristino-regular-fit-awp002bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:14.117Z",
      "updated_at": "2025-12-24T19:04:14.117Z"
    },
    {
      "id": 95,
      "name": "Quần Rời Thu Đông Nam Aristino Regular Fit APA006BS0",
      "description": "Tên sản phẩm: Quần Rời Thu Đông Nam Aristino Regular Fit APA006BS0\nMã sản phẩm: APA006BS0\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần dài thu đông phom dáng Regular fit có độ ôm vừa phải, mang lại cho quý ông cảm giác thoải mái và tự tin trong mọi hoàn cảnh.\nLogo Aristino dập tinh tế bên hông khẳng định phong thái lịch lãm kết hợp hai túi khóa kéo tiện lợi bảo vệ an toàn các vật dụng như điện thoại, ví hay chìa khóa.\nCạp chun linh hoạt và ống quần bo gấu nhẹ giúp giữ phom chuẩn trên mọi vóc dáng, tạo nét năng động, trẻ trung, dễ dàng phối hợp với nhiều trang phục.\nChất liệu: \n78% Cotton (Bông) thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n16% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n6% Spandex tạo độ co giãn\nMàu sắc: Xanh tím than 26, Be 41, Đen 1\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 750000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_1044.1_f86dfa061bd1463db21bd69a38c56ac4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1044_f7a410805de74094b5f703db6b352a59.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1047_bb3c3c4ddcf947d29fd8870fa3ccfa83.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1046_0842e9ae8d0949bcbd326800f786f6dd.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1045_d3bf39b6460146b9b9b2a648a03fed9a.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-roi-thu-dong-nam-aristino-regular-fit-apa006bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:20.331Z",
      "updated_at": "2025-12-24T19:04:20.331Z"
    },
    {
      "id": 96,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0080S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATR0080S1\nMã sản phẩm: ATR0080S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu phom Regular Fit phù hợp với nhiều dáng người, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone màu đen basic cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3%Spandex tạo độ co giãn\nMàu sắc: Đen 20\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1043_92ca7894ee28456dac0bdd27944d7cd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0003_1_c4a8fc30f36b420abb9951f1cd4ba511.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1100_6bc548df313e459895f51498514b4d36.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1105_3a8afd9d838646688cb152b0fa016f53.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e3511e5e92f3420c8748db438719e78f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0080s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:28.644Z",
      "updated_at": "2025-12-24T19:04:28.644Z"
    },
    {
      "id": 97,
      "name": "Quần Rời Thu Đông Nam Aristino Regular Fit APA002BS0",
      "description": "Tên sản phẩm: Quần Rời Thu Đông Nam Aristino Regular Fit APA002BS0\nMã sản phẩm: APA002BS0\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần dài thu đông phom dáng Regular fit có độ ôm vừa phải, mang lại cho quý ông cảm giác thoải mái và tự tin trong mọi hoàn cảnh.\nChữ ký Aristino thêu tinh tế bên hông quần, khẳng định phong thái chuẩn quý ông.\nThiết kế cạp chun dây rút tiện lợi, gam đen nam tính dễ dàng mix-match, giữ phom dáng chuẩn trên nhiều vóc dáng.\nChất liệu: \n63% Polyestergiữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n37% cotton (bông) thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\nMàu sắc: Đen 19, Xám 39\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 795000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_1054.1_f32a20d0b2d04b55b75954f6bd37524c_7bc95312a8e841ed926f433ccfa1e38d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1054_ea577ed8cd6f44cba684a83450ebd511_71992c03e56f48489f5c0ed0e2382382.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1055_b38a2ad470d0437894ca527efd8184f9_2749051cad3d4886b92ac5054f5b00a3.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1057_bdbf4344bbd6446a9263a91121ac291e_d5689e5a47c14b35883851e1190c3d2d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1056_987602880eab4aebaa8ecf70b4795fdf_9df4bd9332174ff689f0873623fb5ae1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-roi-thu-dong-nam-aristino-regular-fit-apa002bs0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:34.796Z",
      "updated_at": "2025-12-24T19:04:34.796Z"
    },
    {
      "id": 98,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0090S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATR0090S1\nMã sản phẩm: ATR0090S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu phom Regular Fit phù hợp với nhiều dáng người, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone xanh tím than nam tính cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3%Spandex tạo độ co giãn\nMàu sắc: Xanh tím than 86\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1037_454385874c514b14994a263c1172e7c6.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0031_1_9dc1da378ca74a9ba7aac1be4e87bdd9.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0033_1_f5d9f41bfbeb4954bf627209446c8ecf.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0035_1_c9fbbfcb55cc4f57892eca3b09ca574b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_41f74178d8df4cbaa16932f93717f9fd.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0090s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:44.807Z",
      "updated_at": "2025-12-24T19:04:44.807Z"
    },
    {
      "id": 99,
      "name": "Quần Âu Nam Aristino Regular Fit ATR0190S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit  ATR0190S1\nMã sản phẩm: ATR0190S1\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu Aristino phom Regular Fit suông nhẹ, tôn dáng cân đối, vừa vặn thoải mái, đem lại phong thái tự tin và lịch lãm cho quý ông.\nThiết kế basic tối giản, với chi tiết túi xẻ hai bên, túi phụ và túi cài khuy phía sau, tạo nên diện mạo chỉn chu trong từng đường nét.\nGam xám trung tính thanh lịch giúp quý ông linh hoạt phối đồ từ công sở sang trọng đến những buổi gặp gỡ tinh gọn đầy phong cách.\nChất liệu:\n68% Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ.\n29% Rayon mang lại sự mềm mại, thấm hút tốt và độ rũ tự nhiên, tạo cảm giác thoải mái suốt ngày dài.\n3% Spandex tạo độ co giãn\nMàu sắc: Xám 38\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000624_355b6edaaa344bf7ac632dba157622b1_711566f4015742e88e08b88900fe8205.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000615_1_24a37deeaee24e8b870161293cd3139b_46472f53d49246d1b9c504ad4699522e.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000619_9a996f37abf240379e560b18c87b9460_7b2ce9a9d19f48209fd7ac067f0a9da3.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000625_0fd5d8d76bf746b889917f25c2df88f9_1417ea47904847558f6847b69561280a.jpg",
        "https://cdn.hstatic.net/products/200000887901/sony_ilce-7rm3_8000x5320_000615_a0858051b6c7403ab5a4dbf90d662917_5721eac95413402592986e389f74c559.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-regular-fit-atr0190s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:52.463Z",
      "updated_at": "2025-12-24T19:04:52.463Z"
    },
    {
      "id": 100,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0130S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0130S0\nMã rút gọn: AKK0130S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc01744_f3d33e47232c46669aed772abee8a623.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01747_acc3934630db47f48994e13a4ab5ff6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01757_a46022973bde49cfad8d6a0392984cb1.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01741_-_copy_4d9f635452c04da491910241118ebd6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1712.1_4b697b9c369c49e5a89e6dc9e4df8911.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1712_53037b9871004051aaab9bf0a8727a71.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1713_ce8826ecba174b37acde2d687b8b0db5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1715_72d79c34d5fa442cbeabfced61200ea8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1714_15234c0e31ba42bf973ba6482fec9841.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0130s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:04:58.122Z",
      "updated_at": "2025-12-24T19:04:58.122Z"
    },
    {
      "id": 101,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0110S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0110S0\nMã rút gọn: AKK0110S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh. \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn \nMàu sắc: Trắng 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_3936.1_89c8ef5cf1e34a0897d8d92030b5019b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3936_4853e0cdb1134534bedbaad89b8ef464.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3939_94629d204d884513906d47d74499bb3e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3937_4b93724456f246c4b11278ea585e5e95.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3940_e4ce5770fbf94583a33962dc455eac11.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3944_cbdab08bc2d74c54b9c7568f13e289a2.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0110s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:05.621Z",
      "updated_at": "2025-12-24T19:05:05.621Z"
    },
    {
      "id": 102,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0120S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0120S0\nMã rút gọn: AKK0120S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Xám 118\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8103_02c0c6ab34ab4f1282da44b782856aab.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8101_633cef0046144c9b942703e57ce0007a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8114_e914270bf2bd41f086f722ef667bae2c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8094_af87de3105ae4cf1a98b8c575d12f10f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3941.1_2aa4cf85751e48a9bc3a4dc2b1b51092.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3943_9f1892bf85c147e09579bb889b37c2c1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3945_9b2f910a34bd44629e08883c72bb0546.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3941_785febfee18e4eddb2b531219693f072.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0120s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:13.900Z",
      "updated_at": "2025-12-24T19:05:13.900Z"
    },
    {
      "id": 103,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0100S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0100S0\nMã rút gọn: AKK0100S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Be 24\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5831_6112906751f049c4ac63bad9a3a0aba1.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5835_dac87aea72394ec083ca89fefc65b52f.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5838_463cda040aa943fca5da36d2f5af2764.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5816_052ccf3efc1b48f7ae99186d2f1cf76e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064.1_6e67d8400a734a5cb746340a26171306.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064_c9fecf3bb4954219afb48ba2aff0ed6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4065_46e30a0f5e324388a692ff77abd784a3.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4066_60d64dff7b974a07bfca6b02472351c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4067_133c306f37ff433e8f2bb0bd37fbcaa6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0100s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:20.413Z",
      "updated_at": "2025-12-24T19:05:20.413Z"
    },
    {
      "id": 104,
      "name": "Quần Âu Nam Aristino Business Regular Fit 1TR0050S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Business Regular Fit 1TR0050S1\nMã sản phẩm: 1TR0050S1\nKiểu dáng: Regular Fit/ Dáng suông\nThiết kế:\nThiết kế cổ điển và thanh lịch – phù hợp cho môi trường công sở, sự kiện trang trọng hoặc phối đồ smart-casual.\nCạp có đỉa quần, phù hợp để phối với thắt lưng.\nLy giữa dập nếp tạo đường gân sắc nét, tăng tính lịch sự, chỉn chu.\nTúi chéo hai bên hông + túi sau: tiện dụng và mang tính thẩm mỹ cao.\nMàu sắc: Navy – tông màu trung tính dễ phối, phù hợp với áo sơ mi trắng, xanh, pastel hay thậm chí là áo thun polo.\nChất vải thoáng khí và nhẹ, tạo cảm giác dễ chịu khi mặc cả ngày dài.\nCo giãn nhẹ, hỗ trợ vận động linh hoạt\nGiữ form tốt, không bị bai dão hay nhăn sau nhiều lần giặt.\nKhả năng chống nhăn cao, giúp giữ vẻ ngoài luôn chỉn chu.\nChất liệu:\n50%Wool (lông cừu )\n50% Polyester\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun, polo hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xám 108\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\n\nHướng dẫn giặt ủi:\n\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 2350000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_5518_665cd5cb402b4570ab94280249342520.jpg",
        "https://product.hstatic.net/200000887901/product/img_5520_0c25989326924db6b0ce8143ddc4d8ca.jpg",
        "https://product.hstatic.net/200000887901/product/img_5544_7a63c7138fa54e899025d12a3b4350b1.jpg",
        "https://product.hstatic.net/200000887901/product/img_5549_82be7bfb099b4654b025f955a1bfaaa1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4bf3d0fb354a4954b1bffb7c03008eeb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d0bb9bd2185d406099ec3114f4c9ebfe.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4dc66d0e9b0a4a22ba982dde2974c710.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_32efdb1704fc41b7a64e386f2dbf31f0.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f9203f9ccc504aec843c2d4941b02f53.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-business-regular-fit-1tr0050s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:26.589Z",
      "updated_at": "2025-12-24T19:05:26.589Z"
    },
    {
      "id": 105,
      "name": "Quần Âu Nam Kẻ Aristino Regular Fit ATR0400S2",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Aristino Regular Fit ATR0400S2\nMã sản phẩm: ATR0400S2\nForm Dáng: Regular Fit/ Dáng suông\nThiết kế:\nDáng Regular Fit, ôm nhẹ từ hông xuống ống quần, tạo cảm giác gọn gàng và tôn dáng.\nThiết kế có ly xếp phía trước – tạo điểm nhấn sang trọng, lịch lãm, đồng thời giúp quần lên form chuẩn khi mặc.\nThiết kế tối giản, không hoạ tiết rườm rà – phù hợp với phong cách thanh lịch, chuyên nghiệp.\nCó 2 túi xéo trước và 2 túi viền sau, tiện lợi và cân đối tổng thể.\nĐai quần có đỉa để phối cùng thắt lưng khi cần – tăng vẻ chỉn chu.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xanh tím than 27 kẻ chìm\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 7,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_1894_43ff1f2a26c64d2b9ff9c917cb607d5f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1891_f83e9b8b360f4ac588d7d0f258f9718c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1908_a895715f3dfb44aab64d731329c09e46.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1884_dab0167c1370444d9fd5bcb7ed5651e8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e0657d531efb4ab2bc75c4f69fedfa81.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_fc9632181ec74c5c96628d9bcf3729c3.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_73c251dc8cf846a991c38e455c098ebf.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a68b6d2ee05e4890b6968368f7d4832b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d5b9028013824968a648808fc0fc969e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-aristino-regular-fit-atr0400s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:32.537Z",
      "updated_at": "2025-12-24T19:05:32.537Z"
    },
    {
      "id": 106,
      "name": "Quần Kaki Nam Aristino Business Casual Fit 1KKU010S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Business Casual Fit 1KKU010S0\nMã rút gọn: 1KKU010S0\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần âu Aristino dòng sẩn phẩm cao cấp với phom dáng Slim Fit ôm vừa vặn, tôn lên đường nét lịch lãm và sự thoải mái trong mọi cử động.\nĐiểm nhấn độc đáo với biểu tượng Mặt Trời huyền thoại được thêu tinh xảo bên hông quần, khẳng định gu thẩm mỹ đẳng cấp và phong thái chuẩn quý ông.\nThiết kế tiện dụng với túi xẻ hai bên, túi phụ và túi cài khuy sau, vừa tăng tính ứng dụng vừa hoàn thiện diện mạo chỉn chu, tinh tế.\nChất liệu:\n100% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\nMàu sắc: Be 2\nSize: 30/31/32/33/34\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 1850000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_0384.1_d2b788779e3846b9afcc9b1c34b389b1_4b8c95972dd54b409e5db776447a31d9.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0384_980bc83b5052405b8da99e21ed7141eb_04894e5775f8448f81e2318dcd0ab9fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0385_4e3fd025ac264db38e55fa6c46a6498b_3d8d64d4953d4991826032474c6423e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0387_3b0f4e13569f47e7b454924e0f7309b5_25be486e95004883bb14858fd4788f5b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0386_dfe389fa6a4b43b0a2293a5e7b47ec6a_ef91c8672e934d95b3cf8ee1340331b2.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-business-casual-fit-1kku010s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:52.530Z",
      "updated_at": "2025-12-24T19:05:52.530Z"
    },
    {
      "id": 107,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0130S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0130S0\nMã rút gọn: AKK0130S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc01744_f3d33e47232c46669aed772abee8a623.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01747_acc3934630db47f48994e13a4ab5ff6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01757_a46022973bde49cfad8d6a0392984cb1.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01741_-_copy_4d9f635452c04da491910241118ebd6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1712.1_4b697b9c369c49e5a89e6dc9e4df8911.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1712_53037b9871004051aaab9bf0a8727a71.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1713_ce8826ecba174b37acde2d687b8b0db5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1715_72d79c34d5fa442cbeabfced61200ea8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1714_15234c0e31ba42bf973ba6482fec9841.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0130s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:05:59.105Z",
      "updated_at": "2025-12-24T19:05:59.105Z"
    },
    {
      "id": 108,
      "name": "Quần Kaki Nam Aristino Fiero AKK0190S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Fiero AKK0190S0\nMã sản phẩm: AKK0190S0\nKiểu dáng: Dáng suông rộng/ Fiero\nThiết kế:\nQuần khaki phom dáng Fiero suông rộng tạo cảm giác thoải mái và tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Xanh rêu 145\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5691_28d03ad85db54d66999e8ddfc9640624_f40c24517f554ee9b33b89da441b4ec1.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5693_f03754e4b5d046a39257edcbcf095ab1_ce477707b4bc4a5c8590948af83ea6de.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5697_8648bf1333b14eb99407dd8dea557514_8113248b08a24f3a90efaca86e4aaa8b.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5703_2c7357ea215e4714bc346b33960e187e_f84ce6d65b2e4c94a572b1f8c60f8826.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1030_2fe9e1a54bc242a9a77304637cb764dd_22a04bf441fc4bc387f4357dae8dd6e6.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0055_1_378aa55d906046c0ae5ecf973b5a3ecc_310d0dbf3486424db1fb6a3ebc051b0e.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0057_b237865ee5a246cf8cf87fb8fa4d9504_0f4c678c30b5430e98d759be15862707.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0049_1_36f134ddcfa849a59b537b1c064bac1e_a6f97dd54d854d1bbdffaf034ab28756.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0047_1_1e2507b2b1df459fbffd6e967fe5923e_121ffec809014ea68b7faea24cc7f082.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-fiero-akk0190s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:05.452Z",
      "updated_at": "2025-12-24T19:06:05.452Z"
    },
    {
      "id": 109,
      "name": "Quần Kaki Nam Aristino Fiero AKK0160S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Fiero AKK0160S0\nMã sản phẩm: AKK0160S0\nKiểu dáng: Dáng suông rộng/ Fiero\nThiết kế:\nQuần khaki phom dáng Fiero suông rộng tạo cảm giác thoải mái và tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác. \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu:\n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Xanh tím than 24\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5603_dc1e8b19fea84192adef0a6360d52679.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5607_1bff0c6593c64a75aba5c654794c1aa1.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5602_f3a7a61fcdc04ef7a36a85cedad51e34.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5610_2c7d7be4f3c6499e80ad30919cc7fb32.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1040_9b8b15eaef2641f0bbd80c302bcf13b3.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0041_1_b0419e76b6df4205b367e6b5ce19020c.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0038_1_160edbddf7234a028bec53345dbadc0c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af236351ffa14f308834635addd05884.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0044_1_ee41f79a186941d9a620602eceb83172.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-fiero-akk0160s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:12.332Z",
      "updated_at": "2025-12-24T19:06:12.332Z"
    },
    {
      "id": 110,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0030S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0030S0\nMã rút gọn: AKK0030S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần khaki phom dáng Slim Fit ôm vừa vặn tạo cảm giác thoải mái, tôn dáng người mặc.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ và tinh tế mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi. \nChất liệu: \n59% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n39% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n2% Spandex tạo độ co giãn\nMàu sắc: Xám 32\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8039_8f5bcfb711654c22a205c4d1d2318d33.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8043_60c85345cb8e4bf4bfba5ed732726769.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8053_c64d8099c4af4610b8c4f0a4dd9bb61d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8030_1654063741bb4d74a74ea9578515fed2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3929.1_ebf09d28c5704334a6a4150b01e2acf2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3929_f49415f9bd95470592c9c6e03a314839.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_056449fb23a747f9996ce296459c72c4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3931_0fce305079e34c3cab93fb60cbd76cd9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e7bacfbf86b44760a8b06a0de69bb93d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0030s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:18.546Z",
      "updated_at": "2025-12-24T19:06:18.546Z"
    },
    {
      "id": 111,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0010S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0010S0\nMã rút gọn: AKK0010S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần khaki phom dáng Slim Fit ôm vừa vặn tạo cảm giác thoải mái, tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác \nThiết kế basic với túi xẻ 2 bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n59% Cotton  thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n39% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n2% Spandex tạo độ co giãn \nMàu sắc: Be 16\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1048_8a21fa51a25744af9f0e88db41335810.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8a866a73feb245f38d4a2ee78bcc415e.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0079_0e97cb56c60d4929a4989a3eba8bab3a.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0075_a7dfac0b87a74c5b8f94a0b3a6b11cea.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0073_30affa64d7484eb78f782cb0b113e35d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0010s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:26.387Z",
      "updated_at": "2025-12-24T19:06:26.387Z"
    },
    {
      "id": 112,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0110S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0110S0\nMã rút gọn: AKK0110S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh. \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn \nMàu sắc: Trắng 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_3936.1_89c8ef5cf1e34a0897d8d92030b5019b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3936_4853e0cdb1134534bedbaad89b8ef464.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3939_94629d204d884513906d47d74499bb3e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3937_4b93724456f246c4b11278ea585e5e95.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3940_e4ce5770fbf94583a33962dc455eac11.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3944_cbdab08bc2d74c54b9c7568f13e289a2.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0110s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:38.103Z",
      "updated_at": "2025-12-24T19:06:38.103Z"
    },
    {
      "id": 113,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0050S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0050S0\nMã rút gọn: AKK0050S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\n Quần khaki phom dáng Slim Fit ôm nhẹ, thoải mái nhưng vẫn tôn dáng người mặc\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn \nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8074_38bef605dc644031b39528cbdb61a688.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8070_b14216c4447f48429fc7d49e041c60ff.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8085_2e9d535ca421493da9fa87d54c3fa904.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8066_d7ec25e2ce464cc59261860e8576d8d8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3947.1_4520881460a541d1ad2735c4595b6e04.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3947_2dd7657dfdde49faa36226249bf09fbc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3948_7eb9e1cf2d894d4c8552fa8e810ba401.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_800dac7daa5c4759a6a5e8f7509a697c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3949_e6d6c46a7b7d46dbab9950c418ac842c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0050s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:44.978Z",
      "updated_at": "2025-12-24T19:06:44.978Z"
    },
    {
      "id": 114,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0120S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0120S0\nMã rút gọn: AKK0120S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Xám 118\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh. \nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp. \nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8103_02c0c6ab34ab4f1282da44b782856aab.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8101_633cef0046144c9b942703e57ce0007a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8114_e914270bf2bd41f086f722ef667bae2c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8094_af87de3105ae4cf1a98b8c575d12f10f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3941.1_2aa4cf85751e48a9bc3a4dc2b1b51092.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3943_9f1892bf85c147e09579bb889b37c2c1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3945_9b2f910a34bd44629e08883c72bb0546.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3941_785febfee18e4eddb2b531219693f072.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0120s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:06:51.402Z",
      "updated_at": "2025-12-24T19:06:51.402Z"
    },
    {
      "id": 115,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0100S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0100S0\nMã rút gọn: AKK0100S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần khaki phom dáng Regular Fit suông vừa, thoải mái nhưng vẫn tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Be 24\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5831_6112906751f049c4ac63bad9a3a0aba1.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5835_dac87aea72394ec083ca89fefc65b52f.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5838_463cda040aa943fca5da36d2f5af2764.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5816_052ccf3efc1b48f7ae99186d2f1cf76e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064.1_6e67d8400a734a5cb746340a26171306.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4064_c9fecf3bb4954219afb48ba2aff0ed6b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4065_46e30a0f5e324388a692ff77abd784a3.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4066_60d64dff7b974a07bfca6b02472351c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4067_133c306f37ff433e8f2bb0bd37fbcaa6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0100s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:00.520Z",
      "updated_at": "2025-12-24T19:07:00.520Z"
    },
    {
      "id": 116,
      "name": "Quần Kaki Nam Aristino Fiero AKK0170S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Fiero AKK0170S0\nMã sản phẩm: AKK0170S0\nKiểu dáng: Dáng suông rộng/ Fiero\nThiết kế:\nQuần khaki phom dáng Fiero suông rộng tạo cảm giác thoải mái và tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác. \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu:\n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1035_cd47822837a64df9afdefd3672f34ef0.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0016_1_8907d9825ed94ed9bfbdaa8683f0b2d9.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0018_1_9e1e5819de104e4ba893142e9a6eda87.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_3b610320929a4118beffcc8d3cfb06be.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0020_1_f57435f5f0de456595bcb913eb29a3fc.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-fiero-akk0170s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:07.529Z",
      "updated_at": "2025-12-24T19:07:07.529Z"
    },
    {
      "id": 117,
      "name": "Quần Kaki Nam Aristino Fiero AKK0150S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Fiero AKK0150S0\nMã sản phẩm: AKK0150S0\nKiểu dáng: Dáng suông rộng/ Fiero\nThiết kế:\nQuần khaki phom dáng Fiero suông rộng tạo cảm giác thoải mái và tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác. \nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu:\n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn\nMàu sắc: Xám 146\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/080a5561_e975065f1ea14923b4d75b486cd28766.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5565_366af015649348639859d5bc65df478f.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5582_85f37491194c46cfab60cfa71f5dd375.jpg",
        "https://cdn.hstatic.net/products/200000887901/080a5553_cf591f4d5cfa4e348df7b49c9446c9b4.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran1045_b4f24f44b7de4a9098549ca636598987.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0059_782fa0e6c67b4d29b76538261757048e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_3d489c8074094e18abdfff60d770f336.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_1bdc5b69b54245dc83a2d0dacab69dfe.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0061_0355a532096e4aaabdc021f0e86db10f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-fiero-akk0150s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:14.307Z",
      "updated_at": "2025-12-24T19:07:14.307Z"
    },
    {
      "id": 118,
      "name": "Quần Kaki Nam Aristino Business Regular Fit 1KK0010Z",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Business Regular Fit 1KK0010Z\nMã rút gọn: 1KK0010Z\nKiểu dáng: Dáng vừa/Regular Fit\nThiết kế:\nQuần khaki mang đến sự thoải mái, bền bỉ và linh hoạt. \nCotton giúp vải thoáng khí, thấm hút mồ hôi tốt và mềm mại khi mặc. \nNylon tăng độ bền, chống nhăn, nhanh khô và ít thấm nước, giúp quần luôn giữ được vẻ ngoài chỉn chu. \nSpandex mang đến độ co giãn tối ưu, giúp quần ôm vừa vặn và linh hoạt theo từng chuyển động. \nThiết kế thanh lịch, phù hợp cho cả môi trường công sở lẫn những dịp dạo phố năng động.\nChất liệu:\n55% Cotton: Thoáng khí, thấm hút mồ hôi tốt, mềm mại và mang lại cảm giác thoải mái khi mặc.\n34% Polyamide: Bền chắc, nhẹ, nhanh khô, chống thấm nước và ít nhăn.\n11% Spandex: Co giãn tốt, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nMàu sắc: Xanh tím than 25, Be 24, Xám 76\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 1850000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://product.hstatic.net/200000887901/product/ntc_7968_da302e1a8cdd4abc8d1545ebd1cebe67.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4be46cbe89c949e3af7ee1c8c07025d1.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_7971_fa412b4eb4f74cda828624d7ee56b9d7.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_7948_-_copy_64d255c86a384379953741be67a0b498.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_769fa418f74449c48ededa76b4d9339d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d1066bf0834a422e88cb8f8612ccb57a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e387f44dedd247aa9fe452753b479714.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c3d086ae0e5d46febaf7509a70ba0580.jpg",
        "https://product.hstatic.net/200000887901/product/img_1971.1_b294005b41584fcba377afec8a6ee83d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-business-regular-fit-1kk0010z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:21.482Z",
      "updated_at": "2025-12-24T19:07:21.482Z"
    },
    {
      "id": 119,
      "name": "Quần kaki Nam Aristino AKKR02",
      "description": "Tên sản phẩm: Quần khaki Nam Aristino AKKR02\nMã rút gọn: AKKR02\nForm Dáng: REGULAR FIT\nChi tiết:\nQuần khaki phom dáng Regular Fit suông nhẹ mà vẫn đảm bảo vừa vặn số đo hình thể.\nQuần dệt Dobby chỉn chu, đường may tỉ mỉ mang đến vẻ lịch lãm cho nam giới. Quần có túi xẻ hai bên và túi cài khuy phía sau tiện lợi. Thiết kế basic, màu sắc cơ bản giúp quần dễ dàng kết hợp với trang phục khác.\nChất liệu:\nChất liệu 100% cotton cao cấp thoáng mát giúp quần thấm hút mồ hôi tốt, dễ chịu khi tiếp xúc với da và không gây kích ứng.\nMàu sắc: Vàng 34, Be 101 dobby, Nâu 80 DB, Xám 135 DB, Xanh cổ vịt 21\nSize:  29 – 30 – 31 – 32 – 33 – 34 – 35\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị",
      "brand": "Aristino",
      "base_price": 75000000,
      "sale_price": 375000,
      "category_id": 8,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc00109_7df94857780f47c3b02189b79410da90_2fd03b6614a74d3383f94b5f934be4cf.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00114_736c6dcefea549c08e8a0a9a5e618504_27093d1940324d159c2a6ab583065d33.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc00116_52af9df9312b48b190f4b336d2f42332_647a75bcd1bf4bc582743dcfbdfcd896.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9872.1_281443f1b8f4452c884f4294335aafeb_fdb0238602564608ae2a84b30a63dc54.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9872_d74f705be69644329c306afb1dcfdd01_6d3b95f55a3c4cfeaf68cf35688b6fa5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9873_ad245861b450430f8c26c140f24e851f_9a279e17abdd4ecfa8999728a511d707.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9876_3d1ba10d8eae489b8bcb023e19b79923_ccd28db2b81f49bdb2fa5207b5e30c58.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9875_517b69e67e1747aba42c9821cdebf54a_79a77951f5f64e978b0ca08fd8a7bc32.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-akkr02",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:29.133Z",
      "updated_at": "2025-12-24T19:07:29.133Z"
    },
    {
      "id": 120,
      "name": "Quần Kaki Nam Aristino Regular Fit AKK0040Z",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Regular Fit AKK0040Z\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế: \nQuần kaki phom dáng Regular fit, suông rộng thoải mái, không ôm sát cơ thể nhưng vẫn tôn dáng người mặc, tôn lên dáng vẻ nam tính, thời trang.\nQuần được thiết kế cơ bản với 3 phiên bản màu sắc nam tính đem đến diện mạo tự tin và trẻ trung cho người mặc. \nChất liệu: 100% Cotton\n100% Cotton giúp áo mềm mịn, thoáng khí, thấm mồ hôi vượt trội và thân thiện với làn da\nMàu sắc: Be 116, Đen 1, Xám 76\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\n \n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.\n\nHướng dẫn bảo quản: \n\nGiặt nhẹ bằng nước lạnh, tránh sử dụng chất tẩy rửa mạnh.  Sử dụng bàn ủi ở nhiệt độ thấp để bảo vệ chất liệu.  Tránh phơi dưới ánh nắng trực tiếp để giữ màu và phom dáng áo.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 8,
      "images": [
        "https://product.hstatic.net/200000887901/product/nam-aristino-regular-fit-akk0040z__8__b92ed598ec224ea698f62edd0c3e624c_01c1fd0e106e4c2caf95484aafc915b2.jpg",
        "https://product.hstatic.net/200000887901/product/nam-aristino-regular-fit-akk0040z__7__70b252499fbc48b8b078d67cebdf1008_b9ce2018fdd34ae4b4f9a0443775019d.jpg",
        "https://product.hstatic.net/200000887901/product/nam-aristino-regular-fit-akk0040z__9__a062d99e90794ac3b7dcc7e3c09effde_26808074ab0640e1bb9d0029263c7820.jpg",
        "https://product.hstatic.net/200000887901/product/nam-aristino-regular-fit-akk0040z__6__cb917d406567477a9bfd1b40adcf026f_678bb7c1a15c436995e526364b92445b.jpg",
        "https://product.hstatic.net/200000887901/product/am-aristino-regular-fit-akk0040z__15__39ebfa8e15f34031a4992d207fde8cc8_124ed6fb988845f1b601029d5d5b4c87.jpg",
        "https://product.hstatic.net/200000887901/product/am-aristino-regular-fit-akk0040z__16__510a81647f5e421594a6f7a92138f66c_dfdac5c17c1a42539e03409dc2090988.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a99a9769c9f34131afa81627c4ce146e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_2360cb6d4d1b412ca170751d3b21c1ab.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_35929b91f87441ac9d1456c9cba5d63d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-regular-fit-akk0040z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:36.974Z",
      "updated_at": "2025-12-24T19:07:36.974Z"
    },
    {
      "id": 121,
      "name": "Quần Âu Nam Aristino Slim Fit ATRR19A",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim Fit ATRR19A\nMã rút gọn: ATRR19A\nKiểu dáng: Dáng ôm / Slim Fit tăng đơ\nThiết kế:\nQuần âu Aristino với phom dáng Slim Fit ôm vừa vặn, tôn lên đường nét lịch lãm nhưng vẫn giữ sự thoải mái trong mọi cử động.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ tạo nên dấu ấn thương hiệu.\nThiết kế tiện dụng với túi xẻ hai bên, túi phụ có cài khuy sau, vừa tăng tính ứng dụng vừa hoàn thiện diện mạo chỉn chu, tinh tế.\nChất liệu:\n68% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n3% Spandex tạo độ co giãn nhẹ.\nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1350000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/2i3a6357.1_78da5e75a1fe48ab9f2756495ef83238_06edff54a85641379ad356c887a8e638.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6357_f0d70cab838a497796678449bb5690da_553c2726052a427682206720318052eb.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6358_dda7e2e845934ab9a7c5946136f9d8a2_f507e6cd052f46669e24fbec2d92f670.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6360_fde34fb8701e4771b64ee345f5200864_9e5b32c7caf04e6eb6de83883e982583.jpg",
        "https://cdn.hstatic.net/products/200000887901/2i3a6359_0facfc5d16d4413c93dd143f350d4c8b_92327db696904203899e79eb63d178b7.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atrr19a",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:07:55.924Z",
      "updated_at": "2025-12-24T19:07:55.924Z"
    },
    {
      "id": 122,
      "name": "Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino AJN0080S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino AJN0080S0\nMã rút gọn: AJN0080S0\nKiểu dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần denim form slim fit vừa vặn cơ thể nhưng vẫn đảm bảo thoải mái, dễ dàng kết hợp với áo sơ mi, áo polo hoặc áo thun để tạo phong cách trẻ trung và lịch sự. \nLà item thời trang không bị lỗi mốt theo thời trang, dễ phối cùng nhiều loại giày khác nhau từ sneakers, boots đến loafers. \nKiểu dáng này phù hợp cho cả đi học, đi làm, dạo phố hay du lịch.\nQuần có túi xẻ 2 bên và túi sau tiện lợi. \nThiết kế basic dễ dàng kết hợp với trang phục khác. Màu sắc nam tính mang đến diện mạo trẻ trung cho người mặc.\nChất liệu:\n68% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n28% Polyester giữ màu sắc bền đẹp theo thời gian\n2% Visco tạo sự mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n2% spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm nhạt, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06984_6430c0a6a3e9470fa2443de690614aec_c7ac42bc73a84307a8347b03165228fa.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06981_7b54dd780f404632b90ba347902d0730_e6d08faefe4e4ab4bb0dcf926d5e3ff0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06982_eb4ef9c09948481eb0127a0be64c1356_9b5fa71fc62943dc92f98942e27334c0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06998_04fc83ad37e74ae08e65e0fac3eb9771_32b4b9ad0a7e4e4a8e992609e04ac32b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06979_-_copy_fecc9b2af2f6480a9085d4c625bc3819_de457021085f4026942306797644ecb2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2926_copy.1_27af0d8d23614a819b86e745e9d1db57_1f47b68a9508481b99cdabd1e7599811.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2926_copy_f9efa0cd26fb4446b2d5fedd427f7d4e_eb2813c726034d32b73c74cbdf06339d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2927_copy_482014e326a949208fb9d4bc9612073c_228a8b3bd0c841949669186034c894a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2928_copy_e65938d23fa24a4d928f172de58c7c0a_7d123728be444b9db35ada90127a219d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2929_copy_7d44ddbb4da64fd4a8a5fe2feaeb2676_bbdc593592624a5e929b68de1a3f668d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-hieu-ung-giat-mai-aristino-ajn0080s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:04.725Z",
      "updated_at": "2025-12-24T19:08:04.725Z"
    },
    {
      "id": 123,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0030S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0030S0\nMã rút gọn: AKK0030S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần khaki phom dáng Slim Fit ôm vừa vặn tạo cảm giác thoải mái, tôn dáng người mặc.\nBên hông quần chữ kỹ Aristino được thêu tỉ mỉ và tinh tế mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh.\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi. \nChất liệu: \n59% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n39% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n2% Spandex tạo độ co giãn\nMàu sắc: Xám 32\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8039_8f5bcfb711654c22a205c4d1d2318d33.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8043_60c85345cb8e4bf4bfba5ed732726769.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8053_c64d8099c4af4610b8c4f0a4dd9bb61d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8030_1654063741bb4d74a74ea9578515fed2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3929.1_ebf09d28c5704334a6a4150b01e2acf2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3929_f49415f9bd95470592c9c6e03a314839.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_056449fb23a747f9996ce296459c72c4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3931_0fce305079e34c3cab93fb60cbd76cd9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e7bacfbf86b44760a8b06a0de69bb93d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0030s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:13.025Z",
      "updated_at": "2025-12-24T19:08:13.025Z"
    },
    {
      "id": 124,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0010S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0010S0\nMã rút gọn: AKK0010S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần khaki phom dáng Slim Fit ôm vừa vặn tạo cảm giác thoải mái, tôn dáng người mặc.\nMàu sắc trung tính, dễ kết hợp trang phục khác \nThiết kế basic với túi xẻ 2 bên, túi phụ và túi cài khuy phía sau tiện lợi.\nChất liệu: \n59% Cotton  thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n39% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n2% Spandex tạo độ co giãn \nMàu sắc: Be 16\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/jtran1048_8a21fa51a25744af9f0e88db41335810.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8a866a73feb245f38d4a2ee78bcc415e.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0079_0e97cb56c60d4929a4989a3eba8bab3a.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0075_a7dfac0b87a74c5b8f94a0b3a6b11cea.jpg",
        "https://cdn.hstatic.net/products/200000887901/jtran0073_30affa64d7484eb78f782cb0b113e35d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0010s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:21.488Z",
      "updated_at": "2025-12-24T19:08:21.488Z"
    },
    {
      "id": 125,
      "name": "Quần Kaki Nam Aristino Slim Fit AKK0050S0",
      "description": "Tên sản phẩm: Quần Kaki Nam Aristino Slim Fit AKK0050S0\nMã rút gọn: AKK0050S0\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\n Quần khaki phom dáng Slim Fit ôm nhẹ, thoải mái nhưng vẫn tôn dáng người mặc\nThiết kế cơ bản, đường cắt may tỉ mỉ mang đến diện mạo chỉn chu lịch lãm trong mọi hoàn cảnh\nQuần có túi xẻ hai bên, túi phụ và túi cài khuy phía sau tiện lợi\nChất liệu: \n96% Cotton thoáng khí, thấm hút mồ hôi tốt, mang lại cảm giác mềm mại, dễ chịu khi mặc\n4% Spandex tạo độ co giãn \nMàu sắc: Đen 1\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 1300000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_8074_38bef605dc644031b39528cbdb61a688.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8070_b14216c4447f48429fc7d49e041c60ff.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8085_2e9d535ca421493da9fa87d54c3fa904.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_8066_d7ec25e2ce464cc59261860e8576d8d8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3947.1_4520881460a541d1ad2735c4595b6e04.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3947_2dd7657dfdde49faa36226249bf09fbc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3948_7eb9e1cf2d894d4c8552fa8e810ba401.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_800dac7daa5c4759a6a5e8f7509a697c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3949_e6d6c46a7b7d46dbab9950c418ac842c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-kaki-nam-aristino-slim-fit-akk0050s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:28.571Z",
      "updated_at": "2025-12-24T19:08:28.571Z"
    },
    {
      "id": 126,
      "name": "Quần Âu Nam Aristino Slim Fit ATR0360S3",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim Fit ATR0360S3\nKiểu dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nChất liệu thoải mái với độ co giãn cao và thoáng khi, khả năng chống thấm nước tốt\nMàu sắc trang nhã cực kỳ dễ phối đồ, cho phép quý ông tự tin kết hợp với nhiều kiểu áo sơ mi và áo vest khác nhau.\nChất liệu:\n80% Polyamide: Nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex: Co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon: Mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nMàu sắc: Be 88\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_0778.1_847a1eac71fa487a89cbfa9e223c64bb.jpg",
        "https://product.hstatic.net/200000887901/product/img_0778_b8486ea1504c44688e951461b40fe212.jpg",
        "https://product.hstatic.net/200000887901/product/img_0781_0c19dc74ce3948229b1205df31342fdc.jpg",
        "https://product.hstatic.net/200000887901/product/img_0779_7432380b3d124350b455c77377ed7031.jpg",
        "https://product.hstatic.net/200000887901/product/img_0780_5051bd5b61f14ffc844586330bd69d67.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0360s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:38.133Z",
      "updated_at": "2025-12-24T19:08:38.133Z"
    },
    {
      "id": 127,
      "name": "Quần Âu Nam Đen Slim Fit Aristino ATR0350S2",
      "description": "Tên sản phẩm: Quần Âu Nam Đen Slim Fit Aristino ATR0350S2\nKiểu dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nTone đen lịch lãm, hiện đại và chỉn chu\nThiết kế nổi bật với chi tiết chiết 2 đường, túi chéo diễu chỉ tinh xảo, phối logo chữ ký tinh tế\nChất liệu:\n80% Polyamide nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nMàu sắc: Đen 09\nSize: 29/30/31/32/33/34/35/36\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_262a02da6e094e48b52e25add802b45c.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6944_277b7b1e27084622a848c8bb4135b2b5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_6945_-_copy_5d31e7b52a694a8688df536c39eedc30.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c4eb6b2939e04048931a2a5590a5fc15.jpg",
        "https://product.hstatic.net/200000887901/product/img_1527.1_03031b4d020d452f879ed2fb30ed5d01.jpg",
        "https://product.hstatic.net/200000887901/product/img_1527_6d7dfbe7303e47d6bf6af68c1787e92b.jpg",
        "https://product.hstatic.net/200000887901/product/img_1528_0f6801542c314c72952535de497c4d0d.jpg",
        "https://product.hstatic.net/200000887901/product/img_1530_47db444d45114f368dad168d44e7cd6f.jpg",
        "https://product.hstatic.net/200000887901/product/img_1529_66885cd326104976abef909972dde9e1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-den-slim-fit-aristino-atr0350s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:45.584Z",
      "updated_at": "2025-12-24T19:08:45.584Z"
    },
    {
      "id": 128,
      "name": "Quần Âu Nam Xám Aristino Slim Fit ATR0250S2",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Aristino Slim Fit ATR0250S2\nMã sản phẩm: ATR0250S2\nForm Dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần âu phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động.\nChất liệu thoải mái với độ co giãn cao và thoáng khi, khả năng chống thấm nước tốt\nMàu sắc trung tính cực kỳ dễ phối đồ, cho phép quý ông tự tin kết hợp với nhiều kiểu áo sơ mi và áo vest khác nhau.\nChất liệu:\n80% Polyamide: Nhẹ, bền, thoáng khí, nhanh khô và có khả năng chống thấm nước tốt.\n14% Spandex: Co giãn cao, tăng độ đàn hồi, giúp trang phục ôm sát và linh hoạt khi vận động.\n6% Rayon: Mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xám 93\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1595000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_0783.1_4f2660d189924b53a8e5334632ab9642.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ff2cd2e51cd54e7484e09eca1181e95e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_936c9a0bc03a41238f40603785e82076.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9039ef1536cc44eda71e87520e40bc4d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_130dce84339e412e9412461acfea9ddd.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-aristino-slim-fit-atr0250s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:08:53.693Z",
      "updated_at": "2025-12-24T19:08:53.693Z"
    },
    {
      "id": 129,
      "name": "Quần Âu Nam Xám Wool Aristino Business 1TR0010S1",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Wool Aristino Business 1TR0010S1\nMã sản phẩm: 1TR0010S1\nKiểu dáng: Slim fit/ Dáng ôm\nThiết kế:\nForm Slim Fit, đứng dáng, tôn dáng người mặc.\nThiết kế cạp gọn, có đỉa quần phù hợp với dây lưng.\nLy giữa được là sắc nét, tăng độ chỉn chu và tạo cảm giác chân dài hơn.\nMàu xám trung tính, dễ phối với áo sơ mi trắng, xanh, đen hoặc các màu pastel.\nTúi chéo hai bên và túi cài cúc phía sau, tiện dụng và lịch thiệp.\nCài quần bằng khuy kết hợp khóa kéo chắc chắn, dễ thao tác.\nChất liệu:\n50% Wool (lông cừu tự nhiên):\nMang lại sự mềm mại, thoáng khí, giữ ấm tốt nhưng vẫn không gây bí bách.\nWool còn có khả năng tự kháng khuẩn và khử mùi, giữ cho người mặc luôn thoải mái suốt ngày dài.\n50% Polyester:\nTăng cường độ bền, chống nhăn và giúp quần giữ dáng lâu dài.\nGiặt máy thoải mái, ít phai màu.\nMàu sắc: Xám 62\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino Business",
      "base_price": 2300000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_1922_6789783f1092452db567218c5602c69d.jpg",
        "https://product.hstatic.net/200000887901/product/img_1924_2663fc60c7bc41dd85250558c974d5a8.jpg",
        "https://product.hstatic.net/200000887901/product/img_1936_ffaec86207be4d33be7707afc16b199a.jpg",
        "https://product.hstatic.net/200000887901/product/img_1912_6c1288f8edc8466e997e94fc9973ea00.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ec6fc9b1f4b849eeba8827e93665747e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4c6c82f810234f6d85337419b32ccdb5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_08e268f941d04af68e2da04354bdbba4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_140647463dd645c6abcce9d15b2b9b5a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f461d1a1c99f44f387bd6ea88c624ecb.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-wool-aristino-business-1tr0010s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:00.073Z",
      "updated_at": "2025-12-24T19:09:00.073Z"
    },
    {
      "id": 130,
      "name": "Quần Âu Nam Aristino Business Slim Fit 1TR0060S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Business Slim Fit 1TR0060S1\nMã rút gọn: 1TR0060S1\nForm Dáng: Dáng ôm/ Slim fit\nThiết kế:\nQuần âu Aristino Business thuộc dàng sản phẩm cao cấp phom Slim fit ôm nhẹ, phù hợp với mọi dáng người, đem lại vẻ ngoài tự tin và lịch lãm.\nMàu sắc trung tính, dễ kết hợp trang phục khác,\nĐường nét cắt may tinh tế, cùng chất liệu lông cừu cao cấp đem lại diện mạo lịch lãm và nổi bật cho các quý ông.\nChất liệu: \n64%Polyester giữ sắc màu bền đẹp, bề mặt trơn mịn và mỏng nhẹ\n34% Visco mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n2% Spandex tạo độ co giãn\nMàu sắc: Xám 259 Melange\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy rửa mạnh và phơi nơi khô thoáng, tránh ánh nắng trực tiếp.\nỦi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino Business",
      "base_price": 2350000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc01887_09019d71490b480599e155bda493a9bd.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01885_94404f0c6db2464f8067b6b304e454b3.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01896_aa4294ae83154f1ab80aa926c65b031b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc01878_73c1d501fb70476bac40d0abc9298bd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0724.1_8f63ec6e9e5d40208fc2e7d57527dde2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0724_054e49df2faa4683a6035251147fe4f4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0725_4814ed73ea0b444aa9a98656fdc5b10a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0728_8e59bae479b540b0b736312ece8e2576.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0727_863da01d99ab46b591d8be5824fbbbce.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-business-slim-fit-1tr0060s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:07.186Z",
      "updated_at": "2025-12-24T19:09:07.186Z"
    },
    {
      "id": 131,
      "name": "Quần Âu Nam Aristino Business Slim Fit 1TR0020S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Business Slim Fit 1TR0020S1\nMã thiết kế: 1TR0020S1\nPhom dáng: Slim fit/ Dáng ôm\nThiết kế:\nQuần âu màu xám sợi lông cừu pha mềm mại và linh hoạt, cảm giác dễ chịu khi mặc. \nThiết kế thanh lịch, phù hợp cho môi trường công sở, sự kiện quan trọng hoặc những dịp trang trọng.\nChất liệu: \n50% Wool (lông cừu ) \n47% polyester \n3% Spandex\nMàu sắc: Xám 84 Melange\nSize: 29, 30, 31, 32, 33, 34, 35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt khô để giữ chất lượng vải wool.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ phom dáng và tránh làm hỏng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác do ánh sáng và màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 2500000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/ntc_8098_ea017d1498e24ef2a8ff343411681a50.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8102_cb72a5368095486b9a56ad93ccc07ccd.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8097_-_copy_8dcc77e86323438e8b04bd1baaee0336.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8118_0b672da7afbc4def8918e22fef0a32a4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_895417ccf7da4667af086a19594b7a3b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8f956c86b84947dcad8ce9c2611134b7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_015404a5d36247a1a93b3ea195a4e97f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_937ceef1d4934d9288670debb7b56bc7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e568618dba5942ab856f41a62bf773d6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-business-slim-fit-1tr0020s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:14.882Z",
      "updated_at": "2025-12-24T19:09:14.882Z"
    },
    {
      "id": 132,
      "name": "Quần Âu Nam Aristino Slim fit ATR0070S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim fit ATR0070S1\nMã sản phẩm: ATR0070S1\nForm Dáng: Slim fit/ Dáng ôm\nThiết kế:\nQuần âu phom dáng Slim fit ôm vừa vặn hình thể người mặc, nhằm tôn lên dáng vẻ nam tính. \nQuần được thiết kế cơ bản với túi chéo 2 bên, màu sắc trung tính đem đến diện mạo tự tin và trẻ trung cho người mặc.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xám 288\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/ntc_8139_29879b8bfa63445abfbf38e36b0d80bc.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8137_5753fd44509b47e78a33ce0efe34e58e.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8157_496227bf6e9644b3966bb22c132098a7.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8146_46167849f6d04bf0befd62921afab232.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4939a98867624bafba74022477c07803.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_aca9d81d4651479986c701312b73d11a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cabe2eb7099e415e8d0331ce4507bc3b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cea1825c821b42cc8082d63d6e3d4943.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a109569cb6614abcbac6e915037995fe.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0070s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:23.396Z",
      "updated_at": "2025-12-24T19:09:23.396Z"
    },
    {
      "id": 133,
      "name": "Quần Âu Nam Aristino Slim fit ATR0060S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim fit ATR0060S1\nMã sản phẩm: ATR0060S1\nKiểu dáng: Slim fit/ Dáng ôm\nThiết kế:\nQuần âu màu xanh đậm bền màu, giữ phom chuẩn, chống nhăn hiệu quả, tạo độ rũ nhẹ tự nhiên và mang lại cảm giác mềm mại, thoáng mát. \nCo giãn nhẹ giúp chuyển động linh hoạt, thoải mái suốt ngày dài. \nThiết kế hiện đại, phù hợp từ công sở đến các dịp trang trọng\nChất liệu:\n 68% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n3% Spandex tạo độ co giãn nhẹ.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun, polo hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xanh tím than 66\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\n\nHướng dẫn giặt ủi:\n\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_b6d641c947e9470d8d5c0b3bea87da43.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8406_144ebd7cf95c44dba756a927d62faf04.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6fe45d3337a0429a8da1ec030f6f8729.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8392_adcb543cd62e40b8895aa783d70e6a92.jpg",
        "https://product.hstatic.net/200000887901/product/img_3909.1_d22add7500f945d9b9223e11b49c4c9c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c35f3e66080c491896059bf2df9fe501.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ba02341345c1405a80d6fe91499608e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_464e5c78ed8a4fe2b3ddedf8e1815366.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_581113911f38461b99802d4c5a3e282f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0060s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:30.381Z",
      "updated_at": "2025-12-24T19:09:30.381Z"
    },
    {
      "id": 134,
      "name": "Quần Âu Nam Aristino Slim fit ATR0050S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim fit ATR0050S1\nMã sản phẩm: ATR0050S1\nForm Dáng: Slim fit/ Dáng ôm\nThiết kế:\nQuần âu phom dáng Slim fit ôm vừa vặn hình thể người mặc, nhằm tôn lên dáng vẻ nam tính. \nQuần được thiết kế cơ bản với túi chéo 2 bên, màu sắc trung tính đem đến diện mạo tự tin và trẻ trung cho người mặc.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Đen 28\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/ntc_8534_e1a92bcab7e34d60bab0573a785c4d3b.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8537_6cf0ac222ab54390816d77722045af8b.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8542_a23e867c942f4a7d98a938e93c83005a.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8518_50f07b7306ca4a178bbc57f2606ab7f7.jpg",
        "https://product.hstatic.net/200000887901/product/img_2367.1_2b85d8992b5f4c96840f0b9aef798929.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7c7412a7b35a4fea936d9bf833132956.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_339d279604744003894e885389cedb8a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5f4c05a59db04797b4c23d8001a8e4d4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6dafbb02816343e0a1d7db2b4a91dfeb.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0050s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:36.667Z",
      "updated_at": "2025-12-24T19:09:36.667Z"
    },
    {
      "id": 135,
      "name": "Quần Âu Nam Aristino Slim Fit ATR0120S2",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim Fit ATR0120S2\nMã sản phẩm: ATR0120S2\nKiểu dáng: Slim fit\nThiết kế:\nQuần âu mang lại sự bền bỉ, thoải mái và linh hoạt. \nPolyester giúp quần giữ phom tốt, chống nhăn, bền màu và nhanh khô, trong khi Viscose tạo cảm giác mềm mại, thoáng mát và thấm hút tốt, mang lại sự dễ chịu khi mặc. \nSpandex tăng độ co giãn nhẹ, giúp quần linh hoạt theo từng chuyển động. \nThiết kế thanh lịch, hiện đại, phù hợp cho môi trường công sở, sự kiện trang trọng hoặc những dịp quan trọng.\nChất liệu:  \n67% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Viscose: Mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc.\n4% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và thoải mái khi vận động.\nMàu sắc: Xám 193 kẻ\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \n Không sử dụng chất tẩy mạnh. \n Là/ủi ở nhiệt độ thấp.  \nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1050000,
      "sale_price": null,
      "category_id": 9,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc07485_b6e6ae643d5a4d839150d7594bd5ce27.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07492_1_55d46f9afbed4fd5b2fec6aff1d2e898.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07508_942d1230d76042a9af4ad5a8329564d8.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07492_8c9888baf7644a29967bb0714844dbf7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_dc2efceda4cb468fb45b87c03213988b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_762f58111bd148b2b5158e0633b27c7f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_bbc76f546b2848fe99177abefbaada1e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_faea1356fd274f639659e089e7d991cf.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c8ee0d29b6f044d3b22b96bec839e1b3.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0120s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:44.539Z",
      "updated_at": "2025-12-24T19:09:44.539Z"
    },
    {
      "id": 136,
      "name": "Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino Business Regular 1JN0010S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino Business Regular 1JN0010S0\nMã rút gọn: 1JN0010S0\nForm Dáng: Dáng suông/ Regular\nThiết kế:\nQuần jeans Aristino Buisiness thuộc dòng hàng cao cấp.\nPhom Regular Fit có dáng suông, độ ôm vừa phải và thoải mái, không quá bó sát hay quá rộng, giúp che khuyết điểm cơ thể và dễ dàng vận động.\nChất vải có độ bền cao và khả năng chịu mài mòn tốt, dù sau nhiều lần giặt cũng không bị sờn hay bạc màu.\nChất liệu: \nVải chính: 36% Polyester, 31% Visco, 31% Cotton, 2% Spandex\nVải phối : 100% Polyester\nMàu sắc: Xanh chàm đậm\nSize: 29/30/31/32/33/34/35\nSản xuất: Trung Quốc\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino Business",
      "base_price": 2800000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc02706_74e7fafcf7e446ed83362eb877f5b471.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02700_9e1b4697409849c4bc532448ce4bd4c0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02704_2381c97f430d405ea1615849d8ae6789.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02716_c38cd7346ac840e292d68690ad77b6d1.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9389.1_1b48d8d02a484130ba91d298c57d5971.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9390_d3cfe9db14c048979513edd8dab3a49e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9392_9b60f60859c847e794662302bc7b7254.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9389_a47653bdebc64253aa7f0fe7c6bf2d92.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_9391_5bb553a2ef634dcc99f291f564495163.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-hieu-ung-giat-mai-aristino-business-regular-1jn0010s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:09:57.155Z",
      "updated_at": "2025-12-24T19:09:57.155Z"
    },
    {
      "id": 137,
      "name": "Quần Jeans Nam Xanh Đậm Hiệu Ứng Giặt Mài Aristino AJN0060S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Xanh Đậm Hiệu Ứng Giặt Mài Aristino AJN0060S0\nMã rút gọn: AJN0060S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nĐiểm nhấn tinh tế của quần jeans nằm ở phần nút quần với biểu tượng Mặt Trời Huyền Thoại tạo nên vẻ sang trọng và đậm dấu ấn văn hoá.\nQuần jeans phom regular fit có dáng suông, độ ôm vừa phải và thoải mái, không quá bó sát hay quá rộng, giúp che khuyết điểm cơ thể và dễ dàng vận động.\nChất vải có độ bền cao và khả năng chịu mài mòn tốt, dù sau nhiều lần giặt cũng không bị sờn.\nChất liệu: \n99.5% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n0.5% Spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm đậm\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 119500000,
      "sale_price": 1075500,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam_6e47db8a5e2b4f3c83c93abce9efff09_e5235069ac294f0f95f2caa7e9ddb1e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam-2_1d0ef2e6bf9b44f5a3de9eb0ba227cd7_f4a2c54c5db345e8a0c9c2017b74902b.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam-3_14e1dc6ab73c4727baf2b9c2c01623d6_3fcd88872d0b4ffab802008aa6550848.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-dam1_f6de68f52c2a439e85ab3ef4e5bfbae5_ff885248cbd7449ba4e5113752595dd8.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-xanh-dam-hieu-ung-giat-mai-aristino-ajn0060s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:03.276Z",
      "updated_at": "2025-12-24T19:10:03.276Z"
    },
    {
      "id": 138,
      "name": "Quần Jeans Nam Xanh Nhạt Hiệu Ứng Giặt Mài Aristino AJN0060S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Xanh Nhạt Hiệu Ứng Giặt Mài Aristino AJN0060S0\nMã rút gọn: AJN0060S0\nForm Dáng: Dáng vừa/ Regular Fit\nThiết kế:\nĐiểm nhấn tinh tế của quần jeans nằm ở phần nút quần với biểu tượng Mặt Trời Huyền Thoại tạo nên vẻ sang trọng và đậm dấu ấn văn hoá.\nQuần jeans phom regular fit có dáng suông, độ ôm vừa phải và thoải mái, không quá bó sát hay quá rộng, giúp che khuyết điểm cơ thể và dễ dàng vận động.\nChất vải có độ bền cao và khả năng chịu mài mòn tốt, dù sau nhiều lần giặt cũng không bị sờn.\nChất liệu: \n99.5% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n0.5% Spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm nhạt\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 119500000,
      "sale_price": 1075500,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat-2_b8e1c7edecb1480eba3ea272f067b0ea.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat_09429ef0d6af4627abc28e9143adcac1.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat-3_88915544d12b4f5ab8eafc5521de058e.jpg",
        "https://cdn.hstatic.net/products/200000887901/xanh-cham-nhat1_803f25e2fd054d7bb7264fe6950f1663.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-xanh-nhat-hieu-ung-giat-mai-aristino-ajn0060s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:09.396Z",
      "updated_at": "2025-12-24T19:10:09.396Z"
    },
    {
      "id": 139,
      "name": "Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino AJN0080S0",
      "description": "Tên sản phẩm: Quần Jeans Nam Hiệu Ứng Giặt Mài Aristino AJN0080S0\nMã rút gọn: AJN0080S0\nKiểu dáng: Dáng ôm / Slim fit\nThiết kế:\nQuần denim form slim fit vừa vặn cơ thể nhưng vẫn đảm bảo thoải mái, dễ dàng kết hợp với áo sơ mi, áo polo hoặc áo thun để tạo phong cách trẻ trung và lịch sự. \nLà item thời trang không bị lỗi mốt theo thời trang, dễ phối cùng nhiều loại giày khác nhau từ sneakers, boots đến loafers. \nKiểu dáng này phù hợp cho cả đi học, đi làm, dạo phố hay du lịch.\nQuần có túi xẻ 2 bên và túi sau tiện lợi. \nThiết kế basic dễ dàng kết hợp với trang phục khác. Màu sắc nam tính mang đến diện mạo trẻ trung cho người mặc.\nChất liệu:\n68% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí\n28% Polyester giữ màu sắc bền đẹp theo thời gian\n2% Visco tạo sự mềm mại, thoáng mát, thấm hút tốt, tạo cảm giác mịn màng khi mặc\n2% spandex tạo sự co giãn, thoải mái khi mặc\nMàu sắc: Xanh chàm nhạt, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/dsc06984_6430c0a6a3e9470fa2443de690614aec_c7ac42bc73a84307a8347b03165228fa.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06981_7b54dd780f404632b90ba347902d0730_e6d08faefe4e4ab4bb0dcf926d5e3ff0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06982_eb4ef9c09948481eb0127a0be64c1356_9b5fa71fc62943dc92f98942e27334c0.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06998_04fc83ad37e74ae08e65e0fac3eb9771_32b4b9ad0a7e4e4a8e992609e04ac32b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc06979_-_copy_fecc9b2af2f6480a9085d4c625bc3819_de457021085f4026942306797644ecb2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2926_copy.1_27af0d8d23614a819b86e745e9d1db57_1f47b68a9508481b99cdabd1e7599811.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2926_copy_f9efa0cd26fb4446b2d5fedd427f7d4e_eb2813c726034d32b73c74cbdf06339d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2927_copy_482014e326a949208fb9d4bc9612073c_228a8b3bd0c841949669186034c894a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2928_copy_e65938d23fa24a4d928f172de58c7c0a_7d123728be444b9db35ada90127a219d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2929_copy_7d44ddbb4da64fd4a8a5fe2feaeb2676_bbdc593592624a5e929b68de1a3f668d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-hieu-ung-giat-mai-aristino-ajn0080s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:15.167Z",
      "updated_at": "2025-12-24T19:10:15.167Z"
    },
    {
      "id": 140,
      "name": "Quần Jeans hiệu ứng giặt mài Nam Aristino AJN0170Z",
      "description": "Tên sản phẩm: Quần Jeans Regular Fit hiệu ứng giặt mài Nam Aristino AJN0170Z\nMã rút gọn: AJN0170Z\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần jeans phom Regular Fit suông rộng, giúp người mặc thoải mái vận động\nQuần có túi xẻ 2 bên và túi sau tiện lợi. Thiết kế cơ bản dễ dàng kết hợp với trang phục khác. Màu sắc nam tính mang đến diện mạo trẻ trung cho người mặc.\nChất liệu:\n\n100% Cotton là sợi tự nhiên, giúp quần jean thoáng khí, thấm hút mồ hôi hiệu quả, giữ cho người mặc luôn cảm thấy khô ráo và thoải mái trong suốt cả ngày dài. Vải cotton mềm mại, dễ chịu khi tiếp xúc với da, mang lại cảm giác êm ái và không gây kích ứng, phù hợp với mọi hoạt động hàng ngày\n\nMàu sắc: Xanh chàm đậm, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 925000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_e83464270b9446b9bd1e768b3c9ff181.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07731_4e9e0ae3499c461fa3a1be136c52e822.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07730_cd803c7b6c7840898f0805967b32dac2.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07732_1f3c272fd83546acb1c92a0e91c1252d.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07728_57ca64976a214cc794cf2c1a21486182.jpg",
        "https://product.hstatic.net/200000887901/product/ng-giat-mai-nam-aristino-ajn0170z__2__a289d20e8e2b409a984ee22838990928_a2cd959a6f0f4c4284c3fe8e08bec946.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0674f61fe6b6402d8f3f6013467389c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e43df666df3749c6aafcd1bda4b1aad0.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_badc9a9c71274dc8a9b3fd5e49c6ce18.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e9ff4cc5b9e5417c9647b79e72ae7660.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-hieu-ung-giat-mai-nam-aristino-ajn0170z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:22.081Z",
      "updated_at": "2025-12-24T19:10:22.081Z"
    },
    {
      "id": 141,
      "name": "Quần Jeans Nam Aristino Slim Fit AJN0070Z",
      "description": "Tên sản phẩm: Quần Jeans Nam Aristino Slim Fit AJN0070Z\nKiểu dáng: Dáng ôm / Slim fit\nThiết kế: \nQuần jeans phom Slim fit với độ ôm vừa vặn giúp tôn dáng đôi chân mà vẫn thoải mái vận động\nThiết kế túi xẻ 2 bên, túi vuông phía sau quần cùng gam xanh chàm với nhiều sắc độ khác nhau mang đến nhiều lựa chọn cho người mặc.\nChất liệu:\n66% Cotton giúp quần mềm nhẹ, thấm hút tốt, thoáng khí dù ở mùa nào trong năm, đồng thời vẫn giữ được độ đứng dáng vừa đủ\n32% Polyester giúp bề mặt vải trơn bóng, màu sắc sắc nét và bền màu qua quá trình sử dụng\n2% Spandex giúp quần có độ co giãn vừa phải.\nMàu sắc: Xanh chàm đậm, Xanh chàm nhạt, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản: \n\nGiặt nhẹ bằng nước lạnh, tránh sử dụng chất tẩy rửa mạnh. \nSử dụng bàn ủi ở nhiệt độ thấp để bảo vệ chất liệu. \nTránh phơi dưới ánh nắng trực tiếp để giữ màu và phom dáng áo.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc07718_854b8fe72ac044ac8c235eecb15a154a.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07720_2159db4888694146bb0de6492d16f6d2.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07722_f64caac7e2674d0ca921f7f0317dffb2.jpg",
        "https://product.hstatic.net/200000887901/product/dsc07714_414090b6e2a747fc9e1d83f49b36d0f1.jpg",
        "https://product.hstatic.net/200000887901/product/s-nam-aristino-slim-fit-ajn0070z__12__f2f92f768313437cb592bb6d165c2805_06c8ad7f12444c50b1364ca3210470c6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9ba45e985e634fac9690ffdb8fdb32be.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_38422cdcff604e51b4b6f206bbf12f27.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_671c93e875a74733a5850a4c0a51ee33.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_58a612a7cb7342e084f4694930c9e9f0.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-slim-fit-ajn0070z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:30.344Z",
      "updated_at": "2025-12-24T19:10:30.344Z"
    },
    {
      "id": 142,
      "name": "Quần Jeans Nam Aristino Regular Fit AJN0010Z",
      "description": "Tên sản phẩm: Quần Jeans Nam Aristino Regular Fit AJN0010Z\nForm dáng: Dáng vừa/ Regular Fit\nThiết kế: \nQuần Jeans phom Regular Fit suông nhẹ.\nThiết kế túi xẻ 2 bên, túi vuông phía sau quần, gam xanh chàm với nhiều sắc độ khác nhau mang đến nhiều lựa chọn cho người mặc.\nChất liệu:\n66% Cotton mang lại sự mềm mại, thoáng khí và thoải mái cho chiếc áo\n32% Polyester giúp tăng sự co giãn và giữ phom dáng sau khi mặc\n2% Spandex giúp vải bền màu, ít nhắn và có độ bóng mịn\nMàu sắc: Xanh chàm đậm, Xanh chàm nhạt, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản: \n\nGiặt nhẹ bằng nước lạnh, tránh sử dụng chất tẩy rửa mạnh. \nử dụng bàn ủi ở nhiệt độ thấp để bảo vệ chất liệu. \nTránh phơi dưới ánh nắng trực tiếp để giữ màu sắc và phom dáng của áo.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://product.hstatic.net/200000887901/product/nam-aristino-regular-fit-ajn0010z__7__1f876af8e18d4d5b8943966839ac8a1b_badfb040f9d14321837aba793a4f9083.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_db445e1394304c9d84551d0efaa6bb0c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_528da90b49fc40cf9e7b1d7f93e67508.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4d6bc84f06b54a61984cbb923f4f0200.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ce4eb9702e0f43508e3d59cd3fad80d6.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-regular-fit-ajn0010z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:38.370Z",
      "updated_at": "2025-12-24T19:10:38.370Z"
    },
    {
      "id": 143,
      "name": "[ARISTINO x QUỐC TRƯỜNG] Quần jeans Nam Aristino AJN0080Z",
      "description": "Tên sản phẩm: Quần jeans Nam Aristino AJN0080Z\nMã sản phẩm: AJN0080Z\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế: \nQuần Jeans phom Regular Fit suông nhẹ.\nThiết kế túi xẻ 2 bên, túi vuông phía sau quần, gam xanh chàm với nhiều sắc độ khác nhau mang đến nhiều lựa chọn cho người mặc\nChất liệu:\n99% Cotton mang lại sự mềm mại, thoáng khí và thoải mái cho chiếc quần\n1% Spandex tạo độ co giãn nhẹ\nMàu sắc: Xanh chàm sáng; Xanh chàm đậm\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản: \n\nGiặt nhẹ bằng nước lạnh, tránh sử dụng chất tẩy rửa mạnh. \nSử dụng bàn ủi ở nhiệt độ thấp để bảo vệ chất liệu. \nTránh phơi dưới ánh nắng trực tiếp để giữ màu và phom dáng áo.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_f34b2a630ecc4d819b7cc27760a71209.jpg",
        "https://product.hstatic.net/200000887901/product/quan-jeans-nam-aristino-ajn0080z__2__93786fd2fb4543e8b35850dfa105ba33_a35015ed287e464b95da734e5ae0afd6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_adcd53aca767479189131194899bafe1.jpg",
        "https://product.hstatic.net/200000887901/product/quan-jeans-nam-aristino-ajn0080z__4__36a8efdf552343d0b379001479a63b59_02475b40ecd64a76a1def66e1e3123a5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a9e3c2a66ac24d33adc0ce4c48179713.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a842050f5b524243b2077085e9f1d892.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "aristino-x-quoc-truong-quan-jeans-nam-aristino-ajn0080z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:45.988Z",
      "updated_at": "2025-12-24T19:10:45.988Z"
    },
    {
      "id": 144,
      "name": "Quần Jeans Nam Aristino AJN0030Z",
      "description": "Tên sản phẩm: Quần Jeans Nam Aristino AJN0030Z\nMã rút gọn: AJN0030Z\nForm Dáng: Dáng ôm / Slim Fit\nThiết kế:\nQuần jean slim fit mang lại cảm giác thoải mái, mềm mại nhưng vẫn giữ được form dáng chuẩn. Với độ co giãn nhẹ từ Spandex, quần giúp dễ dàng vận động mà không gò bó.\n Thiết kế slim fit hiện đại, ôm vừa vặn, tôn lên đường nét cơ thể, phù hợp với nhiều phong cách thời trang từ năng động đến lịch lãm, là lựa chọn lý tưởng cho mọi dịp trong ngày.\nChất liệu: \n99%Cotton+ 1% Spandex\nMàu sắc: Xanh chàm đậm, Xanh chàm nhạt, Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_0f65cca34a2e4aaab4789ed06b1c27f8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a0323f9846144becb3045ced1a1c8398.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ff66013aebcb45459e0446df81598630.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_34cba2738e5047a293caf9da364d0906.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_396e529b24e9411d8ae8445627ca3449.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ebf0eb0655b84646b87ed34ccdd922b7.jpg",
        "https://product.hstatic.net/200000887901/product/dsc01696_b8dffc187b6f4890b3a7cd2a6720d28b.jpg",
        "https://product.hstatic.net/200000887901/product/img_6651.1_7e6126d1ca064f33bfde70b84e8fc62f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6fa3a138b54b41a9ac2f6db6a6c3fbeb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_412475b244df409eaea24b153b4af39c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-ajn0030z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:10:53.532Z",
      "updated_at": "2025-12-24T19:10:53.532Z"
    },
    {
      "id": 145,
      "name": "Quần Jeans Nam Aristino Slim fit AJN00203",
      "description": "FORM DÁNG: Slim fit\nTHIẾT KẾ:\n- Quần jeans phom Slim fit với độ ôm vừa vặn giúp tôn dáng đôi chân mà vẫn thoải mái vận động\n- Quần có túi xẻ 2 bên và túi sau tiện lợi. Thiết kế basic dễ dàng kết hợp với trang phục khác. Màu sắc nam tính mang đến diện mạo trẻ trung cho người mặc.\n\nCHẤT LIỆU:\n- 98.5% Cotton giúp quần mềm mại, xốp nhẹ và thoáng khí.\n- 1.5% Spandex tạo độ co giãn thoải mái khi mặc.\n\nMÀU SẮC: Xanh chàm sáng; Xanh chàm nhạt; Xanh chàm đậm\n\nSIZE: 29/30/31/32/33/34/35",
      "brand": "Aristino",
      "base_price": 89500000,
      "sale_price": 626500,
      "category_id": 10,
      "images": [
        "https://product.hstatic.net/200000887901/product/an-nam-aristino-slim-fit-ajn00203__9__c4301d0ae14a4e94a6375805526587be_7047e6c259ac48929d173fd09ed8617c.jpg",
        "https://product.hstatic.net/200000887901/product/an-nam-aristino-slim-fit-ajn00203__8__142d073d072146fb92251f0133f3636c_2276f1d6ed944f04bf6e866970346bcf.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__10__48eec0cf75e54497864f2be0e20d9cd2_7c680138b1b741838cbf721ce682da63.jpg",
        "https://product.hstatic.net/200000887901/product/an-nam-aristino-slim-fit-ajn00203__7__c75ac6e2955b47ccac817aad1d2afd87_015eac18d77e466ba207f5bfcc470385.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__11__709ac5471f8a4e998baec407dc38795e_92be18ac276a49289280a7d12fbda9e9.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__12__1381420facb54c41862681380aeb7b5d_86e2242ef4c34d498434b21a3ce90250.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__13__1221b0aec5c3471fa6896bc8ff5d8ca7_42ef9ba5f4b74f85848de162c9f0a10b.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__14__4f7fb8bd140747f28006ab37e370f418_4de2903729444fa28bd457fa889388d0.jpg",
        "https://product.hstatic.net/200000887901/product/n-nam-aristino-slim-fit-ajn00203__15__47a2b591f3b9459286880d3e58da6df3_623aef0fff4c4cc386a69c8c012f97e5.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-slim-fit-ajn00203",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:01.601Z",
      "updated_at": "2025-12-24T19:11:01.601Z"
    },
    {
      "id": 146,
      "name": "Quần Jeans Nam Aristino Regular Fit AJNR04",
      "description": "Tên sản phẩm: Quần Jeans Nam Aristino Regular Fit AJNR04\nMã rút gọn: AJNR04\nForm Dáng: Regular Fit\nThiết kế:\nQuần Jeans phom Regular Fit suông nhẹ.\nThiết kế túi xẻ 2 bên, túi vuông phía sau quần. Gam màu xanh nhạt và xanh chàm sáng nổi bật với nhiều sắc độ khác nhau mang đến nhiều lựa chọn cho người mặc.\nChất liệu: \n100% Cotton: Giúp quần mềm mại, xốp nhẹ và thoáng khí\nMàu sắc: Xanh chàm nhạt; Xanh chàm sáng\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 895000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__4__1f4ee2e3fa5b431a8a316d3786d22a5a_6afc38ed86054cf58a293193592eb29a.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__3__460be7e066664b3db8ac7892b747c28b_a22e37ac40464ab18793f942eeebfc2d.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__5__ac40992a053646d59f51f60ad84c1644_5bce7920375b452ea3e0ff7069476ff6.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__6__cf4e9fbef4a443b1a60fff531ef28d32_5a18aef489d245e1a48fcc4c62e26d2c.jpg",
        "https://product.hstatic.net/200000887901/product/-jean-nam-aristino-cotton-ajnr04__10__0e5c2a3554b240a5b2841af264bddcc2_ba981c2358524825a236d33a7d270341.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__1__fd203208ab2b4e3eabd06f8d3d0382e8_81304f5f2db64efcb84d8bc4862cac65.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__2__79a42b06194a44d8b8cf564f6a14561a_beb6cda22c294dd0b72200592d3a7473.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__3__b23ee9d8b3a44f4abd8665822f764196_c8a8bf9dd47f4d51bd98fa00e420c65d.jpg",
        "https://product.hstatic.net/200000887901/product/n-jean-nam-aristino-cotton-ajnr04__4__21f03d8dca244866b8734fd53b13d1fa_64336545c21e4d7cb7a50d708e596797.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-regular-fit-ajnr04",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:10.695Z",
      "updated_at": "2025-12-24T19:11:10.695Z"
    },
    {
      "id": 147,
      "name": "Quần Jeans Nam Aristino Cotton AJNR03",
      "description": "Tên sản phẩm: Quần Jeans Nam Aristino Cotton AJNR03\nMã rút gọn: AJNR03\nForm Dáng: Slim fit\nThiết kế:\nQuần Jeans phom Slim Fit ôm nhẹ.\nThiết kế túi xẻ 2 bên, túi vuông phía sau quần. Gam màu xanh nhạt và xanh chàm sáng nổi bật với nhiều sắc độ khác nhau mang đến nhiều lựa chọn cho người mặc.\nChất liệu: \n99% Cotton: Giúp quần mềm mại, xốp nhẹ và thoáng khí\n1% Spandex: Giúp quần có độ co giãn nhẹ.\nMàu sắc: Xanh chàm nhạt; Xanh chàm sáng, Xanh chàm đậm.\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt: Giặt bằng nước lạnh hoặc nước ấm nhẹ (dưới 30°C). Giặt riêng biệt với các màu sắc khác để tránh bị phai màu.\nPhơi: Phơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để không làm phai màu và giữ độ bền của vải.\nỦi: Ủi ở nhiệt độ thấp hoặc sử dụng chế độ ủi vải polyester trên bàn là để tránh làm hỏng bề mặt vải.\nChất tẩy: Hạn chế sử dụng chất tẩy mạnh. Sử dụng chất tẩy nhẹ nếu cần để bảo vệ vải và giữ độ mới lâu dài.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 895000,
      "sale_price": null,
      "category_id": 10,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_c013efacb1c74fbda02420c34f70bd13.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_06457a282a2d46c6bd7870b183ec9566.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_26e6ee02cb5946298c7ffbb2eee2ea75.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9c7cfcdca9b34158811890a8b720d977.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-jeans-nam-aristino-cotton-ajnr03",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:16.992Z",
      "updated_at": "2025-12-24T19:11:16.992Z"
    },
    {
      "id": 148,
      "name": "Quần Âu Nam Aristino Cropped ATR0610Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0610Z\nMã sản phẩm: ATR0610Z\nKiểu dáng: Dáng ôm vừa, ngắn/Cropped\nThiết kế:\nQuần âu phom cropped ôm vừa, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone be thanh lịch cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\n68% Polyester giúp quần giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ\n29% Rayon mềm mại, thấm hút tốt, tạo cảm giác thoải mái và độ rũ tự nhiên cho vải\n3% Spandex tạo độ co giãn nhẹ\nMàu sắc: Be 145 M Slub\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_7082_668a7f4a8b504c41a136a3e9c8a422fb.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7087_7da21b19964c4b93ba45db6ff4c09bdc.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7088_c7aa483dcd704957a83e15cc06cd805a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_7078_03a44c2f0da44379808c115f7a6ae400.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0610z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:35.772Z",
      "updated_at": "2025-12-24T19:11:35.772Z"
    },
    {
      "id": 149,
      "name": "Quần Âu Nam Aristino Cropped ATR0600Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0600Z\nMã sản phẩm: ATR0600Z\nKiểu dáng: Dáng ôm vừa, ngắn/Cropped\nThiết kế:\nQuần âu phom cropped ôm vừa, tôn dáng\nThiết kế trẻ trung, hiện đại phù hợp với nhiều sự kiện\nTone be thanh lịch, hiệu ứng solid cùng điểm nhấn logo chữ kí Aristino tinh tế\nChất liệu:\nĐang cập nhật\nMàu sắc: Be 104 Solid\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 895000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_3953.1_e766dc6896ce4b12aadeb6deae08f70a.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3953_6b88c36c264444a3846bc315a6558e01.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3954_abfe6e26dcea496c81c2a485fb494bd1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d4e85d96cd9c4f3080d31a5fa663dba8.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_3956_cd955348f26d4d05b38dc39fd5728724.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0600z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:41.905Z",
      "updated_at": "2025-12-24T19:11:41.905Z"
    },
    {
      "id": 150,
      "name": "Quần Âu Nam Xám Kẻ Aristino Cropped ATR0420S3",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Kẻ Aristino Cropped ATR0420S3\nMã sản phẩm: ATR0420S3\nForm Dáng: Cropped/ Dáng ngắn\nThiết kế:\nDáng Cropped ngắn tới mắt cá chân, tạo cảm giác trẻ trung thời thượng.\nThiết kế có ly xếp phía trước – tạo điểm nhấn sang trọng, lịch lãm, đồng thời giúp quần lên form chuẩn khi mặc.\nCạp quần có đai lưng mở rộng và khuy cài, tăng sự chắc chắn và chi tiết tinh tế.\n2 túi xéo trước và 2 túi viền sau, tiện dụng và hài hòa tổng thể.Màu sắc và họa tiết vân chìm cực kỳ tinh tế, hiện đại.\nXám sáng pha họa tiết kẻ nhỏ – mang lại cảm giác tươi mới, phù hợp với khí hậu nóng và tạo sự trẻ trung, sang trọng.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xám 21 Kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_2093_1e5bf9dcd9954a02960989c36e70f710.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2094_2418d49679ad416588fdc7555d289340.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2110_fd919d61fdc143438f01fe2655c86f69.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_2084_491b8f8622e44da38af2b59c5593efc8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_273432fb147346ec83ab0f0c02e66eae.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5b059fb1bc7640c592ddaa007a50ad77.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af3040c975e04e87b93cb9625601f4f2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f07e84f3ead448ff82f9af67802c777e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cc2ac9828ffa4f05b22c0163f66b0bb0.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-ke-aristino-cropped-atr0420s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:51.789Z",
      "updated_at": "2025-12-24T19:11:51.789Z"
    },
    {
      "id": 151,
      "name": "Quần Âu Nam Kẻ Aristino Cropped ATR0410S3",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Aristino Cropped ATR0410S3\nMã sản phẩm: ATR0410S3\nForm Dáng: Cropped/ Dáng ngắn\nThiết kế:\nDáng Cropped ngắn tới mắt cá chân, tạo cảm giác trẻ trung thời thượng.\nThiết kế có ly xếp phía trước – tạo điểm nhấn sang trọng, lịch lãm, đồng thời giúp quần lên form chuẩn khi mặc.\nThiết kế tối giản, không hoạ tiết rườm rà – phù hợp với phong cách thanh lịch, chuyên nghiệp.\nCó 2 túi xéo trước và 2 túi viền sau, tiện lợi và cân đối tổng thể.\nĐai quần có đỉa để phối cùng thắt lưng khi cần – tăng vẻ chỉn chu.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Xanh tím than 38mf\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 995000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_0816_1539bc44afe74ad0a42102a0673b90a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0814_383f65464e6e4f428925128b6aecc8b2.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0827_a41b7b16db534b8f9d41185ad1cef296.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0807_-_copy_636c64c25d3c4d0e836f59d72113d4d9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_996523358b9f416ea5b37b3c51275316.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_9c2e82cbb0154af0aeda93043656f239.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_cc30ea3419b140bf97e835fe14867c73.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b3a7c503d2e64de1a42085b0bb20c0f2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4e7472a0318b43c5a933b2699e764b38.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-aristino-cropped-atr0410s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:11:57.516Z",
      "updated_at": "2025-12-24T19:11:57.516Z"
    },
    {
      "id": 152,
      "name": "Quần Âu Nam Kẻ Aristino Cropped ATR0460S3",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Aristino Cropped ATR0460S3\nMã sản phẩm: ATR0460S3\nKiểu dáng: Cropped/ Dáng ngắn tới mắt cá chân\nThiết kế:\nQuần tây ống đứng, phần ống không quá rộng cũng không quá ôm, tạo cảm giác gọn gàng và chuyên nghiệp.\nVải có kết cấu nhẹ, thoáng mát và có độ đứng dáng, phù hợp với môi trường công sở hoặc các dịp trang trọng.\nMàu xanh navy đậm (xanh than), rất dễ phối với áo sơ mi trắng, xám, hoặc các màu trung tính.\nCạp quần có đỉa để đeo thắt lưng.\nCó khóa kéo và cúc cài phía trước.\nCó hai túi chéo hai bên.\nNếp ly giữa ống quần giúp tạo sự chỉn chu và kéo dài đôi chân về mặt thị giác.\nChất liệu:\n69% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Visco mịn mượt, giúp quần nhẹ, thoáng mát tối đa\n2% Spandex tạo độ co giãn nhẹ.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xanh tím than 153 kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_0836_e442b86a78ed42b2904a3eb3ff5a1aa6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0837_123969be501b4aa0aeae0ac2b771139e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0840_b1576a97887b47dbbe76f30521fd5893.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0831_ee9abe02cf594af4b626f2f0545475a8.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d49924da05ac4e62924168775becbb10.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a8a42a7db9154b56b12ab26e1aa2d782.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af7495c5253643b290b41f916ef1fab9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ba05aa2267c4402db5bc6d7be57decdc.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_32b96209a3d844f99bef7b809ef3369c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-aristino-cropped-atr0460s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:03.739Z",
      "updated_at": "2025-12-24T19:12:03.739Z"
    },
    {
      "id": 153,
      "name": "Quần Âu Nam Đen Kẻ Aristino Cropped ATR0450S3",
      "description": "Tên sản phẩm: Quần Âu Nam Đen Kẻ Aristino Cropped ATR0450S3\nMã sản phẩm: ATR0450S3\nKiểu dáng: Cropped/ Dáng ngắn tới mắt cá chân\nThiết kế:\nQuần tây ống đứng, phần ống không quá rộng cũng không quá ôm, tạo cảm giác gọn gàng và chuyên nghiệp.\nVải có kết cấu nhẹ, thoáng mát và có độ đứng dáng, phù hợp với môi trường công sở hoặc các dịp trang trọng.\nMàu đen kẻ ô nhỏ, rất dễ phối với các loại áo khác nhau.\nCạp quần có đỉa để đeo thắt lưng.\nCó khóa kéo và cúc cài phía trước.\nCó hai túi chéo hai bên.\nNếp ly giữa ống quần giúp tạo sự chỉn chu và kéo dài đôi chân về mặt thị giác.\nChất liệu:\n69% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n29% Visco mịn mượt, giúp quần nhẹ, thoáng mát tối đa\n3% Spandex tạo độ co giãn nhẹ.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Đen 21 Kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_2411_95d4173b2b744e3786b2d548d767475a.jpg",
        "https://product.hstatic.net/200000887901/product/img_2414_9cc0f5c0281845879b5dca57d6baee64.jpg",
        "https://product.hstatic.net/200000887901/product/img_2417_6ece5ab782ba44049ff22daf2b0bab1d.jpg",
        "https://product.hstatic.net/200000887901/product/img_2408_430eeb1b22944e8da99eaa319cd83c39.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0f83e8d7f66c44dd9281f9a8cd083659.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_121b80ba558840e0a0f74370245b81fd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6685c7cad6a64255b83f0d361d7eb1c4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e1e1e1126ee34422ae6baabaebee36ca.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a1f81906b47749218cd8d5f7693067ca.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-den-ke-aristino-cropped-atr0450s3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:09.979Z",
      "updated_at": "2025-12-24T19:12:09.979Z"
    },
    {
      "id": 154,
      "name": "Quần Âu Nam Xám Aristino Cropped ATR0240S2",
      "description": "Tên sản phẩm: Quần Âu Nam Xám Aristino Cropped ATR0240S2\nMã sản phẩm: ATR0240S2\nKiểu dáng: Cropped/ Dáng ngắn\nThiết kế:\nKiểu dáng: Quần Cropped Fit – ống đứng, dài lửng mắt cá chân, tạo cảm giác trẻ trung, hiện đại, tôn dáng\nMàu sắc: Xám xanh (light steel blue) – trung tính, dễ phối đồ, hợp mọi tone da, thích hợp cho cả môi trường công sở và casual.\nLưng quần có đỉa thắt lưng lớn, dễ phối cùng thắt lưng bản to.\nKhóa kéo + cài khuy lệch, tạo điểm nhấn tinh tế cho phần cạp.\nTúi xéo hai bên phía trước và túi cài phía sau – vừa tiện dụng, vừa tăng độ thanh lịch.\nLy quần may chìm, giữ phom đứng và chỉn chu.\nChất liệu:\nĐang cập nhật\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xám 306\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_4622_f48896437ddc409790894836a05e07b6.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4602_68d9c90bc0024a598133a5822d79690f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4626_33306fa3809f49188e26c5954f105837.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4607_-_copy_b522060712c8488b89b202a805dc4e16.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f028c2c2b1574f8691d17c568bac7741.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_632b86c1b87744bb9053d18887dae6bb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_846d31c6afa647849f165523607cee8a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_af12c96c54e34860aad153bf68bd8e67.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f22fa6d5f11a4c12a48daff132f81229.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-xam-aristino-cropped-atr0240s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:17.904Z",
      "updated_at": "2025-12-24T19:12:17.904Z"
    },
    {
      "id": 155,
      "name": "Quần Âu Nam Đen Aristino Cropped ATR0230S2",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Regular Fit ATR0230S2\nMã sản phẩm: ATR0230S2\nForm Dáng: Regular Fit/ Dáng suông\nThiết kế:\nMàu sắc: Đen trơn cơ bản – sang trọng, chuyên nghiệp và cực kỳ dễ phối với mọi kiểu áo (sơ mi, polo, áo vest…).\nCó nếp ly nhẹ giữa ống quần, tạo cảm giác gọn gàng, lịch sự.\nTúi chéo hai bên và túi sau.\nLưng quần có đỉa để thắt lưng, cài nút truyền thống.\nChất liệu giúp quần giữ form tốt, ít nhăn, mềm mại và thoải mái khi vận động.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Đen 1\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_4907_717e0d01360d4047932d5a30d31cc4c7.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4911_da607413490b4ce1b87ecff8fb5c6d84.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4914_5c79a7c983734b258181e7ea83d2833f.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_4912_21c0a7a633f84c5a936e41400e8dfaa4.jpg",
        "https://product.hstatic.net/200000887901/product/img_8316.1_ceb6e32f3f6f487f895962e803b71b1a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_22ef7d26ef654640bf9cb233274be29c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d8783f9f180a4f9eaa532f5aa63cd610.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_22a313d216ca4766afe7aef497fcbc99.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_49fd3de2943940af8a1c2ade8ea420f9.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-den-aristino-cropped-atr0230s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:25.549Z",
      "updated_at": "2025-12-24T19:12:25.549Z"
    },
    {
      "id": 156,
      "name": "Quần Âu Nam Aristino Cropped ATR0220S2",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0220S2\nMã sản phẩm: ATR0220S2\nKiểu dáng: Cropped/ Form ngắn tới mắt cá chân\nThiết kế:\nThiết kế cổ điển và thanh lịch – phù hợp cho môi trường công sở, sự kiện trang trọng hoặc phối đồ smart-casual.\nCạp có đỉa quần, phù hợp để phối với thắt lưng.\nLy giữa dập nếp tạo đường gân sắc nét, tăng tính lịch sự, chỉn chu.\nTúi chéo hai bên hông + túi sau: tiện dụng và mang tính thẩm mỹ cao.\nMàu sắc: Navy – tông màu trung tính dễ phối, phù hợp với áo sơ mi trắng, xanh, pastel hay thậm chí là áo thun polo.\nChất vải thoáng khí và nhẹ, tạo cảm giác dễ chịu khi mặc cả ngày dài.\nCo giãn nhẹ, hỗ trợ vận động linh hoạt\nGiữ form tốt, không bị bai dão hay nhăn sau nhiều lần giặt.\nKhả năng chống nhăn cao, giúp giữ vẻ ngoài luôn chỉn chu.\nChất liệu:\n68% Polyester giữ form dáng rất tốt, ít bị nhăn, giúp quần âu luôn trong trạng thái chỉnh tề, gọn gàng.\n29% Viscose mang lại cảm giác mềm mại, thoải mái khi mặc, phù hợp với đa dạng kiểu thời tiết.\n3% Spandex co giãn và đàn hồi cao, giúp quần âu thoải mái và linh hoạt khi vận động.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun, polo hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Xanh tím than 26\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/img_5490_15eb76dc4e044f1eacef7a43e26af6a4.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5492_75c11e3811a34d148447ad99c6680c8e.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5506_2dc1dc876a944ee2b044beedaccbd232.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_5482_9e4c2eba847144d0a525d28907f23a42.jpg",
        "https://product.hstatic.net/200000887901/product/img_8304.1_949db1b51c6e41b0b1d2dae9e0809ef6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0465f085c088419ab88664038d2c12f9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_204f0be2fda44c19bee75bf9a49f8b4a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0856ceea90cf4f52a1797bd263d926be.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_73ac8a5e3d9d41638033471e2f0f5969.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0220s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:33.002Z",
      "updated_at": "2025-12-24T19:12:33.002Z"
    },
    {
      "id": 157,
      "name": "[ARISTINO x MẠNH TRƯỜNG] Quần âu Nam Aristino ATR0100Z",
      "description": "Tên sản phẩm: Quần âu Nam Aristino ATR0100Z\nMã rút gọn: ATR0100Z\nKiểu dáng: Dáng ôm vừa, ngắn/Cropped\nThiết kế:\nQuần âu phom Cropped suông nhẹ, phù hợp với nhiều dáng người.\nMàu sắc trung tính, dễ kết hợp trang phục khác, đường nét cắt may tinh tế, đơn giản nhưng vẫn đem lại diện mạo lịch lãm và nổi bật cho các quý ông.\nChất liệu:\n68% Polyester giữ form dáng rất tốt, ít bị nhăn, giúp quần âu luôn trong trạng thái chỉnh tề, gọn gàng.\n29% Viscose mang lại cảm giác mềm mại, thoải mái khi mặc, phù hợp với đa dạng kiểu thời tiết.\n3% Spandex co giãn và đàn hồi cao, giúp quần âu thoải mái và linh hoạt khi vận động.\nMàu sắc: Xám 32; Xám 40\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 895000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_3e933d28f0554fd7a91058d47b3499a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ff733170c0a1405ea53c78be902777c8.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__1__74f2a509306742709faf897b4e0e89c7_5c2a3742e881404d85d98bd256ef5db4.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__2__db25518db72c4c499a46080263fb8dbc_e125812624ba451f8aeb2300acbbd474.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__3__9983107120314468848e35768d0cb9ae_5e899273bf69489b9435bc1f265adaa2.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__5__eb2a9734f4fe44fabf63fc70a25c5fb0_47b14890ad2c489789077d41dee9c710.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__4__5553551a7d914c4795f2e9678cf18069_c49cc0c0fbb949c588c2586d5ba1da2b.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__16__88a5fcc429cf4e08a8fee4cf7869a8e9_3509a16774c7466996571542fc45957f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_37b262d81d40417fa7692ec2cee5179b.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr0100z__17__5b6f850f1285457da915a8dda3e89ffa_71326e11f0fc4387a9a635715ee7ce26.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "aristino-x-manh-truong-quan-au-nam-aristino-atr0100z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:40.916Z",
      "updated_at": "2025-12-24T19:12:40.916Z"
    },
    {
      "id": 158,
      "name": "Quần âu Nam Aristino Phom Cropped ATRM040Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino ATRM040Z\nForm Dáng:\nDáng ôm vừa (slim fit), ngắn (cropped)\nThiết kế:\nQuần âu phom dáng Cropped với độ rộng vừa phải, giúp tôn dáng người mặc và tạo diện mạo trẻ trung, hiện đại.\nMàu sắc trung tính, dễ dàng kết hợp với nhiều kiểu trang phục khác nhau. Đường cắt may tinh tế, đơn giản nhưng vẫn mang lại sự lịch lãm và nổi bật cho quý ông.\nChất liệu:\n75% Polyester: Mang đến độ bền màu, bề mặt vải trơn trượt, mỏng nhẹ và sắc nét qua thời gian.\n23% Rayon: Tạo độ mềm mại, mát mẻ và khả năng bay rũ tự nhiên.\n2% Spandex: Tăng độ co giãn nhẹ, giúp dễ dàng vận động thoải mái.\nPhối với:\nDễ dàng kết hợp với áo sơ mi, áo thun hoặc blazer để tạo nên các phong cách từ công sở đến dạo phố.\nPhù hợp cho các dịp đi làm, dự tiệc hoặc các hoạt động ngoài trời.\nMàu sắc: Be 074 MF\nKích thước: 30/31/32/33/34\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\n\nHướng dẫn giặt ủi:\n\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1195000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_655c74a5cb2a4fe1b148be56d68c4a90.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_11f3f0000e6e4764b0901976abb30372.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e67ad2b404904ef9a292e16ee3e371a8.jpg",
        "https://product.hstatic.net/200000887901/product/dsc05269_3dca78f6f13949229cac86d98be305ad.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b9b11a43b57842a6b546365ec9307d1c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ef2fcff5974046bfb785fcea82f34ce7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_53b01262cfd740138756a07af5a80cbd.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_496ddb2aceb24495927cf4a2b7d66eb5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_93577ea6f7c940eaa984adfb220da6b9.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-phom-cropped-atrm040z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:49.040Z",
      "updated_at": "2025-12-24T19:12:49.040Z"
    },
    {
      "id": 159,
      "name": "Quần âu Nam Aristino Slim fit ATR0420Z",
      "description": "Tên sản phẩm: Quần âu Nam Aristino Slim fit ATR0420Z\nMã rút gọn: ATR0420Z\nKiểu dáng: Dáng ôm vừa, ngắn (Cropped)\nThiết kế:\nQuần âu phom dáng Cropped với độ suông vừa phải, tôn dáng và mang lại sự thoải mái cho người mặc.\nMàu sắc trung tính, dễ dàng phối hợp với nhiều trang phục khác nhau, cùng đường nét cắt may tinh tế, mang lại diện mạo lịch lãm và nổi bật cho các quý ông.\nChất liệu: 67% Polyester, 29% Viscose, 4% Spandex\n67% Polyester: Giúp quần bền màu, sắc nét, mịn màng và mỏng nhẹ.\n29% Viscose: Mang lại độ mềm mại, mịn mượt, giúp quần nhẹ nhàng, thoáng mát tối đa khi mặc.\n4% Spandex: Tạo độ co giãn nhẹ, linh hoạt và thoải mái khi vận động.\nMàu sắc: Be 46, Trắng 6\nSize: 29, 30, 31, 32, 33, 34, 35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để tránh nhăn và phai màu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__3__c61db8c6fc7143f6a9c33dadcc8ca427_99a7e4fe67704ab49a85eef8f96e067c.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__4__a7d1fa2efddd4045b625518de98531e2_e7048cb8149e4da588c36c950d5e150d.jpg",
        "https://product.hstatic.net/200000887901/product/61db8c6fc7143f6a9c33dadcc8ca427_large_e6d03b62fe8e46998f20ad5f86e09187_72d51c424d4340248f16444420b5b18e.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__2__e244d5a532cf4d5581be37238e5cac43_8a42fac40c14401aa5ce5ec87014acf1.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__5__3822a020db854d6596e1d56117d8febd_afb295174d7041d0b8e5c4de28146399.jpg",
        "https://product.hstatic.net/200000887901/product/img_7350.1x900x900x4_d6afd2d6e5034e2093ada818f5fb83d1_0cc1f122a30f4e81939f5eb0df612dac.jpg",
        "https://product.hstatic.net/200000887901/product/img_7350x900x900x4_d502b570f8cd488c85c2c21d35105917_7cf939f0cd754a93bd8bfb25f1af246f.jpg",
        "https://product.hstatic.net/200000887901/product/img_7351x900x900x4_a06df9b70ea0407cb841fc4880fb837c_410fc6ddcf38438f9a161f45b31ea187.jpg",
        "https://product.hstatic.net/200000887901/product/img_7353x900x900x4_6604926ee7a34e859536d200a678a15d_fa8d854b0f2b4699b35c1116169a8b1e.jpg",
        "https://product.hstatic.net/200000887901/product/img_7352x900x900x4_377216e67461498880e43e7daca80f58_0eeb545a391d4ddb9140e4982f78661c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0420z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:12:56.116Z",
      "updated_at": "2025-12-24T19:12:56.116Z"
    },
    {
      "id": 160,
      "name": "Quần âu Nam Aristino ATR00803",
      "description": "FORM DÁNG: Cropped\nTHIẾT KẾ:\n- Quần âu phom dáng Cropped ôm vừa, trẻ trung\n- Quần thiết kế họa tiết kẻ chìm tinh tế, đem đến diện mạo chỉn chu, lịch lãm khi mặc. Gam màu trung tính, dễ kết hợp với nhiều loại trang phục, nhiều phong cách khác nhau.\n\nCHẤT LIỆU:\n- 72% Polyester giúp quần bền màu, sắc nét, mặt vải trơn trượt, mỏng nhẹ.\n- 26% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên.\n- 2% Spandex tạo độ co giãn nhẹ.\n\n\nMÀU SẮC: Xanh tím than 46 kẻ chìm; Xám 303 kẻ chìm\n\nSIZE: 29/30/31/32/33/34/35\n\nHướng dẫn bảo quản:\n\nBảo quản nơi khô ráo, thoáng mát để giữ độ bền của sản phẩm.\nTránh phơi dưới ánh nắng trực tiếp và bảo quản trong hộp để giữ dáng cà vạt.\n\nHướng dẫn giặt ủi:\n\nHạn chế giặt máy. Nên giặt tay bằng nước lạnh.\nKhông sử dụng chất tẩy mạnh.\nỦi ở nhiệt độ thấp để bảo vệ chất liệu vải.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Màu sắc thực tế có thể khác biệt do ánh sáng khi chụp ảnh hoặc màn hình hiển thị của khách hàng.",
      "brand": "Aristino",
      "base_price": 89500000,
      "sale_price": 626500,
      "category_id": 11,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/quan-au-nam-aristino-atr00803__1__fbd3c62e4301404387dfd86fcfbd2a0f_bb91285f77e740f591fce1ab4e92be4d.jpg",
        "https://cdn.hstatic.net/products/200000887901/_tc_2356_754490b642c345818990e8b689bf851d_8a294864c4b84088b9085400244b5573.jpg",
        "https://cdn.hstatic.net/products/200000887901/_tc_2360_966770a9f2be4c36b1fb178bb02a3538_fb7eea2250e7445f9591318131e84b92.jpg",
        "https://cdn.hstatic.net/products/200000887901/_tc_2347_30c0b8f42f634caf9227f38dd54a9ce5_0afdf1510baa47198194392262395e4b.jpg",
        "https://cdn.hstatic.net/products/200000887901/quan-au-nam-aristino-atr00803__7__5f967f1ef33e4e2890afe14bf9d1a8db_084b7f5de069499188936a388104c6ef.jpg",
        "https://cdn.hstatic.net/products/200000887901/quan-au-nam-aristino-atr00803__8__c3a2cb949f224c09adb0636ffd07ef6f_cb97852305e44ab793c66eeef1cea32d.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_1930_c60e513c41424943ab820641818e3514_b1c7c8cbefd34d2bb1e77e34615f9673.jpg",
        "https://cdn.hstatic.net/products/200000887901/quan-au-nam-aristino-atr00803__10__9257053c2dff41ba880b8f0056ef9d57_c7d8d1be43e64a5bbf2d43e7d92a9407.jpg",
        "https://cdn.hstatic.net/products/200000887901/quan-au-nam-aristino-atr00803__9__d8db2973835c40889739f602e7837471_570f19eefb7440b19a84f61849ee3473.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-atr00803",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:13:04.058Z",
      "updated_at": "2025-12-24T19:13:04.058Z"
    },
    {
      "id": 161,
      "name": "Quần Âu Nam Aristino Cropped ATR0110Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Cropped ATR0110Z\nKiểu dáng: Dáng ôm vừa, ngắn / Cropped\nThiết kế: \nQuần âu phom dáng Cropped có độ rộng vừa phải, tôn lên vóc dáng người mặc. \nMàu sắc trung tính giúp dễ dàng kết hợp với nhiều loại trang phục khác nhau. \nĐường cắt may tinh tế và đơn giản nhưng vẫn mang lại diện mạo lịch lãm, nổi bật cho các quý ông.\nChất liệu: 66% Polyester, 28% Viscose, 6% Spandex\n66% Polyester: Giúp quần bền màu, sắc nét, bề mặt trơn và mỏng nhẹ.\n28% Viscose: Tạo độ mịn mượt cho bề mặt vải, giúp quần nhẹ nhàng, thoáng mát tối đa.\n6% Spandex: Mang lại độ co giãn nhẹ, tăng sự linh hoạt khi vận động.\nMàu sắc: Đen 1\nSize: 29, 30, 31, 32, 33, 34, 35\nSản xuất: Việt Nam\n\nHướng dẫn giặt ủi:\n\nGiặt nhẹ bằng nước lạnh để bảo vệ chất liệu và giữ màu lâu dài.\nKhông sử dụng chất tẩy rửa mạnh.\nỦi ở nhiệt độ thấp hoặc sử dụng bàn ủi hơi nước.\n\nHướng dẫn bảo quản:\n\nTránh phơi dưới ánh nắng trực tiếp để giữ màu sắc và phom dáng quần.\nLưu trữ quần ở nơi khô ráo, thoáng mát.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Màu sắc sản phẩm thực tế có thể khác do điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 825000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://product.hstatic.net/200000887901/product/dsc05339_bbae14fd722849cc84457ac3bc0ef843.jpg",
        "https://product.hstatic.net/200000887901/product/dsc05341_8cb6adc78fc8443893852fe76b2065bb.jpg",
        "https://product.hstatic.net/200000887901/product/dsc05359_fdbe405f5b5d49a692151fc0e5daae97.jpg",
        "https://product.hstatic.net/200000887901/product/dsc05346_5ea061a808734bb89a30dbe5d7172dd4.jpg",
        "https://product.hstatic.net/200000887901/product/n-quan-au-nam-aristino-atr0110z-1__1__01f210621a8448b6be2f0a75a9cc86a2_21afcf8681c747f0894b2c43aa1c7a93.jpg",
        "https://product.hstatic.net/200000887901/product/n-quan-au-nam-aristino-atr0110z-1__2__fd2b6383ac084978be5938da82d525b4_e1c67b4601c4403f85bf9ac1aa202574.jpg",
        "https://product.hstatic.net/200000887901/product/n-quan-au-nam-aristino-atr0110z-1__3__583fc33343c54b4389c7a4dd18ad4254_477a895b08284648a811ab67c8faa87e.jpg",
        "https://product.hstatic.net/200000887901/product/n-quan-au-nam-aristino-atr0110z-1__5__629cebcaa34a436fb34bfbed3ea09114_0bfd5c8036874286abfc8cb73e05e649.jpg",
        "https://product.hstatic.net/200000887901/product/n-quan-au-nam-aristino-atr0110z-1__4__2ba73ad12352468cbcdd91e55de652b7_4cfd095a65a74778aa8adf6ae06e9187.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-cropped-atr0110z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:13:12.913Z",
      "updated_at": "2025-12-24T19:13:12.913Z"
    },
    {
      "id": 162,
      "name": "Quần âu Nam Aristino ATR01103",
      "description": "FORM DÁNG: Cropped\nTHIẾT KẾ:\n- Quần âu phom dáng Cropped suông rộng vừa phải, tôn dáng người mặc\n- Quần thiết kế tinh tế với tông màu nhã nhặn đem đến diện mạo chỉn chu, lịch lãm khi mặc\n\nCHẤT LIỆU:\n- 68% Polyester tạo bề mặt vải bóng mịn, giữ phom và giảm nhăn\n- 30% Rayon giúp quần có độ mềm mại, mát mẻ và bay rũ tự nhiên\n- 2% Spandex tạo độ co dãn nhẹ\n\nMÀU SẮC: Xám 60 kẻ\nSIZE: 29/30/31/32/33/34/35",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 11,
      "images": [
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__1__caa4aa80ce694b50b16592cfb934e91e_ab38c9843b27444eaba5016e8e1726cd.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__2__940cb08d72cf4fb0b9509fda84ad9155_52f23707e2344263be17260c0a571074.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__3__c1a3975ff38847c1bd283c2611bd7362_2b074900683e4df983a936e9e0474733.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__9__5d326ae9f7a742b492725ae7ce7bcc83_5db4ec261f3c482dab22537105215cae.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__4__7f60cb0bb892486aa26a507ea779d19e_88ac7af8b4fd41fabfa229e71cccf3cd.jpg",
        "https://product.hstatic.net/200000887901/product/quan-au-nam-aristino-atr01103__5__2f1bd8633d4548dfa408053f0c33d175_31eb231f1c6d4f2a9281a1ffbc004af3.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4cf9da342c684d49af0348fa49a31a52.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a3f5d2b9278247c9b24470f92295a922.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7dcc28bd7972448c9e801eea66e30ef9.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-atr01103",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:13:19.977Z",
      "updated_at": "2025-12-24T19:13:19.977Z"
    },
    {
      "id": 163,
      "name": "Nước Hoa Nam Aristino Paris Odyssey No.12 100ml APFODY01AS",
      "description": "Tên sản phẩm: Nước Hoa Nam Aristino Paris Odyssey No.12 100ml APFODY01AS\nMã sản phẩm: APFODY01AS\nThiết kế:\nChai thủy tinh trong suốt chuyển sắc xanh đại dương, tạo hiệu ứng thị giác mát lạnh và hiện đại; logo ARISTINO PARIS và tên sản phẩm ODYSSEY N°12 được dập nổi ánh vàng kim nổi bật\nNắp chai đen bóng tối giản, dáng trụ chắc tay, dập chìm biểu tượng mặt trời huyền thoại\nHộp trụ đen mờ cao cấp, điểm nhấn bằng chi tiết kẻ sọc ánh kim tinh tế, đồng bộ hoàn hảo với thiết kế chai, nắp hộp dập nổi nhũ bạc biểu tượng mặt trời huyền thoại\nThành phần:\nAlcohol Denat., Parfum (Fragrance), Aqua (Water), Tetramethyl Acetyloctahydronaphthalenes, Hexamethylindanopyran, Coumarin, Limonene, Vanillin, Hydroxycitronellal, Alpha-Isomethyl Ionone, Citrus Aurantium Bergamia Peel Oil, Linalyl Acetate, Pinene, Linalool, Rose Ketones, Trimethylbenzenepropanol, Alpha-Terpinene, Terpinolene, Benzyl Benzoate, Citral, Beta-Caryophyllene, Cinnamomum Zeylanicum Bark Oil, Terpineol, Cinnamal, Menthol, Geranyl Acetate, Eugenol, Isoeugenol, Farnesol, Geraniol, Benzyl Alcohol, Citronellol, Camphor, Anethole. Ci 19140 (Yellow 5), Ci 17200 (Red 33)\nNote hương:\nMở đầu với sự tươi mát của bạc hà thanh khiết, tiêu hồng điểm chút cay nhẹ và chanh vàng rực rỡ, hương thơm dần chuyển sang nét bản lĩnh của gỗ tuyết tùng hòa quyện cùng gừng ấm, tạo cảm giác vững vàng và đầy khí chất. Khi chạm đến hồi kết, bản hòa hương sâu lắng của cỏ hương bài, hoắc hương, xạ hương trắng và gỗ đàn hương lan tỏa một dư âm ấm áp, quyền lực và cuốn hút – dấu ấn sang trọng, tinh tế làm nên bản sắc ODYSSEY N°12.\nNhóm hương:\nFruity, Woody, Musk (Hương trái cây, Gỗ, xạ hương)\nDung tích: 100ml\nSản xuất: Made in France\n\nHướng dẫn sử dụng nước hoa đúng cách:\n\nXịt nước hoa đúng vị trí, các điểm có mạch đập giúp hương lan tỏa tốt hơn: Sau tai, Cổ, Cổ tay, Khuỷu tay trong, Giữa ngực\nKhoảng cách chuẩn khi xịt: Để chai cách da 10–15 cm, xịt 1–2 lần cho hương nhẹ, 3–4 lần cho hương rõ ràng, không xịt quá nhiều.\n\nCách bảo quản nước hoa:\n\nTrá",
      "brand": "Aristino",
      "base_price": 3600000,
      "sale_price": null,
      "category_id": 12,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/vuong_27af5f22383a4c2a8f2151ff1d9adfad.jpg",
        "https://cdn.hstatic.net/products/200000887901/no12_dcc8be8225ac4fe2845f6ebc4fc69fef.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02377_de241b11a4534bedb8954e657562b761_f5a5ff543c554b1ca278e1ec2d4047c9.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02374_0448f09ab47a4f7b8635499844bdae54_021ab42877ce44998823547cda569643.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02380_d1c26307ebd5403187dacd82b2578b07_2596fa6c23814115b1d9491d1e564084.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02383_bfa8ecbdcb074dab8d99b463c2329973_e108a1906352430ebb74ae795fc6c09e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02394_c3e4cd3ee0d04a13ba995e96c085fa04_66ac22b083e24864b1c27f2cd3baec14.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02399_a4a72a892be84d2a8f0c152dd5f04f15_8ab2f7442fbc444182ad538e40f03c32.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02402_bdf9d6e7771d4b35bd15ed0365210861_dde62d7a6470454db66b2337eaf1ec2a.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02405_3bb2904ecf984492b4b1eeb99b9e2b61_5dde4b44434e4be9930ef0c94a5a4300.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "nuoc-hoa-nam-aristino-paris-odyssey-no-12-100ml-apfody01as",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:13:30.724Z",
      "updated_at": "2025-12-24T19:13:30.724Z"
    },
    {
      "id": 164,
      "name": "Nước Hoa Nam Aristino Paris Rooted Soul 100ml APFROT01AS",
      "description": "Tên sản phẩm: Nước Hoa Nam Aristino Paris Rooted Soul 100ml APFROT01AS\nMã sản phẩm: APFROT01AS\nThiết kế:\nThân chai thủy tinh trong suốt với hiệu ứng loang đen tạo chiều sâu thị giác tinh tế; logo ARISTINO PARIS và tên ROOTED SOUL dập nổi ánh vàng kim nổi bật, sang trọng.\nNắp chai đen bóng tối giản, dáng trụ chắc tay, dập chìm biểu tượng mặt trời huyền thoại\nHộp trụ đen mờ cao cấp, điểm nhấn bằng chi tiết kẻ sọc ánh kim tinh tế, đồng bộ hoàn hảo với thiết kế chai, nắp hộp dập nổi nhũ bạc biểu tượng mặt trời huyền thoại\nThành phần:\nAlcohol Denat, Parfum (Fragrance), Aqua (Water), Tetramethyl Acetyloctahydronaphthalens, Hexamethylindanopyran, Linalool, Pogostemon Cabin Oil, Beta-Caryophyllene, Vanillin, Coumarin, Acetyl Cedrene, Limonene, Pinene, Trimethyl Cyclopentane, Methylisopentenol, Benzyl Benzoate, Cedrus Atlantica Oil, Extract, Terprineol, Trimethylbenzenepropanol, Linalyl Acetate, Camphor, Eugenyl Acetate, Eugenol, Geraniol, Citral, Geranyl Acetate, Isoeugenol, Sclareol, Terpinolene. Ci 19140 (Yellow 5), Ci 17200 (Red 33).\nNote hương:\nTầng hương đầu: Tiêu hồng nồng ấm hòa cùng thảo quả the cay, mở ra cảm giác tinh tế, mạnh mẽ và đầy nội lực.\nTầng hương giữa: Gỗ trầm hương quý giá kết hợp gỗ đàn hương mượt mà và cỏ hương bài thoáng mát, tạo nên chiều sâu huyền bí và sang trọng.\nTầng hương cuối: Vani ngọt dịu hòa cùng hổ phách ấm áp và đậu tonka béo bùi, để lại dư âm nồng nàn, lịch lãm và đầy quyền lực.\nNhóm hương:\nOriental Woody (Hương gỗ phương Đông)\nDung tích: 100ml\nSản xuất: Made in France\n\nHướng dẫn sử dụng nước hoa đúng cách:\n\nXịt nước hoa đúng vị trí, các điểm có mạch đập giúp hương lan tỏa tốt hơn: Sau tai, Cổ, Cổ tay, Khuỷu tay trong, Giữa ngực\nKhoảng cách chuẩn khi xịt: Để chai cách da 10–15 cm, xịt 1–2 lần cho hương nhẹ, 3–4 lần cho hương rõ ràng, không xịt quá nhiều.\n\nCách bảo quản nước hoa:\n\nTránh ánh nắng trực tiếp\nTránh nhiệt độ cao\nĐóng nắp ngay sau khi dùng\nĐể chai đứng, không lắc\nKhông chuyển sang chai khác nếu không cần thiết\n\nLưu ý: Hình ảnh ",
      "brand": "Aristino",
      "base_price": 3600000,
      "sale_price": null,
      "category_id": 12,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/vuong__1__93b8ef9239c3487489e26b5c827b746a.jpg",
        "https://cdn.hstatic.net/products/200000887901/rooted_soul_f6b10ec7780149a48dfd3be347b6e824.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02420_0115f7c448f245ceab0a66fea4a26683_fbf596ebf2b5418aad585b0b2d108a78.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02428_7508d785b67b49d1bb3f36f04eea0a88_4f826cc400804a509b84477fb7cac6b5.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02430__1__d5ba5d00b5b943da9f2734c45b35e8e2_10d17669822343f08dd2f60e5a9fbb62.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02305_0a844d1ff1a9430b961319bee3674afc_d39f6c7ca09640c892f7d73035310308.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02316_5747151f98344f03be6a9756b2b1eeab_cef44d9f8ccc4f179ddef0bb7eb9453e.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02317_0c8e40e50c6e4b7c99472ecf2120f14e_c32dea45f2bd4aa4b9eb60cc4ef4bcfb.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02346_adbb88a31946456fb52efc4387544a8e_9ebf281030024af3858207a9ca74f029.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02348_8f61e98bf7f8402a8f286d2e5f2f37c7_79334e2c1f004e548fedea1ba414333c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "nuoc-hoa-nam-aristino-paris-rooted-soul-100ml-apfrot01as",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-24T19:13:38.400Z",
      "updated_at": "2025-12-24T19:13:38.400Z"
    },
    {
      "id": 165,
      "name": "Nước Hoa Nam Aristino Paris Signature Bold 100ml APFSIG01AS",
      "description": "Tên sản phẩm: Nước Hoa Nam Aristino Paris Signature Bold 100ml APFSIG01AS\nMã sản phẩm: APFSIG01AS\nThiết kế:\nThân chai thủy tinh trong suốt với hiệu ứng loang nâu tạo chiều sâu thị giác tinh tế; logo ARISTINO PARIS và tên SIGNATURE BOLD dập nổi ánh vàng kim nổi bật, sang trọng.\nNắp chai đen bóng tối giản, dáng trụ chắc tay, dập chìm biểu tượng mặt trời huyền thoại\nHộp trụ đen mờ cao cấp, điểm nhấn bằng chi tiết kẻ sọc ánh kim tinh tế, đồng bộ hoàn hảo với thiết kế chai, nắp hộp dập nổi nhũ bạc biểu tượng mặt trời huyền thoại\nThành phần:\nAlcohol Denat, Parfum (Fragrance), Aqua (Water), Tetramethyl Acetyloctahydronaphthalenes, Hexamethylindanopyran, Coumarin, Limonene, Vanillin, Hydroxycitronellal, Alpha-Isomethyl Ionone, Citrus Aurantium Bergamia Peel Oil, Linalyl Acetate, Pinene, Linalool, Rose Ketones, Trimethylbenzenepropanol, Alpha-Terpinene, Terpinolene, Benzyl Benzoate, Citral, Beta-Caryophyllene, Cinnamomum Zeylanicum Bark Oil, Terpineol, Cinnama, Menthol, Geranyl Acetate, Eugenol, Isoeugenol, Farnesol, Geraniol, Benzyl Alcoholi, Citronellol, Camphor, Anethole. Ci 19140 (Yellow 5), Ci 17200 (Red 33)\nNote hương:\nTầng hương đầu: Oải hương thanh lịch hòa cùng quýt, bạc hà và bưởi tươi sáng, mở ra cảm giác sảng khoái, giàu năng lượng và đầy cuốn hút.\nTầng hương giữa: Quế ấm áp kết hợp vị ngọt thanh của táo và nét lãng mạn của hoa hồng, tạo nên sức hút mạnh mẽ và nam tính.\nTầng hương cuối: Gỗ hổ phách, gỗ tuyết tùng hòa quyện cùng hoắc hương và vani, để lại dư âm sang trọng, gợi cảm và bền bỉ – dấu ấn của quý ông SIGNATURE BOLD.\nNhóm hương:\nWoody Spicy (Hương gỗ cay)\nDung tích: 100ml\nSản xuất: Made in France\n\nHướng dẫn sử dụng nước hoa đúng cách:\n\nXịt nước hoa đúng vị trí, các điểm có mạch đập giúp hương lan tỏa tốt hơn: Sau tai, Cổ, Cổ tay, Khuỷu tay trong, Giữa ngực\nKhoảng cách chuẩn khi xịt: Để chai cách da 10–15 cm, xịt 1–2 lần cho hương nhẹ, 3–4 lần cho hương rõ ràng, không xịt quá nhiều.\n\nCách bảo quản nước hoa:\n\nTránh ánh nắng trực tiếp\nTránh nhiệt độ cao\nĐón",
      "brand": "Aristino",
      "base_price": 3600000,
      "sale_price": null,
      "category_id": 12,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/vuong__2__22700a656849438c87a88646088daae7.jpg",
        "https://cdn.hstatic.net/products/200000887901/signature_bold_7242c1c25a194981a506c78929f9ba4c.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02434_bf7aa4a712d4434bb4a9560404025ebf_8223a2248c764891a4acf319647ded45.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02438_75e4f25b43ea4653aeb7298c475d9b1c_4e0b10b4a9bb4ab987482207bceefc9b.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02441_e100e6bc2ec64c2194443f36791754cc_9d7eae396af748c0b4b46cf51bf98a97.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02442_9265a1a097de41aa86033856dd88e947_76ee1d2396c04953b7f43dc6319d4650.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02452_99feab3a60d54fe7a31423cee159a834_382b2a342f404264a460f8d419a5c0af.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02455_f1738db1993648a581db977a1595193d_c782e220186f43148dab4d00c050d7cd.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02477_ab2a6e8497ca4815a7872a2018ed337e_6d877bceab264eeba592d7a372e3ffc8.jpg",
        "https://cdn.hstatic.net/products/200000887901/dsc02483_afc74333d5c44e02bf3f20fab0aae60c_6db82c7fcc06445abc3e69b3c0595337.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "nuoc-hoa-nam-aristino-paris-signature-bold-100ml-apfsig01as",
      "is_new": false,
      "tags": [],
      "created_at": "2025-12-24T19:13:45.224Z",
      "updated_at": "2025-12-24T19:13:45.224Z"
    },
    {
      "id": 166,
      "name": "Áo Polo Nam Aristino Golf APSG02AS2",
      "description": "Tên sản phẩm: Áo Polo Nam Aristino Golf APSG02AS2\nKiểu dáng: Tech golf : form áo polo shirt golf rộng hơn form poloshirt reg thường\nThiết kế:\nÁo polo với phom Tech golf thiết kế này có độ suông rộng mang lại sự thoải mái tuyệt đối nhưng vẫn giữ được sự chỉn chu, phù hợp với những quý ông năng động.\nMàu sắc nam tính và thiết kế khỏe khoắn mang đến diện mạo thời thượng, lịch lãm cho người mặc.\nChất liệu:\n88% Polyester giúp áo bền màu, sắc nét, có độ trơn mượt và mỏng nhẹ, tạo sự thoải mái khi vận động.\n12% Spandex giúp áo bền bỉ, thoáng khí và có độ co giãn tuyệt vời.\nMàu sắc: Xanh tím than 24 Can Pha\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nTreo áo: Sử dụng móc treo để giữ phom dáng áo và tránh nhăn.\nNơi lưu trữ: Cất áo ở nơi khô ráo, thoáng mát, tránh ánh sáng mặt trời trực tiếp.\nGiặt máy: Giặt ở chế độ nhẹ với nước lạnh để duy trì độ bền màu và tính năng Anti UV.\nKhông sử dụng chất tẩy mạnh: Tránh sử dụng chất tẩy rửa mạnh để bảo vệ chất liệu áo.\nỦi ở nhiệt độ thấp: Sử dụng bàn ủi ở nhiệt độ thấp để tránh làm hỏng vải.\n\nLƯU Ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino Golf",
      "base_price": 1250000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_8362f38aa7ce4e988bdb81320eb96b70.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_4543b50894e247f7ae22a46fb4da7f4c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_bb5ba74abf2946e984e7eb9a56da73e1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8f815d9a09d449f08d7b626c7a1a0229.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8a9d6247825e4337be9b079e05c01398.jpg",
        "https://product.hstatic.net/200000887901/product/dsc08610_68712e707d484ac38b1282fff47a3473.jpg",
        "https://product.hstatic.net/200000887901/product/img_0398.1_9e1d55b23562406b9ac41cb7d07ee97c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_486423ebdd314e488f47394deab2be65.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f6de90308fb84b169d375c8df9e6759f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_62ce506a78fc4dc6b15f9bfd580fa806.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-nam-aristino-golf-apsg02as2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:01:57.643Z",
      "updated_at": "2025-12-26T04:01:57.643Z"
    },
    {
      "id": 167,
      "name": "Áo Polo Nam Aristino Regular Fit APS085AS3",
      "description": "Tên sản phẩm: Áo Polo Nam Aristino Regular Fit APS085AS3\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nÁo Polo phom dáng Regular Fit suông nhẹ nhưng vẫn vừa vặn, tôn dáng tối đa khi mặc.\nThiết kế cổ thanh lịch kết hợp họa tiết đan lát, đem đến diện mạo thời thượng cho người mặc.\nChất liệu:  97% Mercerized Cotton 3% Spandex\n- Mercerized Cotton vải mềm mịn, thấm hút mồ hôi tốt, giúp người mặc cảm thấy mát mẻ và thoải mái.\n- Spandex tăng cường khả năng đàn hồi của vải, giúp trang phục co giãn theo cơ thể mà không làm mất dáng.\nMàu sắc: Vàng 39\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \n Không sử dụng chất tẩy mạnh. \n Là/ủi ở nhiệt độ thấp.  \nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 1100000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_8907f20f1f3d4f8eabe1b53b4c60a24d.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f548c37a9aac4bbb92cfc0dfb35720ca.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_1e6f2492bd32464bb35d0579339140d5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_8605e53ced9d464989761f14518e3840.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c604b02d6c424b0d8e6627fb232508ff.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_8450_-_copy_811cf65b38f9403bb53f0f8add7aa828.jpg",
        "https://product.hstatic.net/200000887901/product/img_3597.1_454e3daac2d549c3b140172b3c85fc7c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f35478ffbf19489785d5046cc2333a0a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_218133926eb944b7ad57a80b9f81516e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c7d655e7c9b641d6a573a102f68ab77f.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-nam-aristino-regular-fit-aps085as3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:03.815Z",
      "updated_at": "2025-12-26T04:02:03.815Z"
    },
    {
      "id": 168,
      "name": "Áo Polo Nam Aristino Regular Fit APS137AS4",
      "description": "Tên sản phẩm: Áo Polo Nam Aristino Regular Fit Cotton mềm mại thấm hút mồ hôi tốt và giữ phom tốt APS137AS4\nKiểu dáng: Dáng vừa / Regular fit\nThiết kế:\nÁo polo mang đến sự mềm mại, thoáng mát và thấm hút mồ hôi tối ưu, giúp bạn luôn dễ chịu trong mọi hoạt động. \nChất liệu tự nhiên, an toàn cho da, phù hợp với cả thời tiết nóng bức. \nThiết kế có cổ thanh lịch với họa tiết thêu, dễ dàng phối đồ, lý tưởng cho phong cách năng động và lịch sự.\nChất liệu:\n95% Cotton mềm mại, thấm hút mồ hôi tốt và giữ phom tốt.\n5% Spandex tạo độ đàn hồi cao, mang lại cảm giác thoải mái.\nMàu sắc: Đen 1\nSize: S, M, L, XL, XXL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C. \nKhông sử dụng chất tẩy mạnh. \nLà/ủi ở nhiệt độ thấp.\n Phơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 850000,
      "sale_price": null,
      "category_id": 2,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_21dd3261acc349a488af2a6ce720cb82.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_2b8b6648a5124eb98e1f5440bf992d48.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ceee6150261f4792aa5854989fd56916.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ad8a58ee89474430a4ba646e59afeaeb.jpg",
        "https://product.hstatic.net/200000887901/product/ntc_9024_ad49e97c0ca7425d8a5616c831a08d9a.jpg",
        "https://product.hstatic.net/200000887901/product/img_2319.1_24b6a7849abc4a8d864117349596e3b2.jpg",
        "https://product.hstatic.net/200000887901/product/img_2319_e54d10347b7547f6bc2ba83b80f7f1de.jpg",
        "https://product.hstatic.net/200000887901/product/img_2320_af68edb5fd024e5dac9a744d862c562c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_534df57ab02f4a0b93060b6b057e224c.jpg",
        "https://product.hstatic.net/200000887901/product/img_2322_e2ff65c430784bf89df2276239060b35.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-polo-nam-aristino-regular-fit-aps137as4",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:11.487Z",
      "updated_at": "2025-12-26T04:02:11.487Z"
    },
    {
      "id": 169,
      "name": "Áo Sơ Mi Nam Kẻ Aristino Business Perfect fit 1SS013AS3",
      "description": "Tên sản phẩm: Áo Sơ Mi Nam Kẻ Aristino Business Perfect fit 1SS013AS3\nMã rút gọn: 1SS013AS3\nKiểu dáng: Dáng mặc buông, vạt bằng/ Perfect Fit\nThiết kế:\nÁo sơ mi cổ bẻ cổ điển, chỉn chu cho người mặc cho công việc, thường ngày. \nĐiểm nhấn có thuê chữ ký Aristino tinh tế ở phần cánh tay.\nHọa tiết Caro với các tông màu chủ đạo là xanh navy, cam và trắng – tạo sự tương phản bắt mắt, thích hợp cho mùa hè hoặc các hoạt động ngoài trời.\nKhuy áo: Thiết kế khuy cài dọc phía trước cùng màu tạo sự đồng nhất.\nChất liệu:\n100% Cotton(bông)\nPhối với:\nÁo sơ mi ngắn tay này dễ dàng phối với quần âu, quần jeans, hoặc áo khoác casual.\nPhù hợp với nhiều dịp khác nhau như đi làm, tham dự sự kiện, hoặc đi chơi.\nMàu sắc: Đen kẻ cam\nSize: 38/39/40/41/42/43\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để giữ chất lượng vải.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì màu sắc và độ bền của áo.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino Business",
      "base_price": 1495000,
      "sale_price": null,
      "category_id": 1,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_7317bbbb784d41a5b84d2fcc46d1e8e5.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_381900435aab4a27acf45d5dadebd84a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_fe380fbfab7c4afa9e618965a1abb763.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_90fa02a592804585a46be4dfde9d53eb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f03fc08f344c42e68f2d9e47697ab202.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "ao-so-mi-nam-ke-aristino-business-perfect-fit-1ss013as3",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:19.047Z",
      "updated_at": "2025-12-26T04:02:19.047Z"
    },
    {
      "id": 170,
      "name": "Bộ Suits Nam Xám Kẻ Aristino Business Premio 1SU0050S0",
      "description": "Tên sản phẩm: Bộ Suits Nam Xám Kẻ Aristino Business Premio 1SU0050S0\nMã sản phẩm: 1SU0050S0\nKiểu dáng: Premio\nThiết kế: \nÁo vest:\nMàu sắc: Xám chì đậm với họa tiết kẻ caro chìm rất tinh tế.\nKiểu dáng: Cổ ve rộng cổ điển, form áo suông vừa vặn, tạo sự sang trọng và chuyên nghiệp.\nChi tiết: Hai nút cài phía trước, hai túi nắp ở hai bên và một túi ngực bên trái. Lớp lót trong có họa tiết hình móc cách điệu, tạo điểm nhấn sang trọng bên trong.\nQuần tây:\nMàu sắc & họa tiết: Đồng bộ với áo vest, cùng họa tiết caro chìm trên nền xám đậm.\nKiểu dáng: Dáng quần suông, ống đứng, tôn dáng thanh lịch.\nChi tiết: Cạp quần có đai lưng với khuy cài và khóa kéo, túi xẻ hai bên và túi sau có nút cài.\nChất liệu: \n70% Wool len cao cấp, được dệt hoàn toàn từ lông cừu tự nhiên.\n30% Polyester tạo độ sắc nét, bền màu và đứng dáng.\nMàu sắc: Xám 108 Kẻ jacquard\nSize: S, M, L, XL\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi: \n\nKhuyến nghị giặt khô để bảo đảm chất lượng và độ bền của len và polyester. \nTránh ánh nắng trực tiếp, lưu trữ ở nơi khô ráo, thoáng mát để tránh mất dáng và đổi màu. \nSử dụng bàn ủi hơi nước ở nhiệt độ thấp, hoặc đặt một lớp vải giữa bàn ủi và áo khi là. Không nên giặt máy để tránh làm hỏng chất liệu len.\n\nLưu ý: \n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino Business",
      "base_price": 12500000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/thi_t_k__ch_a_c__t_n_-_2025-07-05t204015.525_61837fb5ae6e4c41ad2f899787f8dddd.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0981_87fc5a647c784b36bef99c7d6accc957.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0966_f55f01dd3bd547b39d3ea12fedaac5e5.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0960_c8b28ff3778b444d93d298a7a2ac4980.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0949_510f8c55de3b48d09645df60d31d716b.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0978_c8857e64d603402e8214f108d9b48b66.jpg",
        "https://cdn.hstatic.net/products/200000887901/img_0985_0cb367e34d2c4675b5f3adb2995fc90b.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d0a1d86ac4a54067b757f6e0e9f18c0f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_158b91fd36b04c68b99fd9a356504a36.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5ddfd1a45122479a8ae7d4ce83af9c6b.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "bo-suits-nam-xam-ke-aristino-business-premio-1su0050s0",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:28.452Z",
      "updated_at": "2025-12-26T04:02:28.452Z"
    },
    {
      "id": 171,
      "name": "Cặp Tài Liệu Da Bò Aristino ABC0110Z",
      "description": "Tên sản phẩm: Cặp Tài Liệu Nam Aristino ABC0110Z\nKiểu dáng: Cặp tài liệu\nThiết kế:\nĐược thiết kế với một ngăn lớn ở giữa có miệng khóa, bên trong là các ngăn nhỏ có thể đựng các đồ dùng cá nhân tiện lợi.\nChất liệu:\nChất liệu Da bò nhập khẩu Ý, mềm mại khi sử dụng. Da được xử lý tỉ mỉ, không xảy ra hiện tượng nổ da. Bề mặt da có độ bóng tự nhiên, bền chắc và mềm mại hơn sau thời gian dài sử dụng.\nMàu sắc: Navy\nKích thước: 390x290x85 mm\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản đồ da:\n\nTránh ánh nắng trực tiếp: Để sản phẩm ở nơi thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng để không làm khô và mất màu da.\nLàm sạch thường xuyên: Lau sản phẩm bằng khăn mềm sau mỗi lần sử dụng. Nếu có vết bẩn, dùng dung dịch làm sạch nhẹ nhàng để làm sạch.\nDưỡng da định kỳ: Sử dụng kem dưỡng hoặc dầu dưỡng da để duy trì độ mềm mại và bóng mượt, tránh khô nứt.\nBảo quản đúng cách: Khi không sử dụng, cất sản phẩm trong túi vải thoáng khí để giữ độ thông thoáng và bảo vệ da.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh do ánh sáng khi chụp hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 11150000,
      "sale_price": null,
      "category_id": 21,
      "images": [
        "https://product.hstatic.net/200000887901/product/cap-tai-lieu-nam-aristino-abc0110z__2__b4e8e156539b4a8290213415723b96dc.jpg",
        "https://product.hstatic.net/200000887901/product/cap-tai-lieu-nam-aristino-abc0110z__3__6a956f71f0c24779ac04d67229d3f240.jpg",
        "https://product.hstatic.net/200000887901/product/cap-tai-lieu-nam-aristino-abc0110z__4__a56e6b5235d848419ec4eed334d9cfdc.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e90831fa2c0a4863925c301574fb090c.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_17300f64763744c4bb2e30f3add56d26.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "cap-tai-lieu-da-bo-aristino-abc0110z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:36.248Z",
      "updated_at": "2025-12-26T04:02:36.248Z"
    },
    {
      "id": 172,
      "name": "Cặp Tài Liệu Da Nam Aristino ABC0250Z2",
      "description": "Tên sản phẩm: Cặp Tài Liệu Da Nam Aristino ABC0250Z2\nMã sản phầm: ABC0250Z2\nKiểu dáng: Cặp tài liệu\nThiết kế:\nLấy cảm hứng từ nghệ thuật đan tre thủ công. Từ nghệ thuật đến họa tiết kẻ biểu tượng của Aristino.\nĐương đại hóa với các họa tiết đan xen mang đầy tính biểu tượng văn hóa và tính hình học mang sự thẩm mỹ cao.\nChất liệu:\nKết hợp linh hoạt giữa canvas in họa tiết và da trơn tạo sự tương phản về hiệu ứng vật liệu và họa tiết .\nMàu sắc: Đen trắng\nKích thước: 390x290x85 mm\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản đồ da:\n\nTránh ánh nắng trực tiếp: Để sản phẩm ở nơi thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng để không làm khô và mất màu da.\nLàm sạch thường xuyên: Lau sản phẩm bằng khăn mềm sau mỗi lần sử dụng. Nếu có vết bẩn, dùng dung dịch làm sạch nhẹ nhàng để làm sạch.\nDưỡng da định kỳ: Sử dụng kem dưỡng hoặc dầu dưỡng da để duy trì độ mềm mại và bóng mượt, tránh khô nứt.\nBảo quản đúng cách: Khi không sử dụng, cất sản phẩm trong túi vải thoáng khí để giữ độ thông thoáng và bảo vệ da.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh do ánh sáng khi chụp hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 11250000,
      "sale_price": null,
      "category_id": 21,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_5ae513759ada4355a9b69ee6600add7e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "cap-tai-lieu-da-nam-aristino-abc0250z2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:44.507Z",
      "updated_at": "2025-12-26T04:02:44.507Z"
    },
    {
      "id": 173,
      "name": "Mặt Dây Lưng Nam Aristino ABK0300Z",
      "description": "Tên sản phẩm: Mặt Dây Lưng Nam Aristino ABK0300Z\nKiểu dáng: Mặt dây lưng\nThiết kế:\nMặt dây thắt lưng với màu bạc-đen tinh tế, tạo nên sự sang trọng cho quý ông khi sử dụng.\nDễ dàng kết hợp với các loại dây lưng khác nhau.\nChất liệu:\nChất liệu: Thép không gỉ, hạn chế tối đa sự trầy xước, bền đẹp sau thời gian sử dụng lâu dài.\nMàu sắc: Bạc\nKích thước: 44mm\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản:\n\nNhỏ một vài giọt dung dịch lên khăn mềm, chà đều nhẹ nhàng mặt thắt lưng tới khi không còn thấy được vết xước.\nSử dụng khăn ẩm để lau sạch lại mặt thắt lưng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://product.hstatic.net/200000887901/product/mat-day-lung-nam-aristino-abk0300z_f33e3f1042584faf93d8ae9efae8fe6b.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "mat-day-lung-nam-aristino-abk0300z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:51.179Z",
      "updated_at": "2025-12-26T04:02:51.179Z"
    },
    {
      "id": 174,
      "name": "Mặt Dây Lưng Nam Aristino ABK0310Z",
      "description": "Tên sản phẩm: Mặt Dây Lưng Nam Aristino ABK0310Z\nKiểu dáng: Mặt dây lưng\nThiết kế:\nMặt dây thắt lưng với màu bạc tinh tế, tạo nên sự sang trọng cho quý ông khi sử dụng.\nDễ dàng kết hợp với các loại dây lưng khác nhau.\nChất liệu:\nThép không gỉ, hạn chế tối đa sự trầy xước, bền đẹp sau thời gian sử dụng lâu dài.\nMàu sắc: Bạc\nKích thước: 62x40x19mm\nSản xuất: Trung Quốc\n\nHướng dẫn bảo quản:\n\nNhỏ một vài giọt dung dịch lên khăn mềm, chà đều nhẹ nhàng mặt thắt lưng tới khi không còn thấy được vết xước.\nSử dụng khăn ẩm để lau sạch lại mặt thắt lưng.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp hoặc màn hình hiển thị của thiết bị khách hàng.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://product.hstatic.net/200000887901/product/mat-day-lung-nam-aristino-abk0310z_0203cdc9c2c64a56b051cd92310fd387.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "mat-day-lung-nam-aristino-abk0310z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:02:57.465Z",
      "updated_at": "2025-12-26T04:02:57.465Z"
    },
    {
      "id": 175,
      "name": "Quần Âu Nam Aristino Golf ATRG120Z",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Golf ATRG120Z\nKiểu dáng: Dáng thể thao/ Golf Fit\nThiết kế:\nQuần âu phom Golf Fit đặc biệt, có phần ống suông rộng thoải mái đồng thời vẫn đảm bảo sự vừa vặn như may đo.\nThiết kế thể thao khỏe khoắn, màu sắc nam tính với công nghệ diệt tiên tiến mang đến khả năng thấm hút tốt, dễ chịu cho cả ngày hoạt động.\nChất liệu: \n71% Nylon cho bề mặt vải độ mịn mượt, mỏng nhẹ.\n25% Polyester giúp áo bền màu, sắc nét và độ trơn trượt, mỏng nhẹ.\n4% spandex tạo độ co giãn cho áo\nMàu sắc: Be 66, Xám 37, Trắng 4\nSize: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ chất lượng vải và màu sắc.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino Golf",
      "base_price": 1850000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/img_3516.1_daad562e8ac94e70b5d2141a26296612.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6a521c9ee24f451b85d47bf97d72ea8a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_55d4b01ea6c14e9793bf97d51eacd417.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ba42c8365eec4de1bb83c1600079d9c0.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_fbc637bead4644b2aabecea3500a7cf1.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-golf-atrg120z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:10.130Z",
      "updated_at": "2025-12-26T04:03:10.130Z"
    },
    {
      "id": 176,
      "name": "Quần Âu Nam Aristino Slim fit ATR0050S1",
      "description": "Tên sản phẩm: Quần Âu Nam Aristino Slim fit ATR0050S1\nMã sản phẩm: ATR0050S1\nForm Dáng: Slim fit/ Dáng ôm\nThiết kế:\nQuần âu phom dáng Slim fit ôm vừa vặn hình thể người mặc, nhằm tôn lên dáng vẻ nam tính. \nQuần được thiết kế cơ bản với túi chéo 2 bên, màu sắc trung tính đem đến diện mạo tự tin và trẻ trung cho người mặc.\nChất liệu:\n68% Polyester: Bền màu, chống nhăn, giữ phom tốt, nhanh khô và ít thấm nước.\n29% Rayon: Mềm mại, thoáng mát, thấm hút tốt, tạo độ rũ nhẹ và cảm giác dễ chịu khi mặc.\n3% Spandex: Co giãn nhẹ, tăng độ đàn hồi, giúp trang phục linh hoạt và ôm vừa vặn.\nPhối với:\nDễ dàng kết hợp với áo T-shirt, áo Polo, sơ mi...\nPhù hợp cho các dịp đi chơi, dạo phố hoặc các hoạt động ngoài trời.\nMàu sắc: Đen 28\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh sử dụng chất tẩy mạnh, không ngâm quá lâu.\nPhơi ở nơi thoáng mát, tránh ánh nắng trực tiếp để duy trì chất lượng vải.\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho sản phẩm luôn phẳng đẹp.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc sản phẩm thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và thiết bị hiển thị.",
      "brand": "Aristino",
      "base_price": 1150000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/ntc_8534_e1a92bcab7e34d60bab0573a785c4d3b.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8537_6cf0ac222ab54390816d77722045af8b.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8542_a23e867c942f4a7d98a938e93c83005a.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8518_50f07b7306ca4a178bbc57f2606ab7f7.jpg",
        "https://product.hstatic.net/200000887901/product/img_2367.1_2b85d8992b5f4c96840f0b9aef798929.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7c7412a7b35a4fea936d9bf833132956.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_339d279604744003894e885389cedb8a.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5f4c05a59db04797b4c23d8001a8e4d4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_6dafbb02816343e0a1d7db2b4a91dfeb.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0050s1",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:18.429Z",
      "updated_at": "2025-12-26T04:03:18.429Z"
    },
    {
      "id": 177,
      "name": "Quần âu Nam Aristino Slim fit ATR0420Z",
      "description": "Tên sản phẩm: Quần âu Nam Aristino Slim fit ATR0420Z\nMã rút gọn: ATR0420Z\nKiểu dáng: Dáng ôm vừa, ngắn (Cropped)\nThiết kế:\nQuần âu phom dáng Cropped với độ suông vừa phải, tôn dáng và mang lại sự thoải mái cho người mặc.\nMàu sắc trung tính, dễ dàng phối hợp với nhiều trang phục khác nhau, cùng đường nét cắt may tinh tế, mang lại diện mạo lịch lãm và nổi bật cho các quý ông.\nChất liệu: 67% Polyester, 29% Viscose, 4% Spandex\n67% Polyester: Giúp quần bền màu, sắc nét, mịn màng và mỏng nhẹ.\n29% Viscose: Mang lại độ mềm mại, mịn mượt, giúp quần nhẹ nhàng, thoáng mát tối đa khi mặc.\n4% Spandex: Tạo độ co giãn nhẹ, linh hoạt và thoải mái khi vận động.\nMàu sắc: Be 46, Trắng 6\nSize: 29, 30, 31, 32, 33, 34, 35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản và giặt ủi:\n\nGiặt ở nhiệt độ không quá 30°C.\nKhông sử dụng chất tẩy mạnh.\nLà/ủi ở nhiệt độ thấp để tránh nhăn và phai màu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc do ánh sáng khi chụp ảnh hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 950000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__3__c61db8c6fc7143f6a9c33dadcc8ca427_99a7e4fe67704ab49a85eef8f96e067c.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__4__a7d1fa2efddd4045b625518de98531e2_e7048cb8149e4da588c36c950d5e150d.jpg",
        "https://product.hstatic.net/200000887901/product/61db8c6fc7143f6a9c33dadcc8ca427_large_e6d03b62fe8e46998f20ad5f86e09187_72d51c424d4340248f16444420b5b18e.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__2__e244d5a532cf4d5581be37238e5cac43_8a42fac40c14401aa5ce5ec87014acf1.jpg",
        "https://product.hstatic.net/200000887901/product/-be-quan-au-nam-aristino-atr0420z__5__3822a020db854d6596e1d56117d8febd_afb295174d7041d0b8e5c4de28146399.jpg",
        "https://product.hstatic.net/200000887901/product/img_7350.1x900x900x4_d6afd2d6e5034e2093ada818f5fb83d1_0cc1f122a30f4e81939f5eb0df612dac.jpg",
        "https://product.hstatic.net/200000887901/product/img_7350x900x900x4_d502b570f8cd488c85c2c21d35105917_7cf939f0cd754a93bd8bfb25f1af246f.jpg",
        "https://product.hstatic.net/200000887901/product/img_7351x900x900x4_a06df9b70ea0407cb841fc4880fb837c_410fc6ddcf38438f9a161f45b31ea187.jpg",
        "https://product.hstatic.net/200000887901/product/img_7353x900x900x4_6604926ee7a34e859536d200a678a15d_fa8d854b0f2b4699b35c1116169a8b1e.jpg",
        "https://product.hstatic.net/200000887901/product/img_7352x900x900x4_377216e67461498880e43e7daca80f58_0eeb545a391d4ddb9140e4982f78661c.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-aristino-slim-fit-atr0420z",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:28.508Z",
      "updated_at": "2025-12-26T04:03:28.508Z"
    },
    {
      "id": 178,
      "name": "Quần Âu Nam Kẻ Đen Aristino Business 1TR0110S2",
      "description": "Tên sản phẩm: Quần Âu Nam Kẻ Đen Aristino Business 1TR0110S2\nMã sản phẩm: 1TR0110S2\nKiểu dáng: Dáng vừa/ Regular Fit\nThiết kế:\nQuần âu Aristino Business phom Regular Fit suông nhẹ, phù hợp với mọi dáng người, đem lại vẻ ngoài tự tin và lịch lãm. \nMàu sắc thời thượng, dễ kết hợp trang phục khác, đường nét cắt may tinh tế, cùng chất liệu lông cừu cao cấp đem lại diện mạo lịch lãm và nổi bật cho các quý ông.\nChất liệu:\n70% Wool có khả năng chịu lực tốt, giúp quần âu duy trì được form dáng và độ bền cao.\nChất liệu len cao cấp cũng có khả năng thoáng khí tốt, giúp quý ông luôn cảm thấy thoải mái và dễ chịu, ngay cả khi mặc trong thời gian dài.\n30% Polyester có độ bền cao và khả năng chống mài mòn tốt, giúp quần âu bền bỉ và ít bị hư hỏng do tác động từ bên ngoài. Bên cạnh đó, Polyester chống nhăn tốt, giúp quần âu luôn phẳng phiu và dễ bảo quản.\nPhối với:\nDễ kết hợp với áo sơ mi, áo thun, polo hoặc blazer để tạo phong cách lịch sự cho các dịp công sở, hội họp hoặc đi chơi.\nMàu sắc: Đen 1 kẻ\nKích thước: 29/30/31/32/33/34/35\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản:\n\nGiặt tay hoặc giặt máy ở chế độ nhẹ với nước lạnh.\nTránh dùng chất tẩy mạnh, không ngâm quá lâu.\nPhơi nơi thoáng mát, tránh ánh nắng trực tiếp để giữ màu và chất lượng vải.\n\nHướng dẫn giặt ủi:\n\nỦi ở nhiệt độ thấp để tránh làm hỏng chất liệu và giữ cho quần luôn trong trạng thái tốt nhất.\n\nLưu ý:\n\nHình ảnh chỉ mang tính chất minh họa, màu sắc thực tế có thể thay đổi tùy thuộc vào điều kiện ánh sáng và màn hình hiển thị.",
      "brand": "Aristino Business",
      "base_price": 2800000,
      "sale_price": null,
      "category_id": 6,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/ntc_8471_d81d2e9a5e2f48c690c9d1395f738928.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8465_2ea719190f294602aa752bae894f2657.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8450_ea5063a62b044516b2007a2835b39e8f.jpg",
        "https://cdn.hstatic.net/products/200000887901/ntc_8476_87e06c8f7fa3451caf4b890523dbe5b3.jpg",
        "https://product.hstatic.net/200000887901/product/img_3928.1_3a7c5f40b89448cf8caa6c81e8f3b810.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_40637104e5e14192813f4b45e414875f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_7f979233dbfc4ddfb36dbedea719749f.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_a8e5d592797a4cd48a653ae33b19b6ec.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_93d1ae3a99d2454597f40d3a3839781e.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "quan-au-nam-ke-den-aristino-business-1tr0110s2",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:39.699Z",
      "updated_at": "2025-12-26T04:03:39.699Z"
    },
    {
      "id": 179,
      "name": "Túi Cầm Tay Nam Aristino ACL0240Z4",
      "description": "Tên sản phẩm: Túi Cầm Tay Nam Aristino ACL0240Z4\nMã sản phẩm: ACL0240Z4\nKiểu dáng: Túi Cầm Tay\nThiết kế: \nLấy cảm hứng từ nghệ thuật đan tre thủ công. \nTừ nghệ thuật đến họa tiết kẻ biểu tượng của Aristino. \nĐương đại hóa với các họa tiết đan xen mang đầy tính biểu tượng văn hóa và tính hình học mang sự thẩm mỹ cao.\nChất liệu: \nKết hợp linh hoạt giữa canvas in họa tiết và da trơn tạo sự tương phản về hiệu ứng vật liệu và họa tiết .\nMàu sắc: Vàng tre ngà\nSize: 270x210x45mm\nSản xuất: Việt Nam\nHướng dẫn bảo quản đồ da:\nTránh ánh nắng trực tiếp: Để sản phẩm ở nơi thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng để không làm khô và mất màu da.\nLàm sạch thường xuyên: Lau sản phẩm bằng khăn mềm sau mỗi lần sử dụng. Nếu có vết bẩn, dùng dung dịch làm sạch nhẹ nhàng để làm sạch.\nDưỡng da định kỳ: Sử dụng kem dưỡng hoặc dầu dưỡng da để duy trì độ mềm mại và bóng mượt, tránh khô nứt.\nBảo quản đúng cách: Khi không sử dụng, cất sản phẩm trong túi vải thoáng khí để giữ độ thông thoáng và bảo vệ da.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh minh họa do ánh sáng khi chụp ảnh hoặc do màn hình hiển thị trên thiết bị của khách hàng.",
      "brand": "Aristino",
      "base_price": 4200000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_9cf6e536c08146b681d456a897e6a198.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_3098f6cc66a6414a94643da0b9d1ec73.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_04e5eb7191234ec6af1429f879ef6c30.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e7f302ba9dc94ec0a95177a5c90b86a9.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_76e552b92896435cb5c4b9d2e1096647.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_0cb8807733fc414fa14ee4adacd80ce5.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "tui-cam-tay-nam-aristino-acl0240z4",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:50.052Z",
      "updated_at": "2025-12-26T04:03:50.052Z"
    },
    {
      "id": 180,
      "name": "Túi Du Lịch Nam Aristino AVB0240Z4",
      "description": "Tên sản phẩm: Túi Du Lịch Nam Da bò Aristino AVB0240Z4\nMã rút gọn: AVB0240Z4\nKiểu dáng: Túi Du Lịch\nThiết kế:\nTúi da du lịch đa năng với kích thước nhỏ gọn, đi kèm quai xách tay và dây đeo vai chắc chắn, phù hợp cho những chuyến đi ngắn ngày. \nTúi có một ngăn lớn kéo khóa và nhiều ngăn nhỏ tiện ích, đủ để chứa quần áo, hóa mỹ phẩm, và các vật dụng cá nhân cần thiết\nChất liệu:\nDa bò. Kết hợp linh hoạt giữa da dập vân họa tiết đan lát và da hạt tạo sự tương phản về hiệu ứng vật liệu.\nMàu sắc: Vàng đan lát\nKích thước: 50x310x260 mm\nSản xuất: Việt Nam\nHướng dẫn bảo quản đồ da:\nTránh ánh nắng trực tiếp: Để sản phẩm ở nơi thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng để không làm khô và mất màu da.\nLàm sạch thường xuyên: Lau sản phẩm bằng khăn mềm sau mỗi lần sử dụng. Nếu có vết bẩn, dùng dung dịch làm sạch nhẹ nhàng để làm sạch.\nDưỡng da định kỳ: Sử dụng kem dưỡng hoặc dầu dưỡng da để duy trì độ mềm mại và bóng mượt, tránh khô nứt.\nBảo quản đúng cách: Khi không sử dụng, cất sản phẩm trong túi vải thoáng khí để giữ độ thông thoáng và bảo vệ da.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh do ánh sáng khi chụp hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 16250000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_cf4ac8716b214e529bcae18b1e818fb1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c320c8a234cc4c8bac22c4789eeb30b2.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_b8ef80d1bbb043eaa66dba1a02548708.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_1c91e61997bc4e899db4ac064ec1eae4.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e4b2df13deb840bb93556ffcadd613c1.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_ed6bd0077aaf420a9dec50af38c24903.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e526bcfd8d2846baa3c3fab51e077fcb.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_d84c9edc8ca2496e8b1dcec4fbbad042.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_e23fb4a3541d4c35bcd50911216a448b.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "tui-du-lich-nam-aristino-avb0240z4",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:03:57.860Z",
      "updated_at": "2025-12-26T04:03:57.860Z"
    },
    {
      "id": 181,
      "name": "Túi Tote Nam Aristino ATO0250Z4",
      "description": "Tên sản phẩm: Túi Tote Nam Aristino ATO0250Z4\nMã rút gọn: ATO0250Z4\nBộ sưu tập: Đan Lát\nKiểu dáng: Túi Tote\nThiết kế:\nLấy cảm hứng từ nghệ thuật đan tre thủ công. Từ nghệ thuật đến họa tiết kẻ biểu tượng của Aristino.\nĐương đại hóa với các họa tiết đan xen mang đầy tính biểu tượng văn hóa và tính hình học mang sự thẩm mỹ cao.\nChất liệu:\nKết hợp linh hoạt giữa canvas in họa tiết và da trơn tạo sự tương phản về hiệu ứng vật liệu và họa tiết.\nMàu sắc: Đen trắng\nKích thước: Đang cập nhật\nSản xuất: Việt Nam\n\nHướng dẫn bảo quản đồ da:\n\nTránh ánh nắng trực tiếp: Để sản phẩm ở nơi thoáng mát, tránh tiếp xúc trực tiếp với ánh nắng để không làm khô và mất màu da.\nLàm sạch thường xuyên: Lau sản phẩm bằng khăn mềm sau mỗi lần sử dụng. Nếu có vết bẩn, dùng dung dịch làm sạch nhẹ nhàng để làm sạch.\nDưỡng da định kỳ: Sử dụng kem dưỡng hoặc dầu dưỡng da để duy trì độ mềm mại và bóng mượt, tránh khô nứt.\nBảo quản đúng cách: Khi không sử dụng, cất sản phẩm trong túi vải thoáng khí để giữ độ thông thoáng và bảo vệ da.\n\nLưu ý: Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể khác về màu sắc so với hình ảnh do ánh sáng khi chụp hoặc màn hình hiển thị.",
      "brand": "Aristino",
      "base_price": 9195000,
      "sale_price": null,
      "category_id": 22,
      "images": [
        "https://cdn.hstatic.net/products/200000887901/upload_02ff588e081d4fab9e4d668cd9f70318.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_5f29377e0a164331abcd1636a62419b6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_813a090dfdf544feb9defdec5a9cc3f7.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_c1026f452a3c4879be98e89c1a60780e.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_020980865e174ae09955e082fd7d3bf6.jpg",
        "https://cdn.hstatic.net/products/200000887901/upload_f1d6369ddc574ee4b35607d957d8978d.jpg"
      ],
      "status": "active",
      "collection": null,
      "slug": "tui-tote-nam-aristino-ato0250z4",
      "is_new": true,
      "tags": [
        "NEW"
      ],
      "created_at": "2025-12-26T04:04:06.131Z",
      "updated_at": "2025-12-26T04:04:06.131Z"
    }
];

const toDate = (value) => (value ? new Date(value) : null);

async function main() {
  await sequelize.authenticate();

  const transaction = await sequelize.transaction();
  try {
    for (const item of PRODUCTS) {
      let existing = null;
      if (item.id) {
        existing = await Product.findByPk(item.id, { transaction });
      }
      if (!existing && item.slug) {
        existing = await Product.findOne({
          where: { slug: item.slug },
          transaction,
        });
      }
      if (existing) {
        continue;
      }

      await Product.create(
        {
          id: item.id,
          name: item.name,
          description: item.description,
          brand: item.brand,
          base_price: item.base_price,
          sale_price: item.sale_price,
          category_id: item.category_id,
          images: item.images || [],
          status: item.status || "active",
          slug: item.slug,
          is_new: item.is_new ?? false,
          tags: item.tags || [],
          created_at: toDate(item.created_at),
          updated_at: toDate(item.updated_at),
        },
        { transaction }
      );
    }

    await sequelize.query(
      "SELECT setval(pg_get_serial_sequence('products','id'), (SELECT MAX(id) FROM products));",
      { transaction }
    );

    await transaction.commit();
    console.log(`✅ Imported ${PRODUCTS.length} products.`);
  } catch (err) {
    await transaction.rollback();
    console.error("❌ Import products failed:", err);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();
