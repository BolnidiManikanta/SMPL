import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FindYourSpace } from './components/FindYourSpace';
import { FindYourStyle } from './components/FindYourStyle';
import { ExploreOurRange } from './components/ExploreOurRange';
import { CuratedSpaces } from './components/CuratedSpaces';
import { CustomerFavourites } from './components/CustomerFavourites';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { TradeModal } from './components/TradeModal';
import { Footer } from './components/Footer';
import { Product, CartItem, SpaceCategory, StyleCollection, ProductCategoryItem } from './types';
import { BESTSELLER_PRODUCTS } from './data/bathwareData';
import { Check, X } from 'lucide-react';

export default function App() {
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

  const handleSelectSpace = (space: SpaceCategory) => {
    showToast(`Filtering by space: ${space.title}`);
    const el = document.getElementById('bestsellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectStyle = (style: StyleCollection) => {
    showToast(`Selected collection: ${style.title} (${style.aesthetic})`);
    const el = document.getElementById('bestsellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (category: ProductCategoryItem) => {
    showToast(`Selected range: ${category.title}`);
    const el = document.getElementById('bestsellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
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
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#24211E]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsTradeOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Flow matching exact design */}
      <main className="flex-1">
        {/* 3. Hero Section: Elevate the Everyday. */}
        <HeroSection
          onExploreCollections={() => handleNavigateSection('collections')}
          onDiscoverDesign={() => handleNavigateSection('curated-retreat')}
        />

        {/* 4. Find Your Space (6 cards) */}
        <FindYourSpace
          onSelectSpace={handleSelectSpace}
          onExploreAll={() => handleNavigateSection('explore-range')}
        />

        {/* 5. Find Your Style (Collections - 6 cards) */}
        <FindYourStyle
          onSelectStyle={handleSelectStyle}
          onExploreCollections={() => handleNavigateSection('bestsellers')}
        />

        {/* 6. Explore Our Range (8 category icons) */}
        <ExploreOurRange onSelectCategory={handleSelectCategory} />

        {/* 7. Curated Spaces: The Contemporary Retreat */}
        <CuratedSpaces
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddEnsembleToCart={handleAddEnsembleToCart}
        />

        {/* 8. Customer Favourites (Bestsellers with finish swatches) */}
        <CustomerFavourites
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
        />
      </main>

      {/* 9. Architectural Footer */}
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
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
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
        <div className="fixed bottom-6 right-6 z-50 bg-[#24211E] text-white px-4 py-2.5 rounded-sm shadow-xl flex items-center gap-2.5 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 border border-[#3E3A34]">
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
