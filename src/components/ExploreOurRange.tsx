import React from 'react';
import { CATEGORIES_DATA } from '../data/bathwareData';
import { ProductCategoryItem } from '../types';

interface ExploreOurRangeProps {
  onSelectCategory: (category: ProductCategoryItem) => void;
}

export const ExploreOurRange: React.FC<ExploreOurRangeProps> = ({ onSelectCategory }) => {
  return (
    <section id="explore-range" className="w-full bg-[#F8F6F2] py-16 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
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

        {/* 7 Product Category Icons Grid - BIG, CLEAR, HD */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-5 text-center">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer flex flex-col items-center p-2.5 rounded-lg hover:bg-stone-200/40 transition-all duration-200"
            >
              {/* Crisp studio product presentation */}
              <div className="w-full aspect-square flex items-center justify-center mb-3 overflow-hidden rounded-md bg-[#FAF8F5] border border-[#E5DFD4] group-hover:border-[#8E7864] group-hover:shadow-md transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-106 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Title label */}
              <h3 className="text-[13px] sm:text-[14px] font-medium text-[#24211E] group-hover:text-[#725C48] transition-colors leading-tight">
                {cat.title}
              </h3>
              <span className="text-[11px] text-stone-500 font-normal mt-1">
                {cat.count} models
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
