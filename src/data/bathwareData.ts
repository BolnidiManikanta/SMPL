import { Product, SpaceCategory, StyleCollection, ProductCategoryItem } from "../types";

export const SPACES_DATA: SpaceCategory[] = [
  {
    "id": "master_bathroom",
    "title": "Master Bathroom",
    "image": "/images/spaces/master_bathroom.jpg",
    "description": "Generous sanctuaries balancing sculpted freestanding baths, double vanities, and natural ambient light.",
    "itemCount": 42
  },
  {
    "id": "guest_bathroom",
    "title": "Guest Bathroom",
    "image": "/images/spaces/guest_bathroom.jpg",
    "description": "Compact refinement with tactile stone surfaces, circular mirrors, and integrated brassware.",
    "itemCount": 28
  },
  {
    "id": "powder_room",
    "title": "Powder Room",
    "image": "/images/spaces/powder_room.jpg",
    "description": "Dramatic architectural powder rooms combining dark fluted stonework and wall-mounted brass spouts.",
    "itemCount": 19
  },
  {
    "id": "kitchen",
    "title": "Kitchen",
    "image": "/images/spaces/kitchen.jpg",
    "description": "Sculptural gooseneck mixers and workstation fittings engineered for culinary precision.",
    "itemCount": 24
  },
  {
    "id": "wellness_spa",
    "title": "Wellness & Spa",
    "image": "/images/spaces/wellness_spa.jpg",
    "description": "Sensory shower rain ceilings, waterfall cascades, and hydrotherapeutic wellness controls.",
    "itemCount": 31
  },
  {
    "id": "commercial_spaces",
    "title": "Commercial Spaces",
    "image": "/images/spaces/commercial_spaces.jpg",
    "description": "Heavy-traffic luxury fittings designed for boutique hospitality, private members clubs, and lounges.",
    "itemCount": 36
  }
];

export const STYLES_DATA: StyleCollection[] = [
  {
    "id": "contemporary",
    "title": "Contemporary",
    "image": "/images/styles/contemporary.jpg",
    "tagline": "Clean architectural profiles with tactile precision knurling.",
    "aesthetic": "Brushed Bronze & Warm Travertine"
  },
  {
    "id": "minimalist",
    "title": "Minimalist",
    "image": "/images/styles/minimalist.jpg",
    "tagline": "Pared-back geometry stripped of all ornamental excess.",
    "aesthetic": "Matte Black & Pure Ceramic"
  },
  {
    "id": "sculptural",
    "title": "Sculptural",
    "image": "/images/styles/sculptural.jpg",
    "tagline": "Flowing continuous curves and dramatic monolithic forms.",
    "aesthetic": "Hand-Polished Brass & Cast Bronze"
  },
  {
    "id": "timeless",
    "title": "Timeless",
    "image": "/images/styles/timeless.jpg",
    "tagline": "Crosshead handles and proportions inspired by heritage estates.",
    "aesthetic": "Aged Brass & Carrara Marble"
  },
  {
    "id": "modern_classic",
    "title": "Modern Classic",
    "image": "/images/styles/modern_classic.jpg",
    "tagline": "Fluted textures meeting modern high-precision ceramic cartridges.",
    "aesthetic": "Brushed Nickel & Fluted Glass"
  },
  {
    "id": "organic_luxury",
    "title": "Organic Luxury",
    "image": "/images/styles/organic_luxury.jpg",
    "tagline": "Raw honed limestone, earthen terrazzo, and tactile earth tones.",
    "aesthetic": "Honed Sandstone & Raw Bronze"
  }
];

export const CATEGORIES_DATA: ProductCategoryItem[] = [
  {
    "id": "basin_faucets",
    "title": "Basin Faucets",
    "image": "/images/categories_hd/basin_faucets.jpg",
    "count": 8,
    "department": "Faucets",
    "subcategories": [
      "Single Lever Mixers",
      "Tall Vessel Mixers",
      "Wall-Mounted Mixers",
      "Sensor & Touchless"
    ]
  },
  {
    "id": "kitchen_faucets",
    "title": "Kitchen Faucets",
    "image": "/images/categories_hd/kitchen_faucets.jpg",
    "count": 7,
    "department": "Kitchen",
    "subcategories": [
      "Gooseneck Pull-Down",
      "Bridge Mixers",
      "Filtered Water Taps",
      "Flexible Spray"
    ]
  },
  {
    "id": "showers",
    "title": "Showers",
    "image": "/images/categories_hd/showers.jpg",
    "count": 8,
    "department": "Showers",
    "subcategories": [
      "Overhead Rain Showers",
      "Hand Showers",
      "Ceiling Flush Roses",
      "Body Jets"
    ]
  },
  {
    "id": "shower_systems",
    "title": "Shower Systems",
    "image": "/images/categories_hd/shower_systems.jpg",
    "count": 5,
    "department": "Showers",
    "subcategories": [
      "Concealed Thermostatic",
      "Exposed Column Sets",
      "Dual-Outlet Diverters",
      "Wellness Systems"
    ]
  },
  {
    "id": "wash_basins",
    "title": "Wash Basins",
    "image": "/images/categories_hd/wash_basins.jpg",
    "count": 7,
    "department": "Bathroom",
    "subcategories": [
      "Countertop Bowls",
      "Stone Vessel Basins",
      "Wall-Hung Basins",
      "Freestanding Pedestals"
    ]
  },
  {
    "id": "bathtubs",
    "title": "Bathtubs",
    "image": "/images/categories_hd/bathtubs.jpg",
    "count": 8,
    "department": "Bathroom",
    "subcategories": [
      "Freestanding Stone Baths",
      "Soaking Tubs",
      "Built-in Tubs",
      "Japanese Deep Soak"
    ]
  },
  {
    "id": "toilets",
    "title": "Toilets",
    "image": "/images/categories_hd/toilets.jpg",
    "count": 7,
    "department": "Sanitaryware",
    "subcategories": [
      "Rimless Wall-Hung WCs",
      "Smart Bidet Toilets",
      "Concealed Cisterns",
      "Flush Plates"
    ]
  }
];

