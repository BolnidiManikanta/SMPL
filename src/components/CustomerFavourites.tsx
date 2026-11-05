import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Eye, Plus, Check, ShoppingBag } from 'lucide-react';
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

  const itemsPerPage = 4;
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
    }, 2000);
  };

  return (
    <section id="bestsellers" className="w-full bg-[#F8F6F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header with Title and Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="block text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#584636] font-semibold mb-2.5">
              BESTSELLERS
            </span>
            <h2 className="font-serif text-[36px] sm:text-[46px] text-[#1C1917] font-normal tracking-tight">
              Customer Favourites
            </h2>
          </div>

          {/* Right Navigation & Filter Tabs */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {/* Tabs */}
            <div className="flex items-center space-x-6 text-[13px] sm:text-[14px] tracking-wide font-medium">
              <button
                onClick={() => {
                  setActiveTab('bestsellers');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'bestsellers'
                    ? 'text-[#1C1917] font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Bestsellers
                {activeTab === 'bestsellers' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C1917]" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab('new');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'new'
                    ? 'text-[#1C1917] font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                New Arrivals
                {activeTab === 'new' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C1917]" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab('featured');
                  setPageIndex(0);
                }}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeTab === 'featured'
                    ? 'text-[#1C1917] font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Featured
                {activeTab === 'featured' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C1917]" />
                )}
              </button>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                disabled={pageIndex === 0}
                aria-label="Previous products"
                className="w-10 h-10 rounded-full border border-[#DDD5C8] bg-white flex items-center justify-center text-stone-800 hover:bg-[#EFEAE2] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={() => setPageIndex((p) => (p + 1 < maxPages ? p + 1 : 0))}
                aria-label="Next products"
                className="w-10 h-10 rounded-full border border-[#DDD5C8] bg-white flex items-center justify-center text-stone-800 hover:bg-[#EFEAE2] transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Spacious Product Cards Grid with BIG crystal-clear images and ALWAYS-VISIBLE buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {displayedProducts.map((prod) => {
            const activeFinish = selectedFinishes[prod.id] || prod.finishes[0]?.name || 'Standard';
            const wish = isWishlisted(prod.id);
            const added = addedAnimation[prod.id];

            return (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#E3DDD2] hover:border-[#725C48] rounded-[3px] p-5 sm:p-6 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* BIG Prominent HD Image Stage (320px - 380px tall) */}
                <div className="relative w-full h-80 sm:h-88 lg:h-96 bg-[#F4EFEA] rounded-[2px] overflow-hidden flex items-center justify-center p-6 mb-5 border border-[#EAE4D9]">
                  {/* Crystal-clear 1024x1024 Studio Image */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-108"
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
                    className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                      wish
                        ? 'bg-[#725C48] text-white'
                        : 'bg-white/95 hover:bg-white text-stone-700 hover:text-[#725C48]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wish ? 'fill-white stroke-none' : 'stroke-[1.75]'}`} />
                  </button>

                  {/* Quick View Tag in Top Left */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-[#DDD5C8] text-[10px] uppercase tracking-wider font-semibold text-stone-700 shadow-xs">
                    Ultra HD
                  </div>
                </div>

                {/* Finish Swatches */}
                <div className="flex items-center space-x-2 mb-3">
                  {prod.finishes.map((f) => (
                    <button
                      key={f.code}
                      onClick={(e) => handleFinishChange(prod.id, f.name, e)}
                      title={f.name}
                      className={`w-4 h-4 rounded-full transition-transform cursor-pointer border ${
                        activeFinish === f.name
                          ? 'ring-2 ring-offset-1 ring-[#725C48] scale-110 border-white'
                          : 'border-black/25 hover:scale-105'
                      }`}
                      style={{ backgroundColor: f.hex }}
                    />
                  ))}
                  <span className="text-[11px] text-stone-600 ml-1.5 font-medium truncate">
                    {activeFinish}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="text-[16px] sm:text-[17px] font-medium text-[#1C1917] group-hover:text-[#725C48] transition-colors line-clamp-1 mb-1">
                  {prod.name}
                </h3>

                {/* Category / Collection Note */}
                <p className="text-[12.5px] text-stone-600 line-clamp-1 mb-4 font-normal">
                  {prod.category} · {prod.collection}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4 pt-3 border-t border-[#EAE4D9]">
                  <span className="font-mono font-semibold text-[#1C1917] text-[17px]">
                    ${prod.price.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-stone-500 font-normal">
                    Tax included
                  </span>
                </div>

                {/* ALWAYS-VISIBLE Action Buttons: Add to Bag & Quick View */}
                <div className="mt-auto grid grid-cols-5 gap-2 pt-1">
                  <button
                    onClick={(e) => handleAdd(prod, e)}
                    className={`col-span-4 py-3 px-3 rounded-[2px] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99] ${
                      added
                        ? 'bg-emerald-800 text-white'
                        : 'bg-[#725C48] hover:bg-[#584636] text-white hover:shadow'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(prod);
                    }}
                    title="Quick View Details"
                    className="col-span-1 py-3 bg-[#EFEAE2] hover:bg-[#E5DFD4] text-[#1C1917] border border-[#DDD5C8] rounded-[2px] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
