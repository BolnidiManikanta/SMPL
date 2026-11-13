import React, { useState } from 'react';
import { ArrowRight, Check, Eye, Heart, Plus } from 'lucide-react';
import { HOME_SHOWCASE_PRODUCTS } from '../data/homeData';
import { Product } from '../types';

interface SelectedExceptionalSpacesProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onExploreCatalogue: () => void;
}

const CURATED_PRODUCT_IDS = [
  'prod_faucet_01',
  'prod_faucet_02',
  'prod_faucet_08',
  'prod_faucet_10',
  'prod_faucet_11',
  'prod_shower_01',
  'prod_shower_03',
  'prod_bath_01',
  'prod_basin_01',
  'prod_basin_05',
  'prod_toilet_01',
  'prod_kitchen_01',
];

export const SelectedExceptionalSpaces: React.FC<SelectedExceptionalSpacesProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onExploreCatalogue,
}) => {
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({});
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const showcaseProducts = HOME_SHOWCASE_PRODUCTS;

  const handleFinishPick = (productId: string, finishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFinishes((prev) => ({ ...prev, [productId]: finishName }));
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const finish = selectedFinishes[product.id] || product.finishes[0]?.name || 'Standard';
    onAddToCart(product, finish);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section
      id="bestsellers"
      className="cv-auto w-full bg-[#FAF7F2] py-16 sm:py-22 px-4 sm:px-6 lg:px-10 border-b border-[#E5DDD0]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-2.5">
              Architectural Product Showcase
            </span>
            <h2 className="font-serif text-[32px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-[1.1] text-balance">
              Selected for Exceptional Spaces
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#554E46] mt-2.5 leading-relaxed">
              Signature mixers, rainfall fixtures, monolithic stone basins, and architectural sanitaryware selected from the active SMPL specification catalogue.
            </p>
          </div>

          <button
            onClick={onExploreCatalogue}
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#1E1915] hover:text-[#6E5641] transition-colors cursor-pointer self-start md:self-end whitespace-nowrap shrink-0"
          >
            <span>Explore Full Catalogue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 12 Unique Curated Product Cards (4 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {showcaseProducts.map((prod) => {
            const activeFinish = selectedFinishes[prod.id] || prod.finishes[0]?.name || 'Standard';
            const wishlisted = isWishlisted(prod.id);
            const added = addedIds[prod.id];

            return (
              <article
                key={prod.id}
                onClick={() => onSelectProduct(prod)}
                className="group flex flex-col bg-white border border-[#E5DDD0] hover:border-[#8C735B] rounded-xl p-4 transition-[transform,border-color,box-shadow] duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Clean Metadata Kicker (zero pill boxes) */}
                <div className="flex items-center justify-between text-[11.5px] text-[#6D6359] mb-2.5">
                  <span className="font-mono tracking-wider text-[#5A5046]">{prod.modelNumber}</span>
                  <span className="truncate max-w-[140px]">{prod.category}</span>
                </div>

                {/* High-Resolution Unique Studio Product Image */}
                <div className="relative w-full aspect-square bg-[#F5F1EA] rounded-lg overflow-hidden mb-4">
                  <img
                    src={prod.image}
                    alt={`${prod.name} (${prod.modelNumber})`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Wishlist Heart Toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(prod);
                    }}
                    aria-label={wishlisted ? `Remove ${prod.name} from wishlist` : `Save ${prod.name} to wishlist`}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer z-10 ${
                      wishlisted
                        ? 'bg-[#6E5641] text-white'
                        : 'bg-white/95 hover:bg-white text-[#1E1915] hover:text-[#6E5641]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-white stroke-none' : 'stroke-[1.6]'}`} />
                  </button>
                </div>

                {/* Interactive Finish Swatches */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#EFEAE1]">
                  <div className="flex items-center gap-1.5">
                    {prod.finishes.map((finish) => (
                      <button
                        key={finish.code}
                        onClick={(e) => handleFinishPick(prod.id, finish.name, e)}
                        title={finish.name}
                        aria-label={`Select ${finish.name} finish`}
                        className={`w-4 h-4 rounded-full border transition-transform cursor-pointer ${
                          activeFinish === finish.name
                            ? 'ring-2 ring-[#6E5641] ring-offset-1 scale-110 border-[#1E1915]'
                            : 'border-black/20 hover:scale-105'
                        }`}
                        style={{ backgroundColor: finish.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#6E5641] truncate">
                    {activeFinish}
                  </span>
                </div>

                {/* Product Title, Spec Line & Pricing */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[18px] text-[#1E1915] group-hover:text-[#6E5641] transition-colors leading-snug line-clamp-2 mb-1">
                      {prod.name}
                    </h3>
                    <p className="text-[12px] text-[#665C52] line-clamp-1 mb-3">
                      {prod.specs.material} · {prod.specs.mountingType}
                    </p>
                  </div>

                  {/* Price & Explicit Specification / Product Actions */}
                  <div className="pt-2.5 border-t border-[#EFEAE1] space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[17px] font-semibold text-[#1E1915] tabular-nums">
                        ${prod.price.toLocaleString()}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(prod);
                        }}
                        className="text-[12px] font-semibold text-[#6E5641] hover:text-[#1E1915] inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>View Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(prod);
                        }}
                        className="py-2 px-3 rounded-md border border-[#DCD2C3] hover:border-[#6E5641] bg-[#FAF7F2] hover:bg-white text-[#1E1915] text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Product</span>
                      </button>

                      <button
                        onClick={(e) => handleQuickAdd(prod, e)}
                        className={`py-2 px-3 rounded-md text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                          added
                            ? 'bg-emerald-800 text-white'
                            : 'bg-[#1E1915] hover:bg-[#6E5641] text-white'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
