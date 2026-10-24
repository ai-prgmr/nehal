export interface Product {
  name: string;
  description: string;
  imagePlaceholder: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface CategoryData {
  slug: string;
  title: string;
  heroVideoOrImage: string;
  heroVideo?: string;
  tagline?: string;
  manifesto: string;
  products: Product[];
  services: Service[];
}

export const categories: CategoryData[] = [
  {
    slug: "bride",
    title: "The Bride",
    heroVideoOrImage: "/nehal/images/bride-hero.jpg",
    heroVideo: "/nehal/bride.mp4",
    tagline: "SACRED TRADITIONS & MODERN COUTURE",
    manifesto: "Your journey to the perfect Phera ensemble begins here. We craft bespoke lehengas that weave your heritage into every thread, tailored to your silhouette and personal radiance.",
    products: [
      {
        name: "The Signature Phera Lehenga",
        description: "Hand-embroidered zardozi and heritage silk lehengas crafted for the sacred ceremony.",
        imagePlaceholder: "/nehal/images/bride-lehenga.jpg"
      },
      {
        name: "Pre-Wedding Trousseau",
        description: "Luminous, fluid silhouettes for Sangeet, Mehendi, and Haldi celebrations.",
        imagePlaceholder: "/nehal/images/bride-trousseau.jpg"
      }
    ],
    services: [
      {
        title: "Bespoke Design Journey",
        description: "One-on-one consultations from conceptual sketches and color swatching to final embroidery selection."
      },
      {
        title: "Private Fitting Suite",
        description: "Champagne fitting appointments ensuring perfection down to the finest stitch."
      }
    ]
  },
  {
    slug: "groom",
    title: "The Groom",
    heroVideoOrImage: "/nehal/images/groom-hero.jpg",
    heroVideo: "/nehal/groom.mp4",
    tagline: "REGAL STATURE & ARTISANAL TAILORING",
    manifesto: "Regal elegance, understated authority, and sharp tailoring. Step into a masterpiece designed to complement the grandeur of your wedding day.",
    products: [
      {
        name: "The Royal Silk Sherwani",
        description: "Hand-crafted raw silk sherwanis featuring subtle tonal zari and hand-cut pearl buttons.",
        imagePlaceholder: "/nehal/images/groom-sherwani.jpg"
      },
      {
        name: "Heritage Bandhgala & Safa",
        description: "Bespoke structured jackets and customized coordinate accessories.",
        imagePlaceholder: "/nehal/images/parents-bandhgala.jpg"
      }
    ],
    services: [
      {
        title: "Silhouette Customization",
        description: "Master tailoring that enhances posture, comfort, and effortless presence."
      },
      {
        title: "Couple Palette Synchronization",
        description: "Harmonizing tones and textures with the bride's ensembles."
      }
    ]
  },
  {
    slug: "family",
    title: "The Family",
    heroVideoOrImage: "/nehal/images/family-hero.jpg",
    tagline: "COHESIVE HARMONY & TIMELESS DIGNITY",
    manifesto: "A unified vision of grandeur. We curate synchronized, high-fashion Indian outfits for the entire extended family while honoring individual individuality.",
    products: [
      {
        name: "The Complete Family Package",
        description: "Harmonized palettes and custom tailoring for parents, siblings, and immediate family.",
        imagePlaceholder: "/nehal/images/family-package.jpg"
      },
      {
        name: "Heirloom Saree Collection",
        description: "Magnificent traditional Kanjeevaram and Banarasi silks with handcrafted borders.",
        imagePlaceholder: "/nehal/images/parents-saree.jpg"
      }
    ],
    services: [
      {
        title: "Complete Family Wardrobe Curation",
        description: "End-to-end styling for all ceremonies so the entire family looks breathtaking together."
      },
      {
        title: "Heritage Piece Revival",
        description: "Restoring, modernizing, or repurposing cherished vintage family heirlooms."
      }
    ]
  },
  {
    slug: "engagement",
    title: "Engagement / Roka",
    heroVideoOrImage: "/nehal/images/parents-hero.jpg",
    tagline: "SACRED PROMISES & INTIMATE SPLENDOR",
    manifesto: "Mark the auspicious beginning of your wedding journey with refined couture. From bespoke pastel lehengas to sharply tailored bandhgalas and Indo-western silhouettes, Nehal curates effortless elegance for your Sagan, Roka, and Ring ceremonies.",
    products: [
      {
        name: "The Roka Pastel Edit",
        description: "Delicate organza and Chikankari lehengas embellished with tonal pearls and soft shimmer.",
        imagePlaceholder: "/nehal/images/bride-trousseau.jpg"
      },
      {
        name: "Signature Bandhgala Suit",
        description: "Structured jewel-toned jacket with handcrafted buttons and coordinating trouser styling.",
        imagePlaceholder: "/nehal/images/parents-bandhgala.jpg"
      }
    ],
    services: [
      {
        title: "Couple Color Harmony",
        description: "Coordinated palette styling for unforgettable ceremony portraits and family introductions."
      },
      {
        title: "Intimate Event Styling",
        description: "Bespoke drape engineering and personalized jewel pairing for effortless ring-exchange comfort."
      }
    ]
  },
  {
    slug: "wedding",
    title: "The Wedding Collection",
    heroVideoOrImage: "/nehal/images/bride-hero.jpg",
    heroVideo: "/nehal/bride.mp4",
    tagline: "TIMELESS GRANDEUR & COUTURE EXCELLENCE",
    manifesto: "The magnificent centerpiece of sacred celebration. Nehal crafts bespoke bridal lehengas, regal groom sherwanis, and synchronized family ensembles that weave ancestral legacy into every hand-embroidered thread.",
    products: [
      {
        name: "The Signature Bridal Phera Lehenga",
        description: "Hand-embroidered zardozi and raw silk heirloom masterpiece tailored for the sacred ceremony.",
        imagePlaceholder: "/nehal/images/bride-lehenga.jpg"
      },
      {
        name: "The Royal Silk Sherwani",
        description: "Pure raw silk sherwani featuring subtle tonal zari and hand-cut pearl buttons.",
        imagePlaceholder: "/nehal/images/groom-sherwani.jpg"
      }
    ],
    services: [
      {
        title: "Bespoke Couple Consultation",
        description: "Synchronized design journey from concept sketch to final fitting for both bride and groom."
      },
      {
        title: "Full Wedding Party Atelier Access",
        description: "Private luxury fitting suite appointments ensuring seamless coordination across ceremonies."
      }
    ]
  },
  {
    slug: "pre-wedding",
    title: "Pre-Wedding Shoots",
    heroVideoOrImage: "/nehal/images/bride-trousseau.jpg",
    tagline: "CINEMATIC GRACE & EDITORIAL POISE",
    manifesto: "Tell your love story through a high-fashion editorial lens. Nehal curates conceptual wardrobes for your pre-wedding shoot—from flowing destination gowns and breezy resort silks to dramatic contemporary couture tailored for cinematic photography.",
    products: [
      {
        name: "Cinematic Draped Gown",
        description: "Fluid silk-chiffon with dramatic sweep engineered for breathtaking destination shoots.",
        imagePlaceholder: "/nehal/images/style-transformation.jpg"
      },
      {
        name: "Contemporary Indo-Western Ensemble",
        description: "Tailored textured jacket paired with modern draped trousers and subtle gilded accents.",
        imagePlaceholder: "/nehal/images/luxury-style-coaching.jpg"
      }
    ],
    services: [
      {
        title: "Concept & Moodboard Styling",
        description: "Creative styling collaboration with your photographer for scenic and thematic harmony."
      },
      {
        title: "Location-Specific Wardrobe Curation",
        description: "Fabric weights, flow, and color tones engineered to pop against your destination backdrops."
      }
    ]
  },
  {
    slug: "post-wedding",
    title: "Post-Wedding Shoots",
    heroVideoOrImage: "/nehal/images/bridesmaids-hero.jpg",
    tagline: "EFFORTLESS GLAMOUR & NEW BEGINNINGS",
    manifesto: "Celebrate the afterglow of your nuptials. Whether it's an intimate newlywed editorial, reception celebration, or honeymoon portrait session, we style contemporary looks that blend relaxed comfort with radiant sophistication.",
    products: [
      {
        name: "Contemporary Reception Saree",
        description: "Pre-draped metallic tissue silk with delicate crystalline embellishments for reception galas.",
        imagePlaceholder: "/nehal/images/parents-saree.jpg"
      },
      {
        name: "Velvet Dinner Jacket & Tuxedo",
        description: "Rich velvet jacket with satin peak lapels tailored for evening post-wedding celebrations.",
        imagePlaceholder: "/nehal/images/groomsmen-product.jpg"
      }
    ],
    services: [
      {
        title: "Reception & After-Party Styling",
        description: "Effortless transition styling for high-energy post-wedding soirées and cocktail hours."
      },
      {
        title: "Newlywed Getaway Capsule",
        description: "High-end resort wear and dinner styling curated for your honeymoon itinerary."
      }
    ]
  },
  {
    slug: "godbharai",
    title: "GodBharai / Baby Shower",
    heroVideoOrImage: "/nehal/images/godbharai-saree.jpg",
    tagline: "SACRED BLESSINGS & AUSPICIOUS WEAVES",
    manifesto: "Honor the sacred ritual of Godbharai (baby shower) with time-honored dignity and ergonomic luxury. We curate auspicious pure silks, customized lightweight drapes, and bespoke floral ornament harmonization so you feel blissful and regal.",
    products: [
      {
        name: "The Sacred Godbharai Ceremony Saree",
        description: "Lightweight pure Kanjeevaram and Banarasi silks with gentle drape engineering and bespoke floral jewelry harmonization.",
        imagePlaceholder: "/nehal/images/godbharai-saree.jpg"
      },
      {
        name: "Auspicious Heritage Anarkali",
        description: "Handwoven Chanderi silk with subtle gota patti embellishments for effortless all-day grace.",
        imagePlaceholder: "/nehal/images/maternity-cape.jpg"
      }
    ],
    services: [
      {
        title: "Ergonomic & Breathable Drape Customization",
        description: "Weight-balanced lehengas, pre-pleated sarees, and pressure-free waistbands engineered for comfort."
      },
      {
        title: "Ritual & Floral Ornament Art Direction",
        description: "Harmonizing ceremony jewelry with traditional family customs and auspicious rites."
      }
    ]
  },
  {
    slug: "maternity",
    title: "Maternity Styling and Shoot",
    heroVideoOrImage: "/nehal/images/maternity-hero.jpg",
    tagline: "SACRED CELEBRATIONS & LUMINOUS MATERNITY COUTURE",
    manifesto: "Embrace the divine journey into motherhood with effortless poise, breathable silhouettes, and timeless opulence. Nehal curates bespoke Godbharai (baby shower) ceremony ensembles, weight-balanced heirloom silk drapes, and ethereal maternity photoshoot couture designed to celebrate your radiant glow.",
    products: [
      {
        name: "The Sacred Godbharai Ceremony Saree",
        description: "Lightweight pure Kanjeevaram and Banarasi silks with gentle drape engineering and bespoke floral jewelry harmonization for the traditional baby shower ritual.",
        imagePlaceholder: "/nehal/images/godbharai-saree.jpg"
      },
      {
        name: "Ethereal Maternity Photoshoot Couture",
        description: "Breathable pleated cape gowns, layered Chanderi anarkalis, and fluid pastel organza ensembles tailored for maximum comfort and high-fashion maternity portraits.",
        imagePlaceholder: "/nehal/images/maternity-cape.jpg"
      }
    ],
    services: [
      {
        title: "Ergonomic & Breathable Drape Customization",
        description: "Weight-balanced lehengas, pre-pleated maternity sarees, and pressure-free waistbands engineered for effortless comfort during multi-hour rituals."
      },
      {
        title: "Godbharai & Baby Shower Concept Styling",
        description: "End-to-end ceremony styling, floral jewelry harmonization, family color synchronization, and maternity portraiture art direction."
      }
    ]
  },
  {
    slug: "maternity-styling",
    title: "Maternity Styling and Shoot",
    heroVideoOrImage: "/nehal/images/maternity-hero.jpg",
    tagline: "SACRED CELEBRATIONS & LUMINOUS MATERNITY COUTURE",
    manifesto: "Embrace the divine journey into motherhood with effortless poise, breathable silhouettes, and timeless opulence. Nehal curates bespoke Godbharai (baby shower) ceremony ensembles, weight-balanced heirloom silk drapes, and ethereal maternity photoshoot couture designed to celebrate your radiant glow.",
    products: [
      {
        name: "The Sacred Godbharai Ceremony Saree",
        description: "Lightweight pure Kanjeevaram and Banarasi silks with gentle drape engineering and bespoke floral jewelry harmonization for the traditional baby shower ritual.",
        imagePlaceholder: "/nehal/images/godbharai-saree.jpg"
      },
      {
        name: "Ethereal Maternity Photoshoot Couture",
        description: "Breathable pleated cape gowns, layered Chanderi anarkalis, and fluid pastel organza ensembles tailored for maximum comfort and high-fashion maternity portraits.",
        imagePlaceholder: "/nehal/images/maternity-cape.jpg"
      }
    ],
    services: [
      {
        title: "Ergonomic & Breathable Drape Customization",
        description: "Weight-balanced lehengas, pre-pleated maternity sarees, and pressure-free waistbands engineered for effortless comfort during multi-hour rituals."
      },
      {
        title: "Godbharai & Baby Shower Concept Styling",
        description: "End-to-end ceremony styling, floral jewelry harmonization, family color synchronization, and maternity portraiture art direction."
      }
    ]
  },
  {
    slug: "festivals",
    title: "Festivals & Occasions",
    heroVideoOrImage: "/nehal/images/bridesmaids-hero.jpg",
    tagline: "EFFORTLESS OPULENCE FOR CELEBRATIONS",
    manifesto: "From Diwali soirées to destination festivities, elevate your festive wardrobe with breezy organza, delicate threadwork, and contemporary silhouettes.",
    products: [
      {
        name: "Festive Silk & Organza Edit",
        description: "Lightweight luxury kurtas, shararas, and draped sarees for celebratory evenings.",
        imagePlaceholder: "/nehal/images/bridesmaids-product.jpg"
      },
      {
        name: "Contemporary Fusion Sets",
        description: "Modern Indo-western ensembles crafted in pure fabrics and gilded accents.",
        imagePlaceholder: "/nehal/images/groomsmen-product.jpg"
      }
    ],
    services: [
      {
        title: "Seasonal Festive Consultation",
        description: "Curated styling sessions ahead of major festive seasons and destination events."
      },
      {
        title: "Personal Shopper & Sourcing",
        description: "Direct access to rare handloom weaves and bespoke artisan accessories."
      }
    ]
  },
  {
    slug: "bridesmaids",
    title: "Bridesmaids & Groomsmen",
    heroVideoOrImage: "/nehal/images/bridesmaids-hero.jpg",
    tagline: "COORDINATED ENTOURAGE ELEGANCE",
    manifesto: "An entourage that complements the couple's vision. Coordinated elegance for your closest friends and family.",
    products: [
      {
        name: "Pastel Lehenga Sets",
        description: "Flowy, coordinated but distinct lehengas for the bridesmaids.",
        imagePlaceholder: "/nehal/images/bridesmaids-product.jpg"
      },
      {
        name: "Coordinated Groomsmen Looks",
        description: "Synchronized kurta pajama sets with varied rich silk Nehru jackets.",
        imagePlaceholder: "/nehal/images/groomsmen-product.jpg"
      }
    ],
    services: [
      {
        title: "Group Consultations",
        description: "Styling sessions for the entire bridal party to ensure a cohesive look."
      }
    ]
  }
];
