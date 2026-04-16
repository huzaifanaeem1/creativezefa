type ServiceIconProps = {
  icon: "logo" | "cap" | "puff" | "jacket" | "custom";
};

const iconMap = {
  logo: (
    <path d="M12 2.8l8.5 4.7v9L12 21.2 3.5 16.5v-9L12 2.8zm0 3.2L6.5 8.8v6.4l5.5 3.1 5.5-3.1V8.8L12 6z" />
  ),
  cap: (
    <path d="M4 14.5c0-4.4 3.6-8 8-8 3.3 0 6.1 2 7.3 4.8l1.7 4.2H4.8A3.8 3.8 0 014 14.5zm15.2 3H7.2a2.7 2.7 0 102.5 3.5h7a2.7 2.7 0 002.5-3.5z" />
  ),
  puff: (
    <path d="M12 3.5l2.7 5.4 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.3 6-.9L12 3.5z" />
  ),
  jacket: (
    <path d="M8.2 3h7.6l3.7 3.8-2.3 4.2v10H6.8V11L4.5 6.8 8.2 3zm1.5 2L7.4 7.1l1.2 2.1v9.8h6.8V9.2l1.2-2.1L14.3 5h-4.6z" />
  ),
  custom: (
    <path d="M18.7 4.3a2.6 2.6 0 013.7 3.7L11.2 19.2 6 20.5l1.3-5.2L18.7 4.3zm-10 12.6l-.5 2.1 2.1-.5 10-10a.8.8 0 10-1.1-1.1l-10 10z" />
  ),
} as const;

export default function ServiceIcon({ icon }: ServiceIconProps) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--soft) text-(--accent)">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        {iconMap[icon]}
      </svg>
    </span>
  );
}
