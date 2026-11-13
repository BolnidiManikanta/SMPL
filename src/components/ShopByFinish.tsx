import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ShopByFinishProps {
  onFilterByFinish: (finishName: string) => void;
}

const FINISH_SHOWCASE = [
  {
    name: 'Brushed Brass',
    hex: '#C5A059',
    metalStyle: 'radial-gradient(circle at 32% 30%, #E7CE8A 0%, #C5A059 55%, #8D6E32 100%)',
    detail: 'Warm satin gold PVD finish',
    image: '/images/featured/faucets.webp',
  },
  {
    name: 'Matte Black',
    hex: '#1D1D1B',
    metalStyle: 'radial-gradient(circle at 32% 30%, #3E3E3B 0%, #1D1D1B 65%, #0F0F0E 100%)',
    detail: 'Velvet ceramic anti-fingerprint',
    image: '/images/showers/hero_shower_banner.webp',
  },
  {
    name: 'Chrome',
    hex: '#D9DCDF',
    metalStyle: 'radial-gradient(circle at 32% 30%, #FFFFFF 0%, #D9DCDF 50%, #9FA5AB 100%)',
    detail: 'Mirror optical triple-plate',
    image: '/images/sanitaryware/toilet_wall_hung.webp',
  },
  {
    name: 'Brushed Nickel',
    hex: '#A5A29B',
    metalStyle: 'radial-gradient(circle at 32% 30%, #D8D5CD 0%, #A5A29B 55%, #75726B 100%)',
    detail: 'Linear champagne architectural satin',
    image: '/images/sanitaryware/bidet_wall_hung.webp',
  },
  {
    name: 'Gunmetal',
    hex: '#4A4E54',
    metalStyle: 'radial-gradient(circle at 32% 30%, #737982 0%, #4A4E54 60%, #2A2D31 100%)',
    detail: 'Smoked anthracite brushed PVD',
    image: '/images/tiles/collections/stone.webp',
  },
  {
    name: 'Aged Bronze',
    hex: '#6E5644',
    metalStyle: 'radial-gradient(circle at 32% 30%, #9E8068 0%, #6E5644 60%, #433226 100%)',
    detail: 'Deep hand-relieved warm bronze',
    image: '/images/showcase/studio_stone_oval_tub.webp',
  },
  {
    name: 'Rose Gold',
    hex: '#B76E79',
    metalStyle: 'radial-gradient(circle at 32% 30%, #E3AEB5 0%, #B76E79 58%, #844852 100%)',
    detail: 'Warm copper-blush brushed PVD',
    image: '/images/faucets/hero_faucet_banner.webp',
  },
];

export const ShopByFinish: React.FC<ShopByFinishProps> = ({ onFilterByFinish }) => {
  return (
    <section className="cv-auto w-full bg-[#FAF7F2] py-16 sm:py-22 px-4 sm:px-6 lg:px-10 border-b border-[#E5DDD0]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-2.5">
              Material &amp; Finish Studio
            </span>
            <h2 className="font-serif text-[32px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-[1.1] text-balance">
              Shop by Finish
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#554E46] mt-2.5 leading-relaxed">
              Coordinate mixers, showers, flush plates, and accessories across seven durable architectural finishes. Select a finish to filter matching models.
            </p>
          </div>
        </div>

        {/* 7 Image-Led Finish Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {FINISH_SHOWCASE.map((finish) => (
            <button
              key={finish.name}
              onClick={() => onFilterByFinish(finish.name)}
              className="group flex flex-col bg-white border border-[#E5DDD0] hover:border-[#6E5641] rounded-xl overflow-hidden text-left transition-[transform,border-color,box-shadow] duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Product / Texture Visual Frame with Tactile Swatch Medallion */}
              <div className="relative w-full aspect-[4/4.3] bg-[#EFE9DF] overflow-hidden">
                <img
                  src={finish.image}
                  alt={finish.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Authentic Metallic Swatch Token */}
                <div
                  className="absolute bottom-3 left-3 w-8 h-8 rounded-full border-2 border-white shadow-md"
                  style={{ background: finish.metalStyle }}
                  aria-hidden="true"
                />
              </div>

              {/* Clean Finish Typography & Filter Affordance */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-[16px] text-[#1E1915] group-hover:text-[#6E5641] transition-colors font-medium leading-tight">
                    {finish.name}
                  </h3>
                  <p className="text-[11.5px] text-[#665C52] mt-1 leading-snug">
                    {finish.detail}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#EFEAE1] flex items-center justify-between text-[11px] font-semibold text-[#6E5641]">
                  <span>View Fittings</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
