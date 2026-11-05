import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Eye, Plus, Check } from 'lucide-react';
import { BESTSELLER_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface CustomerFavouritesProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const CustomerFavourites: React.FC<CustomerFavouritesProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [activeTab, setActiveTab] = useState<'bestsellers' | 'new' | 'featured'>('bestsellers');
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});
  const [pageIndex, setPageIndex] = useState(0);

  const filteredProducts = BESTSELLER_PRODUCTS.filter((prod) => {
    if (activeTab === 'bestsellers') return prod.isBestseller;
    if (activeTab === 'new') return prod.isNew || prod.isBestseller;
    if (activeTab === 'featured') return prod.isFeatured || prod.isBestseller;
    return true;
  });

  const itemsPerPage = 5;
  const maxPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  const handleFinishChange = (productId: string, finishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinishes((prev) => ({ ...prev, [productId]: finishName }));
  };

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const finish = selectedFinishes[product.id] || product.finishes[0]?.name || 'Standard';
    onAddToCart(product, finish);
    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="bestsellers" className="w-full bg-[#F8F6F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header with Title and Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#786E64] font-medium mb-3">
              BESTSELLERS
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] text-[#221F1B] font-normal tracking-tight">
              Customer Favourites
            </h2>
          </div>

          {/* Right Navigation & Filter Tabs */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {/* Tabs */}
            <div className="flex items-center space-x-6 text-[13px] tracking-wide">
              <button
                onClick={() => {
                  setActiveTab('bestsellers');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'bestsellers'
                    ? 'text-[#221F1B] font-medium'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Bestsellers
                {activeTab === 'bestsellers' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#221F1B]" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab('new');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'new'
                    ? 'text-[#221F1B] font-medium'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                New Arrivals
                {activeTab === 'new' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#221F1B]" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab('featured');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'featured'
                    ? 'text-[#221F1B] font-medium'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                Featured
                {activeTab === 'featured' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#221F1B]" />
                )}
              </button>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                disabled={pageIndex === 0}
                aria-label="Previous products"
                className="w-8 h-8 rounded-full border border-[#DDD5C8] flex items-center justify-center text-stone-700 hover:bg-[#EFEAE2] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setPageIndex((p) => (p + 1 < maxPages ? p + 1 : 0))}
                aria-label="Next products"
                className="w-8 h-8 rounded-full border border-[#DDD5C8] flex items-center justify-center text-stone-700 hover:bg-[#EFEAE2] transition-all cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Column Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedProducts.map((prod) => {
            const activeFinish = selectedFinishes[prod.id] || prod.finishes[0]?.name || 'Standard';
            const wish = isWishlisted(prod.id);
            const added = addedAnimation[prod.id];

            return (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#E5DFD4] hover:border-[#725C48] rounded-[2px] p-4 transition-all hover:shadow-sm"
              >
                {/* Image & Wishlist Container */}
                <div className="relative aspect-square w-full bg-[#F3EFE7] rounded-[2px] overflow-hidden flex items-center justify-center p-4 mb-4">
                  {/* Product Image */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Wishlist Button in Top Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(prod);
                    }}
                    aria-label="Save to wishlist"
                    className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      wish
                        ? 'bg-[#725C48] text-white shadow-xs'
                        : 'bg-white/80 hover:bg-white text-stone-600 hover:text-[#725C48]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-white stroke-none' : 'stroke-[1.5]'}`} />
                  </button>

                  {/* Quick Action Overlay on hover */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleAdd(prod, e)}
                      className="flex-1 py-1.5 px-2 bg-[#221F1B] hover:bg-[#3A352F] text-white text-[11px] font-medium rounded-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                    >
                      {added ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(prod);
                      }}
                      title="Quick View"
                      className="w-7 h-7 bg-white/90 hover:bg-white text-stone-800 rounded-xs flex items-center justify-center transition-colors shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Finish Swatches */}
                <div className="flex items-center space-x-1.5 mb-2.5">
                  {prod.finishes.map((f) => (
                    <button
                      key={f.code}
                      onClick={(e) => handleFinishChange(prod.id, f.name, e)}
                      title={f.name}
                      className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer border ${
                        activeFinish === f.name
                          ? 'ring-1 ring-offset-1 ring-[#725C48] scale-110 border-white'
                          : 'border-black/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: f.hex }}
                    />
                  ))}
                  <span className="text-[10px] text-stone-500 ml-1 truncate">
                    {activeFinish}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-[13.5px] font-medium text-[#24211E] group-hover:text-[#725C48] transition-colors line-clamp-1 mb-1">
                  {prod.name}
                </h3>

                {/* Category / Material Note */}
                <p className="text-[11px] text-stone-500 line-clamp-1 mb-3">
                  {prod.category} · {prod.collection}
                </p>

                {/* Price */}
                <div className="mt-auto pt-2 border-t border-[#EAE4D9] flex items-center justify-between text-xs">
                  <span className="font-mono font-medium text-[#221F1B] text-[13.5px]">
                    ${prod.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-400 font-normal">
                    Tax included
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
