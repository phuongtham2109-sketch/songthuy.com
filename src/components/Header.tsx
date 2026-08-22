import React, { useState } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Mail, Building2, Sparkles, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

import logoImg from '../assets/images/song_thuy_logo_1787387177995.jpg';

interface HeaderProps {
  activeTab: 'home' | 'products' | 'contact';
  setActiveTab: (tab: 'home' | 'products' | 'contact') => void;
  onRequestQuote: () => void;
  onOpenCalculator?: () => void;
  onNavigateToCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onRequestQuote,
  onOpenCalculator,
  onNavigateToCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'products' | 'contact') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryNav = (catId: string) => {
    if (onNavigateToCategory) {
      onNavigateToCategory(catId);
    } else {
      setActiveTab('products');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e2e5] shadow-xs">
      {/* Top Banner for Factory Specialization */}
      <div className="bg-[#00346f] text-white py-1.5 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-[#8d4f00] text-[#ffdcc0] text-[10px] font-bold px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0">
              CHUYÊN SẢN XUẤT & GIA CÔNG
            </span>
            <span className="truncate text-slate-200 text-[11px] sm:text-xs">
              Chỉ May, Dây Dù, Quai Dép, Dây Túi Xách, Dây Thun, Dây Band &bull; Bấm đầu keo - Kim loại - Silicon & ABS
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300 text-[11px]">
            <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
              Hotline: <strong className="text-white">{COMPANY_INFO.phoneDisplay}</strong>
            </a>
            <span>&bull;</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button + Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-[#00346f] hover:bg-[#f3f3f6] rounded-md transition-colors md:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              )}
            </button>

            {/* Logo Song Thuy */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center gap-3"
            >
              {/* Graphic Logo Badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xs flex items-center justify-center p-0.5 shadow-xs border border-[#e2e2e5] group-hover:border-[#00346f]/50 transition-colors overflow-hidden">
                <img
                  src={logoImg}
                  alt="Song Thủy Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#00346f] uppercase leading-none group-hover:text-[#004a99] transition-colors">
                  {COMPANY_INFO.name}
                </span>
                <span className="font-sans font-semibold text-[11px] sm:text-xs text-[#5f6368] tracking-normal mt-1 leading-tight line-clamp-1">
                  WEBBING TAPE &bull; DRAW CORD &bull; DÂY DÙ &bull; DÂY THUN
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold transition-all rounded-sm ${
                activeTab === 'home'
                  ? 'text-[#00346f] bg-[#f0f4fc] font-bold'
                  : 'text-[#424751] hover:text-[#00346f] hover:bg-[#f3f3f6]'
              }`}
            >
              Trang chủ
            </button>

            <button
              id="nav-products-btn"
              onClick={() => handleNavClick('products')}
              className={`px-3 py-2 text-sm font-semibold transition-all rounded-sm ${
                activeTab === 'products'
                  ? 'text-[#00346f] bg-[#f0f4fc] font-bold'
                  : 'text-[#424751] hover:text-[#00346f] hover:bg-[#f3f3f6]'
              }`}
            >
              Đa dạng sản phẩm
            </button>

            <button
              id="nav-drawcord-btn"
              onClick={() => handleCategoryNav('day-bam-dau')}
              className="px-3 py-2 text-sm font-semibold text-[#8d4f00] hover:bg-[#fff8f0] rounded-sm transition-all flex items-center gap-1.5 border border-[#8d4f00]/30"
            >
              <Sparkles className="w-4 h-4 text-[#8d4f00]" />
              <span>Dây bấm đầu</span>
            </button>

            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-semibold transition-all rounded-sm ${
                activeTab === 'contact'
                  ? 'text-[#00346f] bg-[#f0f4fc] font-bold'
                  : 'text-[#424751] hover:text-[#00346f] hover:bg-[#f3f3f6]'
              }`}
            >
              Liên hệ & Nhà xưởng
            </button>
          </nav>

          {/* Right Action: Request Quote Button */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#424751] border-r border-[#e2e2e5] pr-3 mr-1">
              <Phone className="w-3.5 h-3.5 text-[#8d4f00]" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#00346f] font-bold">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>

            <button
              id="header-request-quote-btn"
              onClick={onRequestQuote}
              className="bg-[#8d4f00] hover:bg-[#a35c00] active:bg-[#723f00] text-white px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-display font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs border border-[#ffdcc0]/20 flex items-center gap-1.5"
            >
              <span>NHẬN BÁO GIÁ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e2e2e5] bg-white animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 text-base font-semibold rounded-sm transition-colors flex items-center justify-between ${
                activeTab === 'home'
                  ? 'bg-[#f0f4fc] text-[#00346f] font-bold'
                  : 'text-[#1a1c1e] hover:bg-[#f3f3f6]'
              }`}
            >
              <span>Trang chủ Song Thủy</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>

            <button
              id="mobile-nav-products"
              onClick={() => handleNavClick('products')}
              className={`w-full text-left px-3 py-2.5 text-base font-semibold rounded-sm transition-colors flex items-center justify-between ${
                activeTab === 'products'
                  ? 'bg-[#f0f4fc] text-[#00346f] font-bold'
                  : 'text-[#1a1c1e] hover:bg-[#f3f3f6]'
              }`}
            >
              <span>Đa dạng sản phẩm & Dòng dệt chuyên sâu</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>

            <button
              id="mobile-nav-tipping"
              onClick={() => handleCategoryNav('day-bam-dau')}
              className="w-full text-left px-3 py-2.5 text-base font-semibold text-[#8d4f00] bg-[#fff8f0] border border-[#8d4f00]/30 rounded-sm transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8d4f00]" />
                <span className="font-bold">Dây bấm đầu (Keo, Kim loại, Silicon, ABS)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8d4f00]" />
            </button>

            <button
              id="mobile-nav-contact"
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 text-base font-semibold rounded-sm transition-colors flex items-center justify-between ${
                activeTab === 'contact'
                  ? 'bg-[#f0f4fc] text-[#00346f] font-bold'
                  : 'text-[#1a1c1e] hover:bg-[#f3f3f6]'
              }`}
            >
              <span>Liên hệ & Địa chỉ nhà máy Lái Thiêu</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>

            <div className="pt-4 border-t border-[#eeeef0] mt-3 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#424751] bg-[#f9f9fc] p-2.5 rounded-xs border border-[#e2e2e5]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8d4f00]" />
                  <span>Hotline: <strong>{COMPANY_INFO.phoneDisplay}</strong></span>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-sans font-medium">Hỗ trợ 24/7</span>
              </div>

              <button
                id="mobile-nav-quote-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full bg-[#8d4f00] hover:bg-[#a35c00] text-white py-3 text-sm font-display font-bold uppercase tracking-wider rounded-xs text-center shadow-xs flex items-center justify-center gap-2"
              >
                <span>YÊU CẦU BÁO GIÁ TRỰC TIẾP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
