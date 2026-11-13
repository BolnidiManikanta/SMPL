import React, { useState, useMemo } from 'react';
import {
  Droplets,
  Gem,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Heart,
  Grid3X3,
  LayoutGrid,
  List,
  Check,
  SlidersHorizontal,
  Maximize2,
  Layers,
  ArrowRight,
  X,
} from 'lucide-react';
import { Product } from '../types';

export interface SanitaryProduct {
  id: string;
  code: string;
  name: string;
  type: string;
  category: 'Water Closets' | 'Wash Basins' | 'Vanities' | 'Urinals' | 'Bidets' | 'Concealed Cisterns' | 'Toilet Seats';
  installationType: 'Floor Mounted' | 'Wall Mounted' | 'Countertop / Deck Mounted' | 'Concealed In-Wall';
  shape: 'Round' | 'Oval' | 'Rectangular' | 'D-Shape';
  material: 'Vitreous Ceramic' | 'Fine Fireclay' | 'Solid Surface' | 'Natural Timber & Ceramic';
  finish: 'Alpine White (Glossy)' | 'Matte White' | 'Matte Black' | 'Basalt Grey' | 'Travertine / Warm Sand';
  priceINR: number;
  formattedPrice: string;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isFeatured?: boolean;
  images: string[];
  features: {
    icon: 'droplet' | 'sparkle' | 'shield' | 'gem' | 'maximize' | 'layers';
    text: string;
  }[];
  specs: {
    dimensions: string;
    weight: string;
    trapDistance?: string;
    flowRate?: string;
    mounting: string;
  };
  description: string;
}

export const SANITARYWARE_SUBCATEGORIES = [
  {
    id: 'Water Closets',
    title: 'Water Closets (WCs)',
    subtitle: 'One-Piece | Wall Hung | Two-Piece',
    image: '/images/sanitaryware/wc_one_piece.webp',
    count: 128,
  },
  {
    id: 'Wash Basins',
    title: 'Wash Basins',
    subtitle: 'Countertop | Wall Hung | Pedestal',
    image: '/images/sanitaryware/wash_basin_countertop.webp',
    count: 96,
  },
  {
    id: 'Vanities',
    title: 'Vanities & Basin Units',
    subtitle: 'Cabinet | Wall Mounted | Floor Standing',
    image: '/images/sanitaryware/vanity_basin_unit.webp',
    count: 54,
  },
  {
    id: 'Urinals',
    title: 'Urinals',
    subtitle: 'Wall Mounted | Sensor',
    image: '/images/sanitaryware/urinal_wall_hung.webp',
    count: 18,
  },
  {
    id: 'Bidets',
    title: 'Bidets',
    subtitle: 'Wall Mounted | Floor Mounted',
    image: '/images/sanitaryware/bidet_wall_hung.webp',
    count: 22,
  },
  {
    id: 'Concealed Cisterns',
    title: 'Concealed Cisterns',
    subtitle: 'Frames | Flush Plates',
    image: '/images/sanitaryware/cistern_frame.webp',
    count: 28,
  },
  {
    id: 'Toilet Seats',
    title: 'Toilet Seats & Covers',
    subtitle: 'Soft Close | Quick Release',
    image: '/images/sanitaryware/toilet_seat.webp',
    count: 36,
  },
];

