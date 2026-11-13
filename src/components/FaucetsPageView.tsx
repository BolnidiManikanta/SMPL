import React, { useState, useMemo } from 'react';
import {
  Droplets,
  Layers,
  ShieldCheck,
  Settings,
  Gem,
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

export interface FaucetProduct {
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
  moreFinishesCount?: number;
  rating: number;
  reviewsCount: number;
  mountingType: 'Deck Mounted' | 'Wall Mounted' | 'Concealed In-Wall';
  material: 'DZR Solid Brass' | '304 Stainless Steel' | 'Ceramic & Solid Brass';
  description: string;
  features: string[];
  specs: {
    cartridge: string;
    flowRate: string;
    operatingPressure: string;
    spoutReach: string;
  };
}

export const FAUCET_CATEGORIES = [
  {
    id: 'Basin Faucets',
    title: 'Basin Faucets',
    image: '/images/faucets/categories/basin_faucets.webp',
    count: 128,
  },
  {
    id: 'Bath Mixers',
    title: 'Bath Mixers',
    image: '/images/faucets/categories/bath_mixers.webp',
    count: 96,
  },
  {
    id: 'Shower Mixers',
    title: 'Shower Mixers',
    image: '/images/faucets/categories/shower_mixers.webp',
    count: 76,
  },
  {
    id: 'Kitchen Faucets',
    title: 'Kitchen Faucets',
    image: '/images/faucets/categories/kitchen_faucets.webp',
    count: 64,
  },
  {
    id: 'Wall Faucets',
    title: 'Wall Faucets',
    image: '/images/faucets/categories/wall_faucets.webp',
    count: 48,
  },
  {
    id: 'Angle Valves',
    title: 'Angle Valves',
    image: '/images/faucets/categories/angle_valves.webp',
    count: 42,
  },
  {
    id: 'Diverters',
    title: 'Diverters',
    image: '/images/faucets/categories/diverters.webp',
    count: 36,
  },
  {
    id: 'Sensor Faucets',
    title: 'Sensor Faucets',
    image: '/images/faucets/categories/sensor_faucets.webp',
    count: 18,
  },
];

export const FAUCET_PRODUCTS_DATA: FaucetProduct[] = [
  {
    id: 'faucet_bf_101',
    code: 'SMPL BF-101',
    name: 'Single Lever Basin Faucet',
    category: 'Basin Faucets',
    priceINR: 6990,
    formattedPrice: '₹ 6,990',
    image: '/images/faucets/products/smpl_bf_101.webp',
    swatches: [
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 68,
    mountingType: 'Deck Mounted',
    material: 'DZR Solid Brass',
    description:
      'Architectural single-lever deck basin mixer featuring European 35mm ceramic disc cartridge and Neoperl Honeycomb laminar aerator.',
    features: ['35mm Ceramic disc cartridge', 'Neoperl splash-free aerator', 'PVD scratch-proof coating'],
    specs: {
      cartridge: 'Sedal 35mm Ceramic',
      flowRate: '5.7 L/min at 3.0 bar',
      operatingPressure: '1.0 – 5.0 bar',
      spoutReach: '135 mm projection',
    },
  },
  {
    id: 'faucet_bf_102',
    code: 'SMPL BF-102',
    name: 'Tall Basin Mixer',
    category: 'Basin Faucets',
    priceINR: 7890,
    formattedPrice: '₹ 7,890',
    image: '/images/faucets/products/smpl_bf_102.webp',
    swatches: [
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
    ],
    moreFinishesCount: 3,
    rating: 4.9,
    reviewsCount: 54,
    mountingType: 'Deck Mounted',
    material: 'DZR Solid Brass',
    description:
      'Elevated vessel basin mixer designed for countertop vessel basins with extended body height and soft-touch pin lever.',
    features: ['Extended 310mm tower height', 'Optimized vessel basin clearance', 'Ultra-durable electroplated finish'],
    specs: {
      cartridge: 'Kerox 35mm Ceramic',
      flowRate: '6.0 L/min',
      operatingPressure: '1.5 – 5.0 bar',
      spoutReach: '165 mm projection',
    },
  },
  {
    id: 'faucet_wm_201',
    code: 'SMPL WM-201',
    name: 'Wall Mounted Basin Faucet',
    category: 'Wall Faucets',
    priceINR: 8450,
    formattedPrice: '₹ 8,450',
    image: '/images/faucets/products/smpl_wm_201.webp',
    swatches: [
      { name: 'Brushed Nickel', hex: '#9E9A93', code: 'BN' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    rating: 4.8,
    reviewsCount: 32,
    mountingType: 'Wall Mounted',
    material: 'DZR Solid Brass',
    description:
      'Concealed two-hole in-wall basin set with architectural laminar sheet spout and horizontal rotary temperature knob.',
    features: ['Waterfall laminar ribbon stream', 'Concealed in-wall rough-in box', 'Solid machined brass faceplate'],
    specs: {
      cartridge: 'Flühs German ceramic valve',
      flowRate: '7.2 L/min',
      operatingPressure: '1.5 – 5.0 bar',
      spoutReach: '190 mm projection',
    },
  },
  {
    id: 'faucet_bm_301',
    code: 'SMPL BM-301',
    name: 'Bath Mixer with Hand Shower',
    category: 'Bath Mixers',
    priceINR: 14990,
    formattedPrice: '₹ 14,990',
    image: '/images/faucets/products/smpl_bm_301.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 5.0,
    reviewsCount: 41,
    mountingType: 'Wall Mounted',
    material: 'DZR Solid Brass',
    description:
      'Exposed wall-mounted thermostatic bath and shower mixer with automatic bath-to-handshower diverter and parking bracket.',
    features: ['Push-pull automatic locking diverter', '1.5m anti-twist metallic hose', 'High volume tub-filler spout'],
    specs: {
      cartridge: '35mm High-flow ceramic cartridge',
      flowRate: '19 L/min tub spout, 9 L/min wand',
      operatingPressure: '2.0 – 5.0 bar',
      spoutReach: '160 mm projection',
    },
  },
  {
    id: 'faucet_sm_401',
    code: 'SMPL SM-401',
    name: 'Shower Mixer (2-Way)',
    category: 'Shower Mixers',
    priceINR: 12990,
    formattedPrice: '₹ 12,990',
    image: '/images/faucets/products/smpl_sm_401.webp',
    swatches: [
      { name: 'Gunmetal', hex: '#3E4146', code: 'GM' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 37,
    mountingType: 'Concealed In-Wall',
    material: 'DZR Solid Brass',
    description:
      'Clean circular flush-mount 2-way concealed shower mixer with independent upper diverter handle and lower temperature mixer.',
    features: ['Dual outlet shower diverter', 'Minimalist Ø135mm brass backplate', 'Silent ceramic operation'],
    specs: {
      cartridge: '40mm Progressive ceramic cartridge',
      flowRate: '22 L/min combined',
      operatingPressure: '1.5 – 5.0 bar',
      spoutReach: 'Concealed flush wall plate',
    },
  },
  {
    id: 'faucet_kf_501',
    code: 'SMPL KF-501',
    name: 'Pull-Down Kitchen Faucet',
    category: 'Kitchen Faucets',
    priceINR: 11490,
    formattedPrice: '₹ 11,490',
    image: '/images/faucets/products/smpl_kf_501.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 3,
    rating: 4.9,
    reviewsCount: 75,
    mountingType: 'Deck Mounted',
    material: '304 Stainless Steel',
    description:
      'Professional high-arc spring neck sink mixer with dual-function spray head (aerated stream and high-pressure sweep spray).',
    features: ['Magnetic docking spray wand', '360° swivel spout clearance', 'Dual spray push button toggle'],
    specs: {
      cartridge: 'Ceramic disc 35mm',
      flowRate: '8.5 L/min',
      operatingPressure: '1.5 – 5.0 bar',
      spoutReach: '220 mm projection, 450 mm height',
    },
  },
  {
    id: 'faucet_wf_601',
    code: 'SMPL WF-601',
    name: 'Wall Faucet (Long Body)',
    category: 'Wall Faucets',
    priceINR: 2990,
    formattedPrice: '₹ 2,990',
    image: '/images/faucets/products/smpl_wf_601.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 4.8,
    reviewsCount: 28,
    mountingType: 'Wall Mounted',
    material: 'DZR Solid Brass',
    description:
      'Extended reach solid brass bib cock tap engineered for utility sinks, balconies, and powder room applications.',
    features: ['Extended 180mm body projection', 'Half-turn ceramic cartridge', 'Wall escutcheon flange included'],
    specs: {
      cartridge: '1/2" Ceramic turn valve',
      flowRate: '12 L/min',
      operatingPressure: '1.0 – 5.0 bar',
      spoutReach: '180 mm projection',
    },
  },
  {
    id: 'faucet_av_701',
    code: 'SMPL AV-701',
    name: 'Angle Valve (Brass)',
    category: 'Angle Valves',
    priceINR: 1290,
    formattedPrice: '₹ 1,290',
    image: '/images/faucets/products/smpl_av_701.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 84,
    mountingType: 'Wall Mounted',
    material: 'DZR Solid Brass',
    description:
      'Heavy-duty forged brass precision angle valve with cylindrical control knob and quarter-turn ceramic disc shutoff.',
    features: ['Quarter-turn instant shutoff', 'Pre-grooved silicone wall flange', '1/2" × 1/2" BSP thread'],
    specs: {
      cartridge: 'Quarter-turn ceramic headwork',
      flowRate: 'Standard supply flow',
      operatingPressure: 'Up to 10 bar tested',
      spoutReach: '85 mm length',
    },
  },
  {
    id: 'faucet_dv_801',
    code: 'SMPL DV-801',
    name: '3-Way Diverter',
    category: 'Diverters',
    priceINR: 6490,
    formattedPrice: '₹ 6,490',
    image: '/images/faucets/products/smpl_dv_801.webp',
    swatches: [
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 31,
    mountingType: 'Concealed In-Wall',
    material: 'DZR Solid Brass',
    description:
      'Concealed 3-way rotary selector plate designed to distribute water between rain shower, hand shower, and bath spout.',
    features: ['Positive click stop positions', 'Ø110mm brass trim plate', 'Watertight rubber gasket'],
    specs: {
      cartridge: '3-Way ceramic diverter core',
      flowRate: '28 L/min unrestricted',
      operatingPressure: '1.5 – 6.0 bar',
      spoutReach: 'Flush wall trim',
    },
  },
  {
    id: 'faucet_sf_901',
    code: 'SMPL SF-901',
    name: 'Sensor Faucet (Touchless)',
    category: 'Sensor Faucets',
    priceINR: 18990,
    formattedPrice: '₹ 18,990',
    image: '/images/faucets/products/smpl_sf_901.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 5.0,
    reviewsCount: 44,
    mountingType: 'Deck Mounted',
    material: 'DZR Solid Brass',
    description:
      'Commercial-grade hygienic infrared sensor tap with dual AC/DC power pack, self-calibrating detection zone, and auto shut-off.',
    features: ['Contactless infrared activation', '60-second safety cutoff', 'Integrated temperature mixing knob'],
    specs: {
      cartridge: 'Latching solenoid valve',
      flowRate: '4.8 L/min Eco-flow',
      operatingPressure: '1.0 – 5.0 bar',
      spoutReach: '140 mm projection',
    },
  },
  {
    id: 'faucet_bf_103',
    code: 'SMPL BF-103',
    name: 'Pillar Cock',
    category: 'Basin Faucets',
    priceINR: 2490,
    formattedPrice: '₹ 2,490',
    image: '/images/faucets/products/smpl_bf_103.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 4.8,
    reviewsCount: 38,
    mountingType: 'Deck Mounted',
    material: 'DZR Solid Brass',
    description:
      'Timeless single cold water basin tap with high-neck swan spout, quarter-turn smooth ceramic disc valve, and threaded brass locknut.',
    features: ['High-neck clearance for washing', 'Quarter-turn ceramic disc', 'Solid forged brass shank'],
    specs: {
      cartridge: 'Quarter-turn ceramic head',
      flowRate: '6.5 L/min',
      operatingPressure: '0.8 – 5.0 bar',
      spoutReach: '125 mm projection',
    },
  },
  {
    id: 'faucet_kf_502',
    code: 'SMPL KF-502',
    name: 'Sink Mixer (Wall Mounted)',
    category: 'Kitchen Faucets',
    priceINR: 6990,
    formattedPrice: '₹ 6,990',
    image: '/images/faucets/products/smpl_kf_502.webp',
    swatches: [
      { name: 'Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 26,
    mountingType: 'Wall Mounted',
    material: 'DZR Solid Brass',
    description:
      'Wall-mounted kitchen sink mixer with 360° swivel cast brass spout, dual adjustable S-connections, and ergonomic single lever control.',
    features: ['Wall-mounted sink space saving', '360° swivel spout radius', 'Adjustable 150mm center unions'],
    specs: {
      cartridge: '35mm Ceramic mixer cartridge',
      flowRate: '9.0 L/min',
      operatingPressure: '1.5 – 5.0 bar',
      spoutReach: '235 mm projection',
    },
  },
];

interface FaucetsPageViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onGoHome: () => void;
  onOpenConsultation?: () => void;
}

export const FaucetsPageView: React.FC<FaucetsPageViewProps> = ({
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
  const [selectedMountingTypes, setSelectedMountingTypes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  // Selected Swatch for each card
  const [activeSwatches, setActiveSwatches] = useState<Record<string, string>>({});

  // Accordion toggle states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    productType: true,
    finish: false,
    mounting: false,
    material: false,
    priceRange: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // View mode: '6col' | '3col' | 'list'
  const [viewMode, setViewMode] = useState<'6col' | '3col' | 'list'>('6col');

  // Sorting
  const [sortBy, setSortBy] = useState<string>('featured');

  // Add-to-cart temporary animation state
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const handleClearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedProductTypes([]);
    setSelectedFinishes([]);
    setSelectedMountingTypes([]);
    setSelectedMaterials([]);
    setSelectedPriceRanges([]);
  };

  const handleSelectSwatch = (productId: string, finishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSwatches((prev) => ({ ...prev, [productId]: finishName }));
  };

  const toCanonicalProduct = (item: FaucetProduct, finishName?: string): Product => {
    const chosenFinish = finishName || activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    return {
      id: item.id,
      modelNumber: item.code,
      name: item.name,
      department: 'Faucets',
      category: item.category,
      subcategory: item.name,
      collection: 'Contemporary',
      space: 'Master Bathroom',
      price: Math.round(item.priceINR / 83),
      image: item.image,
      galleryImages: [item.image, '/images/faucets/hero_faucet_banner.webp'],
      lifestyleImage: '/images/faucets/hero_faucet_banner.webp',
      rating: item.rating,
      reviewCount: item.reviewsCount,
      finishes: item.swatches.map((s) => ({ name: s.name, hex: s.hex, code: s.code })),
      specs: {
        dimensions: item.specs.spoutReach,
        material: item.material,
        flowRate: item.specs.flowRate,
        mountingType: item.mountingType,
        cartridge: item.specs.cartridge,
        operatingPressure: item.specs.operatingPressure,
      },
      description: item.description,
      features: item.features,
      whatsInTheBox: {
        included: [
          'Faucet Body',
          'Hot & Cold Stainless Braided Hoses',
          'Brass Fixing Kit & Base O-Ring',
          'Installation Guide',
        ],
      },
      installationGuide: 'Standard deck / wall installation. Flush water lines prior to cartridge connection.',
      inStock: true,
      leadTimeDays: 2,
    };
  };

  const handleAddToCartClick = (item: FaucetProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onAddToCart(prod, chosenFinish);
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const handleProductCardClick = (item: FaucetProduct) => {
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onSelectProduct(prod);
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return FAUCET_PRODUCTS_DATA.filter((p) => {
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
      if (selectedMountingTypes.length > 0 && !selectedMountingTypes.includes(p.mountingType)) {
        return false;
      }
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
        return false;
      }
      if (selectedPriceRanges.length > 0) {
        const matches = selectedPriceRanges.some((range) => {
          if (range === 'under5k') return p.priceINR < 5000;
          if (range === '5k-10k') return p.priceINR >= 5000 && p.priceINR <= 10000;
          if (range === '10k-20k') return p.priceINR >= 10000 && p.priceINR <= 20000;
          if (range === 'above20k') return p.priceINR > 20000;
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
  }, [
    selectedCategory,
    selectedProductTypes,
    selectedFinishes,
    selectedMountingTypes,
    selectedMaterials,
    selectedPriceRanges,
    sortBy,
  ]);

  const isAnyFilterActive =
    selectedCategory !== null ||
    selectedProductTypes.length > 0 ||
    selectedFinishes.length > 0 ||
    selectedMountingTypes.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedPriceRanges.length > 0;

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#2C2825] font-sans">
      {/* 1. Hero Banner: Exactly matching reference image */}
      <section className="w-full bg-[#FAF7F2] border-b border-[#E8E0D5]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#E8E0D5] bg-[#EAE3D6] min-h-[380px] md:min-h-[440px] flex items-center shadow-xs">
            {/* Background Image: Architectural travertine bathroom with round marble basin, glowing halo mirror & gold faucet */}
            <img
              src="/images/faucets/hero_faucet_banner.webp"
              alt="Faucets Collection"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            />

            {/* Left Warm Diffused Gradient to maintain high contrast for typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F3]/95 via-[#FBF8F3]/80 to-transparent pointer-events-none" />

            {/* Hero Left Content */}
            <div className="relative z-10 max-w-xl p-6 sm:p-10 md:p-12">
              <span className="block text-[11px] uppercase tracking-[0.25em] text-[#7A7065] font-semibold mb-3">
                FAUCETS COLLECTION
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24201D] tracking-tight leading-[1.12]">
                Premium Faucets
                <br />
                for Modern Spaces
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#574F46] leading-relaxed max-w-md">
                A versatile range of faucets engineered for performance, durability and timeless
                design.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('faucet-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-[#24201D] hover:bg-[#3D3733] text-white text-xs font-semibold rounded-md transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Faucets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('faucet-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white/80 hover:bg-white text-[#24201D] border border-[#C5BBAE] text-xs font-semibold rounded-md transition-all shadow-2xs cursor-pointer"
                >
                  Find by Space
                </button>
              </div>
            </div>
          </div>

          {/* 5 Value Pillars Bar directly underneath the hero */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-[#EAE3D6]">
            {/* Pillar 1 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Water Efficient</div>
                <div className="text-[11px] text-[#786F64]">Optimized Flow</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Multiple Finishes</div>
                <div className="text-[11px] text-[#786F64]">Chrome, Matte Black, Brushed Gold &amp; More</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Durable &amp; Long Lasting</div>
                <div className="text-[11px] text-[#786F64]">Corrosion &amp; Rust Resistant</div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Smooth Operation</div>
                <div className="text-[11px] text-[#786F64]">Precision Cartridge</div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#24201D]">
                <Gem className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Modern Designs</div>
                <div className="text-[11px] text-[#786F64]">For Homes &amp; Commercial Spaces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Faucet Type Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-serif text-[#24201D] font-medium tracking-tight">
            Shop by Faucet Type
          </h2>
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-xs font-semibold text-[#24201D] hover:text-[#6F4E37] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Faucet Types</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 8 Category Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
          {FAUCET_CATEGORIES.map((cat) => {
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
                  loading="lazy"
                  decoding="async"
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
      <section id="faucet-catalog" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
                    { id: 'Basin Faucets', label: 'Basin Faucets', count: 128 },
                    { id: 'Bath Mixers', label: 'Bath Mixers', count: 96 },
                    { id: 'Shower Mixers', label: 'Shower Mixers', count: 76 },
                    { id: 'Kitchen Faucets', label: 'Kitchen Faucets', count: 64 },
                    { id: 'Wall Faucets', label: 'Wall Faucets', count: 48 },
                    { id: 'Angle Valves', label: 'Angle Valves', count: 42 },
                    { id: 'Diverters', label: 'Diverters', count: 36 },
                    { id: 'Sensor Faucets', label: 'Sensor Faucets', count: 18 },
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

            {/* Accordion 2: Finish / Color */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('finish')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Finish / Color</span>
                {openAccordions.finish ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.finish && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Brushed Brass', label: 'Brushed Gold / Brass', hex: '#CBA167' },
                    { id: 'Matte Black', label: 'Matte Black', hex: '#1D1D1B' },
                    { id: 'Chrome', label: 'Chrome', hex: '#D8D8D8' },
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

            {/* Accordion 3: Mounting Type */}
            <div className="py-4 border-b border-[#EFE9DF]">
              <button
                onClick={() => toggleAccordion('mounting')}
                className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] uppercase tracking-wider cursor-pointer"
              >
                <span>Mounting Type</span>
                {openAccordions.mounting ? (
                  <ChevronUp className="w-4 h-4 text-[#786F64]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#786F64]" />
                )}
              </button>

              {openAccordions.mounting && (
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: 'Deck Mounted', label: 'Deck Mounted', count: 180 },
                    { id: 'Wall Mounted', label: 'Wall Mounted', count: 140 },
                    { id: 'Concealed In-Wall', label: 'Concealed In-Wall', count: 76 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedMountingTypes.includes(item.id)}
                          onChange={() => {
                            setSelectedMountingTypes((prev) =>
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
                    { id: 'DZR Solid Brass', label: 'Solid DZR Brass', count: 210 },
                    { id: '304 Stainless Steel', label: '304 Stainless Steel', count: 85 },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center justify-between text-xs text-[#4F463E] hover:text-[#24201D] cursor-pointer"
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

            {/* Accordion 5: Price Range */}
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
                    { id: 'under5k', label: 'Under ₹ 5,000' },
                    { id: '5k-10k', label: '₹ 5,000 – ₹ 10,000' },
                    { id: '10k-20k', label: '₹ 10,000 – ₹ 20,000' },
                    { id: 'above20k', label: 'Above ₹ 20,000' },
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

          {/* Right Column: Products Grid (6 Columns Layout exactly as in Screenshot) */}
          <main className="lg:col-span-9 xl:col-span-10">
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E8E0D5]">
              {/* Product Count matching reference: Showing 1 - 24 of 624 Faucets */}
              <div className="text-sm text-[#4A423B]">
                Showing{' '}
                <span className="font-semibold text-[#24201D]">
                  1 – {filteredProducts.length}
                </span>{' '}
                of <span className="font-semibold text-[#24201D]">624</span> Faucets
              </div>

              {/* Sort By & View Mode */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#7A7067]">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort faucet products"
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
                    title="Compact 6-Col Grid"
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

            {/* 6-Column Product Grid with 12 Cards matching screenshot */}
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
                          loading="lazy"
                          decoding="async"
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
                        {/* Swatches Row with +2 or +3 badge */}
                        <div className="flex items-center gap-1.5 mb-2">
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
                          {prod.moreFinishesCount && (
                            <span className="text-[10px] text-[#8C8176] font-medium ml-0.5">
                              +{prod.moreFinishesCount}
                            </span>
                          )}
                        </div>

                        {/* Model Code */}
                        <div className="font-bold text-xs text-[#24201D] tracking-tight">
                          {prod.code}
                        </div>

                        {/* Name / Subtitle */}
                        <div className="text-[11px] text-[#7A7067] mt-0.5 line-clamp-1 leading-snug">
                          {prod.name}
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
