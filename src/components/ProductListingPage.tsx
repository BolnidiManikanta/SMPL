import React, { useState, useMemo } from 'react';
import {
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  LayoutGrid,
  Grid3X3,
  Heart,
  ShoppingBag,
  Eye,
  Check,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Product, FilterState } from '../types';
import { ALL_PRODUCTS } from '../data/bathwareData';

interface ProductListingPageProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onBackToHome: () => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Collections' },
  { id: 'Faucets', label: 'Faucets' },
  { id: 'Showers', label: 'Showers' },
  { id: 'Wash Basins', label: 'Wash Basins' },
  { id: 'Bathtubs', label: 'Bathtubs' },
  { id: 'Sanitaryware', label: 'Sanitaryware' },
  { id: 'Accessories', label: 'Accessories' },
];

const AVAILABLE_FINISHES = [
  { name: 'Brushed Brass', hex: '#bfa06b' },
  { name: 'Matte Black', hex: '#1c1b1a' },
  { name: 'Brushed Nickel', hex: '#8a8885' },
  { name: 'Aged Bronze', hex: '#5c4838' },
  { name: 'Gunmetal', hex: '#3f4247' },
  { name: 'Natural Sandstone', hex: '#ded4c5' },
  { name: 'Matte White Ceramic', hex: '#f0ede6' },
];

const AVAILABLE_MATERIALS = [
  'Forged Solid DZR Brass with PVD Finish',
  'Stainless Steel 316 Marine Grade',
  'Solid Honed Natural Limestone',
  'Vitreous China with NanoGlaze Hygiene Surface',
  'Dezincification Resistant Solid Brass',
  'Mineral Composite Stone Velvet-Touch',
  'Machined Brass & Frosted Borosilicate Glass',
];

const INSTALLATION_TYPES = [
  'Deck Mounted',
  'Wall Mounted',
  'Ceiling Mounted',
  'Concealed',
  'Freestanding',
];

