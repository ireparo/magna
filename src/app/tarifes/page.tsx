import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { waLink } from "@/lib/contact";
import pricesData from "../../../content/prices.json";

export const metadata: Metadata = {
  title: "Tarifes",
  description: "Tarifes de fisioteràpia, exercici terapèutic i bons al centre MAGNA.",
};

const PLANS = pricesData.plans;

const FAQ: [string, string][] = [
  ["Cobriu mútues?", "Estem treballant per donar-nos d'alta amb les mútues principals. Avui per avui treballem privadament i et fem rebut perquè ho puguis presentar a la teva mútua de reembossament."],
  ["Què passa si he d'anul·lar?", "Avisant amb 24h d'antelació, sense problema. Després d'aquest marge cobrem la sessió, perquè aquell hora ja no la podem oferir a un altre pacient."],
  ["Puc venir només per exercici terapèutic?", "Sí, però sempre fem una primera valoració per assegurar-nos que el plantejament que farem té sentit per al teu cas."],
  ["Accepteu targeta?", "Sí — targeta, Bizum i efectiu. El que et vagi bé."],
];

export default function TarifesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow no="05" label="Tarifes" />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <h1 className="font-display text-[3rem] sm:text-[4.4rem] md:text-[6rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
              Preus clars,
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">sense lletra petita.</span>
            </h1>
            <div className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-sm md:justify-self-end">
              <p>Sessions d'una hora completes. Cap "suplement per teràpia manual" ni cobraments per separat.</p>
              <p className="mt-3 text-xs italic text-[color:var(--muted)]">
                Tarifes provisionals — pendents de confirmar amb el centre.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Banner visual */}
      <section className="max-w-7xl mx-auto mt-16">
        <Reveal>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team/jessica-portrait.jpg"
              alt="Jessica, fisioterapeuta a MAGNA, atenent un pacient"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[rgba(42,31,24,0.6)] via-[rgba(42,31,24,0.25)] to-transparent"
            />
            <div className="absolute inset-y-0 left-0 flex items-center p-6 md:p-10 text-[color:var(--surface)]">
              <div>
                <span className="smallcaps opacity-80">Sessions d&apos;una hora</span>
                <p className="font-display text-[1.6rem] md:text-[2.2rem] mt-2 leading-tight max-w-sm">
                  El teu temps,
                  <span className="font-display-italic"> sencer.</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto mt-20">
        <StaggerGroup className="grid md:grid-cols-3 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {PLANS.map((p, idx) => (
            <StaggerItem
              key={p.name}
              className={p.highlighted ? "bg-[color:var(--primary-deep)]" : "bg-[color:var(--background)]"}
            >
              <article className="p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <span className={`numeral text-[2.4rem] ${p.highlighted ? "!text-[color:var(--primary-soft)]" : ""}`}>
                    {`0${idx + 1}`}
                  </span>
                  {p.highlighted && (
                    <span className="smallcaps text-[color:var(--primary-soft)]">Més habitual</span>
                  )}
                </div>
                <h3 className={`font-display text-[1.7rem] leading-tight ${p.highlighted ? "text-[color:var(--surface)]" : "text-[color:var(--foreground)]"}`}>
                  {p.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`font-display text-[3.6rem] leading-none ${p.highlighted ? "text-[color:var(--surface)]" : "text-[color:var(--primary-deep)]"}`}>
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.highlighted ? "text-[color:var(--surface)]/65" : "text-[color:var(--muted)]"}`}>
                    {p.unit}
                  </span>
                </div>
                <p className={`mt-4 text-[14.5px] leading-relaxed ${p.highlighted ? "text-[color:var(--surface)]/75" : "text-[color:var(--foreground-soft)]"}`}>
                  {p.description}
                </p>
                <ul className="mt-6 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[14.5px] leading-relaxed ${p.highlighted ? "text-[color:var(--surface)]/85" : "text-[color:var(--foreground)]"}`}
                    >
                      <span className={`mt-2.5 w-3 h-px shrink-0 ${p.highlighted ? "bg-[color:var(--primary-soft)]" : "bg-[color:var(--primary)]"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola! Voldria informació de "${p.name}" a MAGNA.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 ${p.highlighted ? "btn-secondary !bg-[color:var(--surface)] !text-[color:var(--primary-deep)] !border-[color:var(--surface)]" : "btn-primary"} w-full`}
                >
                  {p.cta}
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-24">
        <Reveal>
          <SectionEyebrow no="i" label="Dubtes habituals" align="center" />
          <h2 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)] text-center">
            Preguntes <span className="font-display-italic text-[color:var(--primary)]">freqüents.</span>
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group">
              <summary className="flex items-baseline justify-between gap-6 cursor-pointer list-none py-6 px-1">
                <span className="font-display text-[1.2rem] md:text-[1.35rem] text-[color:var(--foreground)] leading-snug">
                  {q}
                </span>
                <span className="numeral text-2xl shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 px-1 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed max-w-2xl">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center">
        <Reveal>
          <p className="text-[color:var(--foreground-soft)]">Tens un dubte que no surt aquí?</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hola! Tinc un dubte sobre les tarifes de MAGNA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pregunta'ns per WhatsApp
            </a>
            <Link href="/contacte/" className="btn-secondary">
              Trucar o escriure
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
