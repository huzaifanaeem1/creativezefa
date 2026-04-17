const logos = [
  "/logos/logo-a.svg",
  "/logos/logo-b.svg",
  "/logos/logo-c.svg",
  "/logos/logo-d.svg",
  "/logos/logo-e.svg",
];

export default function ClientLogos() {
  return (
    <section aria-label="Client logos" className="border-y border-(--line) py-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-4 px-4 opacity-90 sm:grid-cols-3 md:grid-cols-5 md:px-6">
        {logos.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt="Client logo placeholder"
            className="mx-auto h-10 w-auto object-contain grayscale transition hover:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
