import React, { useState, useMemo } from 'react';
import {
  Droplets,
  Layers,
  ShieldCheck,
  Settings,
  Leaf,
  Heart,
  ShoppingCart,
  Check,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Grid,
  List,
  ArrowRight,
  SlidersHorizontal,
  X,
  Sparkles,
  Bath,
} from 'lucide-react';
import { Product } from '../types';

interface BathroomPageViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  onGoHome: () => void;
  onOpenConsultation: () => void;
}

export interface BathroomCategoryItem {
  id: string;
  name: string;
  filterTag: string;
  count: number;
  image: string;
}

export interface BathroomProduct {
  id: string;
  code: string;
  name: string;
  category: string;
  priceINR: number;
  formattedPrice: string;
  image: string;
  swatches: { name: string; hex: string; code: string }[];
  moreFinishesCount?: number;
  rating: number;
  reviewsCount: number;
  installationType: string;
  material: string;
  dimensionSize: 'Compact' | 'Medium' | 'Large';
  description: string;
  features: string[];
  specs: {
    dimensions: string;
    material: string;
    installationType: string;
    flowOrCapacity?: string;
    finishAvailable: string;
  };
}

export const BATHROOM_CATEGORIES: BathroomCategoryItem[] = [
  {
    id: 'cat_toilets',
    name: 'Toilets (WCs)',
    filterTag: 'Toilets',
    count: 128,
    image: '/images/bathroom/categories/toilets.webp',
  },
  {
    id: 'cat_basins',
    name: 'Wash Basins',
    filterTag: 'Wash Basins',
    count: 96,
    image: '/images/bathroom/categories/wash_basins.webp',
  },
  {
    id: 'cat_vanities',
    name: 'Vanities & Units',
    filterTag: 'Vanities',
    count: 54,
    image: '/images/bathroom/categories/vanities.webp',
  },
  {
    id: 'cat_bathtubs',
    name: 'Bathtubs',
    filterTag: 'Bathtubs',
    count: 28,
    image: '/images/bathroom/categories/bathtubs.webp',
  },
  {
    id: 'cat_shower_enclosures',
    name: 'Shower Enclosures',
    filterTag: 'Shower Enclosures',
    count: 42,
    image: '/images/bathroom/categories/shower_enclosures.webp',
  },
  {
    id: 'cat_showers',
    name: 'Showers',
    filterTag: 'Showers',
    count: 76,
    image: '/images/bathroom/categories/showers.webp',
  },
  {
    id: 'cat_accessories',
    name: 'Bathroom Accessories',
    filterTag: 'Accessories',
    count: 118,
    image: '/images/bathroom/categories/accessories.webp',
  },
  {
    id: 'cat_drains',
    name: 'Drains & Channels',
    filterTag: 'Drains & Channels',
    count: 32,
    image: '/images/bathroom/categories/drains.webp',
  },
];

