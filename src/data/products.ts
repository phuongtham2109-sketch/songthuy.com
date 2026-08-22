import { Product, CompanyInfo } from '../types';

import imgDrawCordRound from '../assets/images/drawcord_round_cords_1787388409087.jpg';
import imgFlatDrawstring from '../assets/images/flat_drawstring_woven_1787388423668.jpg';
import imgPolyesterRope from '../assets/images/polyester_rope_coils_1787388437314.jpg';
import imgWebbingTape from '../assets/images/webbing_tape_rolls_1787388450757.jpg';
import imgDaySeCottonMulti from '../assets/images/day_se_cotton_multi_1787390175783.jpg';
import imgElasticRound from '../assets/images/elastic_round_cords_1787388478964.jpg';
import imgZipperPullCords from '../assets/images/zipper_pull_cords_1787389375003.jpg';
import imgElasticBands from '../assets/images/elastic_bands_rolls_1787388506175.jpg';
import imgBindingElastic from '../assets/images/binding_elastic_real_1787389394001.jpg';
import imgSafetyRope from '../assets/images/window_cleaning_rope_1787389409873.jpg';
import imgDayBamDau from '../assets/images/day_bam_dau_aglets_1787390196271.jpg';

export const COMPANY_INFO: CompanyInfo = {
  name: 'CÔNG TY TNHH SXTM SONG THỦY',
  tagline: 'SẢN XUẤT & GIA CÔNG CHỈ MAY, DÂY DÙ, QUAI DÉP, DÂY TÚI XÁCH, DÂY THUN, DÂY BAND',
  description: 'Công ty TNHH SXTM Song Thủy chuyên dệt & gia công dây đai, dây thun, dây dù rope, dây luồn bấm đầu keo, kim loại, silicon và ABS. Đáp ứng nhanh chóng mọi số lượng, chất lượng ổn định, giá tận xưởng.',
  address: 'A44B, khu phố Bình Phước, phường Lái Thiêu, TP. Hồ Chí Minh',
  phone: '0967885532',
  phoneDisplay: '0967 885 532',
  email: 'songthuy.co@gmail.com',
  specialties: [
    'Chỉ may & dây dù cao cấp',
    'Dây quai dép, túi xách, ba lô',
    'Dây thun tròn, thun bản, dây band',
    'Dây draw cord, dây luồn dẹp',
    'Dây bấm đầu keo, kim loại, silicon, ABS',
    'Webbing tape đai dệt chịu lực',
    'Dây se cotton, macrame đa sắc',
    'Dây đu lau kính & sơn nước'
  ],
  tippingTypes: [
    'Bấm đầu keo trong suốt / in logo (Plastic Aglet)',
    'Bấm đầu kim loại đồng, niken, sơn tĩnh điện (Metal Aglet)',
    'Bọc đầu Silicon mềm êm tay (Silicone Dipped)',
    'Đầu nhựa đúc ABS định hình (ABS Plastic Aglet)'
  ]
};

export const CATEGORIES = [
  { id: 'all', label: 'Đa dạng sản phẩm' },
  { id: 'day-bam-dau', label: 'Dây bấm đầu (Tipped Cords)' },
  { id: 'draw-cord', label: 'Draw Cord (Dây luồn tròn)' },
  { id: 'day-luon-dep', label: 'Dây luồn dẹp' },
  { id: 'day-rope-du', label: 'Dây Rope - Dây dù' },
  { id: 'webbing-tape', label: 'Webbing Tape (Đai dệt)' },
  { id: 'macrame-cotton', label: 'Dây se cotton (Macrame & Dây se)' },
  { id: 'elastic-tron', label: 'Elastic (Thun tròn)' },
  { id: 'day-khoa-keo', label: 'Dây khóa kéo (Zipper Pull)' },
  { id: 'thun-ban', label: 'Thun bản (Elastic Band)' },
  { id: 'day-vien-thun', label: 'Dây viền thun (FOE)' },
  { id: 'day-du-lau-kinh', label: 'Dây đu lau kính & sơn nước' },
] as const;

export const TIPPING_TECHNIQUES = [
  {
    id: 'keo',
    name: 'Bấm đầu keo',
    desc: 'Đầu keo nhiệt trong suốt hoặc in chữ nổi, bền chặt, không bung sợi.',
    icon: '✨'
  },
  {
    id: 'kim-loai',
    name: 'Bấm đầu kim loại',
    desc: 'Đầu bấm đồng mạ vàng, niken bạc, gunmetal, sơn tĩnh điện, khắc laser logo theo yêu cầu.',
    icon: '🛡️'
  },
  {
    id: 'silicon',
    name: 'Bọc đầu Silicon',
    desc: 'Đầu nhúng silicon dẻo, êm tay, thẩm mỹ cao cấp cho áo hoodie và đồ thể thao.',
    icon: '💧'
  },
  {
    id: 'abs',
    name: 'Đầu nhựa ABS',
    desc: 'Đúc khuôn khóa nhựa ABS nhiều màu sắc, chịu va đập cơ học tốt.',
    icon: '🧩'
  }
];

