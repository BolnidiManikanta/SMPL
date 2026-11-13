import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_SPACES_DATA as SPACES_DATA } from '../data/homeData';
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
    <section id="spaces" className="cv-auto w-full bg-[#F8F6F2] py-14 sm:py-18 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 mb-7 sm:mb-9">
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#1E1915] font-normal tracking-tight">
            Find Your Space
          </h2>

          <button
            onClick={onExploreAll}
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1915] hover:text-[#66462C] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Explore All Spaces</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Space Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {SPACES_DATA.map((space) => (
            <button
              key={space.id}
              onClick={() => onSelectSpace(space)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#E3DDD2] shadow-xs hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 border border-[#E5DDD0] hover:border-[#725C48] aspect-[3/4] text-left"
            >
              {/* Crisp HD Space Image */}
              <img
                src={space.image}
                alt={space.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Crisp contrast gradient scrim */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 p-3.5 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex items-end">
                <h3 className="text-white font-serif text-[14.5px] sm:text-[15.5px] font-normal tracking-wide drop-shadow-xs">
                  {space.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
