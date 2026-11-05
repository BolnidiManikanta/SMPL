import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SPACES_DATA } from '../data/bathwareData';
import { SpaceCategory } from '../types';

interface FindYourSpaceProps {
  onSelectSpace: (space: SpaceCategory) => void;
  onExploreAll: () => void;
}

export const FindYourSpace: React.FC<FindYourSpaceProps> = ({
  onSelectSpace,
  onExploreAll,
}) => {
  return (
    <section className="w-full bg-[#F8F6F2] py-14 sm:py-18 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-10">
          <h2 className="font-serif text-[34px] sm:text-[44px] text-[#1C1917] font-normal tracking-tight">
            Find Your Space
          </h2>

          <button
            onClick={onExploreAll}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#725C48] transition-colors cursor-pointer"
          >
            <span className="underline underline-offset-4 decoration-[#B8AEA0] group-hover:decoration-[#725C48]">
              Explore All Spaces
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Space Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {SPACES_DATA.map((space) => (
            <div
              key={space.id}
              onClick={() => onSelectSpace(space)}
              className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#DDD5C8] hover:border-[#725C48] rounded-[3px] p-3 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Crisp Card Image matching exact architectural photography */}
              <div className="relative overflow-hidden rounded-[2px] bg-[#E3DDD2] aspect-[4/3] mb-3">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Title & Item Count */}
              <h3 className="text-[14px] font-semibold text-[#1C1917] group-hover:text-[#725C48] transition-colors leading-tight mb-1 truncate">
                {space.title}
              </h3>
              <span className="text-[11px] text-stone-500 font-mono mb-3">
                {space.itemCount} fittings
              </span>

              {/* ALWAYS-VISIBLE Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectSpace(space);
                }}
                className="mt-auto w-full py-2 bg-[#EFEAE2] group-hover:bg-[#725C48] text-[#1C1917] group-hover:text-white rounded-[2px] text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer border border-[#DDD5C8] group-hover:border-[#725C48]"
              >
                <span>View Space</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
