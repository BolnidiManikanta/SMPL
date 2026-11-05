import React, { useState } from 'react';
import { ArrowRight, Check, Eye } from 'lucide-react';
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
    <section id="curated-retreat" className="w-full bg-[#F8F6F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Wide Architectural Photograph */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-[2px] bg-[#E2DBD0]">
            <img
              src="/images/curated_retreat_crisp.png"
              alt="The Contemporary Retreat"
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          {/* Right Column: Editorial & 4 Thumbnails */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#786E64] font-medium mb-3">
              CURATED SPACES
            </span>

            <h2 className="font-serif text-[34px] sm:text-[44px] text-[#221F1B] font-normal tracking-tight leading-[1.1] mb-4">
              The Contemporary<br className="hidden sm:inline" /> Retreat
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#5A534B] leading-[1.65] font-normal mb-6 max-w-md">
              A balanced composition of clean lines, warm textures and refined details.
            </p>

            <button
              onClick={() => onSelectProduct(activeItem)}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#221F1B] hover:text-[#725C48] transition-colors mb-8 cursor-pointer w-fit"
            >
              <span className="underline underline-offset-4 decoration-[#B8AEA0] group-hover:decoration-[#725C48]">
                Explore the Look
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* 4 Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3 sm:gap-3.5">
              {CURATED_RETREAT_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setActiveItem(prod);
                    onSelectProduct(prod);
                  }}
                  className="group relative cursor-pointer aspect-square rounded-[2px] bg-[#EFEAE2] border border-[#DDD5C8] hover:border-[#725C48] flex items-center justify-center p-2 transition-all hover:bg-white"
                  title={`${prod.name} - $${prod.price}`}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
