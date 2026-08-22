import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Scissors, ShieldAlert, Package, Layers } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

interface CalculatorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const CalculatorDrawer: React.FC<CalculatorDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onRequestQuote,
}) => {
  const [appType, setAppType] = useState<'apparel' | 'webbing' | 'furniture' | 'elastic' | 'macrame' | 'highrise'>('apparel');

  if (!isOpen) return null;

  let recommendedProduct = PRODUCTS[0];
  let reason = '';
  let calculatedRecommendation = '';

  if (appType === 'apparel') {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'draw-cord-tron') || PRODUCTS[0];
    calculatedRecommendation = 'Dây Draw Cord tròn 3mm - 6mm hoặc Dây luồn dẹp bấm đầu kim loại/silicon/ABS';
    reason = 'Thời trang áo hoodie, áo khoác gió, quần jogger thể thao cần dây luồn êm tay, độ co giãn ổn định, không bai dão và bấm đầu sắc nét.';
  } else if (appType === 'webbing') {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'webbing-tape') || PRODUCTS[3];
    calculatedRecommendation = 'Webbing Tape bản rộng 20mm - 50mm (Chịu lực kéo 500kg - 5.000kg)';
    reason = 'Sản xuất ba lô, túi xách, vali du lịch, quai dép sandal và đai an toàn cần dây dệt đai chịu ma sát, không tưa xơ mép khi may gia công.';
  } else if (appType === 'furniture') {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'day-rope-du') || PRODUCTS[2];
    calculatedRecommendation = 'Dây Rope 4mm - 6mm kháng UV chuyên dụng hoặc Thun bản nệm ghế';
    reason = 'Ghế sofa sân vườn ngoài trời, ghế resort chịu nắng mưa cần dây dù có phụ gia chống tia cực tím UV cấp 4-5, giữ phom đàn hồi sang trọng.';
  } else if (appType === 'elastic') {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'elastic-tron') || PRODUCTS[5];
    calculatedRecommendation = 'Thun tròn 2mm - 5mm (Co giãn 200-250%) hoặc Thun bản dệt kim';
    reason = 'May mặc đồ lót, viền cổ tay áo, khẩu trang, dây rút gấu áo yêu cầu lõi su Spandex dẻo dai, phục hồi đàn hồi nhanh không bị nhão.';
  } else if (appType === 'macrame') {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'macrame-cotton') || PRODUCTS[4];
    calculatedRecommendation = 'Dây se 3 tao Cotton 3mm - 5mm tự nhiên không nhuộm hóa chất';
    reason = 'Đan thảm nghệ thuật Macrame, móc túi xách handmade, dây treo chậu cây và buộc thực phẩm an toàn cho da tay.';
  } else {
    recommendedProduct = PRODUCTS.find((p) => p.id === 'day-du-lau-kinh') || PRODUCTS[9];
    calculatedRecommendation = 'Dây Kernmantle Ø12mm - Ø16mm (Lực tải đứt ≥ 35 kN / 3.5 Tấn)';
    reason = 'Làm việc trên cao lau kính tòa nhà, sơn nước chống thấm cần dây bện lõi kép chịu lực cao, độ giãn dài tĩnh thấp dưới 3%.';
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#e2e2e5] rounded-xs max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#00346f] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-[#ffdcc0]" />
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Tư Vấn Chọn Loại Dây & Phụ Liệu Phù Hợp
              </h2>
              <p className="text-[11px] font-mono text-[#ffdcc0]">
                {COMPANY_INFO.name} &bull; Xưởng dệt Lái Thiêu
              </p>
            </div>
          </div>

          <button
            id="close-calc-drawer-btn"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Select Application */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-2">
              1. Chọn lĩnh vực & Mục đích sử dụng của bạn:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'apparel', label: 'May mặc & Áo Hoodie / Rút quần', icon: '👕' },
                { id: 'webbing', label: 'Ba lô, Túi xách, Quai dép', icon: '🎒' },
                { id: 'furniture', label: 'Nội thất & Đan ghế Sofa', icon: '🪑' },
                { id: 'elastic', label: 'Thun co giãn, Khẩu trang, Viền', icon: '🧵' },
                { id: 'macrame', label: 'Thủ công Macrame & Buộc quà', icon: '🌿' },
                { id: 'highrise', label: 'Lau kính nhà cao tầng & Sơn nước', icon: '🏢' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAppType(item.id as any)}
                  className={`p-3 rounded-xs border text-left transition-all flex flex-col justify-between ${
                    appType === item.id
                      ? 'border-[#00346f] bg-[#f0f4fc] ring-1 ring-[#00346f]'
                      : 'border-[#e2e2e5] hover:border-[#00346f]/40 hover:bg-[#f9f9fc]'
                  }`}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-xs font-sans font-semibold text-[#1a1c1e] leading-snug">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recommended Product Result */}
          <div className="bg-[#f9f9fc] border-2 border-[#00346f] p-5 rounded-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8d4f00] uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Gợi ý quy cách từ kỹ sư Song Thủy:</span>
            </div>

            <div>
              <div className="font-display font-black text-xl text-[#00346f]">
                {recommendedProduct.name}
              </div>
              <div className="font-mono text-xs text-[#737783] mt-0.5">
                Mã: {recommendedProduct.sku} &bull; {recommendedProduct.width} &bull; Lead time: {recommendedProduct.leadTime}
              </div>
            </div>

            <div className="p-3 bg-white rounded-xs border border-[#e2e2e5] text-xs font-mono text-[#00346f] space-y-1">
              <div><strong>Quy cách khuyến nghị:</strong> {calculatedRecommendation}</div>
              <div><strong>Chất liệu:</strong> {recommendedProduct.material}</div>
              {recommendedProduct.tippingOptions && (
                <div><strong>Bấm đầu:</strong> Bấm đầu keo, kim loại, silicon & ABS</div>
              )}
            </div>

            <p className="text-xs font-sans text-[#424751] leading-relaxed">
              {reason}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onSelectProduct(recommendedProduct);
                }}
                className="flex-1 bg-[#f0f4fc] hover:bg-[#e2eaf8] text-[#00346f] py-2.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors text-center"
              >
                Xem chi tiết kỹ thuật
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(recommendedProduct);
                }}
                className="flex-1 bg-[#8d4f00] hover:bg-[#a35c00] text-white py-2.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Báo giá theo quy cách này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
