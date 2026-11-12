const fs = require('fs');

const departments = [
  {
    name: 'Bathroom',
    subcategories: [
      {
        name: 'Wash Basins',
        types: [
          { title: 'Dune Monolithic Countertop Vessel Basin', subcat: 'Countertop', shape: 'Round', mat: 'Honed Travertine Natural Stone', mount: 'Countertop', price: 1380, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Atelier Table-Top Oval Ceramic Basin', subcat: 'Table-top', shape: 'Oval', mat: 'Glazed Vitreous China', mount: 'Countertop', price: 620, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Linear Wall-Mounted Floating Stone Basin', subcat: 'Wall-mounted', shape: 'Rectangular', mat: 'Cast Mineral Composite', mount: 'Wall-Mounted', price: 980, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Palazzo Fluted Pedestal Freestanding Basin', subcat: 'Pedestal', shape: 'Sculptural', mat: 'Honed Carrara Marble', mount: 'Floor-Mounted', price: 2450, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Verona Under-Counter Oval Glazed Basin', subcat: 'Under-counter', shape: 'Oval', mat: 'High-Gloss Vitreous Ceramic', mount: 'Under-Mount', price: 440, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Form Semi-Recessed Vanity Basin', subcat: 'Semi-recessed', shape: 'Square', mat: 'Matte Ceramic', mount: 'Semi-Recessed', price: 580, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Kora Deep Vessel River Stone Basin', subcat: 'Vessel', shape: 'Round', mat: 'Riverstone Honed', mount: 'Countertop', price: 1120, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Nook Minimalist Corner Cloakroom Basin', subcat: 'Corner basins', shape: 'Sculptural', mat: 'Ceramic China', mount: 'Wall-Mounted', price: 490, img: '/images/products_ultra/stone_basin_hd.jpg' }
        ]
      },
      {
        name: 'Toilets / WCs',
        types: [
          { title: 'Nura Rimless Wall-Hung WC Pan', subcat: 'Wall-hung', shape: 'Oval', mat: 'Vitreous China with Nano-Glaze', mount: 'Rimless Wall-Hung', price: 1650, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Aura Sensia Intelligent Japanese Smart Toilet', subcat: 'Smart toilets', shape: 'Sculptural', mat: 'Ceramic & High-Impact Polymers', mount: 'Floor-Mounted', price: 3890, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Monolith Architectural One-Piece Toilet', subcat: 'One-piece', shape: 'Rectangular', mat: 'Glazed Vitreous Ceramic', mount: 'Floor-Mounted', price: 1280, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Plaza Back-to-Wall Floor Standing WC', subcat: 'Back-to-wall', shape: 'Square', mat: 'Vitreous Ceramic', mount: 'Back-to-Wall', price: 920, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Classico Two-Piece Comfort WC Pan & Tank', subcat: 'Two-piece', shape: 'Round', mat: 'Vitreous China', mount: 'Floor-Mounted', price: 780, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Vortex Rimless Back-to-Wall Pan', subcat: 'Rimless', shape: 'Oval', mat: 'Glazed Vitreous Ceramic', mount: 'Back-to-Wall', price: 1040, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Toilet Seats',
        types: [
          { title: 'Aero Ultra-Slim Soft-Close Quick-Release Seat', subcat: 'Slim', shape: 'Oval', mat: 'Antibacterial Duroplast', mount: 'Top-Fixing', price: 180, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Duro Heavy-Duty Quick-Release Toilet Seat', subcat: 'Quick-release', shape: 'Square', mat: 'Duroplast Resin', mount: 'Top-Fixing', price: 210, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Comfort Standard Ergonomic Toilet Seat', subcat: 'Standard', shape: 'Round', mat: 'High-Density Polymer', mount: 'Top-Fixing', price: 140, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Cisterns',
        types: [
          { title: 'Concealed Pneumatic In-Wall Dual-Flush Cistern', subcat: 'Concealed', shape: 'Rectangular', mat: 'Polyethylene & Galvanized Steel', mount: 'In-Wall', price: 420, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Heritage Exposed Cast Metal High-Level Cistern', subcat: 'Exposed', shape: 'Rectangular', mat: 'Cast Aluminum & Brass', mount: 'Wall-Mounted', price: 890, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Eco-Save In-Wall Dual-Flush Cistern Kit', subcat: 'Dual-flush', shape: 'Rectangular', mat: 'Insulated Polyethylene Tank', mount: 'In-Wall', price: 360, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Vanities',
        types: [
          { title: 'Kyoto Monolithic Fluted Oak Vanity Console (1200mm)', subcat: 'Vanity units', shape: 'Rectangular', mat: 'Solid Natural White Oak & Travertine', mount: 'Wall-Mounted', price: 3450, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Bespoke Double Basin Wall-Hung Vanity Cabinet', subcat: 'Basin cabinets', shape: 'Rectangular', mat: 'Smoked Oak & Carrara Marble Top', mount: 'Wall-Mounted', price: 4200, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Honed Limestone Seamless Vanity Countertop', subcat: 'Vanity tops', shape: 'Rectangular', mat: 'Natural Honed Travertine', mount: 'Countertop', price: 1850, img: '/images/curated_retreat_suite.jpg' }
        ]
      },
      {
        name: 'Urinals',
        types: [
          { title: 'Linea Wall-Mounted Rimless Urinal', subcat: 'Wall-mounted urinals', shape: 'Sculptural', mat: 'Vitreous China with Hygiene-Glaze', mount: 'Wall-Mounted', price: 740, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Wave Concealed Radar Sensor Flush Urinal Kit', subcat: 'Flush systems', shape: 'Rectangular', mat: 'Brass Rough-in with Infrared Radar', mount: 'Concealed', price: 620, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Bathtubs',
        types: [
          { title: 'Elysium Freestanding Honed Stone Bathtub', subcat: 'Freestanding', shape: 'Oval', mat: 'Monolithic Honed Limestone Composite', mount: 'Freestanding', price: 4850, img: '/images/hero_architectural_suite.jpg' },
          { title: 'Nara Japanese Deep Soaking Circular Bath', subcat: 'Soaking tubs', shape: 'Round', mat: 'Cast Mineral Composite', mount: 'Freestanding', price: 4200, img: '/images/hero_architectural_suite.jpg' },
          { title: 'Travertine Built-in Architectural Deep Soak Tub', subcat: 'Built-in', shape: 'Rectangular', mat: 'Reinforced Acrylic with Stone Shell', mount: 'Built-In', price: 3100, img: '/images/hero_architectural_suite.jpg' },
          { title: 'Corner Oasis Asymmetrical Freestanding Tub', subcat: 'Corner', shape: 'Sculptural', mat: 'Solid Surface Stone Resin', mount: 'Corner Freestanding', price: 3950, img: '/images/hero_architectural_suite.jpg' }
        ]
      },
      {
        name: 'Bathroom Mirrors',
        types: [
          { title: 'Halo 900mm Circular Backlit LED Anti-Fog Mirror', subcat: 'LED mirrors', shape: 'Round', mat: 'Copper-Free Glass & Aluminum', mount: 'Wall-Mounted', price: 820, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Pill Architectural Brushed Bronze Framed Mirror', subcat: 'Framed mirrors', shape: 'Oval', mat: 'Solid Forged Brass & 5mm Glass', mount: 'Wall-Mounted', price: 690, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Lumina Recessed Dual-Door Anti-Fog Mirror Cabinet', subcat: 'Mirror cabinets', shape: 'Rectangular', mat: 'Anodized Aluminum & Double Mirrors', mount: 'Concealed / In-Wall', price: 1150, img: '/images/curated_retreat_suite.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Faucets',
    subcategories: [
      {
        name: 'Basin Faucets',
        types: [
          { title: 'Linear Single Lever Basin Mixer', subcat: 'Single-lever mixers', shape: 'Sculptural', mat: 'Forged Solid DZR Brass with PVD', mount: 'Deck-Mounted', price: 680, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Atelier High-Arc Tall Vessel Basin Mixer', subcat: 'Tall basin mixers', shape: 'Sculptural', mat: 'Solid Brass with Ceramic Valve', mount: 'Deck-Mounted', price: 790, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Concealed 2-Hole Wall-Mounted Basin Mixer Set', subcat: 'Wall-mounted mixers', shape: 'Round', mat: 'Dezincification Resistant Brass', mount: 'Wall-Mounted', price: 890, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Timeless 3-Hole Crosshead Deck Basin Set', subcat: 'Pillar taps', shape: 'Round', mat: 'Hand-Finished Aged Brass', mount: 'Deck-Mounted', price: 920, img: '/images/products_ultra/basin_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Bath Faucets',
        types: [
          { title: 'Freestanding Floor-Mounted Bath Mixer with Baton Handset', subcat: 'Floor-mounted bath fillers', shape: 'Sculptural', mat: 'Solid Forged Brass Column', mount: 'Floor-Mounted', price: 1890, img: '/images/hero_architectural_suite.jpg' },
          { title: 'Deck-Mounted 4-Hole Roman Bath Filler Set', subcat: 'Bath mixers', shape: 'Round', mat: 'Heavy Cast DZR Brass', mount: 'Deck-Mounted', price: 1450, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Cascade Wide Water-Blade Wall Bath Spout', subcat: 'Bath spouts', shape: 'Rectangular', mat: 'Solid Brass Waterfall Channel', mount: 'Wall-Mounted', price: 580, img: '/images/products_ultra/basin_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Utility Taps',
        types: [
          { title: 'Architectural Solid Brass Bib Cock Tap', subcat: 'Bib cocks', shape: 'Round', mat: 'Heavy DZR Brass', mount: 'Wall-Mounted', price: 195, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Long-Body Laundry Washing Tap with Aerator', subcat: 'Long-body taps', shape: 'Round', mat: 'Solid Brass with Chrome PVD', mount: 'Wall-Mounted', price: 230, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Quarter-Turn Ceramic Disc Angle Valve Pair', subcat: 'Angle valves', shape: 'Round', mat: 'Forged Brass with Filter Mesh', mount: 'Wall-Mounted', price: 140, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Concealed Master Stop Valve with Lever Handle', subcat: 'Stop valves', shape: 'Square', mat: 'Solid Brass Core', mount: 'Concealed', price: 180, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Diverters',
        types: [
          { title: 'Thermostatic 2-Way Concealed Diverter Valve', subcat: '2-way', shape: 'Rectangular', mat: 'Solid Brass Rough-in Box', mount: 'Concealed', price: 980, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Architectural 3-Way Multi-Function Diverter Valve', subcat: '3-way', shape: 'Square', mat: 'Heavy DZR Brass with Ceramic Spool', mount: 'Concealed', price: 1240, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Master Suite 4-Way Push-Control Diverter Body', subcat: '4-way', shape: 'Sculptural', mat: 'Solid Forged Brass Core', mount: 'Concealed', price: 1560, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Special Faucets',
        types: [
          { title: 'Pure Infrared Touchless Electronic Sensor Basin Tap', subcat: 'Sensor faucets', shape: 'Round', mat: 'Solid Brass with Dual Power Sensors', mount: 'Deck-Mounted', price: 840, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Digital Precision Thermostatic Mixing Controller', subcat: 'Thermostatic mixers', shape: 'Square', mat: 'Glass Touch Interface & Brass Valve', mount: 'Wall-Mounted', price: 1650, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Complementary Fittings',
        types: [
          { title: 'Universal Concealed Pre-Wall Rough-In Box', subcat: 'Concealed bodies', shape: 'Rectangular', mat: 'Dezincification Resistant Brass', mount: 'Concealed', price: 340, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'European Sedal 35mm Ceramic Disc Cartridge Replacement', subcat: 'Cartridges', shape: 'Round', mat: 'Sintered Ceramic Discs', mount: 'Internal', price: 85, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'High-Pressure Stainless Braided Hoses Pair (500mm)', subcat: 'Connection hoses', shape: 'Round', mat: 'AISI 304 Stainless Steel & EPDM', mount: 'Flexible', price: 65, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Neoperl Swiss Laminar Flow Low-Splash Aerator', subcat: 'Aerators', shape: 'Round', mat: 'Honeycomb Mesh Core', mount: 'Threaded Spout', price: 45, img: '/images/products_ultra/basin_mixer_hd.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Showers',
    subcategories: [
      {
        name: 'Overhead Showers',
        types: [
          { title: 'Aura 350mm Ultra-Slim Round Rain Ceiling Shower Rose', subcat: 'Round', shape: 'Round', mat: 'Solid Brass with Easy-Clean Silicone', mount: 'Ceiling-Mounted', price: 890, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Plaza 300mm Architectural Square Rain Shower Head', subcat: 'Square', shape: 'Square', mat: 'Solid Brass & PVD Coating', mount: 'Wall-Mounted', price: 840, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Horizon Flush-Mounted Rain, Mist & Waterfall Ceiling Plate', subcat: 'Ceiling-mounted showers', shape: 'Rectangular', mat: 'Mirror Polish Stainless Steel', mount: 'Ceiling-Mounted', price: 2150, img: '/images/products_ultra/shower_rose_hd.jpg' }
        ]
      },
      {
        name: 'Hand Showers',
        types: [
          { title: 'Cylinder Solid Brass Single-Function Baton Wand', subcat: 'Single-function', shape: 'Round', mat: 'Forged Brass Tube with Silicone Jets', mount: 'Bracket Mounted', price: 280, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Vortex 3-Function Air-Injected Massage Handset', subcat: 'Multi-function', shape: 'Oval', mat: 'Brass Body with Push Controller', mount: 'Slide Rail', price: 340, img: '/images/products_ultra/shower_rose_hd.jpg' }
        ]
      },
      {
        name: 'Shower Systems',
        types: [
          { title: 'Thermostatic 2-Way Concealed System with Dropper', subcat: 'Complete shower sets', shape: 'Sculptural', mat: 'Solid DZR Brass with PVD', mount: 'Concealed', price: 1240, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Exposed Heritage Thermostatic Shower Column Set', subcat: 'Shower columns', shape: 'Round', mat: 'Aged Brass Risers & Porcelain Details', mount: 'Wall-Mounted', price: 1680, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'All-in-One Flush Luxury Hydro Shower Panel', subcat: 'Shower panels', shape: 'Rectangular', mat: 'Brushed Gunmetal Stainless Steel', mount: 'Wall-Mounted', price: 2280, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Shower Accessories',
        types: [
          { title: 'Architectural 400mm Horizontal Wall Shower Arm', subcat: 'Shower arms', shape: 'Round', mat: 'Solid Brass with G 1/2 Thread', mount: 'Wall-Mounted', price: 180, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Ceiling Shower Dropper Arm (200mm)', subcat: 'Shower arms', shape: 'Round', mat: 'Forged Solid Brass', mount: 'Ceiling-Mounted', price: 140, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Solid Brass Heavy Adjustable Slide Rail Set', subcat: 'Slide bars', shape: 'Sculptural', mat: 'Solid Brass Tube & Glider', mount: 'Wall-Mounted', price: 320, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Water Outlet Wall Elbow with Integrated Handset Bracket', subcat: 'Wall elbows', shape: 'Square', mat: 'Solid Brass Casting', mount: 'Wall-Mounted', price: 160, img: '/images/products_ultra/shower_rose_hd.jpg' }
        ]
      },
      {
        name: 'Shower Controls',
        types: [
          { title: 'Concealed 2-Handle Thermostatic Mixing Valve Plate', subcat: 'Thermostatic controls', shape: 'Rectangular', mat: 'Solid Brass Trim Plate & Vernet Core', mount: 'Concealed', price: 890, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Push-Button Triple-Outlet Diverter Trimset', subcat: 'Diverters', shape: 'Rectangular', mat: 'Solid Brass Mechanical Push Buttons', mount: 'Concealed', price: 1120, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Wellness',
        types: [
          { title: 'Hydro-Massage Flush Swivel Body Jets (Pair)', subcat: 'Body jets', shape: 'Round', mat: 'Solid Brass Flush Face with Rubber Jets', mount: 'Wall-Mounted', price: 420, img: '/images/products_ultra/shower_rose_hd.jpg' },
          { title: 'Cascading Wide Waterfall Wellness Spout', subcat: 'Waterfall showers', shape: 'Rectangular', mat: 'Precision Machined Brass Flange', mount: 'Wall-Mounted', price: 680, img: '/images/products_ultra/shower_rose_hd.jpg' }
        ]
      },
      {
        name: 'Shower Enclosures',
        types: [
          { title: '10mm Fluted Glass Walk-In Screen with Brushed Brass Hardware', subcat: 'Glass shower screens', shape: 'Rectangular', mat: '10mm Toughened Fluted Safety Glass', mount: 'Floor & Wall Mounted', price: 1550, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Minimalist Sliding Glass Wetroom Enclosure (1200x900)', subcat: 'Sliding enclosures', shape: 'Rectangular', mat: '8mm Tempered Glass & Brass Track', mount: 'Floor-Mounted', price: 1890, img: '/images/curated_retreat_suite.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Sanitaryware',
    subcategories: [
      {
        name: 'Water Closets',
        types: [
          { title: 'Vortex Rimless Wall-Hung WC Pan with Urea Seat', subcat: 'Wall-hung', shape: 'Oval', mat: 'Vitreous China with Nano Glaze', mount: 'Rimless Wall-Hung', price: 1320, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Plaza Floor-Mounted Back-to-Wall Toilet Suite', subcat: 'Floor-mounted', shape: 'Square', mat: 'High-Gloss Vitreous Ceramic', mount: 'Back-to-Wall', price: 950, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'One-Piece Monolithic High-Efficiency Dual Flush Toilet', subcat: 'One-piece', shape: 'Round', mat: 'Vitreous China', mount: 'Floor-Mounted', price: 1180, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Wash Basins',
        types: [
          { title: 'Vero Table-Top Glazed Vitreous Ceramic Basin', subcat: 'Table-top', shape: 'Rectangular', mat: 'High-Fired Vitreous Ceramic', mount: 'Countertop', price: 480, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Undercounter Glazed Vanity Basin with Overflow', subcat: 'Under-counter', shape: 'Oval', mat: 'Vitreous Ceramic Glaze', mount: 'Under-Mount', price: 380, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Integrated Solid-Surface Basin Countertop Unit', subcat: 'Integrated basins', shape: 'Rectangular', mat: 'Seamless Cast Acrylic Solid Surface', mount: 'Wall-Mounted', price: 1450, img: '/images/products_ultra/stone_basin_hd.jpg' }
        ]
      },
      {
        name: 'Toilet Systems',
        types: [
          { title: 'Geberit Sigma In-Wall Concealed Cistern Frame', subcat: 'Concealed cisterns', shape: 'Rectangular', mat: 'Powder-Coated Steel Frame & PE-HD Tank', mount: 'In-Wall', price: 490, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Pneumatic Dual-Flush Actuator Plate in Brushed Brass', subcat: 'Flush plates', shape: 'Rectangular', mat: 'Solid Stamped Brass & PVD', mount: 'Wall-Mounted', price: 240, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Ultra-Slim Matte Black Mechanical Dual-Flush Plate', subcat: 'Flush plates', shape: 'Rectangular', mat: 'Anodized Stainless Steel', mount: 'Wall-Mounted', price: 190, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Indian Toilets',
        types: [
          { title: 'Architectural Vitreous China Orissa Squatting Pan (20-Inch)', subcat: 'Orissa pans', shape: 'Oval', mat: 'High-Fired Glazed Vitreous China', mount: 'Floor-Recessed', price: 320, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Stainless Steel Heavy Gauge Squatting Pan with Tread Footrests', subcat: 'Squatting pans', shape: 'Rectangular', mat: 'Grade 304 Surgical Stainless Steel', mount: 'Floor-Recessed', price: 540, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Urinals',
        types: [
          { title: 'Architectural Wall-Mounted Rimless Waterless Urinal', subcat: 'Urinals', shape: 'Sculptural', mat: 'Hygienic Vitreous Ceramic', mount: 'Wall-Mounted', price: 680, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Electronic Infrared Concealed Sensor Urinal Flush Valve', subcat: 'Sensors', shape: 'Square', mat: 'Stainless Steel Faceplate with Sensor', mount: 'Concealed', price: 450, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Bidets',
        types: [
          { title: 'Wall-Hung Ceramic Bidet with Single-Hole Tap Cut-out', subcat: 'Bidets', shape: 'Oval', mat: 'Vitreous China Nano Glaze', mount: 'Wall-Mounted', price: 820, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Solid Brass High-Pressure Bidet Health Spray Trigger Kit', subcat: 'Bidet sprays', shape: 'Round', mat: 'Solid Brass Wand with 1.2m Hose', mount: 'Wall-Mounted', price: 210, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Smart Sanitaryware',
        types: [
          { title: 'Prestige Intelligent Smart WC with Warm Bidet Wand & Auto Flush', subcat: 'Smart toilets', shape: 'Sculptural', mat: 'Nano Ceramic & Antibacterial Polymers', mount: 'Floor-Mounted', price: 4200, img: '/images/products_ultra/toilet_commode_hd.jpg' },
          { title: 'Retrofit Heated Bidet Toilet Seat with Remote Controller', subcat: 'Heated seats', shape: 'Oval', mat: 'Thermal Resistant Polypropylene', mount: 'Top-Fixing', price: 780, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Kitchen',
    subcategories: [
      {
        name: 'Kitchen Sinks',
        types: [
          { title: 'Handmade 16-Gauge Single Bowl Undermount Kitchen Sink (750mm)', subcat: 'Single bowl', shape: 'Rectangular', mat: 'Grade 304 Surgical Stainless Steel', mount: 'Under-Mount', price: 890, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Kobe Double Bowl 60/40 Granite Quartz Sink', subcat: 'Double bowl', shape: 'Rectangular', mat: '80% Natural Granite Quartz Composite', mount: 'Under-Mount', price: 1180, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Fluted Front Fireclay Farmhouse Apron Sink (800mm)', subcat: 'Farmhouse', shape: 'Rectangular', mat: 'Glazed Heavy Fireclay Ceramic', mount: 'Flush-Mount', price: 1650, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Chef Workstation Top-Mount Sink with Cutting Board & Colander', subcat: 'Top-mount', shape: 'Rectangular', mat: 'Brushed 16-Gauge Stainless Steel', mount: 'Top-Mount', price: 980, img: '/images/products_ultra/kitchen_faucet_hd.jpg' }
        ]
      },
      {
        name: 'Sink Materials',
        types: [
          { title: 'Surgical Grade 304 Stainless Steel Basin with Sound Dampening', subcat: 'Stainless steel', shape: 'Rectangular', mat: '18/10 Chromium-Nickel Stainless Steel', mount: 'Under-Mount', price: 740, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Natural Black Obsidian Quartz Heat-Proof Composite Basin', subcat: 'Quartz', shape: 'Rectangular', mat: 'High-Density Quartz Composite', mount: 'Under-Mount', price: 920, img: '/images/products_ultra/kitchen_faucet_hd.jpg' }
        ]
      },
      {
        name: 'Kitchen Faucets',
        types: [
          { title: 'Aero Gooseneck Pull-Down Kitchen Mixer with Dual Spray', subcat: 'Pull-down', shape: 'Sculptural', mat: 'Solid DZR Brass Body with PVD', mount: 'Deck-Mounted', price: 780, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Bridge Architectural Dual-Handle Kitchen Mixer', subcat: 'Bridge Mixers', shape: 'Round', mat: 'Solid Brass Casting with Ceramic Valves', mount: 'Deck-Mounted', price: 960, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Flexible Silicone-Neck Commercial Chef Pull-Out Faucet', subcat: 'Flexible-neck', shape: 'Sculptural', mat: 'Stainless Steel & Matte Black Silicone', mount: 'Deck-Mounted', price: 840, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Wall-Mounted Articulated Double-Jointed Pot-Filler Tap', subcat: 'Wall-mounted', shape: 'Round', mat: 'Solid Forged DZR Brass', mount: 'Wall-Mounted', price: 620, img: '/images/products_ultra/basin_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Kitchen Accessories',
        types: [
          { title: 'Roll-Up Silicone & Stainless Steel Dish Drying Rack', subcat: 'Drainers', shape: 'Rectangular', mat: 'Food-Grade Silicone & AISI 304 Steel', mount: 'Over-Sink', price: 85, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Protective Stainless Steel Bottom Sink Grid with Rubber Feet', subcat: 'Sink baskets', shape: 'Rectangular', mat: 'Passivated Stainless Steel Wire', mount: 'In-Sink', price: 110, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Countertop Solid Brass Refillable Soap Dispenser Pump', subcat: 'Soap dispensers', shape: 'Round', mat: 'Solid Brass Head & 500ml PE Bottle', mount: 'Deck-Mounted', price: 140, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Under-Sink Pull-Out Dual 30L Waste & Recycling Bin Kit', subcat: 'Waste bins', shape: 'Rectangular', mat: 'Steel Soft-Close Gliders & Polypropylene', mount: 'Cabinet Base', price: 290, img: '/images/products_ultra/toilet_commode_hd.jpg' }
        ]
      },
      {
        name: 'Sink Fittings',
        types: [
          { title: 'Solid Brass Basket Waste Coupling with Removable Strainer Basket', subcat: 'Waste couplings', shape: 'Round', mat: 'Solid Forged Brass & Rubber Gaskets', mount: 'Standard 90mm Drain', price: 120, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Anti-Odor Bottle Trap with Dual Dishwasher Connectors', subcat: 'Bottle traps', shape: 'Round', mat: 'Chemical Resistant Polypropylene & Brass', mount: 'Under-Sink', price: 75, img: '/images/products_ultra/basin_mixer_hd.jpg' }
        ]
      },
      {
        name: 'Water Systems',
        types: [
          { title: 'Tri-Flow 3-Way Faucet for Hot, Cold & Pure Filtered Water', subcat: 'Water filters', shape: 'Sculptural', mat: 'Lead-Free Brass with Dual Waterways', mount: 'Deck-Mounted', price: 890, img: '/images/products_ultra/kitchen_faucet_hd.jpg' },
          { title: 'Under-Sink Instant 98C Boiling & Chilled Water Dispenser Unit', subcat: 'Instant hot-water taps', shape: 'Square', mat: 'Insulated Titanium Tank & Touch Faucet', mount: 'Under-Sink & Deck', price: 2150, img: '/images/products_ultra/kitchen_faucet_hd.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Accessories',
    subcategories: [
      {
        name: 'Towel Accessories',
        types: [
          { title: 'Architectural 600mm Solid Forged Brass Single Towel Rail', subcat: 'Towel bars', shape: 'Round', mat: 'Forged Solid Brass with PVD', mount: 'Wall-Mounted', price: 240, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Minimalist Circular Brass Towel Ring', subcat: 'Towel rings', shape: 'Round', mat: 'Solid Brass with Concealed Fixing', mount: 'Wall-Mounted', price: 160, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Heated Architectural Multi-Bar Electric Towel Ladder', subcat: 'Towel racks', shape: 'Rectangular', mat: 'Stainless Steel with Internal Heating Cable', mount: 'Wall-Mounted', price: 890, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Hotelier Double Towel Shelf with Integrated Hanging Rail', subcat: 'Towel shelves', shape: 'Rectangular', mat: 'Solid Forged Brass', mount: 'Wall-Mounted', price: 420, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Storage',
        types: [
          { title: 'Honed Natural Travertine Shower Corner Shelf', subcat: 'Corner shelves', shape: 'Sculptural', mat: 'Natural Travertine Stone with Waterproof Brackets', mount: 'Wall-Mounted', price: 220, img: '/images/curated_retreat_suite.jpg' },
          { title: 'Recessed Waterproof Stainless Steel Bathroom Wall Niche (600x300)', subcat: 'Bathroom shelves', shape: 'Rectangular', mat: 'Seamless 304 Stainless Steel', mount: 'In-Wall', price: 340, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Solid Brass Wire Hanging Shower Caddy Basket', subcat: 'Shower baskets', shape: 'Rectangular', mat: 'Solid Brass Wire Construction', mount: 'Wall-Mounted', price: 195, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Small Accessories',
        types: [
          { title: 'Form Wall-Mounted Brass and Frosted Glass Soap Dish', subcat: 'Soap dishes', shape: 'Round', mat: 'Frosted Tempered Glass & Solid Brass Bracket', mount: 'Wall-Mounted', price: 145, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Form Wall-Mounted Refillable Brass Soap Dispenser Pump', subcat: 'Soap dispensers', shape: 'Round', mat: 'Solid Forged Brass with PVD Finish', mount: 'Wall-Mounted', price: 220, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Monolithic Honed Limestone Toothbrush & Paste Tumbler', subcat: 'Toothbrush holders', shape: 'Round', mat: 'Honed Natural Limestone', mount: 'Countertop', price: 110, img: '/images/products_ultra/stone_basin_hd.jpg' },
          { title: 'Freestanding Fluted Stone Vanity Organizer Amenity Tray', subcat: 'Tumblers', shape: 'Rectangular', mat: 'Natural Cast Travertine Stone', mount: 'Countertop', price: 135, img: '/images/products_ultra/stone_basin_hd.jpg' }
        ]
      },
      {
        name: 'Toilet Accessories',
        types: [
          { title: 'Minimalist Toilet Paper Holder with Integrated Phone Shelf', subcat: 'Toilet paper holders', shape: 'Rectangular', mat: 'Solid Brass Plate & Bar', mount: 'Wall-Mounted', price: 185, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Cast Bronze Architectural Robe Hooks (Pair)', subcat: 'Robe hooks', shape: 'Sculptural', mat: 'Solid Cast Architectural Bronze', mount: 'Wall-Mounted', price: 120, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Freestanding Solid Brass Toilet Brush with Silicone Wand', subcat: 'Toilet brushes', shape: 'Round', mat: 'Solid Brass Housing & Hygienic Silicone Head', mount: 'Floor-Standing', price: 240, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Hygiene',
        types: [
          { title: 'Solid Brass High-Pressure Health Faucet Bidet Spray Kit', subcat: 'Health faucets', shape: 'Round', mat: 'Solid Forged Brass Trigger & Ceramic Valve', mount: 'Wall-Mounted', price: 195, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Anti-Twist 1.2m Metal Bidet Hose with Auto-Shutoff Wall Bracket', subcat: 'Jet sprays', shape: 'Round', mat: 'Reinforced Brass Braided Hose', mount: 'Wall-Mounted', price: 85, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Drainage',
        types: [
          { title: '800mm Linear Tile-Insert Shower Channel with Stainless Hair Trap', subcat: 'Shower channels', shape: 'Rectangular', mat: 'Grade 316 Marine Stainless Steel', mount: 'Floor-Recessed', price: 420, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: '150mm Square Solid Brass Floor Drain with Magnetic Odor Trap', subcat: 'Floor drains', shape: 'Square', mat: 'Solid Forged Brass Grate & Magnetic Trap', mount: 'Floor-Recessed', price: 180, img: '/images/products_ultra/thermostatic_mixer_hd.jpg' },
          { title: 'Invisible Concealed Tile-Top Floor Waste Grate Cover', subcat: 'Drain covers', shape: 'Square', mat: '304 Stainless Steel Tile Bed', mount: 'Floor-Recessed', price: 140, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Plumbing',
        types: [
          { title: 'Solid Brass Minimalist Round Bottle Trap with 300mm Tube', subcat: 'Bottle traps', shape: 'Round', mat: 'Solid Cast DZR Brass with PVD', mount: 'Exposed Under-Basin', price: 195, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Solid Brass Pop-Up Universal Basin Waste Coupling (Slotted)', subcat: 'Waste couplings', shape: 'Round', mat: 'Solid Forged Brass & Spring Mechanism', mount: 'In-Basin Drain', price: 95, img: '/images/products_ultra/basin_mixer_hd.jpg' },
          { title: 'Quarter-Turn Ceramic Disc Angle Cock Stop Valves (Pair)', subcat: 'Angle valves', shape: 'Round', mat: 'Solid DZR Brass with Stainless Filter', mount: 'Wall-Mounted', price: 140, img: '/images/products_ultra/soap_dispenser_hd.jpg' }
        ]
      },
      {
        name: 'Safety',
        types: [
          { title: 'ADA Compliant 450mm Knurled Grip Architectural Grab Bar', subcat: 'Grab bars', shape: 'Round', mat: 'Heavy-Duty 304 Stainless Steel (Supports 250kg)', mount: 'Wall-Mounted', price: 280, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Minimalist Anti-Slip Solid Brass Shower Foot Rest Step', subcat: 'Anti-slip accessories', shape: 'Sculptural', mat: 'Forged Brass with Grip Grooves', mount: 'Wall-Mounted', price: 160, img: '/images/products_ultra/soap_dispenser_hd.jpg' },
          { title: 'Folding Natural Burmese Teak & Brass Accessible Shower Bench', subcat: 'Accessible bathroom fittings', shape: 'Rectangular', mat: 'Waterproof Kiln-Dried Teak & Forged Brass Frame', mount: 'Wall-Mounted', price: 780, img: '/images/curated_retreat_suite.jpg' }
        ]
      }
    ]
  }
];

const finishesPalette = [
  { name: 'Brushed Brass', hex: '#bfa06b', code: 'BB' },
  { name: 'Matte Black', hex: '#1c1b1a', code: 'MB' },
  { name: 'Brushed Nickel', hex: '#8a8885', code: 'BN' },
  { name: 'Gunmetal', hex: '#3f4247', code: 'GM' },
  { name: 'Chrome', hex: '#d4d8db', code: 'CR' },
  { name: 'Aged Bronze', hex: '#5a4533', code: 'AB' }
];

const collections = ['Contemporary', 'Minimalist', 'Sculptural', 'Timeless', 'Modern Classic', 'Organic Luxury'];
const spaces = ['Master Bathroom', 'Guest Bathroom', 'Powder Room', 'Kitchen', 'Wellness & Spa', 'Commercial Spaces'];

let productCount = 0;
const allProducts = [];

departments.forEach((dept, dIdx) => {
  dept.subcategories.forEach((sub, sIdx) => {
    sub.types.forEach((item, tIdx) => {
      productCount++;
      const id = 'prod_' + dept.name.toLowerCase().substring(0, 3) + '_' + String(productCount).padStart(3, '0');
      const modelNumber = 'SMPL-' + dept.name.substring(0, 3).toUpperCase() + '-' + (100 + productCount);
      const collection = collections[(dIdx + sIdx + tIdx) % collections.length];
      const space = spaces[(sIdx + tIdx) % spaces.length];

      allProducts.push({
        id,
        modelNumber,
        name: item.title,
        department: dept.name,
        category: sub.name,
        subcategory: item.subcat,
        collection,
        space,
        price: item.price,
        image: item.img,
        galleryImages: [item.img, '/images/curated_retreat_suite.jpg', '/images/hero_architectural_suite.jpg'],
        lifestyleImage: '/images/curated_retreat_suite.jpg',
        rating: +(4.8 + ((productCount % 3) * 0.1)).toFixed(1),
        reviewCount: 15 + (productCount * 3) % 80,
        finishes: finishesPalette.slice(0, 4 + (productCount % 3)),
        specs: {
          material: item.mat,
          mountingType: item.mount,
          shape: item.shape,
          dimensions: 'Architectural Spec (' + item.shape + ' ' + item.mount + ')',
          cartridge: dept.name === 'Faucets' || dept.name === 'Showers' ? '35mm European Ceramic Disc Valve' : undefined,
          flowRate: dept.name === 'Faucets' ? '5.0 L/min aerated stream' : dept.name === 'Showers' ? '9.0 L/min rain spray' : undefined,
          operatingPressure: dept.name === 'Faucets' || dept.name === 'Showers' ? '1.5 – 5.0 bar (Recommended 3.0 bar)' : undefined,
          connectionSize: dept.name === 'Faucets' || dept.name === 'Showers' ? 'G 1/2 standard British thread' : undefined,
          certifications: ['Watermark WM-02241', 'WRAS Approved', 'Lead-Free ANSI/NSF 61'],
          weight: (1.5 + (productCount % 5) * 0.8).toFixed(1) + ' kg'
        },
        description: item.title + ' is crafted with precision to elevate contemporary architectural spaces. Manufactured from premium ' + item.mat.toLowerCase() + ' engineered for tactile satisfaction and lifelong durability.',
        features: [
          'Precision architectural engineering with solid ' + item.mat.toLowerCase(),
          'Commercial-grade PVD surface coating resistant to hard water and tarnishing',
          'Engineered for simple ' + item.mount.toLowerCase() + ' installation',
          'Comprehensive 15-year architectural guarantee and factory support'
        ],
        whatsInTheBox: {
          included: [
            item.title + ' Primary Unit',
            'Heavy-Duty Concealed Mounting Hardware Kit',
            'Step-by-Step Architect Installation Guide & Cut-out Template',
            'Factory Quality Certification & Warranty Card'
          ],
          requiredSeparately: item.mount.includes('Concealed') || item.mount.includes('In-Wall')
            ? ['Concealed in-wall rough-in body / cistern frame']
            : ['Standard isolation stop valves & waste coupling if not pre-installed']
        },
        installationGuide: 'Professional architectural installation recommended. Standard ' + item.mount + ' configuration through approved structural rough-in.',
        cadFileUrl: '/downloads/cad/' + modelNumber + '.dwg',
        inStock: productCount % 7 !== 0,
        leadTimeDays: (productCount % 4) + 2,
        isBestseller: productCount % 12 === 1,
        isNew: productCount % 9 === 0,
        isFeatured: productCount % 15 === 0,
        reviews: [
          {
            id: 'rev-' + productCount,
            author: 'Marcus Lindqvist',
            role: 'Senior Interior Architect',
            project: 'Nordic Minimalist Residence',
            rating: 5,
            date: 'October 2026',
            comment: 'The precision tolerance and surface finish are unmatched. Specified across our master suites with absolute confidence.',
            verifiedArchitect: true
          }
        ]
      });
    });
  });
});

console.log('Built allProducts count:', allProducts.length);

const outputTS = `import { Product, SpaceCategory, StyleCollection, ProductCategoryItem } from '../types';

export const SPACES_DATA: SpaceCategory[] = [
  {
    id: 'master_bathroom',
    title: 'Master Bathroom',
    image: '/images/spaces/master_bathroom_hd.png',
    description: 'Generous sanctuaries balancing sculpted freestanding baths, double vanities, and natural ambient light.',
    itemCount: 42,
  },
  {
    id: 'guest_bathroom',
    title: 'Guest Bathroom',
    image: '/images/spaces/guest_bathroom_hd.png',
    description: 'Compact refinement with tactile stone surfaces, circular mirrors, and integrated brassware.',
    itemCount: 28,
  },
  {
    id: 'powder_room',
    title: 'Powder Room',
    image: '/images/spaces/powder_room_hd.png',
    description: 'Dramatic architectural powder rooms combining dark fluted stonework and wall-mounted brass spouts.',
    itemCount: 19,
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    image: '/images/spaces/kitchen_hd.png',
    description: 'Sculptural gooseneck mixers and workstation fittings engineered for culinary precision.',
    itemCount: 24,
  },
  {
    id: 'wellness_spa',
    title: 'Wellness & Spa',
    image: '/images/spaces/wellness_spa_hd.png',
    description: 'Sensory shower rain ceilings, waterfall cascades, and hydrotherapeutic wellness controls.',
    itemCount: 31,
  },
  {
    id: 'commercial_spaces',
    title: 'Commercial Spaces',
    image: '/images/spaces/commercial_spaces_hd.png',
    description: 'Heavy-traffic luxury fittings designed for boutique hospitality, private members clubs, and lounges.',
    itemCount: 36,
  },
];

export const STYLES_DATA: StyleCollection[] = [
  {
    id: 'contemporary',
    title: 'Contemporary',
    image: '/images/styles/contemporary_hd.png',
    tagline: 'Clean architectural profiles with tactile precision knurling.',
    aesthetic: 'Brushed Bronze & Warm Travertine',
  },
  {
    id: 'minimalist',
    title: 'Minimalist',
    image: '/images/styles/minimalist_hd.png',
    tagline: 'Pared-back geometry stripped of all ornamental excess.',
    aesthetic: 'Matte Black & Pure Ceramic',
  },
  {
    id: 'sculptural',
    title: 'Sculptural',
    image: '/images/styles/sculptural_hd.png',
    tagline: 'Flowing continuous curves and dramatic monolithic forms.',
    aesthetic: 'Hand-Polished Brass & Cast Bronze',
  },
  {
    id: 'timeless',
    title: 'Timeless',
    image: '/images/styles/timeless_hd.png',
    tagline: 'Crosshead handles and proportions inspired by heritage estates.',
    aesthetic: 'Aged Brass & Carrara Marble',
  },
  {
    id: 'modern_classic',
    title: 'Modern Classic',
    image: '/images/styles/modern_classic_hd.png',
    tagline: 'Fluted textures meeting modern high-precision ceramic cartridges.',
    aesthetic: 'Brushed Nickel & Fluted Glass',
  },
  {
    id: 'organic_luxury',
    title: 'Organic Luxury',
    image: '/images/styles/organic_luxury_hd.png',
    tagline: 'Raw honed limestone, earthen terrazzo, and tactile earth tones.',
    aesthetic: 'Honed Sandstone & Raw Bronze',
  },
];

export const CATEGORIES_DATA: ProductCategoryItem[] = [
  {
    id: 'basin_faucets',
    title: 'Basin Faucets',
    image: '/images/categories/basin_faucets_hd.png',
    count: 38,
    department: 'Faucets',
    subcategories: ['Single-lever mixers', 'Tall basin mixers', 'Wall-mounted mixers', 'Pillar taps'],
  },
  {
    id: 'kitchen_faucets',
    title: 'Kitchen Faucets',
    image: '/images/categories/kitchen_faucets_hd.png',
    count: 22,
    department: 'Kitchen',
    subcategories: ['Pull-down', 'Bridge Mixers', 'Flexible-neck', 'Wall-mounted'],
  },
  {
    id: 'showers',
    title: 'Showers',
    image: '/images/categories/showers_hd.png',
    count: 29,
    department: 'Showers',
    subcategories: ['Round', 'Square', 'Ceiling-mounted showers', 'Single-function'],
  },
  {
    id: 'shower_systems',
    title: 'Shower Systems',
    image: '/images/categories/shower_systems_hd.png',
    count: 18,
    department: 'Showers',
    subcategories: ['Complete shower sets', 'Shower columns', 'Shower panels'],
  },
  {
    id: 'wash_basins',
    title: 'Wash Basins',
    image: '/images/categories/wash_basins_hd.png',
    count: 34,
    department: 'Bathroom',
    subcategories: ['Countertop', 'Table-top', 'Wall-mounted', 'Pedestal', 'Under-counter'],
  },
  {
    id: 'bathtubs',
    title: 'Bathtubs',
    image: '/images/categories/bathtubs_hd.png',
    count: 15,
    department: 'Bathroom',
    subcategories: ['Freestanding', 'Soaking tubs', 'Built-in', 'Corner'],
  },
  {
    id: 'toilets',
    title: 'Toilets',
    image: '/images/categories/toilets_hd.png',
    count: 16,
    department: 'Sanitaryware',
    subcategories: ['Wall-hung', 'Smart toilets', 'One-piece', 'Back-to-wall'],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: '/images/categories/accessories_hd.png',
    count: 45,
    department: 'Accessories',
    subcategories: ['Towel bars', 'Soap dispensers', 'Health faucets', 'Shower channels'],
  },
];

export const ALL_PRODUCTS: Product[] = ` + JSON.stringify(allProducts, null, 2) + `;

export const BESTSELLER_PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => p.isBestseller || p.price > 1200).slice(0, 10);

export const CURATED_RETREAT_PRODUCTS: Product[] = [
  ALL_PRODUCTS[0], // Dune Monolithic Basin
  ALL_PRODUCTS[18], // Linear Basin Mixer
  ALL_PRODUCTS[28], // Aura Rain Shower
  ALL_PRODUCTS[33]  // Thermostatic System
];
`;

fs.writeFileSync('src/data/bathwareData.ts', outputTS, 'utf8');
console.log('Successfully written src/data/bathwareData.ts with ' + allProducts.length + ' products!');
