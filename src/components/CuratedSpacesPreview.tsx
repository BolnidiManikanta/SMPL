import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CuratedSpacesPreviewProps {
  onOpenDepartment: (department: string, subcategory?: string) => void;
  onExploreAll: () => void;
}

export const CuratedSpacesPreview: React.FC<CuratedSpacesPreviewProps> = ({
  onOpenDepartment,
  onExploreAll,
}) => {
  const featuredSeries = [
    {
      id: 'Marble Look Tiles',
      department: 'Tiles',
      title: 'Marble Look Tiles',
      image: '/images/tiles/collections/marble.webp',
    },
    {
      id: 'Matte Black Series',
      department: 'Showers',
      title: 'Matte Black Series',
      image: '/images/showers/hero_shower_banner.webp',
    },
    {
      id: 'Brushed Gold Series',
      department: 'Faucets',
      title: 'Brushed Gold Series',
      image: '/images/faucets/hero_faucet_banner.webp',
    },
    {
      id: 'Signature Bath Series',
      department: 'Sanitaryware',
      title: 'Signature Bath Series',
      image: '/images/showcase/studio_smart_toilet_wall.webp',
    },
  ];

  return (
    <section className="cv-auto w-full bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9">
          <div>
            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#1E1915] font-normal tracking-tight leading-tight">
              Featured Collections
            </h2>
            <p className="text-[14px] text-[#554E46] mt-1">
              Handpicked ranges for inspired, modern spaces.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E1915] hover:text-[#66462C] transition-colors cursor-pointer group self-start sm:self-end whitespace-nowrap shrink-0"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Landscape Featured Series Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredSeries.map((series) => (
            <button
              key={series.id}
              onClick={() => onOpenDepartment(series.department)}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer bg-[#EAE2D5] border border-[#E5DDD0] hover:border-[#725C48] shadow-xs hover:shadow-xl transition-[transform,border-color,box-shadow] duration-300 text-left"
            >
              <img
                src={series.image}
                alt={series.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Measured Subtle Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />

              {/* Crisp Bottom-Left Frosted Surface Title Tag */}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="inline-block bg-[#FAF7F2]/95 text-[#1E1915] text-[13px] font-medium px-3.5 py-1.5 rounded-[6px] shadow-xs group-hover:bg-white transition-colors">
                  {series.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
