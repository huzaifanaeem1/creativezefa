import { stats } from "@/data/site-data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-(--line) pt-12 md:pt-14"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        
        <div className="grid items-center gap-6 md:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-3 text-center md:text-left max-w-lg mx-auto md:mx-0">

            <p className="mx-auto w-fit rounded-full border border-(--line) bg-(--surface) px-3 py-1 text-[10px] font-medium tracking-wide text-(--accent) md:mx-0">
              Vector Tracing • Logo Redraw • Clean Artwork
            </p>

            <h1 className="font-display text-3xl font-semibold leading-tight text-(--heading) sm:text-4xl md:text-5xl">
              Turn Any Image Into
              <span className="block text-(--accent)">Perfect Vector Art</span>
            </h1>

            <p className="text-sm leading-5 text-(--muted) sm:text-base">
              Convert blurry or low-quality images into clean, scalable vector files ready for print and professional use.
            </p>

            {/* buttons */}
            <div className="flex flex-col items-center gap-2 sm:flex-row md:items-start">
              <a
                href="#contact"
                className="w-full sm:w-auto rounded-full bg-(--accent) px-5 py-2 text-sm font-semibold text-white"
              >
                Convert My Image
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border border-(--line) bg-(--surface) px-5 py-2 text-sm font-semibold text-(--heading)"
              >
                See Work
              </a>
            </div>

            {/* trust */}
            <div className="flex flex-wrap justify-center gap-2 pt-1 text-[10px] text-(--muted) md:justify-start">
              <span>✔ High Quality</span>
              <span>✔ Fast Delivery</span>
              <span>✔ Print Ready</span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center md:justify-end">

            <div className="card-surface w-full max-w-xs p-3">

              <div className="grid grid-cols-2 gap-2">

                <div>
                  <p className="text-[10px] text-(--muted)">Before</p>
                  <img
                    src="/gallery/before.png"
                    className="h-24 w-full rounded-lg object-cover opacity-70"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-(--accent)">After</p>
                  <img
                    src="/gallery/after.png"
                    className="h-24 w-full rounded-lg object-cover"
                  />
                </div>

              </div>

              <p className="mt-2 text-center text-[10px] text-(--muted)">
                Clean • Smooth • Scalable
              </p>
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-(--line) bg-(--surface) p-2"
            >
              <p className="font-display text-base font-semibold text-(--heading)">
                {item.value}
              </p>
              <p className="text-[9px] text-(--muted)">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}