import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product?.finishes[0]?.name || 'Standard'
  );
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const currentFinishObj =
    product.finishes.find((f) => f.name === selectedFinish) || product.finishes[0];

  const handleAdd = () => {
    onAddToCart(product, selectedFinish);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-sm max-w-3xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image & Finish preview */}
          <div className="bg-[#F2EDE5] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#E0D7CA]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 max-w-full object-contain filter drop-shadow-md"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={() => onToggleWishlist(product)}
              className={`absolute top-4 left-4 p-2 rounded-full border transition-colors ${
                isWishlisted
                  ? 'bg-[#725C48] text-white border-transparent'
                  : 'bg-white/80 hover:bg-white text-stone-700 border-stone-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>

            <div className="mt-4 px-3 py-1 bg-white/70 backdrop-blur-xs rounded-full text-[11px] text-stone-600 border border-stone-200">
              Selected: <span className="font-medium text-[#24211E]">{selectedFinish}</span>
            </div>
          </div>

          {/* Right: Specifications & Purchasing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                  {product.category} · {product.collection}
                </span>
                <button
                  onClick={onClose}
                  className="p-1 text-stone-400 hover:text-black rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#24211E] font-normal leading-snug mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl font-mono font-medium text-[#24211E]">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-xs text-stone-500">Includes 15-Year PVD Warranty</span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Finishes Picker */}
              <div className="mb-5">
                <div className="text-[11px] uppercase tracking-wider text-stone-700 font-medium mb-2">
                  Architectural Finish: <span className="text-[#725C48] font-semibold">{selectedFinish}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {product.finishes.map((f) => (
                    <button
                      key={f.code}
                      onClick={() => setSelectedFinish(f.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        selectedFinish === f.name
                          ? 'border-[#725C48] ring-2 ring-[#725C48]/30 scale-105'
                          : 'border-white/80 hover:scale-105'
                      }`}
                      style={{ backgroundColor: f.hex }}
                      title={f.name}
                    >
                      {selectedFinish === f.name && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow-xs" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="p-3.5 bg-[#F2EDE5] rounded-xs space-y-2 text-xs mb-5 border border-[#DDD5C8]">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-600">
                  Technical Specifications
                </div>
                <div className="text-[11px] text-stone-700">
                  <span className="font-medium text-stone-900">Material:</span> {product.material}
                </div>
                <div className="text-[11px] text-stone-700">
                  <span className="font-medium text-stone-900">Dimensions:</span> {product.dimensions}
                </div>
                <div className="space-y-1 pt-1 border-t border-[#DDD5C8]">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-[#725C48]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 px-4 rounded-xs text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  added
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#725C48] hover:bg-[#5C4938] text-white shadow-xs'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag — ${product.price.toLocaleString()}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  In Stock & Ready for Dispatch
                </span>
                <button
                  onClick={() => alert('Downloading BIM / CAD 3D specifications (.DWG / .RFA)...')}
                  className="flex items-center gap-1 hover:text-[#725C48] cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>CAD / Revit File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
