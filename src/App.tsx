import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Product, CartItem, SpaceCategory, StyleCollection, ProductCategoryItem } from './types';
import { Check, X } from 'lucide-react';

import { HeroSection } from './components/HeroSection';
import { CuratedSpacesPreview } from './components/CuratedSpacesPreview';
import { ExploreOurRange } from './components/ExploreOurRange';
import { FindYourSpace } from './components/FindYourSpace';
import { FindYourStyle } from './components/FindYourStyle';
import { BottomFeaturedCollections } from './components/BottomFeaturedCollections';
import { SelectedExceptionalSpaces } from './components/SelectedExceptionalSpaces';
import { SpacesThatInspire } from './components/SpacesThatInspire';
import { ShopByFinish } from './components/ShopByFinish';
import { ConsultationBanner } from './components/ConsultationBanner';
import { WhyChooseSMPL } from './components/WhyChooseSMPL';

const TilesPageView = lazy(() => import('./components/TilesPageView').then((m) => ({ default: m.TilesPageView })));
const SanitarywarePageView = lazy(() => import('./components/SanitarywarePageView').then((m) => ({ default: m.SanitarywarePageView })));
const ShowersPageView = lazy(() => import('./components/ShowersPageView').then((m) => ({ default: m.ShowersPageView })));
const FaucetsPageView = lazy(() => import('./components/FaucetsPageView').then((m) => ({ default: m.FaucetsPageView })));
const BathroomPageView = lazy(() => import('./components/BathroomPageView').then((m) => ({ default: m.BathroomPageView })));
const ProductCatalogView = lazy(() => import('./components/ProductCatalogView').then((m) => ({ default: m.ProductCatalogView })));
const ProductComparisonModal = lazy(() => import('./components/ProductComparisonModal').then((m) => ({ default: m.ProductComparisonModal })));
const CartDrawer = lazy(() => import('./components/CartDrawer').then((m) => ({ default: m.CartDrawer })));
const WishlistDrawer = lazy(() => import('./components/WishlistDrawer').then((m) => ({ default: m.WishlistDrawer })));
const ProductModal = lazy(() => import('./components/ProductModal').then((m) => ({ default: m.ProductModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then((m) => ({ default: m.SearchModal })));
const TradeModal = lazy(() => import('./components/TradeModal').then((m) => ({ default: m.TradeModal })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF7F2]">
    <div className="w-7 h-7 rounded-full border-2 border-[#D5CCC0] border-t-[#2E2722] animate-spin" />
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'tiles' | 'sanitaryware' | 'showers' | 'faucets' | 'bathroom'>('home');

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);

  useEffect(() => {
    if ((currentView === 'catalog' || selectedProduct !== null) && catalogProducts.length === 0) {
      import('./data/bathwareData').then((m) => {
        setCatalogProducts(m.ALL_PRODUCTS);
      });
    }
  }, [currentView, selectedProduct, catalogProducts.length]);

  // Catalog View state (when browsing full catalogue by department or filters)
  const [catalogDepartment, setCatalogDepartment] = useState<string>('All');
  const [catalogCategory, setCatalogCategory] = useState<string | null>(null);

  // Comparison Modal state
  const [comparingProducts, setComparingProducts] = useState<Product[]>([]);

  // Drawers & Overlays
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTradeOpen, setIsTradeOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, finish: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedFinish === finish
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedFinish === finish
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, selectedFinish: finish, quantity: 1 }];
    });
    showToast(`Added "${product.name}" (${finish}) to bag.`);
  };

  const handleUpdateQuantity = (productId: string, finish: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedFinish === finish) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (productId: string, finish: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedFinish === finish)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from saved list.`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to architectural board.`);
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const handleOpenDepartment = (dept: string, subcategory?: string) => {
    if (dept === 'Tiles') {
      setCurrentView('tiles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dept === 'Sanitaryware') {
      setCurrentView('sanitaryware');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dept === 'Showers') {
      setCurrentView('showers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dept === 'Bathroom') {
      setCurrentView('bathroom');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (dept === 'Faucets') {
      setCurrentView('faucets');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCatalogDepartment(dept);
    setCatalogCategory(subcategory || null);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSpace = (space: SpaceCategory) => {
    showToast(`Filtering catalogue by space: ${space.title}`);
    setCatalogDepartment('All');
    setCurrentView('catalog');
  };

  const handleSelectStyle = (style: StyleCollection) => {
    showToast(`Selected collection: ${style.title}`);
    setCatalogDepartment('All');
    setCurrentView('catalog');
  };

  const handleSelectCategory = (category: ProductCategoryItem) => {
    handleOpenDepartment(category.department, category.title);
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentView('home');
    setTimeout(() => {
      if (sectionId === 'about') {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'collections') {
        const el = document.getElementById('collections');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'curated-retreat') {
        const el = document.getElementById('curated-retreat');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'explore-range') {
        const el = document.getElementById('explore-range');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'bestsellers') {
        const el = document.getElementById('bestsellers');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'spaces') {
        const el = document.getElementById('spaces');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24211E]">
      {/* Top Announcement Bar when viewing Tiles page as in reference design */}
      {currentView === 'tiles' && <AnnouncementBar />}

      {/* 1. Primary Navigation (Clean bone-white header with SMPL wordmark, Tiles, and CATALOGUE button) */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsTradeOpen(true)}
        onNavigateSection={handleNavigateSection}
        onOpenDepartment={handleOpenDepartment}
        onOpenTilesPage={() => {
          setCurrentView('tiles');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onGoHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeView={currentView}
      />

      {/* Main Content Area: Home, Tiles Page, OR Full Product Catalog View */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          {currentView === 'catalog' ? (
            <ProductCatalogView
              products={catalogProducts}
              selectedDepartment={catalogDepartment}
              selectedCategory={catalogCategory}
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
              onCloseCatalog={() => setCurrentView('home')}
              onCompareProducts={(prods) => setComparingProducts(prods)}
            />
        ) : currentView === 'tiles' ? (
          <TilesPageView
            onOpenConsultation={() => setIsTradeOpen(true)}
            onOrderSample={(tileName) =>
              showToast(`Added material sample swatch for "${tileName}" to your specification kit.`)
            }
          />
        ) : currentView === 'sanitaryware' ? (
          <SanitarywarePageView
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => setIsTradeOpen(true)}
          />
        ) : currentView === 'showers' ? (
          <ShowersPageView
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => setIsTradeOpen(true)}
          />
        ) : currentView === 'faucets' ? (
          <FaucetsPageView
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => setIsTradeOpen(true)}
          />
        ) : currentView === 'bathroom' ? (
          <BathroomPageView
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConsultation={() => setIsTradeOpen(true)}
          />
        ) : (
          <>
            {/* 1. Hero Section + 5 Value Pillars Bar */}
            <HeroSection
              onExploreCollections={(dept) => handleOpenDepartment(dept || 'All')}
              onBookConsultation={() => setIsTradeOpen(true)}
            />

            {/* 2. Shop by Category (7 Portrait Editorial Cards) */}
            <ExploreOurRange
              onSelectCategory={handleSelectCategory}
              onViewAllCategories={() => handleOpenDepartment('All')}
            />

            {/* 3. Featured Collections (4 Landscape Signature Series) */}
            <CuratedSpacesPreview
              onOpenDepartment={handleOpenDepartment}
              onExploreAll={() => handleOpenDepartment('All')}
            />

            {/* 4. Find Your Space (6 Architectural Suite Cards) */}
            <FindYourSpace
              onSelectSpace={handleSelectSpace}
              onExploreAll={() => handleOpenDepartment('All')}
            />

            {/* 5. Find Your Style (6 Macro Craftsmanship Cards) */}
            <FindYourStyle
              onSelectStyle={handleSelectStyle}
              onExploreCollections={() => handleOpenDepartment('All')}
            />

            {/* 6. Featured Product Collections (8 Curated Disciplines) */}
            <BottomFeaturedCollections
              onOpenDepartment={handleOpenDepartment}
            />

            {/* 7. Premium Product Showcase: Selected for Exceptional Spaces (12 Unique Products) */}
            <SelectedExceptionalSpaces
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
              onExploreCatalogue={() => handleOpenDepartment('All')}
            />

            {/* 8. Architectural Inspiration: Spaces That Inspire */}
            <SpacesThatInspire
              onOpenDepartment={handleOpenDepartment}
              onOpenTilesPage={() => {
                setCurrentView('tiles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 9. Shop by Finish (7 Architectural Finishes) */}
            <ShopByFinish
              onFilterByFinish={(finishName) => {
                setCatalogDepartment('All');
                setCatalogCategory(finishName);
                setCurrentView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 10. Design Consultation Banner */}
            <ConsultationBanner
              onBookConsultation={() => setIsTradeOpen(true)}
              onExploreCollections={() => handleOpenDepartment('All')}
            />

            {/* 11. Why Choose SMPL */}
            <WhyChooseSMPL />
          </>
        )}
        </Suspense>
      </main>

      {/* Architectural Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenTrade={() => setIsTradeOpen(true)}
      />

      {/* Drawers and Overlays (Lazy loaded only when opened) */}
      <Suspense fallback={null}>
        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
          />
        )}

        {isWishlistOpen && (
          <WishlistDrawer
            isOpen={isWishlistOpen}
            onClose={() => setIsWishlistOpen(false)}
            wishlist={wishlist}
            onRemoveFromWishlist={(id) => setWishlist((w) => w.filter((p) => p.id !== id))}
            onAddToCart={handleAddToCart}
          />
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            allProducts={catalogProducts}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted(selectedProduct.id)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {comparingProducts.length > 0 && (
          <ProductComparisonModal
            products={comparingProducts}
            onClose={() => setComparingProducts([])}
            onSelectProduct={(p) => {
              setComparingProducts([]);
              setSelectedProduct(p);
            }}
            onAddToCart={handleAddToCart}
          />
        )}

        {isSearchOpen && (
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />
        )}

        {isTradeOpen && (
          <TradeModal
            isOpen={isTradeOpen}
            onClose={() => setIsTradeOpen(false)}
          />
        )}
      </Suspense>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#24211E] text-white px-4 py-3 rounded-sm shadow-2xl flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 border border-[#3E3A34]">
          <Check className="w-4 h-4 text-[#C4B29E]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-stone-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
