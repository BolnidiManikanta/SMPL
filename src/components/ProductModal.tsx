import React, { useState } from 'react';
import {
  X,
  Check,
  ShieldCheck,
  Download,
  Plus,
  Minus,
  Heart,
  Sparkles,
  ZoomIn,
  ShoppingBag,
  RotateCw,
  FileText,
  Wrench,
  BookOpen,
  Send,
  ArrowRight,
  Maximize2,
  ChevronRight,
} from 'lucide-react';
import { Product, ProductFinish } from '../types';
import { ALL_PRODUCTS } from '../data/bathwareData';
import { Product3DViewer } from './Product3DViewer';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, finish: string) => void;
  onBuyNow?: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onOpenTradeQuote?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onOpenTradeQuote,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product?.finishes[0]?.name || 'Brushed Brass'
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'photo' | '3d'>('photo');
  const [activeSpecTab, setActiveSpecTab] = useState<'dimensions' | 'technical' | 'warranty'>('dimensions');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!product) return null;

  const currentFinishObj =
    product.finishes.find((f) => f.name === selectedFinish) || product.finishes[0];

  // Dynamic SKU with finish code
  const dynamicSku = `${product.sku}-${currentFinishObj?.code || 'BB'}`;

  const galleryList = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  const currentMainImage = galleryList[activeImageIndex] || product.image;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedFinish);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleBuyNowClick = () => {
    onAddToCart(product, selectedFinish);
    if (onBuyNow) {
      onBuyNow(product, selectedFinish);
    }
  };

  const handleDownloadDoc = (docType: string) => {
    // Generate a formatted printable architectural cutsheet
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>SMPL Architectural Cut Sheet — ${product.name}</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1c1917; }
              h1 { font-family: serif; font-size: 28px; margin-bottom: 4px; }
              .header { border-bottom: 2px solid #725c48; padding-bottom: 12px; margin-bottom: 24px; }
              .sku { font-family: monospace; color: #584636; font-size: 14px; }
              .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
              .spec-item { margin-bottom: 12px; border-bottom: 1px solid #e7e0d3; padding-bottom: 6px; }
              .label { font-weight: 600; font-size: 13px; color: #555; }
              .val { font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>S M P L — LUXURY ARCHITECTURAL BATHWARE</h1>
              <div class="sku">Product: ${product.name} | SKU: ${dynamicSku} | Finish: ${selectedFinish}</div>
            </div>
            <div class="grid">
              <div>
                <h3>Technical Specifications</h3>
                <div class="spec-item"><div class="label">Material</div><div class="val">${product.material}</div></div>
                <div class="spec-item"><div class="label">Installation</div><div class="val">${product.installationType}</div></div>
                <div class="spec-item"><div class="label">Dimensions</div><div class="val">${product.dimensions}</div></div>
                <div class="spec-item"><div class="label">Flow Rate</div><div class="val">${product.technicalSpecs?.flowRate || '5.0 L/min'}</div></div>
                <div class="spec-item"><div class="label">Cartridge</div><div class="val">${product.technicalSpecs?.cartridge || 'Precision Ceramic'}</div></div>
                <div class="spec-item"><div class="label">Warranty</div><div class="val">${product.warranty}</div></div>
              </div>
              <div>
                <h3>Certifications & Compliance</h3>
                <ul>
                  ${(product.technicalSpecs?.certifications || ['cUPC', 'WRAS', 'WaterMark']).map((c) => `<li>${c}</li>`).join('')}
                </ul>
                <p><em>Generated automatically by SMPL Specification Portal for AIA / RIBA project submittals.</em></p>
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
    setDownloadSuccess(`Generated ${docType} cutsheet.`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  // Cross-sell items
  const relatedProducts = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Dialog (Generous 6xl width for luxury architectural impact) */}
        <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-[3px] max-w-6xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] overflow-y-auto">
            {/* Left 7 Columns: Product Gallery, 3D Canvas Switcher & Thumbnails */}
            <div className="lg:col-span-7 bg-[#F4EFEA] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E0D7CA]">
              {/* Top View Mode Switcher: Studio Photography vs 3D Interactive View */}
              <div className="flex items-center justify-between gap-4 mb-4 z-10">
                <div className="flex items-center bg-white border border-[#DDD5C8] rounded-full p-1 shadow-xs">
                  <button
                    onClick={() => setActiveTab('photo')}
                    className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                      activeTab === 'photo'
                        ? 'bg-[#725C48] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    Studio Photography (1024px)
                  </button>
                  <button
                    onClick={() => setActiveTab('3d')}
                    className={`px-3.5 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === '3d'
                        ? 'bg-[#725C48] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>3D Interactive / 360°</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleWishlist(product)}
                    aria-label="Save to architectural board"
                    className={`p-2.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                      isWishlisted
                        ? 'bg-[#725C48] text-white border-transparent'
                        : 'bg-white/95 hover:bg-white text-stone-700 hover:text-[#725C48] border-stone-300'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${isWishlisted ? 'fill-white stroke-none' : 'stroke-[1.75]'}`}
                    />
                  </button>

                  {activeTab === 'photo' && (
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      title="Open Fullscreen Lightbox"
                      className="p-2.5 rounded-full bg-white/95 border border-stone-300 text-stone-700 hover:text-black transition-all cursor-pointer shadow-xs"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Main Showcase Stage */}
              {activeTab === 'photo' ? (
                <div className="w-full h-80 sm:h-96 md:h-[420px] flex items-center justify-center py-4 my-auto relative">
                  <img
                    src={currentMainImage}
                    alt={product.name}
                    onClick={() => setIsLightboxOpen(true)}
                    className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-300 hover:scale-105 cursor-zoom-in"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-[#DDD5C8] text-[10px] uppercase tracking-wider font-semibold text-stone-700 shadow-xs flex items-center gap-1">
                    <ZoomIn className="w-3 h-3 text-[#725C48]" />
                    <span>Click for Zoom Lightbox</span>
                  </div>
                </div>
              ) : (
                <div className="w-full my-auto">
                  <Product3DViewer
                    productName={product.name}
                    category={product.category}
                    finishes={product.finishes}
                    activeFinish={selectedFinish}
                    onSelectFinish={setSelectedFinish}
                  />
                </div>
              )}

              {/* Multi-Image Thumbnail Selector (when in Photo mode) */}
              {activeTab === 'photo' && galleryList.length > 1 && (
                <div className="flex items-center gap-3 pt-4 border-t border-[#E0D7CA]">
                  {galleryList.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[2px] bg-white border-2 p-1.5 overflow-hidden transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#725C48] ring-2 ring-[#725C48]/30 scale-105'
                          : 'border-[#DDD5C8] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right 5 Columns: Product Information, Dynamic SKU, Finish Selector, Specs & Actions */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Category & Close */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#584636] font-semibold">
                    {product.category} · {product.collection}
                  </span>
                  <button
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="p-1.5 text-stone-400 hover:text-black hover:bg-[#EFEAE2] rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Name */}
                <h1 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal leading-tight mb-2">
                  {product.name}
                </h1>

                {/* Dynamic SKU & Stock Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-2 py-0.5 bg-[#EFEAE2] border border-[#DDD5C8] rounded-xs text-[#584636] font-semibold">
                    SKU: {dynamicSku}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {product.inStock ? 'In Stock (Ships in 24h)' : 'Made to Order'}
                  </span>
                </div>

                {/* Price & Warranty */}
                <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[#E7E0D3]">
                  <span className="text-3xl font-mono font-semibold text-[#1C1917]">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-600 font-normal">
                    Includes 15-Year PVD Warranty
                  </span>
                </div>

                {/* Editorial Description */}
                <p className="text-xs sm:text-[13px] text-[#36322D] leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Architectural Finish Swatches (Updates dynamic SKU & 3D Material) */}
                <div className="mb-5 bg-[#F2EDE5] p-3.5 rounded-[2px] border border-[#DDD5C8]">
                  <div className="text-[11px] uppercase tracking-wider text-stone-800 font-bold mb-2.5 flex items-center justify-between">
                    <span>Selected Finish:</span>
                    <span className="text-[#725C48] font-bold">{selectedFinish}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    {product.finishes.map((f) => (
                      <button
                        key={f.code}
                        onClick={() => setSelectedFinish(f.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer shadow-xs ${
                          selectedFinish === f.name
                            ? 'border-[#725C48] ring-2 ring-[#725C48]/40 scale-110'
                            : 'border-white/80 hover:scale-105'
                        }`}
                        style={{ backgroundColor: f.hex }}
                        title={f.name}
                      >
                        {selectedFinish === f.name && (
                          <Check className="w-4 h-4 text-white drop-shadow-md stroke-[2.5]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tabbed Technical Specifications & Downloads */}
                <div className="mb-6">
                  {/* Tab Headers */}
                  <div className="flex items-center border-b border-[#DDD5C8] text-xs font-semibold text-stone-600 mb-3">
                    <button
                      onClick={() => setActiveSpecTab('dimensions')}
                      className={`pb-2 mr-4 transition-colors relative cursor-pointer ${
                        activeSpecTab === 'dimensions'
                          ? 'text-[#1C1917] font-bold'
                          : 'hover:text-black'
                      }`}
                    >
                      Dimensions & Form
                      {activeSpecTab === 'dimensions' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveSpecTab('technical')}
                      className={`pb-2 mr-4 transition-colors relative cursor-pointer ${
                        activeSpecTab === 'technical'
                          ? 'text-[#1C1917] font-bold'
                          : 'hover:text-black'
                      }`}
                    >
                      Technical & Flow
                      {activeSpecTab === 'technical' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveSpecTab('warranty')}
                      className={`pb-2 transition-colors relative cursor-pointer ${
                        activeSpecTab === 'warranty'
                          ? 'text-[#1C1917] font-bold'
                          : 'hover:text-black'
                      }`}
                    >
                      15-Yr Warranty
                      {activeSpecTab === 'warranty' && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#725C48]" />
                      )}
                    </button>
                  </div>

                  {/* Tab Body */}
                  <div className="bg-white p-3.5 rounded-[2px] border border-[#DDD5C8] text-xs space-y-2">
                    {activeSpecTab === 'dimensions' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between py-1 border-b border-stone-100">
                          <span className="text-stone-500">Overall Dimensions:</span>
                          <span className="font-mono font-medium text-stone-900">{product.dimensions}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-100">
                          <span className="text-stone-500">Installation Type:</span>
                          <span className="font-medium text-stone-900">{product.installationType}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-stone-500">Net Weight:</span>
                          <span className="font-mono font-medium text-stone-900">
                            {product.dimensionsDetail?.weight || '2.4 kg'}
                          </span>
                        </div>
                      </div>
                    )}

                    {activeSpecTab === 'technical' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between py-1 border-b border-stone-100">
                          <span className="text-stone-500">Cartridge:</span>
                          <span className="font-medium text-stone-900 text-right">
                            {product.technicalSpecs?.cartridge || 'Swiss Ceramic Disc'}
                          </span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-stone-100">
                          <span className="text-stone-500">Flow Rate:</span>
                          <span className="font-medium text-stone-900">
                            {product.technicalSpecs?.flowRate || '5.0 L/min aerated stream'}
                          </span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-stone-500">Pressure:</span>
                          <span className="font-medium text-stone-900">
                            {product.technicalSpecs?.operatingPressure || '1.0 – 5.0 bar'}
                          </span>
                        </div>
                      </div>
                    )}

                    {activeSpecTab === 'warranty' && (
                      <div className="space-y-2 text-stone-700">
                        <p className="leading-snug">
                          Backed by SMPL&apos;s 15-Year Physical Vapor Deposition (PVD) finish and valve warranty.
                        </p>
                        <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-[11px]">
                          <ShieldCheck className="w-4 h-4" />
                          <span>100% Anti-Tarnish, Anti-Corrosion & Zero-Lead Certified</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Downloadable Cut Sheets (Instant Formatted PDF Generator) */}
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button
                      onClick={() => handleDownloadDoc('Architectural Specification')}
                      className="py-2 px-2.5 bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#DDD5C8] rounded-[2px] text-[10.5px] font-semibold text-stone-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#725C48]" />
                      <span>Product Spec PDF</span>
                    </button>
                    <button
                      onClick={() => handleDownloadDoc('Installation Guide')}
                      className="py-2 px-2.5 bg-[#FAF8F5] hover:bg-[#EFEAE2] border border-[#DDD5C8] rounded-[2px] text-[10.5px] font-semibold text-stone-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Wrench className="w-3.5 h-3.5 text-[#725C48]" />
                      <span>Install Guide PDF</span>
                    </button>
                  </div>
                  {downloadSuccess && (
                    <div className="text-[11px] text-emerald-800 font-semibold mt-1.5 text-center">
                      ✓ {downloadSuccess}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons: Quantity Stepper, Add to Bag, Buy Now & Request Trade Quote */}
              <div className="space-y-3 pt-3 border-t border-[#E7E0D3]">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#DDD5C8] rounded-[2px] bg-white h-12 px-2 shadow-xs shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 text-stone-600 hover:text-black cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-mono font-medium text-sm text-[#1C1917]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 text-stone-600 hover:text-black cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 h-12 px-4 rounded-[2px] text-xs tracking-[0.14em] uppercase font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99] ${
                      added
                        ? 'bg-emerald-800 text-white'
                        : 'bg-[#725C48] hover:bg-[#584636] text-white hover:shadow-md'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag — ${(product.price * quantity).toLocaleString()}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Secondary Actions: Buy Now & Request Trade Quote */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={handleBuyNowClick}
                    className="h-11 px-3 bg-[#24211E] hover:bg-black text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      if (onOpenTradeQuote) onOpenTradeQuote(product);
                    }}
                    className="h-11 px-3 bg-white hover:bg-[#F2ECE1] text-[#1C1917] border border-[#DDD5C8] text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#725C48]" />
                    <span>Request Trade Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom "Complete Your Bathroom" Complementary Recommendations */}
          <div className="border-t border-[#E3DDD2] p-6 sm:p-8 bg-[#F8F6F2]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10.5px] uppercase tracking-[0.24em] text-[#584636] font-bold block mb-1">
                  CURATED PAIRINGS
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#1C1917] font-normal">
                  Complete Your Architectural Bathroom
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    // switch product
                    setSelectedFinish(rel.finishes[0]?.name || 'Standard');
                    setActiveImageIndex(0);
                    // trigger parent selection
                    onAddToCart(rel, rel.finishes[0]?.name || 'Standard');
                  }}
                  className="bg-white border border-[#DDD5C8] hover:border-[#725C48] rounded-[2px] p-3 flex items-center gap-3 transition-all shadow-2xs hover:shadow-sm cursor-pointer group"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-14 h-14 object-contain bg-[#F4EFEA] rounded-xs p-1 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-semibold text-stone-900 group-hover:text-[#725C48] truncate">
                      {rel.name}
                    </h4>
                    <span className="text-xs font-mono font-medium text-stone-700 block">
                      ${rel.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#725C48] font-semibold hover:underline">
                      + Add Pairing to Bag
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={currentMainImage}
            alt={product.name}
            className="max-h-[85vh] max-w-[90vw] object-contain filter drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="mt-4 text-center text-white/90 font-serif text-lg">
            {product.name} — <span className="font-mono text-stone-300">{dynamicSku}</span>
          </div>
        </div>
      )}
    </>
  );
};
