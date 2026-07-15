"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { FiEye, FiGrid, FiImage } from "react-icons/fi";

// ─── Types ────────────────────────────────────────────────────────────────────

type PortfolioItem = {
  id: number;
  title: string;
  category: "logos" | "vectors" | "bundles";
  image: string[];
  alt: string;
};

type CategoryKey = "all" | "logos" | "vectors" | "bundles";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    title: "3D Mockup Logo Design",
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
    title: "Complex Raster to Vector Conversion",
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
    alt: "High-quality complex raster to vector conversion",
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

const categories: { key: CategoryKey; label: string; icon: typeof FiGrid }[] = [
  { key: "all", label: "All", icon: FiGrid },
  { key: "logos", label: "Logos", icon: FiImage },
  { key: "vectors", label: "Vectors", icon: FiImage },
  { key: "bundles", label: "Bundles", icon: FiImage },
];

// ─── SectionHeading (inline to keep single file) ──────────────────────────────

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-(--accent)">
        {eyebrow}
      </p>
      <h2 className="mb-3 text-2xl font-bold text-(--foreground) sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl text-sm text-(--muted) sm:text-base">{description}</p>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  // Which project's images are currently loaded in the lightbox
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Build slides array for the active project
  const activeProject =
    activeProjectIndex !== null ? filteredItems[activeProjectIndex] : null;

  const slides = activeProject
    ? activeProject.image.map((src) => ({ src }))
    : [];

  const openLightbox = useCallback((projectIndex: number, imageIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Reset active project when filter changes so stale slides aren't reused
  useEffect(() => {
    setLightboxOpen(false);
    setActiveProjectIndex(null);
  }, [activeCategory]);

  return (
    <>
      {/* ─── Lightbox CSS overrides ─────────────────────────────────────────── */}
      <style>{`
        /* Remove the carousel "peek" effect — show only one slide at a time */
        .yarl__container {
          background: rgba(0, 0, 0, 0.94) !important;
        }
        /* Ensure the active slide fills the viewport correctly */
        .yarl__slide {
          padding: 0 !important;
        }
        /* Image: respect aspect ratio, never crop, scale to viewport */
        .yarl__slide_image {
          max-height: 88vh !important;
          max-width: 92vw !important;
          object-fit: contain !important;
          border-radius: 4px;
        }
        /* Hide previous/next slide ghosts completely */
        .yarl__slide_prev,
        .yarl__slide_next {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        /* Counter pill */
        .yarl__counter {
          font-size: 0.75rem !important;
          background: rgba(0,0,0,0.55) !important;
          backdrop-filter: blur(8px) !important;
          border-radius: 999px !important;
          padding: 4px 12px !important;
          color: rgba(255,255,255,0.9) !important;
        }
        /* Navigation buttons — large touch targets, never overlap image */
        .yarl__button {
          background: rgba(0,0,0,0.50) !important;
          backdrop-filter: blur(6px) !important;
          border-radius: 50% !important;
          width: 44px !important;
          height: 44px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #fff !important;
          transition: background 0.2s !important;
        }
        .yarl__button:hover {
          background: rgba(0,0,0,0.80) !important;
        }
        @media (max-width: 640px) {
          .yarl__slide_image {
            max-height: 80vh !important;
            max-width: 98vw !important;
          }
        }
      `}</style>

      <section
        id="portfolio"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20"
      >
        <SectionHeading
          eyebrow="Portfolio"
          title="Logo & Vector Bundles"
          description="Premium logo designs, vector packs & bundles."
        />

               {/* ─── NEW: Showcase Image ────────────────────────────────────────────── */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-(--line) sm:mb-12">
          <Image
            src="/vector-collection.webp"
            alt="CreativeZefa Vector Collection"
            width={3840}
            height={6000}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        {/* ── Filter buttons ──────────────────────────────────────────────── */}
        <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                aria-pressed={isActive}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-(--accent) text-white shadow-md"
                    : "border border-(--line) text-(--muted) hover:bg-(--surface-2)"
                }`}
              >
                <Icon className="text-xs sm:text-sm" aria-hidden />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Grid ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-(--line) bg-(--surface-1) text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              aria-label={`Open gallery: ${item.title}`}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image[0]}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={72}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex translate-y-2 flex-col items-center text-white transition-transform duration-300 group-hover:translate-y-0">
                    <FiEye className="mb-1 text-xl sm:text-2xl" aria-hidden />
                    <span className="text-xs font-medium sm:text-sm">View Gallery</span>
                  </div>
                </div>

                {/* Image count badge */}
                {item.image.length > 1 && (
                  <div className="absolute right-2 top-2 rounded-full bg-black/60 px-1.5 py-0.5 text-[10px] text-white backdrop-blur-sm sm:right-3 sm:top-3 sm:px-2 sm:py-1 sm:text-xs">
                    {item.image.length} images
                  </div>
                )}

                {/* Title on hover */}
                <p className="absolute bottom-2 left-2 line-clamp-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:bottom-3 sm:left-3 sm:text-sm">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {lightboxOpen && activeProject && (
        <Lightbox
          open={lightboxOpen}
          close={closeLightbox}
          slides={slides}
          index={lightboxIndex}
          plugins={[Counter, Zoom]}
          carousel={{
            // Show ONLY the active slide — no peeking neighbours
            spacing: 0,
            padding: 0,
            preload: 1,
            finite: false,
          }}
          animation={{ fade: 200, swipe: 200 }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
          }}
          render={{
            // Use Next/Image for the lightbox slide
            slide: ({ slide }) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt=""
                  style={{
                    maxHeight: "88vh",
                    maxWidth: "92vw",
                    objectFit: "contain",
                    borderRadius: "4px",
                    display: "block",
                  }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            ),
          }}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.94)" },
          }}
          labels={{
            Previous: "Previous image",
            Next: "Next image",
            Close: "Close lightbox",
          }}
        />
      )}
    </>
  );
}