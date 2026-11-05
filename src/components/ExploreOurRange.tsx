import React from 'react';
import { CATEGORIES_DATA } from '../data/bathwareData';
import { ProductCategoryItem } from '../types';

interface ExploreOurRangeProps {
  onSelectCategory: (category: ProductCategoryItem) => void;
}

export const ExploreOurRange: React.FC<ExploreOurRangeProps> = ({ onSelectCategory }) => {
  return (
    <section id="explore-range" className="w-full bg-[#F8F6F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="block text-[11px] uppercase tracking-[0.22em] text-[#786E64] font-medium mb-3">
            SHOP BY PRODUCT
          </span>
          <h2 className="font-serif text-[34px] sm:text-[42px] text-[#221F1B] font-normal tracking-tight">
            Explore Our Range
          </h2>
        </div>

        {/* 8 Product Category Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 text-center">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer flex flex-col items-center p-2 rounded-sm hover:bg-[#F0EAE0]/60 transition-colors"
            >
              {/* Product silhouette container */}
              <div className="w-full h-24 sm:h-28 flex items-center justify-center mb-3">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Title label */}
              <h3 className="text-[12.5px] sm:text-[13px] font-normal text-[#24211E] group-hover:text-[#725C48] transition-colors leading-tight">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
