import React, { useState } from 'react';
import {
  X,
  Check,
  ShieldCheck,
  Download,
  Plus,
  Heart,
  Truck,
  Box,
  FileText,
  Star,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  allProducts?: Product[];
  onClose: () => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onSelectProduct?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  allProducts = [],
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product?.finishes[0]?.name || 'Standard'
  );
  const [activeImageTab, setActiveImageTab] = useState<'main' | 'detail' | 'lifestyle'>('main');
  const [activeTab, setActiveTab] = useState<'specs' | 'box' | 'installation' | 'reviews'>('specs');
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const currentFinishObj =
    product.finishes.find((f) => f.name === selectedFinish) || product.finishes[0];

  const handleAdd = () => {
    onAddToCart(product, selectedFinish);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim()) {
      setPincodeChecked(true);
    }
  };

  // Find compatible products
  const compatibleProducts = allProducts.filter((p) =>
    product.compatibleProductIds?.includes(p.id)
  );

  const activeImageSrc =
    activeImageTab === 'lifestyle'
      ? product.lifestyleImage || product.image
      : activeImageTab === 'detail' && product.galleryImages[1]
      ? product.galleryImages[1]
      : product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />

      {/* Modal Dialog - Generous, Luxury Architectural Presentation */}
      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-sm max-w-6xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-6">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#E8E2D7] flex items-center justify-between bg-white">
          <div className="flex items-center space-x-3 text-xs text-stone-500">
            <span className="font-mono text-stone-400 font-medium">{product.modelNumber}</span>
            <span>·</span>
            <span className="font-medium text-[#725C48]">{product.department}</span>
            <span>·</span>
            <span className="text-stone-700 font-medium">{product.subcategory}</span>
            <span>·</span>
            <span className="text-stone-400">{product.collection} Collection</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-black rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Big HD Gallery (Expansive 7-column layout on desktop) */}
          <div className="lg:col-span-7 bg-[#F4EFE6] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E0D7CA]">
            {/* Main Big Image View - Expansive, high-res presentation */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center bg-white/70 rounded-xs border border-[#E5DFD4] shadow-xs overflow-hidden group">
              <img
                src={activeImageSrc}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Wishlist Button in Top Right */}
              <button
                onClick={() => onToggleWishlist(product)}
                aria-label="Toggle wishlist"
                className={`absolute top-4 right-4 p-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                  isWishlisted
                    ? 'bg-[#725C48] text-white border-transparent'
                    : 'bg-white/95 hover:bg-white text-stone-700 border-stone-300'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white stroke-none' : 'stroke-[1.5]'}`} />
              </button>

              {/* HD Badge */}
              <div className="absolute bottom-3 left-3 bg-[#24211E]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-[2px] font-mono pointer-events-none">
                Ultra-HD 300 DPI Studio View
              </div>
            </div>

            {/* Gallery Visual Thumbnail Previews */}
            <div className="mt-4 flex items-center gap-3">
              {product.galleryImages.slice(0, 3).map((imgUrl, idx) => {
                const label = idx === 0 ? 'Studio View' : idx === 1 ? 'Detail View' : 'In-Situ Suite';
                const isActive =
                  (idx === 0 && activeImageTab === 'main') ||
                  (idx === 1 && activeImageTab === 'detail') ||
                  (idx === 2 && activeImageTab === 'lifestyle');

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (idx === 0) setActiveImageTab('main');
                      else if (idx === 1) setActiveImageTab('detail');
                      else setActiveImageTab('lifestyle');
                    }}
                    className={`flex-1 flex items-center gap-2 p-1.5 rounded-xs border-2 transition-all cursor-pointer bg-white text-left ${
                      isActive
                        ? 'border-[#725C48] ring-1 ring-[#725C48]/40 shadow-xs'
                        : 'border-[#DDD5C8] opacity-75 hover:opacity-100 hover:border-stone-400'
                    }`}
                  >
                    <div className="w-12 h-10 rounded-xs overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <img
                        src={imgUrl}
                        alt={label}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 pr-1">
                      <span className={`block text-[11px] truncate leading-tight ${isActive ? 'font-semibold text-[#725C48]' : 'text-stone-700 font-medium'}`}>
                        {label}
                      </span>
                      <span className="block text-[9.5px] text-stone-400 uppercase tracking-wider">
                        {idx === 0 ? '300 DPI' : idx === 1 ? 'Texture' : 'Context'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Warranty & Lead Time Badges */}
            <div className="mt-6 pt-4 border-t border-[#DDD5C8] grid grid-cols-2 gap-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#725C48] shrink-0" />
                <span>15-Year PVD Surface Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Dispatch: {product.leadTimeDays} business days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Finishes, Technical Specs, Pincode & Purchasing */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Product Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl text-[#24211E] font-normal leading-tight mb-2">
                {product.name}
              </h2>

              {/* Price and Stock */}
              <div className="flex items-baseline space-x-4 mb-4">
                <span className="text-2xl font-mono font-medium text-[#24211E]">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Tax included · Trade pricing available
                </span>
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  In Stock
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#554E46] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Finish Selector */}
              <div className="mb-6 p-3.5 bg-white border border-[#E3DDD2] rounded-xs">
                <div className="flex justify-between items-center mb-2.5 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#24211E]">
                    Architectural Finish: <strong className="text-[#725C48]">{selectedFinish}</strong>
                  </span>
                  <span className="text-stone-400 font-mono text-[11px]">
                    Code: {currentFinishObj?.code}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5">
                  {product.finishes.map((f) => (
                    <button
                      key={f.code}
                      onClick={() => setSelectedFinish(f.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        selectedFinish === f.name
                          ? 'border-[#725C48] ring-2 ring-[#725C48]/30 scale-110'
                          : 'border-white hover:scale-105'
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

              {/* Delivery / PIN Code Checker */}
              <div className="mb-6 p-3 bg-[#F4EFE6] border border-[#DDD5C8] rounded-xs text-xs">
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Postal / PIN Code for courier estimate"
                    className="flex-1 bg-white border border-[#D5CCC0] rounded-xs px-3 py-1.5 text-xs text-[#24211E] focus:outline-none focus:border-[#725C48]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#24211E] text-white text-xs uppercase tracking-wider rounded-xs font-medium cursor-pointer"
                  >
                    Check
                  </button>
                </form>
                {pincodeChecked && (
                  <p className="text-[11px] text-emerald-800 font-medium mt-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    White-Glove Courier available to {pincode}: Estimated arrival within {product.leadTimeDays + 2} business days.
                  </p>
                )}
              </div>

              {/* Detail Tabs: Specs / In Box / Installation / Reviews */}
              <div className="border-b border-[#E5DFD4] flex items-center space-x-4 text-xs font-medium mb-4">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'specs' ? 'text-[#24211E] font-semibold' : 'text-stone-500 hover:text-black'
                  }`}
                >
                  Technical Specifications
                  {activeTab === 'specs' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('box')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'box' ? 'text-[#24211E] font-semibold' : 'text-stone-500 hover:text-black'
                  }`}
                >
                  In The Box
                  {activeTab === 'box' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('installation')}
                  className={`pb-2 transition-colors relative cursor-pointer ${
                    activeTab === 'installation' ? 'text-[#24211E] font-semibold' : 'text-stone-500 hover:text-black'
                  }`}
                >
                  Installation &amp; CAD
                  {activeTab === 'installation' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                  )}
                </button>
                {product.reviews && product.reviews.length > 0 && (
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 transition-colors relative cursor-pointer ${
                      activeTab === 'reviews' ? 'text-[#24211E] font-semibold' : 'text-stone-500 hover:text-black'
                    }`}
                  >
                    Architect Reviews ({product.reviews.length})
                    {activeTab === 'reviews' && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                    )}
                  </button>
                )}
              </div>

              {/* Tab Contents */}
              <div className="text-xs text-stone-700 min-h-[140px]">
                {activeTab === 'specs' && (
                  <div className="space-y-2 bg-[#F3EFE7]/60 p-3.5 rounded-xs border border-[#E3DDD2]">
                    <div className="grid grid-cols-2 gap-2 text-[11.5px]">
                      <div>
                        <span className="text-stone-500">Material:</span> <strong>{product.specs.material}</strong>
                      </div>
                      <div>
                        <span className="text-stone-500">Mounting:</span> <strong>{product.specs.mountingType}</strong>
                      </div>
                      <div>
                        <span className="text-stone-500">Dimensions:</span> <strong>{product.specs.dimensions}</strong>
                      </div>
                      {product.specs.flowRate && (
                        <div>
                          <span className="text-stone-500">Flow Velocity:</span> <strong>{product.specs.flowRate}</strong>
                        </div>
                      )}
                      {product.specs.cartridge && (
                        <div>
                          <span className="text-stone-500">Valve Cartridge:</span> <strong>{product.specs.cartridge}</strong>
                        </div>
                      )}
                      {product.specs.operatingPressure && (
                        <div>
                          <span className="text-stone-500">Pressure Range:</span> <strong>{product.specs.operatingPressure}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'box' && (
                  <div className="space-y-3 p-3 bg-white border border-[#E3DDD2] rounded-xs">
                    <div>
                      <h4 className="font-semibold text-stone-900 text-[11px] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-[#725C48]" />
                        <span>Included in Package</span>
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-[11.5px] text-stone-600">
                        {product.whatsInTheBox.included.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {product.whatsInTheBox.requiredSeparately && (
                      <div className="pt-2 border-t border-stone-200">
                        <h4 className="font-semibold text-stone-900 text-[11px] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 text-amber-900">
                          <Info className="w-3.5 h-3.5" />
                          <span>Required Separately (Concealed Fittings)</span>
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-[11.5px] text-stone-600">
                          {product.whatsInTheBox.requiredSeparately.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'installation' && (
                  <div className="space-y-3 p-3 bg-white border border-[#E3DDD2] rounded-xs">
                    <p className="text-[11.5px] leading-relaxed text-stone-600">
                      {product.installationGuide}
                    </p>
                    <div className="flex gap-3 pt-2 border-t border-stone-200">
                      <button
                        onClick={() => alert(`Downloading BIM/Revit package for ${product.modelNumber}...`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-xs text-[11px] text-stone-800 font-medium cursor-pointer"
                      >
                        <Download className="w-3 h-3 text-[#725C48]" />
                        <span>BIM &amp; Revit (.RFA)</span>
                      </button>
                      <button
                        onClick={() => alert(`Downloading CAD 2D/3D drawing for ${product.modelNumber}...`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-xs text-[11px] text-stone-800 font-medium cursor-pointer"
                      >
                        <FileText className="w-3 h-3 text-[#725C48]" />
                        <span>CAD Spec (.DWG)</span>
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && product.reviews && (
                  <div className="space-y-3">
                    {product.reviews.map((rev) => (
                      <div key={rev.id} className="p-3 bg-white border border-[#E3DDD2] rounded-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-stone-900">{rev.author}</div>
                          <div className="flex text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="text-[10px] text-stone-500">
                          {rev.role} · {rev.project} · {rev.date}
                        </div>
                        <p className="text-[11.5px] text-stone-600 italic">"{rev.comment}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E8E2D7] space-y-2">
              <button
                onClick={handleAdd}
                className={`w-full py-3.5 px-4 rounded-xs text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  added
                    ? 'bg-emerald-800 text-white'
                    : 'bg-[#725C48] hover:bg-[#5C4938] text-white shadow-md'
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

              {/* Compatible Look Recommendations */}
              {compatibleProducts.length > 0 && onSelectProduct && (
                <div className="pt-3 border-t border-[#EAE4D9]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 block mb-2">
                    Compatible Architectural Fittings
                  </span>
                  <div className="flex items-center space-x-2">
                    {compatibleProducts.map((cp) => (
                      <button
                        key={cp.id}
                        onClick={() => onSelectProduct(cp)}
                        className="flex items-center space-x-2 p-1.5 bg-[#F2EDE5] hover:bg-white rounded border border-stone-200 text-left transition-colors cursor-pointer"
                      >
                        <img src={cp.image} alt={cp.name} className="w-8 h-8 object-contain" />
                        <div className="text-[10px]">
                          <div className="font-medium text-stone-900 truncate w-28">{cp.name}</div>
                          <div className="font-mono text-stone-500">${cp.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
