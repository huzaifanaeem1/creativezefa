"use client";

import { useMemo, useState } from "react";
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
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = portfolioItems.find((item) => item.id === selectedId) ?? null;

  return (
    <section id="portfolio" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Recent embroidery digitizing projects"
        description="Browse stitched-ready samples by category. Click any project for a larger preview."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveCategory(category.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category.key
                ? "bg-(--accent) text-white"
                : "border border-(--line) bg-(--surface) text-(--muted) hover:text-(--heading)"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedId(item.id)}
            className="group card-surface overflow-hidden p-0 text-left"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4">
              <p className="font-display text-lg font-semibold text-(--heading)">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-(--muted)">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="card-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">Before</p>
          <img
            src="/gallery/before.svg"
            alt="Original artwork before digitizing optimization"
            className="mt-3 h-52 w-full rounded-xl object-cover"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-(--muted)">Original artwork with no stitch-path optimization.</p>
        </article>
        <article className="card-surface p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">After</p>
          <img
            src="/gallery/after.svg"
            alt="Optimized embroidery-ready output after digitizing"
            className="mt-3 h-52 w-full rounded-xl object-cover"
            loading="lazy"
          />
          <p className="mt-3 text-sm text-(--muted)">Balanced density and stitch sequencing for clean production output.</p>
        </article>
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedId(null)}
        >
          <div className="w-full max-w-3xl rounded-2xl bg-(--surface) p-3" onClick={(event) => event.stopPropagation()}>
            <img src={selectedItem.image} alt={selectedItem.alt} className="h-[65vh] w-full rounded-xl object-cover" />
            <div className="flex items-center justify-between p-3">
              <p className="font-display text-xl font-semibold text-(--heading)">{selectedItem.title}</p>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="rounded-full border border-(--line) px-3 py-1.5 text-sm text-(--muted)"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
