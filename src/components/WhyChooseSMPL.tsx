import React from 'react';
import {
  Award,
  Layers,
  Sparkles,
  Compass,
  Headphones,
  Ruler,
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    icon: Award,
    title: 'Premium Product Quality',
    description:
      'Every fixture and ceramic vessel is manufactured to exacting tolerance standards for quiet flow and lasting alignment.',
  },
  {
    icon: Layers,
    title: 'Durable Materials',
    description:
      'Solid DZR brass bodies, precision ceramic disc cartridges, and high-density vitreous china engineered for daily longevity.',
  },
  {
    icon: Sparkles,
    title: 'Elegant Finishes',
    description:
      'PVD surface bonding and silk-matte glazes in neutral warm tones calibrated to resist tarnishing and mineral residue.',
  },
  {
    icon: Compass,
    title: 'Expert Design Assistance',
    description:
      'One-on-one specification support helping homeowners and architects coordinate finishes, rough-ins, and basin heights.',
  },
  {
    icon: Headphones,
    title: 'Reliable Customer Support',
    description:
      'Direct post-purchase guidance covering finish samples, spare cartridges, and verified order fulfilment.',
  },
  {
    icon: Ruler,
    title: 'Installation Guidance',
    description:
      'Clear product dimension schedules, concealed frame documentation, and mounting instructions included with every SKU.',
  },
];

export const WhyChooseSMPL: React.FC = () => {
  return (
    <section className="cv-auto w-full bg-[#FAF7F2] py-16 sm:py-22 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="block text-[11px] uppercase tracking-[0.24em] text-[#6E5641] font-semibold mb-2.5">
            The SMPL Standard
          </span>
          <h2 className="font-serif text-[32px] sm:text-[42px] text-[#1E1915] font-normal tracking-tight leading-[1.1]">
            Why Choose SMPL
          </h2>
        </div>

        {/* 6 Refined Architectural Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TRUST_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#E5DDD0] rounded-xl p-6 sm:p-7 flex items-start gap-4 transition-shadow hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-full bg-[#F5F0E7] border border-[#E2D9CB] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#6E5641] stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="font-serif text-[20px] text-[#1E1915] font-normal leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5B534B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
