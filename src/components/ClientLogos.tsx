"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FiAward, 
  FiSmile, 
  FiClock, 
  FiMapPin, 
  FiStar, 
  FiTrendingUp,
  FiCheckCircle
} from "react-icons/fi";

const trustStats = [
  {
    id: 1,
    icon: FiAward,
    value: "500+",
    label: "Projects Completed",
    description: "Successful deliveries",
  },
  {
    id: 2,
    icon: FiSmile,
    value: "98%",
    label: "Client Satisfaction",
    description: "Happy clients worldwide",
  },
  {
    id: 3,
    icon: FiClock,
    value: "24/7",
    label: "Fast Support",
    description: "Quick turnaround time",
  },
  {
    id: 4,
    icon: FiMapPin,
    value: "25+",
    label: "Countries Served",
    description: "Global client base",
  },
  {
    id: 5,
    icon: FiTrendingUp,
    value: "1000+",
    label: "Designs Created",
    description: "And counting...",
  },
];

const trustBadges = [
  "Quality Guaranteed",
  "Secure Payment",
  "Fast Delivery",
  "Free Revisions",
  "24/7 Support",
  "Money Back",
];

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: string }>({});

  // Animate numbers on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate each stat value
            trustStats.forEach((stat, index) => {
              const targetValue = stat.value.replace(/[^0-9]/g, '');
              const suffix = stat.value.replace(/[0-9]/g, '');
              let start = 0;
              const duration = 2000;
              const increment = Math.ceil(parseInt(targetValue) / (duration / 16));
              
              const timer = setInterval(() => {
                start += increment;
                if (start >= parseInt(targetValue)) {
                  setAnimatedValues(prev => ({
                    ...prev,
                    [index]: stat.value
                  }));
                  clearInterval(timer);
                } else {
                  setAnimatedValues(prev => ({
                    ...prev,
                    [index]: start + suffix
                  }));
                }
              }, 16);
            });
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      aria-label="Trust indicators" 
      className="border-y border-(--line) py-12 bg-(--surface-1) overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        
        {/* Trust Badges Row */}
        <div className="mb-10 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-8">
            {[...trustBadges, ...trustBadges].map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2) px-4 py-2"
              >
                <FiCheckCircle className="text-(--accent) text-sm" />
                <span className="text-sm font-medium text-(--muted) whitespace-nowrap">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                ref={(el) => { statsRef.current[index] = el; }}
                className={`group text-center transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 rounded-full bg-(--accent)/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <Icon className="relative text-3xl text-(--accent) group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="text-3xl font-bold text-(--heading) mb-1">
                  {animatedValues[index] || stat.value}
                </div>
                
                <div className="font-semibold text-sm text-(--muted) mb-1">
                  {stat.label}
                </div>
                
                <div className="text-xs text-(--muted)/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Score Bar */}
        <div className="mt-10 pt-6 border-t border-(--line)">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-(--accent) fill-(--accent) text-lg" />
                ))}
              </div>
              <div>
                <span className="font-bold text-(--heading)">4.9/5</span>
                <span className="text-sm text-(--muted) ml-1">TrustScore</span>
              </div>
            </div>
            
            <div className="h-2 flex-1 max-w-md rounded-full bg-(--surface-2) overflow-hidden">
              <div 
                className="h-full bg-(--accent) rounded-full transition-all duration-1000"
                style={{ width: isVisible ? '98%' : '0%' }}
              />
            </div>
            
            <div className="text-sm text-(--muted)">
              Based on 500+ reviews
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}