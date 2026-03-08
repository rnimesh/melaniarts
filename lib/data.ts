export const BUSINESS_EMAIL = "melani.arts@gmail.com";

export function getQuoteMailtoUrl(serviceName?: string): string {
  const subject = encodeURIComponent("Quote Request - MelaniArts");
  const body = serviceName
    ? encodeURIComponent(
        `Hi MelaniArts,\n\nI would like to request a quote for:\n\nService: ${serviceName}\n\nQuantity/Dimensions:\n\nAdditional details:\n\nThank you!`
      )
    : encodeURIComponent(
        `Hi MelaniArts,\n\nI would like to request a quote.\n\nService/Product:\n\nQuantity/Dimensions:\n\nAdditional details:\n\nThank you!`
      );
  return `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
}

export const WA_NUMBER = "94717402537";

export function getQuoteWhatsAppUrl(serviceName?: string): string {
  const message = serviceName
    ? `Hi MelaniArts! I would like to request a quote for ${serviceName}.`
    : "Hi MelaniArts! I would like to request a quote.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  options: string[];
  image: string;
  cta: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  business?: string;
}

export interface WhyReason {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "digital-printing",
    title: "Digital Printing",
    description:
      "High-resolution digital printing for any size and any purpose. Whether you need a banner for an event, flyers for a promotion, or posters for your store, we deliver sharp, vibrant prints fast.",
    options: [
      "Indoor",
      "Outdoor",
      "Sticker",
      "Canvas",
    ],
    image: "/images/IMG_20230904_155743.jpg",
    cta: "Get a Quote",
  },
  {
    id: "stickers",
    title: "Stickers",
    description:
      "Custom stickers for every need — from product labels and decals to promotional stickers and vehicle graphics. High-quality vinyl and printed options available.",
    options: [
      "Cut vinyl stickers",
      "Printed stickers",
      "Vehicle decals",
      "Product labels",
    ],
    image: "/images/20200925_195206.jpg",
    cta: "Get a Quote",
  },
  {
    id: "name-boards",
    title: "Name Boards",
    description:
      "Make your first impression count. We design and produce custom name boards for shops, offices, restaurants, schools, and more. Available in a range of materials including acrylic, metal, wood, and PVC.",
    options: [
      "LED-lit boards",
      "3D lettering",
      "Wall-mounted and hanging boards",
      "Indoor & outdoor variants",
    ],
    image: "/images/IMG_20230302_124653.jpg",
    cta: "Get a Quote",
  },
  {
    id: "light-boards",
    title: "Light Boards",
    description:
      "Illuminated signage that stands out day and night. We create eye-catching light boards and LED signage for businesses, retail stores, and outdoor displays.",
    options: [
      "LED-lit signage",
      "Neon-style boards",
      "Backlit displays",
      "Indoor & outdoor options",
    ],
    image: "/images/20201113_185618aa.jpg",
    cta: "Get a Quote",
  },
  {
    id: "Sign Board",
    title: "Sign Board",
    description:
      "We produce custom sign boards with a range of materials including acrylic, metal, wood, and PVC. Available in a range of sizes and finishes.",
    options: [
      "Acrylic sign boards",
      "Metal sign boards",
      "Wood sign boards",
      "PVC sign boards",
    ],
    image: "/images/1eea383e-b8ca-400d-a9ef-117ef560244d.jpeg",
    cta: "Get a Quote",
  },
  {
    id: "number-plates",
    title: "Number Plates",
    description:
      "We produce standard and customised vehicle number plates with clear, durable lettering. Suitable for cars, bikes, tuk-tuks, and commercial vehicles.",
    options: [],
    image: "/images/9f237564-cfbf-494d-a6e2-5158ef33b6f3.jpeg",
    cta: "Get a Quote",
  },
  {
    id: "rollups",
    title: "Rollups",
    description:
      "Portable roll-up banners and stands perfect for exhibitions, trade shows, events, and retail displays. Easy to transport and set up anywhere.",
    options: [
      "Retractable banners",
      "Pop-up stands",
      "Various sizes available",
      "Quick turnaround",
    ],
    image: "/images/ru.jpeg",
    cta: "Get a Quote",
  },
  {
    id: "feather-flags",
    title: "Feather Flags",
    description:
      "Attention-grabbing feather flags and teardrop banners for outdoor promotions, events, and storefronts. Lightweight, durable, and highly visible.",
    options: [
      "Single & double-sided",
      "Various heights",
      "Custom designs",
      "Event & retail use",
    ],
    image: "/images/placeholder.svg",
    cta: "Get a Quote",
  },
  {
    id: "one-way-visions",
    title: "One Way Visions",
    description:
      "Perforated window graphics that allow visibility from inside while displaying your brand outside. Ideal for shop fronts, vehicles, and office windows.",
    options: [
      "Window signage",
      "Vehicle window graphics",
      "Full or partial coverage",
      "Custom sizes",
    ],
    image: "/images/placeholder.svg",
    cta: "Get a Quote",
  },
  {
    id: "cross-banners",
    title: "Cross Banners",
    description:
      "Street-spanning cross banners and overhead signage for events, promotions, and street branding. Make a bold statement with high-impact visuals.",
    options: [
      "Event branding",
      "Street promotions",
      "Custom dimensions",
      "Durable outdoor material",
    ],
    image: "/images/2014-05-06 05.18.05.jpg",
    cta: "Get a Quote",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description:
      "Professional graphic design services for logos, brochures, flyers, social media graphics, and brand identity. We bring your ideas to life with creative, polished designs.",
    options: [
      "Logo design",
      "Brand identity",
      "Marketing materials",
      "Social media graphics",
    ],
    image: "/images/placeholder.svg",
    cta: "Get a Quote",
  },
  {
    id: "awards",
    title: "Awards",
    description:
      "Celebrate achievement in style. We craft custom awards, trophies, and plaques for schools, sporting events, corporate recognition, and more. Engraving and custom design available.",
    options: ["Acrylic", "Crystal", "Metal", "Timber"],
    image: "/images/awards.jpeg",
    cta: "Get a Quote",
  },
  {
    id: "mug-printing",
    title: "Mug Printing",
    description:
      "Create personalised mugs for gifts, corporate giveaways, or events. Upload your photo, logo, or message and we'll print it on a high-quality ceramic mug that lasts.",
    options: [
      "Birthday & wedding gifts",
      "Corporate branded merchandise",
      "School & club events",
      "Bulk orders welcome",
    ],
    image: "/images/IMG_20231110_162505s.jpg",
    cta: "Get a Quote",
  },
  {
    id: "photocopy",
    title: "Photocopy",
    description:
      "Fast and affordable photocopying for documents, forms, and publications. Black & white and colour options available. Ideal for students, offices, and walk-in customers.",
    options: [],
    image: "/images/placeholder.svg",
    cta: "Visit Us Today",
  },
  {
    id: "laminating",
    title: "Laminating",
    description:
      "Protect your documents, ID cards, photos, and prints with professional laminating services. Available in various thicknesses for different durability needs.",
    options: [
      "Document laminating",
      "ID card laminating",
      "Photo preservation",
      "Various thickness options",
    ],
    image: "/images/placeholder.svg",
    cta: "Get a Quote",
  },
  {
    id: "visiting-cards",
    title: "Visiting Cards",
    description:
      "Elegant visiting cards that leave a lasting impression. We offer a range of designs, finishes, and paper options to suit your professional needs.",
    options: [
      "Matte & glossy",
      "Embossing & foil",
      "Standard & premium stocks",
      "Bulk discounts",
    ],
    image: "/images/placeholder.svg",
    cta: "Get a Quote",
  },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "p1", category: "Name Boards", image: "/images/20201031_143915s.jpg", caption: "Name Boards" },
  { id: "p2", category: "Sticker", image: "/images/20201029_135929ss.jpg", caption: "Vehicle Stickers" },
  { id: "p3", category: "Mug Printing", image: "/images/IMG_20231110_162505s.jpg", caption: "Custom Mug Printing" },
  { id: "p22", category: "Sign Board", image: "/images/hw1.jpeg", caption: "" },
  { id: "p5", category: "Light Boards", image: "/images/20201113_185618aa.jpg", caption: "LED-lit shop front signage" },
  { id: "p6", category: "Banners", image: "/images/IMG_20230904_155743.jpg", caption: "Banners" },
  { id: "p8", category: "Sign Board", image: "/images/20181114_160406.jpg", caption: "Sign Board" },
  { id: "p9", category: "Rollups", image: "/images/0cfc8ff6-cfd2-43ad-9e30-18eba15a6110.jpeg", caption: "Roll-up stand for exhibition" },
  { id: "p10", category: "Name Boards", image: "/images/1b632432-2c87-4fb6-b569-b3374d88e000.jpeg", caption: "" },
  { id: "p11", category: "Sign Board", image: "/images/1eea383e-b8ca-400d-a9ef-117ef560244d.jpeg", caption: "" },
  { id: "p35", category: "Name Board", image: "/images/oasis1.jpeg", caption: "" },
  { id: "p12", category: "Number Plates", image: "/images/9f237564-cfbf-494d-a6e2-5158ef33b6f3.jpeg", caption: "" },
  { id: "p14", category: "Stickers", image: "/images/2014-06-28 12.44.13.jpg", caption: "Vehicle Stickers" },
  { id: "p15", category: "Light Boards", image: "/images/20150219_193635.jpg", caption: "LED-lit board" },
  { id: "p16", category: "Stickers", image: "/images/20180926_120637.jpg", caption: "Vehicle Stickers" },
  { id: "p17", category: "Light Boards", image: "/images/20190409_181106s.jpg", caption: "LED-lit board" },
  { id: "p18", category: "Stickers", image: "/images/20200925_195206.jpg", caption: "" },
  { id: "p19", category: "Sign Board", image: "/images/c308f241-73be-41fb-b144-c877717cec6e.jpeg", caption: "Road side sign boards" },
  { id: "p19", category: "Name Boards", image: "/images/e7aff874-554e-4656-9b11-a738cde09bc4.jpeg", caption: "" },
  { id: "p19", category: "Awards", image: "/images/IMG_5554.jpeg", caption: "" },
  { id: "p7", category: "Number Plates", image: "/images/05ea9e21-7a51-48fd-95aa-d71094302ae8.jpeg", caption: "Number Plates" },
  { id: "p19", category: "Name Board", image: "/images/IMG_20230302_124653.jpg", caption: "" },
  { id: "p19", category: "Banner", image: "/images/IMG_20230303_135634.jpg", caption: "" },
  { id: "p36", category: "Name Board", image: "/images/bp3.jpeg", caption: "" },
  { id: "p19", category: "Sign Boards", image: "/images/IMG_20230420_173920.jpg", caption: "" },
  { id: "p19", category: "Name Boards", image: "/images/IMG_20231011_145000.jpg", caption: "" },
  { id: "p19", category: "Banner", image: "/images/IMG_20231219_160955.jpg", caption: "" },
  { id: "p19", category: "Sign Board", image: "/images/IMG_20231227_163842.jpg", caption: "" },
  { id: "p20", category: "Sign Board", image: "/images/china sign board.jpeg", caption: "" },
  { id: "p21", category: "Stickers", image: "/images/dodolboard1.jpeg", caption: "" },
  { id: "p22", category: "Sign Board", image: "/images/hw1.jpeg", caption: "" },
  { id: "p23", category: "Key Tags", image: "/images/tags.jpeg", caption: "" },
  { id: "p24", category: "Name Board", image: "/images/bc.jpeg", caption: "" },
  { id: "p25", category: "Board", image: "/images/hipg.jpeg", caption: "" },
  { id: "p26", category: "Vehicle Stickers", image: "/images/dkd.jpeg", caption: "" },
  { id: "p27", category: "Vehicle Stickers", image: "/images/vs.jpeg", caption: "" },
  { id: "p28", category: "Light Board", image: "/images/rbh.jpeg", caption: "" },
  { id: "p29", category: "Banner", image: "/images/cb1.jpeg", caption: "" },
  { id: "p30", category: "Board", image: "/images/bp1.jpeg", caption: "" },
  { id: "p31", category: "Awards", image: "/images/awards.jpeg", caption: "" },
  { id: "p32", category: "Board", image: "/images/dk2.jpeg", caption: "" },
  { id: "p33", category: "Light Board", image: "/images/lb.jpeg", caption: "" },
  { id: "p34", category: "Banner", image: "/images/np.jpeg", caption: "" },
  { id: "p37", category: "Rollups", image: "/images/ru.jpeg", caption: "" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Fast service and excellent quality. Our shop board looks amazing! The team was attentive and delivered exactly what we envisioned.",
    name: "Client Name",
    business: "Business Name",
  },
  {
    id: "t2",
    quote:
      "Got our vehicle wrapped and the team was professional from start to finish. Very happy with the results — highly recommend.",
    name: "Client Name",
    business: undefined,
  },
  {
    id: "t3",
    quote:
      "Best mug printing in Hambantota. Used them for our office gifts and everyone loved them. Will definitely order again!",
    name: "Client Name",
    business: undefined,
  },
];

export const whyReasons: WhyReason[] = [
  {
    id: "r1",
    title: "Quality You Can See",
    description:
      "Every product is crafted with attention to detail and durable materials.",
    icon: "award",
  },
  {
    id: "r2",
    title: "Fast Turnaround",
    description:
      "Same-day and next-day options available for urgent orders.",
    icon: "zap",
  },
  {
    id: "r3",
    title: "Two Convenient Locations",
    description:
      "Serving clients in Hambantota and Colombo with the same quality service.",
    icon: "map-pin",
  },
  {
    id: "r4",
    title: "Affordable for Everyone",
    description:
      "Competitive pricing for individuals, small businesses, and corporates alike.",
    icon: "tag",
  },
];
