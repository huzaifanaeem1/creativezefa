"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  FiEye,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiImage,
} from "react-icons/fi";

/* ✅ TYPES */
type PortfolioItem = {
  id: number;
  title: string;
  category: "logos" | "vectors" | "bundles";
  image: string[];
  alt: string;
};

/* ✅ COMPLETE DATA WITH MULTIPLE IMAGES */
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Custom Logo Design",
    category: "logos",
    image: [
      "/gallery/logo1.jpeg",
      "/gallery/logo2.jpeg", 
      "/gallery/logo3.jpeg",
      "/gallery/logo4.jpeg",
      "/gallery/logo5.jpeg",
      "/gallery/logo6.jpeg",
      "/gallery/logo7.jpeg",
      "/gallery/logo8.jpeg",
      "/gallery/logo9.jpeg",
      "/gallery/logo10.jpeg",
    ],
    alt: "Professional custom logo vector design",
  },
  {
    id: 2,
    title: "3d Mockup Logo Design",
    category: "logos",
    image: [
      "/gallery/3dlogo.jpeg",
      "/gallery/3dlogo-1.jpeg",
      "/gallery/3dlogo-2.jpeg",
      "/gallery/3dlogo-3.jpeg",
      "/gallery/3dlogo-4.jpeg",
      "/gallery/3dlogo-5.jpeg",
      "/gallery/3dlogo-6.jpeg",
      "/gallery/3dlogo-7.jpeg",
      "/gallery/3dlogo-8.jpeg",
      "/gallery/3dlogo-9.jpeg",
      "/gallery/3dlogo-10.jpeg",
      "/gallery/3dlogo-11.jpeg",
      "/gallery/3dlogo-12.jpeg",
      "/gallery/3dlogo-13.jpeg",
      "/gallery/3dlogo-14.jpeg",
      "/gallery/3dlogo-15.jpeg",
      "/gallery/3dlogo-16.jpeg",
    ],
    alt: "Professional custom logo vector design",
  },
  {
    id: 3,
    title: "Raster to Vector Service",
    category: "vectors",
    image: [
      "/gallery/vector-service1.jpeg",
      "/gallery/vector-service2.jpeg",
    ],
    alt: "High-quality raster to vector conversion",
  },
  {
    id: 4,
    title: "Raster to Vector Conversion",
    category: "vectors",
    image: [
      "/gallery/vector-1.jpeg",
      "/gallery/vector-2.jpeg",
      "/gallery/vector-3.jpeg",
      "/gallery/vector-4.jpeg",
      "/gallery/vector-5.jpeg",
      "/gallery/vector-6.jpeg",
      "/gallery/vector-7.jpeg",
      "/gallery/vector-8.jpeg",
      "/gallery/vector-9.jpeg",
      "/gallery/vector-10.jpeg",
      "/gallery/vector-11.jpeg",
      "/gallery/vector-12.jpeg",
      "/gallery/vector-13.jpeg",
      "/gallery/vector-14.jpeg",
      "/gallery/vector-15.jpeg",
      "/gallery/vector-16.jpeg",
      "/gallery/vector-17.jpeg",
      "/gallery/vector-18.jpeg",
      "/gallery/vector-19.jpeg",
      "/gallery/vector-20.jpeg",
      "/gallery/vector-21.jpeg",
      "/gallery/vector-22.jpeg",
      "/gallery/vector-23.jpeg",
    ],
    alt: "High-quality raster to vector conversion",
  },
  {
    id: 5,
    title: "Complext Raster to Vector Conversion",
    category: "vectors",
    image: [
      "/gallery/complex-00.jpeg",
      "/gallery/complex-0.jpeg",
       "/gallery/complex-3.jpeg",
      "/gallery/complex-01.jpeg",
      "/gallery/complex-02.jpeg",
      "/gallery/complex-1.jpeg",
      "/gallery/complex-4.jpeg",
      "/gallery/complex-5.jpeg",
      "/gallery/complex-6.jpeg",
      "/gallery/complex-7.jpeg",
      "/gallery/complex-8.jpeg",
    ],
    alt: "High-quality raster to vector conversion",
  },
  {
    id: 6,
    title: "SVG Bundle Pack",
    category: "bundles",
    image: [
      "/gallery/bundle.jpg",
      "/gallery/bundle0.jpg",
      "/gallery/bundle1.jpg",
      "/gallery/bundle2.jpg",
      "/gallery/bundle3.jpg",
      "/gallery/bundle4.png",
      "/gallery/bundle5.png",
      "/gallery/bundle6.png",
      "/gallery/bundle7.jpg",
      "/gallery/bundle8.jpg",
      "/gallery/bundle9.png",
      "/gallery/bundle10.png",
      "/gallery/bundle11.jpg",
    ],
    alt: "Premium SVG bundle for instant download",
  },
];

