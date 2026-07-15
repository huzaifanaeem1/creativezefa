"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { stats } from "@/data/site-data";
import { FiArrowRight, FiCheckCircle, FiClock, FiFileText, FiPrinter, FiZap, FiStar, FiShield, FiTrendingUp, FiAward, FiThumbsUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Left content animation
      if (leftContentRef.current) {
        gsap.from(leftContentRef.current, {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Right card with 3D perspective
      if (rightCardRef.current) {
        gsap.from(rightCardRef.current, {
          opacity: 0,
          x: 60,
          rotationY: 12,
          duration: 1,
          ease: "power3.out",
          transformPerspective: 1000,
        });
      }

      // Stats staggered animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        gsap.from(statItems, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-(--line) pt-8 sm:pt-12 md:pt-16 lg:pt-20"
    >
      {/* Refined Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-(--accent)/[0.03] blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-(--accent)/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-(--accent)/[0.02] rounded-full blur-3xl" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        <div className="grid items-center gap-10 lg:gap-16 xl:gap-20 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div ref={leftContentRef} className="space-y-5 sm:space-y-6 text-center md:text-left">
            
            {/* Service Badge */}
            <div className="inline-flex mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-1) px-4 py-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                <span className="text-[11px] font-medium tracking-wide text-(--accent)">
                  Professional Vector Tracing
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              <span className="text-(--heading)">Turn Any Image Into</span>
              <span className="block bg-gradient-to-r from-(--accent) via-(--accent) to-(--accent)/60 bg-clip-text text-transparent mt-2">
                Perfect Vector Art
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-(--muted) max-w-lg mx-auto md:mx-0">
              Convert low-quality images into crisp, scalable vector files ready for 
              <span className="font-semibold text-(--accent)"> print, embroidery, DTF, and commercial use.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href="https://wa.me/message/PMGOOOEGCEL2N1"
                target="_blank"
                rel="noreferrer"
                className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-(--accent) px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-(--accent)/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-base" />
                  Start Your Project
                  <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border border-(--line) bg-(--surface-1) px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-(--heading) transition-all hover:border-(--accent)/40 hover:bg-(--surface-2) hover:scale-[1.02] active:scale-[0.98]"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust Indicators - Clean Version */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs">
                <FiCheckCircle className="text-(--accent)" />
                <span className="text-(--muted)">High Quality</span>
              </div>
              <span className="w-px h-3 bg-(--line)" />
              <div className="flex items-center gap-1.5 text-xs">
                <FiClock className="text-(--accent)" />
                <span className="text-(--muted)">Fast Turnaround</span>
              </div>
              <span className="w-px h-3 bg-(--line)" />
              <div className="flex items-center gap-1.5 text-xs">
                <FiShield className="text-(--accent)" />
                <span className="text-(--muted)">Commercial Use</span>
              </div>
              <span className="w-px h-3 bg-(--line) hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs hidden sm:flex">
                <FiPrinter className="text-(--accent)" />
                <span className="text-(--muted)">Print Ready</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-(--muted)">4.9/5</span>
              <span className="w-px h-3 bg-(--line)" />
              <span className="text-xs text-(--muted)">500+ Happy Clients</span>
            </div>
          </div>

          {/* RIGHT CONTENT - Before/After Card */}
          <div ref={rightCardRef} className="relative flex justify-center lg:justify-end">
            
            <div className="relative group w-full max-w-md lg:max-w-lg">

              {/* Main Card */}
              <div className="relative rounded-2xl border border-(--line) bg-(--surface-1) p-4 shadow-xl transition-all duration-500 hover:shadow-2xl">

                {/* Card Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-(--line)">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-(--accent)" />
                    <span className="text-[10px] font-mono text-(--muted) uppercase tracking-wider">Before → After</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-(--muted)">
                    <FiZap className="text-(--accent)" />
                    <span>Vector Result</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Before */}
                  <div className="space-y-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-(--surface-2) group/before">
                      <Image
                        src="/gallery/before.jpg"
                        alt="Before conversion"
                        fill
                        sizes="(max-width:768px) 40vw, 260px"
                        className="object-contain p-3 transition-transform duration-700 group-hover/before:scale-110"
                        quality={85}
                      />
                      <div className="absolute top-2 left-2 bg-red-500/90 text-white text-[8px] font-medium px-2 py-0.5 rounded">
                        Original
                      </div>
                    </div>
                    <p className="text-center text-[10px] text-(--muted)">Pixelated Image</p>
                  </div>

                  {/* After */}
                  <div className="space-y-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-(--surface-2) ring-2 ring-(--accent)/40 group/after">
                      <Image
                        src="/gallery/after.jpg"
                        alt="After conversion"
                        fill
                        sizes="(max-width:768px) 40vw, 260px"
                        className="object-contain p-3 transition-transform duration-700 group-hover/after:scale-110"
                        quality={85}
                      />
                      <div className="absolute top-2 right-2 bg-(--accent) text-white text-[8px] font-medium px-2 py-0.5 rounded">
                        Vector
                      </div>
                    </div>
                    <p className="text-center text-[10px] font-medium text-(--accent)">Clean Vector Output</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-3 pt-2 border-t border-(--line)">
                  <div className="flex items-center justify-center gap-4 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Scalable</span>
                    </div>
                    <div className="w-px h-3 bg-(--line)" />
                    <div className="flex items-center gap-1.5">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Smooth Curves</span>
                    </div>
                    <div className="w-px h-3 bg-(--line)" />
                    <div className="flex items-center gap-1.5">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Print Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges - Clean */}
              <div className="absolute -top-3 -right-3 bg-(--accent) text-white text-[10px] font-medium px-3 py-1 rounded-full shadow-lg">
                Starts at $5
              </div>
              <div className="absolute -bottom-3 -left-3 bg-(--surface-1) border border-(--accent)/30 text-(--accent) text-[9px] font-medium px-2.5 py-1 rounded-full shadow-md">
                24h Delivery
              </div>
            </div>

          </div>
        </div>

        {/* STATS SECTION */}
        <div ref={statsRef} className="mt-10 sm:mt-14 lg:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="stat-item relative group rounded-xl border border-(--line) bg-(--surface-1)/60 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:scale-105 hover:border-(--accent)/30 hover:shadow-lg"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-(--accent)/0 via-(--accent)/0 to-(--accent)/0 group-hover:from-(--accent)/5 group-hover:via-(--accent)/0 group-hover:to-transparent transition-all duration-500" />
                
                {/* Value */}
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-(--heading)">
                  {item.value}
                </p>
                
                {/* Label */}
                <p className="text-[10px] sm:text-xs text-(--muted) mt-0.5 font-medium">
                  {item.label}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-(--accent)/20 rounded-full group-hover:w-10 group-hover:bg-(--accent)/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}