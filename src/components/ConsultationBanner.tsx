import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface ConsultationBannerProps {
  onBookConsultation: () => void;
  onExploreCollections: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onBookConsultation,
  onExploreCollections,
}) => {
  return (
    <section className="cv-auto w-full bg-[#EFE9DD] py-14 sm:py-20 px-4 sm:px-6 lg:px-10 border-b border-[#DFD6C7]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#FAF7F2] border border-[#DDD4C5] rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Warm Stone & Ivory Editorial Message */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-3">
              Private Architectural Advisory
            </span>

            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] text-[#1E1915] font-normal tracking-tight leading-[1.08] text-balance mb-4">
              Let&apos;s Create Your Perfect Space
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#4E463F] leading-[1.65] max-w-xl mb-8">
              From product selection to the finishing details, discover solutions designed around your space.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center gap-2.5 bg-[#6E5641] hover:bg-[#574332] text-white text-[13.5px] font-semibold tracking-wide px-6 py-3.5 rounded-[6px] transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4 text-[#EFE2CF]" />
                <span>Book a Consultation</span>
              </button>

              <button
                onClick={onExploreCollections}
                className="inline-flex items-center gap-2 border border-[#2C251F] hover:bg-[#2C251F] text-[#1E1915] hover:text-white text-[13.5px] font-semibold tracking-wide px-6 py-3.5 rounded-[6px] transition-colors cursor-pointer group whitespace-nowrap shrink-0"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Sunlit Architectural Interior Photograph */}
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-[#E5DDD0] overflow-hidden">
            <img
              src="/images/hero_luxury_bathware.webp"
              alt="Sunlit stone bathware suite with carved freestanding basin and brushed brass mixer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
