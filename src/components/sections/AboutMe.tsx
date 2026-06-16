"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WhyItem = {
  title: string;
  description: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    title: "Vector Tracing",
    description:
      "Node-by-node manual tracing of any artwork into clean, infinitely scalable vector files using Adobe Illustrator.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Logo Redraw",
    description:
      "Recreate blurry, low-resolution, or raster logos into crisp vector artwork ready for any size or medium.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Raster to Vector",
    description:
      "Convert JPG, PNG, or PDF images into production-ready vector files — ideal for signage, apparel, and large-format print.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "SVG File Creation",
    description:
      "Optimised, clean SVG files compatible with web platforms, design tools, Cricut, and cutting machines.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Print-Ready Artwork",
    description:
      "CMYK-accurate, bleed-ready vector files formatted to professional offset and digital printing standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    title: "Cricut & Laser Files",
    description:
      "Weld-ready, precisely traced vector files optimised for Cricut Design Space and laser engraving workflows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 8v4l3 3" />
        <path d="M22 2 12 12" />
      </svg>
    ),
  },
];

const WHY_ITEMS: WhyItem[] = [
  {
    title: "100% Manual Vector Tracing",
    description: "No auto-trace shortcuts. Every path placed by hand for truly clean, production-quality output.",
  },
  {
    title: "Fast Delivery",
    description: "Most orders delivered within 24–48 hours without compromising on accuracy or detail.",
  },
  {
    title: "Professional Communication",
    description: "Clear updates, prompt responses, and revisions included until you're fully satisfied.",
  },
  {
    title: "High Accuracy",
    description: "Faithful reproduction of colours, shapes, and proportions — pixel-perfect to your original.",
  },
  {
    title: "Unlimited Scalability",
    description: "Vector files that scale from a business card to a billboard without any loss of quality.",
  },
  {
    title: "Worldwide Service",
    description: "Working with clients across the USA, UK, Europe, Australia, and beyond — every day.",
  },
];

