import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import { testimonials } from "@/data/site-data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-muted border-y border-(--line)">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by embroidery shops and growing brands"
          description="Real feedback from clients who rely on clean files and dependable delivery."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="card-surface p-6">
              <Stars rating={review.rating} />
              <p className="mt-4 text-sm leading-6 text-(--muted)">{review.message}</p>
              <p className="mt-5 font-display text-lg font-semibold text-(--heading)">{review.name}</p>
              <p className="text-xs uppercase tracking-wider text-(--muted)">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
