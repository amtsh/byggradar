import LeadFeed from "./LeadFeed";
import SignupForm from "./SignupForm";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Nav */}
      <header className="border-b border-line bg-panel/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <p className="font-display text-lg font-800 tracking-tight" style={{ fontFamily: "var(--font-archivo)", fontWeight: 800 }}>
            Bygg<span className="text-signal">radar</span>
          </p>
          <a
            href="#kontakt"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-radar"
          >
            Prova gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            För ventilationsföretag
          </p>
          <h1
            className="mt-4 text-4xl leading-[1.05] tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-archivo)", fontWeight: 800 }}
          >
            Varje <span className="stamp">underkänd</span> OVK är ett jobb som väntar på en offert.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Byggradar bevakar kommunernas diarier och fångar underkända
            ventilationskontroller — och levererar dem som färdiga leads med
            fastighet, anmärkning och beslutsfattare. Innan konkurrenterna ens vet
            att jobbet finns.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 font-mono text-[13px] text-muted">
            <span><strong className="text-ink">~100</strong> nya leads/mån i Stockholm</span>
            <span><strong className="text-ink">50–500 tkr</strong> typiskt ordervärde</span>
            <span><strong className="text-ink">Endast</strong> AB &amp; BRF</span>
          </div>
        </div>
        <LeadFeed />
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-archivo)", fontWeight: 700 }}>
            Från kommunalt arkiv till er inkorg
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Bevakning</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Vi läser löpande byggnadsnämndernas diarier och begär ut
                OVK-protokoll med stöd av offentlighetsprincipen. Offentlig data —
                men utspridd, ostrukturerad och tidskrävande att hitta.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Kvalificering</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Varje protokoll tolkas: anmärkningstyp, systemtyp, fastighet och
                ägare. Vi filtrerar fram juridiska personer — aktiebolag och
                bostadsrättsföreningar — och berikar med kontaktuppgifter till
                beslutsfattare.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Leverans</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Leads som matchar ert område och er inriktning — injustering,
                kanalrensning eller hela aggregatbyten — skickas direkt till er.
                Fastighetsägaren är skyldig att åtgärda. Ni ringer först.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy of a lead */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 rounded-xl border border-line bg-panel p-6 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Så ser en lead ut</p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Fastighet", "Fastighetsbeteckning + adress"],
                ["Ägare", "Bolagsnamn och organisationsnummer"],
                ["Anmärkning", "Vad som underkändes, ordagrant ur protokollet"],
                ["Systemtyp", "FTX, FT, F eller S — avgör jobbets storlek"],
                ["Beslutsfattare", "Namn och kontaktväg till styrelse/förvaltare"],
                ["Datum", "Besiktningsdatum och åtgärdsfrist"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="w-32 shrink-0 font-mono text-xs uppercase tracking-wider text-muted pt-0.5">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-archivo)", fontWeight: 700 }}>
              Ett vunnet uppdrag betalar abonnemanget i åratal
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              En underkänd OVK innebär ett lagkrav på åtgärd. Typiska uppdrag —
              injustering, kanalrensning, fläkt- eller aggregatbyte — ligger mellan
              50 000 och 500 000 kr. Ni betalar en fast månadsavgift för ert
              område. Inga provisioner.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              All data kommer från allmänna handlingar och avser enbart juridiska
              personer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="border-t border-line bg-radar">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="text-3xl tracking-tight text-white" style={{ fontFamily: "var(--font-archivo)", fontWeight: 800 }}>
            Bedöm kvaliteten själv
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/70">
            Lämna er e-post så skickar vi 3 aktuella leads från ert område. Utan
            kostnad, utan bindning.
          </p>
          <div className="mt-7 text-left">
            <SignupForm />
          </div>
        </div>
      </section>

      <footer className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 font-mono text-xs text-white/50">
          <span>© 2026 Byggradar</span>
          <span>hej@byggradar.se · Stockholm</span>
        </div>
      </footer>
    </div>
  );
}
