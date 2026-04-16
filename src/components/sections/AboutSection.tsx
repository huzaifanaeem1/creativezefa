import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16"
    >
      <SectionHeading
        eyebrow="About Me"
        title="Turning rough images into clean, professional vector artwork"
        description="I help businesses, brands, and creators convert low-quality images into sharp, scalable vector designs ready for print, branding, and production."
      />

      <div className="grid gap-6 md:grid-cols-2">
        
        {/* LEFT CARD */}
        <article className="card-surface p-5 md:p-6 space-y-4">
          <h3 className="font-display text-xl font-semibold text-(--heading)">
            Why clients choose me
          </h3>

          <ul className="space-y-3 text-sm text-(--muted)">
            <li>✔ Clean, smooth vector tracing with attention to every detail.</li>
            <li>✔ Fast delivery and quick revisions based on your needs.</li>
            <li>✔ Print-ready files (AI, SVG, EPS, PDF, PNG).</li>
            <li>✔ Perfect for logos, laser cutting, vinyl, and branding.</li>
          </ul>
        </article>

        {/* RIGHT CARD */}
        <article className="card-surface p-5 md:p-6 space-y-4">
          <h3 className="font-display text-xl font-semibold text-(--heading)">
            Tools & Skills
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-(--line) bg-(--surface-2) px-3 py-1 text-[11px] font-medium text-(--muted) hover:bg-(--accent-soft) transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-sm text-(--muted)">
            Experienced in professional vector workflows using industry-standard tools to ensure high-quality results every time.
          </p>
        </article>

      </div>
    </section>
  );
}