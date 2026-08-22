import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Scissors, Truck, FileCheck, Phone, Sparkles } from 'lucide-react';
import { Product, QuoteFormData } from '../types';
import { PRODUCTS, COMPANY_INFO, TIPPING_TECHNIQUES } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    productSku: initialProduct?.sku || PRODUCTS[0].sku,
    quantity: '3000',
    unit: 'Mét',
    tippingType: 'Bấm đầu keo',
    customColor: 'Theo mã Pantone / Mẫu vải rập',
    destination: 'TP.HCM / Bình Dương / Toàn quốc / Xuất khẩu',
    notes: '',
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productSku: initialProduct.sku,
        unit: 'Mét',
        tippingType: initialProduct.tippingOptions ? initialProduct.tippingOptions[0] : 'Không bấm đầu',
      }));
    }
  }, [initialProduct]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteCode, setQuoteCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setQuoteSuccess(true);
      setQuoteCode(`ST-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setQuoteSuccess(false);
    setQuoteCode(null);
    onClose();
  };

  const selectedProductObj = PRODUCTS.find((p) => p.sku === formData.productSku) || PRODUCTS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#e2e2e5] rounded-xs max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#e2e2e5] flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] font-bold text-[#8d4f00] uppercase tracking-wider block">
              {COMPANY_INFO.name}
            </span>
            <h2 className="font-display font-black text-xl text-[#00346f]">
              Yêu Cầu Báo Giá & Mẫu Thử
            </h2>
          </div>

          <button
            id="close-quote-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#424751] hover:text-[#1a1c1e] hover:bg-[#f3f3f6] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {quoteSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#00346f]">
                Tiếp Nhận Yêu Cầu Báo Giá Thành Công!
              </h3>
              <div className="bg-[#f0f4fc] border border-[#00346f]/20 p-4 rounded-xs text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                <p>
                  Mã báo giá: <strong className="text-[#00346f] text-sm">{quoteCode}</strong>
                </p>
                <p>
                  Sản phẩm: <strong>{selectedProductObj.name}</strong>
                </p>
                <p>
                  Số lượng dự kiến: <strong>{formData.quantity} {formData.unit}</strong>
                </p>
                {formData.tippingType && (
                  <p>
                    Gia công đầu: <strong>{formData.tippingType}</strong>
                  </p>
                )}
                <p>
                  Người nhận: <strong>{formData.fullName} ({formData.phone})</strong>
                </p>
              </div>
              <p className="text-xs font-sans text-[#424751] max-w-md mx-auto">
                Bộ phận kinh doanh {COMPANY_INFO.name} sẽ gửi bảng giá chi tiết kèm thời gian làm mẫu (Lead time 10-15 ngày) qua điện thoại/Zalo trong thời gian sớm nhất.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-[#00346f] hover:bg-[#00234b] text-white px-6 py-2.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors"
                >
                  Hoàn tất & Đóng
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                  Chọn dòng sản phẩm yêu cầu <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.productSku}
                  onChange={(e) => setFormData({ ...formData, productSku: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs font-medium text-[#00346f] focus:outline-hidden focus:border-[#00346f]"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.sku} value={prod.sku}>
                      [{prod.sku}] {prod.name} ({prod.width})
                    </option>
                  ))}
                </select>
              </div>

              {/* Tipping Option */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5 flex items-center justify-between">
                  <span>Gia công bấm đầu dây</span>
                  <span className="text-[#8d4f00] text-[10px]">Tùy chọn phụ liệu</span>
                </label>
                <select
                  value={formData.tippingType}
                  onChange={(e) => setFormData({ ...formData, tippingType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs font-medium text-[#1a1c1e] focus:outline-hidden focus:border-[#00346f]"
                >
                  <option value="Bấm đầu keo trong suốt / in logo (Plastic Tipping)">Bấm đầu keo trong suốt / in logo</option>
                  <option value="Bấm đầu kim loại đồng / niken / sơn tĩnh điện (Metal Aglet)">Bấm đầu kim loại (Metal Aglet)</option>
                  <option value="Bọc đầu Silicon mềm cao cấp (Silicone Dipped)">Bọc đầu Silicon mềm cao cấp</option>
                  <option value="Đầu nhựa ABS định hình (ABS Plastic Aglet)">Đầu nhựa ABS định hình</option>
                  <option value="Không bấm đầu (Đóng gói cuộn mét mộc)">Không bấm đầu (Đóng gói cuộn mét)</option>
                </select>
              </div>

              {/* Quantity and Unit */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Số lượng dự kiến <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs font-mono font-bold text-[#00346f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Đơn vị tính
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs font-medium"
                  >
                    <option value="Mét">Mét (Meters)</option>
                    <option value="Pcs / Sợi">Pcs (Sợi thành phẩm bấm đầu)</option>
                    <option value="Cuộn">Cuộn (Rolls)</option>
                    <option value="Kg">Kg</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Họ & tên người liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs"
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
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Tên công ty / Xưởng may
                  </label>
                  <input
                    type="text"
                    placeholder="Công ty May Mặc..."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                    Email nhận báo giá
                  </label>
                  <input
                    type="email"
                    placeholder="ketoan@congty.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#424751] uppercase mb-1.5">
                  Ghi chú yêu cầu kỹ thuật & chiều dài cắt
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Chiều dài cắt 110cm, bấm đầu kim loại khắc laser logo, giao tại KCN Sóng Thần..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-[#f9f9fc] border border-[#e2e2e5] rounded-xs resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8d4f00] hover:bg-[#a35c00] active:bg-[#723f00] text-white py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'ĐANG XỬ LÝ YÊU CẦU...' : 'GỬI BÁO GIÁ CHO XƯỞNG SONG THỦY ▶'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
