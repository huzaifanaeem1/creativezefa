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
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div className={`mb-12 flex max-w-2xl flex-col gap-4 ${alignment}`}>
      
      {/* eyebrow */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-(--accent)">
        {eyebrow}
      </p>

      {/* title */}
      <h2 className="font-display text-2xl font-semibold leading-tight text-(--heading) sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {/* description */}
      <p className="text-sm leading-6 text-(--muted) sm:text-base">
        {description}
      </p>

      {/* subtle accent line (🔥 looks premium) */}
      <div
        className={`h-[2px] w-12 rounded-full bg-(--accent) ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}