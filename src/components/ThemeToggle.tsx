"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/site-data";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Animate mobile menu
      gsap.fromTo(".mobile-nav",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-(--line) bg-(--surface)/95 backdrop-blur-xl shadow-lg"
          : "border-b border-(--line) bg-(--surface)/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-wide text-(--heading) transition-all hover:scale-105"
        >
          <div className="relative">
            <Image
              src="/images/creativezefa.png"
              alt="Creativezefa logo"
              width={45}
              height={45}
              priority
              className="object-contain transition-transform duration-300 group-hover:rotate-3"
              style={{ height: "auto" }}
            />
            {/* Green dot indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-(--accent) animate-pulse" />
          </div>
          <span className="leading-none bg-gradient-to-r from-(--heading) to-(--accent)/70 bg-clip-text text-transparent">
            CreativeZefa
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-(--muted) transition-all hover:text-(--accent)"
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-(--accent) transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* Desktop CTA Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=creativezefa2@gmail.com&subject=Quote%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-(--accent) to-(--accent)/80 px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg md:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Quote
              <FiChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--line) bg-(--surface-2) text-(--heading) transition-all hover:scale-105 hover:border-(--accent)/50 hover:bg-(--accent)/10 md:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <FiX className="text-xl text-(--accent)" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="mobile-nav fixed inset-x-0 top-[61px] z-40 h-[calc(100vh-61px)] border-t border-(--line) bg-(--surface)/95 backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col justify-between px-4 py-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-(--muted) transition-all hover:bg-(--accent)/10 hover:text-(--accent)"
                  style={{
                    animation: `slideIn 0.3s ease forwards ${index * 0.05}s`,
                    opacity: 0,
                    transform: "translateX(-20px)",
                  }}
                >
                  <span>{link.label}</span>
                  <FiChevronRight className="text-sm opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 space-y-3 border-t border-(--line) pt-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=creativezefa2@gmail.com&subject=Quote%20Request"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-(--accent) to-(--accent)/80 px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
              >
                Get a Quote
                <FiChevronRight className="text-sm" />
              </a>
              
              <a
                href="https://wa.me/message/PMGOOOEGCEL2N1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-(--line) bg-(--surface-2) px-4 py-3 text-sm font-semibold text-(--heading) transition-all hover:border-(--accent)/50 hover:bg-(--accent)/10"
              >
                <FaWhatsapp className="text-(--accent)" />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Footer Text */}
            <p className="mt-6 text-center text-[10px] text-(--muted)">
              Professional Vector Tracing & Print-Ready Artwork
            </p>
          </div>
        </div>
      )}

      {/* Add animation keyframes to globals.css */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}