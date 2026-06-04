"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/site-data";
import { FiArrowRight, FiCheckCircle, FiZap, FiTrendingUp } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll with stagger - responsive delay
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: isMobile ? 40 : 60,
            scale: isMobile ? 0.98 : 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.5 : 0.7,
            delay: index * (isMobile ? 0.05 : 0.08),
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=80",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleCardHover = (index: number) => {
    if (isMobile) return;
    setHoveredCard(index);
    const card = cardsRef.current[index];
    if (!card) return;

    const tl = gsap.timeline();
    
    tl.to(card, {
      y: -12,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 25px 40px -12px rgba(0,0,0,0.3)",
    });
    
    const arrow = card.querySelector('.service-arrow');
    if (arrow) {
      tl.to(arrow, {
        x: 8,
        duration: 0.25,
        ease: "power2.out",
      }, 0);
    }

    // Animate price badge
    const priceBadge = card.querySelector('.price-badge');
    if (priceBadge) {
      tl.to(priceBadge, {
        scale: 1.05,
        duration: 0.2,
      }, 0);
    }
  };

  const handleCardLeave = (index: number) => {
    setHoveredCard(null);
    const card = cardsRef.current[index];
    if (!card) return;

    const tl = gsap.timeline();
    
    tl.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.in",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    });
    
    const arrow = card.querySelector('.service-arrow');
    if (arrow) {
      tl.to(arrow, {
        x: 0,
        duration: 0.2,
        ease: "power2.out",
      }, 0);
    }

    const priceBadge = card.querySelector('.price-badge');
    if (priceBadge) {
      tl.to(priceBadge, {
        scale: 1,
        duration: 0.2,
      }, 0);
    }
  };

  const handleIconHover = (iconWrapper: HTMLDivElement | null, index: number) => {
    if (!iconWrapper || isMobile) return;
    gsap.to(iconWrapper, {
      scale: 1.1,
      rotate: 5,
      duration: 0.3,
      ease: "back.out(0.5)",
    });
  };

  const handleIconLeave = (iconWrapper: HTMLDivElement | null) => {
    if (!iconWrapper || isMobile) return;
    gsap.to(iconWrapper, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "back.in(0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="border-y border-(--line) overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <SectionHeading
          eyebrow="Our Services"
          title="Vector Tracing Services Designed for Real Use"
          description="From blurry logos to complex artwork, we deliver clean, scalable vector files ready for print, branding, and production."
          align="left"
        />

        {/* CARDS GRID - Fully responsive */}
        <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10">

          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className={`
                group relative overflow-hidden rounded-2xl border transition-all duration-300
                ${hoveredCard === index 
                  ? 'border-(--accent)/30 shadow-2xl' 
                  : 'border-(--line) shadow-md hover:shadow-xl'
                }
                bg-gradient-to-br from-(--surface-1) to-(--surface-2)
              `}
            >
              
              {/* Animated Background Gradient */}
              <div className={`
                absolute inset-0 bg-gradient-to-br from-(--accent)/0 to-(--accent)/0 
                transition-all duration-500
                ${hoveredCard === index ? 'from-(--accent)/8 via-(--accent)/3 to-transparent' : ''}
              `} />
              
              {/* Decorative Circle - Animated */}
              <div className={`
                absolute -right-12 -top-12 h-28 w-28 rounded-full 
                bg-gradient-to-br from-(--accent)/10 to-(--accent)/5
                transition-all duration-500 
                ${hoveredCard === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `} />
              
              {/* Decorative dots */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-(--accent)" />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-5 sm:p-6 lg:p-7">
                
                {/* TOP ROW - Icon + Price */}
                <div className="flex items-start justify-between">
                  <div 
                    className="cursor-pointer transition-transform duration-300"
                    onMouseEnter={(e) => handleIconHover(e.currentTarget, index)}
                    onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
                  >
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <span className={`
                    price-badge rounded-full px-3 py-1.5 text-xs sm:text-sm font-bold 
                    transition-all duration-300
                    ${hoveredCard === index 
                      ? 'bg-(--accent) text-white shadow-lg scale-105' 
                      : 'bg-(--accent)/10 text-(--accent)'
                    }
                  `}>
                    {service.price}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className={`
                  mt-4 sm:mt-5 font-display text-lg sm:text-xl lg:text-2xl font-bold 
                  transition-all duration-300 line-clamp-2
                  ${hoveredCard === index ? 'text-(--accent)' : 'text-(--heading)'}
                `}>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-(--muted) line-clamp-3">
                  {service.description}
                </p>

                {/* FEATURES HIGHLIGHT - appears on hover */}
                <div className={`
                  mt-3 sm:mt-4 flex items-center gap-3 transition-all duration-300 overflow-hidden
                  ${hoveredCard === index ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="flex items-center gap-1.5">
                    <FiZap className="text-(--accent) text-[10px] sm:text-xs" />
                    <span className="text-[10px] sm:text-xs text-(--muted)">Scalable</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-(--accent) text-[10px] sm:text-xs" />
                    <span className="text-[10px] sm:text-xs text-(--muted)">Print Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiTrendingUp className="text-(--accent) text-[10px] sm:text-xs" />
                    <span className="text-[10px] sm:text-xs text-(--muted)">High Quality</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM - CTA */}
              <div className={`
                relative border-t px-5 sm:px-6 lg:px-7 py-3 sm:py-4 
                transition-all duration-300
                ${hoveredCard === index ? 'border-(--accent)/20 bg-(--accent)/3' : 'border-(--line)'}
              `}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-(--accent) text-[10px] sm:text-xs" />
                    <span className="text-[10px] sm:text-xs text-(--muted)">Fast Delivery</span>
                  </div>
                  <button className={`
                    service-arrow flex items-center gap-1.5 text-xs sm:text-sm font-medium 
                    transition-all duration-300
                    ${hoveredCard === index ? 'text-(--accent) gap-2' : 'text-(--muted) hover:text-(--accent)'}
                  `}>
                    Get Quote
                    <FiArrowRight className={`
                      text-[10px] sm:text-xs transition-all duration-300
                      ${hoveredCard === index ? 'translate-x-1' : 'group-hover:translate-x-1'}
                    `} />
                  </button>
                </div>
              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM CTA SECTION - Improved */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-2xl border border-(--line) bg-gradient-to-r from-(--surface-2) to-(--surface-1) px-5 sm:px-8 py-4 sm:py-5 shadow-lg">
            {/* Animated background glow */}
            <div className="absolute inset-0 rounded-2xl bg-(--accent)/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-(--accent)/10 flex items-center justify-center animate-pulse">
                <FiZap className="text-(--accent) text-sm" />
              </div>
              <span className="text-sm sm:text-base text-(--muted) font-medium">
                Not sure which service you need?
              </span>
            </div>
            
            <button className="group flex items-center gap-2 rounded-full bg-(--accent) px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-(--accent)/90 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Free Consultation
              <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            {/* Trust badge */}
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-(--accent) text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full rotate-12">
              24h Delivery
            </div>
          </div>
        </div>

        {/* TRUST INDICATORS - Mobile friendly */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-(--accent) text-sm" />
            <span className="text-xs sm:text-sm text-(--muted)">500+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-(--accent) text-sm" />
            <span className="text-xs sm:text-sm text-(--muted)">99% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-(--accent) text-sm" />
            <span className="text-xs sm:text-sm text-(--muted)">24h Fast Turnaround</span>
          </div>
        </div>

      </div>
    </section>
  );
}