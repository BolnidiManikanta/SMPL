import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STYLES_DATA } from '../data/bathwareData';
import { StyleCollection } from '../types';

interface FindYourStyleProps {
  onSelectStyle: (style: StyleCollection) => void;
  onExploreCollections: () => void;
}

export const FindYourStyle: React.FC<FindYourStyleProps> = ({
  onSelectStyle,
  onExploreCollections,
}) => {
  return (
    <section id="collections" className="w-full bg-[#F8F6F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Title & Editorial Prose */}
          <div className="lg:col-span-3 pr-0 lg:pr-4">
            <span className="block text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#584636] font-semibold mb-3">
              COLLECTIONS
            </span>

            <h2 className="font-serif text-[34px] sm:text-[44px] text-[#1C1917] font-normal tracking-tight leading-[1.1] mb-5">
              Find Your Style
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#36322D] leading-[1.65] font-normal mb-6">
              A curated range of designs, from contemporary minimalism to timeless classics, for every kind of space.
            </p>

            <button
              onClick={onExploreCollections}
              className="group inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#1C1917] hover:text-[#725C48] transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-4 decoration-[#B8AEA0] group-hover:decoration-[#725C48]">
                Explore All Collections
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 6 Style Cards in Row */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
            {STYLES_DATA.map((style) => (
              <div
                key={style.id}
                onClick={() => onSelectStyle(style)}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                {/* Image Card */}
                <div className="w-full overflow-hidden rounded-[2px] bg-[#E5DFD4] aspect-[4/5] border border-[#DDD5C8] group-hover:border-[#725C48] shadow-xs group-hover:shadow-md transition-all">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <p className="text-[13.5px] sm:text-[14.5px] font-medium text-[#1C1917] group-hover:text-[#725C48] transition-colors mt-2.5">
                  {style.title}
                </p>

                {/* ALWAYS-VISIBLE Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStyle(style);
                  }}
                  className="w-full mt-2 py-1.5 px-2 bg-[#EFEAE2] group-hover:bg-[#725C48] text-[#1C1917] group-hover:text-white rounded-[2px] text-[10.5px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer border border-[#DDD5C8] group-hover:border-[#725C48]"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
