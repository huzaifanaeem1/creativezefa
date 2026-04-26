"use client";

import { useState, useEffect } from "react";
import { 
  FiShoppingBag, 
  FiMessageCircle,
  FiDownload,
  FiShield,
  FiHeart,
  FiZap
} from "react-icons/fi";

export default function EtsyShopSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('etsy-shop');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: FiDownload,
      title: "Instant Download",
      description: "Get files immediately after purchase",
    },
    {
      icon: FiShield,
      title: "Secure Checkout",
      description: "Safe & secure payment through Etsy",
    },
    {
      icon: FiHeart,
      title: "Lifetime Access",
      description: "Download anytime, anywhere",
    },
    {
      icon: FiZap,
      title: "Ready to Use",
      description: "SVG, EPS, PNG, DXF formats included",
    },
  ];

  return (
    <section
      id="etsy-shop"
      className="relative mx-auto w-full overflow-hidden border-y border-(--line) py-16 md:py-20"
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Etsy Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2) px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold text-orange-500">
              New on Etsy
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-(--heading) mb-4">
            Visit Our{" "}
            <span className="text-orange-500">
              Etsy Shop
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-(--muted) max-w-2xl mx-auto">
            Premium SVG cut files, vector bundles, and embroidery designs ready for instant download
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-(--line) bg-(--surface-1) p-4 text-center transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-lg bg-orange-500/10 p-2.5 mb-3 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-sm font-semibold text-(--heading) mb-1">
                  {feature.title}
                </h3>
                <p className="text-[10px] text-(--muted)">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main CTA Card */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1) p-6 md:p-8">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-(--heading) mb-3">
                  Ready-Made Designs or Custom Work?
                </h3>
                <p className="text-sm text-(--muted) max-w-md">
                  🛍️ <strong className="text-(--heading)">For ready-made bundles & SVG cut files:</strong> Visit our Etsy shop<br/>
                  🎨 <strong className="text-(--heading)">For custom vector designs:</strong> Contact us directly
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://zefasvgs.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-white font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
                >
                  <FiShoppingBag className="text-lg" />
                  <span>Shop on Etsy</span>
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-(--line) bg-(--surface-2) px-6 py-3 text-sm font-semibold text-(--heading) transition-all hover:bg-(--surface-3) hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <FiMessageCircle className="text-lg" />
                  Contact for Custom Design
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-(--line)"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-(--surface-1) px-3 text-(--muted)">✨ Instant Digital Downloads</span>
              </div>
            </div>

            {/* Info Text */}
            <div className="text-center">
              <p className="text-xs text-(--muted)">
                All files are delivered instantly after purchase • High-quality SVG, PNG, EPS, DXF formats • Commercial license included
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}