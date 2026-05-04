import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { waLink } from "@/lib/contact";
import teamData from "../../../content/team.json";

export const metadata: Metadata = {
  title: "L'equip",
  description:
    "Coneix l'equip de fisioterapeutes de MAGNA: formació, especialitats i filosofia de treball.",
};

const TEAM = teamData.members;

const VALUES = [
  {
    title: "Una hora és una hora",
    text: "Cap sessió compartida ni superposada. El temps que reserves és teu, sencer.",
    icon: "/icons/hora.svg",
  },
  {
    title: "Tu primer, la tècnica després",
    text: "Escoltem què t'ha passat, què esperes i com vius la lesió. La tècnica vindrà després.",
    icon: "/icons/escoltar.svg",
  },
  {
    title: "L'alta com a objectiu",
    text: "L'èxit és que no ens necessitis. Treballem perquè surtis amb autonomia.",
    icon: "/icons/alta.svg",
  },
];

export default function EquipPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow no="04" label="L'equip" />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <h1 className="font-display text-[3rem] sm:text-[4.4rem] md:text-[6rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
              Cares conegudes,
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">tracte proper.</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-sm md:justify-self-end">
              Som un equip petit i això ho és tot. La persona que et valora és la mateixa que t'acompanya fins a l'alta.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Hero image — banner */}
      <section className="max-w-7xl mx-auto mt-20">
        <Reveal>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-treatment.jpg"
              alt="Sessió de tractament al centre MAGNA"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[rgba(42,31,24,0.55)] via-transparent to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-[color:var(--surface)]">
              <span className="smallcaps opacity-80">L&apos;equip MAGNA</span>
              <p className="font-display text-[1.6rem] md:text-[2.2rem] mt-2 leading-tight max-w-xl">
                El teu fisioterapeuta de principi
                <span className="font-display-italic"> a fi.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Valores — manifesto strip */}
      <section className="max-w-7xl mx-auto mt-20">
        <StaggerGroup className="grid md:grid-cols-3 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {VALUES.map((v, idx) => (
            <StaggerItem key={v.title} className="bg-[color:var(--background)]">
              <div className="p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.icon} alt="" aria-hidden width={36} height={36} style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(11%) saturate(1057%) hue-rotate(341deg) brightness(93%) contrast(86%)" }} />
                  <div className="flex items-baseline gap-3">
                    <span className="numeral text-[2.4rem]">{`0${idx + 1}`}</span>
                    <span className="smallcaps text-[color:var(--muted)]">Valor</span>
                  </div>
                </div>
                <h3 className="font-display text-[1.5rem] text-[color:var(--foreground)] leading-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">
                  {v.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Equipo */}
      <section className="max-w-7xl mx-auto mt-24">
        <Reveal>
          <SectionEyebrow no="i" label="Qui et tractarà" />
          <h2 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)] max-w-3xl">
            Mateixa persona,
            <span className="font-display-italic text-[color:var(--primary)]"> de principi a fi.</span>
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted)] italic">
            Contingut provisional — falten fotos i bios reals.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid md:grid-cols-3 gap-5">
          {TEAM.map((p, i) => (
            <StaggerItem key={i}>
              <article className="card p-7 md:p-8 h-full">
                <div className="aspect-square rounded-xl mb-6 overflow-hidden bg-gradient-to-br from-[color:var(--primary-soft)] via-[color:var(--surface-soft)] to-[color:var(--accent)]/40 flex items-center justify-center">
                  {p.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display-italic text-[5rem] text-[color:var(--primary-deep)]/35">
                      {p.initials}
                    </span>
                  )}
                </div>
                <span className="smallcaps text-[color:var(--primary)]">{p.role}</span>
                <h3 className="font-display text-[1.5rem] mt-2 text-[color:var(--foreground)] leading-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">
                  {p.bio}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center">
        <Reveal>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)]">
            Vine a <span className="font-display-italic text-[color:var(--primary)]">conèixer-nos.</span>
          </h2>
          <p className="mt-4 text-[color:var(--foreground-soft)]">
            La primera visita és una hora per parlar i valorar. Sense compromís.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hola! Voldria conèixer l'equip de MAGNA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Demanar primera visita
            </a>
            <Link href="/contacte/" className="btn-secondary">
              Contacte
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