export const SANITARY_CATALOG_PRODUCTS: SanitaryProduct[] = [
  {
    id: 'san_wc_101',
    code: 'SMPL WC-101',
    name: 'One-Piece Water Closet',
    type: 'One-Piece Water Closet',
    category: 'Water Closets',
    installationType: 'Floor Mounted',
    shape: 'Oval',
    material: 'Vitreous Ceramic',
    finish: 'Alpine White (Glossy)',
    priceINR: 34900,
    formattedPrice: '₹ 34,900',
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    isFeatured: true,
    images: [
      '/images/sanitaryware/wc_one_piece.webp',
      '/images/products_ultra/toilet_commode_hd.webp',
      '/images/sanitaryware/hero_sanitaryware.webp',
      '/images/sanitaryware/schematics/cad_wc_101.svg',
    ],
    features: [
      { icon: 'droplet', text: '4/6L Dual Flush' },
      { icon: 'sparkle', text: 'Rimless Design' },
      { icon: 'shield', text: 'Easy Clean' },
    ],
    specs: {
      dimensions: '690 × 370 × 785 mm',
      weight: '44 kg',
      trapDistance: 'S-Trap 300 mm Roughing-in',
      mounting: 'Floor mounted with concealed fixing bracket',
    },
    description:
      'Architectural monolithic one-piece WC featuring high-velocity rimless 360° cyclone flushing, Nano-Glaze antibacterial porcelain, and UF soft-close seat.',
  },
  {
    id: 'san_wb_205',
    code: 'SMPL WB-205',
    name: 'Countertop Wash Basin',
    type: 'Countertop Wash Basin',
    category: 'Wash Basins',
    installationType: 'Countertop / Deck Mounted',
    shape: 'Oval',
    material: 'Vitreous Ceramic',
    finish: 'Alpine White (Glossy)',
    priceINR: 8900,
    formattedPrice: '₹ 8,900',
    rating: 4.8,
    reviewsCount: 46,
    isBestseller: true,
    isFeatured: true,
    images: [
      '/images/sanitaryware/wash_basin_countertop.webp',
      '/images/products_ultra/stone_basin_hd.webp',
      '/images/categories_hd/wash_basins.webp',
      '/images/sanitaryware/schematics/cad_wb_205.svg',
    ],
    features: [
      { icon: 'gem', text: 'Vitreous Ceramic' },
      { icon: 'sparkle', text: 'Stain Resistant' },
      { icon: 'shield', text: 'Durable' },
    ],
    specs: {
      dimensions: '600 × 400 × 145 mm',
      weight: '11.8 kg',
      mounting: 'Deck-mounted countertop vanity placement',
    },
    description:
      'Ultra-thin 5mm precision edge vessel basin crafted with fine vitreous porcelain, anti-stain hydro-shield glazing, and universal pop-up waste compatibility.',
  },
  {
    id: 'san_wh_310',
    code: 'SMPL WH-310',
    name: 'Wall-Hung Water Closet',
    type: 'Wall-Hung Water Closet',
    category: 'Water Closets',
    installationType: 'Wall Mounted',
    shape: 'D-Shape',
    material: 'Vitreous Ceramic',
    finish: 'Alpine White (Glossy)',
    priceINR: 29500,
    formattedPrice: '₹ 29,500',
    rating: 4.9,
    reviewsCount: 52,
    isBestseller: true,
    isFeatured: true,
    images: [
      '/images/sanitaryware/toilet_wall_hung.webp',
      '/images/categories_hd/toilets.webp',
      '/images/sanitaryware/urinal_wall_hung.webp',
      '/images/sanitaryware/schematics/cad_wh_310.svg',
    ],
    features: [
      { icon: 'droplet', text: 'Rimless Flush' },
      { icon: 'maximize', text: 'Space Saving' },
      { icon: 'sparkle', text: 'Modern Look' },
    ],
    specs: {
      dimensions: '540 × 360 × 360 mm',
      weight: '28 kg',
      mounting: 'In-wall concealed carrier with 180mm bolt centers',
    },
    description:
      'Floating wall-hung toilet engineered for minimalist aesthetics and effortless floor maintenance. Features silent rimless hydraulic tornado flush.',
  },
  {
    id: 'san_van_401',
    code: 'SMPL VAN-401',
    name: 'Basin Vanity Unit',
    type: 'Basin Vanity Unit',
    category: 'Vanities',
    installationType: 'Wall Mounted',
    shape: 'Rectangular',
    material: 'Natural Timber & Ceramic',
    finish: 'Travertine / Warm Sand',
    priceINR: 42000,
    formattedPrice: '₹ 42,000',
    rating: 5.0,
    reviewsCount: 29,
    isBestseller: true,
    isFeatured: true,
    images: [
      '/images/sanitaryware/vanity_basin_unit.webp',
      '/images/sanitaryware/wash_basin_countertop.webp',
      '/images/sanitaryware/hero_sanitaryware.webp',
      '/images/sanitaryware/schematics/cad_van_401.svg',
    ],
    features: [
      { icon: 'droplet', text: 'Moisture Resistant' },
      { icon: 'layers', text: 'Soft Close Drawers' },
      { icon: 'sparkle', text: 'Premium Finish' },
    ],
    specs: {
      dimensions: '900 × 480 × 520 mm',
      weight: '39 kg',
      mounting: 'Heavy-duty wall anchor brackets with Blum undermount runners',
    },
    description:
      'Bespoke architectural floating vanity featuring fluted natural solid oak facade, seamless integrated vitreous ceramic sink, and deep soft-close organizers.',
  },
  {
    id: 'san_ur_501',
    code: 'SMPL UR-501',
    name: 'Automated Sensor Urinal',
    type: 'Wall-Mounted Urinal',
    category: 'Urinals',
    installationType: 'Wall Mounted',
    shape: 'Oval',
    material: 'Vitreous Ceramic',
    finish: 'Alpine White (Glossy)',
    priceINR: 18500,
    formattedPrice: '₹ 18,500',
    rating: 4.8,
    reviewsCount: 19,
    isFeatured: false,
    images: [
      '/images/sanitaryware/urinal_wall_hung.webp',
      '/images/sanitaryware/hero_sanitaryware.webp',
      '/images/sanitaryware/toilet_wall_hung.webp',
      '/images/sanitaryware/schematics/cad_wh_310.svg',
    ],
    features: [
      { icon: 'droplet', text: '0.8L Eco Flush' },
      { icon: 'sparkle', text: 'Radar Sensor' },
      { icon: 'shield', text: 'Anti-Splash Rim' },
    ],
    specs: {
      dimensions: '330 × 310 × 680 mm',
      weight: '21 kg',
      mounting: 'Wall mounted with concealed integrated radar sensor unit',
    },
    description:
      'Touch-free commercial-grade hygienic ceramic urinal equipped with radar microwave sensor, automated 24-hour hygiene flush, and splash-proof interior geometry.',
  },
  {
    id: 'san_bd_601',
    code: 'SMPL BD-601',
    name: 'Wall-Mounted Luxury Bidet',
    type: 'Wall-Mounted Bidet',
    category: 'Bidets',
    installationType: 'Wall Mounted',
    shape: 'D-Shape',
    material: 'Vitreous Ceramic',
    finish: 'Alpine White (Glossy)',
    priceINR: 24900,
    formattedPrice: '₹ 24,900',
    rating: 4.9,
    reviewsCount: 15,
    isFeatured: false,
    images: [
      '/images/sanitaryware/bidet_wall_hung.webp',
      '/images/sanitaryware/toilet_wall_hung.webp',
      '/images/sanitaryware/hero_sanitaryware.webp',
      '/images/sanitaryware/schematics/cad_wh_310.svg',
    ],
    features: [
      { icon: 'droplet', text: 'Ergonomic Bowl' },
      { icon: 'sparkle', text: 'Tap Hole Ready' },
      { icon: 'shield', text: 'Concealed Fixing' },
    ],
    specs: {
      dimensions: '540 × 360 × 340 mm',
      weight: '24 kg',
      mounting: 'Wall-hung installation matching WH-310 collection',
    },
    description:
      'Curved ergonomic ceramic bidet with single-hole pre-punched tap deck, integrated overflow, and concealed wall bolt couplings.',
  },
  {
    id: 'san_cc_701',
    code: 'SMPL CC-701',
    name: 'Concealed Cistern Installation Frame',
    type: 'Concealed Cistern Frame',
    category: 'Concealed Cisterns',
    installationType: 'Concealed In-Wall',
    shape: 'Rectangular',
    material: 'Solid Surface',
    finish: 'Matte White',
    priceINR: 16800,
    formattedPrice: '₹ 16,800',
    rating: 4.9,
    reviewsCount: 42,
    isFeatured: false,
    images: [
      '/images/sanitaryware/cistern_frame.webp',
      '/images/sanitaryware/toilet_wall_hung.webp',
      '/images/sanitaryware/hero_sanitaryware.webp',
      '/images/sanitaryware/schematics/cad_wh_310.svg',
    ],
    features: [
      { icon: 'droplet', text: 'Dual 3/6L Valve' },
      { icon: 'layers', text: '400kg Load Rated' },
      { icon: 'shield', text: 'Acoustic Insulated' },
    ],
    specs: {
      dimensions: '500 × 120 × 1140 mm',
      weight: '16.5 kg',
      mounting: 'Drywall stud or masonry concealed in-wall carrier',
    },
    description:
      'Powder-coated heavy steel structural mounting frame rated for 400 kg load capacity with condensation-insulated dual pneumatic reservoir tank.',
  },
  {
    id: 'san_ts_801',
    code: 'SMPL TS-801',
    name: 'Ultra-Slim Soft-Close Toilet Seat',
    type: 'Toilet Seat & Cover',
    category: 'Toilet Seats',
    installationType: 'Floor Mounted',
    shape: 'Oval',
    material: 'Solid Surface',
    finish: 'Alpine White (Glossy)',
    priceINR: 4200,
    formattedPrice: '₹ 4,200',
    rating: 4.8,
    reviewsCount: 31,
    isFeatured: false,
    images: [
      '/images/sanitaryware/toilet_seat.webp',
      '/images/sanitaryware/wc_one_piece.webp',
      '/images/sanitaryware/toilet_wall_hung.webp',
      '/images/sanitaryware/schematics/cad_wc_101.svg',
    ],
    features: [
      { icon: 'layers', text: 'Soft-Close Damper' },
      { icon: 'sparkle', text: 'Quick-Release Pin' },
      { icon: 'shield', text: 'Scratch-Proof UF' },
    ],
    specs: {
      dimensions: '445 × 365 × 45 mm',
      weight: '2.6 kg',
      mounting: 'Top-fixing stainless steel quick-release hinges',
    },
    description:
      'Duroplast Urea-Formaldehyde ultra-slim toilet seat featuring hydraulic silent closing pistons and 1-button instant removal for effortless bowl cleaning.',
  },
];

