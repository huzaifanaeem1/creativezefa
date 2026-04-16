import { stats, trustBadges } from "@/data/site-data";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-(--line)">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-(--line) bg-(--surface) px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
            Professional Embroidery Digitizing
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-(--heading) md:text-6xl">
            High-Quality Embroidery Digitizing Services
          </h1>
          <p className="max-w-xl text-base leading-7 text-(--muted) md:text-lg">
            Production-ready files for logos, caps, 3D puff, and jacket backs. Every stitch path is engineered for smooth runs, sharp detail, and fewer machine stops.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong)"
            >
              Get a Quote
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-(--line) bg-(--surface) px-6 py-3 text-sm font-semibold text-(--heading) transition hover:-translate-y-0.5"
            >
              View Portfolio
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-(--line) bg-(--surface) p-4">
                <p className="font-display text-2xl font-semibold text-(--heading)">{item.value}</p>
                <p className="mt-1 text-xs text-(--muted)">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-(--accent-soft) blur-2xl" aria-hidden="true" />
          <div className="card-surface space-y-4 p-5 md:p-6">
            <img
              src="/gallery/hero-embroidery.svg"
              alt="Embroidery digitizing preview with stitch simulation"
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              loading="eager"
            />
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="rounded-xl border border-(--line) bg-(--surface-2) p-3 text-xs text-(--muted)">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
