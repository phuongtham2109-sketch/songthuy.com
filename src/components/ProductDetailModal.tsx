import React from 'react';
import { X, CheckCircle, FileText, ArrowRight, ShieldCheck, Scissors, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#e2e2e5] rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#e2e2e5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#00346f] bg-[#e8eefa] px-2 py-0.5 rounded-xs">
              {product.sku}
            </span>
            <span className="font-mono text-xs text-[#737783] uppercase">
              {product.categoryLabel}
            </span>
          </div>

          <button
            id="close-product-detail-modal"
            onClick={onClose}
            className="p-1.5 text-[#424751] hover:text-[#1a1c1e] hover:bg-[#f3f3f6] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header image and main info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="relative rounded-xs overflow-hidden bg-[#eeeef0] border border-[#e2e2e5] aspect-4/3">
              {product.tag && (
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs ${
                      product.tagColor === 'red'
                        ? 'bg-[#ba1a1a]'
                        : product.tagColor === 'emerald'
                        ? 'bg-emerald-800'
                        : product.tagColor === 'purple'
                        ? 'bg-purple-800'
                        : product.tagColor === 'blue'
                        ? 'bg-[#00346f]'
                        : 'bg-[#8d4f00]'
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#00346f]">
                {product.name}
              </h2>
              <p className="font-sans text-sm text-[#424751] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Core Parameters Box */}
              <div className="bg-[#f9f9fc] border border-[#e2e2e5] p-3 rounded-xs space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#737783]">Chất liệu:</span>
                  <span className="font-semibold text-[#1a1c1e] text-right truncate max-w-[65%]">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737783]">Kích thước / Bản rộng:</span>
                  <span className="font-semibold text-[#00346f] text-right">{product.width}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737783]">Số lượng tối thiểu (MOQ):</span>
                  <span className="font-semibold text-[#1a1c1e] text-right">{product.moq}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#737783]">Thời gian sản xuất (Lead time):</span>
                  <span className="font-semibold text-[#8d4f00] text-right">{product.leadTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tipping Options (Bấm đầu dây) */}
          {product.tippingOptions && product.tippingOptions.length > 0 && (
            <div className="p-4 bg-[#fff8f0] border border-[#8d4f00]/30 rounded-xs">
              <div className="flex items-center gap-2 mb-2 text-[#8d4f00] font-mono text-xs font-bold uppercase">
                <Scissors className="w-4 h-4" />
                <span>Kỹ thuật gia công bấm đầu có sẵn:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {product.tippingOptions.map((tip, idx) => (
                  <div key={idx} className="bg-white border border-[#8d4f00]/20 p-2 text-center rounded-xs text-xs font-mono font-bold text-[#00346f]">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-display font-bold text-base text-[#00346f] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8d4f00]" />
                Đặc Tính Nổi Bật
              </h3>
              <ul className="space-y-2 text-xs font-sans text-[#424751]">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-base text-[#00346f] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00346f]" />
                Ứng Dụng Thực Tế
              </h3>
              <ul className="space-y-2 text-xs font-sans text-[#424751]">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00346f] shrink-0 mt-1.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div>
            <h3 className="font-display font-bold text-base text-[#00346f] mb-3">
              Bảng Thông Số Kỹ Thuật Chi Tiết
            </h3>
            <div className="border border-[#e2e2e5] rounded-xs overflow-hidden">
              <table className="w-full text-xs font-mono text-left">
                <tbody>
                  {product.specsTable.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#e2e2e5] last:border-b-0 ${
                        idx % 2 === 0 ? 'bg-[#f9f9fc]' : 'bg-white'
                      }`}
                    >
                      <td className="py-2.5 px-4 font-bold text-[#424751] w-1/3 border-r border-[#e2e2e5]">
                        {spec.name}
                      </td>
                      <td className="py-2.5 px-4 text-[#1a1c1e] font-sans font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#e2e2e5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#737783]">
              * Hỗ trợ gửi mẫu rập miễn phí cho các xưởng may mặc và đối tác xuất khẩu.
            </span>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-[#e2e2e5] hover:bg-[#f3f3f6] text-[#424751] text-xs font-mono uppercase font-bold rounded-xs transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product);
                }}
                className="flex-1 sm:flex-initial bg-[#8d4f00] hover:bg-[#a35c00] text-white px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Yêu cầu báo giá sản phẩm này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