/* ✅ CATEGORIES */
const categories = [
  { key: "all", label: "All", icon: FiGrid },
  { key: "logos", label: "Logos", icon: FiImage },
  { key: "vectors", label: "Vectors", icon: FiImage },
  { key: "bundles", label: "Bundles", icon: FiImage },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* 🔥 FILTER ITEMS BASED ON CATEGORY */
  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter((item) => item.category === activeCategory);

  const project = selectedProject !== null ? filteredItems[selectedProject] : null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  /* 🔥 IMAGE NAVIGATION */
  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!project) return;
    setCurrentImage((prev) => (prev + 1) % project.image.length);
  }, [project]);

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!project) return;
    setCurrentImage((prev) => (prev - 1 + project.image.length) % project.image.length);
  }, [project]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentImage(0);
    }, 200);
  }, []);

  /* 🔥 PROJECT NAVIGATION */
  const handleNextProject = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProject === null) return;
    setSelectedProject((prev) => (prev! + 1) % filteredItems.length);
    setCurrentImage(0);
  }, [filteredItems.length, selectedProject]);

  const handlePrevProject = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProject === null) return;
    setSelectedProject((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    setCurrentImage(0);
  }, [filteredItems.length, selectedProject]);

  const openModal = (index: number) => {
    setSelectedProject(index);
    setCurrentImage(0);
    setIsModalOpen(true);
  };

  /* ⌨️ KEYBOARD SUPPORT */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch(e.key) {
        case 'ArrowRight':
          e.preventDefault();
          handleNextImage();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevImage();
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal, handleNextImage, handlePrevImage, isModalOpen]);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Logo & Vector Bundles"
        description="Premium logo designs, vector packs & bundles."
      />

      {/* FILTER BUTTONS - Responsive */}
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedProject(null);
                setIsModalOpen(false);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                activeCategory === cat.key
                  ? "bg-(--accent) text-white shadow-md"
                  : "border border-(--line) text-(--muted) hover:bg-(--surface-2)"
              }`}
            >
              <Icon className="text-xs sm:text-sm" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* GRID - Responsive */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openModal(index)}
            className="group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-(--surface-1) border border-(--line) transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative overflow-hidden aspect-4/3">
              <Image
                src={item.image[0]}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                quality={72}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <FiEye className="text-xl sm:text-2xl mb-1" />
                  <span className="text-xs sm:text-sm font-medium">View Gallery</span>
                </div>
              </div>

              {/* BADGE */}
              {item.image.length > 1 && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                  {item.image.length} images
                </div>
              )}

              {/* TITLE */}
              <p className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL - Optimized for mobile */}
      {isModalOpen && project && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-black/50 rounded-xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE CONTAINER */}
            <div className="relative bg-black/40">
              <Image
                src={project.image[currentImage]}
                alt={project.title}
                width={1600}
                height={1200}
                sizes="100vw"
                quality={80}
                className="h-auto w-full max-h-[50vh] sm:max-h-[70vh] object-contain"
                priority
              />
              
              {/* IMAGE COUNTER */}
              {project.image.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium whitespace-nowrap">
                  {currentImage + 1} / {project.image.length}
                </div>
              )}
            </div>

            {/* INFO BAR */}
            <div className="p-3 sm:p-4 bg-black/60">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm sm:text-xl font-semibold text-white line-clamp-1">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 capitalize">{project.category}</p>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  {(selectedProject ?? 0) + 1}/{filteredItems.length}
                </p>
              </div>
            </div>

            {/* NAVIGATION BUTTONS - Optimized for touch */}
            {project.image.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="text-lg sm:text-2xl" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all"
                  aria-label="Next image"
                >
                  <FiChevronRight className="text-lg sm:text-2xl" />
                </button>
              </>
            )}

            {/* PROJECT NAVIGATION - Mobile optimized */}
            <button
              onClick={handlePrevProject}
              className="absolute left-1 sm:left-4 top-1 sm:top-4 bg-black/60 hover:bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-sm transition-all"
              aria-label="Previous project"
            >
              ← Prev
            </button>

            <button
              onClick={handleNextProject}
              className="absolute right-8 sm:right-16 top-1 sm:top-4 bg-black/60 hover:bg-black/80 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-sm transition-all"
              aria-label="Next project"
            >
              Next →
            </button>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-lg transition-all hover:rotate-90"
              aria-label="Close"
            >
              <FiX className="text-sm sm:text-xl" />
            </button>

            {/* SHORTCUTS HINT - Hide on mobile */}
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm text-white/50 text-[8px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded hidden sm:block">
              ← → | Esc
            </div>
          </div>
        </div>
      )}
    </section>
  );
}