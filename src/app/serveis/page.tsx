import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { waLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Serveis",
  description:
    "Fisioteràpia, exercici terapèutic, punció seca, teràpia manual, sòl pelvià i readaptació esportiva al centre MAGNA.",
};

const SERVICES = [
  {
    title: "Fisioteràpia",
    summary: "Tractament integral de lesions i dolors musculoesquelètics.",
    image: "/images/services/fisioterapia.jpg",
    bullets: [
      "Mal d'esquena, cervical i cefalees",
      "Tendinopaties (espatlla, colze, genoll, tendó d'Aquiles)",
      "Recuperació post-cirurgia i postraumàtica",
      "Dolor crònic amb mirada multidimensional",
    ],
  },
  {
    title: "Exercici Terapèutic",
    summary: "El nostre tret diferencial: tractem amb exercici, no només a la llitera.",
    image: "/images/services/exercici.jpg",
    bullets: [
      "Programa personalitzat segons la teva lesió i objectius",
      "Sessions individuals supervisades al centre",
      "Material seriós: politges, peses lliures, bandes, kettlebells",
      "Pla per a casa amb seguiment continu",
    ],
  },
  {
    title: "Punció Seca",
    summary: "Tècnica precisa per desactivar punts gallet musculars.",
    image: "/images/services/puncio.jpg",
    bullets: [
      "Alleujament ràpid de dolor profund",
      "Integrada dins del pla global de tractament",
      "Realitzada per fisioterapeutes amb formació específica",
    ],
  },
  {
    title: "Teràpia Manual",
    summary: "Mobilitzacions, manipulacions i tècniques de teixit tou.",
    image: "/images/services/terapia-manual.jpg",
    bullets: [
      "Restaura mobilitat articular sense forçar",
      "Tècniques miofascials i neurodinàmica",
      "Combinada sempre amb moviment actiu",
    ],
  },
  {
    title: "Readaptació Esportiva",
    summary: "Tornem a fer esport segurs i forts.",
    image: "/images/services/readaptacio.jpg",
    bullets: [
      "Progressions específiques per al teu esport",
      "Test de força i criteris objectius per pujar càrrega",
      "Coordinació amb entrenadors si cal",
    ],
  },
  {
    title: "Sòl Pelvià",
    summary: "Salut íntima a totes les etapes de la vida.",
    image: "/images/services/sol-pelvia.jpg",
    bullets: [
      "Pre-postpart i recuperació funcional",
      "Incontinència urinària i prolapses",
      "Dolor pelvià i disfuncions sexuals",
      "Valoració discreta i respectuosa",
    ],
  },
];

export default function ServeisPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow no="02" label="Serveis" />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <h1 className="font-display text-[3rem] sm:text-[4.4rem] md:text-[6rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
              Tot el que fem,
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">amb una hora per a tu.</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-sm md:justify-self-end">
              Cada sessió és individual, una hora completa, i sempre es combina amb un pla d'exercici per accelerar la teva recuperació. Sense suplements ni tarifes ocultes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto mt-20">
        <StaggerGroup className="grid md:grid-cols-2 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {SERVICES.map((s, idx) => (
            <StaggerItem key={s.title} className="bg-[color:var(--background)]">
              <article className="p-8 md:p-10 h-full">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-7 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="numeral text-[2.4rem]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rule-thin flex-1" />
                </div>
                <h2 className="font-display text-[1.9rem] md:text-[2.2rem] leading-[1.05] tracking-tight text-[color:var(--foreground)]">
                  {s.title}
                </h2>
                <p className="mt-3 text-[color:var(--primary)] font-display-italic text-lg leading-snug">
                  {s.summary}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed"
                    >
                      <span className="mt-2.5 w-3 h-px bg-[color:var(--primary)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center">
        <Reveal>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)]">
            No saps quin servei
            <br />
            <span className="font-display-italic text-[color:var(--primary)]">et toca?</span>
          </h2>
          <p className="mt-4 text-[color:var(--foreground-soft)]">
            Sense problema. Demana la primera visita i ja et dirigim nosaltres.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hola! Vull demanar primera visita a MAGNA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Demanar primera visita
            </a>
            <Link href="/contacte/" className="btn-secondary">
              Veure contacte
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
