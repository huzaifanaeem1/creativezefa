import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/site-data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-muted border-y border-(--line)"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16">

        {/* HEADING */}
        <SectionHeading
          eyebrow="Services"
          title="Vector Tracing Services Designed for Real Use"
          description="From blurry logos to complex artwork, I deliver clean, scalable vector files ready for print, branding, and production."
          align="left"
        />

        {/* CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.title}
              className="card-surface group flex flex-col justify-between w-full p-5"
            >
              
              {/* TOP */}
              <div>
                <div className="flex items-center justify-between">
                  <ServiceIcon icon={service.icon} />
                  <span className="text-xs font-semibold text-(--accent)">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-(--heading) group-hover:text-(--accent) transition">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-(--muted)">
                  {service.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="mt-4 flex items-center justify-between text-xs text-(--muted)">
                <span>✔ Print Ready</span>
                <span className="group-hover:text-(--accent) transition">
                  View →
                </span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}