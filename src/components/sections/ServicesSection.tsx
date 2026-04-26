"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/site-data";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.1,
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
    };
  }, []);

  const handleCardHover = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    // Create a timeline for smooth sequence
    const tl = gsap.timeline();
    
    tl.to(card, {
      y: -12,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
    });
    
    // Animate the arrow inside
    const arrow = card.querySelector('.service-arrow');
    if (arrow) {
      tl.to(arrow, {
        x: 5,
        duration: 0.2,
        ease: "power2.out",
      }, 0);
    }
  };

  const handleCardLeave = (index: number) => {
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
  };

  const handleIconHover = (iconWrapper: HTMLDivElement | null) => {
    if (!iconWrapper) return;
    gsap.to(iconWrapper, {
      scale: 1.1,
      rotate: 5,
      duration: 0.3,
      ease: "back.out(0.5)",
    });
  };

  const handleIconLeave = (iconWrapper: HTMLDivElement | null) => {
    if (!iconWrapper) return;
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
      className="section-muted border-y border-(--line) overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16">

        {/* HEADING */}
        <SectionHeading
          eyebrow="Services"
          title="Vector Tracing Services Designed for Real Use"
          description="From blurry logos to complex artwork, I deliver clean, scalable vector files ready for print, branding, and production."
          align="left"
        />

        {/* CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className="group relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1) p-6 transition-all"
            >
              
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-(--accent)/0 to-(--accent)/0 group-hover:from-(--accent)/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Decorative Circle */}
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-(--accent)/5 group-hover:bg-(--accent)/10 transition-all duration-500 scale-0 group-hover:scale-100" />
              
              {/* TOP */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div 
                    className="cursor-pointer"
                    onMouseEnter={(e) => handleIconHover(e.currentTarget)}
                    onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
                  >
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <span className="rounded-full bg-(--accent)/10 px-3 py-1 text-xs font-bold text-(--accent)">
                    {service.price}
                  </span>
                </div>

                <h3 
                  ref={(el) => { headingsRef.current[index] = el; }}
                  className="mt-5 font-display text-xl font-semibold text-(--heading) transition-all duration-300 group-hover:text-(--accent)"
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-(--muted)">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="relative mt-6 flex items-center justify-between border-t border-(--line) pt-4 text-xs text-(--muted)">
                <div className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-(--accent) text-xs" />
                  <span>Print Ready</span>
                </div>
                <span className="service-arrow flex items-center gap-1 font-medium text-(--accent) transition-all">
                  Learn More
                  <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </span>
              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-(--line) bg-(--surface-2) px-5 py-2.5">
            <span className="text-sm text-(--muted)">Not sure which service you need?</span>
            <button className="text-sm font-semibold text-(--accent) hover:underline">
              Get Free Consultation →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}