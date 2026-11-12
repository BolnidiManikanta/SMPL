import React, { useState, useMemo } from 'react';
import {
  CloudRain,
  Thermometer,
  Droplets,
  Gem,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Heart,
  LayoutGrid,
  Grid3X3,
  List,
  Check,
  ArrowRight,
  SlidersHorizontal,
  X,
  ShoppingCart,
} from 'lucide-react';
import { Product } from '../types';

export interface ShowerProduct {
  id: string;
  code: string;
  name: string;
  category: string;
  priceINR: number;
  formattedPrice: string;
  image: string;
  swatches: {
    name: string;
    hex: string;
    code: string;
  }[];
  rating: number;
  reviewsCount: number;
  specs: {
    material: string;
    flowRate: string;
    mounting: string;
    dimensions: string;
  };
  description: string;
  features: string[];
}

export const SHOWER_CATEGORIES = [
  {
    id: 'Overhead Showers',
    title: 'Overhead Showers',
    image: '/images/showers/categories/overhead_showers.jpg',
    count: 128,
  },
  {
    id: 'Hand Showers',
    title: 'Hand Showers',
    image: '/images/showers/categories/hand_showers.jpg',
    count: 94,
  },
  {
    id: 'Shower Systems',
    title: 'Shower Systems',
    image: '/images/showers/categories/shower_systems.jpg',
    count: 76,
  },
  {
    id: 'Shower Panels',
    title: 'Shower Panels',
    image: '/images/showers/categories/shower_panels.jpg',
    count: 18,
  },
  {
    id: 'Body Jets',
    title: 'Body Jets',
    image: '/images/showers/categories/body_jets.jpg',
    count: 24,
  },
  {
    id: 'Concealed Showers',
    title: 'Concealed Showers',
    image: '/images/showers/categories/concealed_showers.jpg',
    count: 36,
  },
  {
    id: 'Shower Arms',
    title: 'Shower Arms',
    image: '/images/showers/categories/shower_arms.jpg',
    count: 32,
  },
  {
    id: 'Shower Accessories',
    title: 'Shower Accessories',
    image: '/images/showers/categories/shower_accessories.jpg',
    count: 28,
  },
];

