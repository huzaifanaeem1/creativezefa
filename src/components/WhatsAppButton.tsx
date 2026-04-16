export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15550000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:-translate-y-1"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-.9 1.1-.2.1-.3.2-.7.1-2.1-1-3.5-2.9-3.6-3.1-.2-.3 0-.4.1-.6l.5-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5s-.8-2-1-2.7c-.3-.6-.5-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-.9 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.4 5.2 4.6.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2.1-1.4.2-.7.2-1.2.2-1.3 0-.1-.2-.2-.4-.3z" />
        <path d="M12.1 2A9.9 9.9 0 003.5 16.8L2 22l5.3-1.4A10 10 0 1012.1 2zm0 18.1c-1.6 0-3.2-.5-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3a8 8 0 1114.5-4.6 8.1 8.1 0 01-8.1 8.6z" />
      </svg>
    </a>
  );
}
