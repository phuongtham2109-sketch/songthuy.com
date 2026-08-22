import React from 'react';
import { X, ShieldCheck, FileText, Award, Headphones, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface InfoModalProps {
  type: 'privacy' | 'terms' | 'certifications' | 'support' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#e2e2e5] rounded-xs max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-[#e2e2e5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'certifications' && <Award className="w-5 h-5 text-[#8d4f00]" />}
            {type === 'support' && <Headphones className="w-5 h-5 text-[#00346f]" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#00346f]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#00346f]" />}

            <h3 className="font-display font-bold text-lg text-[#00346f]">
              {type === 'certifications' && 'Chứng nhận chất lượng & Tiêu chuẩn dệt xuất xưởng'}
              {type === 'support' && 'Tư vấn kỹ thuật rập & Chính sách hỗ trợ'}
              {type === 'privacy' && 'Chính sách bảo mật thông tin'}
              {type === 'terms' && 'Điều khoản thương mại & Tiến độ giao hàng'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#424751] hover:text-[#1a1c1e] hover:bg-[#f3f3f6] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 text-xs sm:text-sm font-sans text-[#424751] leading-relaxed space-y-4">
          {type === 'certifications' && (
            <div className="space-y-4">
              <p>
                Tất cả các sản phẩm dây đai dệt, dây thun, dây rope, dây luồn bấm đầu của <strong>{COMPANY_INFO.name}</strong> đều trải qua quy trình kiểm tra chất lượng nghiệm ngặt:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="border border-[#e2e2e5] p-3 rounded-xs bg-[#f9f9fc]">
                  <div className="font-mono font-bold text-[#00346f]">TIÊU CHUẨN MAY MẶC XUẤT KHẨU</div>
                  <div className="text-xs text-[#737783] mt-1">Độ bền màu cấp 4-5, an toàn cho da, không chứa chì & kim loại nặng.</div>
                </div>
                <div className="border border-[#e2e2e5] p-3 rounded-xs bg-[#f9f9fc]">
                  <div className="font-mono font-bold text-[#00346f]">KIỂM ĐỊNH BẤM ĐẦU DÂY</div>
                  <div className="text-xs text-[#737783] mt-1">Độ bám dính đầu keo, đầu kim loại, silicon & ABS chịu lực giật kéo & giặt sấy.</div>
                </div>
                <div className="border border-[#e2e2e5] p-3 rounded-xs bg-[#f9f9fc]">
                  <div className="font-mono font-bold text-[#00346f]">CHỐNG TIA UV CẤP 4-5</div>
                  <div className="text-xs text-[#737783] mt-1">Sợi Polyester/PP bổ sung phụ gia kháng nắng mưa ngoài trời cho ghế sofa & dây dù.</div>
                </div>
                <div className="border border-[#e2e2e5] p-3 rounded-xs bg-[#f9f9fc]">
                  <div className="font-mono font-bold text-[#00346f]">KIỂM TRA LỰC KÉO ĐỨT</div>
                  <div className="text-xs text-[#737783] mt-1">Dây đu lau kính & dây đai chịu lực được test tải phá hủy bằng máy đo kéo điện tử.</div>
                </div>
              </div>
            </div>
          )}

          {type === 'support' && (
            <div className="space-y-3">
              <p>
                Đội ngũ kỹ thuật của <strong>{COMPANY_INFO.name}</strong> luôn sẵn sàng hỗ trợ các xưởng may mặc, xưởng balo túi xách và doanh nghiệp nội thất:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Dệt mẫu thử theo rập thiết kế và thông số yêu cầu trong 3-5 ngày làm việc.</li>
                <li>Tư vấn lựa chọn chất liệu sợi phù hợp: Polyester DTY, FDY, Cotton, PE, PP, Spandex...</li>
                <li>Gia công bấm đầu mủ keo, kim loại đúc logo, bọc silicon hoặc khuôn nhựa ABS.</li>
                <li>Hotline kỹ thuật & Zalo: <strong className="text-[#00346f]">{COMPANY_INFO.phoneDisplay}</strong></li>
                <li>Email tiếp nhận file rập: <strong className="text-[#00346f]">{COMPANY_INFO.email}</strong></li>
              </ul>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-3">
              <p>
                <strong>{COMPANY_INFO.name}</strong> cam kết bảo mật tuyệt đối mẫu mã thiết kế, rập khuôn, logo in ấn và thông tin thương mại của các đối tác may mặc và xuất khẩu.
              </p>
              <p>
                Thông tin quý khách để lại trong biểu mẫu báo giá chỉ được sử dụng cho mục đích tư vấn sản phẩm, báo giá trực tiếp từ nhà máy và gửi mẫu đối chứng.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-3">
              <p>
                <strong>1. Thời gian sản xuất (Lead time):</strong> Tiêu chuẩn từ 10 → 15 ngày kể từ ngày duyệt mẫu đối chứng. Đối với dòng Dây đu lau kính / dây viền thun đặc thù từ 15 → 20 ngày.
              </p>
              <p>
                <strong>2. Số lượng tối thiểu (MOQ):</strong> Dây draw cord & dây luồn dẹp từ 3.000 mét / pcs. Các dòng sản phẩm khác linh hoạt theo đơn hàng thực tế của khách hàng.
              </p>
              <p>
                <strong>3. Giao hàng:</strong> Hỗ trợ giao tận nơi các xưởng may tại TP.HCM, Bình Dương, Đồng Nai, Long An và gửi chành xe / container toàn quốc và xuất khẩu.
              </p>
              <p>
                <strong>4. Địa chỉ xưởng:</strong> {COMPANY_INFO.address}
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-[#e2e2e5] flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#00346f] hover:bg-[#00234b] text-white px-5 py-2 text-xs font-mono font-bold uppercase rounded-xs transition-colors"
            >
              Đã hiểu & Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
