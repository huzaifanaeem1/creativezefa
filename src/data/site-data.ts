export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  price: string;
  icon: "logo" | "cap" | "puff" | "jacket" | "custom";
};

export type PortfolioItem = {
  id: number;
  title: string;
  category: "logos" | "caps" | "3d-puff" | "jackets" | "custom";
  image: string;
  alt: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  rating: number;
};

export type PricingPlan = {
  name: string;
  startingFrom: string;
  turnaround: string;
  revisions: string;
  bestFor: string;
};

export const stats: Stat[] = [
  { value: "10+", label: "Years of digitizing experience" },
  { value: "8,500+", label: "Designs delivered worldwide" },
  { value: "2-12h", label: "Standard turnaround window" },
  { value: "99%", label: "First-pass client approval" },
];

export const trustBadges = [
  "DST, PES, EMB, JEF formats",
  "Commercial machine-ready files",
  "24/7 support availability",
  "NDA-friendly workflow",
];

export const skills = [
  "Wilcom Embroidery Studio",
  "Tajima DG/ML",
  "Pulse and Hatch workflows",
  "Thread path optimization",
  "Push-pull compensation",
  "Fabric-specific underlay strategy",
];

export const services = [
  {
    title: "Logo Vector Tracing",
    description:
      "Convert blurry or low-quality logos into clean, scalable vector files with sharp lines and perfect curves.",
    price: "$5+",
    icon: "logo",
  },
  {
    title: "Image to Vector Conversion",
    description:
      "Turn any raster image into high-quality vector artwork ready for print, branding, and production.",
    price: "$5+",
    icon: "image",
  },
  {
    title: "Custom Vector Illustration",
    description:
      "Detailed and complex artwork tracing with smooth curves, layers, and professional finishing.",
    price: "$10+",
    icon: "illustration",
  },
  {
    title: "Logo Design",
    description:
      "Modern and professional logo design tailored to your brand identity and business vision.",
    price: "$10+",
    icon: "design",
  },
  {
    title: "Social Media Post Design",
    description:
      "Creative posts for Instagram, Facebook, and ads designed to boost engagement and visibility.",
    price: "$8+",
    icon: "social",
  },
  {
    title: "YouTube Thumbnail Design",
    description:
      "High-converting thumbnails that grab attention and increase your click-through rate.",
    price: "$5+",
    icon: "thumbnail",
  },
  {
    title: "Etsy Virtual Assistant",
    description:
      "Complete Etsy store support including product listings, SEO optimization, and management.",
    price: "$15+",
    icon: "etsy",
  },
  {
    title: "Etsy Listing Images Design",
    description:
      "Professional product images and mockups designed to increase conversions on Etsy.",
    price: "$10+",
    icon: "listing",
  },
  {
    title: "Video Editing",
    description:
      "Smooth and modern video editing for reels, TikTok, YouTube, and promotional content.",
    price: "$10+",
    icon: "video",
  },
];
// export const portfolioItems: PortfolioItem[] = [
//   {
//     id: 1,
//     title: "Logo Design",
//     category: "logos",
//     image: "/gallery/logo-1.svg",
//     alt: "Detailed crest logo digitized for apparel",
//   },
//   {
//     id: 2,
//     title: "Raster to Vector",
//     category: "vectors",
//     image: "/gallery/cap-1.svg",
//     alt: "Cap embroidery with clean stitch direction",
//   },
//   { 
//     id: 3,
//     title: "SVG Bundles Design",
//     category: "bundles",
//     image: "/gallery/puff-1.svg",
//     alt: "Raised 3D puff embroidery sample",
//   },

// ];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    startingFrom: "$12",
    turnaround: "8 to 12 hours",
    revisions: "2 free revisions",
    bestFor: "Simple left chest logos",
  },
  {
    name: "Growth",
    startingFrom: "$22",
    turnaround: "4 to 8 hours",
    revisions: "Unlimited minor revisions",
    bestFor: "Caps, puff, and detailed branding",
  },
  {
    name: "Production",
    startingFrom: "$40",
    turnaround: "2 to 6 hours",
    revisions: "Priority support and revisions",
    bestFor: "Jacket backs and bulk production",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "Apparel Brand Owner",
    message:
      "The stitch quality is consistently excellent. Every file runs smoothly on our machines with no surprises.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Print and Embroidery Shop",
    message:
      "Fast turnaround and very accurate sew-outs. This service has become part of our daily production workflow.",
    rating: 5,
  },
  {
    name: "Imran A.",
    role: "Freelance Merch Designer",
    message:
      "Great communication and fair pricing. My 3D puff jobs look sharp and clean every time.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long does it take to convert an image to vector?",
    answer:
      "Most designs are completed within 4 to 12 hours. Complex or detailed artwork may take up to 24 hours depending on the complexity.",
  },
  {
    question: "Which file formats will I receive?",
    answer:
      "You will receive high-quality vector files including AI, SVG, EPS, PDF, and PNG — ready for print, branding, and digital use.",
  },
  {
    question: "Can you work with low-quality or blurry images?",
    answer:
      "Yes, I specialize in converting low-quality, pixelated, or blurry images into clean, sharp vector artwork.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, I provide revisions to make sure you are fully satisfied with the final design.",
  },
  {
    question: "Do you also design logos and social media posts?",
    answer:
      "Yes, I offer logo design, social media posts, thumbnails, and other creative design services.",
  },
  {
    question: "Can you help with Etsy store management?",
    answer:
      "Yes, I provide Etsy VA services including product listings, SEO optimization, and store management.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
