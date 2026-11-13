import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_STYLES_DATA as STYLES_DATA } from '../data/homeData';
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
    <section id="collections" className="cv-auto w-full bg-[#FAF7F2] py-14 sm:py-18 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Title & Editorial Prose */}
          <div className="lg:col-span-3 pr-0 lg:pr-4">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#66462C] font-semibold mb-2.5">
              COLLECTIONS
            </span>

            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#1E1915] font-normal tracking-tight leading-[1.1] mb-4">
              Find Your Style
            </h2>

            <p className="text-[14px] sm:text-[14.5px] text-[#554E46] leading-[1.65] font-normal mb-6">
              A curated range of designs, from contemporary minimalism to timeless classics, for every kind of space.
            </p>

            <button
              onClick={onExploreCollections}
              className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1915] hover:text-[#66462C] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Explore All Collections</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 6 Style Cards in Row */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
            {STYLES_DATA.map((style) => (
              <button
                key={style.id}
                onClick={() => onSelectStyle(style)}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                {/* Image Card */}
                <div className="w-full overflow-hidden rounded-xl bg-[#E5DFD4] aspect-square border border-[#E5DDD0] group-hover:border-[#725C48] shadow-xs group-hover:shadow-md transition-[border-color,box-shadow] duration-300">
                  <img
                    src={style.image}
                    alt={style.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title */}
                <p className="text-[13.5px] sm:text-[14px] font-serif font-medium text-[#1E1915] group-hover:text-[#66462C] transition-colors mt-2.5">
                  {style.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
