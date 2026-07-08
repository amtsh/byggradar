export type Lang = "sv" | "en";

export type LeadRow = {
  area: string;
  type: string;
  remark: string;
  system: string;
  date: string;
};

const sv = {
  nav: {
    how: "Så funkar det",
    lead: "Vad är en lead?",
    pricing: "Värde",
    cta: "Prova gratis",
  },
  hero: {
    badge: "För ventilationsföretag i Sverige",
    titleA: "Varje",
    titleStamp: "underkänd",
    titleB: "OVK är ett jobb som väntar på en offert.",
    sub: "Byggradar bevakar kommunernas diarier och fångar underkända ventilationskontroller — levererade som färdiga leads med fastighet, anmärkning och beslutsfattare. Innan konkurrenterna ens vet att jobbet finns.",
    ctaPrimary: "Få 3 leads gratis",
    ctaSecondary: "Så funkar det",
    stats: [
      { value: "~100", label: "nya leads/mån i Stockholm" },
      { value: "50–500 tkr", label: "typiskt ordervärde" },
      { value: "AB & BRF", label: "endast juridiska personer" },
    ],
  },
  feed: {
    header: "Bevakning · underkända OVK:er",
    stamp: "Underkänd",
    system: "System",
    report: "Protokoll",
    orgno: "Org.nr 5XXXXX-XXXX",
    disclaimer: "Exempeldata. Fullständiga uppgifter lämnas till abonnenter.",
    leads: [
      { area: "Kungsholmen, Stockholm", type: "BRF", remark: "Otillräckliga luftflöden — fläktbyte krävs", system: "FTX", date: "2026-06-12" },
      { area: "Hammarby Sjöstad", type: "Fastighets AB", remark: "Injustering och kanalrensning", system: "FT", date: "2026-06-10" },
      { area: "Solna centrum", type: "BRF", remark: "Aggregat uttjänt — utbyte rekommenderas", system: "FTX", date: "2026-06-09" },
      { area: "Sundbyberg", type: "Fastighets AB", remark: "Styr- och reglerfel, ojämna flöden", system: "F", date: "2026-06-05" },
      { area: "Vasastan, Stockholm", type: "BRF", remark: "Frånluftsdon igensatta, flöden under krav", system: "F", date: "2026-06-03" },
    ] as LeadRow[],
  },
  how: {
    title: "Från kommunalt arkiv till er inkorg",
    sub: "Offentlig data finns — men den är utspridd, ostrukturerad och tidskrävande att hitta. Vi gör den säljbar.",
    steps: [
      {
        name: "Bevakning",
        body: "Vi läser löpande byggnadsnämndernas diarier och begär ut OVK-protokoll med stöd av offentlighetsprincipen.",
      },
      {
        name: "Kvalificering",
        body: "Varje protokoll tolkas: anmärkningstyp, systemtyp, fastighet och ägare. Vi filtrerar fram aktiebolag och bostadsrättsföreningar — och berikar med kontaktuppgifter till beslutsfattare.",
      },
      {
        name: "Leverans",
        body: "Leads som matchar ert område och er inriktning skickas direkt till er. Fastighetsägaren är skyldig att åtgärda. Ni ringer först.",
      },
    ],
  },
  anatomy: {
    label: "Så ser en lead ut",
    title: "Ett vunnet uppdrag betalar abonnemanget i åratal",
    body1: "En underkänd OVK innebär ett lagkrav på åtgärd. Typiska uppdrag — injustering, kanalrensning, fläkt- eller aggregatbyte — ligger mellan 50 000 och 500 000 kr.",
    body2: "Ni betalar en fast månadsavgift för ert område. Inga provisioner. All data kommer från allmänna handlingar och avser enbart juridiska personer.",
    rows: [
      ["Fastighet", "Fastighetsbeteckning + adress"],
      ["Ägare", "Bolagsnamn och organisationsnummer"],
      ["Anmärkning", "Vad som underkändes, ordagrant ur protokollet"],
      ["Systemtyp", "FTX, FT, F eller S — avgör jobbets storlek"],
      ["Beslutsfattare", "Namn och kontaktväg till styrelse/förvaltare"],
      ["Datum", "Besiktningsdatum och åtgärdsfrist"],
    ] as [string, string][],
  },
  cta: {
    title: "Bedöm kvaliteten själv",
    sub: "Lämna er e-post så skickar vi 3 aktuella leads från ert område. Utan kostnad, utan bindning.",
    emailPlaceholder: "er@foretagsmail.se",
    emailAria: "Företagets e-postadress",
    regionAria: "Välj område",
    regions: ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Annat område"],
    button: "Få 3 leads gratis",
    success: "Tack — vi hör av oss inom 24 timmar med era första leads.",
    mailSubject: "Intresseanmälan Byggradar — 3 leads utan kostnad",
    mailBody: (email: string, region: string) =>
      `Företagets e-post: ${email}\nOmråde: ${region}\n\nJa, skicka 3 aktuella OVK-leads så vi kan bedöma kvaliteten.`,
  },
  footer: {
    tagline: "Underkända OVK:er som leads, direkt till er inkorg.",
    legal: "All data kommer från allmänna handlingar.",
  },
};

