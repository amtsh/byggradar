"use client";

import { Radar } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function LeadFeed() {
  const { t } = useLanguage();
  const leads = t.feed.leads;
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= leads.length) return;
    const timer = setTimeout(() => setVisible((v) => v + 1), 1800);
    return () => clearTimeout(timer);
  }, [visible, leads.length]);

  return (
    <div className="rounded-2xl bg-radar p-4 shadow-2xl ring-1 ring-white/10 sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="live-dot h-2 w-2 rounded-full bg-signal" aria-hidden />
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            {t.feed.header}
          </span>
        </div>
        <Radar className="h-[22px] w-[22px] text-white opacity-60" aria-hidden strokeWidth={1.5} />
      </div>

      <ul className="space-y-2.5 pt-3" aria-live="polite">
        {leads.slice(0, visible).map((lead, i) => (
          <li
            key={lead.area}
            className="feed-in rounded-xl bg-white/[0.06] px-3.5 py-3 ring-1 ring-white/10"
            style={{ animationDelay: i === visible - 1 ? "0s" : undefined }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  {lead.type} · {lead.area}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-white/75">{lead.remark}</p>
              </div>
              <span className="stamp shrink-0 bg-white text-[10px]">{t.feed.stamp}</span>
            </div>
            <p className="mt-2 font-mono text-[11px] text-white/50">
              {t.feed.system}: {lead.system} · {t.feed.report} {lead.date} · {t.feed.orgno}
            </p>
          </li>
        ))}
      </ul>

      <p className="pt-3 font-mono text-[11px] text-white/40">{t.feed.disclaimer}</p>
    </div>
  );
}
