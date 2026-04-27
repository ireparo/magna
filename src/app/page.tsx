import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Marquee from "@/components/effects/Marquee";
import { waLink } from "@/lib/contact";
import Link from "next/link";

const MARQUEE_SERVICES = [
  "Fisioteràpia",
  "Exercici Terapèutic",
  "Punció Seca",
  "Teràpia Manual",
  "Readaptació Esportiva",
  "Sòl Pelvià",
];

const HOME_SERVICES = [
  {
    title: "Fisioteràpia",
    description:
      "Tractament manual i personalitzat per resoldre lesions, dolors crònics i recuperar la mobilitat amb una visió de conjunt del teu cos.",
    image: "/images/services/fisioterapia.jpg",
    icon: null,
  },
  {
    title: "Exercici Terapèutic",
    description:
      "Programes d'exercici dissenyats a mida per fer-te més fort, prevenir recaigudes i tornar al que més t'agrada amb confiança.",
    image: "/images/services/exercici.jpg",
    icon: null,
  },
  {
    title: "Punció Seca",
    description:
      "Tècnica precisa per desactivar punts gallet i alleujar dolor muscular profund, integrada dins del teu pla de tractament.",
    image: "/images/services/puncio.jpg",
    icon: null,
  },
  {
    title: "Teràpia Manual",
    description:
      "Mobilitzacions, manipulacions i tècniques de teixit tou per restaurar el moviment articular sense forçar.",
    image: "/images/services/terapia-manual.jpg",
    icon: null,
  },
  {
    title: "Readaptació Esportiva",
    description:
      "Fas esport? Et tornem al teu nivell —o més enllà— amb una progressió ben pautada i sense saltar-nos passos.",
    image: "/images/services/readaptacio.jpg",
    icon: null,
  },
  {
    title: "Sòl Pelvià",
    description:
      "Valoració i tractament específic en pre-postpart, incontinència, dolor pelvià i salut íntima a totes les etapes.",
    image: "/images/services/sol-pelvia.jpg",
    icon: null,
  },
];

const CENTRE_PHOTOS = [
  { src: "/images/centre/sala-1.jpg", caption: "Sala de tractament" },
  { src: "/images/centre/sala-2.jpg", caption: "Espai exercici" },
  { src: "/images/centre/sala-3.jpg", caption: "Mirall de control postural" },
  { src: "/images/centre/sala-4.jpg", caption: "Recepció" },
];

