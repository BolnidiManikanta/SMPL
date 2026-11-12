import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Heart,
  Grid3X3,
  List,
  Sparkles,
  Layers,
  ShieldCheck,
  Building2,
  Check,
  X,
  SlidersHorizontal,
  Download,
  Calendar,
} from 'lucide-react';

interface TilesPageViewProps {
  onOpenConsultation: () => void;
  onOrderSample: (tileName: string) => void;
  onToggleWishlist?: (item: any) => void;
}

export interface TileProduct {
  id: string;
  name: string;
  type: 'Wall Tile' | 'Floor Tile' | 'Decorative Tile';
  category: 'Wall Tiles' | 'Floor Tiles' | 'Vitrified' | 'Porcelain' | 'Decorative' | 'Mosaic';
  dimensions: string;
  finish: 'Glossy' | 'Matt' | 'Satin' | 'Carving' | 'Textured' | 'Polished';
  image: string;
  pricePerSqFt?: string;
  thickness: string;
  slipRating: string;
  material: string;
  description: string;
}

export const TILE_PRODUCTS: TileProduct[] = [
  {
    id: 'tile_01',
    name: 'Carrara White',
    type: 'Wall Tile',
    category: 'Wall Tiles',
    dimensions: '600 × 1200 mm',
    finish: 'Glossy',
    image: '/images/tiles_v2/products/carrara_white.jpg',
    pricePerSqFt: '$6.80 / sq.ft',
    thickness: '9 mm',
    slipRating: 'R9',
    material: 'Glazed Vitrified Porcelain',
    description: 'Iconic Italian Carrara marble recreation with luminous high-gloss glaze and subtle grey feathering.',
  },
  {
    id: 'tile_02',
    name: 'Armani Grey',
    type: 'Floor Tile',
    category: 'Floor Tiles',
    dimensions: '800 × 1600 mm',
    finish: 'Matt',
    image: '/images/tiles_v2/products/armani_grey.jpg',
    pricePerSqFt: '$8.40 / sq.ft',
    thickness: '10 mm',
    slipRating: 'R10',
    material: 'Full-Body Vitrified Porcelain',
    description: 'Sophisticated charcoal-tinted limestone texture with tactile velvet matte surface.',
  },
  {
    id: 'tile_03',
    name: 'Botticino Beige',
    type: 'Wall Tile',
    category: 'Wall Tiles',
    dimensions: '600 × 1200 mm',
    finish: 'Glossy',
    image: '/images/tiles_v2/products/botticino_beige.jpg',
    pricePerSqFt: '$7.20 / sq.ft',
    thickness: '9 mm',
    slipRating: 'R9',
    material: 'Vitrified Glazed Slab',
    description: 'Warm cream Mediterranean stone pattern casting soft luminous amber reflections.',
  },
  {
    id: 'tile_04',
    name: 'Terrazzo Multi',
    type: 'Floor Tile',
    category: 'Porcelain',
    dimensions: '600 × 600 mm',
    finish: 'Matt',
    image: '/images/tiles_v2/products/terrazzo_multi.jpg',
    pricePerSqFt: '$6.90 / sq.ft',
    thickness: '10 mm',
    slipRating: 'R10',
    material: 'Artisanal Composite Porcelain',
    description: 'Natural stone chips and quartz aggregate embedded in a tactile neutral earth base.',
  },
  {
    id: 'tile_05',
    name: 'Emperador Brown',
    type: 'Wall Tile',
    category: 'Vitrified',
    dimensions: '600 × 1200 mm',
    finish: 'Polished',
    image: '/images/tiles_v2/products/emperador_brown.jpg',
    pricePerSqFt: '$8.90 / sq.ft',
    thickness: '9.5 mm',
    slipRating: 'R9',
    material: 'Polished Glazed Vitrified',
    description: 'Deep espresso tones with caramel spiderweb veining inspired by Spanish quarries.',
  },
  {
    id: 'tile_06',
    name: 'Onyx Ivory',
    type: 'Wall Tile',
    category: 'Wall Tiles',
    dimensions: '800 × 1600 mm',
    finish: 'Glossy',
    image: '/images/tiles_v2/products/onyx_ivory.jpg',
    pricePerSqFt: '$9.50 / sq.ft',
    thickness: '9 mm',
    slipRating: 'R9',
    material: 'Translucent Effect Glazed Porcelain',
    description: 'Layered crystalline depth echoing backlit Iranian onyx stone with mirror gloss.',
  },
  {
    id: 'tile_07',
    name: 'Statuario Gold',
    type: 'Floor Tile',
    category: 'Vitrified',
    dimensions: '1200 × 2400 mm',
    finish: 'Polished',
    image: '/images/tiles_v2/products/statuario_gold.jpg',
    pricePerSqFt: '$11.80 / sq.ft',
    thickness: '9 mm',
    slipRating: 'R10',
    material: 'Maxi Slab Sintered Stone',
    description: 'Dramatic book-matched golden amber and grey ribbons running across pure white porcelain.',
  },
  {
    id: 'tile_08',
    name: 'Concrete Grey',
    type: 'Floor Tile',
    category: 'Floor Tiles',
    dimensions: '600 × 600 mm',
    finish: 'Matt',
    image: '/images/tiles_v2/products/concrete_grey.jpg',
    pricePerSqFt: '$5.80 / sq.ft',
    thickness: '10 mm',
    slipRating: 'R10',
    material: 'Architectural Micro-Cement Porcelain',
    description: 'Minimalist industrial aesthetics with soft mottled tonal variations and micro-texture.',
  },
  {
    id: 'tile_09',
    name: 'Wood Oak',
    type: 'Floor Tile',
    category: 'Porcelain',
    dimensions: '200 × 1200 mm',
    finish: 'Matt',
    image: '/images/tiles_v2/products/wood_oak.jpg',
    pricePerSqFt: '$6.50 / sq.ft',
    thickness: '9.5 mm',
    slipRating: 'R10',
    material: 'Rectified Wood-Effect Porcelain',
    description: 'Warm Nordic timber planks with tactile saw-cut grain and zero-maintenance durability.',
  },
  {
    id: 'tile_10',
    name: 'Hexa Mosaic',
    type: 'Decorative Tile',
    category: 'Mosaic',
    dimensions: '300 × 300 mm',
    finish: 'Glossy',
    image: '/images/tiles_v2/products/hexa_mosaic.jpg',
    pricePerSqFt: '$12.00 / sheet',
    thickness: '8 mm',
    slipRating: 'R9',
    material: 'Mesh-Mounted Geometric Ceramic',
    description: 'Precision hexagonal tessellation with subtle ombre tonal gradients for feature walls.',
  },
  {
    id: 'tile_11',
    name: 'Travertine Beige',
    type: 'Wall Tile',
    category: 'Wall Tiles',
    dimensions: '600 × 1200 mm',
    finish: 'Matt',
    image: '/images/tiles_v2/products/travertine_beige.jpg',
    pricePerSqFt: '$7.80 / sq.ft',
    thickness: '9 mm',
    slipRating: 'R10',
    material: 'Cross-Cut Vein Travertine Porcelain',
    description: 'Roman architectural stone with linear pore detailing and earthy warm sand coloration.',
  },
  {
    id: 'tile_12',
    name: 'Mint Stone',
    type: 'Floor Tile',
    category: 'Decorative',
    dimensions: '600 × 600 mm',
    finish: 'Textured',
    image: '/images/tiles_v2/products/mint_stone.jpg',
    pricePerSqFt: '$7.40 / sq.ft',
    thickness: '10 mm',
    slipRating: 'R11',
    material: 'Anti-Slip Architectural Stoneware',
    description: 'Sage green limestone character with chiseled edge effect and wet-area traction.',
  },
];

