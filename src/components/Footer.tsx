import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/images/song_thuy_logo_1787387177995.jpg';

interface FooterProps {
  onOpenInfoModal: (type: 'privacy' | 'terms' | 'certifications' | 'support') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfoModal }) => {
  return (
    <footer className="bg-[#1a1c1e] text-[#dadadc] pt-12 pb-14 border-t border-[#31363c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Brand Header */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xs flex items-center justify-center p-0.5 border border-[#474d53] overflow-hidden shrink-0">
                <img
                  src={logoImg}
                  alt="Song Thủy Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl tracking-wider text-white uppercase">
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#ffdcc0]/90 font-mono font-bold mt-2">
              CHUYÊN SẢN XUẤT & GIA CÔNG CÁC LOẠI CHỈ MAY, DÂY DÙ, QUAI DÉP, DÂY TÚI XÁCH, DÂY THUN, DÂY BAND.....
            </p>
            <p className="text-xs text-[#a0a5ad] font-sans mt-1 max-w-3xl">
              Đa dạng mẫu mã dây đai dệt, dây thun, dây rope, dây luồn (bấm đầu keo - kim loại - silicon & ABS).
            </p>
          </div>

          {/* Contact Details row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-sans text-[#c2c7ce]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#8d4f00] shrink-0 mt-0.5" />
              <span><strong>Địa chỉ:</strong> {COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#8d4f00] shrink-0" />
              <span><strong>Hotline:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-bold">{COMPANY_INFO.phoneDisplay}</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8d4f00] shrink-0" />
              <span><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a></span>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="text-xs sm:text-sm text-[#a0a5ad] font-sans">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Tất cả quyền được bảo lưu.
          </div>

          {/* Links list */}
          <div className="pt-2 border-t border-[#2f3133]">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-3 gap-x-8 text-xs sm:text-sm text-[#c2c7ce]">
              <button
                id="footer-privacy-btn"
                onClick={() => onOpenInfoModal('privacy')}
                className="text-left hover:text-white hover:underline transition-colors focus:outline-hidden"
              >
                Chính sách bảo mật & Thông tin
              </button>
              <button
                id="footer-terms-btn"
                onClick={() => onOpenInfoModal('terms')}
                className="text-left hover:text-white hover:underline transition-colors focus:outline-hidden"
              >
                Điều khoản thương mại & Giao hàng
              </button>
              <button
                id="footer-certifications-btn"
                onClick={() => onOpenInfoModal('certifications')}
                className="text-left hover:text-white hover:underline transition-colors focus:outline-hidden"
              >
                Chứng nhận kiểm định & Tiêu chuẩn dệt
              </button>
              <button
                id="footer-support-btn"
                onClick={() => onOpenInfoModal('support')}
                className="text-left hover:text-white hover:underline transition-colors focus:outline-hidden"
              >
                Tư vấn kỹ thuật rập & Bảo hành
              </button>
            </div>
          </div>

          {/* Factory & Standards Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#a0a5ad]">
            <span className="border border-[#474d53] px-2 py-0.5 rounded-xs bg-[#24272a]">BẤM ĐẦU KEO / KIM LOẠI / SILICON / ABS</span>
            <span className="border border-[#474d53] px-2 py-0.5 rounded-xs bg-[#24272a]">LEAD TIME 10-15 NGÀY</span>
            <span className="border border-[#474d53] px-2 py-0.5 rounded-xs bg-[#24272a]">TIÊU CHUẨN XUẤT KHẨU MAY MẶC</span>
            <span className="border border-[#474d53] px-2 py-0.5 rounded-xs bg-[#24272a]">SẢN XUẤT TẠI VIỆT NAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