export const SHOWER_PRODUCTS_DATA: ShowerProduct[] = [
  {
    id: 'sh_prod_101',
    code: 'SMPL SH-101',
    name: 'Square Rain Shower (300 mm)',
    category: 'Overhead Showers',
    priceINR: 12900,
    formattedPrice: '₹ 12,900',
    image: '/images/showers/products/smpl_sh_101.jpg',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
      { name: 'Rose Gold', hex: '#B76E79', code: 'RG' },
    ],
    rating: 4.9,
    reviewsCount: 42,
    specs: {
      material: 'Solid 304 Stainless Steel & PVD Finish',
      flowRate: '12 L/min at 3.0 bar pressure',
      mounting: 'Ceiling or wall arm connection 1/2" BSP',
      dimensions: '300 × 300 × 2 mm ultra-slim profile',
    },
    description:
      'Engineered ultra-slim stainless steel deluge rain shower with silicone anti-limescale nozzles and air-injection rain technology.',
    features: ['Air-infused volumetric rain', 'Silicone easy-clean nozzles', '360° ball joint swivel'],
  },
  {
    id: 'sh_prod_202',
    code: 'SMPL HS-202',
    name: 'Multi-Function Hand Shower',
    category: 'Hand Showers',
    priceINR: 4900,
    formattedPrice: '₹ 4,900',
    image: '/images/showers/products/smpl_hs_202.jpg',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.8,
    reviewsCount: 56,
    specs: {
      material: 'Ergonomic DZR Brass & ABS Spray Face',
      flowRate: '9 L/min with Eco-restrictor',
      mounting: 'Universal 1/2" hose connection',
      dimensions: '110 mm face diameter, 230 mm length',
    },
    description:
      'Triple-mode tactile selector delivering rain deluge, pulsating targeted hydro-massage, and soft mist cascade.',
    features: ['3 spray pattern click selector', 'Anti-twist swivel coupling', 'Ergonomic grip handle'],
  },
  {
    id: 'sh_prod_301',
    code: 'SMPL SYS-301',
    name: 'Shower System with Diverter',
    category: 'Shower Systems',
    priceINR: 28500,
    formattedPrice: '₹ 28,500',
    image: '/images/showers/products/smpl_sys_301.jpg',
    swatches: [
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Nickel', hex: '#9E9A93', code: 'BN' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 5.0,
    reviewsCount: 39,
    specs: {
      material: 'Heavy Cast DR Brass Column & Ceramic Diverter',
      flowRate: '16 L/min overhead, 9 L/min hand wand',
      mounting: 'Wall mounted with adjustable height brackets',
      dimensions: 'Height: 1150 mm, Arm projection: 400 mm',
    },
    description:
      'Complete luxury exposed shower column with integrated rotary diverter, 250mm slim square rain head, and matching slim hand shower.',
    features: ['Dual-outlet mechanical diverter', 'Telescopic height rail', 'Explosion-proof flexible hose'],
  },
  {
    id: 'sh_prod_401',
    code: 'SMPL SP-401',
    name: 'Hydro Shower Panel (6 Jets)',
    category: 'Shower Panels',
    priceINR: 56000,
    formattedPrice: '₹ 56,000',
    image: '/images/showers/products/smpl_sp_401.jpg',
    swatches: [
      { name: 'Brushed Nickel', hex: '#9E9A93', code: 'BN' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.9,
    reviewsCount: 27,
    specs: {
      material: '304 Stainless Steel Chassis & PVD Coating',
      flowRate: '22 L/min combined hydro pressure',
      mounting: 'Flat wall surface mounting with concealed brackets',
      dimensions: '1480 × 200 × 75 mm tower',
    },
    description:
      'Commercial-grade wellness tower integrating overhead rainfall, horizontal waterfall neck-soak, 6 directional body massage jets, and digital temperature display.',
    features: ['6 directional acupressure jets', 'Laminar waterfall cascade', 'Thermostatic anti-scald core'],
  },
  {
    id: 'sh_prod_501',
    code: 'SMPL CS-501',
    name: 'Concealed Shower Mixer (2-Way)',
    category: 'Concealed Showers',
    priceINR: 17900,
    formattedPrice: '₹ 17,900',
    image: '/images/showers/products/smpl_cs_501.jpg',
    swatches: [
      { name: 'Gunmetal', hex: '#3E4146', code: 'GM' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.9,
    reviewsCount: 34,
    specs: {
      material: 'Solid Brass Rough-in Box & CNC Aluminum Trim',
      flowRate: '25 L/min high flow cartridge',
      mounting: 'In-wall rough-in depth 65 - 85 mm',
      dimensions: '190 × 130 mm backplate, dual rotary knobs',
    },
    description:
      'Architectural concealed trim with precision Vernet thermostatic cartridge and 38°C child-safety lock override button.',
    features: ['Vernet 38°C safety thermostatic valve', 'Dual independent rotary flow control', 'Integrated rough-in spirit level'],
  },
  {
    id: 'sh_prod_601',
    code: 'SMPL OH-601',
    name: 'Round Overhead Shower (250 mm)',
    category: 'Overhead Showers',
    priceINR: 8900,
    formattedPrice: '₹ 8,900',
    image: '/images/showers/products/smpl_oh_601.jpg',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.8,
    reviewsCount: 61,
    specs: {
      material: 'DZR Solid Brass & Mirror Polish Finish',
      flowRate: '10 L/min Eco-Smart regulator',
      mounting: 'Standard 1/2" BSP thread',
      dimensions: 'Ø 250 mm × 8 mm edge thickness',
    },
    description:
      'Classic circular rain head providing broad full-body coverage with micro-silicone jets resistant to hard water mineral build-up.',
    features: ['Broad full-body envelopment', 'Anti-calcium silicone tips', 'High-mirror chrome finish'],
  },
  {
    id: 'sh_prod_701',
    code: 'SMPL BJ-701',
    name: 'Flush Dual Wall Body Jets (Pair)',
    category: 'Body Jets',
    priceINR: 9500,
    formattedPrice: '₹ 9,500',
    image: '/images/showers/categories/body_jets.jpg',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.8,
    reviewsCount: 18,
    specs: {
      material: 'Solid Brass Body with Swivel Ball Nozzle',
      flowRate: '5.5 L/min per jet',
      mounting: 'Concealed wall thread 1/2" BSP',
      dimensions: 'Ø 65 mm escutcheon projection',
    },
    description:
      'Concealed flush-mount directional body spray jets providing therapeutic hydrotherapy and targeted muscular relief.',
    features: ['30° omni-directional swivel', 'High pressure invigorating spray', 'Low-profile architectural flange'],
  },
  {
    id: 'sh_prod_801',
    code: 'SMPL SA-801',
    name: 'Curved Wall Shower Arm (400 mm)',
    category: 'Shower Arms',
    priceINR: 4200,
    formattedPrice: '₹ 4,200',
    image: '/images/showers/categories/shower_arms.jpg',
    swatches: [
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.9,
    reviewsCount: 29,
    specs: {
      material: 'Seamless Drawn Solid Brass Tubing',
      flowRate: 'Unrestricted high velocity flow',
      mounting: '1/2" BSP male wall connector',
      dimensions: '400 mm horizontal projection × 65 mm drop',
    },
    description:
      'Rigid architectural shower arm with 90° soft-radius bend and round sliding wall escutcheon plate with silicone seal.',
    features: ['Seamless extruded brass pipe', 'Reinforced internal threading', 'Watertight silicone wall gasket'],
  },
  {
    id: 'sh_prod_901',
    code: 'SMPL AC-901',
    name: 'Architectural Shower Shelf with Handset Dock',
    category: 'Shower Accessories',
    priceINR: 6800,
    formattedPrice: '₹ 6,800',
    image: '/images/showers/categories/shower_accessories.jpg',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    rating: 4.9,
    reviewsCount: 22,
    specs: {
      material: 'Anodized Space Aluminium & Solid Brass Union',
      flowRate: 'Integrated water inlet connection',
      mounting: 'Concealed double screw fixing',
      dimensions: '320 × 120 × 45 mm shelf surface',
    },
    description:
      'Multifunctional shower shelf caddy with self-draining channels, integrated water outlet elbow, and magnetic hand shower dock.',
    features: ['Concealed water feed union', 'Self-draining grooved surface', 'Corrosion-proof anodized aluminium'],
  },
];

interface ShowersPageViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onGoHome: () => void;
  onOpenConsultation?: () => void;
}

export const ShowersPageView: React.FC<ShowersPageViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onGoHome,
  onOpenConsultation,
}) => {
  // Category & Filter State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  // Selected Swatch for each card
  const [activeSwatches, setActiveSwatches] = useState<Record<string, string>>({});

  // Accordion toggle states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    productType: true,
    finish: false,
    priceRange: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // View mode: '6col' | '3col' | 'list'
  const [viewMode, setViewMode] = useState<'6col' | '3col' | 'list'>('6col');

  // Sorting: 'featured' | 'price-asc' | 'price-desc' | 'rating'
  const [sortBy, setSortBy] = useState<string>('featured');

  // Add-to-cart temporary animation state
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const handleClearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedProductTypes([]);
    setSelectedFinishes([]);
    setSelectedPriceRanges([]);
  };

  const handleSelectSwatch = (productId: string, finishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSwatches((prev) => ({ ...prev, [productId]: finishName }));
  };

  const toCanonicalProduct = (item: ShowerProduct, finishName?: string): Product => {
    const chosenFinish = finishName || activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    return {
      id: item.id,
      modelNumber: item.code,
      name: item.name,
      department: 'Showers',
      category: item.category,
      subcategory: item.name,
      collection: 'Contemporary',
      space: 'Master Bathroom',
      price: Math.round(item.priceINR / 83),
      image: item.image,
      galleryImages: [item.image, '/images/showers/hero_shower_banner.jpg'],
      lifestyleImage: '/images/showers/hero_shower_banner.jpg',
      rating: item.rating,
      reviewCount: item.reviewsCount,
      finishes: item.swatches.map((s) => ({ name: s.name, hex: s.hex, code: s.code })),
      specs: {
        dimensions: item.specs.dimensions,
        material: item.specs.material,
        flowRate: item.specs.flowRate,
        mountingType: item.specs.mounting,
      },
      description: item.description,
      features: item.features,
      whatsInTheBox: {
        included: ['Shower Component', 'Mounting Hardware', 'Installation Manual'],
      },
      installationGuide: 'Standard 1/2" BSP plumbing union. Professional installation recommended.',
      inStock: true,
      leadTimeDays: 2,
    };
  };

  const handleAddToCartClick = (item: ShowerProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onAddToCart(prod, chosenFinish);
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const handleProductCardClick = (item: ShowerProduct) => {
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onSelectProduct(prod);
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return SHOWER_PRODUCTS_DATA.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) {
        return false;
      }
      if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(p.category)) {
        return false;
      }
      if (selectedFinishes.length > 0) {
        const hasFinish = p.swatches.some((s) => selectedFinishes.includes(s.name));
        if (!hasFinish) return false;
      }
      if (selectedPriceRanges.length > 0) {
        const matches = selectedPriceRanges.some((range) => {
          if (range === 'under10k') return p.priceINR < 10000;
          if (range === '10k-25k') return p.priceINR >= 10000 && p.priceINR <= 25000;
          if (range === '25k-50k') return p.priceINR >= 25000 && p.priceINR <= 50000;
          if (range === 'above50k') return p.priceINR > 50000;
          return true;
        });
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedProductTypes, selectedFinishes, selectedPriceRanges, sortBy]);

  const isAnyFilterActive =
    selectedCategory !== null ||
    selectedProductTypes.length > 0 ||
    selectedFinishes.length > 0 ||
    selectedPriceRanges.length > 0;

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#2C2825] font-sans">
      {/* 1. Hero Banner: Exactly matching reference image */}
      <section className="w-full bg-[#FAF7F2] border-b border-[#E8E0D5]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] bg-[#EAE3D6] min-h-[380px] md:min-h-[440px] flex items-center shadow-xs">
            {/* Background Image: Architectural travertine bathroom with rain shower, shelf niche & black controls */}
            <img
              src="/images/showers/hero_shower_banner.jpg"
              alt="Showers Collection"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            />

            {/* Left Warm Diffused Gradient to maintain high contrast for typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F3]/95 via-[#FBF8F3]/80 to-transparent pointer-events-none" />

            {/* Hero Left Content */}
            <div className="relative z-10 max-w-xl p-6 sm:p-10 md:p-12">
              <span className="block text-[11px] uppercase tracking-[0.25em] text-[#7A7065] font-semibold mb-3">
                SHOWERS COLLECTION
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24201D] tracking-tight leading-[1.12]">
                Elevate Your
                <br />
                Bathing Experience
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#574F46] leading-relaxed max-w-md">
                A complete range of showers and shower systems that combine performance, comfort and
                modern design.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('shower-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-[#24201D] hover:bg-[#3D3733] text-white text-xs font-semibold rounded-md transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Showers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setSelectedCategory('Shower Systems');
                    const el = document.getElementById('shower-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white/80 hover:bg-white text-[#24201D] border border-[#C5BBAE] text-xs font-semibold rounded-md transition-all shadow-2xs cursor-pointer"
                >
                  Shower Systems
                </button>
              </div>
            </div>
          </div>

          {/* 5 Value Pillars Bar directly underneath the hero */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-[#EAE3D6]">
            {/* Pillar 1 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <CloudRain className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Rainfall Comfort</div>
                <div className="text-[11px] text-[#786F64]">Immersive Water Flow</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Thermometer className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Thermostatic Control</div>
                <div className="text-[11px] text-[#786F64]">Consistent &amp; Safe Temperature</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Water Efficient</div>
                <div className="text-[11px] text-[#786F64]">High Performance, Lower Consumption</div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Gem className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Premium Finishes</div>
                <div className="text-[11px] text-[#786F64]">Chrome, Matte Black, Brushed Gold &amp; More</div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Durable &amp; Long Lasting</div>
                <div className="text-[11px] text-[#786F64]">Corrosion &amp; Rust Resistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Shower Category Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-serif text-[#24201D] font-medium tracking-tight">
            Shop by Shower Category
          </h2>
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-xs font-semibold text-[#24201D] hover:text-[#6F4E37] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Showers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 8 Category Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
          {SHOWER_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory((prev) => (prev === cat.id ? null : cat.id))}
                className={`group relative rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 aspect-4/3 flex items-end p-2.5 shadow-2xs ${
                  isSelected
                    ? 'border-[#24201D] ring-2 ring-[#24201D]/20 shadow-md'
                    : 'border-[#E8E0D5] hover:border-[#BFB2A3] hover:shadow-md'
                }`}
              >
                {/* Background Category Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                />

                {/* Dark Vignette Overlay for Crisp White Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Selected Checkmark Badge */}
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-white text-[#24201D] p-1 rounded-full shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}

                {/* Label with Arrow */}
                <div className="relative z-10 w-full flex items-center justify-between text-white">
                  <span className="text-[11.5px] font-semibold leading-tight drop-shadow-xs">
                    {cat.title}
                  </span>
                  <ArrowRight className="w-3 h-3 text-white/90 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Main Catalog Area (Sidebar Filters + Products Grid) */}
      <section id="shower-catalog" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sidebar Filters */}
          <aside className="lg:col-span-3 xl:col-span-2 bg-white border border-[#E8E0D5] rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFE9DF]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#24201D]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#24201D]">
                  Filters
                </h3>
              </div>
              {isAnyFilterActive && (
                <button
                  onClick={handleClearAllFilters}
                  className="text-xs font-medium text-[#7D4F28] hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Accordion 1: Product Type (expanded in screenshot) */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('productType')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Product Type</span>
                {openAccordions.productType ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.productType && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Overhead Showers', label: 'Overhead Showers', count: 128 },
                    { id: 'Hand Showers', label: 'Hand Showers', count: 94 },
                    { id: 'Shower Systems', label: 'Shower Systems', count: 76 },
                    { id: 'Shower Panels', label: 'Shower Panels', count: 18 },
                    { id: 'Body Jets', label: 'Body Jets', count: 24 },
                    { id: 'Concealed Showers', label: 'Concealed Showers', count: 36 },
                  ].map((item) => {
                    const isChecked =
                      selectedProductTypes.includes(item.id) || selectedCategory === item.id;
                    return (
                      <label
                        key={item.id}
                        className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              setSelectedProductTypes((prev) =>
                                prev.includes(item.id)
                                  ? prev.filter((t) => t !== item.id)
                                  : [...prev, item.id]
                              );
                            }}
                            className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                          />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[11px] text-[#9A9084] font-normal group-hover:text-[#6E6459]">
                          ({item.count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Accordion 2: Finish */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('finish')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Finish</span>
                {openAccordions.finish ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.finish && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Chrome', label: 'Chrome', hex: '#D8D8D8' },
                    { id: 'Matte Black', label: 'Matte Black', hex: '#1D1D1B' },
                    { id: 'Brushed Brass', label: 'Brushed Gold / Brass', hex: '#CBA167' },
                    { id: 'Brushed Nickel', label: 'Brushed Nickel', hex: '#9E9A93' },
                    { id: 'Gunmetal', label: 'Gunmetal', hex: '#3E4146' },
                    { id: 'Rose Gold', label: 'Rose Gold', hex: '#B76E79' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFinishes.includes(item.id)}
                        onChange={() => {
                          setSelectedFinishes((prev) =>
                            prev.includes(item.id)
                              ? prev.filter((t) => t !== item.id)
                              : [...prev, item.id]
                          );
                        }}
                        className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs shrink-0"
                        style={{ backgroundColor: item.hex }}
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 3: Price Range */}
            <div className="pt-4">
              <button
                onClick={() => toggleAccordion('priceRange')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Price Range</span>
                {openAccordions.priceRange ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.priceRange && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'under10k', label: 'Under ₹ 10,000' },
                    { id: '10k-25k', label: '₹ 10,000 – ₹ 25,000' },
                    { id: '25k-50k', label: '₹ 25,000 – ₹ 50,000' },
                    { id: 'above50k', label: 'Above ₹ 50,000' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(item.id)}
                        onChange={() => {
                          setSelectedPriceRanges((prev) =>
                            prev.includes(item.id)
                              ? prev.filter((t) => t !== item.id)
                              : [...prev, item.id]
                          );
                        }}
                        className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Right Column: Products Grid (6 Columns Layout as in Screenshot) */}
          <main className="lg:col-span-9 xl:col-span-10">
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E8E0D5]">
              {/* Product Count matching reference */}
              <div className="text-sm text-[#4A423B]">
                Showing{' '}
                <span className="font-semibold text-[#24201D]">
                  1 – {filteredProducts.length}
                </span>{' '}
                of <span className="font-semibold text-[#24201D]">436</span> Showers
              </div>

              {/* Sort By & View Mode */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#7A7067]">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort shower products"
                    className="text-xs font-medium text-[#24201D] bg-white border border-[#D5CCC0] rounded-sm px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-[#24201D] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>

                {/* View Toggles */}
                <div className="flex items-center border border-[#D5CCC0] rounded-sm overflow-hidden bg-white">
                  <button
                    onClick={() => setViewMode('6col')}
                    title="Compact Grid"
                    className={`p-1.5 cursor-pointer transition-colors ${
                      viewMode === '6col'
                        ? 'bg-[#24201D] text-white'
                        : 'text-[#7A7067] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('3col')}
                    title="Wide Grid"
                    className={`p-1.5 cursor-pointer transition-colors ${
                      viewMode === '3col'
                        ? 'bg-[#24201D] text-white'
                        : 'text-[#7A7067] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <Grid3X3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="List View"
                    className={`p-1.5 cursor-pointer transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[#24201D] text-white'
                        : 'text-[#7A7067] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Pills (if any) */}
            {isAnyFilterActive && (
              <div className="flex flex-wrap items-center gap-2 py-3">
                <span className="text-xs text-[#8C8176]">Active filters:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EBE5DA] text-xs text-[#24201D] rounded-full">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="cursor-pointer hover:text-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedProductTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EBE5DA] text-xs text-[#24201D] rounded-full"
                  >
                    {type}
                    <button
                      onClick={() =>
                        setSelectedProductTypes((prev) => prev.filter((t) => t !== type))
                      }
                      className="cursor-pointer hover:text-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedFinishes.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EBE5DA] text-xs text-[#24201D] rounded-full"
                  >
                    {f}
                    <button
                      onClick={() =>
                        setSelectedFinishes((prev) => prev.filter((item) => item !== f))
                      }
                      className="cursor-pointer hover:text-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* 6-Column Product Grid exactly as in screenshot */}
            <div
              className={`mt-6 gap-3.5 ${
                viewMode === '6col'
                  ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'
                  : viewMode === '3col'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'flex flex-col gap-4'
              }`}
            >
              {filteredProducts.map((prod) => {
                const isItemWishlisted = isWishlisted(prod.id);
                const isAdded = addedAnimation[prod.id];
                const activeFinish = activeSwatches[prod.id] || prod.swatches[0]?.name;

                return (
                  <div
                    key={prod.id}
                    onClick={() => handleProductCardClick(prod)}
                    className="group bg-white rounded-xl border border-[#E8E0D5] hover:border-[#BFB2A3] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Top Image Container with Wishlist */}
                    <div>
                      <div className="relative aspect-4/3 w-full bg-[#F5EFE6] overflow-hidden">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                        />

                        {/* Top-Right Circular Wishlist Heart */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(toCanonicalProduct(prod, activeFinish));
                          }}
                          title={isItemWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
                          className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-xs transition-colors cursor-pointer ${
                            isItemWishlisted
                              ? 'bg-[#982B2B] text-white'
                              : 'bg-white/90 hover:bg-white text-[#24201D]'
                          }`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${isItemWishlisted ? 'fill-current' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Content Area */}
                      <div className="p-3">
                        {/* Model Code */}
                        <div className="font-bold text-xs text-[#24201D] tracking-tight">
                          {prod.code}
                        </div>

                        {/* Name / Subtitle */}
                        <div className="text-[11px] text-[#7A7067] mt-0.5 line-clamp-1 leading-snug">
                          {prod.name}
                        </div>

                        {/* Finish Swatches Row */}
                        <div className="mt-2 flex items-center gap-1.5">
                          {prod.swatches.map((swatch) => {
                            const isSelected = activeFinish === swatch.name;
                            return (
                              <button
                                key={swatch.name}
                                onClick={(e) => handleSelectSwatch(prod.id, swatch.name, e)}
                                title={swatch.name}
                                className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                                  isSelected
                                    ? 'ring-1 ring-[#24201D] scale-110 border-white'
                                    : 'border-black/20 hover:scale-105'
                                }`}
                                style={{ backgroundColor: swatch.hex }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Price & Add to Cart button */}
                    <div className="p-3 pt-1 border-t border-[#F2ECE1] flex items-center justify-between gap-1.5">
                      <span className="text-xs sm:text-[13px] font-bold text-[#24201D] tracking-tight">
                        {prod.formattedPrice}
                      </span>

                      <button
                        onClick={(e) => handleAddToCartClick(prod, e)}
                        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1 shadow-xs ${
                          isAdded
                            ? 'bg-[#2E5E3D] text-white'
                            : 'bg-[#24201D] hover:bg-[#3D3733] text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3 h-3" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};
