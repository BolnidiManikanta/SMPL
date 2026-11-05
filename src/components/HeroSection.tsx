import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreCollections: () => void;
  onDiscoverDesign: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollections,
  onDiscoverDesign,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: '01',
      badge: 'ARCHITECTURAL COLLECTION',
      title: 'Elevate the\nEveryday.',
      description:
        'Discover thoughtfully designed bathware and architectural fittings that transform everyday spaces into extraordinary experiences.',
      primaryBtn: 'Explore Collections',
      secondaryBtn: 'Discover Our Design',
    },
    {
      id: '02',
      badge: 'PRECISION HYDRODYNAMICS',
      title: 'The Sculpture\nof Water.',
      description:
        'Architectural spouts, balanced proportion, and laminar stream aeration designed to calm the senses and preserve precious resources.',
      primaryBtn: 'View Brassware',
      secondaryBtn: 'Engineering Story',
    },
    {
      id: '03',
      badge: 'MONOLITHIC CRAFTSMANSHIP',
      title: 'Sanctuaries\nin Stone.',
      description:
        'Monolithic limestone and travertine bathtubs carved to provide thermal embrace, enduring tactility, and quiet contemplation.',
      primaryBtn: 'Explore Bathtubs',
      secondaryBtn: 'Quarry Selection',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const current = slides[currentSlide];

  return (
    <section className="relative w-full bg-[#E4DFD5] border-b border-[#D8D0C3] overflow-hidden select-none">
      {/* Background Image Container with 2560x940 HD Scene (NO baked text, NO baked navbar) */}
      <div className="relative max-w-[1720px] mx-auto min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex items-center">
        {/* Full HD 3D architectural scene background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero_seamless_hd.png"
            alt="SMPL Architectural Bathware Sanctuaries"
            className="w-full h-full object-cover object-right lg:object-center filter brightness-[1.02] contrast-[1.02]"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          {/* Subtle gradient overlay on small screens to ensure 100% crystal-clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E4DFD5]/95 via-[#E4DFD5]/80 to-transparent lg:hidden" />
        </div>

        {/* Content Area - Left Column Real Vector Typography & Buttons */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            {/* Architectural Sub-header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#725C48]" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] text-[#584636] font-semibold">
                {current.badge}
              </span>
            </div>

            {/* Main Headline: 100% Vector HTML Font - Never Blurry */}
            <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[62px] xl:text-[70px] text-[#1C1917] font-normal leading-[1.04] tracking-tight mb-5 whitespace-pre-line drop-shadow-xs">
              {current.title}
            </h1>

            {/* Description Paragraph */}
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#36322D] leading-[1.65] font-normal mb-8 max-w-md drop-shadow-xs">
              {current.description}
            </p>

            {/* Real Interactive Buttons - High Contrast, Prominent, Never Hidden */}
            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#725C48] hover:bg-[#584636] text-white font-semibold text-xs tracking-[0.18em] uppercase rounded-[2px] transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
              >
                <span>{current.primaryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDiscoverDesign}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/90 hover:bg-white text-[#1C1917] border border-[#725C48] font-semibold text-xs tracking-[0.18em] uppercase rounded-[2px] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>{current.secondaryBtn}</span>
              </button>
            </div>

            {/* Interactive Progress / Slide Pagination: 01 ─────── 03 */}
            <div className="flex items-center gap-3 text-xs tracking-wider text-[#36322D] font-mono">
              <span className="font-semibold text-[#1C1917]">01</span>
              <div className="flex items-center gap-1.5 w-32 sm:w-40 py-2 cursor-pointer">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className="flex-1 h-1 rounded-full transition-all cursor-pointer"
                    style={{
                      backgroundColor: currentSlide === idx ? '#725C48' : '#C7BFAFA0',
                    }}
                    title={`Slide ${s.id}`}
                  />
                ))}
              </div>
              <span className="text-stone-500">03</span>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls in Bottom Right of the Scene */}
        <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 z-20 flex items-center space-x-2.5">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#221F1B] border border-[#DDD5C8] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
            title="Previous"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#221F1B] border border-[#DDD5C8] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
            title="Next"
          >
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>
    </section>
  );
};
