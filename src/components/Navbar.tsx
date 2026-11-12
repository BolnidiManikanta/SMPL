import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X, Layers } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenDepartment: (department: string, subcategory?: string) => void;
  onOpenTilesPage: () => void;
  onGoHome: () => void;
  activeView: 'home' | 'catalog' | 'tiles' | 'sanitaryware' | 'showers' | 'faucets' | 'bathroom';
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onNavigateSection,
  onOpenDepartment,
  onOpenTilesPage,
  onGoHome,
  activeView,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: 'Bathroom',
      label: 'Bathroom',
      hasDropdown: true,
      subcategories: [
        { name: 'Wash Basins', desc: 'Countertop, stone vessel, pedestal' },
        { name: 'Bathtubs', desc: 'Freestanding stone, deep soak' },
        { name: 'Vanities & Consoles', desc: 'Architectural joinery' },
        { name: 'Bathroom Mirrors', desc: 'Backlit halo LED & anti-fog' },
      ],
    },
    {
      id: 'Faucets',
      label: 'Faucets',
      hasDropdown: true,
      subcategories: [
        { name: 'Basin Faucets', desc: 'Single-lever, tall vessel mixers' },
        { name: 'Bath Faucets', desc: 'Floor-mounted freestanding bath fillers' },
        { name: 'Wall Mounted Mixers', desc: 'Concealed pre-wall rough-in' },
        { name: 'Concealed Diverters', desc: '2-way & 3-way thermostatic valves' },
      ],
    },
    {
      id: 'Showers',
      label: 'Showers',
      hasDropdown: true,
      subcategories: [
        { name: 'Overhead Rain Showers', desc: 'Ceiling mounted 350mm roses' },
        { name: 'Shower Systems', desc: 'Thermostatic column sets' },
        { name: 'Hand Showers', desc: 'Micro-spray brass wands' },
        { name: 'Wellness & Spa', desc: 'Body jets & waterfall cascades' },
      ],
    },
    {
      id: 'Sanitaryware',
      label: 'Sanitaryware',
      hasDropdown: true,
      subcategories: [
        { name: 'Toilets / WCs', desc: 'Rimless wall-hung cyclone flush' },
        { name: 'Concealed Cisterns', desc: 'In-wall pneumatic dual-flush' },
        { name: 'Flush Plates', desc: 'Brushed brass & matte black' },
        { name: 'Bidets', desc: 'Wall-hung & bidet sprays' },
      ],
    },
    {
      id: 'Kitchen',
      label: 'Kitchen',
      hasDropdown: true,
      subcategories: [
        { name: 'Kitchen Faucets', desc: 'Gooseneck pull-down mixers' },
        { name: 'Bridge Mixers', desc: 'Dual-handle architectural taps' },
        { name: 'Kitchen Sinks', desc: 'Granite quartz & undermount' },
        { name: 'Sink Accessories', desc: 'Deck soap pumps & couplings' },
      ],
    },
    {
      id: 'Tiles',
      label: 'Tiles',
      hasDropdown: true,
      subcategories: [
        { name: 'Marble Collection', desc: 'Calacatta gold 1200x2780 maxi slabs' },
        { name: 'Stone Collection', desc: 'Pietra grey limestone & honed surfaces' },
        { name: 'Terrazzo Collection', desc: 'Artisanal mineral aggregate slabs' },
        { name: 'Woodlook Collection', desc: 'Natural tactile oak porcelain planks' },
        { name: 'Concrete Collection', desc: 'Honed architectural micro-cement' },
        { name: 'Patterned Collection', desc: '3D fluted and relief carved tiles' },
      ],
    },
    { id: 'Collections', label: 'Collections', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2] border-b border-[#E8E0D2] transition-all shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-19 flex items-center justify-between">
        {/* Brand Wordmark: "S M P L | ARCHITECTURAL BATHWARE & FITTINGS" */}
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            onClick={onGoHome}
            className="flex items-center gap-3.5 group cursor-pointer text-left"
          >
            <span className="text-xl md:text-[22px] font-serif font-medium tracking-[0.22em] text-[#1E1915] select-none">
              S M P L
            </span>
            <span className="h-5 sm:h-6 w-[1px] bg-[#C8BCAC]"></span>
            <div className="flex flex-col text-[8px] sm:text-[8.5px] uppercase tracking-[0.18em] leading-[1.25] text-[#5A524A] font-semibold">
              <span>ARCHITECTURAL</span>
              <span>BATHWARE & FITTINGS</span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-2.5 xl:space-x-4 2xl:space-x-5 text-[13px] tracking-wide text-[#2C2723]">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative py-2"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.id === 'Tiles') onOpenTilesPage();
                  else if (item.id === 'Collections') onNavigateSection('collections');
                  else onOpenDepartment(item.id);
                }}
                className={`flex items-center gap-1 hover:text-[#6F4E37] transition-colors py-1 cursor-pointer font-normal whitespace-nowrap ${
                  (item.id === 'Bathroom' && activeView === 'bathroom') ||
                  (item.id === 'Faucets' && activeView === 'faucets') ||
                  (item.id === 'Showers' && activeView === 'showers') ||
                  (item.id === 'Sanitaryware' && activeView === 'sanitaryware')
                    ? 'text-[#24201D] font-semibold border-b-2 border-[#24201D] pb-0.5'
                    : item.id === 'Tiles' && activeView === 'tiles'
                    ? 'text-[#66462C] font-semibold underline underline-offset-4 decoration-[#66462C]'
                    : ''
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-3 h-3 text-stone-500 transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180 text-[#6F4E37]' : ''
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Mega Menu */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-[#FAF7F2] border border-[#DDD5C8] shadow-2xl rounded-sm p-4 space-y-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-stone-500 font-semibold pb-2 border-b border-[#ECE6DC]">
                      <span>{item.label} Range</span>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.id === 'Tiles') onOpenTilesPage();
                          else onOpenDepartment(item.id);
                        }}
                        className="text-[#6F4E37] hover:underline cursor-pointer"
                      >
                        View All →
                      </button>
                    </div>

                    <div className="space-y-1">
                      {item.subcategories?.map((sub, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveDropdown(null);
                            if (item.id === 'Tiles') onOpenTilesPage();
                            else onOpenDepartment(item.id, sub.name);
                          }}
                          className="w-full text-left group block hover:bg-[#F2ECE1] p-2 rounded-xs transition-colors cursor-pointer"
                        >
                          <div className="text-xs text-[#2A2724] group-hover:text-[#6F4E37] font-medium">
                            {sub.name}
                          </div>
                          <div className="text-[10.5px] text-stone-500 leading-tight mt-0.5">
                            {sub.desc}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#ECE6DC]">
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.id === 'Tiles') onOpenTilesPage();
                          else onOpenDepartment(item.id);
                        }}
                        className="w-full py-2 bg-[#24211E] hover:bg-[#38332F] text-white text-[11px] uppercase tracking-wider font-medium text-center rounded-xs transition-colors cursor-pointer block"
                      >
                        Explore All {item.label} Models
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Utility Icons: Search, Account, Wishlist, Cart, CATALOGUE */}
        <div className="flex items-center space-x-3.5 sm:space-x-4.5 text-[#2A2724]">
          {/* Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search bathware catalogue"
            className="p-1 hover:text-[#6F4E37] transition-colors cursor-pointer"
          >
            <Search className="w-[18px] h-[18px] stroke-[1.6]" />
          </button>

          {/* User / Trade Portal */}
          <button
            onClick={onOpenAccount}
            aria-label="Account and trade specifications"
            className="p-1 hover:text-[#6F4E37] transition-colors cursor-pointer"
          >
            <User className="w-[18px] h-[18px] stroke-[1.6]" />
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist saved fittings"
            className="p-1 hover:text-[#6F4E37] transition-colors relative cursor-pointer"
          >
            <Heart className="w-[18px] h-[18px] stroke-[1.6]" />
            <span className="absolute -top-1 -right-1 bg-[#2C2420] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
              {wishlistCount}
            </span>
          </button>

          {/* Shopping Bag */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping bag"
            className="p-1 hover:text-[#6F4E37] transition-colors relative cursor-pointer"
          >
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.6]" />
            <span className="absolute -top-1 -right-1 bg-[#2C2420] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
              {cartCount}
            </span>
          </button>

          {/* Exact CATALOGUE Button from reference */}
          <button
            onClick={() => onOpenDepartment('All')}
            className="hidden sm:inline-flex items-center gap-2 border border-[#2E2722] hover:bg-[#2E2722]/5 px-3.5 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-wider uppercase text-[#2E2722] transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>CATALOGUE</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-stone-800 hover:text-black cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E3DDD2] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.id === 'Collections') onNavigateSection('collections');
                  else onOpenDepartment(item.id);
                }}
                className="text-left py-2 px-3 rounded hover:bg-[#EFE9DD] text-[#2A2724] font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-[#E8DFD3]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDepartment('All');
              }}
              className="w-full py-2.5 bg-[#2E2722] text-white text-xs uppercase tracking-wider font-semibold rounded-[4px] text-center"
            >
              Open Full Catalogue
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