export const TILE_SPACES_V2 = [
  {
    id: 'living_room',
    title: 'Living Room',
    image: '/images/tiles_v2/spaces/living_room.jpg',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    image: '/images/tiles_v2/spaces/bedroom.jpg',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    image: '/images/tiles_v2/spaces/kitchen.jpg',
  },
  {
    id: 'dining',
    title: 'Dining',
    image: '/images/tiles_v2/spaces/dining.jpg',
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    image: '/images/tiles_v2/spaces/bathroom.jpg',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    image: '/images/tiles_v2/spaces/commercial.jpg',
  },
];

export const TILE_COLLECTIONS_V2 = [
  {
    id: 'marble_look',
    title: 'Marble Look',
    subtitle: '120+ Designs',
    image: '/images/tiles_v2/collections/marble_look.jpg',
  },
  {
    id: 'stone_look',
    title: 'Stone Look',
    subtitle: '95+ Designs',
    image: '/images/tiles_v2/collections/stone_look.jpg',
  },
  {
    id: 'terrazzo',
    title: 'Terrazzo',
    subtitle: '60+ Designs',
    image: '/images/tiles_v2/collections/terrazzo.jpg',
  },
  {
    id: 'wood_look',
    title: 'Wood Look',
    subtitle: '80+ Designs',
    image: '/images/tiles_v2/collections/wood_look.jpg',
  },
  {
    id: 'concrete_look',
    title: 'Concrete Look',
    subtitle: '65+ Designs',
    image: '/images/tiles_v2/collections/concrete_look.jpg',
  },
  {
    id: 'patterned',
    title: 'Patterned',
    subtitle: '70+ Designs',
    image: '/images/tiles_v2/collections/patterned.jpg',
  },
];

