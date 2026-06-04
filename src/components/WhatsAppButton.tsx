"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import gsap from "gsap";

export default function WhatsAppButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (buttonRef.current) {
      // Main floating animation
      gsap.to(buttonRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (pulseRef.current) {
      // Pulse ring animation
      gsap.to(pulseRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });
    }

    if (tooltipRef.current && showTooltip) {
      // Tooltip bounce animation
      gsap.fromTo(tooltipRef.current,
        {
          x: 20,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(0.6)",
        }
      );

      // Auto hide tooltip after 8 seconds
      const timer = setTimeout(() => {
        if (tooltipRef.current) {
          gsap.to(tooltipRef.current, {
            x: 20,
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setShowTooltip(false),
          });
        }
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleHover = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.15,
        rotate: 10,
        duration: 0.3,
        ease: "back.out(0.5)",
      });
    }
  };

  const handleLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "back.in(0.5)",
      });
    }
  };

  const handleClick = () => {
    // Optional: Track click event
    console.log("WhatsApp button clicked");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Pulse ring effect */}
      <div
        ref={pulseRef}
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60"
        style={{ width: '56px', height: '56px' }}
      />

      {/* Animated tooltip / notification */}
      {showTooltip && (
        <div
          ref={tooltipRef}
          className="absolute bottom-16 right-0 mb-2 flex items-center gap-2 rounded-full bg-(--surface-1) px-4 py-2.5 shadow-xl border border-(--accent)/20 animate-in slide-in-from-right"
        >
          <div className="relative">
            <FiBell className="text-(--accent) text-sm animate-pulse" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-(--heading) whitespace-nowrap">
            Need vector help? 💬
          </span>
          <FaArrowRight className="text-(--accent) text-xs animate-bounce ml-1" />
          
          {/* Close tooltip button */}
          <button
            onClick={() => {
              if (tooltipRef.current) {
                gsap.to(tooltipRef.current, {
                  x: 20,
                  opacity: 0,
                  scale: 0.8,
                  duration: 0.3,
                  onComplete: () => setShowTooltip(false),
                });
              }
            }}
            className="ml-2 text-(--muted) hover:text-(--heading) transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        ref={buttonRef}
        href="https://wa.me/message/PMGOOOEGCEL2N1"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-black/30 transition-all duration-300 hover:shadow-xl group"
      >
        <FaWhatsapp className="h-7 w-7" />
        
        {/* Small indicator dot */}
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white animate-pulse" />
      </a>

      {/* Ripple effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple" />
      </div>
    </div>
  );
}