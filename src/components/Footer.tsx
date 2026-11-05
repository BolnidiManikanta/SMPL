import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenTrade: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenTrade }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer id="about" className="w-full bg-[#1A1816] text-[#D8D2C6] pt-16 pb-12 px-4 sm:px-6 lg:px-10 border-t border-[#2D2A26]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Manifesto & Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#2C2925]">
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="text-2xl font-light tracking-[0.38em] text-[#F3EFE7] uppercase mb-4 select-none">
              S M P L
            </div>
            <p className="text-xs sm:text-[13px] text-[#A69E92] leading-relaxed max-w-sm mb-6">
              Thoughtfully designed architectural bathware, monolithic stone basins, and precision-engineered brass fittings created to elevate everyday spaces into sanctuaries of sensory calm.
            </p>
            <div className="flex items-center space-x-4 text-xs text-[#8E867A]">
              <span>Milan</span>
              <span>·</span>
              <span>Copenhagen</span>
              <span>·</span>
              <span>Melbourne</span>
              <span>·</span>
              <span>New York</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8E867A] font-medium mb-2">
              THE ARCHITECTURAL DIGEST
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE7] mb-3">
              Receive curated material monographs and new collection releases.
            </h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="architect@practice.com"
                className="flex-1 bg-[#24211E] border border-[#3E3A34] rounded-xs px-3.5 py-2.5 text-xs text-white placeholder:text-[#6E675D] focus:outline-none focus:border-[#A69380]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#725C48] hover:bg-[#856D56] text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-[11px] mb-3">
              Spaces
            </h4>
            <ul className="space-y-2 text-[#9E968A]">
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Master Bathroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Guest Bathroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Powder Room
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Kitchen Fittings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Wellness &amp; Hydro Spa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('spaces')} className="hover:text-white transition-colors cursor-pointer">
                  Commercial &amp; Hospitality
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-[11px] mb-3">
              Collections
            </h4>
            <ul className="space-y-2 text-[#9E968A]">
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Contemporary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Minimalist
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Sculptural
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Timeless Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Modern Classic
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition-colors cursor-pointer">
                  Organic Luxury
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-[11px] mb-3">
              Trade &amp; Studio
            </h4>
            <ul className="space-y-2 text-[#9E968A]">
              <li>
                <button onClick={onOpenTrade} className="hover:text-white transition-colors cursor-pointer text-[#C4B29E]">
                  Architect Trade Concierge
                </button>
              </li>
              <li>
                <button onClick={onOpenTrade} className="hover:text-white transition-colors cursor-pointer">
                  Order Physical Finish Box
                </button>
              </li>
              <li>
                <button onClick={() => alert('Opening BIM & Revit 3D Family Downloads...')} className="hover:text-white transition-colors cursor-pointer">
                  BIM / CAD Library (.DWG / .RFA)
                </button>
              </li>
              <li>
                <button onClick={() => alert('Opening Hospitality Project Pricing Schedule...')} className="hover:text-white transition-colors cursor-pointer">
                  Multi-Residential Specifications
                </button>
              </li>
              <li>
                <button onClick={() => alert('Certificate of Zero Lead & Green Building Compliance...')} className="hover:text-white transition-colors cursor-pointer">
                  LEED &amp; BREEAM Compliance
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-[11px] mb-3">
              Advisory &amp; Care
            </h4>
            <ul className="space-y-2 text-[#9E968A]">
              <li>
                <span className="text-stone-300">15-Year PVD Surface Guarantee</span>
              </li>
              <li>
                <span className="text-stone-300">Natural Stone Sealing &amp; Maintenance</span>
              </li>
              <li>
                <span className="text-stone-300">Insured Freight &amp; White Glove Courier</span>
              </li>
              <li>
                <span className="text-stone-300">Sustainable Low-Flow Aeration</span>
              </li>
              <li>
                <a href="mailto:concierge@smplbathware.com" className="text-[#C4B29E] hover:underline">
                  concierge@smplbathware.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[#282522] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#787166]">
          <p>© 2026 SMPL Architectural Bathware. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Specification</span>
            <span className="hover:text-stone-400 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
