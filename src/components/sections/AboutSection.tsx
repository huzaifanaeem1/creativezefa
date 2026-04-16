import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="About"
        title="Experienced digitizer focused on stitch quality and production confidence"
        description="I help embroidery shops, apparel brands, and merch creators convert artwork into flawless machine-ready files that sew clean on real garments."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card-surface p-6">
          <h3 className="font-display text-2xl font-semibold text-(--heading)">Why clients choose this service</h3>
          <ul className="mt-4 space-y-3 text-sm text-(--muted)">
            <li>Fast delivery with clear communication from first message to final file.</li>
            <li>Fabric-aware digitizing strategies for better stitch-outs and less thread breaks.</li>
            <li>Fair and transparent pricing with revisions that support real production needs.</li>
            <li>Tested sequencing for caps, flats, and heavy jacket back placements.</li>
          </ul>
        </article>

        <article className="card-surface p-6">
          <h3 className="font-display text-2xl font-semibold text-(--heading)">Tools and technical skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-(--line) bg-(--surface-2) px-3 py-1.5 text-xs font-semibold text-(--muted)"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-(--muted)">
            Experience level: Senior digitizing specialist with a decade of commercial workflow exposure.
          </p>
        </article>
      </div>
    </section>
  );
}
