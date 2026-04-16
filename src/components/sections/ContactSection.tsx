"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "").trim();
    const file = formData.get("design");

    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please provide a valid email address.");
      return;
    }

    if (!(file instanceof File) || file.size === 0) {
      setStatus("error");
      setMessage("Please upload a design file before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const payload: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(payload.message ?? "Quote request sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit now. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-muted border-y border-(--line)">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get your quote in minutes"
            description="Share your artwork and project details. You will receive a clear estimate and turnaround plan quickly."
          />
          <div className="card-surface p-5 text-sm text-(--muted)">
            <p>Email: hello@stitchcraftdigitizing.com</p>
            <p className="mt-2">WhatsApp: +1 (555) 000-0000</p>
            <p className="mt-2">Working hours: Mon - Sat, 8:00 AM to 11:00 PM (UTC)</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6" noValidate>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-(--heading)">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm text-(--heading) outline-none focus:border-(--accent)"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-(--heading)">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm text-(--heading) outline-none focus:border-(--accent)"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="design" className="mb-1 block text-sm font-medium text-(--heading)">
              Design Upload
            </label>
            <input
              id="design"
              name="design"
              type="file"
              required
              accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
              className="w-full rounded-xl border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm text-(--muted)"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-1 block text-sm font-medium text-(--heading)">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              className="w-full rounded-xl border border-(--line) bg-(--surface-2) px-4 py-2.5 text-sm text-(--heading) outline-none focus:border-(--accent)"
              placeholder="Tell me about size, garment type, and target format"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-xl bg-(--accent) px-4 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-strong) disabled:opacity-70"
          >
            {status === "loading" ? "Submitting..." : "Submit Quote Request"}
          </button>

          {message ? (
            <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-rose-600"}`} aria-live="polite">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