export const ProductListingPage: React.FC<ProductListingPageProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedInstallations, setSelectedInstallations] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>('featured');
  const [gridColumns, setGridColumns] = useState<3 | 4>(4);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedProductFinishes, setSelectedProductFinishes] = useState<Record<string, string>>({});
  const [addedAnimations, setAddedAnimations] = useState<Record<string, boolean>>({});

  // Active filter count calculation
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedFinishes.length > 0) count += selectedFinishes.length;
    if (selectedMaterials.length > 0) count += selectedMaterials.length;
    if (selectedInstallations.length > 0) count += selectedInstallations.length;
    if (inStockOnly) count++;
    if (priceRange[0] > 0 || priceRange[1] < 5000) count++;
    return count;
  }, [
    selectedCategory,
    selectedFinishes,
    selectedMaterials,
    selectedInstallations,
    inStockOnly,
    priceRange,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedFinishes([]);
    setSelectedMaterials([]);
    setSelectedInstallations([]);
    setInStockOnly(false);
    setPriceRange([0, 5000]);
    setSortBy('featured');
  };

  const handleFinishToggle = (finishName: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finishName) ? prev.filter((f) => f !== finishName) : [...prev, finishName]
    );
  };

  const handleMaterialToggle = (materialName: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(materialName) ? prev.filter((m) => m !== materialName) : [...prev, materialName]
    );
  };

  const handleInstallationToggle = (installType: string) => {
    setSelectedInstallations((prev) =>
      prev.includes(installType) ? prev.filter((i) => i !== installType) : [...prev, installType]
    );
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // Price range
      if (prod.price < priceRange[0] || prod.price > priceRange[1]) {
        return false;
      }
      // Finishes
      if (selectedFinishes.length > 0) {
        const hasFinish = prod.finishes.some((f) => selectedFinishes.includes(f.name));
        if (!hasFinish) return false;
      }
      // Materials
      if (selectedMaterials.length > 0) {
        if (!selectedMaterials.includes(prod.material)) return false;
      }
      // Installation Type
      if (selectedInstallations.length > 0) {
        if (!selectedInstallations.includes(prod.installationType)) return false;
      }
      // Stock availability
      if (inStockOnly && !prod.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [
    selectedCategory,
    priceRange,
    selectedFinishes,
    selectedMaterials,
    selectedInstallations,
    inStockOnly,
    sortBy,
  ]);

  const handleAddProduct = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const finish =
      selectedProductFinishes[product.id] || product.finishes[0]?.name || 'Standard';
    onAddToCart(product, finish);
    setAddedAnimations((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimations((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F6F2] py-8 sm:py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6 font-mono tracking-wider">
          <button
            onClick={onBackToHome}
            className="hover:text-[#725C48] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`transition-colors cursor-pointer ${
              selectedCategory === 'all' ? 'text-[#1C1917] font-semibold' : 'hover:text-[#725C48]'
            }`}
          >
            Catalogue
          </button>
          {selectedCategory !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#1C1917] font-semibold">{selectedCategory}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E3DDD2]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#725C48]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#584636] font-semibold">
                ARCHITECTURAL CATALOGUE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1917] font-normal tracking-tight">
              {selectedCategory === 'all' ? 'All Architectural Collections' : selectedCategory}
            </h1>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Milled brassware, marine grade stainless showers, monolithic stone vessels, and rimless sanitary suites engineered to architectural tolerances.
          </p>
        </div>

        {/* Horizontal Category Nav Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto py-4 border-b border-[#E3DDD2] scrollbar-none">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#24211E] text-white shadow-xs'
                  : 'bg-[#F2ECE1] hover:bg-[#EAE4D8] text-stone-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Control Toolbar: Filters Button, Counter, Column Switcher, Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b border-[#E3DDD2]">
          {/* Mobile Filter Button & Desktop Count */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-[#DDD5C8] rounded-[2px] text-xs font-semibold uppercase tracking-wider text-stone-800 shadow-xs cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#725C48]" />
              <span>Filters ({activeFiltersCount})</span>
            </button>

            <span className="text-xs text-stone-600 font-mono">
              Showing <strong className="text-[#1C1917]">{filteredProducts.length}</strong> of{' '}
              {ALL_PRODUCTS.length} architectural fittings
            </span>
          </div>

          {/* Right Toolbar: Column Toggle & Sort Dropdown */}
          <div className="flex items-center gap-4">
            {/* 3 vs 4 Column Grid Switcher (Desktop) */}
            <div className="hidden lg:flex items-center border border-[#DDD5C8] rounded-[2px] bg-white p-0.5 shadow-xs">
              <button
                onClick={() => setGridColumns(3)}
                title="3 Columns Grid"
                className={`p-1.5 rounded-[2px] transition-colors cursor-pointer ${
                  gridColumns === 3 ? 'bg-[#725C48] text-white' : 'text-stone-500 hover:text-black'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                title="4 Columns Grid"
                className={`p-1.5 rounded-[2px] transition-colors cursor-pointer ${
                  gridColumns === 4 ? 'bg-[#725C48] text-white' : 'text-stone-500 hover:text-black'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline text-stone-500 uppercase tracking-wider font-medium">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as FilterState['sortBy'])}
                className="bg-white border border-[#DDD5C8] rounded-[2px] px-3 py-2 text-xs text-[#1C1917] font-medium focus:outline-none focus:border-[#725C48] shadow-xs cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Removable Chips */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-2">
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mr-1">
              Active Filters:
            </span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDE5] text-[#1C1917] border border-[#DDD5C8] text-xs rounded-full">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="hover:text-red-700 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedFinishes.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDE5] text-[#1C1917] border border-[#DDD5C8] text-xs rounded-full"
              >
                Finish: {f}
                <button
                  onClick={() => handleFinishToggle(f)}
                  className="hover:text-red-700 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {selectedInstallations.map((inst) => (
              <span
                key={inst}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDE5] text-[#1C1917] border border-[#DDD5C8] text-xs rounded-full"
              >
                {inst}
                <button
                  onClick={() => handleInstallationToggle(inst)}
                  className="hover:text-red-700 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2EDE5] text-[#1C1917] border border-[#DDD5C8] text-xs rounded-full">
                In Stock Only
                <button
                  onClick={() => setInStockOnly(false)}
                  className="hover:text-red-700 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="text-xs text-[#725C48] hover:underline font-semibold flex items-center gap-1 ml-2 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear All</span>
            </button>
          </div>
        )}

        {/* Main Body: Desktop Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Desktop Filter Sidebar (3 cols on lg) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-7 pr-4 border-r border-[#E3DDD2]">
            {/* Price Filter */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#1C1917]">
                Price Range
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-600 font-mono">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
                  className="w-full accent-[#725C48] cursor-pointer"
                />
              </div>
            </div>

            {/* Finishes Multi-select */}
            <div className="space-y-3 border-t border-[#EAE4D9] pt-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#1C1917]">
                Architectural Finishes
              </h3>
              <div className="space-y-2">
                {AVAILABLE_FINISHES.map((fin) => (
                  <label
                    key={fin.name}
                    className="flex items-center gap-2.5 text-xs text-[#2A2724] hover:text-black cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFinishes.includes(fin.name)}
                      onChange={() => handleFinishToggle(fin.name)}
                      className="rounded-xs text-[#725C48] focus:ring-[#725C48] accent-[#725C48]"
                    />
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: fin.hex }}
                    />
                    <span>{fin.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Installation Type */}
            <div className="space-y-3 border-t border-[#EAE4D9] pt-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#1C1917]">
                Installation Type
              </h3>
              <div className="space-y-2">
                {INSTALLATION_TYPES.map((inst) => (
                  <label
                    key={inst}
                    className="flex items-center gap-2.5 text-xs text-[#2A2724] hover:text-black cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedInstallations.includes(inst)}
                      onChange={() => handleInstallationToggle(inst)}
                      className="rounded-xs text-[#725C48] focus:ring-[#725C48] accent-[#725C48]"
                    />
                    <span>{inst}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-3 border-t border-[#EAE4D9] pt-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#1C1917]">
                Availability
              </h3>
              <label className="flex items-center gap-2.5 text-xs text-[#2A2724] hover:text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded-xs text-[#725C48] focus:ring-[#725C48] accent-[#725C48]"
                />
                <span>In Stock & Ready for Dispatch</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area (9 cols on lg) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FAF8F5] border border-[#DDD5C8] rounded-[3px] p-12 text-center space-y-4">
                <p className="text-stone-600 text-sm">
                  No architectural fittings found matching your active filter criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-[#725C48] text-white text-xs uppercase font-semibold tracking-wider rounded-[2px] cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 sm:gap-7 ${
                  gridColumns === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}
              >
                {filteredProducts.map((prod) => {
                  const activeFinish =
                    selectedProductFinishes[prod.id] || prod.finishes[0]?.name || 'Standard';
                  const wish = isWishlisted(prod.id);
                  const added = addedAnimations[prod.id];

                  return (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="group cursor-pointer flex flex-col bg-[#FAF8F5] border border-[#E3DDD2] hover:border-[#725C48] rounded-[3px] p-5 transition-all hover:shadow-xl hover:-translate-y-1"
                    >
                      {/* Product Image Stage (Large, consistent 340px) */}
                      <div className="relative w-full h-80 sm:h-88 bg-[#F4EFEA] rounded-[2px] overflow-hidden flex items-center justify-center p-6 mb-4 border border-[#EAE4D9]">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-108"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />

                        {/* Top Wishlist Heart */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(prod);
                          }}
                          aria-label="Save to architectural board"
                          className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                            wish
                              ? 'bg-[#725C48] text-white'
                              : 'bg-white/95 hover:bg-white text-stone-700 hover:text-[#725C48]'
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${wish ? 'fill-white stroke-none' : 'stroke-[1.75]'}`}
                          />
                        </button>

                        {/* SKU Tag */}
                        <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded-full border border-[#DDD5C8] text-[9.5px] font-mono uppercase text-stone-700 shadow-xs">
                          {prod.sku}
                        </div>

                        {/* 3D Available Badge */}
                        {prod.has3DModel && (
                          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#24211E]/85 text-white rounded-full text-[9px] font-semibold tracking-wider uppercase flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#C4B29E]" />
                            <span>3D Interactive</span>
                          </div>
                        )}
                      </div>

                      {/* Finish Swatches */}
                      <div className="flex items-center space-x-2 mb-2.5">
                        {prod.finishes.map((f) => (
                          <button
                            key={f.code}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProductFinishes((prev) => ({
                                ...prev,
                                [prod.id]: f.name,
                              }));
                            }}
                            title={f.name}
                            className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer border ${
                              activeFinish === f.name
                                ? 'ring-2 ring-offset-1 ring-[#725C48] scale-110 border-white'
                                : 'border-black/25 hover:scale-105'
                            }`}
                            style={{ backgroundColor: f.hex }}
                          />
                        ))}
                        <span className="text-[10.5px] text-stone-600 ml-1.5 font-medium truncate">
                          {activeFinish}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h2 className="text-[15.5px] sm:text-[16.5px] font-medium text-[#1C1917] group-hover:text-[#725C48] transition-colors line-clamp-1 mb-1">
                        {prod.name}
                      </h2>

                      {/* Installation Type & Category */}
                      <p className="text-[12px] text-stone-600 line-clamp-1 mb-3">
                        {prod.category} · {prod.installationType}
                      </p>

                      {/* Price & Availability */}
                      <div className="flex items-center justify-between mb-4 pt-2.5 border-t border-[#EAE4D9]">
                        <span className="font-mono font-semibold text-[#1C1917] text-[16px]">
                          ${prod.price.toLocaleString()}
                        </span>
                        <span className="text-[10.5px] text-emerald-800 font-semibold">
                          {prod.inStock ? 'In Stock' : 'Made to Order'}
                        </span>
                      </div>

                      {/* Action Buttons: Add to Bag & Quick View */}
                      <div className="mt-auto grid grid-cols-5 gap-2 pt-1">
                        <button
                          onClick={(e) => handleAddProduct(prod, e)}
                          className={`col-span-4 py-2.5 px-3 rounded-[2px] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-[0.99] ${
                            added
                              ? 'bg-emerald-800 text-white'
                              : 'bg-[#725C48] hover:bg-[#584636] text-white hover:shadow'
                          }`}
                        >
                          {added ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(prod);
                          }}
                          title="Quick View Specifications"
                          className="col-span-1 py-2.5 bg-[#EFEAE2] hover:bg-[#E5DFD4] text-[#1C1917] border border-[#DDD5C8] rounded-[2px] flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Slide-in Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-[#FAF8F5] border-l border-[#DDD5C8] p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E3DDD2]">
                <h3 className="text-base font-serif text-[#1C1917] font-semibold">Filter Fittings</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Max Price: ${priceRange[1]}
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
                  className="w-full accent-[#725C48]"
                />
              </div>

              {/* Finishes */}
              <div className="space-y-2 border-t border-[#E3DDD2] pt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Finishes
                </div>
                {AVAILABLE_FINISHES.map((fin) => (
                  <label key={fin.name} className="flex items-center gap-2 text-xs text-stone-800">
                    <input
                      type="checkbox"
                      checked={selectedFinishes.includes(fin.name)}
                      onChange={() => handleFinishToggle(fin.name)}
                      className="accent-[#725C48]"
                    />
                    <span>{fin.name}</span>
                  </label>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#E3DDD2] space-y-2">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-[#725C48] text-white text-xs uppercase font-semibold rounded-[2px]"
                >
                  Apply Filters ({filteredProducts.length} Items)
                </button>
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2.5 text-xs text-stone-600 hover:text-black font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
