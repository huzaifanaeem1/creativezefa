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
import { FiChevronRight, FiMail, FiMapPin } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            once: true,
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
    <footer 
      ref={footerRef} 
      className="relative border-t border-(--line) bg-gradient-to-b from-(--surface-1) to-(--surface-2)"
    >
      
      {/* Back to Top Button */}
      <button
        ref={backToTopRef}
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-(--accent) px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-(--accent)/25 group"
      >
        <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform duration-300" />
        <span>Back to Top</span>
      </button>

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COLUMN 1 - Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-3 font-display text-xl font-bold tracking-wide text-(--heading) hover:text-(--accent) transition-colors duration-300"
            >
              <Image
                src="/images/creativezefa.png"
                alt="Creativezefa logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
              <span>CreativeZefa</span>
            </a>
            
            <p className="text-sm text-(--muted) leading-relaxed max-w-sm">
              Professional vector tracing, logo redraws, and print-ready artwork for screen printing, embroidery, DTF, and branding.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-(--accent)/10 px-3.5 py-1.5">
                <FaHeart className="text-(--accent) text-xs" />
                <span className="text-xs font-medium text-(--accent)">Serving since {startYear}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-(--muted)">
                <FaShieldAlt className="text-(--accent) text-sm" />
                <span>100% Secure & Verified</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-(--heading)">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-(--muted) hover:text-(--accent) transition-colors duration-200"
                  >
                    <FiChevronRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Services */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-(--heading)">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "Raster to Vector",
                "Logo Redraw",
                "Embroidery Digitizing",
                "Screen Print Art",
                "DTF Transfer Design",
                "Vector Bundles",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm text-(--muted) hover:text-(--accent) transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-(--accent)/40 group-hover:bg-(--accent) transition-colors" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 - Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-(--heading)">
              Contact
            </h3>
            
            <div className="space-y-3">
              <a
                href="mailto:creativezefa2@gmail.com"
                className="flex items-start gap-3 text-sm text-(--muted) hover:text-(--accent) transition-colors group"
              >
                <FiMail className="text-lg mt-0.5 group-hover:scale-110 transition-transform" />
                <span>hello@creativezefa.art</span>
              </a>
              
              <div className="flex items-center gap-3 text-sm text-(--muted)">
                <FaRegClock className="text-lg" />
                <span>24/7 Online Support</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-(--muted)">
                <FaClock className="text-lg" />
                <span>Fast Turnaround: 4-24 Hours</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-(--muted)">
                <FiMapPin className="text-lg mt-0.5" />
                <span>Remote Services — Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-(--line)" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm font-medium text-(--muted)">Follow Us:</span>
            <div className="flex gap-2.5">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/message/PMGOOOEGCEL2N1", label: "WhatsApp" },
                { icon: FaInstagram, href: "https://www.instagram.com/creativezefa/", label: "Instagram" },
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61572230995660", label: "Facebook" },
                { icon: FaTwitter, href: "https://x.com/CreativeZefa", label: "Twitter" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/huzaifa-creativezefa-307b1638a", label: "LinkedIn" },
                { icon: FaBehance, href: "https://www.behance.net/creativezefa", label: "Behance" },
                { icon: FaStore, href: "https://zefasvgs.etsy.com", label: "Etsy" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-(--line) bg-(--surface-1) text-(--muted) transition-all duration-300 hover:border-(--accent) hover:bg-(--accent) hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-(--surface-3) px-2 py-0.5 text-[10px] font-medium text-(--heading) opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-xs text-(--muted)">
              © {yearDisplay} <span className="font-semibold text-(--heading)">CreativeZefa</span>
            </p>
            <p className="mt-1 text-[10px] text-(--muted)/60">
              Professional Vector Tracing & Print-Ready Artwork
            </p>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-(--line) pt-6">
          <div className="flex items-center gap-2 text-xs text-(--muted)">
            <FaShieldAlt className="text-(--accent) text-sm" />
            <span>Secure Payments</span>
          </div>
          <div className="hidden h-4 w-px bg-(--line) sm:block" />
          <div className="flex items-center gap-2 text-xs text-(--muted)">
            <FaFileInvoice className="text-(--accent) text-sm" />
            <span>Professional Invoice</span>
          </div>
          <div className="hidden h-4 w-px bg-(--line) sm:block" />
          <div className="flex items-center gap-2 text-xs text-(--muted)">
            <FaClock className="text-(--accent) text-sm" />
            <span>24h Fast Turnaround</span>
          </div>
          <div className="hidden h-4 w-px bg-(--line) sm:block" />
          <div className="flex items-center gap-2 text-xs text-(--muted)">
            <FaHeart className="text-(--accent) text-sm" />
            <span>99% Satisfaction</span>
          </div>
        </div>

      </div>
    </footer>
  );
}