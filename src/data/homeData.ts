import { Product, SpaceCategory, StyleCollection } from "../types";

export const HOME_SPACES_DATA: SpaceCategory[] = [
  {
    "id": "master_bathroom",
    "title": "Master Bathroom",
    "image": "/images/spaces/master_bathroom.webp",
    "description": "Generous sanctuaries balancing sculpted freestanding baths, double vanities, and natural ambient light.",
    "itemCount": 42
  },
  {
    "id": "guest_bathroom",
    "title": "Guest Bathroom",
    "image": "/images/spaces/guest_bathroom.webp",
    "description": "Compact refinement with tactile stone surfaces, circular mirrors, and integrated brassware.",
    "itemCount": 28
  },
  {
    "id": "powder_room",
    "title": "Powder Room",
    "image": "/images/spaces/powder_room.webp",
    "description": "Dramatic architectural powder rooms combining dark fluted stonework and wall-mounted brass spouts.",
    "itemCount": 19
  },
  {
    "id": "kitchen",
    "title": "Kitchen",
    "image": "/images/spaces/kitchen.webp",
    "description": "Sculptural gooseneck mixers and workstation fittings engineered for culinary precision.",
    "itemCount": 24
  },
  {
    "id": "wellness_spa",
    "title": "Wellness & Spa",
    "image": "/images/spaces/wellness_spa.webp",
    "description": "Sensory shower rain ceilings, waterfall cascades, and hydrotherapeutic wellness controls.",
    "itemCount": 31
  },
  {
    "id": "commercial_spaces",
    "title": "Commercial Spaces",
    "image": "/images/spaces/commercial_spaces.webp",
    "description": "Heavy-traffic luxury fittings designed for boutique hospitality, private members clubs, and lounges.",
    "itemCount": 36
  }
];

export const HOME_STYLES_DATA: StyleCollection[] = [
  {
    "id": "contemporary",
    "title": "Contemporary",
    "image": "/images/styles/contemporary.webp",
    "tagline": "Clean architectural profiles with tactile precision knurling.",
    "aesthetic": "Brushed Bronze & Warm Travertine"
  },
  {
    "id": "minimalist",
    "title": "Minimalist",
    "image": "/images/styles/minimalist.webp",
    "tagline": "Pared-back geometry stripped of all ornamental excess.",
    "aesthetic": "Matte Black & Pure Ceramic"
  },
  {
    "id": "sculptural",
    "title": "Sculptural",
    "image": "/images/styles/sculptural.webp",
    "tagline": "Flowing continuous curves and dramatic monolithic forms.",
    "aesthetic": "Hand-Polished Brass & Cast Bronze"
  },
  {
    "id": "timeless",
    "title": "Timeless",
    "image": "/images/styles/timeless.webp",
    "tagline": "Crosshead handles and proportions inspired by heritage estates.",
    "aesthetic": "Aged Brass & Carrara Marble"
  },
  {
    "id": "modern_classic",
    "title": "Modern Classic",
    "image": "/images/styles/modern_classic.webp",
    "tagline": "Fluted textures meeting modern high-precision ceramic cartridges.",
    "aesthetic": "Brushed Nickel & Fluted Glass"
  },
  {
    "id": "organic_luxury",
    "title": "Organic Luxury",
    "image": "/images/styles/organic_luxury.webp",
    "tagline": "Raw honed limestone, earthen terrazzo, and tactile earth tones.",
    "aesthetic": "Honed Sandstone & Raw Bronze"
  }
];