export const BATHROOM_PRODUCTS_DATA: BathroomProduct[] = [
  // Row 1
  {
    id: 'smpl_wc_101',
    code: 'SMPL WC-101',
    name: 'One-Piece Water Closet',
    category: 'Toilets',
    priceINR: 34900,
    formattedPrice: '₹ 34,900',
    image: '/images/bathroom/products/smpl_wc_101.webp',
    swatches: [
      { name: 'Pure Alpine White', hex: '#FFFFFF', code: 'WH' },
      { name: 'Matte Charcoal Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 2,
    rating: 4.9,
    reviewsCount: 88,
    installationType: 'Floor Standing / Deck',
    material: 'Vitreous Ceramic',
    dimensionSize: 'Medium',
    description:
      'Architectural one-piece elongated water closet engineered with silent cyclone rimless flushing and antibacterial glaze.',
    features: ['360° Cyclone Rimless Flush', 'Soft-Close Quick Release UF Seat', 'Nano Self-Cleaning Anti-Stain Glaze'],
    specs: {
      dimensions: '680 x 380 x 760 mm',
      material: 'Grade-A Vitreous China',
      installationType: 'Floor Mounted (300mm S-Trap)',
      flowOrCapacity: 'Dual Flush 3.5L / 5.0L',
      finishAvailable: 'Alpine White, Matte Black, Travertine Bone',
    },
  },
  {
    id: 'smpl_wb_205',
    code: 'SMPL WB-205',
    name: 'Countertop Wash Basin',
    category: 'Wash Basins',
    priceINR: 8900,
    formattedPrice: '₹ 8,900',
    image: '/images/bathroom/products/smpl_wb_205.webp',
    swatches: [
      { name: 'Pure Alpine White', hex: '#FFFFFF', code: 'WH' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Gold Rim', hex: '#CBA167', code: 'BG' },
    ],
    moreFinishesCount: 3,
    rating: 4.9,
    reviewsCount: 112,
    installationType: 'Floor Standing / Deck',
    material: 'Vitreous Ceramic',
    dimensionSize: 'Medium',
    description:
      'Sculptural thin-edge countertop oval basin fired at 1280°C for superior density, stain resistance, and silky surface touch.',
    features: ['5mm Ultra-Slim Edge Profile', 'Hydrophobic Lotus-Effect Glaze', 'Universal Center Waste Compatibility'],
    specs: {
      dimensions: '600 x 400 x 140 mm',
      material: 'High-Density Fine Fireclay',
      installationType: 'Countertop / Vanity Vessel',
      flowOrCapacity: '12L Capacity with Overflow Safe',
      finishAvailable: 'Alpine White, Matte Charcoal, Brushed Gold Accent',
    },
  },
  {
    id: 'smpl_van_401',
    code: 'SMPL VAN-401',
    name: 'Wall Mounted Vanity Unit (900 mm)',
    category: 'Vanities',
    priceINR: 42000,
    formattedPrice: '₹ 42,000',
    image: '/images/bathroom/products/smpl_van_401.webp',
    swatches: [
      { name: 'Matte Shadow Grey', hex: '#8E8D8A', code: 'SG' },
      { name: 'Midnight Charcoal', hex: '#1D1D1B', code: 'MC' },
    ],
    moreFinishesCount: 0,
    rating: 4.8,
    reviewsCount: 46,
    installationType: 'Wall Mounted',
    material: 'Stone Resin Composite',
    dimensionSize: 'Medium',
    description:
      'Floating architectural vanity console with dual handleless Blum soft-close push drawers and integrated seamless basin counter.',
    features: ['100% Waterproof Marine Plywood', 'Blum Tandembox German Runners', 'Integrated Solid Surface Basin Top'],
    specs: {
      dimensions: '900 x 480 x 450 mm',
      material: 'Moisture-Proof Lacquered Board & Composite',
      installationType: 'Wall-Hung Heavy Duty Brackets',
      flowOrCapacity: 'Dual Deep Drawer Storage (45kg capacity)',
      finishAvailable: 'Shadow Grey, Midnight Charcoal, Walnut Ash',
    },
  },
  {
    id: 'smpl_bt_301',
    code: 'SMPL BT-301',
    name: 'Freestanding Bathtub (1700 mm)',
    category: 'Bathtubs',
    priceINR: 124900,
    formattedPrice: '₹ 1,24,900',
    image: '/images/bathroom/products/smpl_bt_301.webp',
    swatches: [
      { name: 'Pure Alpine White', hex: '#FFFFFF', code: 'WH' },
      { name: 'Matte Charcoal Black Exterior', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 5.0,
    reviewsCount: 39,
    installationType: 'Freestanding',
    material: 'Stone Resin Composite',
    dimensionSize: 'Large',
    description:
      'Monolithic freestanding soaking bath crafted from mineral stone composite with natural thermal insulation and velvety tactile warmth.',
    features: ['Continuous Heat-Retaining Stone Resin', 'Deep Ergonomic Dual-Slope Soak', 'Integrated Slotted Chrome Overflow'],
    specs: {
      dimensions: '1700 x 800 x 580 mm',
      material: 'Solid Surface Stone Composite (110kg)',
      installationType: 'Freestanding Center Floor',
      flowOrCapacity: '320 Litres Soaking Volume',
      finishAvailable: 'Pure Alpine White, Matte Black Two-Tone',
    },
  },
  {
    id: 'smpl_se_201',
    code: 'SMPL SE-201',
    name: 'Shower Enclosure (1200 x 900 mm)',
    category: 'Shower Enclosures',
    priceINR: 56900,
    formattedPrice: '₹ 56,900',
    image: '/images/bathroom/products/smpl_se_201.webp',
    swatches: [
      { name: 'Matte Black Anodized', hex: '#1D1D1B', code: 'MB' },
      { name: 'Brushed Brass PVD', hex: '#CBA167', code: 'BB' },
    ],
    moreFinishesCount: 0,
    rating: 4.9,
    reviewsCount: 52,
    installationType: 'Floor Standing / Deck',
    material: 'Toughened Glass',
    dimensionSize: 'Large',
    description:
      'Architectural minimalist walk-in enclosure with 8mm nano-coated safety glass and concealed magnetic roller guide mechanism.',
    features: ['8mm EN-12150 Tempered Safety Glass', 'EnduroShield Hydrophobic Limescale Barrier', 'Concealed Heavy-Duty Stainless Rollers'],
    specs: {
      dimensions: '1200 x 900 x 2000 mm',
      material: '8mm Tempered Glass & Anodized Aluminum',
      installationType: 'Corner Recessed / Low-Profile Tray',
      flowOrCapacity: 'Universal Left/Right Hand Opening',
      finishAvailable: 'Matte Black, Brushed Brass, Polished Chrome',
    },
  },
  {
    id: 'smpl_sh_401',
    code: 'SMPL SH-401',
    name: 'Thermostatic Shower System',
    category: 'Showers',
    priceINR: 28500,
    formattedPrice: '₹ 28,500',
    image: '/images/bathroom/products/smpl_sh_401.webp',
    swatches: [
      { name: 'Polished Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.9,
    reviewsCount: 94,
    installationType: 'Wall Mounted',
    material: 'Solid Brass',
    dimensionSize: 'Medium',
    description:
      'Exposed architectural column shower system with 38°C safety thermostatic mixer, 300mm ultra-thin rain head, and micro wand.',
    features: ['Vernet 38°C Safety Core', '300mm Slim Stainless Rainfall Head', 'Integrated Push-Diverter Control'],
    specs: {
      dimensions: '300mm Shower Head | 1100mm Riser Height',
      material: 'DZR Solid Brass & SUS 304',
      installationType: 'Exposed Wall Mounted (150mm centers)',
      flowOrCapacity: '11.8 L/min Air-Injected Rainfall',
      finishAvailable: 'Chrome, Matte Black, Brushed Gold',
    },
  },

  // Row 2
  {
    id: 'smpl_bf_301',
    code: 'SMPL BF-301',
    name: 'Wall Mounted Basin Mixer',
    category: 'Wash Basins',
    priceINR: 7990,
    formattedPrice: '₹ 7,990',
    image: '/images/bathroom/products/smpl_bf_301.webp',
    swatches: [
      { name: 'Brushed Gold', hex: '#CBA167', code: 'BG' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
      { name: 'Polished Chrome', hex: '#D8D8D8', code: 'CR' },
    ],
    moreFinishesCount: 0,
    rating: 4.8,
    reviewsCount: 71,
    installationType: 'Concealed / In-Wall',
    material: 'Solid Brass',
    dimensionSize: 'Compact',
    description:
      'Concealed two-hole architectural wall basin mixer with smooth pin lever handle and Neoperl splash-free flow regulator.',
    features: ['Concealed Pre-Wall In-Wall Rough-In Box', 'Sedal 35mm Ceramic Disc Cartridge', 'Multi-Layer Physical Vapor Deposition'],
    specs: {
      dimensions: '200mm Spout Projection',
      material: 'Solid Architectural Brass',
      installationType: 'Concealed In-Wall Rough-In',
      flowOrCapacity: '5.5 L/min Aerated Water Stream',
      finishAvailable: 'Brushed Gold, Matte Black, Polished Chrome',
    },
  },
  {
    id: 'smpl_hs_102',
    code: 'SMPL HS-102',
    name: 'Hand Shower (3 Function)',
    category: 'Showers',
    priceINR: 4290,
    formattedPrice: '₹ 4,290',
    image: '/images/bathroom/products/smpl_hs_102.webp',
    swatches: [
      { name: 'Polished Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.7,
    reviewsCount: 63,
    installationType: 'Wall Mounted',
    material: 'Solid Brass',
    dimensionSize: 'Compact',
    description:
      'Tri-mode ergonomic handset offering concentrated massage jets, soft champagne spray, and drenching rain pulses.',
    features: ['3 Spray Modes with Click Toggle', 'Easy-Clean Silicone Anti-Limescale Rub Nozzles', '1.5m Anti-Kink Flexible Metal Hose'],
    specs: {
      dimensions: '120mm Faceplate Diameter',
      material: 'Engineering Grade ABS & Brass Bushing',
      installationType: 'Wall Bracket / Outlet Elbow',
      flowOrCapacity: '7.2 L/min Optimized Conservation Flow',
      finishAvailable: 'Polished Chrome, Matte Black',
    },
  },
  {
    id: 'smpl_acc_201',
    code: 'SMPL ACC-201',
    name: 'Towel Rack with Shelf',
    category: 'Accessories',
    priceINR: 3490,
    formattedPrice: '₹ 3,490',
    image: '/images/bathroom/products/smpl_acc_201.webp',
    swatches: [
      { name: 'Polished Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.8,
    reviewsCount: 42,
    installationType: 'Wall Mounted',
    material: 'SUS 304 Stainless Steel',
    dimensionSize: 'Medium',
    description:
      'Dual-tier architectural towel rail engineered with an upper folding storage rack and lower hanging towel bar.',
    features: ['SUS 304 Solid Stainless Steel', 'Concealed Precision Screw Mounting', 'Zero-Rust Anti-Corrosion Treatment'],
    specs: {
      dimensions: '600 x 220 x 140 mm',
      material: '304 Heavy Gauge Stainless Steel',
      installationType: 'Wall Mounted with Heavy Expansion Bolts',
      flowOrCapacity: 'Tested to 25kg Load Capacity',
      finishAvailable: 'Polished Chrome, Matte Black, Brushed Gold',
    },
  },
  {
    id: 'smpl_acc_305',
    code: 'SMPL ACC-305',
    name: 'Soap Dispenser (Wall Mounted)',
    category: 'Accessories',
    priceINR: 1990,
    formattedPrice: '₹ 1,990',
    image: '/images/bathroom/products/smpl_acc_305.webp',
    swatches: [
      { name: 'Polished Chrome', hex: '#D8D8D8', code: 'CR' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.8,
    reviewsCount: 51,
    installationType: 'Wall Mounted',
    material: 'SUS 304 Stainless Steel',
    dimensionSize: 'Compact',
    description:
      'Frosted artisan glass soap pump vessel with solid brass bracket and smooth anti-drip precision dispenser nozzle.',
    features: ['Frosted Acid-Etched Glass Container', 'Heavy-Duty Anti-Drip Brass Pump', 'Removable Bottle for Easy Refilling'],
    specs: {
      dimensions: '160 x 85 x 120 mm',
      material: 'SUS 304 Brass Bracket & Frosted Glass',
      installationType: 'Concealed Screw Wall Mount',
      flowOrCapacity: '250ml Liquid Reservoir',
      finishAvailable: 'Polished Chrome, Matte Black',
    },
  },
  {
    id: 'smpl_dr_101',
    code: 'SMPL DR-101',
    name: 'Floor Drain (150 mm)',
    category: 'Drains & Channels',
    priceINR: 1290,
    formattedPrice: '₹ 1,290',
    image: '/images/bathroom/products/smpl_dr_101.webp',
    swatches: [
      { name: 'Polished Stainless Steel', hex: '#D8D8D8', code: 'SS' },
      { name: 'Matte Black', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.9,
    reviewsCount: 78,
    installationType: 'Floor Standing / Deck',
    material: 'SUS 304 Stainless Steel',
    dimensionSize: 'Compact',
    description:
      'Laser-cut architectural linear slotted floor drain with gravity magnetic seal anti-cockroach and anti-odor dry trap.',
    features: ['Magnetic Gravitational Odor Seal Trap', 'High-Discharge Removable Hair Basket', 'Heavy 2mm Thickness SUS 304 Plate'],
    specs: {
      dimensions: '150 x 150 mm Square Face',
      material: 'AISI 304 Stainless Steel',
      installationType: 'In-Floor Screed Mortar Bed',
      flowOrCapacity: 'High Discharge 45 L/min',
      finishAvailable: 'Brushed Steel, Matte Black',
    },
  },
  {
    id: 'smpl_cc_201',
    code: 'SMPL CC-201',
    name: 'Concealed Cistern (Dual Flush)',
    category: 'Toilets',
    priceINR: 12900,
    formattedPrice: '₹ 12,900',
    image: '/images/bathroom/products/smpl_cc_201.webp',
    swatches: [
      { name: 'Alpine White Flush Plate', hex: '#FFFFFF', code: 'WH' },
      { name: 'Matte Black Flush Plate', hex: '#1D1D1B', code: 'MB' },
    ],
    moreFinishesCount: 0,
    rating: 4.9,
    reviewsCount: 65,
    installationType: 'Concealed / In-Wall',
    material: 'SUS 304 Stainless Steel',
    dimensionSize: 'Medium',
    description:
      'Heavy structural steel frame concealed cistern with pneumatic silent fill valve, anti-condensation shell, and dual-flush actuator.',
    features: ['400kg Load Tested Rigid Frame', 'Acoustic Soundproofing Foam Shell', 'Tool-Free Front Maintenance Access'],
    specs: {
      dimensions: '500 x 1120 x 120 mm Slim Profile',
      material: 'Powder-Coated Tubular Steel & HDPE Cistern',
      installationType: 'In-Wall Drywall / Stud Framing',
      flowOrCapacity: 'Dual Flush 3.0L / 6.0L (Adjustable)',
      finishAvailable: 'White, Matte Black, Brushed Gold Plates',
    },
  },
];

export const BathroomPageView: React.FC<BathroomPageViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onGoHome,
  onOpenConsultation,
}) => {
  // Selected category filter (from 8 cards)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Sidebar filters
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedInstallationTypes, setSelectedInstallationTypes] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedDimensionSizes, setSelectedDimensionSizes] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  // Accordion collapsed state for sidebar
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    productType: true,
    installationType: false,
    finishColor: false,
    material: false,
    sizeDimension: false,
    priceRange: false,
  });

  // Sort & layout view
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [gridColumns, setGridColumns] = useState<6 | 4 | 1>(6);

  // Active swatches selected per product
  const [activeSwatches, setActiveSwatches] = useState<{ [prodId: string]: string }>({});

  // Mobile filters drawer
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Added-to-cart temporary badge feedback
  const [addedAnimation, setAddedAnimation] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (section: string) => {
    setOpenAccordions((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedProductTypes([]);
    setSelectedInstallationTypes([]);
    setSelectedFinishes([]);
    setSelectedMaterials([]);
    setSelectedDimensionSizes([]);
    setSelectedPriceRanges([]);
  };

  const handleProductTypeToggle = (type: string) => {
    setSelectedProductTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleInstallationTypeToggle = (type: string) => {
    setSelectedInstallationTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleFinishToggle = (finish: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish) ? prev.filter((f) => f !== finish) : [...prev, finish]
    );
  };

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    );
  };

  const handleDimensionSizeToggle = (size: string) => {
    setSelectedDimensionSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handlePriceRangeToggle = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  // Convert BathroomProduct to App Canonical Product
  const toCanonicalProduct = (item: BathroomProduct, chosenFinish: string): Product => {
    return {
      id: item.id,
      modelNumber: item.code,
      name: `${item.code} ${item.name}`,
      department: 'Bathroom',
      category: item.category,
      subcategory: item.name,
      collection: 'Contemporary',
      space: 'Master Bathroom',
      price: Math.round(item.priceINR / 83),
      image: item.image,
      galleryImages: [item.image, '/images/bathroom/hero_bathroom_banner.webp'],
      lifestyleImage: '/images/bathroom/hero_bathroom_banner.webp',
      rating: item.rating,
      reviewCount: item.reviewsCount,
      finishes: item.swatches.map((s) => ({ name: s.name, hex: s.hex, code: s.code })),
      specs: {
        dimensions: item.specs.dimensions,
        material: item.specs.material,
        flowRate: item.specs.flowOrCapacity || 'Certified Flow',
        mountingType: item.specs.installationType,
        cartridge: 'European High-Performance Core',
        operatingPressure: '1.0 – 5.0 bar',
      },
      description: item.description,
      features: item.features,
      whatsInTheBox: {
        included: [
          'Main Fixture / Body',
          'Mounting Hardware & Concealed Fasteners',
          'Acoustic Gasket / Sealing Rings',
          'Architectural Installation Guide',
        ],
      },
      installationGuide: 'Standard plumbed architectural installation. Certified master plumber recommended.',
      inStock: true,
      leadTimeDays: 2,
    };
  };

  const handleAddToCartClick = (item: BathroomProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onAddToCart(prod, chosenFinish);
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const handleProductCardClick = (item: BathroomProduct) => {
    const chosenFinish = activeSwatches[item.id] || item.swatches[0]?.name || 'Standard';
    const prod = toCanonicalProduct(item, chosenFinish);
    onSelectProduct(prod);
  };

  // Filtered and sorted products list
  const filteredProducts = useMemo(() => {
    return BATHROOM_PRODUCTS_DATA.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) {
        return false;
      }
      if (selectedProductTypes.length > 0 && !selectedProductTypes.includes(p.category)) {
        return false;
      }
      if (selectedInstallationTypes.length > 0 && !selectedInstallationTypes.includes(p.installationType)) {
        return false;
      }
      if (selectedFinishes.length > 0) {
        const hasFinish = p.swatches.some((s) =>
          selectedFinishes.some((sf) => s.name.toLowerCase().includes(sf.toLowerCase()))
        );
        if (!hasFinish) return false;
      }
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
        return false;
      }
      if (selectedDimensionSizes.length > 0 && !selectedDimensionSizes.includes(p.dimensionSize)) {
        return false;
      }
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some((range) => {
          if (range === 'Under ₹5,000') return p.priceINR < 5000;
          if (range === '₹5,000 – ₹15,000') return p.priceINR >= 5000 && p.priceINR <= 15000;
          if (range === '₹15,000 – ₹50,000') return p.priceINR > 15000 && p.priceINR <= 50000;
          if (range === 'Above ₹50,000') return p.priceINR > 50000;
          return true;
        });
        if (!matchesPrice) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
      if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [
    selectedCategory,
    selectedProductTypes,
    selectedInstallationTypes,
    selectedFinishes,
    selectedMaterials,
    selectedDimensionSizes,
    selectedPriceRanges,
    sortBy,
  ]);

  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    selectedProductTypes.length +
    selectedInstallationTypes.length +
    selectedFinishes.length +
    selectedMaterials.length +
    selectedDimensionSizes.length +
    selectedPriceRanges.length;

  return (
    <div className="bg-[#FAF7F2] text-[#24201D] min-h-screen">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-8">
        {/* ========================================================= */}
        {/* 1. HERO BANNER: Complete Bathroom Solutions               */}
        {/* ========================================================= */}
        <section className="relative rounded-lg overflow-hidden border border-[#E5DDD0] shadow-sm bg-[#F5EFE6]">
          {/* Background image & gradient overlay */}
          <div className="relative min-h-[250px] sm:min-h-[280px] md:min-h-[300px] w-full flex items-center">
            {/* Background Image */}
            <img
              src="/images/bathroom/hero_bathroom_banner.webp"
              alt="Complete Bathroom Solutions Suite"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
            />

            {/* Seamless Soft Left Gradient to preserve typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6] via-[#F5EFE6]/90 to-transparent w-full md:w-[65%]" />

            {/* Content Container */}
            <div className="relative z-10 px-6 sm:px-10 md:px-12 py-8 sm:py-10 max-w-xl">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#786C5E] block">
                BATHROOM COLLECTION
              </span>
              <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#24201D] tracking-tight leading-[1.18]">
                Complete Bathroom <br className="hidden sm:inline" />
                Solutions
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-[#5C5348] leading-relaxed max-w-md">
                A curated range of bathware, showers, faucets, vanities and accessories to create a modern,
                functional and elegant bathroom.
              </p>

              {/* 2 CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('bathroom-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#2E2722] hover:bg-[#433B34] text-white text-xs font-semibold rounded-md transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-[#2E2722] border border-[#C5BBAE] text-xs font-semibold rounded-md transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <Bath className="w-4 h-4 text-[#786C5E]" />
                  <span>Design Your Bathroom</span>
                </button>
              </div>
            </div>
          </div>

          {/* 5 Value Pillars Bar directly underneath the hero */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-[#EAE3D6] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#2E2722] shrink-0">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Complete Range</div>
                <div className="text-[11px] text-[#786F64]">Bathware to Accessories</div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#2E2722] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Premium Finishes</div>
                <div className="text-[11px] text-[#786F64]">Chrome, Matte Black, Brushed Gold &amp; More</div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#2E2722] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Durable &amp; Long Lasting</div>
                <div className="text-[11px] text-[#786F64]">Corrosion &amp; Rust Resistant</div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#2E2722] shrink-0">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Easy Installation</div>
                <div className="text-[11px] text-[#786F64]">Fitting &amp; Support</div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-white border border-[#E2DACF] shadow-2xs text-[#2E2722] shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#24201D]">Efficient &amp; Sustainable</div>
                <div className="text-[11px] text-[#786F64]">Water Saving Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CATEGORIES: Shop by Bathroom Category (8 exact cards)  */}
        {/* ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#24201D] tracking-tight">
              Shop by Bathroom Category
            </h2>
            <button
              onClick={() => {
                setSelectedCategory(null);
                const el = document.getElementById('bathroom-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-medium text-[#735A45] hover:text-[#24201D] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
            {BATHROOM_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.filterTag;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedCategory(null);
                    } else {
                      setSelectedCategory(cat.filterTag);
                      const el = document.getElementById('bathroom-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group relative rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer text-left flex flex-col justify-end h-32 sm:h-34 shadow-2xs hover:shadow-md ${
                    isSelected
                      ? 'border-[#2E2722] ring-2 ring-[#2E2722]'
                      : 'border-[#E2DACF] hover:border-[#B5A898]'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay for crystal-clear readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Label & arrow */}
                  <div className="relative z-10 p-2.5 sm:p-3 flex items-center justify-between text-white w-full">
                    <span className="text-[11.5px] sm:text-xs font-medium tracking-tight drop-shadow-xs">
                      {cat.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. CATALOG WITH SIDEBAR FILTERS & 6-COLUMN GRID           */}
        {/* ========================================================= */}
        <section id="bathroom-catalog" className="pt-2">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4 flex items-center justify-between">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D5CCC0] rounded-md text-xs font-semibold text-[#24201D] shadow-2xs"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters ({activeFiltersCount})</span>
            </button>

            <span className="text-xs text-[#786F64]">
              Showing {filteredProducts.length} of 468 Products
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ----------------------------------------------------- */}
            {/* LEFT SIDEBAR FILTERS                                  */}
            {/* ----------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-2 space-y-5 bg-transparent pr-2">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D6]">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#24201D]">
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-[#8C6D53] hover:text-[#24201D] hover:underline cursor-pointer font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* 1. Product Type */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('productType')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Product Type</span>
                  {openAccordions.productType ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.productType && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      { name: 'Toilets', count: 128 },
                      { name: 'Wash Basins', count: 96 },
                      { name: 'Vanities', count: 54 },
                      { name: 'Bathtubs', count: 28 },
                      { name: 'Shower Enclosures', count: 42 },
                      { name: 'Showers', count: 76 },
                      { name: 'Accessories', count: 118 },
                    ].map((item) => (
                      <label
                        key={item.name}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedProductTypes.includes(item.name)}
                          onChange={() => handleProductTypeToggle(item.name)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span>
                          {item.name} <span className="text-[#8E857B]">({item.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Installation Type */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('installationType')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Installation Type</span>
                  {openAccordions.installationType ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.installationType && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      { name: 'Wall Mounted', count: 184 },
                      { name: 'Floor Standing / Deck', count: 152 },
                      { name: 'Concealed / In-Wall', count: 78 },
                      { name: 'Freestanding', count: 54 },
                    ].map((item) => (
                      <label
                        key={item.name}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedInstallationTypes.includes(item.name)}
                          onChange={() => handleInstallationTypeToggle(item.name)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span>
                          {item.name} <span className="text-[#8E857B]">({item.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Finish / Color */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('finishColor')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Finish / Color</span>
                  {openAccordions.finishColor ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.finishColor && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      { name: 'Chrome', hex: '#D8D8D8' },
                      { name: 'Matte Black', hex: '#1D1D1B' },
                      { name: 'Brushed Gold', hex: '#CBA167' },
                      { name: 'Alpine White', hex: '#FFFFFF', border: true },
                      { name: 'Shadow Grey', hex: '#8E8D8A' },
                    ].map((finish) => (
                      <label
                        key={finish.name}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFinishes.includes(finish.name)}
                          onChange={() => handleFinishToggle(finish.name)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span
                          className={`w-3.5 h-3.5 rounded-full inline-block shrink-0 ${
                            finish.border ? 'border border-[#C5BBAE]' : ''
                          }`}
                          style={{ backgroundColor: finish.hex }}
                        />
                        <span>{finish.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Material */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('material')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Material</span>
                  {openAccordions.material ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.material && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      'Vitreous Ceramic',
                      'Solid Brass',
                      'SUS 304 Stainless Steel',
                      'Stone Resin Composite',
                      'Toughened Glass',
                    ].map((mat) => (
                      <label
                        key={mat}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(mat)}
                          onChange={() => handleMaterialToggle(mat)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span>{mat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Size / Dimension */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('sizeDimension')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Size / Dimension</span>
                  {openAccordions.sizeDimension ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.sizeDimension && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      { name: 'Compact', label: 'Compact (< 600 mm)' },
                      { name: 'Medium', label: 'Medium (600 – 1200 mm)' },
                      { name: 'Large', label: 'Large (> 1200 mm)' },
                    ].map((item) => (
                      <label
                        key={item.name}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedDimensionSizes.includes(item.name)}
                          onChange={() => handleDimensionSizeToggle(item.name)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 6. Price Range */}
              <div className="border-b border-[#EAE3D6] pb-4">
                <button
                  onClick={() => toggleAccordion('priceRange')}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#24201D] py-1 cursor-pointer"
                >
                  <span>Price Range</span>
                  {openAccordions.priceRange ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

                {openAccordions.priceRange && (
                  <div className="mt-3 space-y-2 text-xs text-[#4F473E]">
                    {[
                      'Under ₹5,000',
                      '₹5,000 – ₹15,000',
                      '₹15,000 – ₹50,000',
                      'Above ₹50,000',
                    ].map((range) => (
                      <label
                        key={range}
                        className="flex items-center gap-2.5 cursor-pointer hover:text-[#24201D]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes(range)}
                          onChange={() => handlePriceRangeToggle(range)}
                          className="rounded border-[#C5BBAE] text-[#2E2722] focus:ring-[#2E2722] cursor-pointer"
                        />
                        <span>{range}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </aside>

            {/* ----------------------------------------------------- */}
            {/* RIGHT MAIN CATALOG CONTENT                            */}
            {/* ----------------------------------------------------- */}
            <main className="lg:col-span-9 xl:col-span-10 space-y-4">
              {/* Catalog Top Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EAE3D6]">
                <div className="text-xs sm:text-sm text-[#4E473F]">
                  Showing <span className="font-semibold text-[#24201D]">1 – {filteredProducts.length}</span> of{' '}
                  <span className="font-semibold text-[#24201D]">468 Bathroom Products</span>
                  {selectedCategory && (
                    <span className="ml-2 inline-flex items-center gap-1 bg-[#EAE3D6] px-2 py-0.5 rounded text-[11px] font-medium text-[#2E2722]">
                      Category: {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="hover:text-black ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-1.5 text-xs text-[#4E473F]">
                    <span>Sort By:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-white border border-[#D5CCC0] rounded px-2.5 py-1 text-xs text-[#24201D] focus:ring-[#2E2722] focus:border-[#2E2722] cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                    </select>
                  </div>

                  {/* Grid View Switchers: 6 cols, 4 cols, list view */}
                  <div className="hidden sm:flex items-center border border-[#D5CCC0] rounded overflow-hidden bg-white">
                    <button
                      onClick={() => setGridColumns(6)}
                      className={`p-1.5 transition-colors cursor-pointer ${
                        gridColumns === 6
                          ? 'bg-[#2E2722] text-white'
                          : 'text-stone-600 hover:text-black hover:bg-stone-50'
                      }`}
                      title="6-Column Compact View"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setGridColumns(4)}
                      className={`p-1.5 transition-colors cursor-pointer border-l border-[#D5CCC0] ${
                        gridColumns === 4
                          ? 'bg-[#2E2722] text-white'
                          : 'text-stone-600 hover:text-black hover:bg-stone-50'
                      }`}
                      title="4-Column Standard View"
                    >
                      <Grid className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setGridColumns(1)}
                      className={`p-1.5 transition-colors cursor-pointer border-l border-[#D5CCC0] ${
                        gridColumns === 1
                          ? 'bg-[#2E2722] text-white'
                          : 'text-stone-600 hover:text-black hover:bg-stone-50'
                      }`}
                      title="List View"
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Display Grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg border border-[#E5DDD0] p-12 text-center space-y-3">
                  <p className="text-sm text-[#786F64]">No bathroom products match the selected filters.</p>
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-2 bg-[#2E2722] text-white text-xs font-semibold rounded-md cursor-pointer hover:bg-[#433B34]"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : gridColumns === 1 ? (
                /* List View */
                <div className="space-y-3">
                  {filteredProducts.map((item) => {
                    const wish = isWishlisted(item.id);
                    const isAdded = addedAnimation[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleProductCardClick(item)}
                        className="bg-white rounded-lg border border-[#E2DACF] p-4 flex flex-col sm:flex-row items-center gap-4 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="w-full sm:w-44 h-32 rounded bg-[#F8F5F0] overflow-hidden shrink-0 relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 space-y-1.5 text-left w-full">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#24201D]">{item.code}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const prod = toCanonicalProduct(
                                  item,
                                  activeSwatches[item.id] || item.swatches[0]?.name || 'Standard'
                                );
                                onToggleWishlist(prod);
                              }}
                              className="p-1 text-stone-400 hover:text-red-500"
                            >
                              <Heart
                                className={`w-4 h-4 ${
                                  wish ? 'fill-red-500 text-red-500' : 'stroke-[1.8]'
                                }`}
                              />
                            </button>
                          </div>
                          <h4 className="text-sm font-medium text-[#4A433A]">{item.name}</h4>
                          <p className="text-xs text-[#7A7166] line-clamp-1">{item.description}</p>
                          <div className="text-xs font-semibold text-[#8C6D53]">{item.specs.dimensions}</div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                          <span className="text-sm sm:text-base font-bold text-[#24201D]">
                            {item.formattedPrice}
                          </span>
                          <button
                            onClick={(e) => handleAddToCartClick(item, e)}
                            className="px-4 py-2 bg-[#2E2722] hover:bg-[#433B34] text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-400" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-3.5 h-3.5" />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Grid View (6 columns or 4 columns) */
                <div
                  className={`grid gap-3 sm:gap-3.5 ${
                    gridColumns === 6
                      ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'
                      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  }`}
                >
                  {filteredProducts.map((item) => {
                    const wish = isWishlisted(item.id);
                    const isAdded = addedAnimation[item.id];
                    const activeFinish = activeSwatches[item.id] || item.swatches[0]?.name;

                    return (
                      <div
                        key={item.id}
                        onClick={() => handleProductCardClick(item)}
                        className="bg-white rounded-lg border border-[#E2DACF] hover:border-[#B5A898] hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col group"
                      >
                        {/* Product Image Area */}
                        <div className="relative w-full aspect-[16/10] bg-[#F5F2EB] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Wishlist Heart Button (Overlay in top-right) */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const prod = toCanonicalProduct(
                                item,
                                activeSwatches[item.id] || item.swatches[0]?.name || 'Standard'
                              );
                              onToggleWishlist(prod);
                            }}
                            aria-label={`Save ${item.code} to wishlist`}
                            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-red-500 shadow-sm flex items-center justify-center transition-all cursor-pointer z-10"
                          >
                            <Heart
                              className={`w-3.5 h-3.5 ${
                                wish ? 'fill-red-500 text-red-500' : 'stroke-[1.8]'
                              }`}
                            />
                          </button>
                        </div>

                        {/* Card Details Area */}
                        <div className="p-3 flex-1 flex flex-col justify-between space-y-2 text-left">
                          {/* Finishes Swatch Dots Row */}
                          <div className="flex items-center gap-1.5">
                            {item.swatches.map((swatch) => {
                              const isSelected = activeFinish === swatch.name;
                              return (
                                <button
                                  key={swatch.code}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveSwatches((prev) => ({
                                      ...prev,
                                      [item.id]: swatch.name,
                                    }));
                                  }}
                                  title={swatch.name}
                                  className={`w-3 h-3 rounded-full transition-transform ${
                                    isSelected
                                      ? 'ring-1.5 ring-[#2E2722] ring-offset-1 scale-110'
                                      : 'hover:scale-110'
                                  }`}
                                  style={{
                                    backgroundColor: swatch.hex,
                                    border: swatch.hex.toLowerCase() === '#ffffff' ? '1px solid #D5CCC0' : 'none',
                                  }}
                                />
                              );
                            })}
                            {item.moreFinishesCount && item.moreFinishesCount > 0 ? (
                              <span className="text-[10px] text-[#8E857B] font-medium ml-0.5">
                                +{item.moreFinishesCount}
                              </span>
                            ) : null}
                          </div>

                          {/* Model Code & Subtitle */}
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold text-[#24201D] tracking-tight group-hover:text-[#6F4E37] transition-colors">
                              {item.code}
                            </h4>
                            <p className="text-[11px] text-[#70675D] line-clamp-1 leading-tight">
                              {item.name}
                            </p>
                          </div>

                          {/* Price & Add to Cart Button */}
                          <div className="pt-1.5 flex items-center justify-between gap-2 border-t border-stone-100">
                            <span className="text-xs font-bold text-[#24201D]">
                              {item.formattedPrice}
                            </span>
                            <button
                              onClick={(e) => handleAddToCartClick(item, e)}
                              aria-label={`Add ${item.code} to cart`}
                              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ${
                                isAdded
                                  ? 'bg-[#3A3530] text-green-300'
                                  : 'bg-[#2E2722] hover:bg-[#433B34] text-white'
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
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* 4. MOBILE FILTERS DRAWER                                  */}
      {/* ========================================================= */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-sm font-bold text-[#24201D] uppercase tracking-wider">
                Bathroom Filters
              </h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-stone-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Product Type */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#24201D] uppercase">Product Type</h4>
              {[
                { name: 'Toilets', count: 128 },
                { name: 'Wash Basins', count: 96 },
                { name: 'Vanities', count: 54 },
                { name: 'Bathtubs', count: 28 },
                { name: 'Shower Enclosures', count: 42 },
                { name: 'Showers', count: 76 },
                { name: 'Accessories', count: 118 },
              ].map((item) => (
                <label key={item.name} className="flex items-center gap-2 text-xs text-stone-700">
                  <input
                    type="checkbox"
                    checked={selectedProductTypes.includes(item.name)}
                    onChange={() => handleProductTypeToggle(item.name)}
                    className="rounded text-[#2E2722]"
                  />
                  <span>
                    {item.name} ({item.count})
                  </span>
                </label>
              ))}
            </div>

            {/* Finish */}
            <div className="space-y-2 pt-3 border-t border-stone-200">
              <h4 className="text-xs font-bold text-[#24201D] uppercase">Finish / Color</h4>
              {['Chrome', 'Matte Black', 'Brushed Gold', 'Alpine White', 'Shadow Grey'].map(
                (finish) => (
                  <label key={finish} className="flex items-center gap-2 text-xs text-stone-700">
                    <input
                      type="checkbox"
                      checked={selectedFinishes.includes(finish)}
                      onChange={() => handleFinishToggle(finish)}
                      className="rounded text-[#2E2722]"
                    />
                    <span>{finish}</span>
                  </label>
                )
              )}
            </div>

            {/* Price */}
            <div className="space-y-2 pt-3 border-t border-stone-200">
              <h4 className="text-xs font-bold text-[#24201D] uppercase">Price Range</h4>
              {['Under ₹5,000', '₹5,000 – ₹15,000', '₹15,000 – ₹50,000', 'Above ₹50,000'].map(
                (range) => (
                  <label key={range} className="flex items-center gap-2 text-xs text-stone-700">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range)}
                      onChange={() => handlePriceRangeToggle(range)}
                      className="rounded text-[#2E2722]"
                    />
                    <span>{range}</span>
                  </label>
                )
              )}
            </div>

            <div className="pt-6 border-t border-stone-200 flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-2.5 border border-stone-300 text-xs font-semibold rounded text-stone-700"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#2E2722] text-white text-xs font-semibold rounded"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
