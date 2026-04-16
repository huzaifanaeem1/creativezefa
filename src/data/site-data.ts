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

export const services: Service[] = [
  {
    title: "Logo Digitizing",
    description:
      "Crisp, production-ready logo files tuned for clean stitches and balanced density.",
    price: "Starting at $12",
    icon: "logo",
  },
  {
    title: "Cap Digitizing",
    description:
      "Center-out sequencing and cap frame-safe paths to avoid distortion on curved panels.",
    price: "Starting at $18",
    icon: "cap",
  },
  {
    title: "3D Puff Digitizing",
    description:
      "Foam-ready satin architecture with edge control for bold, raised embroidery results.",
    price: "Starting at $22",
    icon: "puff",
  },
  {
    title: "Jacket Back Digitizing",
    description:
      "Large-format compositions with smooth fill logic for premium jackets and uniforms.",
    price: "Starting at $40",
    icon: "jacket",
  },
  {
    title: "Custom Embroidery Designs",
    description:
      "From sketches to stitched reality with technical digitizing tailored to your fabric and machine.",
    price: "Starting at $25",
    icon: "custom",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Streetwear Crest Logo",
    category: "logos",
    image: "/gallery/logo-1.svg",
    alt: "Detailed crest logo digitized for apparel",
  },
  {
    id: 2,
    title: "Sports Team Cap Front",
    category: "caps",
    image: "/gallery/cap-1.svg",
    alt: "Cap embroidery with clean stitch direction",
  },
  {
    id: 3,
    title: "Premium 3D Monogram",
    category: "3d-puff",
    image: "/gallery/puff-1.svg",
    alt: "Raised 3D puff embroidery sample",
  },
  {
    id: 4,
    title: "Motor Club Jacket Back",
    category: "jackets",
    image: "/gallery/jacket-1.svg",
    alt: "Large jacket back embroidery artwork",
  },
  {
    id: 5,
    title: "Coffee Brand Patch",
    category: "custom",
    image: "/gallery/custom-1.svg",
    alt: "Custom patch embroidery digitizing",
  },
  {
    id: 6,
    title: "Minimal Brand Mark",
    category: "logos",
    image: "/gallery/logo-2.svg",
    alt: "Minimal logo digitized for polos",
  },
  {
    id: 7,
    title: "Flat Brim Cap Series",
    category: "caps",
    image: "/gallery/cap-2.svg",
    alt: "Series of cap embroidery outputs",
  },
  {
    id: 8,
    title: "3D Shield Emblem",
    category: "3d-puff",
    image: "/gallery/puff-2.svg",
    alt: "Foam-ready shield emblem",
  },
];

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
    question: "What is your usual turnaround time?",
    answer:
      "Most standard designs are delivered within 4 to 12 hours. Complex jacket backs may take up to 24 hours.",
  },
  {
    question: "Which file formats do you provide?",
    answer:
      "I deliver DST, PES, JEF, EMB, EXP, and more based on your machine requirements.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on stitch count, complexity, and placement. You always receive a clear quote before work starts.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Minor revisions are included to ensure your design stitches exactly as expected.",
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
