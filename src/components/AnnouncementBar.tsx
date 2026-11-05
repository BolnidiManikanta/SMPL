import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ANNOUNCEMENTS = [
  'Discover refined bathware for extraordinary spaces.',
  'Complimentary architectural sample kits for trade & design professionals.',
  'PVD Finishes guaranteed for 15 years against wear and tarnish.',
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1));
  };

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev === ANNOUNCEMENTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#141414] text-[#E5E0D8] text-[11px] md:text-xs py-2 px-4 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <button
          onClick={prevAnnouncement}
          aria-label="Previous announcement"
          className="text-stone-400 hover:text-white transition-colors p-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <p className="tracking-wider text-center font-normal text-[#F0EBE3] truncate px-4 transition-opacity duration-300">
          {ANNOUNCEMENTS[currentIndex]}
        </p>

        <button
          onClick={nextAnnouncement}
          aria-label="Next announcement"
          className="text-stone-400 hover:text-white transition-colors p-1"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
