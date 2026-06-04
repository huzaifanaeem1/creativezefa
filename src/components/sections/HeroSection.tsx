"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { stats } from "@/data/site-data";
import { FiArrowRight, FiCheckCircle, FiClock, FiFileText, FiPrinter, FiZap, FiStar, FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightCardRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Left content animation
    if (leftContentRef.current) {
      gsap.fromTo(leftContentRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Right card animation with 3D effect
    if (rightCardRef.current) {
      gsap.fromTo(rightCardRef.current,
        {
          opacity: 0,
          x: 50,
          rotateY: 15,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden border-b border-(--line) pt-4 sm:pt-6 md:pt-8 lg:pt-10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-(--accent)/5 blur-[120px] rounded-full" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-(--accent)/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-(--accent)/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        
        <div className="grid items-center gap-8 lg:gap-12 xl:gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div ref={leftContentRef} className="space-y-4 sm:space-y-5 text-center md:text-left">
            
            {/* Badge with Animation */}
            <div className="inline-flex mx-auto md:mx-0 group">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2)/80 backdrop-blur-sm px-3 py-1 hover:border-(--accent)/50 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium tracking-wide text-(--accent) group-hover:tracking-wider transition-all">
                  ⚡ Vector Tracing • Logo Redraw • Clean Artwork
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-(--heading)">Turn Any Image Into</span>
              <span className="block bg-gradient-to-r from-(--accent) via-(--accent)/80 to-(--accent)/60 bg-clip-text text-transparent mt-1 animate-gradient">
                Perfect Vector Art
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-(--muted) max-w-lg mx-auto md:mx-0">
              Convert blurry or low-quality images into clean, scalable vector files ready for 
              <span className="font-semibold text-(--accent)"> print, embroidery, DTF, and professional use.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-1">
              {/* Primary Button - WhatsApp */}
              <a
                href="https://wa.me/message/PMGOOOEGCEL2N1"
                target="_blank"
                rel="noreferrer"
                className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-(--accent) to-(--accent)/80 px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-white transition-all hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-sm" />
                  Start Your Project
                  <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>

              {/* Secondary Button */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border-2 border-(--line) bg-(--surface-2)/50 backdrop-blur-sm px-5 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-(--heading) transition-all hover:border-(--accent)/50 hover:bg-(--surface-3) hover:scale-105 hover:shadow-lg"
              >
                View Portfolio →
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-3">
              {[
                { icon: FiCheckCircle, text: "High Quality", color: "text-emerald-500" },
                { icon: FiClock, text: "Fast Delivery", color: "text-blue-500" },
                { icon: FiPrinter, text: "Print Ready", color: "text-purple-500" },
                { icon: FiShield, text: "Commercial Use", color: "text-orange-500" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium bg-(--surface-2)/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-(--line) hover:border-(--accent)/30 transition-all hover:scale-105"
                >
                  <item.icon className={`${item.color} text-xs`} />
                  <span className="text-(--muted)">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Client Rating */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-500 text-xs fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-(--muted)">4.9/5 • 500+ Happy Clients</span>
            </div>
          </div>

          {/* RIGHT CONTENT - Before/After Card */}
          <div ref={rightCardRef} className="relative flex justify-center lg:justify-end">
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-(--accent)/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-(--accent)/10 rounded-full blur-3xl animate-pulse delay-700" />

            <div className="relative group w-full max-w-md lg:max-w-lg">

              {/* Main Card */}
              <div className="relative rounded-2xl border border-(--line) bg-gradient-to-br from-(--surface-1) to-(--surface-2) p-3 sm:p-4 shadow-2xl transition-all duration-500 hover:shadow-3xl">

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-(--accent)/10 via-(--accent)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Card Header */}
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-(--line)">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-(--accent)">BEFORE → AFTER</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiZap className="text-(--accent) text-xs" />
                    <span className="text-[8px] text-(--muted)">VECTOR RESULT</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Before Column */}
                  <div className="space-y-1.5">
                    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl bg-(--surface-2) group/before">
                      <Image
                        src="/gallery/before.jpg"
                        alt="Before conversion - Low quality image"
                        fill
                        sizes="(max-width:768px) 45vw, 280px"
                        className="object-contain p-2 transition-all duration-500 group-hover/before:scale-110"
                        quality={90}
                      />
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm text-white text-[8px] px-1.5 py-0.5 rounded">
                        Pixelated
                      </div>
                    </div>
                    <p className="text-center text-[10px] text-(--muted)">Original Image</p>
                  </div>

                  {/* After Column */}
                  <div className="space-y-1.5">
                    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl bg-(--surface-2) ring-2 ring-(--accent)/40 group/after">
                      <Image
                        src="/gallery/after.jpg"
                        alt="After conversion - Clean vector"
                        fill
                        sizes="(max-width:768px) 45vw, 280px"
                        className="object-contain p-2 transition-all duration-500 group-hover/after:scale-110"
                        quality={90}
                      />
                      {/* Badge */}
                      <div className="absolute top-2 right-2 bg-(--accent) text-white text-[8px] px-1.5 py-0.5 rounded">
                        ✓ Vector
                      </div>
                    </div>
                    <p className="text-center text-[10px] font-semibold text-(--accent)">Clean Vector Output</p>
                  </div>
                </div>

                {/* Bottom Features */}
                <div className="mt-3 pt-2 border-t border-(--line)">
                  <div className="flex items-center justify-center gap-3 text-[9px] sm:text-xs">
                    <div className="flex items-center gap-1">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Scalable</span>
                    </div>
                    <div className="w-0.5 h-0.5 rounded-full bg-(--line)" />
                    <div className="flex items-center gap-1">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Smooth Curves</span>
                    </div>
                    <div className="w-0.5 h-0.5 rounded-full bg-(--line)" />
                    <div className="flex items-center gap-1">
                      <FiCheckCircle className="text-(--accent) text-xs" />
                      <span className="text-(--muted)">Print Ready</span>
                    </div>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-tl from-(--accent)/20 to-transparent rounded-br-2xl" />
                <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-(--accent)/10 to-transparent rounded-tl-2xl" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-(--accent) to-(--accent)/80 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                ✨ $5+
              </div>
              <div className="absolute -bottom-3 -left-3 bg-(--surface-2) border border-(--accent)/30 text-(--accent) text-[8px] px-1.5 py-0.5 rounded-full shadow-md">
                ⚡ 24h
              </div>
            </div>

          </div>
        </div>

        {/* STATS SECTION */}
        <div ref={statsRef} className="mt-8 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-(--line) bg-(--surface-1)/60 backdrop-blur-sm p-2.5 sm:p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-(--accent)/30"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-(--accent)/0 to-(--accent)/0 group-hover:from-(--accent)/10 group-hover:to-transparent transition-all duration-500" />
                
                {/* Value */}
                <p className="font-display text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-(--heading) to-(--heading) bg-clip-text text-transparent">
                  {item.value}
                </p>
                
                {/* Label */}
                <p className="text-[8px] sm:text-[10px] md:text-xs text-(--muted) mt-0.5 font-medium">
                  {item.label}
                </p>

                {/* Animated Underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-(--accent)/40 rounded-full group-hover:w-8 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--accent)/30 to-transparent" />
    </section>
  );
}