const en: typeof sv = {
  nav: {
    how: "How it works",
    lead: "What's a lead?",
    pricing: "Value",
    cta: "Try for free",
  },
  hero: {
    badge: "For ventilation companies in Sweden",
    titleA: "Every",
    titleStamp: "failed",
    titleB: "OVK inspection is a job waiting for a quote.",
    sub: "Byggradar monitors municipal registries and captures failed ventilation inspections — delivered as ready-made leads with property, defect and decision-maker. Before your competitors even know the job exists.",
    ctaPrimary: "Get 3 free leads",
    ctaSecondary: "How it works",
    stats: [
      { value: "~100", label: "new leads/month in Stockholm" },
      { value: "SEK 50–500k", label: "typical order value" },
      { value: "AB & BRF", label: "corporate owners only" },
    ],
  },
  feed: {
    header: "Monitoring · failed OVK inspections",
    stamp: "Failed",
    system: "System",
    report: "Report",
    orgno: "Reg. no. 5XXXXX-XXXX",
    disclaimer: "Sample data. Full details are provided to subscribers.",
    leads: [
      { area: "Kungsholmen, Stockholm", type: "Housing co-op", remark: "Insufficient airflow — fan replacement required", system: "FTX", date: "2026-06-12" },
      { area: "Hammarby Sjöstad", type: "Property co.", remark: "Rebalancing and duct cleaning", system: "FT", date: "2026-06-10" },
      { area: "Solna centrum", type: "Housing co-op", remark: "Unit worn out — replacement recommended", system: "FTX", date: "2026-06-09" },
      { area: "Sundbyberg", type: "Property co.", remark: "Control system faults, uneven airflow", system: "F", date: "2026-06-05" },
      { area: "Vasastan, Stockholm", type: "Housing co-op", remark: "Exhaust vents clogged, airflow below requirements", system: "F", date: "2026-06-03" },
    ] as LeadRow[],
  },
  how: {
    title: "From municipal archive to your inbox",
    sub: "The public data exists — but it's scattered, unstructured and time-consuming to find. We make it sellable.",
    steps: [
      {
        name: "Monitoring",
        body: "We continuously read building committee registries and request OVK inspection reports under Sweden's freedom of information principle.",
      },
      {
        name: "Qualification",
        body: "Every report is parsed: defect type, system type, property and owner. We filter for limited companies and housing co-ops — and enrich with contact details for decision-makers.",
      },
      {
        name: "Delivery",
        body: "Leads matching your area and specialty are sent straight to you. The property owner is legally required to act. You call first.",
      },
    ],
  },
  anatomy: {
    label: "What a lead looks like",
    title: "One won job pays for the subscription for years",
    body1: "A failed OVK means a legal obligation to remediate. Typical jobs — rebalancing, duct cleaning, fan or unit replacement — range from SEK 50,000 to 500,000.",
    body2: "You pay a flat monthly fee for your territory. No commissions. All data comes from public records and covers corporate owners only.",
    rows: [
      ["Property", "Property designation + address"],
      ["Owner", "Company name and registration number"],
      ["Defect", "What failed, verbatim from the report"],
      ["System type", "FTX, FT, F or S — determines job size"],
      ["Decision-maker", "Name and contact for board/property manager"],
      ["Dates", "Inspection date and remediation deadline"],
    ] as [string, string][],
  },
  cta: {
    title: "Judge the quality yourself",
    sub: "Leave your email and we'll send 3 current leads from your area. No cost, no commitment.",
    emailPlaceholder: "you@yourcompany.se",
    emailAria: "Company email address",
    regionAria: "Choose area",
    regions: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Other area"],
    button: "Get 3 free leads",
    success: "Thanks — we'll be in touch within 24 hours with your first leads.",
    mailSubject: "Byggradar inquiry — 3 free leads",
    mailBody: (email: string, region: string) =>
      `Company email: ${email}\nArea: ${region}\n\nYes, send 3 current OVK leads so we can judge the quality.`,
  },
  footer: {
    tagline: "Failed OVK inspections as leads, straight to your inbox.",
    legal: "All data comes from public records.",
  },
};

export type Dict = typeof sv;

export const dictionaries: Record<Lang, Dict> = { sv, en };
