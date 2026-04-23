"use client";

import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/site-data";
import { FiCheckCircle, FiTool, FiAward, FiClock, FiUsers, FiHeart } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const skillItemsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate left card
    if (leftCardRef.current) {
      gsap.fromTo(leftCardRef.current,
        {
          opacity: 0,
          x: -50,
          rotateY: -10,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate right card
    if (rightCardRef.current) {
      gsap.fromTo(rightCardRef.current,
        {
          opacity: 0,
          x: 50,
          rotateY: 10,
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate list items with stagger
    listItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1 + 0.3,
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

    // Animate skill tags with 3D rotation
    skillItemsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.fromTo(skill,
          {
            opacity: 0,
            scale: 0,
            rotationX: -90,
          },
          {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.4,
            delay: index * 0.05 + 0.2,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: rightCardRef.current,
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

  const handleCardHover = (card: HTMLDivElement | null, isLeft: boolean) => {
    if (!card) return;
    gsap.to(card, {
      y: -10,
      boxShadow: "0 25px 40px -12px rgba(0,0,0,0.25)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (card: HTMLDivElement | null) => {
    if (!card) return;
    gsap.to(card, {
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const handleSkillHover = (skill: HTMLSpanElement | null) => {
    if (!skill) return;
    gsap.to(skill, {
      scale: 1.1,
      duration: 0.2,
      ease: "back.out(1)",
    });
  };

  const handleSkillLeave = (skill: HTMLSpanElement | null) => {
    if (!skill) return;
    gsap.to(skill, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16"
    >
      <SectionHeading
        eyebrow="About Me"
        title="Turning rough images into clean, professional vector artwork"
        description="I help businesses, brands, and creators convert low-quality images into sharp, scalable vector designs ready for print, branding, and production."
      />

      <div className="grid gap-6 md:grid-cols-2">
        
        {/* LEFT CARD */}
        <article
          ref={leftCardRef}
          onMouseEnter={() => handleCardHover(leftCardRef.current, true)}
          onMouseLeave={() => handleCardLeave(leftCardRef.current)}
          className="group relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1) p-5 transition-all md:p-6"
        >
          {/* Background Pattern */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100 100 L 200 0 L 200 100 Z" fill="currentColor" className="text-(--accent)" />
            </svg>
          </div>

          <div className="relative">
            {/* Header with Icon */}
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-(--accent)/10 p-2 text-(--accent) group-hover:scale-110 transition-transform duration-300">
                <FiUsers className="text-xl" />
              </div>
              <h3 className="font-display text-xl font-semibold text-(--heading)">
                Why clients choose me
              </h3>
            </div>

            {/* Features List */}
            <ul className="space-y-3 text-sm text-(--muted)">
              {[
                "Clean, smooth vector tracing with attention to every detail.",
                "Fast delivery and quick revisions based on your needs.",
                "Print-ready files (AI, SVG, EPS, PDF, PNG).",
                "Perfect for logos, laser cutting, vinyl, and branding."
              ].map((text, index) => (
                <li
                  key={index}
                  ref={(el) => { listItemsRef.current[index] = el; }}
                  className="flex items-start gap-2"
                >
                  <FiCheckCircle className="mt-0.5 text-base text-(--accent) flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Stats/Highlight */}
            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-(--line)">
              <div className="flex items-center gap-2">
                <FiAward className="text-(--accent)" />
                <span className="text-xs text-(--muted)">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiHeart className="text-(--accent)" />
                <span className="text-xs text-(--muted)">98% Satisfaction</span>
              </div>
            </div>
          </div>
        </article>

        {/* RIGHT CARD */}
        <article
          ref={rightCardRef}
          onMouseEnter={() => handleCardHover(rightCardRef.current, false)}
          onMouseLeave={() => handleCardLeave(rightCardRef.current)}
          className="group relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1) p-5 transition-all md:p-6"
        >
          {/* Background Pattern */}
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="currentColor" className="text-(--accent)" />
            </svg>
          </div>

          <div className="relative">
            {/* Header with Icon */}
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-(--accent)/10 p-2 text-(--accent) group-hover:scale-110 transition-transform duration-300">
                <FiTool className="text-xl" />
              </div>
              <h3 className="font-display text-xl font-semibold text-(--heading)">
                Tools & Skills
              </h3>
            </div>

            {/* Skills Grid with 3D effect */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  ref={(el) => { skillItemsRef.current[index] = el; }}
                  onMouseEnter={() => handleSkillHover(skillItemsRef.current[index])}
                  onMouseLeave={() => handleSkillLeave(skillItemsRef.current[index])}
                  className="inline-flex cursor-default rounded-full border border-(--line) bg-(--surface-2) px-3 py-1 text-[11px] font-medium text-(--muted) transition-all hover:border-(--accent)/50 hover:bg-(--accent)/10 hover:text-(--accent)"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Description with animation */}
            <p className="mt-4 text-sm text-(--muted) leading-relaxed">
              Experienced in professional vector workflows using industry-standard tools 
              to ensure high-quality results every time.
            </p>

            {/* Trust Badge */}
            <div className="mt-4 flex items-center gap-2 pt-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full bg-(--accent)/20 border border-(--surface-1) flex items-center justify-center text-[10px] text-(--accent)">
                    ✓
                  </div>
                ))}
              </div>
              <span className="text-xs text-(--muted)">Trusted by 500+ clients</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}