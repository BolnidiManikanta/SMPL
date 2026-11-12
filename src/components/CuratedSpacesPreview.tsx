import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CuratedSpacesPreviewProps {
  onOpenDepartment: (department: string) => void;
  onExploreAll: () => void;
}

export const CuratedSpacesPreview: React.FC<CuratedSpacesPreviewProps> = ({
  onOpenDepartment,
  onExploreAll,
}) => {
  const collections = [
    {
      id: 'Bathroom',
      title: 'Bathrooms',
      image: '/images/featured/bathrooms.jpg',
      desc: 'Sanctuary suites & stone vanities',
    },
    {
      id: 'Faucets',
      title: 'Faucets',
      image: '/images/featured/faucets.jpg',
      desc: 'Precision brassware & mixer taps',
    },
    {
      id: 'Showers',
      title: 'Showers',
      image: '/images/featured/showers.jpg',
      desc: 'Rain cascades & wellness columns',
    },
    {
      id: 'Sanitaryware',
      title: 'Sanitaryware',
      image: '/images/featured/sanitaryware.jpg',
      desc: 'Rimless wall-hung ceramic fixtures',
    },
    {
      id: 'Kitchen',
      title: 'Kitchens',
      image: '/images/featured/kitchens.jpg',
      desc: 'Architectural pull-down goosenecks',
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 border-b border-[#E8DFD3]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#705E4E]">
                FEATURED COLLECTIONS
              </span>
              <span className="w-10 h-[1px] bg-[#A18F7E]"></span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.12] text-[#241E1A] font-normal">
              Curated Spaces<br className="hidden sm:inline" /> for Modern Living
            </h2>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#241E1A] hover:text-[#6F4E37] transition-colors cursor-pointer group pb-1"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5-Card Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4.5">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenDepartment(item.id)}
              className="group relative aspect-[4/3.1] rounded-2xl overflow-hidden cursor-pointer bg-[#EAE2D5] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background Product Photograph */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Crisp subtle gradient so the photograph remains bright and clear */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Label and Arrow */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white z-10">
                <span className="text-[13.5px] sm:text-[14.5px] font-medium tracking-wide drop-shadow-xs">
                  {item.title}
                </span>
                <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
