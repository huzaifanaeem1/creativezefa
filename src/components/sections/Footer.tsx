export default function Footer() {
  return (
    <footer className="border-t border-(--line) bg-(--surface)">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-(--muted) md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-display text-lg font-semibold text-(--heading)">StitchCraft Digitizing</p>
          <p className="mt-2">Commercial embroidery digitizing for apparel brands and production shops.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="https://wa.me/15550000000" target="_blank" rel="noreferrer" className="footer-link">
            WhatsApp
          </a>
          <a href="https://www.fiverr.com" target="_blank" rel="noreferrer" className="footer-link">
            Fiverr
          </a>
          <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="footer-link">
            Upwork
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-(--line) px-4 py-4 text-center text-xs text-(--muted) md:px-6">
        Copyright {new Date().getFullYear()} StitchCraft Digitizing. All rights reserved.
      </div>
    </footer>
  );
}
