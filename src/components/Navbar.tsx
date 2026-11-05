import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onNavigateSection,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      id: 'bathroom',
      label: 'Bathroom',
      hasDropdown: true,
      subcategories: [
        { name: 'Freestanding Baths', tag: 'Monolithic Stone' },
        { name: 'Vessel Basins', tag: 'Travertine & Ceramic' },
        { name: 'Vanity Consoles', tag: 'Architectural Joinery' },
        { name: 'Heated Towel Warmers', tag: 'Precision Hydro' },
      ],
    },
    {
      id: 'faucets',
      label: 'Faucets',
      hasDropdown: true,
      subcategories: [
        { name: 'Basin Mixers', tag: 'Single Lever' },
        { name: 'Wall Mounted Spouts', tag: 'Concealed Rough-in' },
        { name: 'Floor Mounted Tub Fillers', tag: 'Freestanding' },
        { name: 'Sensor & Smart Valves', tag: 'Touchless Infra' },
      ],
    },
    {
      id: 'showers',
      label: 'Showers',
      hasDropdown: true,
      subcategories: [
        { name: 'Overhead Ceiling Roses', tag: 'Air-Injected Rain' },
        { name: 'Wall Shower Systems', tag: 'Thermostatic Dual' },
        { name: 'Hand Showers & Rails', tag: 'Micro-Spray' },
        { name: 'Body Jets & Hydrojets', tag: 'Wellness Spa' },
      ],
    },
    {
      id: 'sanitaryware',
      label: 'Sanitaryware',
      hasDropdown: true,
      subcategories: [
        { name: 'Wall-Hung Toilets', tag: 'Rimless Cyclone' },
        { name: 'Bidet Solutions', tag: 'Concealed Tech' },
        { name: 'In-Wall Flush Plates', tag: 'Brushed Finishes' },
      ],
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      hasDropdown: true,
      subcategories: [
        { name: 'Gooseneck Mixers', tag: 'Pull-Down Hose' },
        { name: 'Industrial Bridge Mixers', tag: 'Dual Handle' },
        { name: 'Pot Fillers', tag: 'Articulated Arm' },
      ],
    },
    {
      id: 'accessories',
      label: 'Accessories',
      hasDropdown: true,
      subcategories: [
        { name: 'Soap Dispensers', tag: 'Wall Mounted' },
        { name: 'Robe Hooks & Rails', tag: 'Solid Brass' },
        { name: 'Paper Holders', tag: 'Minimalist Rod' },
        { name: 'Architectural Mirrors', tag: 'Backlit Warm Halo' },
      ],
    },
    { id: 'collections', label: 'Collections', hasDropdown: false },
    { id: 'inspiration', label: 'Inspiration', hasDropdown: false },
    { id: 'about', label: 'About', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Wordmark: "S M P L" */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl md:text-2xl font-light tracking-[0.38em] text-[#1E1B18] uppercase select-none hover:opacity-85 transition-opacity"
          >
            S M P L
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7 text-[13px] tracking-wide text-[#34302C]">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative py-2"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.id === 'collections') onNavigateSection('collections');
                  else if (item.id === 'inspiration') onNavigateSection('curated-retreat');
                  else if (item.id === 'about') onNavigateSection('about');
                  else onNavigateSection('explore-range');
                }}
                className="flex items-center gap-1 hover:text-[#725C48] transition-colors py-1 cursor-pointer font-normal whitespace-nowrap"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-3 h-3 text-stone-500 transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180 text-[#725C48]' : ''
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#FAF8F5] border border-[#E3DDD2] shadow-xl rounded-sm p-4 space-y-3">
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium pb-1 border-b border-[#ECE6DC]">
                      {item.label} Range
                    </div>
                    {item.subcategories?.map((sub, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveDropdown(null);
                          onNavigateSection('explore-range');
                        }}
                        className="w-full text-left group block hover:bg-[#F2ECE1] p-1.5 rounded-sm transition-colors"
                      >
                        <div className="text-xs text-[#2A2724] group-hover:text-[#725C48] font-medium">
                          {sub.name}
                        </div>
                        <div className="text-[10px] text-stone-500">{sub.tag}</div>
                      </button>
                    ))}
                    <div className="pt-2 border-t border-[#ECE6DC]">
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          onNavigateSection('bestsellers');
                        }}
                        className="text-[11px] text-[#725C48] hover:underline flex items-center gap-1 font-medium"
                      >
                        Browse all {item.label.toLowerCase()} →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Utility Icons: Search, Account, Wishlist, Cart */}
        <div className="flex items-center space-x-4 md:space-x-5 text-[#2A2724]">
          {/* Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search bathware catalogue"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
          </button>

          {/* User / Trade Portal */}
          <button
            onClick={onOpenAccount}
            aria-label="Account and trade specifications"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist saved fittings"
            className="p-1.5 hover:text-[#725C48] hover:bg-[#F0EAE0] rounded-full transition-colors relative cursor-pointer"
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
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
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
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
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F6F2] border-b border-[#E3DDD2] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.id === 'collections') onNavigateSection('collections');
                  else if (item.id === 'inspiration') onNavigateSection('curated-retreat');
                  else onNavigateSection('explore-range');
                }}
                className="text-left py-2 px-3 rounded hover:bg-[#EFE9DD] text-[#2A2724] font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