export const ALL_PRODUCTS: Product[] = [
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
    "image": "/images/showcase/studio_gold_basin_mixer.jpg",
    "galleryImages": [
      "/images/categories_hd/basin_faucets.jpg",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "image": "/images/categories_hd/basin_faucets.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      "/images/categories_hd/basin_faucets.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
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
    "id": "prod_faucet_03",
    "modelNumber": "SMPL-F-103",
    "name": "Timeless Wall-Mounted 3-Hole Basin Set",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Timeless",
    "space": "Powder Room",
    "price": 1120,
    "image": "/images/showcase/studio_gold_basin_mixer.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 38,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Machined Solid Brass with Hand-Rubbed Patina",
      "cartridge": "1/4-Turn German Ceramic Spindles",
      "flowRate": "5.5 L/min",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Spout Length: 210mm · Handle Centers: 200mm",
      "weight": "3.4 kg"
    },
    "description": "Heritage architectural proportions designed for luxury pre-wall installation. Features tactile crosshead hot and cold dials with laser-engraved H/C indices.",
    "features": [
      "Pre-assembled universal brass in-wall rough-in body included",
      "Full forged crosshead handles"
    ],
    "whatsInTheBox": {
      "included": [
        "Concealed In-Wall Brass Manifold",
        "External 210mm Spout",
        "Pair of Crosshead Controls",
        "Trim Plates"
      ]
    },
    "installationGuide": "In-wall rough-in installed before tiling. Rough-in depth 65mm–85mm.",
    "inStock": true,
    "leadTimeDays": 2,
    "isFeatured": true,
    "isBestseller": true
  },
  {
    "id": "prod_faucet_04",
    "modelNumber": "SMPL-F-104",
    "name": "Sensory Touchless Architectural Tap",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Sensor & Touchless",
    "collection": "Minimalist",
    "space": "Commercial Spaces",
    "price": 890,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 33,
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
      "material": "Solid DZR Brass with Bi-Stable Solenoid Valve",
      "flowRate": "3.8 L/min WELS 6-Star",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 175mm · Reach: 130mm",
      "weight": "2.3 kg"
    },
    "description": "High-precision infrared electronic sensing meets understated architectural form. Operates seamlessly on mains or battery power for touch-free residential and hospitality powder rooms.",
    "features": [
      "Rapid 0.2s activation response",
      "Automatic 60s safety shut-off hygiene flush"
    ],
    "whatsInTheBox": {
      "included": [
        "Touchless Spout",
        "Control Box with Solenoid Valve",
        "Battery Pack (4x AA) & Mains Adapter"
      ]
    },
    "installationGuide": "Deck mounted through standard 35mm hole.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_05",
    "modelNumber": "SMPL-F-105",
    "name": "Knurled Progressive Wall Mixer with Spout",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 940,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 27,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Solid Forged Brass with Diamond Knurled Dial",
      "cartridge": "Progressive Ceramic Cartridge",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Spout Length: 190mm · Dial Ø: 55mm",
      "weight": "2.5 kg"
    },
    "description": "Progressive cartridge technology starts water flow cold and warms with rotation, conserving hot water energy while providing exquisite tactile precision.",
    "features": [
      "Diamond-cut knurled rotation grip",
      "Single minimalist dial controls volume and temperature"
    ],
    "whatsInTheBox": {
      "included": [
        "Wall Spout",
        "Knurled Progressive Dial",
        "In-Wall Concealed Rough-In Box"
      ]
    },
    "installationGuide": "In-wall rough-in depth 60-80mm.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_06",
    "modelNumber": "SMPL-F-106",
    "name": "Sculptural Waterfall Laminar Basin Mixer",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Single Lever Mixers",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 820,
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.8,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Heavy DZR Brass with Channeled Waterfall Lip",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 185mm · Spout Reach: 150mm · Lip Width: 42mm",
      "weight": "2.4 kg"
    },
    "description": "Open-channel laminar water release designed to evoke natural spring brooks in private master bathroom suites.",
    "features": [
      "Non-splash open laminar water ribbon",
      "Solid brass heavy cast chassis"
    ],
    "whatsInTheBox": {
      "included": [
        "Waterfall Basin Mixer",
        "Flexible Connection Hoses",
        "Fast-Fix Mounting Ring"
      ]
    },
    "installationGuide": "Deck-mounted 35mm bore hole.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_faucet_07",
    "modelNumber": "SMPL-F-107",
    "name": "Pillar Heritage Crosshead Basin Taps Pair",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Single Lever Mixers",
    "collection": "Timeless",
    "space": "Guest Bathroom",
    "price": 520,
    "image": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_07",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.7,
    "reviewCount": 22,
    "finishes": [
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      },
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      }
    ],
    "specs": {
      "material": "Polished Brass with Triple Nickel-Chrome Plating",
      "mountingType": "Deck-Mounted",
      "shape": "Round",
      "dimensions": "H: 140mm · Reach: 95mm (Pair Hot & Cold)",
      "weight": "1.8 kg"
    },
    "description": "Authentic 2-hole twin pillar taps for classic pedestal basins and traditional cloakroom washstands.",
    "features": [
      "Ceramic disc 1/4 turn valves",
      "Traditional porcelain index caps"
    ],
    "whatsInTheBox": {
      "included": [
        "1x Hot Tap",
        "1x Cold Tap",
        "Brass Backnuts & Washers"
      ]
    },
    "installationGuide": "Mounts through two 28mm basin holes.",
    "inStock": true,
    "leadTimeDays": 2
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
    "image": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_08",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_faucet_09",
    "modelNumber": "SMPL-F-109",
    "name": "Monolith Floor-Mounted Freestanding Bath Filler",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Floor-Mounted Fillers",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 1480,
    "image": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_09",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
      "/images/hero_luxury_bathware.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 4.9,
    "reviewCount": 51,
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
      }
    ],
    "specs": {
      "material": "Heavy Cast DZR Brass",
      "cartridge": "40mm High-Flow Bath Fill Cartridge (22 L/min)",
      "mountingType": "Floor-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 980mm · Spout Reach: 240mm · Base Plate Ø: 135mm",
      "weight": "6.8 kg"
    },
    "description": "The definitive architectural accompaniment to a freestanding stone bathtub. Equipped with a high-flow aerated bath spout and a discrete cylindrical hand shower.",
    "features": [
      "High-flow 22 L/min tub fill rate",
      "Integrated diverter valve for pencil hand spray"
    ],
    "whatsInTheBox": {
      "included": [
        "Floor Pillar Spout",
        "Solid Brass In-Floor Rough-In Box",
        "Micro-Spray Handset & 1.5m Hose"
      ]
    },
    "installationGuide": "Mounts to concrete or timber subfloor using high-stability tripod rough-in bracket.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
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
    "image": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_10",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_11",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_faucet_12",
    "modelNumber": "SMPL-F-112",
    "name": "Horizon Wall-Mounted Waterfall Bath Filler Spout",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 720,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_12",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 4.9,
    "reviewCount": 24,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Machined Heavy Brass Plate",
      "flowRate": "24 L/min high capacity",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "Projection: 180mm · Width: 80mm",
      "weight": "2.8 kg"
    },
    "description": "Fills freestanding and built-in bathtubs in minutes via an elegant wide-ribbon sheet of water cascading from the wall.",
    "features": [
      "High-capacity 24 L/min flow rate",
      "Concealed internal splash baffle"
    ],
    "whatsInTheBox": {
      "included": [
        "Waterfall Spout",
        "Threaded Brass Wall Connector",
        "Wall Flange"
      ]
    },
    "installationGuide": "1/2\" female wall connection.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_13",
    "modelNumber": "SMPL-F-113",
    "name": "Solis Floor-Mounted Gooseneck Bath Filler",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Floor-Mounted Fillers",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 1560,
    "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_13",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 5,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Solid Brass with Hand-Polished Heritage Finish",
      "mountingType": "Floor-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 1040mm · Spout Reach: 260mm",
      "weight": "7.2 kg"
    },
    "description": "Arched swan-neck silhouette reminiscent of grand country estates, modernized with ceramic disc valving and integrated hand shower.",
    "features": [
      "Curved gooseneck spout",
      "Complete floor anchor kit"
    ],
    "whatsInTheBox": {
      "included": [
        "Solis Floor Spout",
        "Hand Wand & Metal Hose",
        "Subfloor Anchor Manifold"
      ]
    },
    "installationGuide": "Floor-mounted.",
    "inStock": true,
    "leadTimeDays": 3
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
    "image": "/images/categories_hd/showers.jpg",
    "galleryImages": [
      "/images/categories_hd/showers.jpg",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "id": "prod_shower_02",
    "modelNumber": "SMPL-S-202",
    "name": "Thermostatic 2-Way Concealed System with Wand",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Concealed Thermostatic",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 1240,
    "image": "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=85&v=prod_shower_02",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.9,
    "reviewCount": 57,
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
      "material": "Forged Brass Thermostatic Valve Body with Vernet Element (France)",
      "operatingPressure": "2.0 – 6.0 bar",
      "mountingType": "Concealed",
      "shape": "Rectangular",
      "dimensions": "Faceplate: 240mm x 120mm · Wand Length: 200mm",
      "weight": "4.5 kg"
    },
    "description": "Maintains exact 38°C water temperature irrespective of household pressure fluctuations. The discrete 2-way diverter toggles between overhead rain shower and handheld wand.",
    "features": [
      "Vernet thermostatic cartridge with 38°C anti-scald lock",
      "Concealed pre-wall rough-in box included"
    ],
    "whatsInTheBox": {
      "included": [
        "Concealed Thermostatic Valve Box",
        "Architectural Dual-Dial Trim Plate",
        "Brass Hand Wand & Wall Outlet Bracket"
      ]
    },
    "installationGuide": "Requires 70mm minimum cavity wall clearance.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
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
    "image": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=85&v=prod_shower_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_shower_04",
    "modelNumber": "SMPL-S-204",
    "name": "Hydro-Relax Triple Flush Body Jet Pack",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Body Jets",
    "collection": "Contemporary",
    "space": "Wellness & Spa",
    "price": 760,
    "image": "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=85&v=prod_shower_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 18,
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
      }
    ],
    "specs": {
      "material": "Solid Brass Flush Body Jets (Set of 3)",
      "mountingType": "Wall-Mounted",
      "shape": "Square",
      "dimensions": "50mm x 50mm Face per Jet",
      "weight": "1.6 kg"
    },
    "description": "Concealed body spray nozzles engineered to target lumbar and thoracic muscle tension with high-velocity hydro-massage jets.",
    "features": [
      "360° omnidirectional ball-joint angle targeting",
      "Flush-to-tile low profile design"
    ],
    "whatsInTheBox": {
      "included": [
        "3x Flush Body Spray Heads",
        "Pre-Wall Rough-In Connectors"
      ]
    },
    "installationGuide": "Plumbed into balanced pressure shower loop.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_shower_05",
    "modelNumber": "SMPL-S-205",
    "name": "Vanguard Architectural Exposed Shower Column",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Exposed Column Sets",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 1850,
    "image": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85&v=prod_shower_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 34,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "External Heavy Brass Riser Tube with Dual Valves",
      "mountingType": "Wall-Mounted",
      "shape": "Sculptural",
      "dimensions": "Total Height: 1250mm · Overhead Rose Ø: 300mm",
      "weight": "8.4 kg"
    },
    "description": "Showcases exposed European plumbing with heavy industrial pipework, porcelain-lever diverter, and expansive overhead rose.",
    "features": [
      "Exposed architectural riser pipe",
      "Adjustable height cradle for hand shower"
    ],
    "whatsInTheBox": {
      "included": [
        "Exposed Column Riser",
        "300mm Overhead Rose",
        "Telephone Handset & Hose",
        "Wall Brackets"
      ]
    },
    "installationGuide": "Mounts directly over hot and cold wall supply elbows at 150mm centers.",
    "inStock": true,
    "leadTimeDays": 3,
    "isFeatured": true
  },
  {
    "id": "prod_shower_06",
    "modelNumber": "SMPL-S-206",
    "name": "Cylindrical Micro-Spray Brass Hand Shower Set",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Hand Showers",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 360,
    "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85&v=prod_shower_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.8,
    "reviewCount": 47,
    "finishes": [
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Machined Brass Wand with Double-Interlock Hose",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Wand: 210mm x 25mm · Hose: 1500mm",
      "weight": "1.1 kg"
    },
    "description": "Precision-drilled micro-apertures produce a concentrated laminar rinse spray without splashing.",
    "features": [
      "Cool-Touch insulated brass handle",
      "Anti-twist swivel hose nut"
    ],
    "whatsInTheBox": {
      "included": [
        "Cylindrical Brass Wand",
        "Wall Outlet Bracket",
        "1.5m Smooth Metal Hose"
      ]
    },
    "installationGuide": "Standard 1/2\" wall supply elbow.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_shower_07",
    "modelNumber": "SMPL-S-207",
    "name": "Cascade Horizon Dual-Flow Rain & Waterfall Head",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Overhead Rain Showers",
    "collection": "Sculptural",
    "space": "Wellness & Spa",
    "price": 1390,
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85&v=prod_shower_07",
    "galleryImages": [
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 21,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Wall-Mounted Dual-Chamber Solid Brass Body",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "550mm x 220mm Projection",
      "weight": "5.2 kg"
    },
    "description": "Toggle between a wide 300-nozzle rainfall deluge and a smooth, sheet-like cascading waterfall for neck and shoulder relaxation.",
    "features": [
      "Dual water inlets for independent waterfall and rain activation",
      "Concealed wall bracket"
    ],
    "whatsInTheBox": {
      "included": [
        "Dual-Function Shower Head",
        "Rough-In Wall Box",
        "Installation Template"
      ]
    },
    "installationGuide": "Requires dual supply pipes in wall.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_shower_08",
    "modelNumber": "SMPL-S-208",
    "name": "Lumina Flush-Ceiling Recessed Rain System",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Wellness Systems",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 2100,
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85&v=prod_shower_08",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 16,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "500mm x 500mm Flush Ceiling Plate with Perimeter Warm Halo LED",
      "mountingType": "Ceiling-Mounted",
      "shape": "Square",
      "dimensions": "500mm x 500mm x 0mm (recessed)",
      "weight": "6.5 kg"
    },
    "description": "Mounts 100% flush into false ceilings with ambient warm 2700K lighting and 4-zone chromotherapy hydrotherapy.",
    "features": [
      "100% flush ceiling integration",
      "Integrated IP68 waterproof LED lighting"
    ],
    "whatsInTheBox": {
      "included": [
        "Recessed Shower Chassis",
        "Flush Faceplate",
        "LED Driver Box",
        "Ceiling Suspension Brackets"
      ]
    },
    "installationGuide": "Requires 140mm ceiling plenum cavity space.",
    "inStock": true,
    "leadTimeDays": 4
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
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85&v=prod_bath_01",
    "galleryImages": [
      "/images/categories_hd/bathtubs.jpg",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
      "/images/hero_luxury_bathware.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
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
    "id": "prod_bath_02",
    "modelNumber": "SMPL-B-302",
    "name": "Kyoto Deep Soaking Japanese Vessel Tub",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Soaking Tubs",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 3650,
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85&v=prod_bath_02",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 28,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      },
      {
        "name": "Smoked Basalt",
        "hex": "#403d39",
        "code": "SB"
      }
    ],
    "specs": {
      "material": "Cast Solid Surface Acrylic Composite",
      "mountingType": "Freestanding",
      "shape": "Round",
      "dimensions": "Ø: 1350mm · H: 650mm · Internal Depth: 560mm",
      "weight": "112 kg"
    },
    "description": "Inspired by traditional Japanese Onsen bathing rituals. The compact circular footprint permits full shoulder-submerged contemplation in space-constrained luxury sanctuaries.",
    "features": [
      "High 560mm water depth for full torso immersion",
      "Integrated ergonomic interior bench seat"
    ],
    "whatsInTheBox": {
      "included": [
        "Kyoto Soaking Tub",
        "Solid Surface Pop-Up Waste",
        "Flexible Waste Coupling"
      ]
    },
    "installationGuide": "Freestanding installation over floor trap.",
    "inStock": true,
    "leadTimeDays": 4,
    "isNew": true
  },
  {
    "id": "prod_bath_03",
    "modelNumber": "SMPL-B-303",
    "name": "Aria Fluted Back-to-Wall Freestanding Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Built-in Tubs",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 3890,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85&v=prod_bath_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.8,
    "reviewCount": 19,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Mineral Composite with Vertical Fluted Outer Perimeter",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1600mm · W: 800mm · H: 580mm",
      "weight": "128 kg"
    },
    "description": "Combines the freestanding luxury aesthetic with a flat rear ledge that mounts flush against tiled walls, eliminating cleaning crevices.",
    "features": [
      "Flat rear wall ledge provides shelf for bath oils",
      "Architectural ribbed outer skirt"
    ],
    "whatsInTheBox": {
      "included": [
        "Aria Bath",
        "Pop-Up Waste Assembly"
      ]
    },
    "installationGuide": "Installed against back wall.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_bath_04",
    "modelNumber": "SMPL-B-304",
    "name": "Tivoli Organic Oval Mineral Composite Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Organic Luxury",
    "space": "Master Bathroom",
    "price": 3450,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85&v=prod_bath_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 22,
    "finishes": [
      {
        "name": "Travertine Sand",
        "hex": "#bfb093",
        "code": "TS"
      },
      {
        "name": "Limestone Cream",
        "hex": "#dfd7c8",
        "code": "LC"
      }
    ],
    "specs": {
      "material": "Honed Dolomite Rock Resin Composite",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1700mm · W: 780mm · H: 540mm",
      "weight": "135 kg"
    },
    "description": "Gently curved contours cradling the body for extended relaxation. Honed finish resists scratching and limescale accumulation.",
    "features": [
      "Slim 12mm rim profile",
      "Integrated overflow system"
    ],
    "whatsInTheBox": {
      "included": [
        "Tivoli Tub",
        "Chrome & Brass Waste Plugs"
      ]
    },
    "installationGuide": "Freestanding installation.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_bath_05",
    "modelNumber": "SMPL-B-305",
    "name": "Hera Double-Ended Slipper Freestanding Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 4600,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&v=prod_bath_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 5,
    "reviewCount": 15,
    "finishes": [
      {
        "name": "Charcoal Basalt",
        "hex": "#3d3c3a",
        "code": "CB"
      },
      {
        "name": "Honed Limestone",
        "hex": "#d6cdb7",
        "code": "HL"
      }
    ],
    "specs": {
      "material": "Solid Quarried Basalt Stone Matrix",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1800mm · W: 850mm · H: 640mm",
      "weight": "165 kg"
    },
    "description": "Dramatic dual-sloped backrests allow comfortable two-person bathing with central drain placement and commanding sculptural presence.",
    "features": [
      "High double-ended backrests provide neck support",
      "Extra-deep 480mm soaking depth"
    ],
    "whatsInTheBox": {
      "included": [
        "Hera Basalt Bath",
        "Solid Brass Drain Flange"
      ]
    },
    "installationGuide": "Slab installation.",
    "inStock": true,
    "leadTimeDays": 5
  },
  {
    "id": "prod_bath_06",
    "modelNumber": "SMPL-B-306",
    "name": "Zen Square Corner Soaking Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Japanese Deep Soak",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 3200,
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85&v=prod_bath_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.7,
    "reviewCount": 14,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Antibacterial Sanitary Composite",
      "mountingType": "Freestanding",
      "shape": "Square",
      "dimensions": "1400mm x 1400mm x 600mm",
      "weight": "115 kg"
    },
    "description": "Square corner footprint designed to create a private meditation immersion bath in compact modern luxury apartments.",
    "features": [
      "Compact footprint fits standard corners",
      "Internal immersion step"
    ],
    "whatsInTheBox": {
      "included": [
        "Zen Tub",
        "Drain Fittings"
      ]
    },
    "installationGuide": "Corner placement.",
    "inStock": true,
    "leadTimeDays": 4
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
    "image": "/images/categories_hd/wash_basins.jpg",
    "galleryImages": [
      "/images/categories_hd/wash_basins.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "id": "prod_basin_02",
    "modelNumber": "SMPL-W-402",
    "name": "Ribbed Fluted Ceramic Table-Top Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Countertop Bowls",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 780,
    "image": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=85&v=prod_basin_02",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 46,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      },
      {
        "name": "Matte Clay Terracotta",
        "hex": "#a6725b",
        "code": "MC"
      },
      {
        "name": "Matte Charcoal",
        "hex": "#343331",
        "code": "MCH"
      }
    ],
    "specs": {
      "material": "Ultra-Fine Vitreous China",
      "mountingType": "Countertop",
      "shape": "Round",
      "dimensions": "Ø: 400mm · H: 130mm",
      "weight": "9.2 kg"
    },
    "description": "Architectural vertical fluting wraps the outer perimeter, contrasting with an ultra-smooth, stain-resistant glazed bowl interior.",
    "features": [
      "Slim 5mm micro-edge rim",
      "Hygienic anti-bacterial glaze"
    ],
    "whatsInTheBox": {
      "included": [
        "Ribbed Fluted Basin",
        "Universal Ceramic Slotted Clicker Waste"
      ]
    },
    "installationGuide": "Mounts on countertop surfaces.",
    "inStock": true,
    "leadTimeDays": 2,
    "isNew": true
  },
  {
    "id": "prod_basin_03",
    "modelNumber": "SMPL-W-403",
    "name": "Cirque Under-Counter Seamless Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Countertop Bowls",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 540,
    "image": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=85&v=prod_basin_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 38,
    "finishes": [
      {
        "name": "Gloss Architectural White",
        "hex": "#ffffff",
        "code": "GW"
      },
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Fine Fireclay with High-Gloss EasyClean Glaze",
      "mountingType": "Countertop",
      "shape": "Rectangular",
      "dimensions": "L: 500mm · W: 360mm · Depth: 160mm",
      "weight": "11.4 kg"
    },
    "description": "Installs underneath marble, granite, or quartz vanity countertops for clean wipe-down ease and continuous stone slabs.",
    "features": [
      "Under-mount rim with secure stainless clamp brackets",
      "Integrated overflow channel"
    ],
    "whatsInTheBox": {
      "included": [
        "Under-Counter Basin",
        "Under-Mount Clamping Hardware",
        "Template"
      ]
    },
    "installationGuide": "Epoxied beneath stone countertop cut-out.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_basin_04",
    "modelNumber": "SMPL-W-404",
    "name": "Torino Freestanding Cylindrical Pedestal Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Freestanding Pedestals",
    "collection": "Sculptural",
    "space": "Powder Room",
    "price": 2150,
    "image": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85&v=prod_basin_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 17,
    "finishes": [
      {
        "name": "Honed Limestone",
        "hex": "#d6cdb7",
        "code": "HL"
      },
      {
        "name": "Smoked Basalt",
        "hex": "#403d39",
        "code": "SB"
      }
    ],
    "specs": {
      "material": "Single Carved Monolithic Column Stone Composite",
      "mountingType": "Freestanding",
      "shape": "Round",
      "dimensions": "Ø: 440mm · H: 850mm",
      "weight": "48.0 kg"
    },
    "description": "A monolithic pillar standing freely in minimalist powder rooms and boutique hospitality spaces, pairing seamlessly with wall or ceiling taps.",
    "features": [
      "Floor-to-basin monolithic seamless column",
      "Internal floor waste concealment cavity"
    ],
    "whatsInTheBox": {
      "included": [
        "Torino Column Basin",
        "Floor Mounting Anchors",
        "Flexible Waste Pipe"
      ]
    },
    "installationGuide": "Floor anchored.",
    "inStock": true,
    "leadTimeDays": 4,
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
    "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85&v=prod_basin_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_basin_06",
    "modelNumber": "SMPL-W-406",
    "name": "Petra Wall-Hung Honed Marble Basin with Towel Rail",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Organic Luxury",
    "space": "Powder Room",
    "price": 1890,
    "image": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85&v=prod_basin_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 20,
    "finishes": [
      {
        "name": "Nero Marble",
        "hex": "#242322",
        "code": "NM"
      },
      {
        "name": "Limestone Cream",
        "hex": "#dfd7c8",
        "code": "LC"
      }
    ],
    "specs": {
      "material": "Carved Natural Carrara / Nero Marble Slab with Brass Rail",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "L: 750mm · W: 450mm · H: 160mm",
      "weight": "34.0 kg"
    },
    "description": "Cantilevered natural marble block suspended directly on walls with an integrated front-facing solid brass towel rail.",
    "features": [
      "Cantilevered wall-hung monolithic stone",
      "Heavy-duty in-wall steel mounting chassis"
    ],
    "whatsInTheBox": {
      "included": [
        "Marble Basin",
        "Integrated Brass Towel Bar",
        "In-Wall Structural Brackets"
      ]
    },
    "installationGuide": "Mounts to reinforced masonry or steel wall frame.",
    "inStock": true,
    "leadTimeDays": 4
  },
  {
    "id": "prod_basin_07",
    "modelNumber": "SMPL-W-407",
    "name": "Oasis Semi-Recessed Countertop Basin",
    "department": "Bathroom",
    "category": "Wash Basins",
    "subcategory": "Countertop Bowls",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 620,
    "image": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85&v=prod_basin_07",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 26,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Vitreous China Glaze",
      "mountingType": "Countertop",
      "shape": "Oval",
      "dimensions": "L: 480mm · Projection: 420mm",
      "weight": "10.5 kg"
    },
    "description": "Overhangs slim vanity cabinets to maximize internal storage while providing full bowl washbasin volume.",
    "features": [
      "Semi-recessed front apron",
      "Compatible with narrow 300mm vanity depth"
    ],
    "whatsInTheBox": {
      "included": [
        "Oasis Basin",
        "Fixing Hardware",
        "Countertop Template"
      ]
    },
    "installationGuide": "Vanity cut-out installation.",
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
    "image": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=85&v=prod_toilet_01",
    "galleryImages": [
      "/images/categories_hd/toilets.jpg",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_toilet_02",
    "modelNumber": "SMPL-T-502",
    "name": "Sensia Smart Electronic Bidet Toilet",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Smart Bidet Toilets",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 2850,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85&v=prod_toilet_02",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 39,
    "finishes": [
      {
        "name": "Gloss Architectural White",
        "hex": "#ffffff",
        "code": "GW"
      },
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Vitreous China with Integrated Thermal Electronics",
      "mountingType": "Rimless Wall-Hung",
      "shape": "Sculptural",
      "dimensions": "Projection: 580mm · W: 380mm · H: 410mm",
      "weight": "34.2 kg"
    },
    "description": "The apex of wellness hygiene. Features heated seat, self-cleaning antibacterial wand, warm air dryer, automatic deodorization, and intuitive remote control.",
    "features": [
      "Adjustable water temperature & pressure nozzle",
      "Radar proximity automatic open/close lid"
    ],
    "whatsInTheBox": {
      "included": [
        "Sensia Smart Pan",
        "Bespoke Aluminum RF Remote Control & Wall Cradle",
        "Water Filter & Isolation Valve"
      ]
    },
    "installationGuide": "Requires concealed electrical outlet and water point behind frame.",
    "inStock": true,
    "leadTimeDays": 3,
    "isFeatured": true
  },
  {
    "id": "prod_toilet_03",
    "modelNumber": "SMPL-T-503",
    "name": "Solitary One-Piece Back-to-Wall Floor Pan",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Rimless Wall-Hung WCs",
    "collection": "Minimalist",
    "space": "Guest Bathroom",
    "price": 1350,
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85&v=prod_toilet_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 27,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Solid Vitreous China Floor Pan",
      "mountingType": "Freestanding",
      "shape": "Round",
      "dimensions": "Projection: 560mm · W: 370mm · H: 420mm",
      "weight": "31.5 kg"
    },
    "description": "Floor-standing back-to-wall pan that conceals all plumbing and traps flush against tiled walls without visible silicone joints.",
    "features": [
      "Universal S-trap and P-trap connection",
      "Slim UF soft-close seat"
    ],
    "whatsInTheBox": {
      "included": [
        "Floor Pan",
        "Concealed Floor Fixing Brackets",
        "Seat Assembly"
      ]
    },
    "installationGuide": "Floor anchored to waste trap.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_cistern_01",
    "modelNumber": "SMPL-C-504",
    "name": "Pneumatic In-Wall Concealed Cistern Frame",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Concealed Cisterns",
    "collection": "Minimalist",
    "space": "Guest Bathroom",
    "price": 620,
    "image": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85&v=prod_cistern_01",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 35,
    "finishes": [
      {
        "name": "Powder-Coated Steel",
        "hex": "#2b303a",
        "code": "ST"
      }
    ],
    "specs": {
      "material": "Galvanized Structural Steel Frame with Blow-Molded HDPE Cistern",
      "mountingType": "Concealed",
      "shape": "Rectangular",
      "dimensions": "H: 1140mm · W: 500mm · Depth: 120mm",
      "weight": "14.5 kg"
    },
    "description": "Heavy-duty 400kg load-tested pre-wall installation frame. Sound-insulated flush tank prevents water rushing noise through living spaces.",
    "features": [
      "Slim 120mm depth fits inside standard 2x4 stud walls",
      "Tool-free pneumatic button hose connections"
    ],
    "whatsInTheBox": {
      "included": [
        "Self-Supporting Structural Frame",
        "Dual-Flush Cistern Tank",
        "Waste Elbow & In-Wall Fasteners"
      ]
    },
    "installationGuide": "Secured to floor slab and rear stud wall before drywall.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_flush_01",
    "modelNumber": "SMPL-C-505",
    "name": "Linea Architectural Dual-Flush Actuator Plate",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Flush Plates",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 340,
    "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85&v=prod_flush_01",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 43,
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
      }
    ],
    "specs": {
      "material": "Solid Forged Brass Faceplate with Micro-Pneumatic Actuation",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "240mm x 150mm x 6mm",
      "weight": "1.2 kg"
    },
    "description": "Ultra-slim 6mm solid brass flush plate with tactile dual-flush round buttons connecting directly to concealed pneumatic cisterns.",
    "features": [
      "Slim 6mm wall projection",
      "Anti-fingerprint PVD surface protection"
    ],
    "whatsInTheBox": {
      "included": [
        "Solid Brass Actuator Plate",
        "Mounting Frame",
        "2x Pneumatic Tubes"
      ]
    },
    "installationGuide": "Clicks into concealed cistern rough-in aperture.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_flush_02",
    "modelNumber": "SMPL-C-506",
    "name": "Quadra Minimalist Push Plate",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Flush Plates",
    "collection": "Minimalist",
    "space": "Guest Bathroom",
    "price": 290,
    "image": "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=1200&q=85&v=prod_flush_02",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 25,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      }
    ],
    "specs": {
      "material": "Anodized Aircraft-Grade Aluminum",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "235mm x 145mm x 4mm",
      "weight": "0.95 kg"
    },
    "description": "Crisp rectangular actuation keys flush with the outer bezel plate.",
    "features": [
      "Ultra-thin 4mm plate profile",
      "Smooth hydraulic damping"
    ],
    "whatsInTheBox": {
      "included": [
        "Aluminum Actuator Plate",
        "Fixing Screws"
      ]
    },
    "installationGuide": "Snap-in installation.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_toilet_04",
    "modelNumber": "SMPL-T-507",
    "name": "Nura Matching Wall-Hung Ceramic Bidet Pan",
    "department": "Sanitaryware",
    "category": "Toilets",
    "subcategory": "Rimless Wall-Hung WCs",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 1190,
    "image": "/images/categories_hd/basin_faucets.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 18,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Vitreous China Glaze",
      "mountingType": "Rimless Wall-Hung",
      "shape": "Sculptural",
      "dimensions": "Projection: 540mm · W: 360mm",
      "weight": "22.0 kg"
    },
    "description": "Designed to mirror the Nura WC pan for side-by-side architectural coherence in master suites.",
    "features": [
      "Single tap-hole pre-punched for bidet mixer",
      "Concealed pre-wall fixing"
    ],
    "whatsInTheBox": {
      "included": [
        "Bidet Pan",
        "Wall Mount Screws",
        "Overflow Assembly"
      ]
    },
    "installationGuide": "Mounts on standard bidet frame.",
    "inStock": true,
    "leadTimeDays": 3
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
    "image": "/images/categories_hd/kitchen_faucets.jpg",
    "galleryImages": [
      "/images/categories_hd/kitchen_faucets.jpg",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
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
  },
  {
    "id": "prod_kitchen_02",
    "modelNumber": "SMPL-K-602",
    "name": "Bridge Industrial Dual-Handle Kitchen Tap",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Bridge Mixers",
    "collection": "Timeless",
    "space": "Kitchen",
    "price": 1150,
    "image": "/images/categories_hd/showers.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 29,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Solid Brass Casting with Precision Knurling",
      "mountingType": "Deck-Mounted",
      "shape": "Round",
      "dimensions": "H: 380mm · Reach: 215mm · Centers: 200mm",
      "weight": "4.1 kg"
    },
    "description": "Timeless architectural twin-handle bridge architecture engineered with modern ceramic valves and 360-degree swivel spout.",
    "features": [
      "Twin bridge deck mount with 200mm spread",
      "360° swivel spout clears large stockpots"
    ],
    "whatsInTheBox": {
      "included": [
        "Bridge Mixer Body",
        "Twin Deck Flanges",
        "2x Stainless Flexible Hoses"
      ]
    },
    "installationGuide": "Requires 2x 35mm deck holes spaced 200mm center-to-center.",
    "inStock": true,
    "leadTimeDays": 3,
    "isNew": true
  },
  {
    "id": "prod_kitchen_03",
    "modelNumber": "SMPL-K-603",
    "name": "Omni Pure Filtered Drinking Water Auxiliary Tap",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Filtered Water Taps",
    "collection": "Minimalist",
    "space": "Kitchen",
    "price": 480,
    "image": "/images/categories_hd/shower_systems.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 37,
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
      "material": "Lead-Free DZR Brass with Carbon Filtration Cartridge Compatibility",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 260mm · Reach: 140mm",
      "weight": "1.4 kg"
    },
    "description": "Slender dedicated filtered water tap delivering pristine ambient drinking water directly beside the primary kitchen mixer.",
    "features": [
      "1/4-turn ceramic valve",
      "Direct push-fit filter connection"
    ],
    "whatsInTheBox": {
      "included": [
        "Auxiliary Tap",
        "1/4\" Quick-Connect Tube Adapter",
        "Under-Sink Filter Coupling"
      ]
    },
    "installationGuide": "Single 25mm-30mm bore hole.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_kitchen_04",
    "modelNumber": "SMPL-K-604",
    "name": "Chef Pro Commercial Spring-Neck Kitchen Mixer",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Gooseneck Pull-Down",
    "collection": "Contemporary",
    "space": "Kitchen",
    "price": 1280,
    "image": "/images/categories_hd/wash_basins.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 42,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      },
      {
        "name": "Brushed Stainless",
        "hex": "#9e9c98",
        "code": "BS"
      }
    ],
    "specs": {
      "material": "Reinforced Stainless Steel Coil with Heavy Brass Body",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 520mm · Reach: 240mm",
      "weight": "4.8 kg"
    },
    "description": "Professional commercial-grade spring faucet engineered for serious home chefs with 360-degree reach across wide workstation sinks.",
    "features": [
      "Flexible heavy stainless spiral spring arm",
      "High-pressure spray trigger lock"
    ],
    "whatsInTheBox": {
      "included": [
        "Chef Pro Mixer",
        "Countertop Reinforcing Plate",
        "Hoses"
      ]
    },
    "installationGuide": "Deck mounted with reinforcing flange.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_kitchen_05",
    "modelNumber": "SMPL-K-605",
    "name": "Cubo L-Spout Contemporary Kitchen Tap",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Gooseneck Pull-Down",
    "collection": "Minimalist",
    "space": "Kitchen",
    "price": 920,
    "image": "/images/categories_hd/bathtubs.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Solid DZR Brass with Hidden Pull-Out Aerator",
      "mountingType": "Deck-Mounted",
      "shape": "Square",
      "dimensions": "H: 310mm · Reach: 220mm",
      "weight": "3.0 kg"
    },
    "description": "Architectural L-shaped profile with a seamless pull-out hidden aerator hose that maintains pure geometric lines when docked.",
    "features": [
      "Concealed pull-out hose tip",
      "360° swivel spout"
    ],
    "whatsInTheBox": {
      "included": [
        "Cubo Kitchen Tap",
        "Counterweight & Hose",
        "Deck Fasteners"
      ]
    },
    "installationGuide": "Deck mounted.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_acc_01",
    "modelNumber": "SMPL-A-701",
    "name": "Form Wall-Mounted Brass Soap Dispenser",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Soap Dispensers",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 220,
    "image": "/images/categories_hd/accessories.jpg",
    "galleryImages": [
      "/images/categories_hd/accessories.jpg",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 37,
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
      }
    ],
    "specs": {
      "material": "Frosted Acid-Etched Glass Bottle with Solid Brass Pump & Bracket",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "H: 165mm · Ø: 68mm · Projection: 110mm · Vol: 220ml",
      "weight": "0.85 kg"
    },
    "description": "Elevates daily rituals off the vanity surface. Heavy frosted glass bottle with a smooth non-clogging solid brass pump mechanism.",
    "features": [
      "Concealed wall mounting screws",
      "Non-drip silicone internal check valve"
    ],
    "whatsInTheBox": {
      "included": [
        "Frosted Glass Vessel",
        "Solid Brass Pump Head",
        "Wall Bracket & Stainless Screws"
      ]
    },
    "installationGuide": "Mounts to bathroom wall tiles with included drywall anchors.",
    "inStock": true,
    "leadTimeDays": 1,
    "isBestseller": true,
    "isFeatured": true
  },
  {
    "id": "prod_acc_02",
    "modelNumber": "SMPL-A-702",
    "name": "Linea 600mm Solid Brass Single Towel Rail",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Towel Bars & Hooks",
    "collection": "Minimalist",
    "space": "Master Bathroom",
    "price": 290,
    "image": "/images/categories_hd/accessories.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.9,
    "reviewCount": 53,
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
      }
    ],
    "specs": {
      "material": "Solid Forged Brass Bar with PVD Coating",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "L: 600mm · Projection: 70mm · Bar Profile: 15mm x 15mm",
      "weight": "1.4 kg"
    },
    "description": "Refined architectural square profile. Clean mitered joints and concealed rear fixings keep walls uncluttered and elegant.",
    "features": [
      "Solid forged brass construction will never rust",
      "Twin concealed wall brackets"
    ],
    "whatsInTheBox": {
      "included": [
        "600mm Towel Rail Bar",
        "2x Wall Mount Plates",
        "Hex Key & Fixings"
      ]
    },
    "installationGuide": "Standard screw fixing into wall studs or tile plugs.",
    "inStock": true,
    "leadTimeDays": 1,
    "isBestseller": true
  },
  {
    "id": "prod_acc_03",
    "modelNumber": "SMPL-A-703",
    "name": "Linea 600mm Double Towel Rail",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Towel Bars & Hooks",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 380,
    "image": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85&v=prod_acc_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 31,
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
      }
    ],
    "specs": {
      "material": "Forged Brass Dual Parallel Rails",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "L: 600mm · Depth: 125mm",
      "weight": "2.1 kg"
    },
    "description": "Dual staggered hanging rails provide ample airflow for fast bath sheet drying.",
    "features": [
      "Double capacity for master ensuites",
      "Heavy duty solid brass wall posts"
    ],
    "whatsInTheBox": {
      "included": [
        "Double Rail Assembly",
        "Fixing Screws"
      ]
    },
    "installationGuide": "Wall mounted.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_acc_04",
    "modelNumber": "SMPL-A-704",
    "name": "Linear Invisible Tile-Insert Shower Drain (900mm)",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Linear Floor Drains",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 380,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85&v=prod_acc_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 41,
    "finishes": [
      {
        "name": "Stainless Steel Tile Tray",
        "hex": "#8c9096",
        "code": "SS"
      },
      {
        "name": "Brushed Brass Channel",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black Channel",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "1.5mm Heavy Gauge 304 Stainless Steel",
      "mountingType": "Concealed",
      "shape": "Rectangular",
      "dimensions": "L: 900mm · W: 70mm · Channel Depth: 25mm · Outlet Ø: 50mm",
      "weight": "3.1 kg"
    },
    "description": "Allows bathroom floor tiles to be set directly into the drain cover for a seamless, near-invisible zero-threshold shower water exit.",
    "features": [
      "Reversible dual-face tray: tile-insert on one side, brushed plate on reverse",
      "Removable stainless hair strainer basket"
    ],
    "whatsInTheBox": {
      "included": [
        "900mm Linear Channel",
        "Reversible Tile-Insert Tray",
        "Hair Catcher & Lifting Key"
      ]
    },
    "installationGuide": "Installed flush with shower screed prior to waterproofing and tiling.",
    "inStock": true,
    "leadTimeDays": 2,
    "isNew": true
  },
  {
    "id": "prod_acc_05",
    "modelNumber": "SMPL-A-705",
    "name": "Ergo Solid Brass Bidet Health Faucet",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Health Faucets",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 260,
    "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85&v=prod_acc_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 54,
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
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Solid Forged Brass Wand with Stainless Double-Interlock Hose",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Wand: 140mm · Hose: 1200mm",
      "weight": "1.1 kg"
    },
    "description": "Premium bidet hygiene trigger spray crafted in solid forged brass with progressive thumb pressure release and reinforced hose.",
    "features": [
      "Anti-burst stainless steel flexible hose tested to 15 bar",
      "Precision thumb trigger modulation"
    ],
    "whatsInTheBox": {
      "included": [
        "Brass Trigger Wand",
        "1.2m Anti-Twist Hose",
        "Wall Holster Bracket with Integrated Stop Valve"
      ]
    },
    "installationGuide": "Connects to angle stop valve adjacent to WC pan.",
    "inStock": true,
    "leadTimeDays": 1,
    "isFeatured": true
  },
  {
    "id": "prod_acc_06",
    "modelNumber": "SMPL-A-706",
    "name": "Komorebi Heavy Cast Bronze Robe Hooks (Pair)",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Towel Bars & Hooks",
    "collection": "Timeless",
    "space": "Guest Bathroom",
    "price": 140,
    "image": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85&v=prod_acc_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 39,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Cast Solid Architectural Bronze",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Projection: 48mm · Flange Ø: 40mm (Pack of 2)",
      "weight": "0.6 kg"
    },
    "description": "Tactile circular peg hooks with knurled non-slip lip designed to hold heavy terry cloth bathrobes securely.",
    "features": [
      "Non-slip knurled retaining lip",
      "Heavy solid bronze casting"
    ],
    "whatsInTheBox": {
      "included": [
        "2x Bronze Robe Hooks",
        "Concealed Mounting Plates",
        "Wall Plugs"
      ]
    },
    "installationGuide": "Wall mounted.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_acc_07",
    "modelNumber": "SMPL-A-707",
    "name": "Architectural Toilet Paper Holder with Shelf",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Towel Bars & Hooks",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 240,
    "image": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85&v=prod_acc_07",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 45,
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
      }
    ],
    "specs": {
      "material": "Solid Brass Plate with Integrated Shelf",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "W: 160mm · D: 100mm · H: 85mm",
      "weight": "1.2 kg"
    },
    "description": "Combines roll dispenser with an upper rest surface designed to hold smartphones, incense dishes, or room fragrance.",
    "features": [
      "Integrated machined top shelf",
      "Non-slip rubber inlay on shelf surface"
    ],
    "whatsInTheBox": {
      "included": [
        "Paper Holder with Shelf",
        "Wall Fixings"
      ]
    },
    "installationGuide": "Wall mounted.",
    "inStock": true,
    "leadTimeDays": 1
  },
  {
    "id": "prod_acc_08",
    "modelNumber": "SMPL-A-708",
    "name": "Halo Circular Anti-Fog Backlit LED Vanity Mirror (800mm)",
    "department": "Accessories",
    "category": "Accessories",
    "subcategory": "Soap Dispensers",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 890,
    "image": "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=85&v=prod_acc_08",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 5,
    "reviewCount": 52,
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
      }
    ],
    "specs": {
      "material": "5mm Copper-Free Silver Mirror with Aluminum Chasis and Brass Frame",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Ø: 800mm · Depth: 35mm",
      "weight": "8.5 kg"
    },
    "description": "A glowing architectural halo. Features integrated heated demister pad that keeps the glass crystal-clear during hot showers, and capacitive touch sensor.",
    "features": [
      "Defogger thermal heating pad",
      "Warm 2700K to 4000K tunable indirect cove glow",
      "Touch sensor with memory dimmer"
    ],
    "whatsInTheBox": {
      "included": [
        "800mm Halo Mirror",
        "Heavy Duty Z-Bar Wall Bracket",
        "Hardwire Cable & Junction Box"
      ]
    },
    "installationGuide": "Hardwired to bathroom lighting circuit.",
    "inStock": true,
    "leadTimeDays": 2,
    "isFeatured": true
  },
  {
    "id": "prod_shower_09",
    "modelNumber": "SMPL-SH-106",
    "name": "Flush Ceiling Waterfall & Rain Cascade (500x500mm)",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Ceiling Flush Roses",
    "collection": "Contemporary",
    "space": "Wellness & Spa",
    "price": 1450,
    "image": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=85&v=prod_shower_09",
    "galleryImages": [
      "/images/categories_hd/showers.jpg",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.9,
    "reviewCount": 16,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#D4AF37",
        "code": "BBR"
      }
    ],
    "specs": {
      "material": "Solid 304 Stainless Steel & Architectural PVD",
      "flowRate": "16 L/min Dual Stage",
      "operatingPressure": "3.0 - 5.0 bar",
      "mountingType": "Ceiling Flush Concealed",
      "dimensions": "500 x 500 x 18 mm",
      "weight": "8.2 kg",
      "certifications": [
        "WaterMark",
        "WELS 3-Star"
      ]
    },
    "description": "Flush ceiling installation delivering an immersive volumetric tropical downpour and continuous laminar waterfall cascade.",
    "features": [
      "Dual function: Rain & Waterfall",
      "Anti-scale silicone nozzles",
      "Zero-bezel architectural frame"
    ],
    "whatsInTheBox": {
      "included": [
        "Ceiling Cassette",
        "Rough-in box",
        "Mounting hardware"
      ]
    },
    "installationGuide": "Concealed ceiling framing required with minimum 120mm plenum depth.",
    "inStock": true,
    "leadTimeDays": 3,
    "isBestseller": true
  },
  {
    "id": "prod_shower_10",
    "modelNumber": "SMPL-SH-107",
    "name": "Minimalist Round Stick Hand Shower with Wall Union",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Hand Showers",
    "collection": "Minimalist",
    "space": "Guest Bathroom",
    "price": 340,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&v=prod_shower_10",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.8,
    "reviewCount": 22,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#A8A59D",
        "code": "BN"
      }
    ],
    "specs": {
      "material": "Precision Machined DZR Brass",
      "flowRate": "9 L/min",
      "operatingPressure": "1.5 - 5.0 bar",
      "mountingType": "Wall Mounted",
      "dimensions": "24 x 210 mm wand, 1.5m hose",
      "weight": "1.4 kg"
    },
    "description": "Architectural stick wand with high velocity micro-jets and integrated check valve.",
    "features": [
      "Silicone smooth-clean face",
      "Smooth non-twist metallic hose",
      "Integrated check valve"
    ],
    "whatsInTheBox": {
      "included": [
        "Hand shower wand",
        "Integrated bracket outlet",
        "1.5m hose"
      ]
    },
    "installationGuide": "Connects directly to standard 1/2 inch BSP male thread.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_shower_11",
    "modelNumber": "SMPL-SH-108",
    "name": "Architectural Concealed Rotary Thermostatic Trim",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Body Jets",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 760,
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85&v=prod_shower_11",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.9,
    "reviewCount": 14,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#D4AF37",
        "code": "BBR"
      },
      {
        "name": "Chrome",
        "hex": "#E5E5E5",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Forged Heavy Brass",
      "flowRate": "28 L/min high flow",
      "operatingPressure": "2.0 - 5.0 bar",
      "mountingType": "Concealed Wall Mounted",
      "dimensions": "150 x 220 mm faceplate",
      "weight": "3.2 kg"
    },
    "description": "High-flow concealed thermostatic trim with Vernet cartridge ensuring 38°C safety anti-scald shutoff.",
    "features": [
      "Vernet Wax Thermostat element",
      "Push-button diverter action",
      "Tactile knurled bezel"
    ],
    "whatsInTheBox": {
      "included": [
        "Solid faceplate",
        "Brass handles",
        "Concealed rough-in kit"
      ]
    },
    "installationGuide": "Rough-in installation during wall rough plumb stage.",
    "inStock": true,
    "leadTimeDays": 3,
    "isNew": true
  },
  {
    "id": "prod_shsys_04",
    "modelNumber": "SMPL-SS-104",
    "name": "Sculptural Floor-Mounted Freestanding Shower & Bath Column",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Concealed Thermostatic",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 2150,
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85&v=prod_shsys_04",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "rating": 5,
    "reviewCount": 9,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#D4AF37",
        "code": "BBR"
      },
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Solid Heavy Cast Brass",
      "flowRate": "18 L/min",
      "operatingPressure": "2.5 - 5.0 bar",
      "mountingType": "Floor Mounted",
      "dimensions": "1050 mm height, 220 mm projection",
      "weight": "12.4 kg"
    },
    "description": "Dramatic freestanding floor pillar featuring progressive temperature cartridge and minimalist wand bracket.",
    "features": [
      "In-floor sub-assembly included",
      "360-degree swivel spout",
      "Solid forged base ring"
    ],
    "whatsInTheBox": {
      "included": [
        "Floor pillar",
        "Underfloor rough-in kit",
        "Hand shower & hose"
      ]
    },
    "installationGuide": "Floor mounting requires under-slab or subfloor rough-in valve casting.",
    "inStock": true,
    "leadTimeDays": 5
  },
  {
    "id": "prod_shsys_05",
    "modelNumber": "SMPL-SS-105",
    "name": "Smart Digital Touch-Control Hydrotherapy System",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Wellness Systems",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 2850,
    "image": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=85&v=prod_shsys_05",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.9,
    "reviewCount": 11,
    "finishes": [
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      },
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Glass Faceplate & Brass Valve Manifold",
      "flowRate": "35 L/min high flow",
      "operatingPressure": "2.0 - 5.0 bar",
      "mountingType": "Flush Wall Mounted",
      "dimensions": "180 x 120 mm touchscreen",
      "weight": "5.5 kg"
    },
    "description": "Precision digital thermostatic controller with programmable presets for morning awaken and evening hydro-soak routines.",
    "features": [
      "Capacitive touch controls",
      "Dual solenoid mixing valve",
      "Precise +/- 0.5C digital thermostatic control"
    ],
    "whatsInTheBox": {
      "included": [
        "Digital controller",
        "Digital mixing valve",
        "Power supply box"
      ]
    },
    "installationGuide": "Requires 240V power junction and remote or in-wall valve mounting.",
    "inStock": true,
    "leadTimeDays": 4,
    "isNew": true
  },
  {
    "id": "prod_kitchen_06",
    "modelNumber": "SMPL-K-106",
    "name": "Commercial Spring Pre-Rinse Culinary Sink Mixer",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Gooseneck Pull-Down",
    "collection": "Contemporary",
    "space": "Kitchen",
    "price": 890,
    "image": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=85&v=prod_kitchen_06",
    "galleryImages": [
      "/images/categories_hd/kitchen_faucets.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.9,
    "reviewCount": 29,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      },
      {
        "name": "Brushed Nickel",
        "hex": "#A8A59D",
        "code": "BN"
      }
    ],
    "specs": {
      "material": "Solid DZR Brass & Stainless Spring",
      "cartridge": "35mm Kerox Ceramic",
      "flowRate": "8 L/min",
      "operatingPressure": "1.5 - 5.0 bar",
      "mountingType": "Deck Mounted",
      "dimensions": "520 mm height, 240 mm projection",
      "weight": "3.8 kg"
    },
    "description": "Professional culinary arch mixer with high-tension coil spring and magnetic spray docking collar.",
    "features": [
      "Dual function aerated stream & powerful rinse",
      "Magnetic docking latch",
      "Heavy duty stainless spring"
    ],
    "whatsInTheBox": {
      "included": [
        "Mixer assembly",
        "Flexible braided hoses",
        "Stabilizer plate"
      ]
    },
    "installationGuide": "Single hole 35mm cut-out on stainless steel or stone worktop.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
  },
  {
    "id": "prod_kitchen_07",
    "modelNumber": "SMPL-K-107",
    "name": "Tri-Pure 3-in-1 Instant Boiling & Filtered Tap",
    "department": "Kitchen",
    "category": "Kitchen Faucets",
    "subcategory": "Filtered Water Taps",
    "collection": "Minimalist",
    "space": "Kitchen",
    "price": 1350,
    "image": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85&v=prod_kitchen_07",
    "galleryImages": [
      "/images/categories_hd/kitchen_faucets.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.8,
    "reviewCount": 18,
    "finishes": [
      {
        "name": "Brushed Bronze",
        "hex": "#8E7864",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1D1D1B",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Pure Brass & Stainless Tank",
      "flowRate": "5 L/min filtered, 2.5 L/min boiling",
      "mountingType": "Deck Mounted",
      "dimensions": "410 mm height, 215 mm reach",
      "weight": "8.5 kg"
    },
    "description": "Integrated boiling and micron-filtration auxiliary mixer with child-safety locking button.",
    "features": [
      "98C boiling water on demand",
      "Sub-micron carbon block filtration",
      "Cool-touch spout exterior"
    ],
    "whatsInTheBox": {
      "included": [
        "3-way tap",
        "Under-counter boiler unit",
        "Filter cartridge and head"
      ]
    },
    "installationGuide": "Requires standard 13A socket and cold water tee valve under sink.",
    "inStock": true,
    "leadTimeDays": 3,
    "isNew": true
  },
  {
    "id": "prod_tub_07",
    "modelNumber": "SMPL-TB-107",
    "name": "Monolithic Nero Fluted Oval Freestanding Stone Bath (1700mm)",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Modern Classic",
    "space": "Master Bathroom",
    "price": 3850,
    "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85&v=prod_tub_07",
    "galleryImages": [
      "/images/categories_hd/bathtubs.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "rating": 5,
    "reviewCount": 8,
    "finishes": [
      {
        "name": "Honed Nero Marquina",
        "hex": "#222222",
        "code": "NM"
      },
      {
        "name": "Warm Travertine",
        "hex": "#D4C7B5",
        "code": "TR"
      }
    ],
    "specs": {
      "material": "Honed Mineral Solid Surface Composite",
      "mountingType": "Freestanding",
      "dimensions": "1700 x 820 x 580 mm",
      "weight": "148 kg",
      "certifications": [
        "CE",
        "CUPC",
        "ISO9001"
      ]
    },
    "description": "Sculpted exterior vertical fluting with silk-smooth interior contouring and integrated overflow.",
    "features": [
      "Thermal insulation core retains heat 40% longer",
      "Non-porous stain resistant",
      "Includes matching pop-up waste"
    ],
    "whatsInTheBox": {
      "included": [
        "Bathtub",
        "Brass pop-up waste",
        "Flexible drainage connector"
      ]
    },
    "installationGuide": "Ensure floor load capacity supports filled bath (approx 420kg total).",
    "inStock": true,
    "leadTimeDays": 7,
    "isNew": true
  },
  {
    "id": "prod_tub_08",
    "modelNumber": "SMPL-TB-108",
    "name": "Aura Curved Back-to-Wall Deep Soaking Bathtub (1600mm)",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Soaking Tubs",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 2450,
    "image": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85&v=prod_tub_08",
    "galleryImages": [
      "/images/categories_hd/bathtubs.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    "rating": 4.8,
    "reviewCount": 15,
    "finishes": [
      {
        "name": "Warm White Matte",
        "hex": "#F5F3EF",
        "code": "WWM"
      },
      {
        "name": "Sandstone Beige",
        "hex": "#D8CBB7",
        "code": "SB"
      }
    ],
    "specs": {
      "material": "Lucite Cast Acrylic with Resin Stone Core",
      "mountingType": "Back to Wall",
      "dimensions": "1600 x 780 x 590 mm",
      "weight": "78 kg"
    },
    "description": "Back-to-wall flat edge allows tight tiling while preserving sculptured freestanding silhouette on visible faces.",
    "features": [
      "Flat back ledger for deck mixer or alcove tiling",
      "Slim 20mm edge rim",
      "Integrated linear slot overflow"
    ],
    "whatsInTheBox": {
      "included": [
        "Bathtub",
        "Adjustable levelling feet",
        "Chrome push waste"
      ]
    },
    "installationGuide": "Silicon perimeter seal to wall tile interface.",
    "inStock": true,
    "leadTimeDays": 4
  }
];

export const BESTSELLER_PRODUCTS: Product[] = [
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
    "image": "/images/showcase/studio_gold_basin_mixer.jpg",
    "galleryImages": [
      "/images/categories_hd/basin_faucets.jpg",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "image": "/images/categories_hd/basin_faucets.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85",
      "/images/categories_hd/basin_faucets.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
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
    "id": "prod_faucet_03",
    "modelNumber": "SMPL-F-103",
    "name": "Timeless Wall-Mounted 3-Hole Basin Set",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Timeless",
    "space": "Powder Room",
    "price": 1120,
    "image": "/images/showcase/studio_gold_basin_mixer.jpg",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 38,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Machined Solid Brass with Hand-Rubbed Patina",
      "cartridge": "1/4-Turn German Ceramic Spindles",
      "flowRate": "5.5 L/min",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Spout Length: 210mm · Handle Centers: 200mm",
      "weight": "3.4 kg"
    },
    "description": "Heritage architectural proportions designed for luxury pre-wall installation. Features tactile crosshead hot and cold dials with laser-engraved H/C indices.",
    "features": [
      "Pre-assembled universal brass in-wall rough-in body included",
      "Full forged crosshead handles"
    ],
    "whatsInTheBox": {
      "included": [
        "Concealed In-Wall Brass Manifold",
        "External 210mm Spout",
        "Pair of Crosshead Controls",
        "Trim Plates"
      ]
    },
    "installationGuide": "In-wall rough-in installed before tiling. Rough-in depth 65mm–85mm.",
    "inStock": true,
    "leadTimeDays": 2,
    "isFeatured": true,
    "isBestseller": true
  },
  {
    "id": "prod_faucet_04",
    "modelNumber": "SMPL-F-104",
    "name": "Sensory Touchless Architectural Tap",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Sensor & Touchless",
    "collection": "Minimalist",
    "space": "Commercial Spaces",
    "price": 890,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "reviewCount": 33,
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
      "material": "Solid DZR Brass with Bi-Stable Solenoid Valve",
      "flowRate": "3.8 L/min WELS 6-Star",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 175mm · Reach: 130mm",
      "weight": "2.3 kg"
    },
    "description": "High-precision infrared electronic sensing meets understated architectural form. Operates seamlessly on mains or battery power for touch-free residential and hospitality powder rooms.",
    "features": [
      "Rapid 0.2s activation response",
      "Automatic 60s safety shut-off hygiene flush"
    ],
    "whatsInTheBox": {
      "included": [
        "Touchless Spout",
        "Control Box with Solenoid Valve",
        "Battery Pack (4x AA) & Mains Adapter"
      ]
    },
    "installationGuide": "Deck mounted through standard 35mm hole.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_05",
    "modelNumber": "SMPL-F-105",
    "name": "Knurled Progressive Wall Mixer with Spout",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Contemporary",
    "space": "Guest Bathroom",
    "price": 940,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 27,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte Black",
        "hex": "#1c1b1a",
        "code": "MB"
      }
    ],
    "specs": {
      "material": "Solid Forged Brass with Diamond Knurled Dial",
      "cartridge": "Progressive Ceramic Cartridge",
      "mountingType": "Wall-Mounted",
      "shape": "Round",
      "dimensions": "Spout Length: 190mm · Dial Ø: 55mm",
      "weight": "2.5 kg"
    },
    "description": "Progressive cartridge technology starts water flow cold and warms with rotation, conserving hot water energy while providing exquisite tactile precision.",
    "features": [
      "Diamond-cut knurled rotation grip",
      "Single minimalist dial controls volume and temperature"
    ],
    "whatsInTheBox": {
      "included": [
        "Wall Spout",
        "Knurled Progressive Dial",
        "In-Wall Concealed Rough-In Box"
      ]
    },
    "installationGuide": "In-wall rough-in depth 60-80mm.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_06",
    "modelNumber": "SMPL-F-106",
    "name": "Sculptural Waterfall Laminar Basin Mixer",
    "department": "Faucets",
    "category": "Basin Faucets",
    "subcategory": "Single Lever Mixers",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 820,
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_06",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.8,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Chrome",
        "hex": "#d4d8db",
        "code": "CR"
      }
    ],
    "specs": {
      "material": "Heavy DZR Brass with Channeled Waterfall Lip",
      "mountingType": "Deck-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 185mm · Spout Reach: 150mm · Lip Width: 42mm",
      "weight": "2.4 kg"
    },
    "description": "Open-channel laminar water release designed to evoke natural spring brooks in private master bathroom suites.",
    "features": [
      "Non-splash open laminar water ribbon",
      "Solid brass heavy cast chassis"
    ],
    "whatsInTheBox": {
      "included": [
        "Waterfall Basin Mixer",
        "Flexible Connection Hoses",
        "Fast-Fix Mounting Ring"
      ]
    },
    "installationGuide": "Deck-mounted 35mm bore hole.",
    "inStock": true,
    "leadTimeDays": 3
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
    "image": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_08",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_faucet_09",
    "modelNumber": "SMPL-F-109",
    "name": "Monolith Floor-Mounted Freestanding Bath Filler",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Floor-Mounted Fillers",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 1480,
    "image": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_09",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
      "/images/hero_luxury_bathware.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 4.9,
    "reviewCount": 51,
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
      }
    ],
    "specs": {
      "material": "Heavy Cast DZR Brass",
      "cartridge": "40mm High-Flow Bath Fill Cartridge (22 L/min)",
      "mountingType": "Floor-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 980mm · Spout Reach: 240mm · Base Plate Ø: 135mm",
      "weight": "6.8 kg"
    },
    "description": "The definitive architectural accompaniment to a freestanding stone bathtub. Equipped with a high-flow aerated bath spout and a discrete cylindrical hand shower.",
    "features": [
      "High-flow 22 L/min tub fill rate",
      "Integrated diverter valve for pencil hand spray"
    ],
    "whatsInTheBox": {
      "included": [
        "Floor Pillar Spout",
        "Solid Brass In-Floor Rough-In Box",
        "Micro-Spray Handset & 1.5m Hose"
      ]
    },
    "installationGuide": "Mounts to concrete or timber subfloor using high-stability tripod rough-in bracket.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
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
    "image": "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_10",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_11",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_faucet_12",
    "modelNumber": "SMPL-F-112",
    "name": "Horizon Wall-Mounted Waterfall Bath Filler Spout",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Wall-Mounted Mixers",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 720,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_12",
    "galleryImages": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 4.9,
    "reviewCount": 24,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Machined Heavy Brass Plate",
      "flowRate": "24 L/min high capacity",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "Projection: 180mm · Width: 80mm",
      "weight": "2.8 kg"
    },
    "description": "Fills freestanding and built-in bathtubs in minutes via an elegant wide-ribbon sheet of water cascading from the wall.",
    "features": [
      "High-capacity 24 L/min flow rate",
      "Concealed internal splash baffle"
    ],
    "whatsInTheBox": {
      "included": [
        "Waterfall Spout",
        "Threaded Brass Wall Connector",
        "Wall Flange"
      ]
    },
    "installationGuide": "1/2\" female wall connection.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_faucet_13",
    "modelNumber": "SMPL-F-113",
    "name": "Solis Floor-Mounted Gooseneck Bath Filler",
    "department": "Faucets",
    "category": "Bath Faucets",
    "subcategory": "Floor-Mounted Fillers",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 1560,
    "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85&v=prod_faucet_13",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 5,
    "reviewCount": 31,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Solid Brass with Hand-Polished Heritage Finish",
      "mountingType": "Floor-Mounted",
      "shape": "Sculptural",
      "dimensions": "H: 1040mm · Spout Reach: 260mm",
      "weight": "7.2 kg"
    },
    "description": "Arched swan-neck silhouette reminiscent of grand country estates, modernized with ceramic disc valving and integrated hand shower.",
    "features": [
      "Curved gooseneck spout",
      "Complete floor anchor kit"
    ],
    "whatsInTheBox": {
      "included": [
        "Solis Floor Spout",
        "Hand Wand & Metal Hose",
        "Subfloor Anchor Manifold"
      ]
    },
    "installationGuide": "Floor-mounted.",
    "inStock": true,
    "leadTimeDays": 3
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
    "image": "/images/categories_hd/showers.jpg",
    "galleryImages": [
      "/images/categories_hd/showers.jpg",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
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
    "id": "prod_shower_02",
    "modelNumber": "SMPL-S-202",
    "name": "Thermostatic 2-Way Concealed System with Wand",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Concealed Thermostatic",
    "collection": "Sculptural",
    "space": "Master Bathroom",
    "price": 1240,
    "image": "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=85&v=prod_shower_02",
    "galleryImages": [
      "/images/categories_hd/shower_systems.jpg",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
      "/images/curated_retreat_suite.jpg"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.9,
    "reviewCount": 57,
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
      "material": "Forged Brass Thermostatic Valve Body with Vernet Element (France)",
      "operatingPressure": "2.0 – 6.0 bar",
      "mountingType": "Concealed",
      "shape": "Rectangular",
      "dimensions": "Faceplate: 240mm x 120mm · Wand Length: 200mm",
      "weight": "4.5 kg"
    },
    "description": "Maintains exact 38°C water temperature irrespective of household pressure fluctuations. The discrete 2-way diverter toggles between overhead rain shower and handheld wand.",
    "features": [
      "Vernet thermostatic cartridge with 38°C anti-scald lock",
      "Concealed pre-wall rough-in box included"
    ],
    "whatsInTheBox": {
      "included": [
        "Concealed Thermostatic Valve Box",
        "Architectural Dual-Dial Trim Plate",
        "Brass Hand Wand & Wall Outlet Bracket"
      ]
    },
    "installationGuide": "Requires 70mm minimum cavity wall clearance.",
    "inStock": true,
    "leadTimeDays": 2,
    "isBestseller": true
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
    "image": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=85&v=prod_shower_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
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
    "id": "prod_shower_04",
    "modelNumber": "SMPL-S-204",
    "name": "Hydro-Relax Triple Flush Body Jet Pack",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Body Jets",
    "collection": "Contemporary",
    "space": "Wellness & Spa",
    "price": 760,
    "image": "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=85&v=prod_shower_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 18,
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
      }
    ],
    "specs": {
      "material": "Solid Brass Flush Body Jets (Set of 3)",
      "mountingType": "Wall-Mounted",
      "shape": "Square",
      "dimensions": "50mm x 50mm Face per Jet",
      "weight": "1.6 kg"
    },
    "description": "Concealed body spray nozzles engineered to target lumbar and thoracic muscle tension with high-velocity hydro-massage jets.",
    "features": [
      "360° omnidirectional ball-joint angle targeting",
      "Flush-to-tile low profile design"
    ],
    "whatsInTheBox": {
      "included": [
        "3x Flush Body Spray Heads",
        "Pre-Wall Rough-In Connectors"
      ]
    },
    "installationGuide": "Plumbed into balanced pressure shower loop.",
    "inStock": true,
    "leadTimeDays": 2
  },
  {
    "id": "prod_shower_05",
    "modelNumber": "SMPL-S-205",
    "name": "Vanguard Architectural Exposed Shower Column",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Exposed Column Sets",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 1850,
    "image": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85&v=prod_shower_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 34,
    "finishes": [
      {
        "name": "Aged Bronze",
        "hex": "#584636",
        "code": "AB"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "External Heavy Brass Riser Tube with Dual Valves",
      "mountingType": "Wall-Mounted",
      "shape": "Sculptural",
      "dimensions": "Total Height: 1250mm · Overhead Rose Ø: 300mm",
      "weight": "8.4 kg"
    },
    "description": "Showcases exposed European plumbing with heavy industrial pipework, porcelain-lever diverter, and expansive overhead rose.",
    "features": [
      "Exposed architectural riser pipe",
      "Adjustable height cradle for hand shower"
    ],
    "whatsInTheBox": {
      "included": [
        "Exposed Column Riser",
        "300mm Overhead Rose",
        "Telephone Handset & Hose",
        "Wall Brackets"
      ]
    },
    "installationGuide": "Mounts directly over hot and cold wall supply elbows at 150mm centers.",
    "inStock": true,
    "leadTimeDays": 3,
    "isFeatured": true
  },
  {
    "id": "prod_shower_07",
    "modelNumber": "SMPL-S-207",
    "name": "Cascade Horizon Dual-Flow Rain & Waterfall Head",
    "department": "Showers",
    "category": "Showers",
    "subcategory": "Overhead Rain Showers",
    "collection": "Sculptural",
    "space": "Wellness & Spa",
    "price": 1390,
    "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85&v=prod_shower_07",
    "galleryImages": [
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 21,
    "finishes": [
      {
        "name": "Gunmetal",
        "hex": "#3f4247",
        "code": "GM"
      },
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      }
    ],
    "specs": {
      "material": "Wall-Mounted Dual-Chamber Solid Brass Body",
      "mountingType": "Wall-Mounted",
      "shape": "Rectangular",
      "dimensions": "550mm x 220mm Projection",
      "weight": "5.2 kg"
    },
    "description": "Toggle between a wide 300-nozzle rainfall deluge and a smooth, sheet-like cascading waterfall for neck and shoulder relaxation.",
    "features": [
      "Dual water inlets for independent waterfall and rain activation",
      "Concealed wall bracket"
    ],
    "whatsInTheBox": {
      "included": [
        "Dual-Function Shower Head",
        "Rough-In Wall Box",
        "Installation Template"
      ]
    },
    "installationGuide": "Requires dual supply pipes in wall.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_shower_08",
    "modelNumber": "SMPL-S-208",
    "name": "Lumina Flush-Ceiling Recessed Rain System",
    "department": "Showers",
    "category": "Shower Systems",
    "subcategory": "Wellness Systems",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 2100,
    "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85&v=prod_shower_08",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 5,
    "reviewCount": 16,
    "finishes": [
      {
        "name": "Brushed Brass",
        "hex": "#bfa06b",
        "code": "BB"
      },
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "500mm x 500mm Flush Ceiling Plate with Perimeter Warm Halo LED",
      "mountingType": "Ceiling-Mounted",
      "shape": "Square",
      "dimensions": "500mm x 500mm x 0mm (recessed)",
      "weight": "6.5 kg"
    },
    "description": "Mounts 100% flush into false ceilings with ambient warm 2700K lighting and 4-zone chromotherapy hydrotherapy.",
    "features": [
      "100% flush ceiling integration",
      "Integrated IP68 waterproof LED lighting"
    ],
    "whatsInTheBox": {
      "included": [
        "Recessed Shower Chassis",
        "Flush Faceplate",
        "LED Driver Box",
        "Ceiling Suspension Brackets"
      ]
    },
    "installationGuide": "Requires 140mm ceiling plenum cavity space.",
    "inStock": true,
    "leadTimeDays": 4
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
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85&v=prod_bath_01",
    "galleryImages": [
      "/images/categories_hd/bathtubs.jpg",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
      "/images/hero_luxury_bathware.jpg"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
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
    "id": "prod_bath_02",
    "modelNumber": "SMPL-B-302",
    "name": "Kyoto Deep Soaking Japanese Vessel Tub",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Soaking Tubs",
    "collection": "Minimalist",
    "space": "Wellness & Spa",
    "price": 3650,
    "image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85&v=prod_bath_02",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 28,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      },
      {
        "name": "Smoked Basalt",
        "hex": "#403d39",
        "code": "SB"
      }
    ],
    "specs": {
      "material": "Cast Solid Surface Acrylic Composite",
      "mountingType": "Freestanding",
      "shape": "Round",
      "dimensions": "Ø: 1350mm · H: 650mm · Internal Depth: 560mm",
      "weight": "112 kg"
    },
    "description": "Inspired by traditional Japanese Onsen bathing rituals. The compact circular footprint permits full shoulder-submerged contemplation in space-constrained luxury sanctuaries.",
    "features": [
      "High 560mm water depth for full torso immersion",
      "Integrated ergonomic interior bench seat"
    ],
    "whatsInTheBox": {
      "included": [
        "Kyoto Soaking Tub",
        "Solid Surface Pop-Up Waste",
        "Flexible Waste Coupling"
      ]
    },
    "installationGuide": "Freestanding installation over floor trap.",
    "inStock": true,
    "leadTimeDays": 4,
    "isNew": true
  },
  {
    "id": "prod_bath_03",
    "modelNumber": "SMPL-B-303",
    "name": "Aria Fluted Back-to-Wall Freestanding Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Built-in Tubs",
    "collection": "Contemporary",
    "space": "Master Bathroom",
    "price": 3890,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85&v=prod_bath_03",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/curated_retreat_suite.jpg",
    "rating": 4.8,
    "reviewCount": 19,
    "finishes": [
      {
        "name": "Matte White Ceramic",
        "hex": "#f4f3f0",
        "code": "MW"
      }
    ],
    "specs": {
      "material": "Mineral Composite with Vertical Fluted Outer Perimeter",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1600mm · W: 800mm · H: 580mm",
      "weight": "128 kg"
    },
    "description": "Combines the freestanding luxury aesthetic with a flat rear ledge that mounts flush against tiled walls, eliminating cleaning crevices.",
    "features": [
      "Flat rear wall ledge provides shelf for bath oils",
      "Architectural ribbed outer skirt"
    ],
    "whatsInTheBox": {
      "included": [
        "Aria Bath",
        "Pop-Up Waste Assembly"
      ]
    },
    "installationGuide": "Installed against back wall.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_bath_04",
    "modelNumber": "SMPL-B-304",
    "name": "Tivoli Organic Oval Mineral Composite Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Organic Luxury",
    "space": "Master Bathroom",
    "price": 3450,
    "image": "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85&v=prod_bath_04",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "reviewCount": 22,
    "finishes": [
      {
        "name": "Travertine Sand",
        "hex": "#bfb093",
        "code": "TS"
      },
      {
        "name": "Limestone Cream",
        "hex": "#dfd7c8",
        "code": "LC"
      }
    ],
    "specs": {
      "material": "Honed Dolomite Rock Resin Composite",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1700mm · W: 780mm · H: 540mm",
      "weight": "135 kg"
    },
    "description": "Gently curved contours cradling the body for extended relaxation. Honed finish resists scratching and limescale accumulation.",
    "features": [
      "Slim 12mm rim profile",
      "Integrated overflow system"
    ],
    "whatsInTheBox": {
      "included": [
        "Tivoli Tub",
        "Chrome & Brass Waste Plugs"
      ]
    },
    "installationGuide": "Freestanding installation.",
    "inStock": true,
    "leadTimeDays": 3
  },
  {
    "id": "prod_bath_05",
    "modelNumber": "SMPL-B-305",
    "name": "Hera Double-Ended Slipper Freestanding Bath",
    "department": "Bathroom",
    "category": "Bathtubs",
    "subcategory": "Freestanding Stone Baths",
    "collection": "Timeless",
    "space": "Master Bathroom",
    "price": 4600,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&v=prod_bath_05",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1000&q=85"
    ],
    "lifestyleImage": "/images/hero_luxury_bathware.jpg",
    "rating": 5,
    "reviewCount": 15,
    "finishes": [
      {
        "name": "Charcoal Basalt",
        "hex": "#3d3c3a",
        "code": "CB"
      },
      {
        "name": "Honed Limestone",
        "hex": "#d6cdb7",
        "code": "HL"
      }
    ],
    "specs": {
      "material": "Solid Quarried Basalt Stone Matrix",
      "mountingType": "Freestanding",
      "shape": "Oval",
      "dimensions": "L: 1800mm · W: 850mm · H: 640mm",
      "weight": "165 kg"
    },
    "description": "Dramatic dual-sloped backrests allow comfortable two-person bathing with central drain placement and commanding sculptural presence.",
    "features": [
      "High double-ended backrests provide neck support",
      "Extra-deep 480mm soaking depth"
    ],
    "whatsInTheBox": {
      "included": [
        "Hera Basalt Bath",
        "Solid Brass Drain Flange"
      ]
    },
    "installationGuide": "Slab installation.",
    "inStock": true,
    "leadTimeDays": 5
  }
];

export const CURATED_RETREAT_PRODUCTS: Product[] = ALL_PRODUCTS.filter(p => p.id === "prod_faucet_01" || p.id === "prod_shower_01" || p.id === "prod_shsys_01" || p.id === "prod_basin_01");
