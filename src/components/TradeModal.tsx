import React, { useState } from 'react';
import { X, CheckCircle, Box, Download, ShieldCheck } from 'lucide-react';

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TradeModal: React.FC<TradeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [studioName, setStudioName] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />

      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-sm max-w-xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D7] mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
              SMPL ARCHITECTURAL SERVICES
            </span>
            <h2 className="font-serif text-2xl text-[#24211E]">Trade &amp; Architect Concierge</h2>
          </div>
          <button onClick={onClose} className="p-1.5 text-stone-500 hover:text-black rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-10 h-10 text-[#725C48] mx-auto" />
            <h3 className="font-serif text-xl text-[#24211E]">Trade Application Received</h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Our architectural specifications team will review your practice details and dispatch your physical Sample Box containing all 6 PVD and stone samples.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#725C48] text-white text-xs tracking-wider uppercase rounded-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F2EDE5] rounded-xs border border-[#DDD5C8] mb-4">
              <div className="flex items-start gap-2">
                <Box className="w-4 h-4 text-[#725C48] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 text-[11px]">Physical Finish Box</div>
                  <div className="text-[10px] text-stone-600">Brass, Nickel, Bronze &amp; Stone</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Download className="w-4 h-4 text-[#725C48] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 text-[11px]">BIM &amp; Revit 3D</div>
                  <div className="text-[10px] text-stone-600">High-poly parametric families</div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">Architecture / Design Practice</label>
              <input
                type="text"
                required
                value={studioName}
                onChange={(e) => setStudioName(e.target.value)}
                placeholder="e.g. Studio Foster Partners / Olson Kundig"
                className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">Professional Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="architect@practice.com"
                className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">Architectural License or AIA / RIBA ID</label>
              <input
                type="text"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
                placeholder="AIA-98231 or practice registration"
                className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
              />
            </div>

            <p className="text-[10px] text-stone-500 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
              Verified trade partners receive 30% architectural margin and dedicated account director.
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-[#725C48] hover:bg-[#5C4938] text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors cursor-pointer"
            >
              Request Trade Portal Access &amp; Sample Kit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
