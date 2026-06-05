"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaStore, 
  FaTwitter, 
  FaLinkedin, 
  FaHeart,
  FaEnvelope,
  FaClock,
  FaArrowUp,
  FaShieldAlt,
  FaFileInvoice,
  FaRegClock,
  FaBehance,
  FaQuestionCircle
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const yearDisplay = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer ref={footerRef} className="relative border-t border-(--line) bg-linear-to-b from-(--surface-1) to-(--surface-2)">
      
      {/* Back to Top Button */}
      <button
        ref={backToTopRef}
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-(--accent) px-4 py-2 text-xs font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
        <span>Back to Top</span>
      </button>

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* COLUMN 1 - Brand Info */}
          <div className="space-y-4">
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-(--heading) hover:text-(--accent) transition-colors"
            >
              <Image
                src="/images/creativezefa.png"
                alt="Creativezefa logo"
                width={45}
                height={45}
                priority
                className="object-contain"
              />
              <span>CreativeZefa</span>
            </a>
            
            <p className="text-sm text-(--muted) leading-relaxed">
              Professional raster-to-vector conversion, vector tracing, logo redraws, 
              and print-ready artwork for screen printing, embroidery, DTF, vinyl cutting, and branding.
            </p>
            
            {/* Years of Experience Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-(--accent)/10 px-3 py-1.5">
              <FaHeart className="text-(--accent) text-xs" />
              <span className="text-xs font-medium text-(--accent)">Serving since {startYear}</span>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-[11px] text-(--muted)">
              <FaShieldAlt className="text-(--accent) text-xs" />
              <span>100% Secure & Verified</span>
            </div>
          </div>

          {/* COLUMN 2 - Quick Links (with FAQ) */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-(--heading)">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQs", href: "#faq", icon: FaQuestionCircle },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-(--muted) hover:text-(--accent) transition-colors"
                  >
                    <FiChevronRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      {link.icon && <link.icon className="text-xs" />}
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-(--heading)">Get in Touch</h3>
            
            <div className="space-y-3">
              <a
                href="mailto:creativezefa2@gmail.com"
                className="flex items-center gap-3 text-sm text-(--muted) hover:text-(--accent) transition-colors group"
              >
                <FaEnvelope className="text-lg group-hover:scale-110 transition-transform" />
                <span>creativezefa2@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-sm text-(--muted)">
                <FaRegClock className="text-lg" />
                <span>24/7 Online Support</span>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-(--muted)">
                <FaClock className="text-lg mt-0.5" />
                <span>Fast Turnaround: 4-24 Hours</span>
              </div>

              {/* Location - Remote */}
              <div className="flex items-start gap-3 text-sm text-(--muted)">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                </svg>
                <span>Remote Services — Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-(--line)" />

        {/* Bottom Section - Social + Copyright */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Social Icons with Tooltip effect */}
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <h3 className="text-sm font-semibold text-(--heading)">Follow Us:</h3>
            <div className="flex gap-3">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/message/PMGOOOEGCEL2N1", color: "hover:text-green-500", label: "WhatsApp" },
                { icon: FaInstagram, href: "https://www.instagram.com/creativezefa/", color: "hover:text-pink-500", label: "Instagram" },
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61572230995660", color: "hover:text-blue-600", label: "Facebook" },
                { icon: FaTwitter, href: "https://x.com/CreativeZefa", color: "hover:text-sky-500", label: "Twitter" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/huzaifa-creativezefa-307b1638a", color: "hover:text-blue-700", label: "LinkedIn" },
                { icon: FaBehance, href: "https://www.behance.net/creativezefa", color: "hover:text-blue-400", label: "Behance" },
                { icon: FaStore, href: "https://zefasvgs.etsy.com", color: "hover:text-orange-500", label: "Etsy Shop" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative text-xl text-(--muted) ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-(--surface-3) px-2 py-1 text-[10px] font-medium text-(--heading) opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright with Year Range */}
          <div className="text-center sm:text-right">
            <p className="text-xs text-(--muted)">
              © {yearDisplay} <span className="font-semibold text-(--heading)">CreativeZefa</span>
            </p>
            <p className="mt-1 text-[10px] text-(--muted)/70">
              Professional Vector Tracing & Print-Ready Artwork Experts
            </p>
          </div>
        </div>

        {/* Additional Trust Badge Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-(--line) pt-6">
          <div className="flex items-center gap-2 text-[11px] text-(--muted)">
            <FaShieldAlt className="text-(--accent) text-xs" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-(--muted)">
            <FaFileInvoice className="text-(--accent) text-xs" />
            <span>Professional Invoice</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-(--muted)">
            <FaClock className="text-(--accent) text-xs" />
            <span>24h Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-(--muted)">
            <FaHeart className="text-(--accent) text-xs" />
            <span>99% Satisfaction</span>
          </div>
        </div>

      </div>
    </footer>
  );
}