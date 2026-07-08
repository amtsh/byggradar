"use client";

import { ListFilter, Radar, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LeadFeed from "./LeadFeed";
import SignupForm from "./SignupForm";
import { LanguageProvider, LanguageToggle, useLanguage } from "./LanguageProvider";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const STEP_ICONS = [Radar, ListFilter, Send] as const;

function Page() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-1 flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-line bg-paper/70 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#" className="font-display text-lg font-extrabold tracking-tight">
            Bygg<span className="text-signal">radar</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex" aria-label="Main">
            <a href="#how" className="transition-colors hover:text-ink">{t.nav.how}</a>
            <a href="#lead" className="transition-colors hover:text-ink">{t.nav.lead}</a>
            <a href="#kontakt" className="transition-colors hover:text-ink">{t.nav.pricing}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="#kontakt"
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-signal sm:inline-block"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto w-full max-w-4xl px-5 pt-16 pb-10 text-center sm:pt-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted card-shadow">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              {t.hero.badge}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mx-auto mt-6 max-w-3xl text-[2.6rem] font-extrabold leading-[1.04] sm:text-6xl">
              {t.hero.titleA} <span className="stamp">{t.hero.titleStamp}</span>{" "}
              {t.hero.titleB}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.hero.sub}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#kontakt"
                className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-signal/25 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#how"
                className="rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-ink/25"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold tracking-tight">{stat.value}</dd>
                  <dd className="mt-1 text-[13px] text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Product shot */}
        <div className="mx-auto w-full max-w-3xl px-5 pb-20">
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-panel/60 p-2 card-shadow sm:p-3">
              <LeadFeed />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-16 border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.how.title}</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{t.how.sub}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {t.how.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
              <Reveal key={step.name} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:card-shadow">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold tracking-tight">{step.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            );
            })}
          </div>
        </div>
      </section>

      {/* Anatomy of a lead */}
      <section id="lead" className="scroll-mt-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-2xl border border-line bg-panel p-7 card-shadow">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{t.anatomy.label}</p>
              <dl className="mt-5 space-y-3.5 text-sm">
                {t.anatomy.rows.map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-line pb-3.5 last:border-0 last:pb-0">
                    <dt className="w-32 shrink-0 pt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted">{k}</dt>
                    <dd className="text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.anatomy.title}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">{t.anatomy.body1}</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{t.anatomy.body2}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="scroll-mt-16 border-t border-line bg-radar">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              {t.cta.sub}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 text-left">
              <SignupForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
          <div>
            <p className="font-display text-sm font-bold tracking-tight text-white">
              Bygg<span className="text-signal">radar</span>
            </p>
            <p className="mt-1 text-xs text-white/50">{t.footer.tagline}</p>
          </div>
          <div className="text-right font-mono text-xs text-white/50">
            <p>hej@byggradar.se · Stockholm</p>
            <p className="mt-1">© 2026 Byggradar · {t.footer.legal}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Landing() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
