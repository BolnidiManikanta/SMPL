import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  currentView: 'home' | 'catalogue';
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectCategory: (categoryName: string) => void;
  onNavigateHome: () => void;
  onNavigateCatalogue: () => void;
  onSelectProduct: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  currentView,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onNavigateSection,
  onSelectCategory,
  onNavigateHome,
  onNavigateCatalogue,
  onSelectProduct,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    {
      id: 'Faucets',
      label: 'Faucets',
      image: '/images/products_ultra/basin_mixer_hd.jpg',
      tagline: 'Precision ceramic progressive cartridges & forged solid DZR brass.',
      items: [
        { name: 'Basin Mixers', desc: 'Single lever & joystick operation' },
        { name: 'Wall Mounted Spouts', desc: 'Concealed rough-in architectural plates' },
        { name: 'Floor Mounted Tub Fillers', desc: 'Freestanding high-flow brassware' },
        { name: 'Kitchen Pull-Down Mixers', desc: 'Magnetic docking & 360° swivel' },
      ],
    },
    {
      id: 'Showers',
      label: 'Showers',
      image: '/images/products_ultra/shower_rose_hd.jpg',
      tagline: 'Marine grade 316 stainless steel with air-injected rain flow.',
      items: [
        { name: 'Ceiling Shower Roses', desc: 'Ultra-slim 300mm & 350mm roses' },
        { name: 'Thermostatic Shower Systems', desc: 'Dual-outlet concealed Vernet valves' },
        { name: 'Hand Showers & Slide Rails', desc: 'Anti-limescale silicone jets' },
        { name: 'Sensory Hydrojets', desc: 'Wellness & steam retreat fixtures' },
      ],
    },
    {
      id: 'Wash Basins',
      label: 'Wash Basins',
      image: '/images/products_ultra/stone_basin_hd.jpg',
      tagline: 'Carved from monolithic blocks of honed travertine and natural limestone.',
      items: [
        { name: 'Vessel Basins', desc: 'Countertop oval & round silhouettes' },
        { name: 'Monolithic Pedestal Basins', desc: 'Free-standing natural stone columns' },
        { name: 'Wall-Hung Basins', desc: 'Minimalist integrated towel brackets' },
        { name: 'Double Vanity Basins', desc: 'Custom architectural proportions' },
      ],
    },
    {
      id: 'Bathtubs',
      label: 'Bathtubs',
      image: '/images/products_ultra/stone_bathtub_hd.jpg',
      tagline: 'Mineral composite stone baths offering superior thermal heat retention.',
      items: [
        { name: 'Freestanding Stone Baths', desc: 'Velvet-touch seamless matte finish' },
        { name: 'Deep Soaking Tubs', desc: 'Japanese inspired ergonomics' },
        { name: 'Integrated Overflow Baths', desc: 'Concealed pre-installed waste' },
      ],
    },
    {
      id: 'Sanitaryware',
      label: 'Sanitaryware',
      image: '/images/products_ultra/toilet_commode_hd.jpg',
      tagline: 'Rimless vitreous china suites featuring 360° cyclonic flushing.',
      items: [
        { name: 'Wall-Hung WC Suites', desc: 'Concealed fixings & soft-close seats' },
        { name: 'In-Wall Cistern Actuators', desc: 'PVD brushed flush plates' },
        { name: 'Bidet Solutions', desc: 'Integrated warm wellness nozzles' },
      ],
    },
    {
      id: 'Accessories',
      label: 'Accessories',
      image: '/images/products_ultra/soap_dispenser_hd.jpg',
      tagline: 'Machined solid brass wall fittings with concealed hex anchors.',
      items: [
        { name: 'Soap Dispensers', desc: 'Borosilicate glass & non-drip pumps' },
        { name: 'Robe Hooks & Rails', desc: 'Heavy architectural brass bars' },
        { name: 'Paper Holders', desc: 'Minimalist magnetic rods' },
        { name: 'Heated Towel Warmers', desc: 'Hardwired low-voltage hydro warmers' },
      ],
    },
  ];

  // Live search suggestions
  const searchSuggestions = searchQuery.trim()
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5] border-b border-[#E5DFD4] transition-all shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Wordmark: "S M P L" */}
        <div className="flex items-center gap-6">
          <button
            onClick={onNavigateHome}
            className="text-xl md:text-2xl font-normal tracking-[0.38em] text-[#1E1B18] uppercase select-none hover:text-[#725C48] transition-colors cursor-pointer"
          >
            S M P L
          </button>
        </div>

        {/* Desktop Navigation Links with Rich Mega-Menus */}
        <nav className="hidden xl:flex items-center space-x-6 text-[13px] tracking-wide text-[#2B2724] font-medium">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(cat.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  onSelectCategory(cat.id);
                  setActiveDropdown(null);
                }}
                className="flex items-center gap-1 hover:text-[#725C48] transition-colors py-1 cursor-pointer font-normal whitespace-nowrap"
              >
                <span>{cat.label}</span>
                <ChevronDown
                  className={`w-3 h-3 text-stone-500 transition-transform duration-200 ${
                    activeDropdown === cat.id ? 'rotate-180 text-[#725C48]' : ''
                  }`}
                />
              </button>

              {/* Architectural Mega-Menu Dropdown */}
              {activeDropdown === cat.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-[#FAF8F5] border border-[#DDD5C8] shadow-2xl rounded-[3px] p-6 grid grid-cols-12 gap-5">
                    {/* Left: Subcategory links (7 cols) */}
                    <div className="col-span-7 space-y-3">
                      <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold pb-1 border-b border-[#ECE6DC]">
                        {cat.label} Collection Range
                      </div>
                      <div className="space-y-1.5">
                        {cat.items.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              onSelectCategory(cat.id);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left group block hover:bg-[#F2ECE1] p-2 rounded-xs transition-colors"
                          >
                            <div className="text-xs text-[#2A2724] group-hover:text-[#725C48] font-semibold">
                              {sub.name}
                            </div>
                            <div className="text-[10.5px] text-stone-500 line-clamp-1">{sub.desc}</div>
                          </button>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-[#ECE6DC]">
                        <button
                          onClick={() => {
                            onSelectCategory(cat.id);
                            setActiveDropdown(null);
                          }}
                          className="text-xs text-[#725C48] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                        >
                          <span>Explore all {cat.label.toLowerCase()} →</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Category Thumbnail Preview (5 cols) */}
                    <div className="col-span-5 bg-[#F4EFEA] border border-[#EAE4D9] rounded-xs p-4 flex flex-col justify-between">
                      <div className="w-full h-36 flex items-center justify-center p-2 mb-2">
                        <img
                          src={cat.image}
                          alt={cat.label}
                          className="max-h-full max-w-full object-contain filter drop-shadow-md"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[10.5px] text-stone-600 leading-snug line-clamp-2">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Direct Catalogue Button */}
          <button
            onClick={onNavigateCatalogue}
            className={`transition-colors py-1 cursor-pointer font-medium whitespace-nowrap ${
              currentView === 'catalogue' ? 'text-[#725C48] font-bold underline' : 'hover:text-[#725C48]'
            }`}
          >
            All Catalogue
          </button>

          <button
            onClick={() => onNavigateSection('curated-retreat')}
            className="hover:text-[#725C48] transition-colors py-1 cursor-pointer font-normal whitespace-nowrap"
          >
            Inspiration
          </button>
        </nav>

        {/* Live Search Bar with Suggestions */}
        <div className="hidden lg:block relative w-64 xl:w-72">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search fittings, SKU..."
              className="w-full bg-[#F2EDE5] border border-[#DDD5C8] rounded-full pl-9 pr-8 py-1.5 text-xs text-[#1C1917] placeholder-stone-500 focus:outline-none focus:border-[#725C48] focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-stone-400 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Live Search Suggestions Dropdown */}
          {isSearchFocused && searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#DDD5C8] rounded-[2px] shadow-xl p-2 z-50 animate-in fade-in duration-150">
              <div className="text-[10px] uppercase font-bold text-stone-500 px-2 py-1 border-b border-stone-100">
                Products Matching &quot;{searchQuery}&quot;
              </div>
              <div className="space-y-1 mt-1">
                {searchSuggestions.map((sug) => (
                  <div
                    key={sug.id}
                    onMouseDown={() => {
                      onSelectProduct(sug);
                      setSearchQuery('');
                    }}
                    className="flex items-center gap-2.5 p-2 hover:bg-[#F6F2EC] rounded-xs cursor-pointer transition-colors"
                  >
                    <img
                      src={sug.image}
                      alt={sug.name}
                      className="w-9 h-9 object-contain bg-[#F4EFEA] rounded-xs p-1"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-stone-900 truncate">
                        {sug.name}
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono">
                        {sug.sku} · ${sug.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Utility Icons: Search (mobile), Account/Trade, Wishlist, Cart */}
        <div className="flex items-center space-x-3 md:space-x-4 text-[#2A2724]">
          {/* Search Trigger for Mobile */}
          <button
            onClick={onOpenSearch}
            aria-label="Search bathware catalogue"
            className="lg:hidden p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* User / Trade Portal */}
          <button
            onClick={onOpenAccount}
            aria-label="Account and trade specifications"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors cursor-pointer"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist saved fittings"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors relative cursor-pointer"
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#725C48] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping bag"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors relative cursor-pointer flex items-center gap-1"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[11px] font-medium tracking-tight bg-[#24211E] text-white px-1.5 py-0.2 rounded-full min-w-4 text-center">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-stone-800 hover:text-black cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F6F2] border-b border-[#E3DDD2] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="text-[11px] uppercase tracking-wider font-bold text-stone-500 pb-2 border-b border-[#DDD5C8]">
            Categories
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectCategory(cat.id);
                }}
                className="text-left py-2 px-3 rounded-xs hover:bg-[#EFE9DD] text-[#2A2724] font-medium transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#DDD5C8] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateCatalogue();
              }}
              className="text-left py-2 text-xs font-semibold uppercase tracking-wider text-[#725C48]"
            >
              View Full Product Catalogue →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
              }}
              className="text-left py-1 text-xs text-stone-700"
            >
              Home Page
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
