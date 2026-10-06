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
