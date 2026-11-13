import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BottomFeaturedCollectionsProps {
  onOpenDepartment: (department: string, subcategory?: string) => void;
}

interface CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  department: string;
  subcategory?: string;
  image: string;
}

const FEATURED_PRODUCT_COLLECTIONS: CollectionCard[] = [
  {
    id: 'basin-faucets',
    title: 'Premium Basin Faucets',
    subtitle: 'Machined DZR brass deck & wall mixers',
    department: 'Faucets',
    subcategory: 'Basin Faucets',
    image: '/images/featured/faucets.webp',
  },
  {
    id: 'shower-systems',
    title: 'Luxury Shower Systems',
    subtitle: 'Thermostatic columns & flush rainfall ceilings',
    department: 'Showers',
    subcategory: 'Shower Systems',
    image: '/images/showers/hero_shower_banner.webp',
  },
  {
    id: 'designer-sanitaryware',
    title: 'Designer Sanitaryware',
    subtitle: 'Rimless wall-hung WCs & concealed actuators',
    department: 'Sanitaryware',
    image: '/images/sanitaryware/toilet_wall_hung.webp',
  },
  {
    id: 'freestanding-bathtubs',
    title: 'Freestanding Bathtubs',
    subtitle: 'Monolithic stone & mineral composite vessels',
    department: 'Bathroom',
    subcategory: 'Bathtubs',
    image: '/images/showcase/studio_stone_oval_tub.webp',
  },
  {
    id: 'bathroom-vanities',
    title: 'Premium Bathroom Vanities',
    subtitle: 'Fluted timber joinery & integrated consoles',
    department: 'Bathroom',
    subcategory: 'Vanities',
    image: '/images/sanitaryware/vanity_basin_unit.webp',
  },
  {
    id: 'kitchen-faucets-sinks',
    title: 'Kitchen Faucets & Sinks',
    subtitle: 'Pull-down culinary mixers & stone workstations',
    department: 'Kitchen',
    subcategory: 'Kitchen Faucets',
    image: '/images/featured/kitchens.webp',
  },
  {
    id: 'architectural-tiles',
    title: 'Architectural Interior Tiles',
    subtitle: 'Calacatta slabs, limestone & tactile porcelain',
    department: 'Tiles',
    image: '/images/tiles/collections/marble.webp',
  },
  {
    id: 'bathroom-accessories',
    title: 'Luxury Bathroom Accessories',
    subtitle: 'Solid brass hardware, soap dispensers & mirrors',
    department: 'Accessories',
    image: '/images/products_ultra/soap_dispenser_hd.webp',
  },
];

export const BottomFeaturedCollections: React.FC<BottomFeaturedCollectionsProps> = ({
  onOpenDepartment,
}) => {
  return (
    <section className="cv-auto w-full bg-[#F8F5EE] py-16 sm:py-22 px-4 sm:px-6 lg:px-10 border-b border-[#E5DDD0]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-2.5">
              Curated Product Disciplines
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#1E1915] font-normal tracking-tight leading-[1.12] text-balance">
              Featured Product Collections
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#554E46] mt-2.5 leading-relaxed">
              Every discipline within the SMPL portfolio is proportioned to work seamlessly together across private residences and architectural projects.
            </p>
          </div>

          <button
            onClick={() => onOpenDepartment('All')}
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#1E1915] hover:text-[#6E5641] transition-colors cursor-pointer self-start md:self-end whitespace-nowrap shrink-0"
          >
            <span>Explore Full Catalogue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 8-Card Editorial Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {FEATURED_PRODUCT_COLLECTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => onOpenDepartment(item.department, item.subcategory)}
              className="group flex flex-col bg-white border border-[#E5DDD0] hover:border-[#8C735B] rounded-xl overflow-hidden text-left transition-[transform,border-color,box-shadow] duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Large Unique High-Res Image */}
              <div className="relative w-full aspect-[4/3] bg-[#EFE9DF] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Clean Architectural Footer Text */}
              <div className="p-5 flex items-center justify-between gap-3 flex-1 bg-white">
                <div className="min-w-0">
                  <h3 className="font-serif text-[19px] text-[#1E1915] group-hover:text-[#6E5641] transition-colors font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-[#665C52] mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full border border-[#E5DDD0] group-hover:border-[#6E5641] group-hover:bg-[#6E5641] group-hover:text-white text-[#1E1915] flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
