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
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#221F1B] font-normal tracking-tight">
            Find Your Space
          </h2>

          <button
            onClick={onExploreAll}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#221F1B] hover:text-[#725C48] transition-colors cursor-pointer"
          >
            <span className="underline underline-offset-4 decoration-[#B8AEA0] group-hover:decoration-[#725C48]">
              Explore All Spaces
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Space Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {SPACES_DATA.map((space) => (
            <div
              key={space.id}
              onClick={() => onSelectSpace(space)}
              className="group relative cursor-pointer overflow-hidden rounded-[2px] bg-[#E3DDD2] shadow-xs hover:shadow-md transition-all border border-[#DDD5C8] hover:border-[#725C48]"
            >
              {/* Crisp Card Image with built-in typography matching exact design */}
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Accessible hover indicator */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 text-[#221F1B] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-xs shadow-xs backdrop-blur-xs">
                  View Space
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
