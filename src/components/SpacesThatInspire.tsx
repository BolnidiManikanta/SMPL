import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SpacesThatInspireProps {
  onOpenDepartment: (department: string, subcategory?: string) => void;
  onOpenTilesPage: () => void;
}

export const SpacesThatInspire: React.FC<SpacesThatInspireProps> = ({
  onOpenDepartment,
  onOpenTilesPage,
}) => {
  const architecturalSpaces = [
    {
      id: 'modern-luxury-bathrooms',
      title: 'Modern Luxury Bathrooms',
      materialNote: 'Travertine stone monolith · Aged brass fittings',
      image: '/images/hero_architectural_suite.webp',
      department: 'Bathroom',
      featured: true,
    },
    {
      id: 'marble-bathroom-interiors',
      title: 'Marble Bathroom Interiors',
      materialNote: 'Concealed cistern architecture · Rimless ceramic',
      image: '/images/sanitaryware/hero_sanitaryware.webp',
      department: 'Sanitaryware',
    },
    {
      id: 'contemporary-shower-spaces',
      title: 'Contemporary Shower Spaces',
      materialNote: 'Flush ceiling rainfall · Fluted travertine walls',
      image: '/images/featured/showers.webp',
      department: 'Showers',
    },
    {
      id: 'minimalist-washbasin-designs',
      title: 'Minimalist Washbasin Designs',
      materialNote: 'Thin-rim oval vessel · Warm brass deck mixer',
      image: '/images/sanitaryware/wash_basin_countertop.webp',
      department: 'Bathroom',
      subcategory: 'Wash Basins',
    },
    {
      id: 'luxury-kitchen-interiors',
      title: 'Luxury Kitchen Interiors',
      materialNote: 'Seamless travertine island · High-arc gooseneck',
      image: '/images/featured/kitchens.webp',
      department: 'Kitchen',
    },
    {
      id: 'premium-tile-applications',
      title: 'Premium Tile Applications',
      materialNote: 'Large-format stone surfaces · Architectural daylight',
      image: '/images/tiles/inspiration_lounge_hd.webp',
      department: 'Tiles',
    },
  ];

  return (
    <section
      id="curated-retreat"
      className="cv-auto w-full bg-[#F5F0E7] py-16 sm:py-22 px-4 sm:px-6 lg:px-10 border-b border-[#E5DDD0]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-2.5">
              Architectural Photography
            </span>
            <h2 className="font-serif text-[32px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-[1.1] text-balance">
              Spaces That Inspire
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#554E46] mt-2.5 leading-relaxed">
              Spatial compositions pairing raw travertine, veined marble, oak joinery, and precision PVD fittings in built architectural settings.
            </p>
          </div>

          <button
            onClick={() => onOpenDepartment('All')}
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#1E1915] hover:text-[#6E5641] transition-colors cursor-pointer self-start md:self-end whitespace-nowrap shrink-0"
          >
            <span>Explore Complete Suites</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Architectural Editorial Grid: Asymmetric Feature + Balanced 5-Panel Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Large Lead Photograph: Modern Luxury Bathrooms */}
          <button
            onClick={() => onOpenDepartment(architecturalSpaces[0].department)}
            className="lg:col-span-7 group relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] rounded-xl overflow-hidden bg-[#E5DDD0] border border-[#DFD6C7] hover:border-[#8C735B] shadow-sm hover:shadow-xl transition-[transform,border-color,box-shadow] duration-300 text-left cursor-pointer"
          >
            <img
              src={architecturalSpaces[0].image}
              alt={architecturalSpaces[0].title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 z-10">
              <div>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#E6DAC8] font-medium mb-1">
                  {architecturalSpaces[0].materialNote}
                </span>
                <h3 className="font-serif text-[26px] sm:text-[30px] text-white font-normal leading-tight">
                  {architecturalSpaces[0].title}
                </h3>
              </div>
              <span className="w-10 h-10 rounded-full bg-white/90 group-hover:bg-white text-[#1E1915] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>

          {/* Right Vertical Spotlight Pair */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {architecturalSpaces.slice(1, 3).map((space) => (
              <button
                key={space.id}
                onClick={() => onOpenDepartment(space.department, space.subcategory)}
                className="group relative aspect-[16/9] lg:aspect-[16/8.2] rounded-xl overflow-hidden bg-[#E5DDD0] border border-[#DFD6C7] hover:border-[#8C735B] shadow-sm hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 text-left cursor-pointer"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 z-10">
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-[0.18em] text-[#E6DAC8] font-medium mb-0.5">
                      {space.materialNote}
                    </span>
                    <h3 className="font-serif text-[20px] sm:text-[22px] text-white font-normal leading-snug">
                      {space.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>

          {/* Bottom 3-Column Balanced Architectural Scenes */}
          {architecturalSpaces.slice(3).map((space) => (
            <button
              key={space.id}
              onClick={() =>
                space.department === 'Tiles'
                  ? onOpenTilesPage()
                  : onOpenDepartment(space.department, space.subcategory)
              }
              className="lg:col-span-4 group relative aspect-[16/10] rounded-xl overflow-hidden bg-[#E5DDD0] border border-[#DFD6C7] hover:border-[#8C735B] shadow-sm hover:shadow-lg transition-[transform,border-color,box-shadow] duration-300 text-left cursor-pointer"
            >
              <img
                src={space.image}
                alt={space.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 z-10">
                <div>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] text-[#E6DAC8] font-medium mb-0.5">
                    {space.materialNote}
                  </span>
                  <h3 className="font-serif text-[19px] sm:text-[21px] text-white font-normal leading-snug">
                    {space.title}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-white shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
