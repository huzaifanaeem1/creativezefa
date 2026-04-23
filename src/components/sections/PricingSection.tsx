"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricing } from "@/data/site-data";
import { FiClock, FiRefreshCw, FiTarget, FiZap, FiStar, FiDollarSign } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PricingSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(0.4)",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate footer
    if (footerRef.current) {
      gsap.fromTo(footerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Helper for icon based on plan
  const getPlanIcon = (planName: string) => {
    switch (planName) {
      case "Starter":
        return <FiStar className="text-2xl" />;
      case "Growth":
        return <FiZap className="text-2xl" />;
      case "Production":
        return <FiTarget className="text-2xl" />;
      default:
        return <FiDollarSign className="text-2xl" />;
    }
  };

  const handleCardHover = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.in",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    });
  };

  const handleButtonHover = (button: HTMLButtonElement | null) => {
    if (!button) return;
    gsap.to(button, {
      scale: 0.98,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (button: HTMLButtonElement | null) => {
    if (!button) return;
    gsap.to(button, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} id="pricing" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent plans with fast turnaround"
        description="Choose a level based on complexity and urgency. Final quote is always confirmed before work begins."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricing.map((plan, index) => (
          <div
            key={plan.name}
            ref={(el) => { cardsRef.current[index] = el; }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardLeave(index)}
            className={`relative rounded-2xl border border-(--line) bg-(--surface-1) p-6 transition-all ${
              plan.name === "Growth" ? "ring-2 ring-(--accent)/30" : ""
            }`}
          >
            {/* Popular Badge for Growth Plan */}
            {plan.name === "Growth" && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-(--accent) px-3 py-1 text-xs font-bold text-white shadow-lg">
                MOST POPULAR
              </div>
            )}

            {/* Icon and Name */}
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-(--surface-2) p-2 text-(--accent)">
                {getPlanIcon(plan.name)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-(--accent)">
                {plan.name}
              </span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <p className="font-display text-5xl font-bold tracking-tight text-(--heading)">
                {plan.startingFrom}
                <span className="text-lg font-normal text-(--muted)">/project</span>
              </p>
              <p className="mt-1 text-sm text-(--muted)">Starting from</p>
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-(--muted)">
                <FiClock className="text-base text-(--accent)" />
                <span>
                  <span className="font-semibold text-(--heading)">Turnaround:</span> {plan.turnaround}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-(--muted)">
                <FiRefreshCw className="text-base text-(--accent)" />
                <span>
                  <span className="font-semibold text-(--heading)">Revisions:</span> {plan.revisions}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-(--muted)">
                <FiTarget className="text-base text-(--accent)" />
                <span>
                  <span className="font-semibold text-(--heading)">Best for:</span> {plan.bestFor}
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              onMouseEnter={(e) => handleButtonHover(e.currentTarget)}
              onMouseLeave={(e) => handleButtonLeave(e.currentTarget)}
              className="mt-8 w-full rounded-lg border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm font-semibold text-(--heading) transition-colors hover:bg-(--surface-3)"
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>

      {/* Additional Info Footer */}
      <div ref={footerRef} className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2) px-4 py-2 text-sm text-(--muted)">
          <FiDollarSign className="text-(--accent)" />
          <span>Need a custom quote? </span>
          <button className="font-semibold text-(--accent) hover:underline">
            Contact us →
          </button>
        </div>
        <p className="mt-4 text-xs text-(--muted)">
          * All prices are in USD. Final quote confirmed before starting any project.
        </p>
      </div>
    </section>
  );
}