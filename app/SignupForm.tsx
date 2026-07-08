"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function SignupForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [regionIndex, setRegionIndex] = useState(0);
  const [sent, setSent] = useState(false);

  function submit() {
    if (!email.includes("@")) return;
    const subject = encodeURIComponent(t.cta.mailSubject);
    const body = encodeURIComponent(t.cta.mailBody(email, t.cta.regions[regionIndex]));
    window.location.href = `mailto:hej@byggradar.se?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl bg-pass/15 px-5 py-4 text-center text-sm font-medium text-white ring-1 ring-pass/40">
        {t.cta.success}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 rounded-2xl bg-white/[0.06] p-2.5 ring-1 ring-white/10 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder={t.cta.emailPlaceholder}
        aria-label={t.cta.emailAria}
        className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-sm text-ink outline-none ring-1 ring-transparent transition focus:ring-signal"
      />
      <select
        value={regionIndex}
        onChange={(e) => setRegionIndex(Number(e.target.value))}
        aria-label={t.cta.regionAria}
        className="rounded-xl bg-white px-3 py-3 text-sm text-ink outline-none ring-1 ring-transparent transition focus:ring-signal"
      >
        {t.cta.regions.map((r, i) => (
          <option key={r} value={i}>
            {r}
          </option>
        ))}
      </select>
      <button
        onClick={submit}
        className="rounded-xl bg-signal px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-signal/25 transition hover:brightness-110"
      >
        {t.cta.button}
      </button>
    </div>
  );
}
