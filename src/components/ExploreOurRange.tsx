import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/bathwareData';
import { ProductCategoryItem } from '../types';

interface ExploreOurRangeProps {
  onSelectCategory: (category: ProductCategoryItem) => void;
}

export const ExploreOurRange: React.FC<ExploreOurRangeProps> = ({ onSelectCategory }) => {
  return (
    <section id="explore-range" className="w-full bg-[#F8F6F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="block text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#584636] font-semibold mb-2.5">
              SHOP BY PRODUCT CATEGORY
            </span>
            <h2 className="font-serif text-[36px] sm:text-[46px] text-[#1C1917] font-normal tracking-tight">
              Explore Our Range
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Architectural bathware and precision brass fittings crafted from forged solid brass, marine stainless steel, and monolithic stone.
          </p>
        </div>

        {/* 8 Product Category Cards in Spacious 4-Column Grid with BIG HD images and Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#E3DDD2] hover:border-[#725C48] p-5 sm:p-6 rounded-[3px] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* BIG HD Category Showcase (280px tall) */}
              <div className="w-full h-64 sm:h-72 flex items-center justify-center p-6 mb-4 bg-[#F4EFEA] rounded-[2px] border border-[#EAE4D9] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Title & Count Label */}
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-[17px] font-medium text-[#1C1917] group-hover:text-[#725C48] transition-colors leading-tight">
                  {cat.title}
                </h3>
                <span className="text-[11px] text-stone-500 font-mono">
                  {cat.count} items
                </span>
              </div>

              {/* ALWAYS-VISIBLE Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory(cat);
                }}
                className="mt-auto w-full py-2.5 px-3 bg-[#EFEAE2] group-hover:bg-[#725C48] text-[#1C1917] group-hover:text-white border border-[#DDD5C8] group-hover:border-[#725C48] rounded-[2px] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View Range</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