export const PRODUCTS: Product[] = [
  // 1. DÂY BẤM ĐẦU (LOẠI MỚI THÊM)
  {
    id: 'day-bam-dau',
    sku: 'ST-TB-01',
    name: 'Dây Bấm Đầu (Đầu Kim Loại, Đầu Keo, Silicon, ABS)',
    englishName: 'Custom Tipped Drawcords & Aglet Cords',
    category: 'day-bam-dau',
    categoryLabel: 'DÂY BẤM ĐẦU',
    tag: 'GIA CÔNG THEO RẬP',
    tagColor: 'orange',
    description: 'Dây luồn bện tròn hoặc dẹp được gia công bấm đầu kim loại sáng bóng (vàng, bạc, gunmetal), bọc keo nhiệt trong suốt hoặc nhúng silicon sang trọng cho áo hoodie, áo khoác, quần jogger và phụ kiện.',
    fullDescription: 'Dây bấm đầu Song Thủy được sản xuất từ sợi Polyester DTY, Cotton hoặc PE cao cấp, kết hợp công nghệ dập ép bấm đầu cơ khí chính xác cao. Khách hàng có thể lựa chọn đa dạng đầu bấm: đầu kim loại khắc logo thương hiệu, đầu keo nhiệt dẻo trong suốt, đầu bọc silicon chống trơn trượt hoặc đầu nhựa ABS dập nổi. Thành phẩm cắt theo chiều dài rập chính xác tuyệt đối.',
    image: imgDayBamDau,
    material: 'Sợi bện Polyester DTY, Cotton tự nhiên, PE, PP kết hợp đầu bấm Kim loại (Đồng/Niken/Gunmetal) / Keo nhiệt / Silicon / Nhựa ABS...',
    width: 'Kích thước theo yêu cầu (Đường kính 2mm - 12mm, chiều dài cắt 50cm - 160cm)',
    moq: '3.000 mét / pcs',
    leadTime: '10 - 15 ngày',
    tippingOptions: ['Bấm đầu kim loại mạ vàng/bạc/đen', 'Bấm đầu keo nhiệt trong suốt', 'Bọc đầu silicon mềm', 'Đầu nhựa đúc ABS in logo'],
    customColorAvailable: true,
    colorOptions: [
      'Nhuộm màu dây theo mã Pantone (Đỏ, vàng, cam, đen, kem, navy...)',
      'Đầu bấm kim loại: Bạc bóng, Vàng gold, Gunmetal khói, Đen nhám matte',
      'In logo thương hiệu lên đầu keo hoặc khắc laser lên đầu kim loại'
    ],
    applications: [
      'Dây nón áo Hoodie cao cấp, áo khoác Windbreaker thể thao',
      'Dây rút lưng quần Jogger, quần nỉ, quần short thể thao',
      'Dây buộc giày sneaker thời trang bấm đầu kim loại sang trọng',
      'Dây rút túi xách, balo mini xuất khẩu'
    ],
    keyFeatures: [
      'Đầu bấm chắc chắn, không bị tuột bung khi giặt máy nhiều lần',
      'Đa dạng chất liệu đầu bấm: Kim loại, Keo nhiệt, Silicon, Nhựa ABS',
      'Cắt độ dài và bấm đầu chuẩn xác theo từng rập mẫu',
      'Gia công số lượng lớn với tiến độ nhanh 10 - 15 ngày'
    ],
    specsTable: [
      { name: 'Chất liệu thân dây', value: 'Polyester DTY, Cotton tự nhiên, PE, PP bện tròn / dẹp' },
      { name: 'Chất liệu đầu bấm', value: 'Kim loại (Đồng, Niken, Gunmetal), Keo nhiệt, Silicon, Nhựa ABS' },
      { name: 'Kích thước', value: 'Kích thước theo yêu cầu (Đường kính 2mm - 12mm, Cắt dài 50cm - 160cm)' },
      { name: 'Khắc / In logo', value: 'Nhận in logo lên đầu keo hoặc khắc laser lên đầu kim loại' },
      { name: 'MOQ', value: '3.000 mét / pcs' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 2. DRAW CORD - Dây luồn tròn
  {
    id: 'draw-cord-tron',
    sku: 'ST-DC-02',
    name: 'Draw Cord - Dây Luồn Tròn',
    englishName: 'Round Drawcord',
    category: 'draw-cord',
    categoryLabel: 'DÂY LUỒN TRÒN',
    tag: 'BÁN CHẠY',
    tagColor: 'orange',
    description: 'Dây tròn bện chặt êm tay dùng cho áo hoodie, quần thể thao, ba lô. Tùy chọn bấm đầu keo, kim loại, silicon hoặc ABS.',
    fullDescription: 'Dây drawcord tròn Song Thủy dệt từ sợi Polyester/Cotton bền chắc, không bai dão khi giặt. Gia công bấm đầu theo yêu cầu: đầu keo trong suốt, đầu kim loại dập logo, đầu silicon cao cấp hoặc đầu nhựa ABS.',
    image: imgDrawCordRound,
    material: 'Polyester DTY, PE, Cotton, PP, FDY, Nylon...',
    width: '2mm - 10mm (Kích thước theo yêu cầu)',
    moq: '3.000 mét / pcs',
    leadTime: '10 - 15 ngày',
    tippingOptions: ['Bấm đầu keo', 'Bấm đầu kim loại', 'Bọc đầu Silicon', 'Đầu nhựa ABS'],
    customColorAvailable: true,
    colorOptions: [
      'Nhuộm theo mã màu Pantone',
      'Phối màu sọc, hoa văn jacquard, phản quang',
      'Đầy đủ các tông màu cơ bản: Đen, Trắng, Kem, Navy, Xám, Đỏ...'
    ],
    applications: [
      'Dây nón áo Hoodie, áo khoác gió thể thao',
      'Dây rút lưng quần jogger, quần shorts, đồ bơi',
      'Dây rút miệng balo, túi vải canvas',
      'Dây buộc giày dép thời trang'
    ],
    keyFeatures: [
      'Dệt tròn đều, đanh chắc, không xẹp méo',
      'Bấm đầu keo / kim loại / silicon / ABS sắc nét',
      'Độ bền màu cấp 4-5, không lem khi giặt',
      'Cắt độ dài chính xác theo rập thiết kế'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Polyester DTY, PE, Cotton, PP, FDY, Nylon' },
      { name: 'Đường kính', value: '2mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm' },
      { name: 'Chiều dài', value: 'Cắt theo yêu cầu (90cm, 100cm, 120cm, 140cm...)' },
      { name: 'Bấm đầu', value: 'Đầu keo - Kim loại - Silicon - ABS' },
      { name: 'MOQ', value: '3.000 mét / pcs' },
      { name: 'Thời gian sản xuất', value: '10 - 15 ngày' }
    ]
  },

  // 3. DÂY LUỒN DẸP
  {
    id: 'day-luon-dep',
    sku: 'ST-FD-03',
    name: 'Dây Luồn Dẹp May Mặc & Túi Xách',
    englishName: 'Flat Drawstring / Flat Cord',
    category: 'day-luon-dep',
    categoryLabel: 'DÂY LUỒN DẸP',
    tag: 'ĐA DẠNG VÂN DỆT',
    tagColor: 'blue',
    description: 'Dây dẹp dệt vân xương cá, vân chéo hoặc dệt phẳng mịn cho quần thể thao, áo khoác, túi xách và giày dép.',
    fullDescription: 'Dây luồn dẹp Song Thủy dệt êm mịn, không xước da, đa dạng kiểu vân (xương cá herringbone, vân chéo twill, dệt trơn). Gia công bấm đầu kim loại, đầu keo nhiệt hoặc silicon thẩm mỹ cao.',
    image: imgFlatDrawstring,
    material: 'Polyester DTY, PE, Cotton, PP, FDY, Nylon...',
    width: '2mm - 10mm (Kích thước theo yêu cầu)',
    moq: '3.000 mét / pcs',
    leadTime: '10 - 15 ngày',
    tippingOptions: ['Bấm đầu keo', 'Bấm đầu kim loại', 'Bọc Silicon', 'Đầu bấm ABS'],
    customColorAvailable: true,
    colorOptions: [
      'Nhuộm màu theo bảng màu Pantone',
      'Dệt phối 2 màu, phối sọc phản quang viền',
      'In chuyển nhiệt / in lụa logo lên mặt dây'
    ],
    applications: [
      'Quần thể thao, quần nỉ, quần bơi',
      'Dây quai túi xách, balo mini, quai xách nhẹ',
      'Dây giày sneaker bản dẹt',
      'Dây viền trang trí cổ áo, gấu áo'
    ],
    keyFeatures: [
      'Đa dạng vân dệt: trơn, xương cá, chéo, dệt ống',
      'Bấm đầu sắc nét (keo / kim loại / silicon / ABS)',
      'Sợi chắc, không xơ xước, không bai dão mép',
      'Đạt chuẩn xuất khẩu may mặc'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Polyester DTY, PE, Cotton, PP, FDY, Nylon' },
      { name: 'Bản rộng', value: '2mm - 10mm' },
      { name: 'Chiều dài', value: 'Cắt đoạn theo rập hoặc đóng cuộn 100m - 500m' },
      { name: 'Bấm đầu', value: 'Đầu keo nhiệt, kim loại, silicon mềm, ABS' },
      { name: 'MOQ', value: '3.000 mét / pcs' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 4. DÂY ROPE - DÂY DÙ
  {
    id: 'day-rope-du',
    sku: 'ST-RP-04',
    name: 'Dây Rope - Dây Dù Đan Ghế Sofa & Sân Vườn',
    englishName: 'Rope & Paracord',
    category: 'day-rope-du',
    categoryLabel: 'DÂY ROPE - DÂY DÙ',
    tag: 'CHỐNG TIA UV',
    tagColor: 'emerald',
    description: 'Dây dù bện đặc chống tia UV cấp 4-5, chịu nắng mưa tốt, chuyên dùng đan ghế sofa, bàn ghế sân vườn resort và nội thất.',
    fullDescription: 'Dây rope dù cao cấp Song Thủy có sợi dệt bền màu, chống mục, chống ẩm mốc và chịu lực tốt. Tạo phom dáng sang trọng cho các dòng bàn ghế mây nhựa, ghế ngoài trời cao cấp.',
    image: imgPolyesterRope,
    material: 'Polyester DTY, PP, Polyester FDY...',
    width: '4mm - 5mm - 6mm... (Kích thước theo yêu cầu)',
    moq: 'Theo yêu cầu đơn hàng',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Màu nội thất: Xám ghi, Nâu cafe, Be sand, Xanh rêu, Đen than, Trắng ngà',
      'Nhuộm màu theo mã thiết kế kiến trúc'
    ],
    applications: [
      'Đan lưng và tay ghế sofa sân vườn, ghế bập bênh, ghế cafe ngoài trời',
      'Trang trí vách ngăn, trần nhà hàng, resort, homestay',
      'Dây thừng dù trang trí nghệ thuật',
      'Dây dù chịu lực chằng buộc gia dụng và công nghiệp'
    ],
    keyFeatures: [
      'Kháng tia UV cao, không phai màu ngoài trời',
      'Cấu trúc bện đặc ruột hoặc rỗng ruột theo yêu cầu',
      'Cảm giác chạm êm ái, bóng mịn, không kích ứng da',
      'Chống mài mòn và chịu lực kéo tốt'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Polyester DTY, PP, Polyester FDY' },
      { name: 'Đặc tính', value: 'Chống tia UV cấp 4-5 & Chống ẩm mốc' },
      { name: 'Đường kính', value: '4mm, 5mm, 6mm, 8mm, 10mm...' },
      { name: 'Đóng gói', value: 'Cuộn 100m, 200m, 500m hoặc theo kiện' },
      { name: 'MOQ', value: 'Linh hoạt theo đơn hàng' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 5. WEBBING TAPE - Dây đai dệt
  {
    id: 'webbing-tape',
    sku: 'ST-WB-05',
    name: 'Webbing Tape - Dây Đai Dệt Chịu Lực',
    englishName: 'Webbing Tape',
    category: 'webbing-tape',
    categoryLabel: 'WEBBING TAPE',
    tag: 'CHỊU LỰC CAO',
    tagColor: 'orange',
    description: 'Dây đai dệt chịu lực lớn bản từ 3mm đến 140mm cho ba lô, túi xách, quai dép sandal, đai an toàn và chằng hàng.',
    fullDescription: 'Webbing Tape Song Thủy dệt thoi chắc chắn, biên mép phẳng mịn, không tưa xơ khi cắt may nhiệt. Chịu lực kéo đứt từ 500kg đến 5.000kg, phù hợp cả thời trang và công nghiệp nặng.',
    image: imgWebbingTape,
    material: 'Polyester DTY, PP, FDY, Cotton, PE...',
    width: '3mm - 140mm (Kích thước theo yêu cầu)',
    moq: 'Theo yêu cầu',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Đầy đủ các tông màu công nghiệp & thời trang',
      'Dệt hoa văn jacquard logo công ty',
      'Dệt sọc thể thao, phối chỉ phản quang bảo hộ'
    ],
    applications: [
      'Quai ba lô, túi xách, vali du lịch, quai dép sandal',
      'Dây đai an toàn xe ô tô, đai bảo hộ lao động',
      'Dây võng dã ngoại, đai lều bạt',
      'Dây cẩu hàng (Sling), dây chằng hàng tăng đơ'
    ],
    keyFeatures: [
      'Chịu tải trọng kéo đứt cực cao (500kg - 5.000kg)',
      'Bản rộng linh hoạt từ 3mm đến 140mm',
      'Không xơ mép khi may hoặc cắt nhiệt',
      'Đạt chuẩn kiểm định lực kéo và độ mài mòn'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Polyester DTY, PP, FDY, Cotton, PE' },
      { name: 'Bản rộng', value: '3mm - 140mm (10, 20, 25, 38, 50mm...)' },
      { name: 'Độ dày', value: '0.8mm - 3.5mm tùy yêu cầu' },
      { name: 'Kiểu dệt', value: 'Dệt trơn, xương cá, dệt hoa văn Jacquard' },
      { name: 'MOQ', value: 'Linh hoạt theo đơn hàng' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 6. DÂY SE COTTON - MACRAME (CẬP NHẬT ẢNH GỢI Ý ĐA SẮC)
  {
    id: 'macrame-cotton',
    sku: 'ST-MC-06',
    name: 'Dây Se Cotton - Dây Sợi Bông Xoắn Đa Sắc (Macrame & Dây Se)',
    englishName: 'Colored Twisted Cotton Cord & Macrame Rope',
    category: 'macrame-cotton',
    categoryLabel: 'DÂY SE COTTON',
    tag: 'SỢI BÔNG ĐA SẮC',
    tagColor: 'purple',
    description: 'Dây se cotton xoắn 3 tao (3-ply) từ sợi bông tự nhiên mềm mịn với đầy đủ bảng màu rực rỡ (xanh dương, đỏ, hồng, tím, vàng, cam, rêu...); dùng đan móc macrame, quai túi, dây thừng thủ công mỹ nghệ.',
    fullDescription: 'Dây se sợi bông (Cotton Twisted Cord) Song Thủy được se từ sợi cotton tự nhiên cao cấp với cấu trúc xoắn 3 tao bền chắc, mềm mại, êm tay khi thắt nút đan móc. Bảng màu phong phú từ màu mộc tự nhiên đến các gam màu tươi sáng, nhuộm bền màu không phai, thích hợp làm đồ thủ công mỹ nghệ, quai túi xách, rèm trang trí.',
    image: imgDaySeCottonMulti,
    material: '100% Cotton tự nhiên, Cotton pha PE cao cấp...',
    width: 'Kích thước theo yêu cầu (2mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm... 15mm)',
    moq: 'Theo yêu cầu đơn hàng',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Đầy đủ bảng màu đa dạng: Xanh dương, Đỏ cờ, Xanh da trời, Hồng phấn, Đỏ đô (Burgundy), Xanh lá, Cam tươi, Vàng chanh, Tím huế...',
      'Màu trắng mộc tự nhiên (Natural Raw Cotton)',
      'Tone màu Vintage & Pastel theo rập thiết kế'
    ],
    applications: [
      'Đan thảm Macrame, rèm cửa nghệ thuật, kệ treo chậu cây trang trí',
      'Quai túi xách handmade, nón cói, ví cầm tay, phụ kiện thời trang',
      'Dây thừng buộc quà tặng sinh thái, bó hoa tươi',
      'Dây se buộc thực phẩm, giò chả an toàn vệ sinh'
    ],
    keyFeatures: [
      '100% sợi bông êm ái, màu sắc tươi sáng sắc nét',
      'Cấu trúc se xoắn 3 tao (3-ply) chắc chắn, dễ chải tua rua đẹp mắt',
      'Thân thiện tuyệt đối với môi trường, an toàn cho da tay',
      'Quy cách đóng cuộn hoặc ống trụ gọn gàng'
    ],
    specsTable: [
      { name: 'Chất liệu', value: '100% Cotton tự nhiên / Cotton pha PE' },
      { name: 'Cấu trúc xoắn', value: 'Se xoắn 3 tao (3-ply twisted), se 1 tao, bện đan' },
      { name: 'Đường kính', value: 'Kích thước theo yêu cầu (2mm - 15mm)' },
      { name: 'Bảng màu', value: 'Đa sắc: Xanh, Đỏ, Hồng, Tím, Vàng, Cam, Rêu, Mộc...' },
      { name: 'Đóng gói', value: 'Cuộn cuộn ống trụ: 100m, 200m, 500g, 1kg' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 7. ELASTIC - DÂY THUN TRÒN
  {
    id: 'elastic-tron',
    sku: 'ST-EL-07',
    name: 'Elastic - Dây Thun Tròn Co Giãn Cao Cấp',
    englishName: 'Round Elastic Cord',
    category: 'elastic-tron',
    categoryLabel: 'ELASTIC - THUN TRÒN',
    tag: 'CO GIÃN 200-250%',
    tagColor: 'blue',
    description: 'Dây thun tròn co giãn 200-250%, lõi su dẻo dai; dùng luồn dây giày lười, quai khẩu trang, viền áo, thẻ treo tag và phụ kiện.',
    fullDescription: 'Dây thun tròn Song Thủy sử dụng lõi su thiên nhiên bọc sợi PP/Polyester mịn màng. Độ co giãn phục hồi nhanh, không đứt gãy sợi cao su sau thời gian dài sử dụng.',
    image: imgElasticRound,
    material: 'PP, Polyester, lõi su Spandex...',
    width: 'Kích thước theo yêu cầu (2mm - 10mm)',
    moq: 'Theo yêu cầu',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Đen tuyền, Trắng sứ',
      'Màu sắc tươi sáng: Đỏ, Vàng, Cam, Xanh lam, Xanh chuối...',
      'Phối sọc phản quang'
    ],
    applications: [
      'Dây rút gấu áo khoác gió, áo jacket',
      'Dây giày lười co giãn thông minh',
      'Quai khẩu trang, dây thẻ treo tag áo',
      'Găng tay bảo hộ, bao bì quà tặng'
    ],
    keyFeatures: [
      'Lõi cao su co giãn 200-250% không bị nhão',
      'Vỏ bọc sợi dệt khít, mịn tay, bảo vệ lõi bền lâu',
      'Kháng nước, chịu nhiệt giặt sấy tốt',
      'Kích thước chuẩn từ 2mm đến 10mm'
    ],
    specsTable: [
      { name: 'Vỏ ngoài', value: 'Sợi PP, Polyester dệt bện' },
      { name: 'Lõi trong', value: 'Cao su thiên nhiên / Spandex đàn hồi cao' },
      { name: 'Đường kính', value: '2mm, 2.5mm, 3mm, 4mm, 5mm... 10mm' },
      { name: 'Độ co giãn', value: '200% - 250%' },
      { name: 'MOQ', value: 'Linh hoạt theo đơn hàng' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 8. DÂY KHÓA KÉO (ZIPPER PULL CORD)
  {
    id: 'day-khoa-keo',
    sku: 'ST-ZP-08',
    name: 'Dây Khóa Kéo - Dây Rút Đầu Kéo Thủ Công (Zipper Pull)',
    englishName: 'Zipper Pull Cord & Paracord Puller',
    category: 'day-khoa-keo',
    categoryLabel: 'DÂY KHÓA KÉO',
    tag: 'NHIỀU MẪU MÃ',
    tagColor: 'purple',
    description: 'Dây rút đầu khóa kéo paracord thắt nút thủ công nhiều màu sắc, tạo điểm nhấn thời trang và tiện lợi khi đóng mở ba lô, áo khoác, túi xách.',
    fullDescription: 'Dây kéo khóa (Zipper Pull Cord) Song Thủy được gia công thắt nút thủ công từ dây dù/paracord cao cấp với nhiều phối màu nổi bật (đen, đỏ, rêu, teal, tím, rằn ri camo). Dễ cầm nắm kéo mở, chống trơn trượt, nâng cao tính thẩm mỹ và nhận diện cho áo khoác ngoài trời và ba lô xuất khẩu.',
    image: imgZipperPullCords,
    material: 'Cotton, Polyester, PE, PP, Paracord...',
    width: 'Kích thước theo yêu cầu (Đường kính 2mm - 5mm, dài 5cm - 12cm)',
    moq: 'Theo yêu cầu',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Nhiều màu đơn sắc: Đen, Đỏ, Xám, Rêu, Xanh ngọc, Tím...',
      'Phối màu rằn ri camo, hoa văn bện xoắn 2 màu, phản quang',
      'Đính kèm tag nhựa/kim loại in dập logo thương hiệu'
    ],
    applications: [
      'Đầu kéo khóa áo khoác gió, áo jacket mùa đông, áo nỉ',
      'Dây kéo khóa ba lô học sinh, ba lô leo núi, túi xách du lịch',
      'Dây móc phụ kiện, dây đeo chìa khóa, túi EDC dã ngoại'
    ],
    keyFeatures: [
      'Thắt nút thủ công tinh xảo, chắc chắn, không bị tuột',
      'Thao tác cầm kéo cực êm, chống trơn trượt khi đeo găng tay',
      'Tùy chỉnh độ dài và phối màu theo rập thiết kế',
      'Chống mài mòn và chịu lực kéo lặp lại cao'
    ],
    specsTable: [
      { name: 'Chất liệu sợi', value: 'Dây dù bện Polyester, PP, Paracord cao cấp' },
      { name: 'Quy cách nút', value: 'Thắt nút loop thòng lọng, nút thắt stopper, bọc co nhiệt' },
      { name: 'Đường kính dây', value: '2mm, 3mm, 4mm, 5mm' },
      { name: 'Chiều dài vòng', value: '5cm, 6cm, 7cm, 8cm, 10cm, 12cm' },
      { name: 'MOQ', value: 'Linh hoạt theo yêu cầu' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 9. THUN BẢN - ELASTIC BAND
  {
    id: 'thun-ban',
    sku: 'ST-EB-09',
    name: 'Thun Bản - Elastic Band Lưng Quần & Sofa',
    englishName: 'Elastic Band',
    category: 'thun-ban',
    categoryLabel: 'THUN BẢN',
    tag: 'ĐÀN HỒI BỀN BỈ',
    tagColor: 'orange',
    description: 'Thun dệt kim & dệt thoi phẳng mịn, co giãn êm ái, chống bai dão; dùng may lưng quần boxer, váy đầm, đồ lót và đai trợ lực sofa.',
    fullDescription: 'Thun bản Song Thủy có độ co giãn 150-220%, đàn hồi hồi phục mạnh mẽ, viền mép không bị quăn cuộn (non-roll). Phù hợp cả may mặc thời trang lẫn kết cấu đai nệm sofa chịu lực.',
    image: imgElasticBands,
    material: 'Polyester rubber, su spandex...',
    width: 'Kích thước theo yêu cầu (10mm - 50mm+)',
    moq: 'Theo yêu cầu',
    leadTime: '10 - 15 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Thun bản Đen, Trắng tiêu chuẩn',
      'Nhuộm màu theo bảng màu may mặc',
      'Dệt chữ thương hiệu Jacquard nổi trên bề mặt thun'
    ],
    applications: [
      'Lưng quần boxer nam, quần lót nữ cao cấp, váy đầm',
      'Lưng quần thể thao, quần legging, quần pyjama',
      'Đai trợ lực nệm sofa, khung ghế nội thất',
      'Đai cố định đồ dùng trong vali, balo laptop'
    ],
    keyFeatures: [
      'Co giãn êm ái, không cấn rát da, không quăn mép',
      'Không bai dão khi giặt sấy nhiệt độ cao',
      'Nhận dệt chữ logo thương hiệu vi tính sắc nét',
      'Bản rộng đa dạng từ 10mm đến 50mm+'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Polyester Rubber, Sợi Spandex cao cấp' },
      { name: 'Bản rộng', value: '10mm, 15mm, 20mm, 25mm, 30mm, 40mm, 50mm...' },
      { name: 'Kiểu dệt', value: 'Dệt kim (Knitted), Dệt thoi (Woven), Dệt Jacquard' },
      { name: 'Độ co giãn', value: '150% - 220%' },
      { name: 'MOQ', value: 'Linh hoạt theo đơn hàng' },
      { name: 'Lead time', value: '10 - 15 ngày' }
    ]
  },

  // 10. DÂY VIỀN THUN - FOLD OVER ELASTIC
  {
    id: 'day-vien-thun',
    sku: 'ST-BE-10',
    name: 'Dây Viền Thun Gập Đôi (Fold Over Elastic - FOE)',
    englishName: 'Binding Elastic / FOE',
    category: 'day-vien-thun',
    categoryLabel: 'DÂY VIỀN THUN',
    tag: 'MỀM MẠI & RÃNH GIỮA',
    tagColor: 'emerald',
    description: 'Dây viền thun có rãnh giữa định hình gập đôi dễ may, bề mặt mềm mịn êm ái, chuyên dùng viền đồ lót, đồ bơi, viền cổ tay áo.',
    fullDescription: 'Dây viền thun (FOE) Song Thủy dệt từ sợi Nylon/Polyester bọc Spandex cao cấp, có đường rãnh chìm chính giữa giúp thợ may gập đôi viền mép vải cực kỳ nhanh và chuẩn. Bề mặt dây mềm mịn, không gây hằn đỏ da.',
    image: imgBindingElastic,
    material: 'Nylon bọc Spandex, Polyester bọc Spandex...',
    width: 'Kích thước theo yêu cầu (16mm, 20mm, 25mm...)',
    moq: 'Theo yêu cầu',
    leadTime: '15 - 20 ngày',
    customColorAvailable: true,
    colorOptions: [
      'Đầy đủ các tông màu pastel, màu da, nude, đen, trắng...',
      'Nhuộm màu theo mẫu vải chính của khách hàng'
    ],
    applications: [
      'Viền cổ, viền nách, viền cạp đồ lót nam nữ',
      'Viền mép đồ bơi, bikini chống clo và nước mặn',
      'Viền cổ tay, gấu áo khoác mỏng, áo chống nắng',
      'Băng đô cài tóc, dây buộc tóc scrunchie, viền đầm váy'
    ],
    keyFeatures: [
      'Có rãnh giữa định hình gập đôi chuẩn xác, tăng tốc độ may',
      'Chất liệu siêu mềm mịn, mát tay, không ngứa da',
      'Độ đàn hồi nhẹ nhàng, không siết hằn cơ thể',
      'Độ bền màu cao, bền đẹp khi giặt'
    ],
    specsTable: [
      { name: 'Chất liệu', value: 'Nylon bọc Spandex / Polyester Spandex' },
      { name: 'Bản rộng', value: '16mm, 20mm, 25mm (khi mở phẳng)' },
      { name: 'Đặc tính', value: 'Có rãnh định hình gập đôi chính giữa (FOE)' },
      { name: 'Đóng gói', value: 'Cuộn 50 mét / 100 mét' },
      { name: 'MOQ', value: 'Linh hoạt theo đơn hàng' },
      { name: 'Lead time', value: '15 - 20 ngày' }
    ]
  },

  // 11. DÂY ĐU LAU KÍNH - ĐU SƠN NƯỚC
  {
    id: 'day-du-lau-kinh',
    sku: 'ST-SW-11',
    name: 'Dây Đu Lau Kính & Sơn Nước Nhà Cao Tầng',
    englishName: 'High-Rise Window Cleaning & Safety Rope',
    category: 'day-du-lau-kinh',
    categoryLabel: 'DÂY ĐU LAU KÍNH',
    tag: 'TẢI ĐỨT ≥ 3.5 TẤN',
    tagColor: 'red',
    description: 'Dây cứu sinh Kernmantle bện lõi kép chịu lực ≥ 35 kN (3.5 tấn), độ giãn thấp dưới 3%, đảm bảo an toàn tuyệt đối khi lau kính và sơn nước nhà cao tầng.',
    fullDescription: 'Dây đu nhà cao tầng Song Thủy sản xuất từ sợi Polyester cường lực cao (High-Tenacity) bện cấu trúc Kernmantle. Chống mài mòn khi trượt thiết bị hãm số 8, khóa trượt an toàn chống rơi ngã.',
    image: imgSafetyRope,
    material: 'Polyester DFY Cường lực cao (High-Tenacity)...',
    width: 'Kích thước theo yêu cầu (12mm, 14mm, 16mm, 18mm, 20mm...)',
    moq: 'Theo yêu cầu',
    leadTime: '15 - 20 ngày',
    tensileStrength: '32 kN - 55 kN (3.2 tấn - 5.5 tấn)',
    customColorAvailable: true,
    colorOptions: [
      'Trắng sọc đen định vị (Black Tracer)',
      'Trắng sọc đỏ cứu hộ (Red Tracer)',
      'Trắng sọc xanh dương (Blue Tracer)'
    ],
    applications: [
      'Dây làm việc chính kết hợp ghế đu lau kính cao ốc',
      'Dây cứu sinh an toàn phụ gắn khóa trượt chống rơi ngã',
      'Thi công sơn nước, chống thấm mặt ngoài tòa nhà',
      'Cứu hộ PCCC và đu dây kỹ thuật công nghiệp'
    ],
    keyFeatures: [
      'Lực kéo đứt cực lớn (≥ 35 kN / 3.5 tấn), có chứng nhận kiểm định',
      'Độ giãn tĩnh thấp (< 3%), giữ vị trí làm việc ổn định',
      'Vỏ bện đa tao chống cọ sát mài mòn cao',
      'Quy cách đóng cuộn kiện gọn gàng, dễ vận chuyển'
    ],
    specsTable: [
      { name: 'Chất liệu', value: '100% Polyester DFY Cường lực cao' },
      { name: 'Cấu trúc', value: 'Kernmantle (Lõi chịu lực đa sợi + Vỏ bện)' },
      { name: 'Đường kính', value: '12mm, 14mm, 16mm, 18mm, 20mm...' },
      { name: 'Lực tải đứt', value: '32 kN - 55 kN (3.2 tấn - 5.5 tấn)' },
      { name: 'Quy cách cuộn', value: 'Cuộn 50m, 100m, 150m, 200m, 300m' },
      { name: 'Lead time', value: '15 - 20 ngày' }
    ]
  }
];

export const HIGHLIGHT_STATS = [
  {
    number: 'Đa dạng',
    label: 'Sản phẩm dệt & phụ liệu',
    sub: 'Dây bấm đầu, đai dệt, thun, rope...'
  },
  {
    number: 'Đa dạng',
    label: 'Công nghệ bấm đầu',
    sub: 'Đầu keo, kim loại, silicon & ABS'
  },
  {
    number: '10-15',
    label: 'Ngày giao hàng tiêu chuẩn',
    sub: 'Đáp ứng nhanh tiến độ xưởng may'
  },
  {
    number: '100%',
    label: 'Kiểm soát chất lượng',
    sub: 'Độ bền màu, co giãn & lực kéo đứt'
  }
];
