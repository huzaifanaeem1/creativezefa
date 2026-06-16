"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import { testimonials } from "@/data/site-data";
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiHeart, 
  FiUsers, 
  FiStar,
  FiMessageSquare,
  FiTrendingUp,
  FiThumbsUp,
  FiExternalLink
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    gsap.registerPlugin(ScrollTrigger);

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
            duration: 0.6,
            delay: index * (isMobile ? 0.08 : 0.12),
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

    // Button animation
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
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

  const handleCardHover = (index: number) => {
    if (isMobile) return;
    setHoveredCard(index);
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      y: -12,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 25px 40px -12px rgba(0,0,0,0.3)",
    });
  };

  const handleCardLeave = (index: number) => {
    setHoveredCard(null);
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.in",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    });
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const nextSlide = () => {
    if (isMobile && testimonials.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (isMobile && testimonials.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const displayedTestimonials = isMobile 
    ? [testimonials[currentIndex]]
    : testimonials;

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden border-y border-(--line) py-12 sm:py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by embroidery shops and growing brands"
            description="Real feedback from clients who rely on clean files and dependable delivery."
            align="center"
          />
          
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-(--surface-2)/50 backdrop-blur-sm border border-(--line) px-4 py-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={`text-sm ${i < Math.floor(averageRating) ? 'text-(--accent) fill-(--accent)' : 'text-(--muted)'}`} />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-(--heading)">
              {averageRating.toFixed(1)} out of 5
            </span>
            <span className="text-xs text-(--muted)">• {testimonials.length}+ reviews</span>
          </div>
        </div>

        {!isMobile && (
          <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials.map((review, index) => (
              <div
                key={review.name}
                ref={(el) => { cardsRef.current[index] = el; }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
                onClick={() => setActiveTestimonial(activeTestimonial === index ? null : index)}
                className={`
                  group relative cursor-pointer rounded-2xl border transition-all duration-300
                  ${hoveredCard === index 
                    ? 'border-(--accent)/30 shadow-2xl' 
                    : 'border-(--line) shadow-md hover:shadow-xl'
                  }
                  bg-gradient-to-br from-(--surface-1) to-(--surface-2)
                  p-5 sm:p-6 lg:p-7
                `}
              >
                {/* Quote decoration */}
                <div className="absolute -top-3 -left-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-4xl sm:text-5xl text-(--accent)">“</div>
                </div>

                <div className="relative mb-4">
                  <Stars rating={review.rating} />
                </div>

                <p className={`
                  relative text-sm sm:text-base leading-relaxed text-(--muted) transition-all duration-300
                  ${activeTestimonial === index ? '' : 'line-clamp-4'}
                `}>
                  {review.message}
                </p>

                {review.message.length > 150 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTestimonial(activeTestimonial === index ? null : index);
                    }}
                    className="mt-2 text-xs font-semibold text-(--accent) hover:underline"
                  >
                    {activeTestimonial === index ? 'Show less' : 'Read more'}
                  </button>
                )}

                <div className="mt-5 pt-4 border-t border-(--line)">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-(--accent)/20 to-(--accent)/5 flex items-center justify-center">
                      <span className="text-base font-bold text-(--accent)">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-base sm:text-lg font-semibold text-(--heading)">
                        {review.name}
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-(--accent)/70">
                        {review.role}
                      </p>
                    </div>
                    <FiHeart className="text-(--muted)/30 group-hover:text-(--accent)/50 transition-colors" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-medium text-green-600 dark:text-green-400">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="relative">
            <div className="overflow-hidden px-2">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((review, index) => (
                  <div key={review.name} className="w-full flex-shrink-0 px-2">
                    <div className="rounded-2xl border border-(--line) bg-gradient-to-br from-(--surface-1) to-(--surface-2) p-6">
                      <div className="text-3xl text-(--accent)/20 mb-3">“</div>
                      <Stars rating={review.rating} />
                      <p className="mt-4 text-sm leading-relaxed text-(--muted)">
                        {review.message}
                      </p>
                      <div className="mt-5 pt-4 border-t border-(--line)">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-(--accent)/20 flex items-center justify-center">
                            <span className="font-bold text-(--accent)">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-display font-semibold text-(--heading)">
                              {review.name}
                            </p>
                            <p className="text-xs text-(--accent)/70">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 h-8 w-8 rounded-full bg-(--surface-2) border border-(--line) flex items-center justify-center text-(--muted) hover:text-(--accent) hover:border-(--accent) transition-all"
                >
                  <FiChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 h-8 w-8 rounded-full bg-(--surface-2) border border-(--line) flex items-center justify-center text-(--muted) hover:text-(--accent) hover:border-(--accent) transition-all"
                >
                  <FiChevronRight className="text-sm" />
                </button>
              </>
            )}

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${currentIndex === index 
                      ? 'w-6 bg-(--accent)' 
                      : 'w-2 bg-(--line) hover:bg-(--muted)'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 rounded-xl bg-(--surface-2)/50 border border-(--line) group hover:border-(--accent)/30 transition-all">
            <FiUsers className="text-(--accent) text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display font-bold text-lg sm:text-xl text-(--heading)">500+</div>
            <div className="text-[10px] sm:text-xs text-(--muted)">Happy Clients</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-(--surface-2)/50 border border-(--line) group hover:border-(--accent)/30 transition-all">
            <FiStar className="text-(--accent) text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display font-bold text-lg sm:text-xl text-(--heading)">4.9/5</div>
            <div className="text-[10px] sm:text-xs text-(--muted)">Average Rating</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-(--surface-2)/50 border border-(--line) group hover:border-(--accent)/30 transition-all">
            <FiTrendingUp className="text-(--accent) text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display font-bold text-lg sm:text-xl text-(--heading)">99%</div>
            <div className="text-[10px] sm:text-xs text-(--muted)">Satisfaction</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-(--surface-2)/50 border border-(--line) group hover:border-(--accent)/30 transition-all">
            <FiMessageSquare className="text-(--accent) text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-display font-bold text-lg sm:text-xl text-(--heading)">100%</div>
            <div className="text-[10px] sm:text-xs text-(--muted)">Real Reviews</div>
          </div>
        </div>

        {/* GOOGLE REVIEW BUTTON - ADDED HERE */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <a
            ref={buttonRef}
            href="https://g.page/r/CZxOCwcMq1yWEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#0b461b] to-[#34A853] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-[#4285F4]/25 hover:shadow-[#4285F4]/40 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.006 2.003c-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998 0-5.517-4.48-9.997-9.998-9.997zM12 18.48c-3.576 0-6.48-2.904-6.48-6.48S8.424 5.52 12 5.52c1.728 0 3.264 0.672 4.416 1.728l-1.824 1.824c-0.672-0.672-1.536-1.056-2.592-1.056-2.112 0-3.84 1.728-3.84 3.84s1.728 3.84 3.84 3.84c1.92 0 3.264-1.248 3.6-2.4h-3.6v-2.4h6.24c0.096 0.48 0.144 0.96 0.144 1.536 0 3.456-2.4 6.24-6.384 6.24z"/>
            </svg>
            <span>Leave a Review on Google</span>
            <FiExternalLink className="text-base sm:text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="absolute -inset-1 rounded-full bg-[#4285F4]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
          </a>
        </div>

      </div>
    </section>
  );
}