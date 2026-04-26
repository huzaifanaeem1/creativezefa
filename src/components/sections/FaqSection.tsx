"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/site-data";
import { FiChevronDown, FiHelpCircle, FiMail, FiMessageCircle } from "react-icons/fi";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-(--accent)/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-(--accent)/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to help you understand my services and workflow."
        />

        {/* FAQ Grid */}
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              ref={(el) => { faqRefs.current[index] = el; }}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface-1)/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                  openIndex === index ? 'ring-2 ring-(--accent)/30' : ''
                }`}
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-(--accent)/0 to-(--accent)/0 group-hover:from-(--accent)/5 group-hover:to-transparent transition-all duration-500" />

                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="relative w-full p-5 md:p-6 text-left cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Icon */}
                      <div className="shrink-0 mt-0.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          openIndex === index 
                            ? 'bg-(--accent) text-white' 
                            : 'bg-(--accent)/10 text-(--accent) group-hover:scale-110'
                        }`}>
                          <FiHelpCircle className="text-base" />
                        </div>
                      </div>
                      
                      {/* Question Text */}
                      <h3 className={`font-display text-base md:text-lg font-semibold transition-colors duration-300 flex-1 ${
                        openIndex === index ? 'text-(--accent)' : 'text-(--heading) group-hover:text-(--accent)'
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className={`shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-(--accent)' : 'text-(--muted) group-hover:text-(--accent)'
                    }`}>
                      <FiChevronDown className="text-xl" />
                    </div>
                  </div>
                </button>

                {/* Answer Panel with Smooth Animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <div className="flex gap-3">
                      <div className="w-0.5 bg-(--accent)/30 rounded-full" />
                      <p className="text-sm leading-relaxed text-(--muted)">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-(--accent)/0 via-(--accent)/50 to-(--accent)/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className={`mt-12 text-center transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block rounded-2xl border border-(--line) bg-(--surface-1)/50 backdrop-blur-sm p-6 md:p-8">
            <div className="flex flex-col items-center gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-(--accent)/10 flex items-center justify-center">
                <FiMessageCircle className="text-2xl text-(--accent)" />
              </div>
              
              {/* Text */}
              <div>
                <h3 className="font-display text-lg font-semibold text-(--heading) mb-1">
                  Still have questions?
                </h3>
                <p className="text-sm text-(--muted)">
                  Can&apos;t find the answer you&apos;re looking for? Please reach out to me.
                </p>
              </div>
              
              {/* CTA Button */}
              <button className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-(--accent) text-white text-sm font-semibold overflow-hidden transition-all hover:shadow-lg hover:scale-105">
                <FiMail className="relative z-10 text-sm" />
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Stats */}
        <div className={`mt-8 flex flex-wrap justify-center gap-6 text-center transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-(--accent)/10 flex items-center justify-center">
              <span className="text-xs font-bold text-(--accent)">✓</span>
            </div>
            <span className="text-xs text-(--muted)">Quick Responses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-(--accent)/10 flex items-center justify-center">
              <span className="text-xs font-bold text-(--accent)">✓</span>
            </div>
            <span className="text-xs text-(--muted)">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-(--accent)/10 flex items-center justify-center">
              <span className="text-xs font-bold text-(--accent)">✓</span>
            </div>
            <span className="text-xs text-(--muted)">100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}