export const TilesPageView: React.FC<TilesPageViewProps> = ({
  onOpenConsultation,
  onOrderSample,
}) => {
  // Category tabs
  const [activeTab, setActiveTab] = useState<string>('All Tiles');

  // Filter Checkbox States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Accordion toggle states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    category: true,
    finish: true,
    size: true,
    color: false,
    material: false,
    thickness: false,
    pattern: false,
    price: false,
  });

  // Saved items state
  const [savedTiles, setSavedTiles] = useState<string[]>(['tile_01']);
  const [selectedTileModal, setSelectedTileModal] = useState<TileProduct | null>(null);
  const [sampleSuccess, setSampleSuccess] = useState(false);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleFinish = (fin: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(fin) ? prev.filter((f) => f !== fin) : [...prev, fin]
    );
  };

  const toggleSize = (sz: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedFinishes([]);
    setSelectedSizes([]);
    setActiveTab('All Tiles');
  };

  const toggleSaveTile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedTiles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter products based on activeTab and sidebar filters
  const filteredTiles = useMemo(() => {
    return TILE_PRODUCTS.filter((tile) => {
      // Tab filter
      if (activeTab === 'Wall Tiles' && tile.type !== 'Wall Tile') return false;
      if (activeTab === 'Floor Tiles' && tile.type !== 'Floor Tile') return false;
      if (activeTab === 'Vitrified' && tile.category !== 'Vitrified') return false;
      if (activeTab === 'Porcelain' && tile.category !== 'Porcelain') return false;
      if (activeTab === 'Decorative' && tile.type !== 'Decorative Tile' && tile.category !== 'Decorative')
        return false;
      if (activeTab === 'Mosaic' && tile.category !== 'Mosaic') return false;

      // Sidebar categories
      if (selectedCategories.length > 0) {
        const matchesCategory = selectedCategories.some((sc) => {
          if (sc === 'Wall Tiles' && tile.type === 'Wall Tile') return true;
          if (sc === 'Floor Tiles' && tile.type === 'Floor Tile') return true;
          if (sc === 'Vitrified Tiles' && tile.category === 'Vitrified') return true;
          if (sc === 'Porcelain Tiles' && tile.category === 'Porcelain') return true;
          if (sc === 'Decorative Tiles' && (tile.type === 'Decorative Tile' || tile.category === 'Decorative'))
            return true;
          if (sc === 'Mosaic Tiles' && tile.category === 'Mosaic') return true;
          return false;
        });
        if (!matchesCategory) return false;
      }

      // Sidebar finishes
      if (selectedFinishes.length > 0) {
        if (!selectedFinishes.includes(tile.finish)) return false;
      }

      // Sidebar sizes
      if (selectedSizes.length > 0) {
        const matchSize = selectedSizes.some((sz) => tile.dimensions.includes(sz.split(' ')[0]));
        if (!matchSize) return false;
      }

      return true;
    });
  }, [activeTab, selectedCategories, selectedFinishes, selectedSizes]);

  const handleRequestSample = (name: string) => {
    onOrderSample(name);
    setSampleSuccess(true);
    setTimeout(() => setSampleSuccess(false), 2400);
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#24211E]">
      {/* 1. Hero Section: "Interior Tiles Collection" matching image_699fa879.png */}
      <section className="relative w-full bg-[#E8DFC8] border-b border-[#D8CEB8] overflow-hidden select-none">
        <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center">
          {/* Pristine 4K Architectural Photography Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/images/tiles_v2/hero/hero_4k.jpg"
              alt="Interior Tiles Collection"
              className="w-full h-full object-cover object-right md:object-center"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient fade on extreme left on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0E6D8]/95 via-[#F0E6D8]/50 to-transparent sm:hidden pointer-events-none" />
          </div>

          {/* Left Foreground Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full py-12 sm:py-16">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-semibold text-[#54473A]">
                  INTERIOR TILES
                </span>
                <span className="w-12 h-[1px] bg-[#6B5A4B]"></span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] tracking-tight text-[#1D1713] font-normal mb-5">
                Interior Tiles<br />Collection
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[16px] leading-[1.65] text-[#3D342C] font-normal max-w-md mb-8">
                A versatile range of wall and floor tiles that combine elegance, durability and modern design for every interior space.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('explore-tiles-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#1A1816] hover:bg-[#332E2A] text-white text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-[3px] transition-all shadow-md group cursor-pointer"
                >
                  <span>Explore All Tiles</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('shop-by-space');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center border border-[#3E3832] hover:bg-black/5 text-[#1A1816] text-[13px] font-medium tracking-wide px-6 py-3.5 rounded-[3px] transition-all bg-white/40 backdrop-blur-xs cursor-pointer"
                >
                  <span>Find by Space</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Feature Value Propositions matching image_699fa879.png */}
      <section className="w-full bg-[#FAF7F2] border-b border-[#E7DFD2] py-5 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E7DFD2]">
          {/* Feature 1 */}
          <div className="flex items-center gap-3 pt-2 lg:pt-0 lg:px-4 first:pl-0">
            <div className="w-8 h-8 rounded-full bg-[#66462C]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#66462C]" />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#1C1917] leading-tight">Premium Designs</h4>
              <p className="text-[11.5px] text-stone-500 mt-0.5">Modern & Timeless</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 pt-2 lg:pt-0 lg:px-4">
            <div className="w-8 h-8 rounded-full bg-[#66462C]/10 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-[#66462C]" />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#1C1917] leading-tight">Multiple Finishes</h4>
              <p className="text-[11.5px] text-stone-500 mt-0.5">Glossy, Matte, Carving & More</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 pt-2 lg:pt-0 lg:px-4">
            <div className="w-8 h-8 rounded-full bg-[#66462C]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#66462C]" />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#1C1917] leading-tight">Durable & Long Lasting</h4>
              <p className="text-[11.5px] text-stone-500 mt-0.5">Scratch, Stain & Moisture Resistant</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3 pt-2 lg:pt-0 lg:px-4">
            <div className="w-8 h-8 rounded-full bg-[#66462C]/10 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 text-[#66462C]" />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#1C1917] leading-tight">Versatile Applications</h4>
              <p className="text-[11.5px] text-stone-500 mt-0.5">Homes, Offices & Commercial Spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shop by Space: 6 Space Cards matching image_699fa879.png */}
      <section id="shop-by-space" className="w-full bg-[#FAF7F2] py-14 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#E7DFD2]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-[32px] sm:text-[38px] text-[#221F1B] font-normal mb-8">
            Shop by Space
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {TILE_SPACES_V2.map((space) => (
              <div
                key={space.id}
                onClick={() => {
                  const el = document.getElementById('explore-tiles-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative aspect-[4/3.2] rounded-[3px] overflow-hidden cursor-pointer bg-[#E5DFD4] shadow-xs hover:shadow-lg transition-all duration-300 border border-[#DDD5C8] hover:border-[#66462C]"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark gradient for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Label and Arrow */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white z-10">
                  <span className="text-[13.5px] sm:text-[14px] font-medium tracking-wide drop-shadow-sm">
                    {space.title}
                  </span>
                  <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-1 font-light">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Main Catalog Section: "Explore Interior Tiles" with Filters Sidebar & 6-column Grid */}
      <section id="explore-tiles-grid" className="w-full bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#E7DFD2]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Filter Sidebar */}
            <aside className="lg:col-span-3 pr-0 lg:pr-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7DFD2] mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#1C1917]" />
                  <h3 className="font-serif text-xl text-[#1C1917]">Filters</h3>
                </div>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-stone-500 hover:text-[#66462C] underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* Accordion 1: Category */}
              <div className="border-b border-[#E7DFD2] py-4">
                <button
                  onClick={() => toggleAccordion('category')}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#1C1917] uppercase tracking-wider mb-3 cursor-pointer"
                >
                  <span>Category</span>
                  {openAccordions.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions.category && (
                  <div className="space-y-2.5 text-xs text-[#3E3832]">
                    {[
                      { name: 'Wall Tiles', count: 432 },
                      { name: 'Floor Tiles', count: 486 },
                      { name: 'Vitrified Tiles', count: 312 },
                      { name: 'Porcelain Tiles', count: 175 },
                      { name: 'Decorative Tiles', count: 128 },
                      { name: 'Mosaic Tiles', count: 96 },
                    ].map((c) => (
                      <label key={c.name} className="flex items-center justify-between cursor-pointer hover:text-[#66462C]">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(c.name)}
                            onChange={() => toggleCategory(c.name)}
                            className="rounded border-stone-300 text-[#66462C] focus:ring-[#66462C] w-3.5 h-3.5 cursor-pointer"
                          />
                          <span>{c.name}</span>
                        </div>
                        <span className="text-stone-400 font-mono text-[11px]">({c.count})</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2: Finish */}
              <div className="border-b border-[#E7DFD2] py-4">
                <button
                  onClick={() => toggleAccordion('finish')}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#1C1917] uppercase tracking-wider mb-3 cursor-pointer"
                >
                  <span>Finish</span>
                  {openAccordions.finish ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions.finish && (
                  <div className="space-y-2.5 text-xs text-[#3E3832]">
                    {[
                      { name: 'Glossy', count: 298 },
                      { name: 'Matt', count: 276 },
                      { name: 'Satin', count: 142 },
                      { name: 'Carving', count: 86 },
                      { name: 'Textured', count: 79 },
                      { name: 'Polished', count: 64 },
                    ].map((f) => (
                      <label key={f.name} className="flex items-center justify-between cursor-pointer hover:text-[#66462C]">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={selectedFinishes.includes(f.name)}
                            onChange={() => toggleFinish(f.name)}
                            className="rounded border-stone-300 text-[#66462C] focus:ring-[#66462C] w-3.5 h-3.5 cursor-pointer"
                          />
                          <span>{f.name}</span>
                        </div>
                        <span className="text-stone-400 font-mono text-[11px]">({f.count})</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 3: Size */}
              <div className="border-b border-[#E7DFD2] py-4">
                <button
                  onClick={() => toggleAccordion('size')}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#1C1917] uppercase tracking-wider mb-3 cursor-pointer"
                >
                  <span>Size</span>
                  {openAccordions.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions.size && (
                  <div className="space-y-2.5 text-xs text-[#3E3832]">
                    {[
                      { name: '300 × 600 mm', count: 210 },
                      { name: '600 × 600 mm', count: 328 },
                      { name: '600 × 1200 mm', count: 246 },
                      { name: '800 × 1600 mm', count: 128 },
                      { name: '1200 × 2400 mm', count: 46 },
                    ].map((s) => (
                      <label key={s.name} className="flex items-center justify-between cursor-pointer hover:text-[#66462C]">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={selectedSizes.includes(s.name)}
                            onChange={() => toggleSize(s.name)}
                            className="rounded border-stone-300 text-[#66462C] focus:ring-[#66462C] w-3.5 h-3.5 cursor-pointer"
                          />
                          <span>{s.name}</span>
                        </div>
                        <span className="text-stone-400 font-mono text-[11px]">({s.count})</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Collapsible Accordions: Color, Material, Thickness, Price */}
              {['Color', 'Material', 'Thickness', 'Pattern / Look', 'Price Range'].map((label) => (
                <div key={label} className="border-b border-[#E7DFD2] py-3.5">
                  <button
                    onClick={() => toggleAccordion(label.toLowerCase())}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#1C1917] uppercase tracking-wider cursor-pointer hover:text-[#66462C]"
                  >
                    <span>{label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                  </button>
                </div>
              ))}
            </aside>

            {/* Right Column: Title, Subcategory Tabs, and 6-column Tile Products Grid */}
            <div className="lg:col-span-9">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E7DFD2] mb-5 gap-3">
                <div className="flex items-baseline gap-4">
                  <h2 className="font-serif text-[28px] sm:text-[34px] text-[#1C1917] font-normal">
                    Explore Interior Tiles
                  </h2>
                  <span className="text-xs text-stone-500 font-mono">
                    Showing 1 – {filteredTiles.length} of 1,254 Tiles
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <span>Sort By:</span>
                    <select className="border border-stone-300 rounded px-2 py-1 text-xs bg-white text-stone-800 focus:outline-none">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest Additions</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-1 border border-stone-300 rounded p-0.5 bg-white">
                    <button className="p-1 text-[#1C1917] bg-stone-100 rounded-xs">
                      <Grid3X3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1 text-stone-400 hover:text-stone-800">
                      <List className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subcategory Tabs Row */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar text-xs">
                {['All Tiles', 'Wall Tiles', 'Floor Tiles', 'Vitrified', 'Porcelain', 'Decorative', 'Mosaic'].map(
                  (tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-[2px] transition-all whitespace-nowrap cursor-pointer font-medium ${
                          isActive
                            ? 'bg-[#1C1917] text-white'
                            : 'bg-[#F2ECE1] text-[#3D3833] hover:bg-[#EAE2D5]'
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  }
                )}
              </div>

              {/* 6-Column Tile Products Grid matching image_699fa879.png */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-3.5">
                {filteredTiles.map((tile) => {
                  const isSaved = savedTiles.includes(tile.id);

                  return (
                    <div
                      key={tile.id}
                      onClick={() => setSelectedTileModal(tile)}
                      className="group cursor-pointer flex flex-col bg-white border border-[#E7DFD2] hover:border-[#66462C] rounded-[2px] p-2.5 transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Tile Swatch Container */}
                      <div className="relative w-full aspect-square bg-[#F7F4EE] rounded-[2px] overflow-hidden mb-2.5 border border-[#ECE5D8]">
                        <img
                          src={tile.image}
                          alt={tile.name}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />

                        {/* Heart Button */}
                        <button
                          onClick={(e) => toggleSaveTile(tile.id, e)}
                          aria-label="Save tile"
                          className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/85 hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              isSaved ? 'fill-[#66462C] text-[#66462C]' : 'text-stone-600'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Tile Name */}
                      <h4 className="text-[12.5px] font-serif font-medium text-[#1C1917] group-hover:text-[#66462C] transition-colors leading-tight line-clamp-1">
                        {tile.name}
                      </h4>

                      {/* Type Tag */}
                      <p className="text-[10px] text-stone-500 mt-0.5">{tile.type}</p>

                      {/* Dimension and Finish */}
                      <p className="text-[9.5px] text-stone-400 font-mono mt-1 leading-tight">
                        {tile.dimensions} | {tile.finish}
                      </p>
                    </div>
                  );
                })}
              </div>

              {filteredTiles.length === 0 && (
                <div className="py-16 text-center text-stone-500">
                  <p className="font-serif text-lg mb-2">No tiles match the selected filters.</p>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-[#66462C] underline uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Explore by Collection Section matching image_699fa879.png */}
      <section className="w-full bg-[#FAF7F2] py-14 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-[#E7DFD2]">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-[30px] sm:text-[36px] text-[#221F1B] font-normal">
              Explore by Collection
            </h2>

            <button
              onClick={() => {
                const el = document.getElementById('explore-tiles-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#221F1B] hover:text-[#66462C] transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-4 decoration-[#B8AEA0] group-hover:decoration-[#66462C]">
                View All Collections
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 6 Collection Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {TILE_COLLECTIONS_V2.map((col) => (
              <div
                key={col.id}
                onClick={() => {
                  const el = document.getElementById('explore-tiles-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col bg-white border border-[#E7DFD2] hover:border-[#66462C] rounded-[2px] p-2.5 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-full aspect-square rounded-[2px] overflow-hidden bg-[#F0EAE0] mb-2.5 border border-[#ECE5D8]">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <h4 className="text-[13px] font-serif font-medium text-[#1C1917] group-hover:text-[#66462C] transition-colors leading-tight">
                  {col.title}
                </h4>
                <p className="text-[10px] text-stone-500 mt-0.5">Collection</p>
                <p className="text-[10.5px] text-stone-400 font-mono mt-1">{col.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Full-Width Banner: "Design with Purpose" matching image_699fa879.png */}
      <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-[4px] overflow-hidden border border-[#DDD5C8] shadow-lg min-h-[300px] sm:min-h-[360px] flex items-center">
            {/* Background 4K Architectural Vanity Photo */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/tiles_v2/banner/design_with_purpose_4k.jpg"
                alt="Design with Purpose"
                className="w-full h-full object-cover object-right sm:object-center"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay on the left to ensure crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F0E7D8]/95 via-[#F0E7D8]/75 to-transparent w-full sm:w-[65%]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-lg">
              <h2 className="font-serif text-[36px] sm:text-[46px] leading-[1.08] text-[#1C1917] font-normal mb-4">
                Design with Purpose
              </h2>

              <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-[#4A423A] mb-8 font-normal">
                From modern minimalism to timeless classics, discover tiles that bring character, comfort and lasting value to your spaces.
              </p>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 bg-[#201D1A] hover:bg-[#38332E] text-white text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-[3px] transition-all shadow-md group cursor-pointer"
              >
                <span>Get Design Assistance</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Tile Specification Modal */}
      {selectedTileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-sm border border-[#DDD5C8] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            {/* Left: Swatch Image */}
            <div className="w-full md:w-1/2 bg-[#EFE9DD] relative aspect-square md:aspect-auto">
              <img
                src={selectedTileModal.image}
                alt={selectedTileModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/75 text-white text-[10px] font-mono tracking-wider px-2.5 py-1 uppercase rounded-xs">
                {selectedTileModal.finish} Finish
              </div>
            </div>

            {/* Right: Technical Specs */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#66462C] font-semibold">
                      {selectedTileModal.type}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1C1917] mt-0.5">
                      {selectedTileModal.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedTileModal(null)}
                    className="p-1 text-stone-400 hover:text-stone-800 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-[#554A40] leading-relaxed mb-4">
                  {selectedTileModal.description}
                </p>

                {/* Specs */}
                <div className="space-y-2.5 border-t border-b border-[#E7DFD2] py-3.5 text-xs mb-5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Dimensions:</span>
                    <span className="text-[#1C1917] font-mono font-medium">{selectedTileModal.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Material Composition:</span>
                    <span className="text-[#1C1917]">{selectedTileModal.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Thickness:</span>
                    <span className="text-[#1C1917] font-mono">{selectedTileModal.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Slip Resistance:</span>
                    <span className="text-[#1C1917] font-semibold">{selectedTileModal.slipRating}</span>
                  </div>
                  {selectedTileModal.pricePerSqFt && (
                    <div className="flex justify-between">
                      <span className="text-stone-500">Indicative Pricing:</span>
                      <span className="text-[#66462C] font-semibold">{selectedTileModal.pricePerSqFt}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleRequestSample(selectedTileModal.name)}
                  className="w-full py-3 bg-[#66462C] hover:bg-[#523722] text-white text-xs uppercase tracking-wider font-semibold rounded-[3px] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  {sampleSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Sample Added to Kit</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4" />
                      <span>Request Free Material Sample</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setSelectedTileModal(null);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 border border-[#8A7969] hover:bg-stone-200/50 text-[#1C1917] text-xs uppercase tracking-wider font-medium rounded-[3px] transition-colors cursor-pointer"
                >
                  Book Tile Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
