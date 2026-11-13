import React, { useState } from 'react';
import { ArrowRight, Check, Eye, ShoppingBag, Plus } from 'lucide-react';
import { CURATED_RETREAT_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface CuratedSpacesProps {
  onSelectProduct: (product: Product) => void;
  onAddEnsembleToCart: (products: Product[]) => void;
}

export const CuratedSpaces: React.FC<CuratedSpacesProps> = ({
  onSelectProduct,
  onAddEnsembleToCart,
}) => {
  const [activeItem, setActiveItem] = useState<Product>(CURATED_RETREAT_PRODUCTS[0]);
  const [ensembleAdded, setEnsembleAdded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const totalEnsemblePrice = CURATED_RETREAT_PRODUCTS.reduce((acc, item) => acc + item.price, 0);

  const handleAddAll = () => {
    onAddEnsembleToCart(CURATED_RETREAT_PRODUCTS);
    setEnsembleAdded(true);
    setTimeout(() => setEnsembleAdded(false), 2400);
  };

  // 4 Interactive Hotspot coordinates on the room photograph
  const hotspots = [
    {
      id: 'prod_faucet_01',
      title: 'Basin Mixer',
      top: '56%',
      left: '68%',
      product: CURATED_RETREAT_PRODUCTS[0],
    },
    {
      id: 'prod_shower_01',
      title: 'Overhead Rain Shower',
      top: '28%',
      left: '52%',
      product: CURATED_RETREAT_PRODUCTS[1] || CURATED_RETREAT_PRODUCTS[0],
    },
    {
      id: 'prod_shsys_01',
      title: 'Thermostatic Control',
      top: '64%',
      left: '81%',
      product: CURATED_RETREAT_PRODUCTS[2] || CURATED_RETREAT_PRODUCTS[0],
    },
    {
      id: 'prod_basin_01',
      title: 'Stone Vessel Basin',
      top: '68%',
      left: '18%',
      product: CURATED_RETREAT_PRODUCTS[3] || CURATED_RETREAT_PRODUCTS[0],
    },
  ];

  return (
    <section id="curated-retreat" className="w-full bg-[#F8F6F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Room Lookbook with Clickable Hotspots */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-xl bg-[#E2DBD0] shadow-lg border border-[#E5DDD0]">
            <img
              src="/images/curated_retreat_suite.webp"
              alt="The Contemporary Retreat"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
            />

            {/* Subtle banner in top left */}
            <div className="absolute top-4 left-4 bg-[#1E1915]/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-[6px] text-[11px] font-medium tracking-wider uppercase z-20 shadow-xs">
              <span>Interactive Suite Lookbook · Click Pins</span>
            </div>

            {/* Hotspot Pins */}
            {hotspots.map((spot) => {
              const isHovered = activeHotspot === spot.id;
              const isSelected = activeItem.id === spot.product.id;

              return (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  onMouseEnter={() => {
                    setActiveHotspot(spot.id);
                    setActiveItem(spot.product);
                  }}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <button
                    onClick={() => {
                      setActiveItem(spot.product);
                      onSelectProduct(spot.product);
                    }}
                    aria-label={`View ${spot.product.name}`}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg ${
                      isSelected || isHovered
                        ? 'bg-[#725C48] text-white scale-125 ring-4 ring-white/60'
                        : 'bg-white/90 text-stone-900 hover:bg-[#725C48] hover:text-white hover:scale-110'
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  {/* Floating Tooltip Card */}
                  {(isHovered || isSelected) && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-white/95 backdrop-blur-md border border-[#DDD5C8] rounded-[2px] shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-200 z-40">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#725C48] font-semibold mb-1">
                        {spot.title}
                      </div>
                      <div className="font-serif text-[13.5px] text-[#1E1B18] font-medium leading-snug line-clamp-1">
                        {spot.product.name}
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200 text-xs">
                        <span className="font-mono font-medium text-stone-900">
                          ${spot.product.price.toLocaleString()}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(spot.product);
                          }}
                          className="text-[#725C48] font-semibold hover:underline cursor-pointer flex items-center gap-0.5"
                        >
                          <span>Inspect</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial, Thumbnails & Prominent Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="block text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#725C48] font-semibold mb-3">
              CURATED ARCHITECTURAL ENSEMBLE
            </span>

            <h2 className="font-serif text-[38px] sm:text-[48px] text-[#1C1917] font-normal tracking-tight leading-[1.08] mb-4">
              The Contemporary<br className="hidden sm:inline" /> Retreat
            </h2>

            <p className="text-[14.5px] sm:text-[15.5px] text-[#423D37] leading-[1.65] font-normal mb-7 max-w-md">
              A balanced composition of clean lines, warm textures, and refined fittings engineered in matching brushed bronze brassware and honed organic limestone.
            </p>

            {/* 4 Crystal-Clear Product Thumbnails */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-8">
              {CURATED_RETREAT_PRODUCTS.map((prod) => {
                const isSelected = activeItem.id === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => {
                      setActiveItem(prod);
                      onSelectProduct(prod);
                    }}
                    className={`group relative cursor-pointer aspect-square rounded-lg bg-[#FAF8F5] border p-2 flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5 ${
                      isSelected
                        ? 'border-[#725C48] ring-2 ring-[#725C48]/30 bg-white shadow-sm'
                        : 'border-[#E5DDD0] hover:border-[#725C48]'
                    }`}
                    title={`${prod.name} - $${prod.price}`}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-1.5 bottom-1.5 bg-[#1E1915]/85 backdrop-blur-xs text-white text-[10px] tabular-nums font-medium text-center py-0.5 rounded-sm">
                      ${prod.price}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleAddAll}
                className={`py-3.5 px-6 rounded-[6px] text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99] whitespace-nowrap ${
                  ensembleAdded
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#725C48] hover:bg-[#584636] text-white hover:shadow-md'
                }`}
              >
                {ensembleAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Ensemble Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Full Suite — ${totalEnsemblePrice.toLocaleString()}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onSelectProduct(activeItem)}
                className="py-3.5 px-6 rounded-[6px] text-xs uppercase tracking-[0.14em] font-semibold text-[#1E1915] bg-white border border-[#DCD2C3] hover:border-[#725C48] hover:bg-[#F2ECE2] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>Inspect Selected Piece</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
