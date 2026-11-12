import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles, Compass, Infinity as InfinityIcon, Leaf } from 'lucide-react';

interface HeroSectionProps {
  onExploreCollections: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollections,
  onBookConsultation,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: '01',
      eyebrow: 'LUXURY BATH EXPERIENCES',
      title: 'Architecture\nMeets Wellbeing',
      description:
        'A curated collection of bathware and fittings crafted for modern living, timeless spaces, and a richer everyday ritual.',
      primaryBtn: 'Explore Collections',
      secondaryBtn: 'Book a Design Consultation',
    },
    {
      id: '02',
      eyebrow: 'ARCHITECTURAL WATER FLOW',
      title: 'The Sculpture\nof Water',
      description:
        'Precision-machined brass spouts, balanced proportion, and laminar streams designed to soothe the senses and conserve resources.',
      primaryBtn: 'Explore Faucets',
      secondaryBtn: 'Book a Design Consultation',
    },
    {
      id: '03',
      eyebrow: 'ORGANIC SANCTUARIES',
      title: 'Monoliths\nin Raw Stone',
      description:
        'Honed limestone and composite soaking bathtubs sculpted to provide thermal embrace, enduring tactility, and quiet contemplation.',
      primaryBtn: 'Explore Bathtubs',
      secondaryBtn: 'Book a Design Consultation',
    },
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative w-full bg-[#E8DFC8] select-none border-b border-[#D8CEB8] overflow-hidden">
      {/* Container with min-height */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] flex items-center">
        {/* Full pristine 4K architectural photograph - Crystal clear, zero blur */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/hero_sanctuary_4k.jpg"
            alt="SMPL Architectural Bathware Suite"
            className="w-full h-full object-cover object-right lg:object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle mobile-only soft vignette for guaranteed text contrast on small phone screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0E6D8]/90 via-[#F0E6D8]/40 to-transparent sm:hidden pointer-events-none" />
        </div>

        {/* Foreground Content Left Column (Native HD typography, 0 blur, 0 overlap) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow with horizontal line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-semibold text-[#54473A]">
                {current.eyebrow}
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#6B5A4B]"></span>
            </div>

            {/* Main Headline - Razor sharp high-contrast serif */}
            <h1 className="font-serif text-[44px] sm:text-[58px] lg:text-[72px] xl:text-[78px] leading-[1.04] tracking-tight text-[#1D1713] font-normal whitespace-pre-line text-balance mb-5 sm:mb-6">
              {current.title}
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-[15px] sm:text-[16.5px] leading-[1.65] text-[#3D342C] font-normal max-w-lg mb-8 sm:mb-9">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 sm:mb-14">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center gap-2.5 bg-[#66462C] hover:bg-[#523722] text-white text-[13.5px] font-semibold tracking-wide px-6 py-3.5 rounded-[4px] transition-all shadow-md group cursor-pointer"
              >
                <span>{current.primaryBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookConsultation}
                className="inline-flex items-center gap-2 border-2 border-[#66462C] hover:bg-[#66462C]/10 text-[#221A14] text-[13.5px] font-semibold tracking-wide px-5 py-3.5 rounded-[4px] transition-all cursor-pointer bg-white/70 backdrop-blur-xs shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#66462C]" />
                <span>{current.secondaryBtn}</span>
              </button>
            </div>

            {/* 4 Value Proposition Pillars */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 pt-2 border-t border-[#D5C7B5]/60 text-xs text-[#2A221C]">
              {/* Item 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#6F4E37]/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#6F4E37]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-[12px] text-[#241D17]">Premium</span>
                  <span className="text-[11px] text-[#5C5044]">Materials</span>
                </div>
              </div>

              <span className="h-7 w-[1px] bg-[#CBBBA8] hidden sm:block"></span>

              {/* Item 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#6F4E37]/10 flex items-center justify-center shrink-0">
                  <Compass className="w-3.5 h-3.5 text-[#6F4E37]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-[12px] text-[#241D17]">Architectural</span>
                  <span className="text-[11px] text-[#5C5044]">Precision</span>
                </div>
              </div>

              <span className="h-7 w-[1px] bg-[#CBBBA8] hidden sm:block"></span>

              {/* Item 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#6F4E37]/10 flex items-center justify-center shrink-0">
                  <InfinityIcon className="w-3.5 h-3.5 text-[#6F4E37]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-[12px] text-[#241D17]">Timeless</span>
                  <span className="text-[11px] text-[#5C5044]">Design</span>
                </div>
              </div>

              <span className="h-7 w-[1px] bg-[#CBBBA8] hidden sm:block"></span>

              {/* Item 4 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#6F4E37]/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#6F4E37]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-[12px] text-[#241D17]">Sustainable</span>
                  <span className="text-[11px] text-[#5C5044]">Choice</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Far Right Slide Indicators (01 ──, 02, 03) */}
        <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-end space-y-4 text-xs font-mono text-[#5C5044]">
          {slides.map((s, index) => {
            const isActive = activeSlide === index;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                className={`flex items-center gap-2 transition-colors cursor-pointer ${
                  isActive ? 'font-bold text-[#1F1813]' : 'text-[#877868] hover:text-[#1F1813]'
                }`}
              >
                <span>{s.id}</span>
                {isActive && <span className="w-6 h-[1.5px] bg-[#1F1813]"></span>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
