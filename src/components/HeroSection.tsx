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
      title: 'Elevate the\nEveryday.',
      description:
        'Discover thoughtfully designed bathware and architectural fittings that transform everyday spaces into extraordinary experiences.',
      primaryBtn: 'Explore Collections',
      secondaryBtn: 'Discover Our Design',
      image: '/images/hero_full_banner.png',
    },
    {
      id: '02',
      title: 'The Sculpture\nof Water.',
      description:
        'Architectural spouts, balanced proportion, and laminar stream aeration designed to calm the senses and preserve precious resources.',
      primaryBtn: 'View Brassware',
      secondaryBtn: 'Engineering Story',
      image: '/images/hero_full_banner.png',
    },
    {
      id: '03',
      title: 'Sanctuaries\nin Stone.',
      description:
        'Monolithic limestone and travertine bathtubs carved to provide thermal embrace, enduring tactility, and quiet contemplation.',
      primaryBtn: 'Explore Bathtubs',
      secondaryBtn: 'Quarry Selection',
      image: '/images/hero_full_banner.png',
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
    <section className="relative w-full bg-[#E4DFD5] select-none border-b border-[#D8D0C3] overflow-hidden">
      {/* Container with exact aspect ratio ensuring 100% crystal-clear clarity */}
      <div className="relative max-w-[1440px] mx-auto w-full">
        {/* Crisp full-fidelity hero artwork */}
        <div className="relative w-full">
          <img
            src={current.image}
            alt="SMPL Architectural Bathware - Elevate the Everyday"
            className="w-full h-auto object-cover block filter brightness-[1.00] contrast-[1.00]"
            referrerPolicy="no-referrer"
          />

          {/* Interactive clickable overlays positioned over the buttons for 100% seamless responsiveness */}
          {/* 1. Explore Collections Button Area */}
          <button
            onClick={onExploreCollections}
            aria-label="Explore Collections"
            className="absolute left-[5.8%] top-[53.5%] w-[13.5%] h-[9.5%] rounded-[2px] transition-all cursor-pointer hover:bg-black/10 active:scale-98 focus:outline-none focus:ring-1 focus:ring-[#725C48]"
            title="Explore Collections"
          />

          {/* 2. Discover Our Design Button Area */}
          <button
            onClick={onDiscoverDesign}
            aria-label="Discover Our Design"
            className="absolute left-[20.1%] top-[53.5%] w-[12.2%] h-[9.5%] rounded-[2px] transition-all cursor-pointer hover:bg-black/10 active:scale-98 focus:outline-none focus:ring-1 focus:ring-[#725C48]"
            title="Discover Our Design"
          />

          {/* 3. Pagination Slider Area (01 ─── 03) */}
          <div className="absolute left-[5.8%] top-[69%] w-[10%] h-[5%] flex items-center gap-2 cursor-pointer">
            <button
              onClick={() => setCurrentSlide(0)}
              className="text-[0px] w-4 h-full"
              title="Slide 01"
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className="text-[0px] flex-1 h-full"
              title="Slide 02"
            />
            <button
              onClick={() => setCurrentSlide(2)}
              className="text-[0px] w-4 h-full"
              title="Slide 03"
            />
          </div>

          {/* 4. Bottom Right Carousel Navigation Circles (‹ and ›) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute right-[5.8%] bottom-[8.5%] w-[3.5%] aspect-square rounded-full transition-all cursor-pointer hover:bg-black/15 active:scale-95"
            title="Previous slide"
          />
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-[2.3%] bottom-[8.5%] w-[3.5%] aspect-square rounded-full transition-all cursor-pointer hover:bg-black/15 active:scale-95"
            title="Next slide"
          />
        </div>
      </div>
    </section>
  );
};
