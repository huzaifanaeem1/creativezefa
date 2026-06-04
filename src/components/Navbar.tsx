"use client";
import Image from "next/image";

import { useState } from "react";
import { navLinks } from "@/data/site-data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-[var(--surface)/0.85] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">

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
    style={{ height: "auto" }}
  />
  <span className="leading-none">Creativezefa</span>
</a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--muted) transition hover:text-(--heading)"
            >
              {link.label}
            </a>
          ))}
        </nav>

       <div className="flex items-center gap-2">
  <ThemeToggle />

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=creativezefa2@gmail.com&subject=Quote Request"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--accent-strong) md:inline-flex"
  >
    Get a Quote
  </a>

  <button
    type="button"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--line) text-(--heading) md:hidden"
    aria-label="Open navigation"
    onClick={() => setOpen((prev) => !prev)}
  >
    <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
  </button>
</div>
</div>

      {open ? (
        <div className="border-t border-(--line) bg-(--surface) px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-(--muted) transition hover:bg-(--soft) hover:text-(--heading)"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}