interface SanitarywarePageViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onGoHome: () => void;
  onOpenConsultation?: () => void;
}

export const SanitarywarePageView: React.FC<SanitarywarePageViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onGoHome,
  onOpenConsultation,
}) => {
  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedInstallations, setSelectedInstallations] = useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  // Accordion open/close states (Product Type is open by default)
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    productType: true,
    installation: false,
    shape: false,
    material: false,
    finish: false,
    priceRange: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // View mode: '4col' | '3col' | 'list'
  const [viewMode, setViewMode] = useState<'4col' | '3col' | 'list'>('4col');

  // Sorting: 'featured' | 'price-asc' | 'price-desc' | 'rating'
  const [sortBy, setSortBy] = useState<string>('featured');

  // Active image index for each card
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});

  // Compare selection state
  const [comparedIds, setComparedIds] = useState<string[]>([]);

  // Add-to-cart temporary animation state
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const handleNextImage = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % total,
    }));
  };

  const handlePrevImage = (productId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + total) % total,
    }));
  };

  const handleSelectThumbnail = (productId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [productId]: index,
    }));
  };

  const handleToggleCompare = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setComparedIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const toCanonicalProduct = (item: SanitaryProduct, imgIdx: number = 0): Product => ({
    id: item.id,
    modelNumber: item.code,
    name: item.name,
    department: 'Sanitaryware',
    category: item.category,
    subcategory: item.type,
    collection: 'Contemporary',
    space: 'Master Bathroom',
    price: Math.round(item.priceINR / 83),
    image: item.images[imgIdx] || item.images[0],
    galleryImages: item.images,
    lifestyleImage: item.images[2] || '/images/sanitaryware/hero_sanitaryware.webp',
    rating: item.rating,
    reviewCount: item.reviewsCount,
    finishes: [{ name: item.finish, hex: '#FFFFFF', code: 'WHT' }],
    specs: {
      dimensions: item.specs.dimensions,
      weight: item.specs.weight,
      material: item.material,
      mountingType: item.specs.mounting,
    },
    description: item.description,
    features: item.features.map((f) => f.text),
    whatsInTheBox: {
      included: ['Ceramic Unit', 'Mounting Kit', 'Architectural Installation Template'],
    },
    installationGuide:
      'Professional installation recommended by certified plumbing technician according to local building code.',
    inStock: true,
    leadTimeDays: 3,
  });

  const handleAddToCartClick = (item: SanitaryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const prod = toCanonicalProduct(item);
    onAddToCart(prod, item.finish);
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const handleProductCardClick = (item: SanitaryProduct) => {
    const prod = toCanonicalProduct(item, activeImageIndices[item.id] || 0);
    onSelectProduct(prod);
  };

  const handleClearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedProductTypes([]);
    setSelectedInstallations([]);
    setSelectedShapes([]);
    setSelectedMaterials([]);
    setSelectedFinishes([]);
    setSelectedPriceRanges([]);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return SANITARY_CATALOG_PRODUCTS.filter((p) => {
      // Subcategory banner filter
      if (selectedCategory && p.category !== selectedCategory) {
        return false;
      }
      // Product type checkboxes
      if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(p.category)) {
        return false;
      }
      // Installation type
      if (selectedInstallations.length > 0 && !selectedInstallations.includes(p.installationType)) {
        return false;
      }
      // Shape
      if (selectedShapes.length > 0 && !selectedShapes.includes(p.shape)) {
        return false;
      }
      // Material
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
        return false;
      }
      // Finish
      if (selectedFinishes.length > 0 && !selectedFinishes.includes(p.finish)) {
        return false;
      }
      // Price range
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some((range) => {
          if (range === 'under10k') return p.priceINR < 10000;
          if (range === '10k-25k') return p.priceINR >= 10000 && p.priceINR <= 25000;
          if (range === '25k-50k') return p.priceINR >= 25000 && p.priceINR <= 50000;
          if (range === 'above50k') return p.priceINR > 50000;
          return true;
        });
        if (!matchesPrice) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [
    selectedCategory,
    selectedProductTypes,
    selectedInstallations,
    selectedShapes,
    selectedMaterials,
    selectedFinishes,
    selectedPriceRanges,
    sortBy,
  ]);

  const renderFeatureIcon = (icon: 'droplet' | 'sparkle' | 'shield' | 'gem' | 'maximize' | 'layers') => {
    switch (icon) {
      case 'droplet':
        return <Droplets className="w-3.5 h-3.5 text-[#5B8FB9]" />;
      case 'gem':
        return <Gem className="w-3.5 h-3.5 text-[#A67C52]" />;
      case 'sparkle':
        return <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />;
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#4E7D59]" />;
      case 'maximize':
        return <Maximize2 className="w-3.5 h-3.5 text-[#736372]" />;
      case 'layers':
        return <Layers className="w-3.5 h-3.5 text-[#8E7864]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />;
    }
  };

  const isAnyFilterActive =
    selectedCategory !== null ||
    selectedProductTypes.length > 0 ||
    selectedInstallations.length > 0 ||
    selectedShapes.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedFinishes.length > 0 ||
    selectedPriceRanges.length > 0;

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#2C2825] font-sans">
      {/* 1. Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 pb-2">
        <nav className="flex items-center gap-2 text-xs text-[#8A8175]">
          <button
            onClick={onGoHome}
            className="hover:text-[#2C2825] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>&gt;</span>
          <span className="text-[#2C2825] font-medium">Sanitaryware</span>
        </nav>
      </div>

      {/* 2. Hero Banner: Exactly matching reference image */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] bg-[#EFE9DF] min-h-[360px] md:min-h-[420px] flex items-center shadow-xs">
          {/* Background Photography: Architectural Travertine Bathroom with Wall-Hung Toilet and Vessel Basin */}
          <img
            src="/images/sanitaryware/hero_sanitaryware.webp"
            alt="Sanitaryware Bathroom Interior"
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
          />

          {/* Left Subtle Gradient to guarantee typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F3]/95 via-[#FBF8F3]/80 to-transparent pointer-events-none" />

          {/* Hero Text & Value Props */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-10 md:p-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24201D] tracking-tight leading-[1.15]">
              Sanitaryware Collections
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#574F46] leading-relaxed max-w-xl">
              A complete range of toilets, wash basins, cisterns and complementary sanitary
              solutions for modern spaces.
            </p>

            {/* 4 Feature Badges Row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#DED4C5]/80">
              {/* Badge 1 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white/80 border border-[#E2DACF] shadow-2xs">
                  <Droplets className="w-4 h-4 text-[#3E7099]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#24201D]">Water Efficient</div>
                  <div className="text-[11px] text-[#786F64]">Dual Flush Options</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white/80 border border-[#E2DACF] shadow-2xs">
                  <Gem className="w-4 h-4 text-[#8C6D4A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#24201D]">Durable &amp; Hygienic</div>
                  <div className="text-[11px] text-[#786F64]">Premium Ceramic</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white/80 border border-[#E2DACF] shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#A88220]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#24201D]">Easy to Maintain</div>
                  <div className="text-[11px] text-[#786F64]">Stain &amp; Odour Resistant</div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white/80 border border-[#E2DACF] shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#3D714C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#24201D]">Long Lasting</div>
                  <div className="text-[11px] text-[#786F64]">Trusted Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Subcategory Strip (7 Horizontal Cards) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {SANITARYWARE_SUBCATEGORIES.map((sub) => {
            const isSelected = selectedCategory === sub.id;
            return (
              <div
                key={sub.id}
                onClick={() => {
                  setSelectedCategory((prev) => (prev === sub.id ? null : sub.id));
                }}
                className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 bg-white hover:shadow-md flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#24201D] ring-2 ring-[#24201D]/20 shadow-sm'
                    : 'border-[#E8E0D5] hover:border-[#BFB2A3]'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full bg-[#F4EFE6] overflow-hidden">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#24201D] text-white p-1 rounded-full shadow-xs">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Subcategory Label & Arrow */}
                <div className="p-3 bg-white flex flex-col justify-between grow">
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <h3 className="text-xs font-semibold text-[#24201D] leading-tight group-hover:text-[#6F4E37] transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-[10px] text-[#8C8176] mt-0.5 leading-snug">
                        {sub.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C8176] group-hover:text-[#24201D] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Main Catalog Area (Two Column: Sidebar Filters + Products Grid) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sidebar Filters */}
          <aside className="lg:col-span-3 bg-white border border-[#E8E0D5] rounded-xl p-5 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFE9DF]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#24201D]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#24201D]">
                  Filters
                </h2>
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

            {/* Accordion 1: Product Type (open by default in screenshot) */}
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
                    { id: 'Water Closets', label: 'Water Closets', count: 128 },
                    { id: 'Wash Basins', label: 'Wash Basins', count: 96 },
                    { id: 'Vanities', label: 'Vanities', count: 54 },
                    { id: 'Urinals', label: 'Urinals', count: 18 },
                    { id: 'Bidets', label: 'Bidets', count: 22 },
                    { id: 'Concealed Cisterns', label: 'Concealed Cisterns', count: 28 },
                    { id: 'Toilet Seats', label: 'Toilet Seats', count: 36 },
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

            {/* Accordion 2: Installation Type */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('installation')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Installation Type</span>
                {openAccordions.installation ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.installation && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Wall Mounted', label: 'Wall Mounted', count: 142 },
                    { id: 'Floor Mounted', label: 'Floor Mounted', count: 98 },
                    { id: 'Countertop / Deck Mounted', label: 'Countertop / Deck', count: 76 },
                    { id: 'Concealed In-Wall', label: 'Concealed In-Wall', count: 38 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedInstallations.includes(item.id)}
                          onChange={() => {
                            setSelectedInstallations((prev) =>
                              prev.includes(item.id)
                                ? prev.filter((t) => t !== item.id)
                                : [...prev, item.id]
                            );
                          }}
                          className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] text-[#9A9084]">({item.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 3: Shape */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('shape')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Shape</span>
                {openAccordions.shape ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.shape && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Oval', label: 'Oval', count: 112 },
                    { id: 'Rectangular', label: 'Rectangular', count: 95 },
                    { id: 'Round', label: 'Round', count: 84 },
                    { id: 'D-Shape', label: 'D-Shape', count: 63 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedShapes.includes(item.id)}
                          onChange={() => {
                            setSelectedShapes((prev) =>
                              prev.includes(item.id)
                                ? prev.filter((t) => t !== item.id)
                                : [...prev, item.id]
                            );
                          }}
                          className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] text-[#9A9084]">({item.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 4: Material */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('material')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Material</span>
                {openAccordions.material ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.material && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Vitreous Ceramic', label: 'Vitreous China Ceramic', count: 210 },
                    { id: 'Fine Fireclay', label: 'Fine Fireclay', count: 64 },
                    { id: 'Solid Surface', label: 'Solid Surface', count: 45 },
                    { id: 'Natural Timber & Ceramic', label: 'Architectural Timber & Basin', count: 35 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(item.id)}
                          onChange={() => {
                            setSelectedMaterials((prev) =>
                              prev.includes(item.id)
                                ? prev.filter((t) => t !== item.id)
                                : [...prev, item.id]
                            );
                          }}
                          className="w-4 h-4 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                        />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] text-[#9A9084]">({item.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 5: Color / Finish */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('finish')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Color / Finish</span>
                {openAccordions.finish ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.finish && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Alpine White (Glossy)', label: 'Alpine White (Glossy)', hex: '#FFFFFF' },
                    { id: 'Matte White', label: 'Matte White', hex: '#F0EEE9' },
                    { id: 'Matte Black', label: 'Matte Black', hex: '#242424' },
                    { id: 'Basalt Grey', label: 'Basalt Grey', hex: '#5E6064' },
                    { id: 'Travertine / Warm Sand', label: 'Travertine / Warm Sand', hex: '#C9B69B' },
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

            {/* Accordion 6: Price Range */}
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

          {/* Right Column: Products List & Grid */}
          <main className="lg:col-span-9">
            {/* Header controls matching screenshot */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E8E0D5]">
              {/* Product count */}
              <div className="text-sm text-[#4A423B]">
                Showing{' '}
                <span className="font-semibold text-[#24201D]">
                  1 – {filteredProducts.length}
                </span>{' '}
                of <span className="font-semibold text-[#24201D]">354</span> Sanitaryware Products
              </div>

              {/* Controls: Sort By & View toggle */}
              <div className="flex items-center gap-4">
                {/* Sort By Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#7A7067]">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort sanitaryware products"
                    className="text-xs font-medium text-[#24201D] bg-white border border-[#D5CCC0] rounded-sm px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-[#24201D] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>

                {/* View Mode Buttons */}
                <div className="flex items-center border border-[#D5CCC0] rounded-sm overflow-hidden bg-white">
                  <button
                    onClick={() => setViewMode('4col')}
                    title="4 Columns Grid"
                    className={`p-1.5 cursor-pointer transition-colors ${
                      viewMode === '4col'
                        ? 'bg-[#24201D] text-white'
                        : 'text-[#7A7067] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('3col')}
                    title="3 Columns Grid"
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

            {/* Active Filters Pill Bar (if any) */}
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
                {selectedInstallations.map((inst) => (
                  <span
                    key={inst}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EBE5DA] text-xs text-[#24201D] rounded-full"
                  >
                    {inst}
                    <button
                      onClick={() =>
                        setSelectedInstallations((prev) => prev.filter((t) => t !== inst))
                      }
                      className="cursor-pointer hover:text-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Products Grid */}
            <div
              className={`mt-6 gap-5 ${
                viewMode === '4col'
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
                  : viewMode === '3col'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'flex flex-col gap-4'
              }`}
            >
              {filteredProducts.map((prod) => {
                const activeIndex = activeImageIndices[prod.id] || 0;
                const activeImage = prod.images[activeIndex] || prod.images[0];
                const isItemWishlisted = isWishlisted(prod.id);
                const isCompared = comparedIds.includes(prod.id);
                const isAdded = addedAnimation[prod.id];

                return (
                  <div
                    key={prod.id}
                    onClick={() => handleProductCardClick(prod)}
                    className="group bg-white rounded-xl border border-[#E8E0D5] hover:border-[#C4B7A7] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Top: Main Image Container with Carousel Arrows & Wishlist */}
                    <div>
                      <div className="relative aspect-4/3 w-full bg-[#F5EFE6] overflow-hidden">
                        <img
                          src={activeImage}
                          alt={prod.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                        />

                        {/* Carousel Arrows */}
                        {prod.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => handlePrevImage(prod.id, prod.images.length, e)}
                              title="Previous angle"
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#24201D] shadow-xs flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleNextImage(prod.id, prod.images.length, e)}
                              title="Next angle"
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#24201D] shadow-xs flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {/* Wishlist Heart Icon Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(toCanonicalProduct(prod));
                          }}
                          title={isItemWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
                          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center shadow-xs transition-colors cursor-pointer ${
                            isItemWishlisted
                              ? 'bg-[#982B2B] text-white'
                              : 'bg-white/90 hover:bg-white text-[#24201D]'
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${isItemWishlisted ? 'fill-current' : ''}`}
                          />
                        </button>
                      </div>

                      {/* 4 Thumbnails Strip below main photo */}
                      <div className="grid grid-cols-4 gap-1.5 p-2 bg-[#FAF7F2] border-b border-[#EFE9DF]">
                        {prod.images.slice(0, 4).map((thumb, idx) => (
                          <div
                            key={idx}
                            onClick={(e) => handleSelectThumbnail(prod.id, idx, e)}
                            className={`aspect-4/3 rounded-xs overflow-hidden border transition-all cursor-pointer bg-white ${
                              activeIndex === idx
                                ? 'border-[#24201D] ring-1 ring-[#24201D]'
                                : 'border-[#E2DACF] opacity-75 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={thumb}
                              alt={`${prod.name} thumbnail ${idx + 1}`}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Card Content */}
                      <div className="p-3.5">
                        {/* Model Code & Compare Checkbox */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#24201D] tracking-tight">
                            {prod.code}
                          </span>
                          <label
                            onClick={(e) => handleToggleCompare(prod.id, e)}
                            className="flex items-center gap-1 text-[11px] text-[#7A7067] hover:text-[#24201D] cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={isCompared}
                              onChange={() => {}}
                              className="w-3.5 h-3.5 rounded border-[#C8BEB0] text-[#24201D] focus:ring-0 cursor-pointer accent-[#24201D]"
                            />
                            <span>Compare</span>
                          </label>
                        </div>

                        {/* Product Subtitle / Type */}
                        <div className="text-xs text-[#7A7067] mt-0.5 font-normal">
                          {prod.name}
                        </div>

                        {/* 3 Inline Spec / Feature Badges with Icons */}
                        <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[10.5px] text-[#4A423B]">
                          {prod.features.slice(0, 3).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-1 bg-[#F4EFE6] px-2 py-0.5 rounded-xs"
                            >
                              {renderFeatureIcon(feat.icon)}
                              <span>{feat.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Price & Add to Cart button */}
                    <div className="p-3.5 pt-2 border-t border-[#F2ECE1] flex items-center justify-between gap-2">
                      <div className="text-base font-bold text-[#24201D] tracking-tight">
                        {prod.formattedPrice}
                      </div>

                      <button
                        onClick={(e) => handleAddToCartClick(prod, e)}
                        className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                          isAdded
                            ? 'bg-[#2E5E3D] text-white'
                            : 'bg-[#24201D] hover:bg-[#3D3733] text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <span>Add to Cart</span>
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
