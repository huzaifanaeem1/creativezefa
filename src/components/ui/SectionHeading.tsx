type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent)">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-(--heading) md:text-4xl">
        {title}
      </h2>
      <p className="text-base text-(--muted)">{description}</p>
    </div>
  );
}
