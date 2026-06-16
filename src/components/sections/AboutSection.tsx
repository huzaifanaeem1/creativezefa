"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  FiCheckCircle, 
  FiAward, 
  FiHeart, 
  FiClock, 
  FiStar,
  FiTrendingUp,
  FiThumbsUp,
  FiBriefcase,
  FiZap,
  FiUsers,
  FiArrowRight
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    gsap.registerPlugin(ScrollTrigger);

    const leftCardX = isMobile ? -20 : -50;
    const rightCardX = isMobile ? 20 : 50;
    const staggerDelay = isMobile ? 0.05 : 0.1;

    if (leftCardRef.current) {
      gsap.fromTo(leftCardRef.current,
        {
          opacity: 0,
          x: leftCardX,
          rotateY: isMobile ? -5 : -10,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (rightCardRef.current) {
      gsap.fromTo(rightCardRef.current,
        {
          opacity: 0,
          x: rightCardX,
          rotateY: isMobile ? 5 : 10,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    listItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: -15,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            delay: index * staggerDelay + 0.2,
            ease: "back.out(0.5)",
            scrollTrigger: {
              trigger: leftCardRef.current,
              start: "top bottom-=80",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleCardHover = (card: HTMLDivElement | null) => {
    if (!card || isMobile) return;
    gsap.to(card, {
      y: -10,
      boxShadow: "0 25px 40px -12px rgba(0,0,0,0.25)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (card: HTMLDivElement | null) => {
    if (!card || isMobile) return;
    gsap.to(card, {
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1.05,
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    gsap.to(target, {
      scale: 1,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  // About CreativeZefa ke points - aapke diye hue content se
  const aboutPoints = [
    "Specialize in professional raster-to-vector conversion",
    "Transform low-quality, blurry images into clean vector files",
    "Maintain sharp quality at any size for all outputs",
    "Perfect for screen printing, embroidery & DTF printing",
    "Ideal for vinyl cutting, branding & promotional materials",
    "Logo redraws and print-ready artwork preparation",
    "Accurate and high-quality vector artwork tailored to your needs"
  ];

  const stats = [
    { icon: FiAward, value: "500+", label: "Projects Completed", color: "accent" },
    { icon: FiHeart, value: "99%", label: "Client Satisfaction", color: "rose" },
    { icon: FiTrendingUp, value: "24h", label: "Fast Turnaround", color: "green" },
    { icon: FiThumbsUp, value: "100%", label: "Quality Guaranteed", color: "blue" }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <SectionHeading
        eyebrow="About CreativeZefa"
        title="Professional Raster-to-Vector Conversion & Print-Ready Artwork"
        description="We transform low-quality, blurry, or pixelated images into clean, scalable vector files that maintain sharp quality at any size. Whether you need a logo converted for screen printing, embroidery, DTF printing, vinyl cutting, branding, or promotional materials, we provide accurate and high-quality vector artwork tailored to your needs."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        
        {/* LEFT CARD - About CreativeZefa */}
        <article
          ref={leftCardRef}
          onMouseEnter={() => handleCardHover(leftCardRef.current)}
          onMouseLeave={() => handleCardLeave(leftCardRef.current)}
          className="group relative overflow-hidden rounded-2xl border border-(--line) bg-gradient-to-br from-(--surface-1) to-(--surface-2) p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 100 L 200 0 L 200 100 Z" fill="currentColor" className="text-(--accent)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="mb-5 sm:mb-6 flex items-center gap-3 sm:gap-4">
              <div className="rounded-xl bg-(--accent)/10 p-2.5 sm:p-3 text-(--accent) group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FiUsers className="text-lg sm:text-xl lg:text-2xl" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-(--heading)">
                  About CreativeZefa
                </h3>
                <p className="text-xs sm:text-sm text-(--muted) mt-1 hidden sm:block">
                  Who we are & what we do
                </p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              {aboutPoints.map((point, index) => (
                <li
                  key={index}
                  ref={(el) => { listItemsRef.current[index] = el; }}
                  className="flex items-start gap-2.5 sm:gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                >
                  <FiCheckCircle className="mt-0.5 text-base sm:text-lg text-(--accent) shrink-0" />
                  <div className="flex-1">
                    <span className="text-(--muted) leading-relaxed">{point}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-(--line)">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left group/stat">
                    <stat.icon className={`text-(--${stat.color}) text-lg sm:text-xl mx-auto sm:mx-0 mb-1 sm:mb-2 group-hover/stat:scale-110 transition-transform`} />
                    <div className="font-display font-bold text-base sm:text-lg lg:text-xl text-(--heading)">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-(--muted) mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-(--line) flex items-center justify-between sm:justify-start sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-(--accent)/20 border-2 border-(--surface-1) flex items-center justify-center text-[10px] sm:text-xs text-(--accent) font-bold"
                    >
                      ✓
                    </div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-(--muted)">
                  Trusted by <span className="text-(--accent) font-semibold">500+</span> clients
                </span>
              </div>
              <div className="flex items-center gap-1 text-(--accent)">
                <FiStar className="fill-(--accent) text-xs sm:text-sm" />
                <FiStar className="fill-(--accent) text-xs sm:text-sm" />
                <FiStar className="fill-(--accent) text-xs sm:text-sm" />
                <FiStar className="fill-(--accent) text-xs sm:text-sm" />
                <FiStar className="fill-(--accent) text-xs sm:text-sm" />
              </div>
            </div>
          </div>
        </article>

        {/* RIGHT CARD - Why Choose CreativeZefa / Value Proposition */}
        <article
          ref={rightCardRef}
          onMouseEnter={() => handleCardHover(rightCardRef.current)}
          onMouseLeave={() => handleCardLeave(rightCardRef.current)}
          className="group relative overflow-hidden rounded-2xl border border-(--line) bg-gradient-to-br from-(--surface-1) to-(--surface-2) p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="currentColor" className="text-(--accent)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="mb-5 sm:mb-6 flex items-center gap-3 sm:gap-4">
              <div className="rounded-xl bg-(--accent)/10 p-2.5 sm:p-3 text-(--accent) group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <FiBriefcase className="text-lg sm:text-xl lg:text-2xl" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-(--heading)">
                  Why Choose CreativeZefa?
                </h3>
                <p className="text-xs sm:text-sm text-(--muted) mt-1 hidden sm:block">
                  Our commitment to quality
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <FiCheckCircle className="mt-0.5 text-base sm:text-lg text-(--accent) shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-(--heading)">High-Quality Vector Artwork</h4>
                  <p className="text-xs sm:text-sm text-(--muted)">Clean lines & smooth curves every time</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <FiCheckCircle className="mt-0.5 text-base sm:text-lg text-(--accent) shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-(--heading)">100% Scalable Graphics</h4>
                  <p className="text-xs sm:text-sm text-(--muted)">Perfect quality at any size for any use</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <FiCheckCircle className="mt-0.5 text-base sm:text-lg text-(--accent) shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-(--heading)">Print-Ready Files</h4>
                  <p className="text-xs sm:text-sm text-(--muted)">AI, SVG, EPS, PDF, PNG & more formats</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <FiCheckCircle className="mt-0.5 text-base sm:text-lg text-(--accent) shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-(--heading)">Professional Communication</h4>
                  <p className="text-xs sm:text-sm text-(--muted)">Fast turnaround with dedicated support</p>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl bg-(--accent)/5 border border-(--accent)/10">
              <div className="flex items-start gap-2 sm:gap-3">
                <FiZap className="text-(--accent) text-base sm:text-lg mt-0.5 flex-shrink-0" />
                <p className="text-[11px] sm:text-xs text-(--muted) leading-relaxed">
                  From simple logos to complex artwork, every project is carefully recreated with attention to detail to ensure the highest quality results for printing, branding, and production. <strong className="text-(--accent)">Suitable for commercial use.</strong>
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between pt-3 sm:pt-4 border-t border-(--line)">
              <div className="flex items-center gap-2">
                <FiClock className="text-(--accent) text-sm" />
                <span className="text-xs sm:text-sm text-(--muted)">Fast Turnaround Time</span>
              </div>
              <div className="flex items-center gap-2">
                <FiThumbsUp className="text-(--accent) text-sm" />
                <span className="text-xs sm:text-sm text-(--muted)">Suitable for Commercial Use</span>
              </div>
            </div>
          </div>
        </article>

      </div>

      {/* VIEW FULL ABOUT BUTTON - ADDED HERE */}
      <div className="mt-10 sm:mt-12 flex justify-center">
        <Link
          ref={buttonRef}
          href="/about-us"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-(--accent) to-(--accent)/80 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-(--accent)/25 hover:shadow-(--accent)/40 transition-all duration-300"
        >
          <span>View Full About Page</span>
          <FiArrowRight className="text-base sm:text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
          <span className="absolute -inset-1 rounded-full bg-(--accent)/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
        </Link>
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 sm:mt-10 text-center md:hidden">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-(--muted) bg-(--surface-2) px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-(--line)">
          <FiHeart className="text-(--accent) animate-pulse" />
          <span>Ready to transform your images?</span>
          <FiTrendingUp className="text-(--accent)" />
        </div>
      </div>
    </section>
  );
}