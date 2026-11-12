import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Check, Plus, Eye, Heart, X, RotateCcw } from 'lucide-react';
import { Product } from '../types';

interface ProductCatalogViewProps {
  products: Product[];
  selectedDepartment: string | null;
  selectedCategory: string | null;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onCloseCatalog: () => void;
  onCompareProducts: (products: Product[]) => void;
}

export const ProductCatalogView: React.FC<ProductCatalogViewProps> = ({
  products,
  selectedDepartment,
  selectedCategory,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onCloseCatalog,
  onCompareProducts,
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string>(selectedDepartment || 'All');
  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory || null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedMounting, setSelectedMounting] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [priceMax, setPriceMax] = useState<number>(5000);
  const [sortBy, setSortBy] = useState<'featured' | 'bestselling' | 'new' | 'price-asc' | 'price-desc'>('featured');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [productFinishesMap, setProductFinishesMap] = useState<Record<string, string>>({});
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  // Synchronize internal state whenever selectedDepartment or selectedCategory prop updates
  React.useEffect(() => {
    setActiveDepartment(selectedDepartment || 'All');
    setActiveCategory(selectedCategory || null);
    setActiveSubcategory(null);
  }, [selectedDepartment, selectedCategory]);

  const departments = ['All', 'Bathroom', 'Faucets', 'Showers', 'Sanitaryware', 'Kitchen'];

  // Extract available categories based on active department
  const availableCategories = useMemo(() => {
    const list = products
      .filter((p) => activeDepartment === 'All' || p.department.toLowerCase() === activeDepartment.toLowerCase())
      .map((p) => p.category);
    return Array.from(new Set(list));
  }, [products, activeDepartment]);

  // Extract available subcategories based on active department and active category
  const availableSubcategories = useMemo(() => {
    const list = products
      .filter((p) => {
        if (activeDepartment !== 'All' && p.department.toLowerCase() !== activeDepartment.toLowerCase()) return false;
        if (activeCategory) {
          const catNorm = activeCategory.toLowerCase().trim();
          const pCatNorm = p.category.toLowerCase().trim();
          const pSubNorm = p.subcategory.toLowerCase().trim();
          const matches = pCatNorm.includes(catNorm) || catNorm.includes(pCatNorm) || pSubNorm.includes(catNorm) || catNorm.includes(pSubNorm);
          if (!matches) return false;
        }
        return true;
      })
      .map((p) => p.subcategory);
    return Array.from(new Set(list));
  }, [products, activeDepartment, activeCategory]);

  // Extract all unique finishes across products
  const availableFinishes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.finishes.forEach((f) => set.add(f.name)));
    return Array.from(set);
  }, [products]);

  // Extract all mounting types
  const availableMountings = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.specs?.mountingType) set.add(p.specs.mountingType);
    });
    return Array.from(set);
  }, [products]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        // 1. Department match
        if (activeDepartment !== 'All' && prod.department.toLowerCase() !== activeDepartment.toLowerCase()) {
          return false;
        }

        // 2. Category or Finish match
        if (activeCategory) {
          const catNorm = activeCategory.toLowerCase().trim();
          const pCatNorm = prod.category.toLowerCase().trim();
          const pSubNorm = prod.subcategory.toLowerCase().trim();
          const matchesFinish = prod.finishes.some((f) =>
            f.name.toLowerCase().includes(catNorm) || catNorm.includes(f.name.toLowerCase())
          );
          const matchesCategory =
            pCatNorm.includes(catNorm) ||
            catNorm.includes(pCatNorm) ||
            pSubNorm.includes(catNorm) ||
            catNorm.includes(pSubNorm) ||
            matchesFinish;
          if (!matchesCategory) return false;
        }

        // 3. Subcategory match
        if (activeSubcategory && prod.subcategory !== activeSubcategory) {
          return false;
        }

        // 4. Stock & Price
        if (onlyInStock && !prod.inStock) return false;
        if (prod.price > priceMax) return false;

        // 5. Finishes
        if (selectedFinishes.length > 0) {
          const hasFinish = prod.finishes.some((f) => selectedFinishes.includes(f.name));
          if (!hasFinish) return false;
        }

        // 6. Mounting
        if (selectedMounting.length > 0) {
          if (!selectedMounting.includes(prod.specs?.mountingType)) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'new') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        if (sortBy === 'bestselling') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
        return 0; // featured default
      });
  }, [products, activeDepartment, activeCategory, activeSubcategory, onlyInStock, priceMax, selectedFinishes, selectedMounting, sortBy]);

  const toggleFinishFilter = (finish: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish) ? prev.filter((f) => f !== finish) : [...prev, finish]
    );
  };

  const toggleMountingFilter = (mounting: string) => {
    setSelectedMounting((prev) =>
      prev.includes(mounting) ? prev.filter((m) => m !== mounting) : [...prev, mounting]
    );
  };

  const handleFinishSelect = (productId: string, finishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setProductFinishesMap((prev) => ({ ...prev, [productId]: finishName }));
  };

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const finish = productFinishesMap[product.id] || product.finishes[0]?.name || 'Standard';
    onAddToCart(product, finish);
    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const toggleComparison = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setComparisonList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 architectural fittings simultaneously.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const resetFilters = () => {
    setActiveDepartment('All');
    setActiveCategory(null);
    setActiveSubcategory(null);
    setSelectedFinishes([]);
    setSelectedMounting([]);
    setSelectedMaterials([]);
    setOnlyInStock(false);
    setPriceMax(5000);
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pt-8 pb-24 px-4 sm:px-6 lg:px-10 border-b border-[#E7E0D3]">
      <div className="max-w-[1440px] mx-auto">
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 pb-4 border-b border-[#EAE3D7]">
          <div className="flex items-center space-x-2 flex-wrap">
            <button onClick={onCloseCatalog} className="hover:text-stone-900 cursor-pointer">
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => {
                setActiveDepartment('All');
                setActiveCategory(null);
                setActiveSubcategory(null);
              }}
              className="text-[#725C48] font-medium hover:underline cursor-pointer"
            >
              Architectural Catalogue
            </button>
            {activeDepartment !== 'All' && (
              <>
                <span>/</span>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveSubcategory(null);
                  }}
                  className="text-stone-900 font-semibold hover:underline cursor-pointer"
                >
                  {activeDepartment}
                </button>
              </>
            )}
            {activeCategory && (
              <>
                <span>/</span>
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className="text-stone-900 font-medium hover:underline cursor-pointer"
                >
                  {activeCategory}
                </button>
              </>
            )}
            {activeSubcategory && (
              <>
                <span>/</span>
                <span className="text-stone-600 font-medium">{activeSubcategory}</span>
              </>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {comparisonList.length > 0 && (
              <button
                onClick={() => onCompareProducts(comparisonList)}
                className="bg-[#24211E] text-white px-3 py-1.5 rounded-xs text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Compare ({comparisonList.length})</span>
              </button>
            )}
            <button
              onClick={onCloseCatalog}
              className="text-stone-500 hover:text-black p-1 cursor-pointer"
              title="Close Catalogue"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Page Title & Category Introduction */}
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#786E64] font-medium block mb-2">
            SMPL SPECIFICATION PORTAL
          </span>
          <h1 className="font-serif text-[36px] sm:text-[46px] text-[#221F1B] font-normal tracking-tight leading-none mb-3">
            {activeCategory || (activeDepartment === 'All' ? 'Complete Architectural Catalogue' : `${activeDepartment} Collection`)}
          </h1>
          <p className="text-[14px] text-[#554E46] max-w-2xl leading-relaxed">
            Engineered precision brassware, monolithic stone basins, and frameless shower systems designed for high-performance residential and hospitality architecture.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-[#E8E2D7]">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => {
                setActiveDepartment(dept);
                setActiveCategory(null);
                setActiveSubcategory(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
                activeDepartment === dept
                  ? 'bg-[#725C48] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-stone-700 border border-[#DDD5C8]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Category Pills (Sub-level of Department) */}
        {availableCategories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3">
            <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            <button
              onClick={() => {
                setActiveCategory(null);
                setActiveSubcategory(null);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === null
                  ? 'bg-[#24211E] text-white'
                  : 'bg-[#ECE5D8] text-stone-700 hover:bg-[#E2D9CA]'
              }`}
            >
              All Categories
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(activeCategory === cat ? null : cat);
                  setActiveSubcategory(null);
                }}
                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#24211E] text-white'
                    : 'bg-[#ECE5D8] text-stone-700 hover:bg-[#E2D9CA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Subcategory Pills */}
        {availableSubcategories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider shrink-0 mr-1">
              Subcategory:
            </span>
            <button
              onClick={() => setActiveSubcategory(null)}
              className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                activeSubcategory === null
                  ? 'bg-[#725C48] text-white'
                  : 'bg-[#F2ECE1] text-stone-700 hover:bg-[#E5DDCF]'
              }`}
            >
              All Types
            </button>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(activeSubcategory === sub ? null : sub)}
                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  activeSubcategory === sub
                    ? 'bg-[#725C48] text-white'
                    : 'bg-[#F2ECE1] text-stone-700 hover:bg-[#E5DDCF]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Controls Toolbar: Product Count + Filter Toggle + Sort */}
        <div className="bg-[#F2EDE5] border border-[#DDD5C8] rounded-xs p-3.5 flex flex-wrap items-center justify-between gap-4 mb-8 text-xs">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-1.5 font-medium text-[#24211E] hover:text-[#725C48] cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{sidebarOpen ? 'Hide Filters' : 'Show Filters'}</span>
            </button>

            <span className="text-stone-400">|</span>

            <span className="text-stone-600 font-medium">
              Showing <strong className="text-[#24211E]">{filteredProducts.length}</strong> of {products.length} models
            </span>
          </div>

          {/* Active Filter Chips */}
          {(selectedFinishes.length > 0 || selectedMounting.length > 0 || onlyInStock || activeCategory || activeSubcategory || activeDepartment !== 'All') && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#725C48] hover:underline flex items-center gap-1 mr-2 cursor-pointer font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>

              {activeDepartment !== 'All' && (
                <span
                  onClick={() => {
                    setActiveDepartment('All');
                    setActiveCategory(null);
                    setActiveSubcategory(null);
                  }}
                  className="bg-[#24211E] text-white px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1 cursor-pointer hover:bg-stone-700"
                >
                  Dept: {activeDepartment} <X className="w-2.5 h-2.5" />
                </span>
              )}

              {activeCategory && (
                <span
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveSubcategory(null);
                  }}
                  className="bg-[#725C48] text-white px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1 cursor-pointer hover:bg-[#5a4837]"
                >
                  Category: {activeCategory} <X className="w-2.5 h-2.5" />
                </span>
              )}

              {activeSubcategory && (
                <span
                  onClick={() => setActiveSubcategory(null)}
                  className="bg-stone-700 text-white px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1 cursor-pointer hover:bg-stone-900"
                >
                  Type: {activeSubcategory} <X className="w-2.5 h-2.5" />
                </span>
              )}

              {selectedFinishes.map((f) => (
                <span
                  key={f}
                  onClick={() => toggleFinishFilter(f)}
                  className="bg-white px-2 py-0.5 rounded-full border border-stone-300 text-[11px] text-stone-700 flex items-center gap-1 cursor-pointer hover:border-red-400"
                >
                  {f} <X className="w-2.5 h-2.5" />
                </span>
              ))}

              {selectedMounting.map((m) => (
                <span
                  key={m}
                  onClick={() => toggleMountingFilter(m)}
                  className="bg-white px-2 py-0.5 rounded-full border border-stone-300 text-[11px] text-stone-700 flex items-center gap-1 cursor-pointer hover:border-red-400"
                >
                  {m} <X className="w-2.5 h-2.5" />
                </span>
              ))}
            </div>
          )}

          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-stone-500 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#D5CCC0] rounded-xs px-2.5 py-1 text-xs text-[#24211E] focus:outline-none focus:border-[#725C48]"
            >
              <option value="featured">Featured Specifications</option>
              <option value="bestselling">Customer Bestsellers</option>
              <option value="new">New Architectural Releases</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Main Grid with Collapsible Filter Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar */}
          {sidebarOpen && (
            <aside className="lg:col-span-3 bg-[#FAF8F5] border border-[#DDD5C8] rounded-xs p-5 space-y-6 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D7]">
                <h3 className="font-semibold uppercase tracking-wider text-[11px] text-[#24211E]">
                  Architectural Filters
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-stone-500 hover:text-black"
                >
                  Clear
                </button>
              </div>

              {/* 1. Finishes Filter */}
              <div>
                <h4 className="font-semibold text-stone-800 mb-2.5 text-[11.5px] uppercase tracking-wide">
                  Finish &amp; Coating
                </h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {availableFinishes.map((f) => (
                    <label
                      key={f}
                      className="flex items-center space-x-2 cursor-pointer hover:text-black p-1 rounded hover:bg-[#F3EFE7]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFinishes.includes(f)}
                        onChange={() => toggleFinishFilter(f)}
                        className="rounded-xs text-[#725C48] focus:ring-0"
                      />
                      <span>{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Mounting Style Filter */}
              <div className="pt-4 border-t border-[#E8E2D7]">
                <h4 className="font-semibold text-stone-800 mb-2.5 text-[11.5px] uppercase tracking-wide">
                  Installation / Mounting
                </h4>
                <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                  {availableMountings.map((m) => (
                    <label
                      key={m}
                      className="flex items-center space-x-2 cursor-pointer hover:text-black p-1 rounded hover:bg-[#F3EFE7]"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMounting.includes(m)}
                        onChange={() => toggleMountingFilter(m)}
                        className="rounded-xs text-[#725C48] focus:ring-0"
                      />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Availability Filter */}
              <div className="pt-4 border-t border-[#E8E2D7]">
                <h4 className="font-semibold text-stone-800 mb-2.5 text-[11.5px] uppercase tracking-wide">
                  Stock Availability
                </h4>
                <label className="flex items-center space-x-2 cursor-pointer p-1 rounded hover:bg-[#F3EFE7]">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="rounded-xs text-[#725C48] focus:ring-0"
                  />
                  <span>In Stock &amp; Ready for Dispatch</span>
                </label>
              </div>

              {/* 4. Maximum Price Range */}
              <div className="pt-4 border-t border-[#E8E2D7]">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-stone-800 text-[11.5px] uppercase tracking-wide">
                    Max Price
                  </h4>
                  <span className="font-mono font-semibold text-[#24211E]">${priceMax.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#725C48]"
                />
              </div>
            </aside>
          )}

          {/* Right Product Grid - Large, HD Product Cards */}
          <div className={sidebarOpen ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center bg-white border border-[#DDD5C8] rounded-xs p-8 space-y-3">
                <p className="font-serif text-2xl text-[#24211E]">No models match your filter criteria</p>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Try clearing some filters or searching across all departments to see our complete architectural bathware inventory.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-6 py-2.5 bg-[#725C48] text-white text-xs uppercase tracking-wider font-medium rounded-xs"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((prod) => {
                  const activeFinish = productFinishesMap[prod.id] || prod.finishes[0]?.name || 'Standard';
                  const wish = isWishlisted(prod.id);
                  const added = addedAnimation[prod.id];
                  const inCompare = comparisonList.some((p) => p.id === prod.id);

                  return (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="group cursor-pointer flex flex-col bg-white border border-[#E5DFD4] hover:border-[#725C48] rounded-[2px] p-4 transition-all hover:shadow-lg"
                    >
                      {/* Top Bar with Model Number and Compare Checkbox */}
                      <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
                        <span className="font-mono">{prod.modelNumber}</span>
                        <button
                          onClick={(e) => toggleComparison(prod, e)}
                          className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-xs transition-colors ${
                            inCompare
                              ? 'bg-[#24211E] text-white font-medium'
                              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          }`}
                        >
                          <Check className={`w-3 h-3 ${inCompare ? 'opacity-100' : 'opacity-0'}`} />
                          <span>Compare</span>
                        </button>
                      </div>

                      {/* Large HD Product Image Container */}
                      <div className="relative w-full h-72 sm:h-80 bg-[#F4EFE6] rounded-[2px] overflow-hidden flex items-center justify-center mb-4">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />

                        {/* Wishlist Button in Top Right */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(prod);
                          }}
                          aria-label="Save to wishlist"
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs ${
                            wish
                              ? 'bg-[#725C48] text-white'
                              : 'bg-white/90 hover:bg-white text-stone-600 hover:text-[#725C48]'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${wish ? 'fill-white stroke-none' : 'stroke-[1.5]'}`} />
                        </button>

                        {/* Quick Action Overlay on hover */}
                        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 z-10">
                          <button
                            onClick={(e) => handleAdd(prod, e)}
                            className="flex-1 py-2 px-3 bg-[#221F1B] hover:bg-[#3A352F] text-white text-[11px] uppercase tracking-wider font-medium rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                          >
                            {added ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Bag</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProduct(prod);
                            }}
                            title="View Full Specification"
                            className="w-8 h-8 bg-white hover:bg-stone-100 text-stone-800 rounded-xs flex items-center justify-center transition-colors shadow-md"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Finish Swatches */}
                      <div className="flex items-center space-x-1.5 mb-2.5">
                        {prod.finishes.map((f) => (
                          <button
                            key={f.code}
                            onClick={(e) => handleFinishSelect(prod.id, f.name, e)}
                            title={f.name}
                            className={`w-3.5 h-3.5 rounded-full transition-transform cursor-pointer border ${
                              activeFinish === f.name
                                ? 'ring-1 ring-offset-1 ring-[#725C48] scale-110 border-white'
                                : 'border-black/20 hover:scale-105'
                            }`}
                            style={{ backgroundColor: f.hex }}
                          />
                        ))}
                        <span className="text-[10.5px] text-stone-500 ml-1 truncate">
                          {activeFinish}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-[15px] sm:text-[16px] font-medium text-[#24211E] group-hover:text-[#725C48] transition-colors line-clamp-1 mb-1">
                        {prod.name}
                      </h3>

                      {/* Subcategory & Mounting Info */}
                      <p className="text-[11.5px] text-stone-500 line-clamp-1 mb-3">
                        {prod.subcategory} · {prod.specs?.mountingType}
                      </p>

                      {/* Price & Stock Badge */}
                      <div className="mt-auto pt-3 border-t border-[#EAE4D9] flex items-center justify-between text-xs">
                        <span className="font-mono font-medium text-[#221F1B] text-[15px]">
                          ${prod.price.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-stone-500 font-mono tracking-tight">
                          {prod.inStock ? `In Stock · ${prod.leadTimeDays}d dispatch` : 'Bespoke Order'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
