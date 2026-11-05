import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FindYourSpace } from './components/FindYourSpace';
import { FindYourStyle } from './components/FindYourStyle';
import { ExploreOurRange } from './components/ExploreOurRange';
import { CuratedSpaces } from './components/CuratedSpaces';
import { CustomerFavourites } from './components/CustomerFavourites';
import { ProductListingPage } from './components/ProductListingPage';
import { TrustAndFAQ } from './components/TrustAndFAQ';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { TradeModal } from './components/TradeModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { Product, CartItem, SpaceCategory, StyleCollection, ProductCategoryItem } from './types';
import { BESTSELLER_PRODUCTS, ALL_PRODUCTS } from './data/bathwareData';
import { Check, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalogue'>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const [cart, setCart] = useState<CartItem[]>([
    {
      product: BESTSELLER_PRODUCTS[0],
      selectedFinish: 'Brushed Brass',
      quantity: 1,
    },
  ]);
  const [wishlist, setWishlist] = useState<Product[]>([BESTSELLER_PRODUCTS[1]]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [checkoutDiscountCode, setCheckoutDiscountCode] = useState('');

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

  const handleBuyNow = (product: Product, finish: string) => {
    handleAddToCart(product, finish);
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOpenCheckoutFromCart = (discountAmount: number, code: string) => {
    setCheckoutDiscount(discountAmount);
    setCheckoutDiscountCode(code);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
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

  // Navigations
  const handleSelectCategoryFromNav = (catName: string) => {
    setSelectedCategoryFilter(catName);
    setCurrentView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSpace = (space: SpaceCategory) => {
    showToast(`Filtering by space: ${space.title}`);
    setSelectedCategoryFilter('all');
    setCurrentView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStyle = (style: StyleCollection) => {
    showToast(`Selected collection: ${style.title} (${style.aesthetic})`);
    setSelectedCategoryFilter('all');
    setCurrentView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: ProductCategoryItem) => {
    // Map id to category name
    const map: Record<string, string> = {
      basin_faucets: 'Faucets',
      kitchen_faucets: 'Faucets',
      showers: 'Showers',
      shower_systems: 'Showers',
      wash_basins: 'Wash Basins',
      bathtubs: 'Bathtubs',
      toilets: 'Sanitaryware',
      accessories: 'Accessories',
    };
    const targetCat = map[category.id] || 'all';
    setSelectedCategoryFilter(targetCat);
    setCurrentView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
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
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#24211E]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        currentView={currentView}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsTradeOpen(true)}
        onNavigateSection={handleNavigateSection}
        onSelectCategory={handleSelectCategoryFromNav}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCatalogue={() => {
          setSelectedCategoryFilter('all');
          setCurrentView('catalogue');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Main Content Flow: Switchable between Luxury Home and Dedicated PLP */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 3. Hero Section: Elevate the Everyday. */}
            <HeroSection
              onExploreCollections={() => {
                setSelectedCategoryFilter('all');
                setCurrentView('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onDiscoverDesign={() => handleNavigateSection('curated-retreat')}
            />

            {/* 4. Find Your Space (6 spaces) */}
            <FindYourSpace
              onSelectSpace={handleSelectSpace}
              onExploreAll={() => {
                setSelectedCategoryFilter('all');
                setCurrentView('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Find Your Style (Collections) */}
            <FindYourStyle
              onSelectStyle={handleSelectStyle}
              onExploreCollections={() => {
                setSelectedCategoryFilter('all');
                setCurrentView('catalogue');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 6. Explore Our Range (8 category cards with HD imagery) */}
            <ExploreOurRange onSelectCategory={handleSelectCategory} />

            {/* 7. Curated Spaces: The Contemporary Retreat */}
            <CuratedSpaces
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddEnsembleToCart={handleAddEnsembleToCart}
            />

            {/* 8. Customer Favourites (Bestsellers with finish swatches & visible buttons) */}
            <CustomerFavourites
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
            />

            {/* 9. Trust, Verified Architect Reviews & Technical FAQ Accordion */}
            <TrustAndFAQ />
          </>
        ) : (
          /* Dedicated Premium Product Listing Page (PLP) with Advanced Filters & Sorting */
          <>
            <ProductListingPage
              initialCategory={selectedCategoryFilter}
              onSelectProduct={(prod) => setSelectedProduct(prod)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isWishlisted={isWishlisted}
              onBackToHome={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            {/* Trust and Technical FAQ on PLP too */}
            <TrustAndFAQ />
          </>
        )}
      </main>

      {/* Architectural Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenTrade={() => setIsTradeOpen(true)}
      />

      {/* Drawers, Modals and Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenCheckout={handleOpenCheckoutFromCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => setWishlist((w) => w.filter((p) => p.id !== id))}
        onAddToCart={handleAddToCart}
      />

      {/* Full-featured Luxury PDP Modal with 3D viewer & spec downloads */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onOpenTradeQuote={(prod) => {
          setSelectedProduct(null);
          setIsTradeOpen(true);
        }}
      />

      {/* Complete Checkout Flow Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        subtotal={cartSubtotal}
        discount={checkoutDiscount}
        discountCode={checkoutDiscountCode}
        onClearCart={handleClearCart}
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
        <div className="fixed bottom-6 right-6 z-50 bg-[#24211E] text-white px-4 py-2.5 rounded-xs shadow-xl flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 border border-[#3E3A34]">
          <Check className="w-4 h-4 text-[#C4B29E]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-stone-400 hover:text-white cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
