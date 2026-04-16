import SectionHeading from "@/components/ui/SectionHeading";
import { pricing } from "@/data/site-data";

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent plans with fast turnaround"
        description="Choose a level based on complexity and urgency. Final quote is always confirmed before work begins."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className="card-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-(--accent)">{plan.name}</p>
            <p className="mt-3 font-display text-4xl font-semibold text-(--heading)">{plan.startingFrom}</p>
            <p className="mt-1 text-sm text-(--muted)">Starting from</p>
            <ul className="mt-5 space-y-2 text-sm text-(--muted)">
              <li>Turnaround: {plan.turnaround}</li>
              <li>Revisions: {plan.revisions}</li>
              <li>Best for: {plan.bestFor}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
