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
  manifesto: string;
  products: Product[];
  services: Service[];
}

export const categories: CategoryData[] = [
  {
    slug: "bride",
    title: "The Bride",
    heroVideoOrImage: "/images/bride-hero.jpg",
    manifesto: "Your journey to the perfect Phera ensemble begins here. We craft bespoke lehengas that weave your heritage into every thread.",
    products: [
      {
        name: "The Signature Lehenga",
        description: "Heavily embroidered custom lehengas for the main ceremony.",
        imagePlaceholder: "/images/bride-lehenga.jpg"
      },
      {
        name: "Pre-Wedding Trousseau",
        description: "Vibrant ensembles for Haldi, Mehendi, and Sangeet.",
        imagePlaceholder: "/images/bride-trousseau.jpg"
      }
    ],
    services: [
      {
        title: "Bespoke Design Journey",
        description: "1-on-1 consultations from rough sketches to final embroidery selection."
      },
      {
        title: "VIP Fitting Sessions",
        description: "Private, champagne-fitting appointments to ensure flawless alterations."
      }
    ]
  },
  {
    slug: "groom",
    title: "The Groom",
    heroVideoOrImage: "/images/groom-hero.jpg",
    manifesto: "Regal elegance and sharp tailoring. Step into a masterpiece designed to complement the grandeur of your day.",
    products: [
      {
        name: "The Classic Sherwani",
        description: "Hand-crafted sherwanis featuring intricate zari or thread work.",
        imagePlaceholder: "/images/groom-sherwani.jpg"
      }
    ],
    services: [
      {
        title: "Silhouette Customization",
        description: "Tailoring that enhances posture and ensures comfort for long ceremonies."
      }
    ]
  },
  {
    slug: "bridesmaids",
    title: "Bridesmaids & Groomsmen",
    heroVideoOrImage: "/images/bridesmaids-hero.jpg",
    manifesto: "An entourage that complements the couple's vision. Coordinated elegance for your closest friends and family.",
    products: [
      {
        name: "Pastel Lehenga Sets",
        description: "Flowy, coordinated but distinct lehengas for the bridesmaids.",
        imagePlaceholder: "/images/bridesmaids-product.jpg"
      },
      {
        name: "Coordinated Groomsmen Looks",
        description: "Synchronized kurta pajama sets with varied rich silk Nehru jackets.",
        imagePlaceholder: "/images/groomsmen-product.jpg"
      }
    ],
    services: [
      {
        title: "Group Consultations",
        description: "Styling sessions for the entire bridal party to ensure a cohesive look."
      }
    ]
  },
  {
    slug: "parents",
    title: "The Parents",
    heroVideoOrImage: "/images/parents-hero.jpg",
    manifesto: "Grace and dignity for the anchors of the family. Heritage pieces that reflect pride and joy.",
    products: [
      {
        name: "Heirloom Saree Collection",
        description: "Magnificent, traditional Kanjeevaram silk sarees with thick gold border work.",
        imagePlaceholder: "/images/parents-saree.jpg"
      },
      {
        name: "Structured Bandhgalas",
        description: "Classic, elegant structured Bandhgala suits for fathers.",
        imagePlaceholder: "/images/parents-bandhgala.jpg"
      }
    ],
    services: [
      {
        title: "Heritage Revivals",
        description: "Restoring or repurposing vintage family pieces for the ceremony."
      }
    ]
  },
  {
    slug: "family",
    title: "The Whole Family",
    heroVideoOrImage: "/images/family-hero.jpg",
    manifesto: "A unified vision of grandeur. We curate synchronized, high-fashion Indian outfits for the entire extended family.",
    products: [
      {
        name: "The Complete Package",
        description: "Tailored, synchronized outfits for every member, honoring individual style while maintaining the overarching theme.",
        imagePlaceholder: "/images/family-package.jpg"
      }
    ],
    services: [
      {
        title: "Complete Styling Curation",
        description: "End-to-end wardrobe planning for the entire family across all wedding events."
      }
    ]
  }
];
