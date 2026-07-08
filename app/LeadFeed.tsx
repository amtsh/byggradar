"use client";

import { useEffect, useState } from "react";

type Lead = {
  area: string;
  type: string;
  remark: string;
  system: string;
  date: string;
};

const LEADS: Lead[] = [
  { area: "Kungsholmen, Stockholm", type: "BRF", remark: "Otillräckliga luftflöden — fläktbyte krävs", system: "FTX", date: "2026-06-12" },
  { area: "Hammarby Sjöstad", type: "Fastighets AB", remark: "Injustering och kanalrensning", system: "FT", date: "2026-06-10" },
  { area: "Solna centrum", type: "BRF", remark: "Aggregat uttjänt — utbyte rekommenderas", system: "FTX", date: "2026-06-09" },
  { area: "Sundbyberg", type: "Fastighets AB", remark: "Styr- och reglerfel, ojämna flöden", system: "F", date: "2026-06-05" },
  { area: "Vasastan, Stockholm", type: "BRF", remark: "Frånluftsdon igensatta, flöden under krav", system: "F", date: "2026-06-03" },
];

export default function LeadFeed() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= LEADS.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 1800);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="rounded-xl bg-radar p-4 sm:p-5 shadow-2xl ring-1 ring-white/10">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="live-dot h-2 w-2 rounded-full bg-signal" aria-hidden />
          <span className="font-mono text-xs tracking-wider text-white/70 uppercase">
            Bevakning: underkända OVK:er
          </span>
        </div>
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden className="opacity-60">
          <circle cx="11" cy="11" r="10" fill="none" stroke="white" strokeOpacity="0.3" />
          <circle cx="11" cy="11" r="6" fill="none" stroke="white" strokeOpacity="0.2" />
          <line x1="11" y1="11" x2="11" y2="1" stroke="#d8452e" strokeWidth="1.5" className="radar-sweep" />
        </svg>
      </div>

      <ul className="pt-3 space-y-2.5" aria-live="polite">
        {LEADS.slice(0, visible).map((lead, i) => (
          <li
            key={lead.area}
            className="feed-in rounded-lg bg-white/[0.06] px-3.5 py-3 ring-1 ring-white/10"
            style={{ animationDelay: i === visible - 1 ? "0s" : undefined }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  {lead.type} · {lead.area}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-white/75">{lead.remark}</p>
              </div>
              <span className="stamp text-[10px] shrink-0 bg-white">Underkänd</span>
            </div>
            <p className="mt-2 font-mono text-[11px] text-white/50">
              System: {lead.system} · Protokoll {lead.date} · Org.nr 5XXXXX-XXXX
            </p>
          </li>
        ))}
      </ul>

      <p className="pt-3 font-mono text-[11px] text-white/40">
        Exempeldata. Fullständiga uppgifter lämnas till abonnenter.
      </p>
    </div>
  );
}
