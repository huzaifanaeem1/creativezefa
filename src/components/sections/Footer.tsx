"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaStore, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-(--line) bg-transparent">
      
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-(--muted) md:flex-row md:items-center md:justify-between md:px-6">
        
        {/* LEFT SIDE (LOGO + TEXT) */}
        <div>
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-semibold tracking-wide text-(--heading)"
          >
            <Image
              src="/images/creativezefa.png"
              alt="Creativezefa logo"
              width={50}
              height={30}
              priority
              className="object-contain"
            />
            <span className="leading-none">Creativezefa</span>
          </a>

          <p className="mt-2 max-w-sm">
            Commercial embroidery digitizing for apparel brands and production shops.
          </p>
        </div>

        {/* RIGHT SIDE (SOCIAL ICONS) */}
        <div className="flex items-center gap-4 text-xl">
          
          <a
            href="https://wa.me/15550000000"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/creativezefa/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61572230995660"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/CreativeZefa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter/>
          </a>

          <a
            href="https://zefasvgs.etsy.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaStore />
          </a>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-(--line) px-4 py-4 text-center text-xs text-(--muted) md:px-6">
        © {new Date().getFullYear()} Creativezefa. All rights reserved.
      </div>
    </footer>
  );
}