export const HOME_SHOWCASE_PRODUCTS: Product[] = [
  {
    "id": "prod_faucet_01",
    "modelNumber": "SMPL-F-101",
    "name": "Linear Single Lever Basin Mixer",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Single Lever Mixers",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 680,
    "image": "/images/showcase/studio_gold_basin_mixer.webp",
    "galleryImages": [
      "/images/showcase/studio_gold_basin_mixer.webp",
      "/images/faucets/hero_faucet_banner.webp"
    ],
    "lifestyleImage": "/images/faucets/hero_faucet_banner.webp",
    "rating": 4.9,
    "reviewCount": 64,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      },
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79",
        "code": "RG"
      }
    ],
    "specs": {
      "material": "Forged Solid DZR Brass with PVD Finish",
      "cartridge": "35mm Sedal European Ceramic Disc Cartridge",
      "flowRate": "5.0 L/min (WELS 5-Star rated, aerated flow)",
      "operatingPressure": "1.5 – 5.0 bar (Recommended 3.0 bar)",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "connectionSize": "G 1/2\" Stainless Steel Braided Flexible Hoses (500mm)",
      "certifications": [
        "Watermark WM-02241",
        "WRAS Approved",
        "Lead-Free ANSI/NSF 61"
      ],
      "dimensions": "H: 198mm · Spout Reach: 145mm · Base Ø: 48mm",
      "weight": "2.1 kg"
    },
    "description": "The Linear single-lever basin mixer embodies understated luxury. Machined from solid DZR brass with a durable physical vapor deposition (PVD) finish, its progressive ceramic cartridge delivers whisper-smooth water modulation and zero splash.",
    "features": [
      "Precision ceramic disc progressive cartridge",
      "Anti-fingerprint PVD surface protection",
      "Aerated laminar stream reduces water consumption by 35%"
    ],
    "whatsInTheBox": {
      "included": [
        "Linear Basin Mixer Monobloc Body",
        "2x 500mm Stainless Flexible Hoses",
        "Solid Brass Pop-Up Waste",
        "Heavy Clamp Nut & Washer"
      ],
      "requiredSeparately": [
        "Standard under-counter hot & cold isolation valves"
      ]
    },
    "installationGuide": "Standard deck-mounted installation through 35mm diameter counter cut-out.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true,
    "isFeatured": true
  },
  {
    "id": "prod_faucet_02",
    "modelNumber": "SMPL-F-102",
    "name": "Atelier High-Arc Tall Vessel Basin Mixer",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Tall Vessel Mixers",
    "collection": "Sculptural",
    "space": "Powder Room",
    "price": 790,
    "image": "/images/products_ultra/basin_mixer_hd.webp",
    "galleryImages": [
      "/images/products_ultra/basin_mixer_hd.webp",
      "/images/faucets/hero_faucet_banner.webp"
    ],
    "lifestyleImage": "/images/faucets/hero_faucet_banner.webp",
    "rating": 4.8,
    "reviewCount": 42,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79",
        "code": "RG"
      }
    ],
    "specs": {
      "material": "Forged Solid DZR Brass with Electrostatic Finish",
      "cartridge": "35mm Flühs Ceramic Cartridge (Germany)",
      "flowRate": "4.5 L/min",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 312mm · Spout Reach: 180mm · Clearance: 235mm",
      "weight": "2.6 kg"
    },
    "description": "Elevated proportions crafted specifically for pairing with above-counter stone vessels. The high-arc neck clears basin rims effortlessly while maintaining a silent, focused cascade.",
    "features": [
      "Tall 235mm under-spout clearance for deep vessel bowls",
      "Smooth joystick-style single-lever operation"
    ],
    "whatsInTheBox": {
      "included": [
        "Atelier Tall Basin Mixer",
        "Extended 600mm Flexible Hoses",
        "Deck Mounting Hardware"
      ]
    },
    "installationGuide": "Mounts on vanity deck beside vessel basin with 35mm bore hole.",
    "inStock": true,
    "leadTimeDays": 2,
    "isNew": true,
    "isBestseller": true,
    "isFeatured": true
  },
  {
    "id": "prod_faucet_08",
    "modelNumber": "SMPL-F-108",
    "name": "Quadra Low-Profile Deck Mixer",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Single Lever Mixers",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 740,
    "image": "/images/categories_hd/basin_faucets.webp",
    "galleryImages": [
      "/images/categories_hd/basin_faucets.webp",
      "/images/sanitaryware/wash_basin_countertop.webp"
    ],
    "lifestyleImage": "/images/sanitaryware/wash_basin_countertop.webp",
    "rating": 4.8,
    "reviewCount": 29,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      }
    ],
    "specs": {
      "material": "Billet Machined Brass Cube Architecture",
      "mountingType": "Deck-Mounted",
      "shape": "Square",
      "dimensions": "H: 165mm · Reach: 135mm · Base: 45mm x 45mm",
      "weight": "2.2 kg"
    },
    "description": "Sharp orthogonal geometry with flush-integrated joystick handle for modern architectural bathrooms.",
    "features": [
      "Crisp 90-degree mitered edges",
      "Neoperl concealed aerator"
    ],
    "whatsInTheBox": {
      "included": [
        "Quadra Mixer",
        "Connection Hoses",
        "Brass Waste"
      ]
    },
    "installationGuide": "Deck mounted.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_10",
    "modelNumber": "SMPL-F-110",
    "name": "Concealed 2-Way Thermostatic Bath & Shower Mixer",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 880,
    "image": "/images/products_ultra/thermostatic_mixer_hd.webp",
    "galleryImages": [
      "/images/products_ultra/thermostatic_mixer_hd.webp",
      "/images/featured/showers.webp"
    ],
    "lifestyleImage": "/images/featured/showers.webp",
    "rating": 4.8,
    "reviewCount": 36,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      }
    ],
    "specs": {
      "material": "Solid Brass Pre-Wall Manifold",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "Trim Plate: 200mm x 120mm",
      "weight": "3.6 kg"
    },
    "description": "Concealed pre-wall thermostatic rough-in with 2-way push-button or rotary diverter between bath filler and hand shower.",
    "features": [
      "Anti-scald 38°C safety button",
      "Durable ceramic disc diverter"
    ],
    "whatsInTheBox": {
      "included": [
        "Rough-In Box",
        "Solid Metal Trim Plate",
        "Dual Rotary Handles"
      ]
    },
    "installationGuide": "Installed in pre-wall cavity before tiling.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_11",
    "modelNumber": "SMPL-F-111",
    "name": "Architectural 3-Way Concealed Rotary Diverter",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Concealed Diverters",
    "collection": "Contemporary",
    "space": "Wellness & Spa",
    "price": 640,
    "image": "/images/categories_hd/shower_systems.webp",
    "galleryImages": [
      "/images/categories_hd/shower_systems.webp",
      "/images/showers/hero_shower_banner.webp"
    ],
    "lifestyleImage": "/images/showers/hero_shower_banner.webp",
    "rating": 4.9,
    "reviewCount": 19,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      }
    ],
    "specs": {
      "material": "Forged Brass 3-Port Body",
      "mountingType": "Concealed",
      "shape": "Round",
      "dimensions": "Dial Ø: 70mm",
      "weight": "1.9 kg"
    },
    "description": "Select effortlessly between ceiling rain shower, wall bath spout, and hand shower wand from one discreet dial.",
    "features": [
      "3 distinct outlet ports",
      "Smooth detent clicks at each position"
    ],
    "whatsInTheBox": {
      "included": [
        "3-Way Diverter Valve",
        "Architectural Round Cover Plate",
        "Dial"
      ]
    },
    "installationGuide": "In-wall rough-in.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_shower_01",
    "modelNumber": "SMPL-S-201",
    "name": "Aura 350mm Circular Rain Shower Rose",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Overhead Rain Showers",
    "collection": "Contemporary",
    "space": "Wellness & Spa",
    "price": 890,
    "image": "/images/products_ultra/shower_rose_hd.webp",
    "galleryImages": [
      "/images/products_ultra/shower_rose_hd.webp",
      "/images/featured/showers.webp"
    ],
    "lifestyleImage": "/images/featured/showers.webp",
    "rating": 5,
    "reviewCount": 89,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79",
        "code": "RG"
      }
    ],
    "specs": {
      "material": "Laser-Welded 304 Stainless Steel (2mm ultra-slim)",
      "flowRate": "9.0 L/min with Pressure Compensating Aeration",
      "mountingType": "Ceiling-Mounted",
      "shape": "Round",
      "connectionSize": "G 1/2\" Threaded Dropper Arm Inlet",
      "dimensions": "Ø: 350mm · Thickness: 2.2mm · Dropper Arm: 150mm",
      "weight": "2.8 kg"
    },
    "description": "An architectural statement in sheer hydrotherapy. Engineered with 184 micro-perforated anti-limescale silicone nozzles that emulate the gentle cadence of summer rainfall.",
    "features": [
      "Ultra-slim 2.2mm edge profile",
      "Swivel ball joint allows fine angle adjustment"
    ],
    "whatsInTheBox": {
      "included": [
        "350mm Shower Rose",
        "150mm Solid Brass Ceiling Dropper Arm",
        "Decorative Ceiling Flange"
      ]
    },
    "installationGuide": "Mounts directly to ceiling rough-in dropped pipe. Thread tape included.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true,
    "isFeatured": true
  },
  {
    "id": "prod_shower_03",
    "modelNumber": "SMPL-S-203",
    "name": "Cascata 400mm Ultra-Slim Square Shower Rose",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Overhead Rain Showers",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 980,
    "image": "/images/categories_hd/showers.webp",
    "galleryImages": [
      "/images/categories_hd/showers.webp",
      "/images/showers/hero_shower_banner.webp"
    ],
    "lifestyleImage": "/images/showers/hero_shower_banner.webp",
    "rating": 4.8,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Brushed Nickel",
        "hex": "#8a8885",
        "code": "BN"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "High-Tensile 316 Marine Grade Stainless Steel",
      "flowRate": "10.5 L/min",
      "mountingType": "Ceiling-Mounted",
      "shape": "Square",
      "dimensions": "400mm x 400mm x 2mm",
      "weight": "3.1 kg"
    },
    "description": "Geometric minimalism engineered for wide-coverage body soaking. Crafted from marine-grade stainless steel impervious to humidity and corrosion.",
    "features": [
      "Extra-wide 400mm square curtain of water",
      "Laser-cut perimeter edges"
    ],
    "whatsInTheBox": {
      "included": [
        "400mm Square Rose",
        "Square Ceiling Arm",
        "Ceiling Flange"
      ]
    },
    "installationGuide": "Installs on 1/2\" female ceiling brass outlet.",
    "inStock": true,
    "leadTimeDays": 3,
    "isNew": true
  },
  {
    "id": "prod_bath_01",
    "modelNumber": "SMPL-B-301",
    "name": "Elysium Freestanding Monolithic Stone Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Organic Luxury",
    "space": "Master Bathroom",
    "price": 4200,
    "image": "/images/products_ultra/stone_bathtub_hd.webp",
    "galleryImages": [
      "/images/products_ultra/stone_bathtub_hd.webp",
      "/images/hero_sanctuary_4k.webp"
    ],
    "lifestyleImage": "/images/hero_sanctuary_4k.webp",
    "rating": 5,
    "reviewCount": 44,
    "finishes": [
      {
        "name": "Honed Limestone",
        "hex": "#d6cdb7",
        "code": "HL"
      },
      {
        "name": "Travertine Sand",
        "hex": "#bfb093",
        "code": "TS"
      },
      {
        "name": "Charcoal Basalt",
        "hex": "#3d3c3a",
        "code": "CB"
      }
    ],
    "specs": {
      "material": "Solid Honed Natural Mineral Composite Stone",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1750mm · W: 820mm · H: 560mm · Depth: 450mm",
      "weight": "148 kg (Dry) · 410 kg (Filled)"
    },
    "description": "Carved with sculpted organic lines, the Elysium freestanding stone bath delivers deep thermal insulation and an enduring architectural anchor for master ensuites.",
    "features": [
      "Superior thermal heat retention maintains water warmth 40% longer",
      "Seamless velvet-matte honed stone surface"
    ],
    "whatsInTheBox": {
      "included": [
        "Elysium Monolithic Tub",
        "Integrated Concealed Overflow Channel",
        "Matching Stone Pop-Up Waste Plug"
      ]
    },
    "installationGuide": "Weight requires reinforced floor joists or concrete slab foundation.",
    "inStock": true,
    "leadTimeDays": 5,
    "isBestseller": true
  },
  {
    "id": "prod_basin_01",
    "modelNumber": "SMPL-W-401",
    "name": "Dune Monolithic Stone Vessel Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Stone Vessel Basins",
    "collection": "Organic Luxury",
    "space": "Master Bathroom",
    "price": 1380,
    "image": "/images/products_ultra/stone_basin_hd.webp",
    "galleryImages": [
      "/images/products_ultra/stone_basin_hd.webp",
      "/images/sanitaryware/wash_basin_countertop.webp"
    ],
    "lifestyleImage": "/images/sanitaryware/wash_basin_countertop.webp",
    "rating": 5,
    "reviewCount": 73,
    "finishes": [
      {
        "name": "Natural Sandstone",
        "hex": "#c5b8a5",
        "code": "NS"
      },
      {
        "name": "Limestone Cream",
        "hex": "#dfd7c8",
        "code": "LC"
      },
      {
        "name": "Nero Marble",
        "hex": "#242322",
        "code": "NM"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79",
        "code": "RG"
      }
    ],
    "specs": {
      "material": "Hand-Finished Natural Quarried Sandstone Block",
      "mountingType": "Countertop",
      "shape": "Oval",
      "dimensions": "L: 550mm · W: 380mm · H: 140mm",
      "weight": "18.5 kg"
    },
    "description": "Each Dune basin is carved from an individual block of natural stone with bespoke sedimentary strata. Sealed with hydrophobic Nano-Shield to prevent oil and cosmetic staining.",
    "features": [
      "Unique natural stone grain pattern on every individual piece",
      "Nano-Shield oleophobic seal"
    ],
    "whatsInTheBox": {
      "included": [
        "Dune Stone Basin",
        "Matching Stone Cap Free-Flowing Waste Plug"
      ]
    },
    "installationGuide": "Sits on vanity countertop; requires 45mm waste cut-out.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true,
    "isFeatured": true
  },
  {
    "id": "prod_basin_05",
    "modelNumber": "SMPL-W-405",
    "name": "Forma Rectangular Thin-Rim Vessel Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Countertop Bowls",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 860,
    "image": "/images/categories_hd/wash_basins.webp",
    "galleryImages": [
      "/images/categories_hd/wash_basins.webp",
      "/images/featured/bathrooms.webp"
    ],
    "lifestyleImage": "/images/featured/bathrooms.webp",
    "rating": 4.8,
    "reviewCount": 33,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "High-Density Titanium Ceramic (4mm rim)",
      "mountingType": "Countertop",
      "shape": "Rectangular",
      "dimensions": "L: 600mm · W: 380mm · H: 120mm",
      "weight": "12.8 kg"
    },
    "description": "Ultra-thin 4mm wall profile engineered from titanium-infused ceramic for razor-sharp geometric precision.",
    "features": [
      "Razor-sharp 4mm rim profile",
      "Generous 600mm interior wash area"
    ],
    "whatsInTheBox": {
      "included": [
        "Forma Basin",
        "Matching Ceramic Clicker Waste"
      ]
    },
    "installationGuide": "Countertop mounting.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_toilet_01",
    "modelNumber": "SMPL-T-501",
    "name": "Nura Rimless Wall-Hung WC Suite",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Rimless Wall-Hung WCs",
    "collection": "Minimalist",
    "space": "Guest Bathroom",
    "price": 1650,
    "image": "/images/products_ultra/toilet_commode_hd.webp",
    "galleryImages": [
      "/images/products_ultra/toilet_commode_hd.webp",
      "/images/sanitaryware/hero_sanitaryware.webp"
    ],
    "lifestyleImage": "/images/sanitaryware/hero_sanitaryware.webp",
    "rating": 4.9,
    "reviewCount": 62,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      },
      {
        "name": "Gloss Architectural White",
        "hex": "#ffffff",
        "code": "GW"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Vitreous China with CeraClean Glaze",
      "flowRate": "Dual-Flush 4.5L / 3.0L (WELS 4-Star)",
      "mountingType": "Rimless Wall-Hung",
      "shape": "Sculptural",
      "dimensions": "Projection: 540mm · W: 360mm · H: 340mm",
      "weight": "27.4 kg"
    },
    "description": "Engineered with a 360-degree cyclone vortex flush and open rimless bowl geometry that eliminates concealed bacteria crevices.",
    "features": [
      "Cyclone Vortex rimless flush technology",
      "Quick-release slim soft-close toilet seat with stainless steel hinges"
    ],
    "whatsInTheBox": {
      "included": [
        "Nura Wall-Hung Pan",
        "Slim Soft-Close UF Seat & Cover",
        "Concealed Pre-Wall Fixing Kit"
      ],
      "requiredSeparately": [
        "In-wall concealed cistern frame & flush plate"
      ]
    },
    "installationGuide": "Requires standard 180mm or 230mm fixing bolts on in-wall cistern frame.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
  },
  {
    "id": "prod_kitchen_01",
    "modelNumber": "SMPL-K-601",
    "name": "Aero Gooseneck Kitchen Mixer with Pull-Down Spray",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Gooseneck Pull-Down",
    "collection": "Contemporary",
    "space": "Kitchen",
    "price": 890,
    "image": "/images/products_ultra/kitchen_faucet_hd.webp",
    "galleryImages": [
      "/images/products_ultra/kitchen_faucet_hd.webp",
      "/images/featured/kitchens.webp"
    ],
    "lifestyleImage": "/images/featured/kitchens.webp",
    "rating": 4.9,
    "reviewCount": 82,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Stainless",
        "hex": "#9e9c98",
        "code": "BS"
      },
      {
        "name": "Rose Gold",
        "hex": "#B76E79",
        "code": "RG"
      }
    ],
    "specs": {
      "material": "Forged Solid DZR Brass with Magnetic Spray Docking",
      "cartridge": "35mm Ceramic Disc Cartridge",
      "flowRate": "7.0 L/min",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 420mm · Reach: 230mm · Spout Clearance: 220mm",
      "weight": "3.2 kg"
    },
    "description": "A sculptural culinary instrument. The weighted magnetic pull-down wand switches smoothly from aerated laminar stream to high-velocity power rinse.",
    "features": [
      "MagnaDock magnetic spray wand docking system",
      "Dual-mode aerated stream / power rinse spray"
    ],
    "whatsInTheBox": {
      "included": [
        "Aero Kitchen Mixer",
        "Counterweight & Retractable Hose",
        "Deck Clamp Assembly",
        "Connection Hoses"
      ]
    },
    "installationGuide": "Mounts to single 35mm kitchen sink or quartz countertop bore hole.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true,
    "isFeatured": true
  }
];
