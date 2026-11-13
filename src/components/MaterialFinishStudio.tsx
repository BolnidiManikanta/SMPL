import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Check, Layers } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface MaterialFinishStudioProps {
  onSelectProduct: (product: Product) => void;
  onFilterByFinish: (finishName: string) => void;
  onRequestSwatch?: (finishName: string) => void;
}

export const MaterialFinishStudio: React.FC<MaterialFinishStudioProps> = ({
  onSelectProduct,
  onFilterByFinish,
  onRequestSwatch,
}) => {
  const finishes = [
    {
      id: 'brushed_bronze',
      name: 'Brushed Bronze',
      hex: '#8E7864',
      badge: 'Signature PVD',
      tagline: 'Warm earthy undertones with directional brushed satin micro-grain.',
      description:
        'Applied through physical vapour deposition at atomic scale in our Munich lab. 10x harder than standard electroplating with permanent salt spray and chemical resistance.',
      durability: 'Vickers Hardness > 2400 HV · 500h Salt-Mist Certified',
      image: '/images/categories_hd/basin_faucets.webp',
    },
    {
      id: 'matte_black',
      name: 'Matte Black',
      hex: '#1D1D1B',
      badge: 'Velvet Ceramic',
      tagline: 'Deep absorbent noir finish with zero light glare or fingerprint marks.',
      description:
        'Electro-phoretic deposition bonded directly to solid DZR brass. Formulated with microscopic ceramic beads for a velvet-soft tactile surface that resists lime deposits.',
      durability: 'Zero Fingerprint · Thermal Shock Proof · Anti-Limescale',
      image: '/images/showers/hero_shower_banner.webp',
    },
    {
      id: 'brushed_brass',
      name: 'Brushed Brass',
      hex: '#D4AF37',
      badge: 'Architectural Gold',
      tagline: 'Hand-burnished warm gold providing timeless luminescence to stone sanctuaries.',
      description:
        'Forged from heavy virgin brass billets, hand-brushed with rotary brass wire brushes and protected with an ultra-thin aerospace clear coat to preserve radiant warmth.',
      durability: 'Solid DZR Heavy Brass · Non-Tarnishing Seal · 15-Yr Warranty',
      image: '/images/showcase/studio_gold_basin_mixer.webp',
    },
    {
      id: 'brushed_nickel',
      name: 'Brushed Nickel',
      hex: '#A8A59D',
      badge: 'Industrial Satin',
      tagline: 'Subtle cool champagne reflections engineered for Scandinavian minimalism.',
      description:
        'Multi-layer nickel substrate providing unmatched acoustic damping and corrosion resistance, finished with an ultra-fine 320-grit linear satin polish.',
      durability: 'Corrosion Class 5 · Ultra-Durable PVD Bond · Precision Satin',
      image: '/images/faucets/products/smpl_sm_401.webp',
    },
    {
      id: 'honed_travertine',
      name: 'Honed Travertine',
      hex: '#D4C7B5',
      badge: 'Natural Italian Stone',
      tagline: 'Raw geological character with soft silk-honed surface embrace.',
      description:
        'Quarried directly from historic Tuscan strata. Each vessel and basin is CNC-milled from a single monolithic limestone block and hand-honed by third-generation stone carvers.',
      durability: 'Monolithic Single-Block · Impregnated Hydro-Seal · Tactile Stone',
      image: '/images/showcase/studio_stone_oval_tub.webp',
    },
    {
      id: 'chrome',
      name: 'Chrome',
      hex: '#E2E2E2',
      badge: 'Mirror Polish',
      tagline: 'Flawless optical mirror finish with pure neutral geometric reflections.',
      description:
        'Hexavalent-free triple plating comprising double copper strike, semi-bright nickel, and high-purity chromium layer ensuring flawless mirror flatness.',
      durability: 'ISO 1456 Class 4 · Mirror Reflection · Easy Clean Finish',
      image: '/images/categories_hd/showers.webp',
    },
  ];

  const [activeFinish, setActiveFinish] = useState(finishes[0]);

  // Find 4 products that offer this finish
  const matchingProducts = React.useMemo(() => {
    return ALL_PRODUCTS.filter((p) =>
      p.finishes.some((f) => f.name.toLowerCase().includes(activeFinish.name.toLowerCase()) || activeFinish.name.toLowerCase().includes(f.name.toLowerCase()))
    ).slice(0, 4);
  }, [activeFinish]);

  return (
    <section className="w-full bg-[#F4EFE6] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#DDD5C8]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#66462C] font-semibold">
              FINISH &amp; MATERIAL STUDIO
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-[11px] text-stone-600 uppercase tracking-widest">
              PVD Atomic Bonding
            </span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-tight">
            Tactile Materials &amp; Architectural Finishes
          </h2>
          <p className="text-[14.5px] sm:text-[15px] text-[#554E46] max-w-2xl mt-2 leading-relaxed">
            Every SMPL fixture is machined from solid virgin metals and finished in our proprietary physical vapour deposition chambers, creating permanent surface resistance against hard water and abrasion.
          </p>
        </div>

        {/* 6 Finish Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {finishes.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFinish(f)}
              className={`flex items-center gap-3 p-3.5 rounded-lg transition-all text-left cursor-pointer border ${
                activeFinish.id === f.id
                  ? 'bg-white border-[#725C48] shadow-md -translate-y-0.5'
                  : 'bg-white/75 hover:bg-white border-[#DDD5C8] hover:border-stone-400'
              }`}
            >
              <div
                className="w-5 h-5 rounded-full border border-black/20 shrink-0 shadow-xs"
                style={{ backgroundColor: f.hex }}
              />
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-[#1E1B18] truncate leading-tight">
                  {f.name}
                </span>
                <span className="block text-[10.5px] text-stone-500 mt-0.5 truncate">
                  {f.badge}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Finish Highlight Feature Box */}
        <div className="bg-white border border-[#E5DDD0] rounded-xl p-6 sm:p-10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big HD Studio Image of Finish */}
          <div className="lg:col-span-5 relative aspect-square rounded-lg overflow-hidden bg-[#FAF8F5] border border-[#E5DFD4]">
            <img
              src={activeFinish.image}
              alt={activeFinish.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#1E1915]/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-[6px] text-[11px] tracking-wider uppercase font-medium">
              {activeFinish.name} · {activeFinish.badge}
            </div>
          </div>

          {/* Right Column: Finish Story & Matching Fixtures */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#725C48]" />
                <span className="text-[11px] uppercase tracking-widest text-[#725C48] font-semibold">
                  {activeFinish.durability}
                </span>
              </div>

              <h3 className="font-serif text-[28px] sm:text-[34px] text-[#1E1B18] font-normal tracking-tight mb-3">
                {activeFinish.name}
              </h3>

              <p className="text-[15px] font-medium text-[#2E2A26] mb-3 leading-snug">
                {activeFinish.tagline}
              </p>

              <p className="text-[13.5px] text-[#554E46] leading-relaxed mb-6">
                {activeFinish.description}
              </p>

              {/* Matching Fixtures Mini-Gallery */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3 pb-2 border-b border-[#ECE6DC]">
                  <span>Fittings Available in {activeFinish.name}</span>
                  <button
                    onClick={() => onFilterByFinish(activeFinish.name)}
                    className="text-[#725C48] hover:underline cursor-pointer lowercase first-letter:uppercase text-[11px] font-medium"
                  >
                    View All in Catalogue →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {matchingProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => onSelectProduct(p)}
                      className="group cursor-pointer bg-[#FAF8F5] border border-[#E5DFD4] hover:border-[#725C48] rounded-[2px] p-2 transition-all hover:bg-white hover:shadow-md"
                    >
                      <div className="w-full aspect-square bg-[#F3EFE7] rounded-xs overflow-hidden mb-2">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform group-hover:scale-106"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-[11.5px] font-medium text-[#1E1B18] truncate group-hover:text-[#725C48]">
                        {p.name}
                      </h4>
                      <span className="text-[11px] font-mono text-stone-500 font-medium">
                        ${p.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#ECE6DC]">
              <button
                onClick={() => onFilterByFinish(activeFinish.name)}
                className="py-3 px-6 bg-[#725C48] hover:bg-[#5C4938] text-white text-xs uppercase tracking-[0.14em] font-semibold rounded-[6px] transition-all shadow-sm cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Filter Catalogue by {activeFinish.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onRequestSwatch?.(activeFinish.name)}
                className="py-3 px-5 bg-white border border-[#DCD2C3] hover:border-[#725C48] text-[#1E1915] text-xs uppercase tracking-[0.14em] font-semibold rounded-[6px] transition-all hover:bg-[#F2ECE2] cursor-pointer whitespace-nowrap"
              >
                Request Material Swatch Box
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
