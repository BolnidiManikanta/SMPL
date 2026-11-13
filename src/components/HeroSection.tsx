import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Gem,
  Droplets,
  ShieldCheck,
  Wrench,
  Leaf,
} from 'lucide-react';

interface HeroSectionProps {
  onExploreCollections: (department?: string) => void;
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
      eyebrow: 'PREMIUM BATHWARE & FITTINGS',
      title: 'Designing\nModern Spaces',
      description:
        'A curated range of bathroom, kitchen and tile solutions that blend elegance, performance and durability.',
      primaryBtn: 'Explore Collections',
      department: 'All',
      secondaryBtn: 'Book a Consultation',
      image: '/images/hero_sanctuary_4k.webp',
      alt: 'Architectural freestanding oval bathtub, brushed gold filler, timber slats, and rainfall shower',
    },
    {
      id: '02',
      eyebrow: 'PRECISION BRASSWARE COLLECTION',
      title: 'Sculpted Brass\n& Quiet Flow',
      description:
        'CNC-machined virgin brass mixers with laminar aerators engineered for balanced proportion and effortless daily ritual.',
      primaryBtn: 'Explore Faucets',
      department: 'Faucets',
      secondaryBtn: 'Book a Consultation',
      image: '/images/faucets/hero_faucet_banner.webp',
      alt: 'Brushed gold basin mixer over carved marble vessel basin',
    },
    {
      id: '03',
      eyebrow: 'MONOLITHIC SANCTUARIES',
      title: 'Timeless Calm\nin Natural Stone',
      description:
        'Honed travertine bathtubs, rimless ceramic fixtures, and architectural oak joinery built for serene residences.',
      primaryBtn: 'Explore Bathrooms',
      department: 'Bathroom',
      secondaryBtn: 'Book a Consultation',
      image: '/images/curated_retreat_suite.webp',
      alt: 'Full travertine architectural bathroom suite with soaking tub and rain shower',
    },
  ];

  const pillars = [
    {
      icon: Gem,
      title: 'Premium Quality',
      subtitle: 'Trusted & Durable',
    },
    {
      icon: Droplets,
      title: 'Water Efficient',
      subtitle: 'Save Water, Everyday',
    },
    {
      icon: ShieldCheck,
      title: 'Long Lasting',
      subtitle: 'Corrosion & Rust Resistant',
    },
    {
      icon: Wrench,
      title: 'Expert Support',
      subtitle: 'Design to Installation',
    },
    {
      icon: Leaf,
      title: 'Sustainable Choice',
      subtitle: 'Eco-Friendly Solutions',
    },
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative w-full bg-[#FAF7F2] select-none border-b border-[#E7E0D3]">
      {/* Architectural Full-Width Hero Stage */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] bg-[#211C18] overflow-hidden flex items-center">
        {/* Crisp Photograph Anchored Cleanly Right with Seamless Dark Slate Wall Blend Left */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 lg:left-[18%] overflow-hidden">
            <img
              key={current.image}
              src={current.image}
              alt={current.alt}
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-center lg:object-right transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Architectural Charcoal-Bronze Gradient Scrim for Crisp Text Legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, #1E1915 0%, #241E19 26%, rgba(33,28,24,0.88) 42%, rgba(33,28,24,0.38) 60%, rgba(33,28,24,0.06) 80%, rgba(33,28,24,0) 100%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Left Editorial Typography & CTAs */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full py-14 sm:py-16">
          <div className="max-w-lg lg:max-w-xl">
            <span className="block text-[11px] sm:text-[11.5px] uppercase tracking-[0.26em] font-semibold text-[#E2D6C3] mb-4">
              {current.eyebrow}
            </span>

            <h1 className="font-serif text-[46px] sm:text-[58px] lg:text-[66px] leading-[1.03] tracking-tight text-white font-normal whitespace-pre-line text-balance mb-5">
              {current.title}
            </h1>

            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#ECE6DD] font-normal max-w-[430px] mb-8">
              {current.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onExploreCollections(current.department)}
                className="inline-flex items-center gap-2.5 bg-[#DFCAA8] hover:bg-[#EBD9BA] text-[#1D1713] text-[13.5px] font-semibold tracking-wide px-6 py-3 rounded-[6px] transition-colors shadow-md cursor-pointer group whitespace-nowrap shrink-0"
              >
                <span>{current.primaryBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookConsultation}
                className="inline-flex items-center gap-2.5 border border-white/45 bg-black/40 hover:bg-black/60 text-white text-[13.5px] font-medium tracking-wide px-5 py-3 rounded-[6px] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4 text-[#DFCAA8]" />
                <span>{current.secondaryBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Center Slide Dots */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
          role="tablist"
          aria-label="Hero showcase slides"
        >
          {slides.map((s, index) => {
            const isActive = activeSlide === index;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSlide(index)}
                aria-label={`View slide ${s.id}`}
                aria-selected={isActive}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white scale-110 shadow-xs'
                    : 'bg-transparent border border-white/80 hover:border-white'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* 5 Value Pillars Trust Bar directly below Hero */}
      <div className="w-full bg-[#FAF7F2]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 lg:gap-y-0 lg:divide-x lg:divide-[#E6DDD0]">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex items-center justify-start lg:justify-center gap-3 px-2 lg:px-5"
                >
                  <div className="w-9 h-9 rounded-full border border-[#DCD2C3] bg-[#F5F0E7] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#4B4138] stroke-[1.6]" />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <div className="text-[13px] font-semibold text-[#1E1915] whitespace-nowrap">
                      {pillar.title}
                    </div>
                    <div className="text-[11.5px] text-[#665C52] mt-0.5 whitespace-nowrap">
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