// ─── useInView hook ────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[#2ecc71]/25 bg-[#2ecc71]/8 px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#2ecc71]">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="my-4 h-[3px] w-12 rounded-full bg-[#2ecc71]" aria-hidden="true" />
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AboutMe() {
  const intro = useInView();
  const services = useInView(0.08);
  const why = useInView(0.08);

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const fadeIn = (visible: boolean, delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#0a0f0d] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── Intro / Profile ──────────────────────────────────────────────── */}
        <div
          ref={intro.ref}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left: text */}
          <div style={fadeIn(intro.visible)}>
            <Eyebrow>About CreativeZefa</Eyebrow>
            <div className="mt-5">
              <h2
                id="about-heading"
                className="font-syne text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Meet{" "}
                <span className="text-[#2ecc71]">Huzaifa</span>
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-[#5a8069]">
                Professional Vector Tracing &amp; Logo Redraw Services
              </p>
            </div>
            <Divider />

            <div className="space-y-4 text-[0.95rem] leading-relaxed text-[#8fa898]">
              <p>
                I'm <strong className="font-semibold text-white">Huzaifa</strong>, founder of{" "}
                <strong className="font-semibold text-[#2ecc71]">CreativeZefa</strong> — a professional vector design
                service built on precision, quality, and genuine client care. With years of hands-on experience in
                Adobe Illustrator, I've helped clients worldwide transform low-quality images into clean, scalable,
                production-ready vector artwork.
              </p>
              <p>
                Every project is handled with 100% manual tracing — no auto-trace shortcuts. Whether you need a logo
                redraw, a raster-to-vector conversion, or files ready for screen printing, embroidery, or laser
                engraving, I deliver artwork that meets real production standards.
              </p>
              <p>
                Files delivered include: <span className="text-white font-medium">AI, EPS, SVG, PDF, DXF</span>, and
                print-ready formats — ready to use the moment you receive them.
              </p>
            </div>

            {/* File format tags */}
            <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Supported file formats">
              {["AI", "EPS", "SVG", "PDF", "DXF", "PNG"].map((fmt) => (
                <span
                  key={fmt}
                  role="listitem"
                  className="rounded-md border border-[#1e2b20] bg-[#0f1510] px-3 py-1 text-xs font-semibold text-[#2ecc71]"
                >
                  {fmt}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/message/PMGOOOEGCEL2N1"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2ecc71] px-6 py-3 text-sm font-semibold text-[#0a0f0d] transition-all duration-200 hover:bg-[#27ae60] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2ecc71]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ecc71]"
                aria-label="Contact Huzaifa at CreativeZefa"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Contact Me
              </Link>
              <a
                href="https://g.page/r/CZxOCwcMq1yWEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1e2b20] px-6 py-3 text-sm font-semibold text-[#c8d9cc] transition-all duration-200 hover:border-[#2ecc71]/50 hover:text-[#2ecc71] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ecc71]"
                aria-label="Leave a Google Review for CreativeZefa (opens in new tab)"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Leave a Review
              </a>
            </div>
          </div>

          {/* Right: profile */}
          <div
            className="flex justify-center lg:justify-end"
            style={fadeIn(intro.visible, 120)}
          >
            <div className="relative w-full max-w-sm">
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1e2b20] bg-[#0f1510] aspect-[3/4]">
                
                  {/* Replace the placeholder below with your actual profile image: */}
                  <Image
  src="/images/huzaifa.jpeg"
  alt="Huzaifa – Founder of CreativeZefa, professional vector artist"
  width={900}
  height={900}
  className="rounded-full object-cover"
  priority
/>
               
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-4 p-6"
                  aria-label="Profile photo placeholder for Huzaifa"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#1e2b20] bg-[#131a14]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3a5040" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-center text-xs text-[#3a5040]">
                    Add profile photo at<br />
                    <code className="font-mono text-[0.7rem] text-[#2ecc71]/50">/public/images/huzaifa.jpg</code>
                  </p>
                </div>

                {/* Subtle gradient overlay at bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0f0d] to-transparent" aria-hidden="true" />
              </div>

              {/* Founder badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#1e2b20] bg-[#0a0f0d] px-4 py-2 shadow-xl"
                aria-label="Founder of CreativeZefa"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2ecc71] shadow-[0_0_0_3px_rgba(46,204,113,0.2)]" aria-hidden="true" />
                  <span className="text-xs font-semibold text-white">Founder of CreativeZefa</span>
                </div>
              </div>

              {/* Stat card */}
              <div
                className="absolute -right-4 top-6 rounded-xl border border-[#1e2b20] bg-[#0a0f0d] px-4 py-3 shadow-xl"
                aria-label="500 plus projects completed"
              >
                <p className="font-syne text-2xl font-extrabold leading-none text-[#2ecc71]">500+</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-[#5a8069]">
                  Projects<br />Completed
                </p>
              </div>

              {/* Ambient glow */}
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#2ecc71]/5 blur-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* ── What I Do ────────────────────────────────────────────────────── */}
        <div ref={services.ref} className="mt-24 md:mt-32">
          <div style={fadeIn(services.visible)} className="mb-10 text-center">
            <Eyebrow>What I Do</Eyebrow>
            <h3 className="font-syne mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Professional Vector Design Services
            </h3>
            <div className="mx-auto my-4 h-[3px] w-12 rounded-full bg-[#2ecc71]" aria-hidden="true" />
            <p className="mx-auto max-w-xl text-sm text-[#8fa898]">
              Every service delivered as clean, scalable, production-ready artwork — not auto-traced shortcuts.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Services offered by CreativeZefa"
          >
            {SERVICES.map((service, i) => (
              <li
                key={service.title}
                style={
                  prefersReducedMotion
                    ? {}
                    : {
                        opacity: services.visible ? 1 : 0,
                        transform: services.visible ? "translateY(0)" : "translateY(18px)",
                        transition: `opacity 0.5s ease ${80 + i * 60}ms, transform 0.5s ease ${80 + i * 60}ms`,
                      }
                }
                className="group relative overflow-hidden rounded-xl border border-[#1e2b20] bg-[#0f1510] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2ecc71]/35 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, rgba(46,204,113,0.05) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#2ecc71]/20 bg-[#2ecc71]/10 text-[#2ecc71]">
                  {service.icon}
                </div>
                <h4 className="mb-2 text-sm font-semibold text-white">{service.title}</h4>
                <p className="text-xs leading-relaxed text-[#6b8070]">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Why Choose CreativeZefa ───────────────────────────────────────── */}
        <div ref={why.ref} className="mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left: heading + description */}
            <div style={fadeIn(why.visible)}>
              <Eyebrow>Why CreativeZefa</Eyebrow>
              <h3 className="font-syne mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Quality That<br />
                <span className="text-[#2ecc71]">Speaks for Itself</span>
              </h3>
              <Divider />
              <p className="max-w-md text-sm leading-relaxed text-[#8fa898]">
                There are plenty of vector services online. Here's why hundreds of clients across the globe come
                back to CreativeZefa — and why first-time clients stay.
              </p>

              {/* Inline stats row */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {[
                  { num: "500+", label: "Projects" },
                  { num: "24h", label: "Avg. Delivery" },
                  { num: "5★", label: "Rating" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-[#1e2b20] bg-[#0f1510] px-4 py-4 text-center"
                    aria-label={`${s.num} ${s.label}`}
                  >
                    <p className="font-syne text-xl font-extrabold text-[#2ecc71]">{s.num}</p>
                    <p className="mt-0.5 text-xs text-[#5a8069]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: why list */}
            <ul
              className="flex flex-col gap-3"
              role="list"
              aria-label="Reasons to choose CreativeZefa"
              style={fadeIn(why.visible, 100)}
            >
              {WHY_ITEMS.map((item, i) => (
                <li
                  key={item.title}
                  style={
                    prefersReducedMotion
                      ? {}
                      : {
                          opacity: why.visible ? 1 : 0,
                          transform: why.visible ? "translateX(0)" : "translateX(16px)",
                          transition: `opacity 0.45s ease ${i * 70}ms, transform 0.45s ease ${i * 70}ms`,
                        }
                  }
                  className="flex items-start gap-4 rounded-xl border border-[#1e2b20] bg-[#0f1510] px-5 py-4 transition-colors duration-200 hover:border-[#2ecc71]/30"
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#2ecc71]/30 bg-[#2ecc71]/10 text-[#2ecc71]"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#6b8070]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}