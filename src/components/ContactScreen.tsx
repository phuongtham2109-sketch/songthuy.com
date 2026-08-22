import React, { useState } from 'react';
import {
  Building2,
  Factory,
  Phone,
  Mail,
  Send,
  CheckCircle,
  MapPin,
  ExternalLink,
  Sparkles,
  RefreshCw,
  Scissors
} from 'lucide-react';
import { ContactFormData } from '../types';
import { COMPANY_INFO, PRODUCTS, TIPPING_TECHNIQUES } from '../data/products';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Báo giá Draw Cord (Dây luồn tròn)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTicketId(`ST-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: 'Báo giá Draw Cord (Dây luồn tròn)',
      message: '',
    });
    setSubmitSuccess(false);
    setTicketId(null);
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#00346f] text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs mb-2">
            {COMPANY_INFO.name}
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#00346f] tracking-tight mb-3">
            Liên Hệ Trực Tiếp Nhà Máy Sản Xuất & Gia Công
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#424751] leading-relaxed max-w-2xl">
            Đội ngũ tư vấn kỹ thuật của Song Thủy luôn sẵn sàng tiếp nhận yêu cầu sản xuất dệt dây đai, dây thun, dây rope, dây luồn (bấm đầu keo - kim loại - silicon & ABS) và các phụ liệu may mặc theo rập mẫu đối tác.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4 mb-8">
          {/* Card 1: XƯỞNG SẢN XUẤT CHÍNH */}
          <div className="p-4 sm:p-5 bg-white border border-[#00346f] ring-1 ring-[#00346f]/20 rounded-xs shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#e8eefa] flex items-center justify-center text-[#00346f] shrink-0">
              <MapPin className="w-6 h-6 text-[#8d4f00]" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#737783] uppercase tracking-wider mb-1">
                ĐỊA CHỈ TRỤ SỞ & XƯỞNG SẢN XUẤT
              </div>
              <p className="font-sans text-sm sm:text-base font-semibold text-[#1a1c1e] leading-snug">
                {COMPANY_INFO.address}
              </p>
              <span className="inline-block text-[11px] text-[#8d4f00] font-medium mt-1">
                (Dây chuyền dệt thoi, dệt kim, máy bện tròn, máy bấm đầu keo, kim loại, silicon & ABS)
              </span>
            </div>
          </div>

          {/* Card 2: Hotline 24/7 */}
          <div className="p-4 sm:p-5 bg-white border border-[#e2e2e5] rounded-xs shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#fff4e6] flex items-center justify-center text-[#8d4f00] shrink-0">
              <Phone className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#737783] uppercase tracking-wider mb-0.5">
                Hotline & Zalo Tiếp Nhận Đơn Hàng (24/7)
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-display font-black text-lg sm:text-xl text-[#00346f] hover:text-[#8d4f00] transition-colors"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Card 3: Email hỗ trợ */}
          <div className="p-4 sm:p-5 bg-white border border-[#e2e2e5] rounded-xs shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#e8eefa] flex items-center justify-center text-[#00346f] shrink-0">
              <Mail className="w-6 h-6" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#737783] uppercase tracking-wider mb-0.5">
                Email Tiếp Nhận Yêu Cầu Kỹ Thuật & Báo Giá
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="font-sans font-semibold text-sm sm:text-base text-[#00346f] hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white border border-[#e2e2e5] rounded-xs p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2e2e5] pb-4 mb-6">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#00346f]">
              Gửi Yêu Cầu Báo Giá & Mẫu Thử
            </h2>
            <span className="text-[11px] font-mono text-[#737783] uppercase">
              Phản hồi trong 30 phút
            </span>
          </div>

          {submitSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#00346f]">
                Yêu cầu đã được gửi thành công!
              </h3>
              <p className="text-sm font-sans text-[#424751] max-w-md mx-auto">
                Mã tiếp nhận: <strong className="font-mono text-[#00346f]">{ticketId}</strong>. Chuyên viên kinh doanh của <strong>{COMPANY_INFO.name}</strong> sẽ liên hệ lại với bạn qua số điện thoại hoặc email đã cung cấp.
              </p>
              <button
                onClick={handleResetForm}
                className="inline-flex items-center gap-2 bg-[#00346f] hover:bg-[#00234b] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Gửi yêu cầu khác</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Họ và tên người liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs focus:outline-hidden focus:border-[#00346f] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0967 xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs focus:outline-hidden focus:border-[#00346f] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Email công ty / cá nhân
                  </label>
                  <input
                    type="email"
                    placeholder="email@congty.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs focus:outline-hidden focus:border-[#00346f] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Dòng sản phẩm quan tâm
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs focus:outline-hidden focus:border-[#00346f] focus:bg-white transition-colors font-medium"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={`Báo giá ${p.name}`}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Gia công bấm đầu dây luồn (Keo / Kim loại / Silicon / ABS)">
                      Gia công bấm đầu dây luồn (Keo / Kim loại / Silicon / ABS)
                    </option>
                    <option value="Yêu cầu gửi mẫu thử theo rập thiết kế">
                      Yêu cầu gửi mẫu thử theo rập thiết kế
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                  Chi tiết quy cách, số lượng, chất liệu hoặc chiều dài cắt
                </label>
                <textarea
                  rows={4}
                  placeholder="Ví dụ: Cần 5.000 mét Draw cord tròn 5mm chất liệu Cotton bấm đầu kim loại bạc, cắt dài 120cm..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs focus:outline-hidden focus:border-[#00346f] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#8d4f00] hover:bg-[#a35c00] active:bg-[#723f00] text-white px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'GỬI YÊU CẦU BÁO GIÁ ▶'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
