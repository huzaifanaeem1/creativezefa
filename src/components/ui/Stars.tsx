type StarsProps = {
  rating: number;
};

export default function Stars({ rating }: StarsProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${index < rating ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.5 5.1 5.6.8-4.1 4 1 5.6L10 14.3 5 17l1-5.6-4.1-4 5.6-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
