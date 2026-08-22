import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { ProductsScreen } from './components/ProductsScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { CalculatorDrawer } from './components/CalculatorDrawer';
import { InfoModal } from './components/InfoModals';
import { CategoryId, Product } from './types';
import { COMPANY_INFO } from './data/products';
import { Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'products' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteTargetProduct, setQuoteTargetProduct] = useState<Product | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<
    'privacy' | 'terms' | 'certifications' | 'support' | null
  >(null);

  // Navigate to products tab and optionally set category
  const handleNavigateToProducts = (category?: string) => {
    if (category) {
      setSelectedCategory(category as CategoryId);
    }
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open quote modal for a specific product or general
  const handleOpenQuote = (product?: Product) => {
    setQuoteTargetProduct(product || null);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fc] text-[#1a1c1e] font-sans antialiased">
      {/* 1. Header with Song Thuy Branding & Special Highlight */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRequestQuote={() => handleOpenQuote()}
        onOpenCalculator={() => setCalculatorOpen(true)}
        onNavigateToCategory={handleNavigateToProducts}
      />

      {/* 2. Main Content Screens */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeScreen
            onNavigateToProducts={handleNavigateToProducts}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onRequestQuote={handleOpenQuote}
            onOpenCalculator={() => setCalculatorOpen(true)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsScreen
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onRequestQuote={handleOpenQuote}
          />
        )}

        {activeTab === 'contact' && <ContactScreen />}
      </main>

      {/* 3. Global Footer */}
      <Footer onOpenInfoModal={(type) => setInfoModalType(type)} />

      {/* 4. Floating Quick Actions */}
      <div className="fixed bottom-5 right-4 z-30 flex flex-col items-end gap-2.5">
        <button
          id="floating-calc-btn"
          onClick={() => setCalculatorOpen(true)}
          className="bg-white hover:bg-[#f3f3f6] text-[#00346f] border border-[#00346f]/30 px-3 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
          title="Tư vấn chọn dây theo ứng dụng"
          aria-label="Tư vấn chọn dây"
        >
          <span className="text-xs font-mono font-bold text-[#8d4f00]">⚡ Tư vấn kỹ thuật</span>
        </button>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          id="floating-hotline-btn"
          className="bg-[#00346f] hover:bg-[#00234b] text-white p-3.5 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center gap-2"
          title={`Gọi Hotline ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 animate-pulse text-[#ffdcc0]" />
          <span className="text-xs font-mono font-bold hidden sm:inline">{COMPANY_INFO.phoneDisplay}</span>
        </a>
      </div>

      {/* 5. Modals & Drawers */}
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleOpenQuote}
      />

      {/* Request Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteTargetProduct}
      />

      {/* Technical Tension & Load Advisor */}
      <CalculatorDrawer
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onRequestQuote={handleOpenQuote}
      />

      {/* Terms, Privacy, Quality Certifications Modal */}
      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}
