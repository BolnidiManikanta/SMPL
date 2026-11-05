import React, { useState } from 'react';
import { ArrowRight, Check, Eye, ShoppingBag } from 'lucide-react';
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

  const totalEnsemblePrice = CURATED_RETREAT_PRODUCTS.reduce((acc, item) => acc + item.price, 0);

  const handleAddAll = () => {
    onAddEnsembleToCart(CURATED_RETREAT_PRODUCTS);
    setEnsembleAdded(true);
    setTimeout(() => setEnsembleAdded(false), 2400);
  };

  return (
    <section id="curated-retreat" className="w-full bg-[#F8F6F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Big Wide Architectural Photograph (1600px HD) */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-[3px] bg-[#E2DBD0] shadow-xl border border-[#DDD5C8]">
            <img
              src="/images/curated_retreat_large.png"
              alt="The Contemporary Retreat"
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-103"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          {/* Right Column: Editorial, Thumbnails & Prominent Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="block text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#584636] font-semibold mb-3">
              CURATED ENSEMBLE
            </span>

            <h2 className="font-serif text-[36px] sm:text-[46px] text-[#1C1917] font-normal tracking-tight leading-[1.08] mb-4">
              The Contemporary<br className="hidden sm:inline" /> Retreat
            </h2>

            <p className="text-[14.5px] sm:text-[15.5px] text-[#36322D] leading-[1.65] font-normal mb-6 max-w-md">
              A balanced composition of clean lines, warm textures, and refined fittings engineered in matching brushed brass and honed travertine stone.
            </p>

            {/* 4 BIG Crystal-Clear Product Thumbnails */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-7">
              {CURATED_RETREAT_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setActiveItem(prod);
                    onSelectProduct(prod);
                  }}
                  className="group relative cursor-pointer aspect-square rounded-[3px] bg-[#F4EFEA] border border-[#DDD5C8] hover:border-[#725C48] flex flex-col items-center justify-center p-2.5 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  title={`${prod.name} - $${prod.price}`}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-mono font-medium text-[#1C1917] mt-1">
                    ${prod.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleAddAll}
                className={`py-3.5 px-6 rounded-[2px] text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99] ${
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
                    <span>Add Full Ensemble — ${totalEnsemblePrice.toLocaleString()}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onSelectProduct(activeItem)}
                className="py-3.5 px-6 rounded-[2px] text-xs uppercase tracking-[0.14em] font-semibold text-[#1C1917] bg-white border border-[#DDD5C8] hover:border-[#725C48] hover:bg-[#F2ECE2] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View Selected Piece</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
