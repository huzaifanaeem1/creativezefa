import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/site-data";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-16"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers to help you understand my services and workflow."
      />

      <div className="space-y-3">

        {faqs.map((item) => (
          <details
            key={item.question}
            className="card-surface group p-5 transition"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-(--heading)">
              {item.question}

              {/* arrow */}
              <span className="text-(--accent) transition group-open:rotate-180">
                ↓
              </span>
            </summary>

            <p className="mt-3 text-sm leading-6 text-(--muted)">
              {item.answer}
            </p>
          </details>
        ))}

      </div>
    </section>
  );
}