import React, { useState } from 'react';
import { Heart, Eye, Plus, Check, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { BESTSELLER_PRODUCTS, ALL_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface CustomerFavouritesProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onOpenCatalog?: () => void;
}

export const CustomerFavourites: React.FC<CustomerFavouritesProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenCatalog,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categoryTabs = [
    { id: 'all', label: 'All Highlights', count: 24 },
    { id: 'Faucets', label: 'Basin Mixers', count: 8 },
    { id: 'Showers', label: 'Showers & Spa', count: 8 },
    { id: 'Bathroom', label: 'Bathtubs & Basins', count: 8 },
    { id: 'Sanitaryware', label: 'Toilets & Sanitary', count: 7 },
    { id: 'Kitchen', label: 'Kitchen Mixers', count: 7 },
  ];

  const filteredProducts = React.useMemo(() => {
    if (activeCategoryTab === 'all') {
      return BESTSELLER_PRODUCTS;
    }
    return ALL_PRODUCTS.filter((p) => p.department.toLowerCase() === activeCategoryTab.toLowerCase());
  }, [activeCategoryTab]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

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
    <section id="bestsellers" className="w-full bg-[#FAF7F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="block text-[11px] uppercase tracking-[0.24em] text-[#66462C] font-semibold">
                ARCHITECTURAL SPECIFICATIONS
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-[11px] text-stone-600 uppercase tracking-widest">
                Showroom Curation
              </span>
            </div>
            <h2 className="font-serif text-[34px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-tight">
              Signature Fixtures &amp; Showpieces
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-[#554E46] max-w-xl mt-2 leading-relaxed">
              Precision-machined brassware, monolithic carved stone bathtubs, and thermostatic wellness fittings engineered for refined architectural interiors.
            </p>
          </div>

          {/* Quick Catalogue Direct Trigger */}
          {onOpenCatalog && (
            <button
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1915] hover:text-[#66462C] transition-colors cursor-pointer self-start md:self-end whitespace-nowrap shrink-0"
            >
              <span>Explore All 63 Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#E8E2D7]">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategoryTab(tab.id);
                setVisibleCount(12);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeCategoryTab === tab.id
                  ? 'bg-[#221F1B] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F3EFE8] text-stone-700 border border-[#E5DDD0]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] tabular-nums px-1.5 py-0.5 rounded-sm ${
                activeCategoryTab === tab.id ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* 4-Column Luxury Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {displayedProducts.map((prod) => {
            const activeFinish = selectedFinishes[prod.id] || prod.finishes[0]?.name || 'Standard';
            const wish = isWishlisted(prod.id);
            const added = addedAnimation[prod.id];

            return (
              <div
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group cursor-pointer flex flex-col bg-white border border-[#E5DDD0] hover:border-[#725C48] rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Top Card Kicker: Model ID + Space */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 mb-2">
                  <span className="font-mono tracking-wider">{prod.modelNumber}</span>
                  <span className="text-[11px] text-[#665C52] font-medium">
                    {prod.space}
                  </span>
                </div>

                {/* Crisp Editorial HD Product Image Container */}
                <div className="relative w-full aspect-[4/5] bg-[#F6F3EE] rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Wishlist Button in Top Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(prod);
                    }}
                    aria-label="Save to architectural board"
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm z-20 ${
                      wish
                        ? 'bg-[#725C48] text-white'
                        : 'bg-white/90 hover:bg-white text-stone-700 hover:text-[#725C48]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wish ? 'fill-white stroke-none' : 'stroke-[1.5]'}`} />
                  </button>

                  {/* Quick Action Overlay on hover */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 z-10">
                    <button
                      onClick={(e) => handleAdd(prod, e)}
                      className="flex-1 py-2.5 px-3 bg-[#1E1B18] hover:bg-[#38332E] text-white text-[11px] uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      {added ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(prod);
                      }}
                      className="p-2.5 bg-white/95 hover:bg-white text-stone-800 rounded-xs shadow-lg transition-colors cursor-pointer"
                      title="Inspect Specifications"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Interactive Finish Swatches */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#F0EAE0]">
                  <div className="flex items-center space-x-1.5">
                    {prod.finishes.map((f) => (
                      <button
                        key={f.code}
                        onClick={(e) => handleFinishChange(prod.id, f.name, e)}
                        title={f.name}
                        className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                          activeFinish === f.name
                            ? 'ring-2 ring-[#725C48] ring-offset-1 scale-110 border-stone-800'
                            : 'border-black/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: f.hex }}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-[#725C48] font-medium tracking-tight">
                    {activeFinish}
                  </span>
                </div>

                {/* Title & Material Specs */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[18px] sm:text-[19px] text-[#1E1B18] font-normal leading-snug group-hover:text-[#725C48] transition-colors mb-1.5 line-clamp-2">
                      {prod.name}
                    </h3>
                    <p className="text-[11.5px] text-[#635B52] line-clamp-1 mb-3">
                      {prod.specs.material} · {prod.specs.mountingType}
                    </p>
                  </div>

                  <div className="flex items-baseline justify-between pt-2 border-t border-[#F2ECE2]">
                    <span className="text-base sm:text-lg font-medium text-[#1E1B18] tabular-nums tracking-tight">
                      ${prod.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium tracking-wide group-hover:text-[#725C48] transition-colors flex items-center gap-1">
                      <span>View Specs</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Expand / View All Catalogue CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          {visibleCount < filteredProducts.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="py-3 px-7 bg-white border border-[#DCD2C3] hover:border-[#725C48] text-[#1E1915] text-xs uppercase tracking-[0.14em] font-semibold rounded-[6px] transition-all hover:bg-[#F2ECE2] shadow-xs cursor-pointer"
            >
              Load More Fixtures ({filteredProducts.length - visibleCount} remaining)
            </button>
          )}

          {onOpenCatalog && (
            <button
              onClick={onOpenCatalog}
              className="py-3 px-7 bg-[#725C48] hover:bg-[#5C4938] text-white text-xs uppercase tracking-[0.14em] font-semibold rounded-[6px] transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Browse Full 63-Model Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