const STEPS = [
  {
    n: "I",
    title: "Valoració inicial",
    text: "60 minuts per entendre què et passa, com va començar i què esperes recuperar. Anamnesi i exploració completa.",
  },
  {
    n: "II",
    title: "Tractament + plan",
    text: "Combinem teràpia manual, punció seca o tècniques específiques amb un pla d'exercici per fer a casa.",
  },
  {
    n: "III",
    title: "Tornar a moure's bé",
    text: "Seguim el teu progrés sessió a sessió i et donem l'alta quan ja no ens necessites. Aquest és l'objectiu.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Philosophy pull-quote — sello MAGNA + cita filosófica canónica */}
      <section className="py-20 md:py-28 px-6 border-t border-[color:var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/magna-seal.png"
              alt="Sello MAGNA Fisioteràpia i Exercici Terapèutic"
              width={96}
              height={96}
              className="mx-auto mb-8 md:mb-10"
              style={{ display: "block" }}
            />
            <p className="font-display text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.05] tracking-[-0.02em] text-[color:var(--foreground)]">
              El millor tractament és el que
              <br className="hidden md:block" /> t&apos;ensenya{" "}
              <span className="font-display-italic text-[color:var(--primary)]">a no necessitar-lo.</span>
            </p>
            <div className="mt-8 flex items-center gap-3 justify-center text-[color:var(--muted)]">
              <span className="rule-thin w-12" />
              <span className="smallcaps">Filosofia MAGNA</span>
              <span className="rule-thin w-12" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios destacados */}
      <section id="serveis" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 mb-14 items-end">
              <div>
                <SectionEyebrow no="01" label="Què fem" />
                <h2 className="font-display text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] leading-[1] tracking-[-0.02em] text-[color:var(--foreground)]">
                  Tractem el dolor.
                  <br />
                  <span className="font-display-italic text-[color:var(--primary)]">Construïm el moviment.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-md md:justify-self-end">
                Combinem teràpia manual amb exercici terapèutic perquè la millora no depengui només del que fem nosaltres a la consulta. La idea és que tornis a casa amb autonomia.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOME_SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-12 flex justify-center">
            <Link href="/serveis/" className="link-underline">
              Veure tots els serveis →
            </Link>
          </div>
        </div>
      </section>

      {/* Diferencial — exercici terapèutic */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--surface-soft)]/60 border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <SectionEyebrow no="02" label="El nostre diferencial" />
            <h2 className="font-display text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] leading-[1] tracking-[-0.02em] text-[color:var(--foreground)]">
              Exercici terapèutic
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">com a tractament.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed max-w-xl">
              A MAGNA no et farem dependre de la llitera. Pautem exercici específic per al teu cas, supervisat al centre, perquè el teu cos guanyi força i estabilitat de veritat.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Programes adaptats a la teva lesió i al teu dia a dia",
                "Sessions individuals o en grups molt reduïts",
                "Acompanyament fins que tornes al 100%",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[color:var(--foreground)]">
                  <span className="mt-2 w-3.5 h-px bg-[color:var(--primary)] shrink-0" />
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/exercici/" className="btn-primary">
                Conèixer el mètode
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border-strong)] p-8 md:p-10 relative overflow-hidden">
                <span aria-hidden className="absolute top-6 right-7 numeral text-[3.5rem]">02</span>
                <div className="absolute inset-0 opacity-50" aria-hidden style={{
                  backgroundImage: "radial-gradient(circle at 80% 20%, rgba(217,196,173,0.45), transparent 50%), radial-gradient(circle at 15% 85%, rgba(201,154,138,0.30), transparent 55%)",
                }} />
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    {["Força", "Mobilitat", "Control motor", "Resistència"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-[color:var(--surface-soft)] text-[0.72rem] font-medium text-[color:var(--primary-deep)] border border-[color:var(--border)]">{t}</span>
                    ))}
                  </div>
                  <div>
                    <p className="font-display text-[2rem] md:text-[2.6rem] text-[color:var(--primary-deep)] leading-[1.05] tracking-tight">
                      Del &ldquo;em fa mal&rdquo; <span className="font-display-italic text-[color:var(--primary)]">al &ldquo;ho controlo&rdquo;.</span>
                    </p>
                    <p className="mt-4 text-sm text-[color:var(--muted)]">
                      Et donem eines, no només sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <SectionEyebrow no="03" label="Com treballem" />
              <h2 className="font-display text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] leading-[1] tracking-[-0.02em] text-[color:var(--foreground)]">
                Tres passos. Un objectiu:
                <br />
                <span className="font-display-italic text-[color:var(--primary)]">que no ens necessitis.</span>
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
            {STEPS.map((s) => (
              <StaggerItem key={s.n} className="bg-[color:var(--background)]">
                <div className="p-8 md:p-10 h-full">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="numeral text-[2.4rem]">{s.n}</span>
                    <span className="smallcaps text-[color:var(--muted)]">Pas</span>
                  </div>
                  <h3 className="font-display text-[1.6rem] text-[color:var(--foreground)] leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-[color:var(--foreground-soft)] leading-relaxed">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* El centre — gallery of interior photos */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--surface-soft)]/40 border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-end mb-14">
              <div>
                <SectionEyebrow no="04" label="El centre" />
                <h2 className="font-display text-[2.6rem] sm:text-[3.4rem] md:text-[4rem] leading-[1] tracking-[-0.02em] text-[color:var(--foreground)]">
                  Un espai pensat
                  <br />
                  <span className="font-display-italic text-[color:var(--primary)]">per moure&apos;t.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-md md:justify-self-end">
                Sala de tractament privada, espai d&apos;exercici amb material seriós, mirall per al control postural. Tot pensat perquè la sessió flueixi: del manual al moviment.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-12 gap-3 md:gap-4">
            {CENTRE_PHOTOS.map((p, i) => (
              <StaggerItem
                key={p.src}
                className={
                  i === 0
                    ? "md:col-span-7 md:row-span-2"
                    : i === 1
                    ? "md:col-span-5"
                    : i === 2
                    ? "md:col-span-3"
                    : "md:col-span-2"
                }
              >
                <figure className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-[rgba(42,31,24,0.7)] to-transparent text-[color:var(--surface)] smallcaps text-[10px] md:text-[11px]">
                    {p.caption}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--surface-soft)]/50 border-y border-[color:var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span aria-hidden className="block font-display-italic text-[6rem] md:text-[8rem] leading-none text-[color:var(--primary-soft)]">&ldquo;</span>
            <p className="font-display text-[1.8rem] md:text-[2.4rem] leading-[1.2] tracking-tight text-[color:var(--foreground)] -mt-6">
              Vaig arribar amb una lumbàlgia que duia un any. Tres mesos després torno a córrer i no he tingut cap recaiguda. Aquí no et tracten i prou:
              <span className="font-display-italic"> t'ensenyen.</span>
            </p>
            <div className="mt-8 flex items-center gap-3 justify-center text-[color:var(--muted)]">
              <span className="rule-thin w-12" />
              <span className="smallcaps">Pacient (testimoni provisional)</span>
              <span className="rule-thin w-12" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial marquee — service names */}
      <section className="py-16 md:py-20 border-y border-[color:var(--border)] bg-[color:var(--surface-soft)]/30 overflow-hidden">
        <Marquee speed={42}>
          {MARQUEE_SERVICES.map((name, i) => (
            <span
              key={i}
              className="font-display text-[3.6rem] md:text-[5.5rem] lg:text-[6.4rem] leading-none tracking-[-0.025em] text-[color:var(--foreground)] flex items-center"
            >
              <span className={i % 2 === 1 ? "font-display-italic text-[color:var(--primary)]" : ""}>
                {name}
              </span>
              <span className="font-display-italic text-[color:var(--primary-soft)] mx-10 md:mx-14">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[color:var(--primary-deep)] p-10 md:p-20 text-[color:var(--surface)] relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 85% 15%, rgba(217,196,173,0.6), transparent 45%), radial-gradient(circle at 10% 90%, rgba(201,154,138,0.45), transparent 50%)",
            }}
          />
          <span aria-hidden className="absolute top-6 left-8 smallcaps text-[color:var(--primary-soft)]/70">Núm. 04</span>
          <span aria-hidden className="absolute top-6 right-8 numeral text-3xl !text-[color:var(--primary-soft)]/70">↘</span>

          <div className="relative max-w-2xl">
            <h2 className="font-display text-[2.8rem] sm:text-[3.6rem] md:text-[4.2rem] leading-[0.98] tracking-[-0.02em]">
              Tens algun dolor
              <br />
              <span className="font-display-italic text-[color:var(--primary-soft)]">que arrossegues?</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[color:var(--surface)]/80 max-w-lg leading-relaxed">
              Demana la primera visita i et fem una valoració completa. Surts amb un pla clar.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink("Hola! Voldria demanar la primera visita a MAGNA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Demanar per WhatsApp
              </a>
              <Link href="/contacte/" className="btn-secondary !bg-transparent !border-[color:var(--surface)]/30 !text-[color:var(--surface)] hover:!bg-[color:var(--surface)]/10">
                Trucar o escriure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
