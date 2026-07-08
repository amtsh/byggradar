"use client";

import { Check, ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState, type ElementType } from "react";
import { LanguageProvider, useLanguage } from "../LanguageProvider";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
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

interface ValueProp {
  title: string;
  description: string;
  icon: ElementType;
}

function PayPage() {
  const { t } = useLanguage();

  const handleCheckout = () => {
    window.location.href = "https://polar.sh/amtsh/subscriptions";
  };

  const valueProps: ValueProp[] = [
    {
      title: "Högintensiva B2B-leads",
      description: "Vi levererar enbart leads på underkända OVK-besiktningar för juridiska personer (AB & BRF).",
      icon: Zap
    },
    {
      title: "Beslutsfattare inkluderade",
      description: "Spara timmar på prospektering. Vi bifogar direktkontakt till styrelsemedlemmar eller förvaltare.",
      icon: Star
    },
    {
      title: "Offentlig data, paketerad",
      description: "Data direkt från kommunernas diarier, rensad och strukturerad för omedelbar bearbetning.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex flex-1 flex-col bg-paper min-h-screen">
      <header className="border-b border-line bg-paper/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="font-display text-lg font-extrabold tracking-tight">
            Bygg<span className="text-signal">radar</span>
          </a>
          <a href="/" className="text-sm font-medium text-muted hover:text-ink transition-colors">
            {t.nav.how}
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl text-ink">
              Lås upp full tillgång till <span className="text-signal">Stockholm</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              Få ett försprång mot konkurrenterna. Vi bevakar, kvalificerar och levererar ventilationsleads direkt till din inkorg varje vecka.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {valueProps.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 100}>
                <div className="flex flex-col items-center p-6 rounded-2xl bg-panel border border-line card-shadow h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white mb-5">
                    <prop.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{prop.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{prop.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400} className="mt-20">
            <div className="mx-auto max-w-lg rounded-3xl border-2 border-ink bg-panel p-8 sm:p-12 card-shadow text-left">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight">Premium Stockholm</h2>
                  <p className="text-sm text-muted mt-1">Full bevakning av Storstockholm</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold font-display">2 490 kr</span>
                  <span className="text-sm text-muted block">/månad</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Ca 100 nya leads per månad",
                  "Fastigheter, anmärkningar & systemtyp",
                  "Kontaktuppgifter till beslutsfattare",
                  "Leverans via e-post i realtid",
                  "Ingen bindningstid, avsluta när du vill"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pass/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-pass" strokeWidth={3} />
                    </div>
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-ink py-4 text-base font-bold text-white transition-all hover:bg-signal hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-ink/10"
              >
                Börja prenumerera
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <p className="mt-4 text-center text-[11px] text-muted uppercase tracking-wider font-medium">
                Betalning hanteras säkert via Polar.sh
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-ink py-12">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-display text-sm font-bold text-white mb-2">
            Bygg<span className="text-signal">radar</span>
          </p>
          <p className="text-xs text-white/40">© 2026 Byggradar · Stockholm</p>
        </div>
      </footer>
    </div>
  );
}

export default function Pay() {
  return (
    <LanguageProvider>
      <PayPage />
    </LanguageProvider>
  );
}
