import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Award,
  Sparkles,
  ChevronRight,
  Palette,
  Factory,
  Check,
  Send,
  Scissors,
  Layers,
  Clock,
  Box,
  MapPin,
  Phone,
  Mail,
  Zap
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_INFO, TIPPING_TECHNIQUES, HIGHLIGHT_STATS, CATEGORIES } from '../data/products';
import logoImg from '../assets/images/song_thuy_logo_1787387177995.jpg';

interface HomeScreenProps {
  onNavigateToProducts: (category?: string) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product?: Product) => void;
  onOpenCalculator: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateToProducts,
  onSelectProduct,
  onRequestQuote,
  onOpenCalculator,
}) => {
  const [selectedTipping, setSelectedTipping] = useState(TIPPING_TECHNIQUES[0]);

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#eeeef0] border-b border-[#e2e2e5] overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1600&auto=format&fit=crop"
            alt="Xưởng dệt Song Thủy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-105 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-[#f9f9fc]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Factory Overview & Core Specialties */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#00346f] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-xs shadow-xs">
                  {COMPANY_INFO.name}
                </span>
                <span className="bg-[#8d4f00] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#ffdcc0]" />
                  CHUYÊN SẢN XUẤT & GIA CÔNG
                </span>
              </div>

              {/* Tagline / Main Title */}
              <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#00346f] tracking-tight leading-[1.2] mb-3">
                Sản Xuất & Gia Công Dây Đai Dệt, Dây Thun, Dây Dù, Dây Luồn Bấm Đầu
              </h1>

              {/* Tagline details */}
              <div className="p-3 bg-[#f0f4fc] border-l-4 border-[#00346f] rounded-xs mb-3">
                <p className="font-mono text-xs sm:text-sm font-bold text-[#00346f] leading-snug">
                  Chỉ May • Dây Dù • Quai Dép • Dây Túi Xách • Dây Thun • Dây Band
                </p>
              </div>

              {/* Company Introduction */}
              <p className="font-sans text-xs sm:text-sm text-[#424751] leading-relaxed mb-5">
                {COMPANY_INFO.description}
              </p>

              {/* Quick Specs Highlight Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-xs font-mono">
                <div className="bg-white p-2.5 rounded-xs border border-[#e2e2e5]">
                  <span className="text-[#737783] block text-[10px]">GIA CÔNG ĐẦU DÂY</span>
                  <strong className="text-[#00346f] text-[11px] sm:text-xs">Keo &bull; Kim loại &bull; Silicon &bull; ABS</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xs border border-[#e2e2e5]">
                  <span className="text-[#737783] block text-[10px]">THỜI GIAN GIAO HÀNG</span>
                  <strong className="text-[#8d4f00] text-[11px] sm:text-xs">10 → 15 ngày (Lead time)</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xs border border-[#e2e2e5] col-span-2 sm:col-span-1">
                  <span className="text-[#737783] block text-[10px]">SỐ LƯỢNG TỐI THIỂU</span>
                  <strong className="text-[#00346f] text-[11px] sm:text-xs">Linh hoạt theo yêu cầu</strong>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  id="hero-request-quote-btn"
                  onClick={() => onRequestQuote()}
                  className="bg-[#8d4f00] hover:bg-[#a35c00] active:bg-[#723f00] text-white px-6 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>GỬI YÊU CẦU BÁO GIÁ & MẪU THỬ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-view-products-btn"
                  onClick={() => onNavigateToProducts('all')}
                  className="bg-white hover:bg-[#f3f3f6] text-[#00346f] border border-[#00346f]/40 px-5 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-xs transition-colors text-center"
                >
                  XEM SẢN PHẨM ▶
                </button>
              </div>
            </div>

            {/* Right Column: Factory Card & Fast Contact */}
            <div className="lg:col-span-5 space-y-4">
              {/* Address and Fast Info Card */}
              <div className="bg-white border-2 border-[#00346f] p-5 sm:p-6 rounded-xs shadow-md space-y-4">
                <div className="flex items-center gap-3 border-b border-[#e2e2e5] pb-3">
                  <div className="w-12 h-12 bg-white rounded-xs flex items-center justify-center p-0.5 border border-[#e2e2e5] shadow-xs overflow-hidden shrink-0">
                    <img
                      src={logoImg}
                      alt="Song Thủy Logo"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#8d4f00] uppercase tracking-wider block">
                      TRỤ SỞ & XƯỞNG SẢN XUẤT
                    </span>
                    <h3 className="font-display font-bold text-base text-[#00346f]">
                      {COMPANY_INFO.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm font-sans">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#8d4f00] shrink-0 mt-0.5" />
                    <span className="text-[#1a1c1e] font-medium leading-snug">
                      {COMPANY_INFO.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#00346f] shrink-0" />
                    <span className="text-[#424751]">Hotline / Zalo:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-bold text-[#00346f] text-base hover:underline">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#00346f] shrink-0" />
                    <span className="text-[#424751]">Email:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-sans font-semibold text-[#00346f] hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e2e2e5] flex items-center justify-between text-xs font-mono text-[#5f6368]">
                  <span>⚡ Phản hồi báo giá trong 30 phút</span>
                  <span className="text-emerald-700 font-bold">Xưởng sản xuất trực tiếp</span>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {HIGHLIGHT_STATS.map((stat, i) => (
                  <div key={i} className="bg-white p-3 border border-[#e2e2e5] rounded-xs">
                    <div className="font-display font-black text-xl text-[#00346f]">{stat.number}</div>
                    <div className="text-xs font-bold text-[#1a1c1e]">{stat.label}</div>
                    <div className="text-[10px] text-[#737783] mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: GIA CÔNG BẤM ĐẦU DÂY CHUYÊN NGHIỆP */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#e2e2e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fff8f0] text-[#8d4f00] text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-xs mb-2">
                <Scissors className="w-3.5 h-3.5" />
                GIA CÔNG ĐẦU DÂY MAY MẶC & PHỤ KIỆN
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#00346f]">
                Công Nghệ Bấm Đầu Dây Luồn (Tipping Technology)
              </h2>
              <p className="text-xs sm:text-sm text-[#424751] font-sans mt-1 max-w-2xl">
                Song Thủy cung cấp đầy đủ các kỹ thuật bấm đầu dây cao cấp theo rập mẫu và yêu cầu thương hiệu thời trang:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIPPING_TECHNIQUES.map((tip) => (
              <div
                key={tip.id}
                className="bg-[#f9f9fc] border border-[#e2e2e5] hover:border-[#00346f] p-4 sm:p-5 rounded-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-2xl mb-3">{tip.icon}</div>
                  <h3 className="font-display font-bold text-base text-[#00346f] group-hover:text-[#8d4f00] transition-colors mb-1.5">
                    {tip.name}
                  </h3>
                  <p className="text-xs font-sans text-[#424751] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2e2e5] flex items-center justify-between text-[11px] font-mono text-[#00346f]">
                  <span>Theo kích thước rập</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION: 10 DÒNG SẢN PHẨM CHỦ LỰC CỦA SONG THỦY */}
      <section className="py-12 sm:py-16 bg-[#f3f4f8] border-b border-[#e2e2e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#8d4f00] uppercase tracking-wider block mb-1">
                DANH MỤC SẢN XUẤT TRỌNG TÂM
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#00346f]">
                Đa Dạng Sản Phẩm & Quy Cách Kỹ Thuật
              </h2>
            </div>

            <button
              onClick={() => onNavigateToProducts('all')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00346f] hover:text-[#8d4f00] uppercase transition-colors"
            >
              <span>Xem bảng chi tiết thông số</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                id={`home-product-${prod.id}`}
                className="bg-white border border-[#e2e2e5] hover:border-[#00346f]/60 hover:shadow-md rounded-xs overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image header with tags */}
                  <div className="relative aspect-16/10 bg-[#eeeef0] overflow-hidden group">
                    <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
                      {prod.tag && (
                        <span
                          className={`text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs ${
                            prod.tagColor === 'red'
                              ? 'bg-[#ba1a1a]'
                              : prod.tagColor === 'emerald'
                              ? 'bg-emerald-800'
                              : prod.tagColor === 'purple'
                              ? 'bg-purple-800'
                              : prod.tagColor === 'blue'
                              ? 'bg-[#00346f]'
                              : 'bg-[#8d4f00]'
                          }`}
                        >
                          {prod.tag}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono px-1.5 py-0.5 rounded-xs">
                        Cận cảnh sợi dệt
                      </span>
                    </div>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-[#737783] uppercase tracking-wider block">
                        [{prod.sku}] &bull; {prod.categoryLabel}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#00346f] mt-0.5 leading-snug">
                        {prod.name}
                      </h3>
                    </div>

                    <p className="text-xs font-sans text-[#424751] line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Spec badges */}
                    <div className="bg-[#f9f9fc] p-2.5 rounded-xs border border-[#e2e2e5] space-y-1 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-[#737783]">Chất liệu:</span>
                        <span className="font-semibold text-[#1a1c1e] text-right truncate max-w-[60%]">{prod.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737783]">Kích thước:</span>
                        <span className="font-semibold text-[#00346f] text-right">{prod.width}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737783]">Lead time:</span>
                        <span className="font-semibold text-[#8d4f00] text-right">{prod.leadTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="p-4 pt-0 flex gap-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="flex-1 bg-[#f0f4fc] hover:bg-[#e2eaf8] text-[#00346f] py-2 text-xs font-mono font-bold uppercase rounded-xs transition-colors"
                  >
                    Chi tiết kỹ thuật
                  </button>
                  <button
                    onClick={() => onRequestQuote(prod)}
                    className="bg-[#8d4f00] hover:bg-[#a35c00] text-white px-3 py-2 text-xs font-mono font-bold uppercase rounded-xs transition-colors"
                    title="Báo giá sản phẩm này"
                  >
                    Báo giá
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: CAM KẾT SẢN XUẤT & ĐỘI NGŨ CHUYÊN NGHIỆP */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#e2e2e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00346f] text-white rounded-xs p-6 sm:p-10 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block bg-[#8d4f00] text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs">
                  CAM KẾT CHẤT LƯỢNG SONG THỦY
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Tận Tâm - Sáng Tạo - Đúng Tiến Độ
                </h2>
                <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                  Với đội ngũ nhân viên có sự sáng tạo, ham học hỏi và tận tâm trong công việc, luôn nỗ lực mang lại sản phẩm chất lượng cùng dịch vụ hỗ trợ tốt nhất, chúng tôi đảm bảo sự tin tưởng của quý đối tác sẽ luôn được đáp ứng trọn vẹn.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="bg-white/10 p-3 rounded-xs border border-white/20">
                    <div className="font-bold text-[#ffdcc0]">✓ MẪU ĐỐI CHỨNG</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Làm mẫu rập thử nghiệm trước khi dệt hàng loạt</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xs border border-white/20">
                    <div className="font-bold text-[#ffdcc0]">✓ GIAO HÀNG NHANH</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Tiến độ 10 - 15 ngày, hỗ trợ đơn gấp xưởng may</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xs border border-white/20">
                    <div className="font-bold text-[#ffdcc0]">✓ GIÁ GỐC NHÀ MÁY</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">Sản xuất trực tiếp, tối ưu chi phí xuất khẩu</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white text-[#1a1c1e] p-6 rounded-xs shadow-lg space-y-4">
                <h3 className="font-display font-bold text-lg text-[#00346f] border-b pb-2">
                  Liên hệ báo giá nhanh
                </h3>
                <div className="text-xs font-sans space-y-2 text-[#424751]">
                  <p><strong>Hotline:</strong> {COMPANY_INFO.phoneDisplay}</p>
                  <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
                  <p><strong>Địa chỉ xưởng:</strong> {COMPANY_INFO.address}</p>
                </div>

                <button
                  onClick={() => onRequestQuote()}
                  className="w-full bg-[#8d4f00] hover:bg-[#a35c00] text-white py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi yêu cầu ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
