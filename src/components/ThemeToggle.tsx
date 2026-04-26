"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--line) bg-(--surface) text-(--heading) transition hover:-translate-y-0.5"
      aria-label="Toggle theme"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.2 14.4A8.2 8.2 0 119.6 3.8a7 7 0 0010.6 10.6z" />
      </svg>
      <svg viewBox="0 0 24 24" className="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3 12h2.2M18.8 12H21M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
        <circle cx="12" cy="12" r="4.2" />
      </svg>
    </button>
  );
}
