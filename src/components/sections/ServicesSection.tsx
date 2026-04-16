import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/site-data";

export default function ServicesSection() {
  return (
    <section id="services" className="section-muted border-y border-(--line)">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Specialized digitizing solutions for every embroidery placement"
          description="Built for clean stitch quality, reduced machine downtime, and consistent brand presentation."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-surface group p-6">
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-4 font-display text-xl font-semibold text-(--heading)">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-(--muted)">{service.description}</p>
              <p className="mt-4 text-sm font-semibold text-(--accent)">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
