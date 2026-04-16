import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/site-data";

export default function FaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers to common client questions"
        description="Everything you need to know before submitting your design."
      />

      <div className="space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="card-surface group p-5">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold text-(--heading)">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-(--muted)">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
