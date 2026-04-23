"use client";

import { useState, useEffect } from "react";
import { stats } from "@/data/site-data";
import { FiArrowRight, FiCheckCircle, FiClock, FiFileText, FiPrinter } from "react-icons/fi";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-(--line) pt-8 sm:pt-12 md:pt-16"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-(--accent)/20 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        
        <div className="grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className={`space-y-4 sm:space-y-5 text-center md:text-left transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2)/50 backdrop-blur-sm px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse" />
                <span className="text-[10px] sm:text-xs font-medium tracking-wide text-(--accent)">
                  Vector Tracing • Logo Redraw • Clean Artwork
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-(--heading)">
              Turn Any Image Into
              <span className="block bg-linear-to-r from-(--accent) to-(--accent)/70 bg-clip-text text-transparent mt-1">
                Perfect Vector Art
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-(--muted) max-w-lg mx-auto md:mx-0">
              Convert blurry or low-quality images into clean, scalable vector files ready for print, embroidery, and professional use.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#contact"
                className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-(--accent) px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Convert My Image
                  <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto rounded-full border border-(--line) bg-(--surface-2)/50 backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-(--heading) transition-all hover:bg-(--surface-3) hover:scale-105"
              >
                See Work
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
              {[
                { icon: FiCheckCircle, text: "High Quality" },
                { icon: FiClock, text: "Fast Delivery" },
                { icon: FiPrinter, text: "Print Ready" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-[10px] sm:text-xs text-(--muted) bg-(--surface-2)/30 px-2 py-1 rounded-full"
                >
                  <item.icon className="text-(--accent) text-xs" />
                  <span>✔ {item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - Before/After Card */}
          <div className={`relative flex justify-center transition-all duration-700 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-(--accent)/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-(--accent)/10 rounded-full blur-2xl animate-pulse delay-1000" />

            <div className="relative group">
              {/* Main Card */}
              <div className="relative rounded-2xl border border-(--line) bg-(--surface-1) p-4 sm:p-5 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-(--accent)/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  
                  {/* Before */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs sm:text-sm font-medium text-(--muted)">Before</p>
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-(--surface-2) aspect-square">
                      <img
                        src="/gallery/before.jpeg"
                        alt="Before conversion"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs sm:text-sm font-medium text-(--accent)">After</p>
                      <div className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl bg-(--surface-2) aspect-square ring-2 ring-(--accent)/30">
                      <img
                        src="/gallery/after.jpeg"
                        alt="After conversion"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-(--accent)/20 to-transparent" />
                    </div>
                  </div>

                </div>

                {/* Bottom Text */}
                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-[10px] sm:text-xs text-(--muted) flex items-center justify-center gap-1">
                    <FiFileText className="text-(--accent)" />
                    Clean • Smooth • Scalable
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-linear-to-tr from-(--accent)/20 to-transparent rounded-br-2xl" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-(--accent) text-white text-[10px] sm:text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">
                ✨ Vector
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION - Enhanced */}
        <div className={`mt-10 sm:mt-12 md:mt-16 transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-(--line) bg-(--surface-1)/50 backdrop-blur-sm p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Gradient Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-(--accent)/0 to-(--accent)/0 group-hover:from-(--accent)/10 group-hover:to-transparent transition-all duration-500" />
                
                {/* Value */}
                <p className="font-display text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-(--heading) to-(--heading) bg-clip-text text-transparent">
                  {item.value}
                </p>
                
                {/* Label */}
                <p className="text-[8px] sm:text-[10px] md:text-xs text-(--muted) mt-0.5 sm:mt-1 font-medium">
                  {item.label}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-(--accent)/30 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}