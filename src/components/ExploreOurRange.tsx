import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCategoryItem } from '../types';

interface ExploreOurRangeProps {
  onSelectCategory: (category: ProductCategoryItem) => void;
  onViewAllCategories?: () => void;
}

const HOME_SHOP_CATEGORIES: ProductCategoryItem[] = [
  {
    id: 'cat_sanitaryware',
    title: 'Sanitaryware',
    image: '/images/showcase/studio_smart_toilet_wall.webp',
    count: 14,
    department: 'Sanitaryware',
    subcategories: ['Wall-Hung Toilets', 'One-Piece WCs', 'Cisterns'],
  },
  {
    id: 'cat_faucets',
    title: 'Faucets',
    image: '/images/showcase/studio_gold_basin_mixer.webp',
    count: 18,
    department: 'Faucets',
    subcategories: ['Basin Faucets', 'Bath Mixers', 'Wall Mixers'],
  },
  {
    id: 'cat_showers',
    title: 'Showers',
    image: '/images/featured/showers.webp',
    count: 16,
    department: 'Showers',
    subcategories: ['Overhead Rain', 'Thermostatic Columns', 'Hand Showers'],
  },
  {
    id: 'cat_bathtubs',
    title: 'Bathtubs',
    image: '/images/showcase/studio_stone_oval_tub.webp',
    count: 8,
    department: 'Bathroom',
    subcategories: ['Freestanding Stone', 'Oval Soaking', 'Built-In'],
  },
  {
    id: 'cat_tiles',
    title: 'Tiles',
    image: '/images/tiles/collections/marble.webp',
    count: 24,
    department: 'Tiles',
    subcategories: ['Marble Look', 'Stone Look', 'Woodlook'],
  },
  {
    id: 'cat_bathroom',
    title: 'Bathroom',
    image: '/images/featured/bathrooms.webp',
    count: 22,
    department: 'Bathroom',
    subcategories: ['Wash Basins', 'Vanities', 'Enclosures'],
  },
  {
    id: 'cat_kitchen',
    title: 'Kitchen',
    image: '/images/featured/kitchens.webp',
    count: 12,
    department: 'Kitchen',
    subcategories: ['Pull-Down Mixers', 'Workstation Sinks'],
  },
];

export const ExploreOurRange: React.FC<ExploreOurRangeProps> = ({
  onSelectCategory,
  onViewAllCategories,
}) => {
  return (
    <section
      id="explore-range"
      className="cv-auto w-full bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header matching reference */}
        <div className="flex items-baseline justify-between gap-4 mb-7 sm:mb-9">
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#1E1915] font-normal tracking-tight">
            Shop by Category
          </h2>

          <button
            onClick={onViewAllCategories}
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1915] hover:text-[#66462C] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 7 Tall Portrait Architectural Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {HOME_SHOP_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group relative aspect-[3/4.1] rounded-xl overflow-hidden cursor-pointer bg-[#EAE2D5] border border-[#E5DDD0] hover:border-[#725C48] shadow-xs hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 text-left"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Crisp contrast scrim ensuring razor-sharp white text */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

              <div className="absolute inset-x-2 bottom-3.5 text-center z-10">
                <span className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide drop-shadow-xs">
                  {cat.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
