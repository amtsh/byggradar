"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("Stockholm");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!email.includes("@")) return;
    const subject = encodeURIComponent("Intresseanmälan Byggradar — 3 leads utan kostnad");
    const body = encodeURIComponent(
      `Företagets e-post: ${email}\nOmråde: ${region}\n\nJa, skicka 3 aktuella OVK-leads så vi kan bedöma kvaliteten.`
    );
    window.location.href = `mailto:hej@byggradar.se?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-lg bg-pass/10 px-4 py-3 text-sm font-medium text-pass ring-1 ring-pass/30">
        Tack — vi hör av oss inom 24 timmar med era första leads.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="er@foretagsmail.se"
        aria-label="Företagets e-postadress"
        className="min-w-0 flex-1 rounded-lg border border-line bg-panel px-4 py-3 text-sm outline-none focus:border-signal"
      />
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Välj område"
        className="rounded-lg border border-line bg-panel px-3 py-3 text-sm outline-none focus:border-signal"
      >
        <option>Stockholm</option>
        <option>Göteborg</option>
        <option>Malmö</option>
        <option>Uppsala</option>
        <option>Annat område</option>
      </select>
      <button
        onClick={submit}
        className="rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Få 3 leads gratis
      </button>
    </div>
  );
}
