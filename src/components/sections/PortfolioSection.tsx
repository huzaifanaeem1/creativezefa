"use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/data/site-data";

const categories = [
  { key: "all", label: "All" },
  { key: "logos", label: "Logos" },
  { key: "caps", label: "Caps" },
  { key: "3d-puff", label: "3D Puff" },
  { key: "jackets", label: "Jackets" },
  { key: "custom", label: "Custom" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("all");

  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return portfolioItems;
    return portfolioItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const project =
    selectedProject !== null ? filteredItems[selectedProject] : null;

  // Keyboard support 🔥
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!project) return;

      if (e.key === "ArrowRight") {
        setCurrentImage((prev) =>
          prev < project.image.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowLeft") {
        setCurrentImage((prev) =>
          prev > 0 ? prev - 1 : prev
        );
      }

      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Recent Projects"
        description="Click any design to preview gallery."
      />

      {/* Categories */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key);
              setSelectedProject(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeCategory === cat.key
                ? "bg-black text-white"
                : "border text-gray-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedProject(index);
              setCurrentImage(0);
            }}
            className="cursor-pointer overflow-hidden rounded-xl group"
          >
            <div className="relative">
              <img
                src={item.image[0]} // first image as cover
                alt={item.title}
                className="h-44 w-full object-cover transition group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <p className="absolute bottom-2 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {project && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE */}
            <img
              src={project.image[currentImage]}
              className="w-full h-[65vh] object-cover rounded-xl"
            />

            {/* INFO */}
            <div className="flex justify-between mt-3 text-white">
              <p className="text-lg font-semibold">
                {project.title}
              </p>
              <p className="text-sm opacity-70">
                {currentImage + 1} / {project.image.length}
              </p>
            </div>

            {/* PREV */}
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev > 0 ? prev - 1 : prev
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ⬅️
            </button>

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev < project.image.length - 1
                    ? prev + 1
                    : prev
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ➡️
            </button>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}