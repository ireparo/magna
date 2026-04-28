import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { waLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Exercici Terapèutic",
  description:
    "L'exercici terapèutic és el nostre diferencial: programes individualitzats, supervisats i progressius perquè el teu cos guanyi força i no torni a fallar.",
};

const FOR_WHO = [
  "Lesions cròniques que no acaben de marxar",
  "Post-operatoris (espatlla, genoll, maluc, columna)",
  "Esportistes que tornen a la competició",
  "Persones amb dolor lumbar o cervical recurrent",
  "Gent gran que vol mantenir-se forta i autònoma",
  "Pre i postpart amb objectius de recuperació funcional",
];

const PRINCIPLES = [
  {
    title: "Individualització",
    text: "Cada cos és diferent. Cap programa de catàleg: la teva lesió, el teu objectiu, la teva pauta.",
  },
  {
    title: "Progressió",
    text: "Pugem càrrega de manera ordenada amb criteris objectius. Ni més del que toca, ni menys.",
  },
  {
    title: "Especificitat",
    text: "Si jugues a pàdel, entrenarem el moviment del pàdel. Si col·lectes la teva filla en braços, entrenarem aquell gest.",
  },
  {
    title: "Educació",
    text: "T'expliquem què passa al teu cos. Sortir amb les eines per gestionar-te tu sol és part del tractament.",
  },
];

const TIMELINE: [string, string][] = [
  ["Setm. 1–2", "Valoració completa + pla inicial. Comencem suau, mirant què tolera el teu cos."],
  ["Setm. 3–6", "Pugem càrrega progressivament. Ja entrenem amb intenció."],
  ["Setm. 7+", "Específic per als teus objectius (esport, feina, dia a dia). Reduïm freqüència."],
  ["Alta", "Surts amb una rutina autònoma que pots seguir tu sol."],
];

export default function ExerciciPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow no="03" label="El nostre diferencial" />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <h1 className="font-display text-[3rem] sm:text-[4.4rem] md:text-[6rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
              Exercici terapèutic.
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">El tractament que dura.</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-sm md:justify-self-end">
              La teràpia manual alleuja. L'exercici terapèutic és el que fa que la millora es quedi. Per això a MAGNA totes les sessions inclouen moviment actiu.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Editorial photo strip — bridge between hero and detail content */}
      <section className="max-w-7xl mx-auto mt-20">
        <Reveal>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/exercici-hero.jpg"
              alt="Jessica, fisioterapeuta a MAGNA, asseguda a la sala de tractament"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[rgba(42,31,24,0.55)] via-transparent to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-[color:var(--surface)]">
              <span className="smallcaps opacity-80">Jessica · MAGNA</span>
              <p className="font-display text-[1.6rem] md:text-[2.2rem] mt-2 leading-tight max-w-xl">
                Et tractem i t&apos;ensenyem
                <span className="font-display-italic"> a moure&apos;t millor.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Qué es / Qué no es */}
      <section className="max-w-7xl mx-auto mt-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <h2 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)]">
            Què és, <span className="font-display-italic text-[color:var(--primary)]">i què no és.</span>
          </h2>
          <p className="mt-6 text-[color:var(--foreground-soft)] leading-relaxed">
            <strong className="text-[color:var(--foreground)] font-semibold">No</strong> és anar al gimnàs sense rumb. <strong className="text-[color:var(--foreground)] font-semibold">No</strong> és fitness genèric. <strong className="text-[color:var(--foreground)] font-semibold">No</strong> és pilates de classe en grup gran.
          </p>
          <p className="mt-3 text-[color:var(--foreground-soft)] leading-relaxed">
            <strong className="text-[color:var(--foreground)] font-semibold">Sí</strong> és exercici precís, dosificat i supervisat per un fisioterapeuta. Pensat per a la teva lesió, la teva fase i el teu cos.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative bg-[color:var(--surface)] border border-[color:var(--border-strong)] rounded-2xl p-8 md:p-10 overflow-hidden">
            <span aria-hidden className="absolute top-5 right-7 numeral text-[3.4rem]">03</span>
            <h3 className="font-display text-[1.4rem] text-[color:var(--foreground)] mb-6">El programa típic</h3>
            <ol className="space-y-4">
              {TIMELINE.map(([w, t]) => (
                <li key={w} className="grid grid-cols-[110px_1fr] gap-5 items-baseline">
                  <span className="font-display-italic text-[color:var(--primary)]">{w}</span>
                  <span className="text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* Para quién */}
      <section className="max-w-7xl mx-auto mt-24">
        <Reveal>
          <SectionEyebrow no="i" label="Per a qui" />
          <h2 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)] max-w-3xl">
            Si tens cos i vols que rendeixi millor,
            <span className="font-display-italic text-[color:var(--primary)]"> és per a tu.</span>
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {FOR_WHO.map((t) => (
            <StaggerItem key={t} className="bg-[color:var(--background)]">
              <div className="p-6 md:p-7 h-full flex items-start gap-3">
                <span className="font-display-italic text-[color:var(--primary)] text-lg shrink-0 leading-none mt-1">·</span>
                <span className="text-[14.5px] text-[color:var(--foreground)] leading-relaxed">{t}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Principios */}
      <section className="max-w-7xl mx-auto mt-24">
        <Reveal>
          <SectionEyebrow no="ii" label="Principis" />
          <h2 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)] max-w-3xl">
            Quatre <span className="font-display-italic text-[color:var(--primary)]">innegociables.</span>
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid md:grid-cols-2 gap-5">
          {PRINCIPLES.map((p, idx) => (
            <StaggerItem key={p.title}>
              <div className="card p-7 md:p-8 h-full">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-[1.4rem] text-[color:var(--foreground)]">{p.title}</h3>
                  <span className="numeral text-2xl">{`0${idx + 1}`}</span>
                </div>
                <p className="text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center">
        <Reveal>
          <h2 className="font-display text-[2.4rem] md:text-[3rem] leading-[1.05] tracking-tight text-[color:var(--foreground)]">
            Comença pel principi:
            <br />
            <span className="font-display-italic text-[color:var(--primary)]">una valoració.</span>
          </h2>
          <p className="mt-4 text-[color:var(--foreground-soft)]">
            Et fem una avaluació completa i et diem si l'exercici terapèutic et pot ajudar. Si no, t'ho diem clar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hola! Voldria valoració per a exercici terapèutic.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Demanar valoració
            </a>
            <Link href="/tarifes/" className="btn-secondary">
              Veure tarifes
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
