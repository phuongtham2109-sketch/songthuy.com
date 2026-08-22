import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, SlidersHorizontal, Check, Sparkles, Scissors, Clock, Box } from 'lucide-react';
import { CategoryId, Product } from '../types';
import { CATEGORIES, PRODUCTS, COMPANY_INFO } from '../data/products';

interface ProductsScreenProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product?: Product) => void;
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onRequestQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-block bg-[#00346f] text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-xs mb-2">
            DANH MỤC SẢN XUẤT & GIA CÔNG
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-[#00346f] tracking-tight mb-2">
            Đa Dạng Sản Phẩm Của {COMPANY_INFO.name}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#424751] leading-relaxed max-w-3xl">
            Chuyên dệt và gia công: <strong>Dây bấm đầu, draw cord, dây luồn dẹp, dây rope dù, webbing tape đai dệt, dây se cotton macrame, thun tròn elastic, dây khóa kéo, thun bản, dây viền thun và dây đu lau kính</strong>. Bấm đầu keo - kim loại - silicon & ABS theo yêu cầu.
          </p>
        </div>

        {/* Search bar & Category Filters */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737783]" />
            <input
              type="text"
              placeholder="Tìm theo tên sản phẩm, mã SKU, chất liệu (Polyester, Cotton, Spandex...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e2e2e5] rounded-xs text-xs sm:text-sm font-sans focus:outline-hidden focus:border-[#00346f] transition-colors"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id as CategoryId)}
                  className={`px-3.5 py-2 text-xs font-mono font-bold uppercase rounded-xs transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#00346f] text-white border-[#00346f] shadow-xs'
                      : 'bg-white text-[#424751] border-[#e2e2e5] hover:border-[#00346f]/50 hover:bg-[#f3f3f6]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white border border-[#e2e2e5] rounded-xs">
            <p className="text-[#737783] text-sm font-sans">
              Không tìm thấy sản phẩm phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-3 text-xs font-mono font-bold text-[#00346f] underline uppercase"
            >
              Xem lại tất cả 10 sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                id={`product-card-${prod.sku}`}
                className="bg-white border border-[#e2e2e5] hover:border-[#00346f] rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
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
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#737783] uppercase tracking-wider block">
                          [{prod.sku}] &bull; {prod.categoryLabel}
                        </span>
                        <h2 className="font-display font-bold text-lg text-[#00346f] mt-0.5 leading-snug group-hover:text-[#8d4f00] transition-colors">
                          {prod.name}
                        </h2>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-[#424751] line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Detailed Specs Block */}
                    <div className="bg-[#f9f9fc] border border-[#e2e2e5] p-3 rounded-xs space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#737783] shrink-0">Chất liệu:</span>
                        <span className="font-semibold text-[#1a1c1e] text-right truncate">{prod.material}</span>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#737783] shrink-0">Bản rộng/Kích thước:</span>
                        <span className="font-semibold text-[#00346f] text-right">{prod.width}</span>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#737783] shrink-0">MOQ:</span>
                        <span className="font-semibold text-[#1a1c1e] text-right">{prod.moq}</span>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#737783] shrink-0">Lead time:</span>
                        <span className="font-semibold text-[#8d4f00] text-right">{prod.leadTime}</span>
                      </div>
                      {prod.tippingOptions && (
                        <div className="flex justify-between items-start gap-2 pt-1 border-t border-[#e2e2e5]">
                          <span className="text-[#737783] shrink-0">Bấm đầu:</span>
                          <span className="font-semibold text-emerald-800 text-right text-[11px]">Keo, Kim loại, Silicon, ABS</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 flex gap-2">
                  <button
                    id={`view-detail-${prod.sku}`}
                    onClick={() => onSelectProduct(prod)}
                    className="flex-1 bg-[#f0f4fc] hover:bg-[#e2eaf8] text-[#00346f] py-2.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors text-center"
                  >
                    Xem thông số đầy đủ
                  </button>

                  <button
                    id={`quick-quote-${prod.sku}`}
                    onClick={() => onRequestQuote(prod)}
                    className="bg-[#8d4f00] hover:bg-[#a35c00] text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center shadow-xs"
                    title="Yêu cầu báo giá cho sản phẩm này"
                  >
                    Báo giá
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
