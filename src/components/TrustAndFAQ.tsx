import React, { useState } from 'react';
import { ShieldCheck, Truck, Award, Sparkles, ChevronDown, Star, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is covered by SMPL’s 15-Year Architectural Warranty?',
    answer:
      'All SMPL brassware, showers, and sanitary fittings are backed by a comprehensive 15-year warranty covering our Physical Vapor Deposition (PVD) metallic finishes against tarnishing, flaking, or corrosion, as well as our Swiss-engineered progressive ceramic cartridges and thermostatic valve capsules.',
  },
  {
    question: 'Are 3D BIM, CAD, and Revit (.RFA) specification files available for download?',
    answer:
      'Yes. Every product page and catalogue item includes direct downloads for 2D technical dimensional cutsheets, BIM Revit (.RFA) family files, and 3D CAD models. Architectural practices can also request batch submittal packages directly through our Trade Portal.',
  },
  {
    question: 'How are heavy stone bathtubs and monolithic vessel basins shipped?',
    answer:
      'Stone baths and vanities are transported in heavy timber crates via our white-glove palletized freight carriers. Drivers coordinate directly with your site project manager, equipped with hydraulic lift-gates and offloading directly to ground-level staging areas.',
  },
  {
    question: 'Are SMPL fittings compliant with regional plumbing codes (cUPC, WaterMark, WRAS)?',
    answer:
      'Yes. SMPL fittings are certified lead-free under NSF/ANSI 61 and hold cUPC (North America), WaterMark AS/NZS 3718 (Australia/NZ), and WRAS (United Kingdom) approvals. Flow rates comply with LEED and BREEAM water conservation ratings.',
  },
  {
    question: 'How should PVD finishes and honed natural stone be maintained?',
    answer:
      'Clean daily with a soft microfibre cloth dampened with warm water and neutral pH soap. Never use acidic, abrasive, or chlorine-based cleaners. For honed travertine and limestone, re-apply breathable stone sealant once annually.',
  },
];

const REVIEWS = [
  {
    author: 'Elena Rostova',
    role: 'Principal Architect',
    firm: 'Rostova & Co. Architecture (London)',
    quote:
      '“SMPL fittings have become our studio standard for high-end residential estates. The brushed brass PVD finish has unmatched depth, and their ceramic progressive cartridges have performed flawlessly across all our projects.”',
    rating: 5,
    project: 'Kensington Villa Sanctuary',
  },
  {
    author: 'David Thorne, AIA',
    role: 'Design Director',
    firm: 'Thorne Studio (San Francisco)',
    quote:
      '“The monolithic travertine basins and thermostatic concealed showers provide that rare tactile weight of true luxury craftsmanship. The 3D CAD models integrated effortlessly into our Revit BIM workflow.”',
    rating: 5,
    project: 'Pacific Heights Residence',
  },
  {
    author: 'Camilla Lindqvist',
    role: 'Head of Hospitality Interiors',
    firm: 'Nordic Spaces (Stockholm)',
    quote:
      '“We specified SMPL for 48 boutique hotel suites. Outstanding water flow control, zero site issues during pressure testing, and exceptional post-specification support from their architectural trade team.”',
    rating: 5,
    project: 'Atelier Skanör Hotel',
  },
];

export const TrustAndFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-[#E3DDD2]">
      <div className="max-w-[1440px] mx-auto space-y-18">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F4EFEA] border border-[#E3DDD2] p-6 rounded-[2px] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#725C48]/15 text-[#725C48] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C1917] mb-1">15-Year PVD Warranty</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Anti-tarnish, anti-corrosion physical vapor deposition finishes engineered to last a lifetime.
              </p>
            </div>
          </div>

          <div className="bg-[#F4EFEA] border border-[#E3DDD2] p-6 rounded-[2px] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#725C48]/15 text-[#725C48] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C1917] mb-1">White-Glove Freight</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Palletized timber-crated delivery with lift-gate service coordinated directly to your job site.
              </p>
            </div>
          </div>

          <div className="bg-[#F4EFEA] border border-[#E3DDD2] p-6 rounded-[2px] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#725C48]/15 text-[#725C48] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C1917] mb-1">Zero-Lead Materials</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Forged solid DZR brass, marine stainless 316, and monolithic carved limestone with zero toxic alloys.
              </p>
            </div>
          </div>

          <div className="bg-[#F4EFEA] border border-[#E3DDD2] p-6 rounded-[2px] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#725C48]/15 text-[#725C48] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C1917] mb-1">BIM & Revit Portal</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Accurate parametric CAD models, WELS ratings, and cutsheets ready for architectural submittals.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Architect Reviews */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#584636] font-bold block mb-2">
              VERIFIED ARCHITECTURAL SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-normal tracking-tight">
              Trusted by Leading Design Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DDD5C8] p-6 sm:p-7 rounded-[2px] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-700 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed italic mb-6">
                    {rev.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE5DA]">
                  <div className="text-xs font-semibold text-stone-900">{rev.author}</div>
                  <div className="text-[11px] text-[#725C48] font-medium">{rev.role}</div>
                  <div className="text-[10.5px] text-stone-500">{rev.firm}</div>
                  <div className="mt-2 text-[10px] text-stone-400 font-mono">
                    Project: {rev.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Architectural FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#584636] font-bold block mb-2">
              TECHNICAL CONSULTATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#DDD5C8] rounded-[2px] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-stone-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#725C48]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-[13px] text-stone-600 leading-relaxed border-t border-[#F0EBE1] bg-[#FAF8F5]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
