import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CuratedSpacesPreview } from './components/CuratedSpacesPreview';
import { ExploreOurRange } from './components/ExploreOurRange';
import { FindYourSpace } from './components/FindYourSpace';
import { FindYourStyle } from './components/FindYourStyle';
import { CuratedSpaces } from './components/CuratedSpaces';
import { CustomerFavourites } from './components/CustomerFavourites';
import { MaterialFinishStudio } from './components/MaterialFinishStudio';
import { TilesPageView } from './components/TilesPageView';
import { SanitarywarePageView } from './components/SanitarywarePageView';
import { ShowersPageView } from './components/ShowersPageView';
import { FaucetsPageView } from './components/FaucetsPageView';
import { BathroomPageView } from './components/BathroomPageView';
import { ProductCatalogView } from './components/ProductCatalogView';
import { ProductComparisonModal } from './components/ProductComparisonModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { TradeModal } from './components/TradeModal';
import { Footer } from './components/Footer';
import { Product, CartItem, SpaceCategory, StyleCollection, ProductCategoryItem } from './types';
import { ALL_PRODUCTS } from './data/bathwareData';
import { Check, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'tiles' | 'sanitaryware' | 'showers' | 'faucets' | 'bathroom'>('bathroom');

  const [cart, setCart] = useState<CartItem[]>([
    {
      product: ALL_PRODUCTS[0],
      selectedFinish: 'Brushed Brass',
      quantity: 1,
    },
  ]);
  const [wishlist, setWishlist] = useState<Product[]>([ALL_PRODUCTS[4]]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const handleAddEnsembleToCart = (products: Product[]) => {
    products.forEach((prod) => {
      handleAddToCart(prod, prod.finishes[0]?.name || 'Standard');
    });
    setIsCartOpen(true);
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
        {currentView === 'catalog' ? (
          <ProductCatalogView
            products={ALL_PRODUCTS}
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
            {/* 2. Hero Section: Architecture Meets Wellbeing (Pristine 4K background, 4 value pillars, 0 overlap) */}
            <HeroSection
              onExploreCollections={() => handleOpenDepartment('All')}
              onBookConsultation={() => setIsTradeOpen(true)}
            />

            {/* 3. Featured Collections: Curated Spaces for Modern Living (5 exact cards directly under hero) */}
            <CuratedSpacesPreview
              onOpenDepartment={handleOpenDepartment}
              onExploreAll={() => handleOpenDepartment('All')}
            />

            {/* 4. Explore Our Range (HD product silhouettes and model counts) */}
            <ExploreOurRange onSelectCategory={handleSelectCategory} />

            {/* 5. Find Your Space (6 authentic architectural bathware suite cards with crystal-clear HD photography) */}
            <FindYourSpace
              onSelectSpace={handleSelectSpace}
              onExploreAll={() => handleOpenDepartment('All')}
            />

            {/* 6. Find Your Style (6 macro close-up craftsmanship cards) */}
            <FindYourStyle
              onSelectStyle={handleSelectStyle}
              onExploreCollections={() => handleOpenDepartment('All')}
            />

            {/* 7. Curated Spaces: The Contemporary Retreat with Interactive Hotspots */}
            <CuratedSpaces
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddEnsembleToCart={handleAddEnsembleToCart}
            />

            {/* 8. Material & Finish Studio: 6 PVD Architectural Finishes & Swatch Ordering */}
            <MaterialFinishStudio
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onFilterByFinish={(finishName) => {
                setCatalogDepartment('All');
                setCatalogCategory(finishName);
                setCurrentView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 9. Customer Favourites: Expanded 4-Column Luxury Architectural Grid with Swatches */}
            <CustomerFavourites
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
              onOpenCatalog={() => handleOpenDepartment('All')}
            />
          </>
        )}
      </main>

      {/* Architectural Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenTrade={() => setIsTradeOpen(true)}
      />

      {/* Drawers and Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => setWishlist((w) => w.filter((p) => p.id !== id))}
        onAddToCart={handleAddToCart}
      />

      <ProductModal
        product={selectedProduct}
        allProducts={ALL_PRODUCTS}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <ProductComparisonModal
        products={comparingProducts}
        onClose={() => setComparingProducts([])}
        onSelectProduct={(p) => {
          setComparingProducts([]);
          setSelectedProduct(p);
        }}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      <TradeModal
        isOpen={isTradeOpen}
        onClose={() => setIsTradeOpen(false)}
      />

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
