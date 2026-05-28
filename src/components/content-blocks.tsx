import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  Landmark,
  MapPinned,
  PhoneCall,
  Scale,
  Users,
} from "lucide-react";
import { Reveal, RevealItem } from "@/components/reveal";
import { Section, SectionIntro } from "@/components/section";
import { contact, counties, courts, legacy, reporters, services } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="section-band border-b border-[var(--line)] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Western New York and the Finger Lakes</p>
          <h1 className="mt-5 text-balance font-display text-5xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-[var(--primary)] sm:text-6xl lg:text-7xl">
            Creating an honest record in and out of the courtroom.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slate)] sm:text-xl">
            Forbes Court Reporting Services has provided stenographic and voice court reporting across the region since 1972, supporting courts, law firms, municipalities, and public proceedings with accurate records and quality transcripts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary min-h-12" href="/contact">
              Schedule a Reporter
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="btn-secondary min-h-12" href="/careers-students">
              Reporter / Student Opportunities
            </Link>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="absolute -right-4 -top-4 h-32 w-32 border-r border-t border-[var(--gold)]" aria-hidden="true" />
          <div className="rounded-lg border border-[var(--line)] bg-white p-3 shadow-[0_22px_70px_rgba(19,29,52,0.08)]">
            <Image
              src="/brand/record-panel.svg"
              alt="A document-style court reporting record panel"
              width={900}
              height={700}
              priority
              className="h-auto w-full rounded"
            />
          </div>
          <div className="absolute -bottom-6 left-6 max-w-xs rounded border border-[var(--line)] bg-[var(--paper)] p-5 shadow-[0_18px_55px_rgba(19,29,52,0.1)]">
            <p className="eyebrow">Since 1972</p>
            <p className="mt-2 text-sm leading-6 text-[var(--slate)]">
              Built through long-standing relationships with New York State court systems and law firms across the state.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProofStrip() {
  const proof = [
    { label: "Since", value: "1972" },
    { label: "Coverage", value: "Western NY + Finger Lakes" },
    { label: "Methods", value: "Steno + Voice" },
    { label: "Delivery", value: "Hard copy + E-copy" },
  ];

  return (
    <Section className="bg-[var(--primary)] py-8 text-white sm:py-10">
      <Reveal staggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((item) => (
          <RevealItem key={item.label} className="border-l border-white/18 pl-5">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/56">{item.label}</p>
            <p className="mt-2 text-xl font-semibold">{item.value}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}

export function ServicesPreview() {
  const groups = [
    {
      icon: Scale,
      title: "Courtroom and litigation work",
      copy: "Jury trials, grand juries, federal court, town and village courts, and proceedings where the record has to be right.",
    },
    {
      icon: FileText,
      title: "Depositions and hearings",
      copy: "Depositions, arbitrations, disciplinary hearings, 50-H hearings, and examinations under oath.",
    },
    {
      icon: Landmark,
      title: "Municipal and public meetings",
      copy: "Town board meetings, zoning, planning, historical, and public hearings across the regional court network.",
    },
  ];

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <SectionIntro eyebrow="Services" title="Reporting coverage for the proceedings legal teams actually run.">
          <p>
            Forbes specializes in taking down the record using stenographic and voice reporting methods, then delivering transcripts in the format clients need.
          </p>
          <Link className="btn-secondary mt-6" href="/services">
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </SectionIntro>
        <Reveal staggerChildren className="grid gap-4">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <RevealItem key={group.title} className={`grid gap-4 rounded border border-[var(--line)] bg-white p-6 sm:grid-cols-[56px_1fr] ${index === 1 ? "lg:ml-14" : ""}`}>
                <div className="flex h-14 w-14 items-center justify-center rounded bg-[var(--serene-blue)] text-[var(--primary)]">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">{group.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--slate)]">{group.copy}</p>
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}

export function CoveragePreview() {
  return (
    <Section className="bg-[var(--surface-soft)]">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <SectionIntro eyebrow="Coverage" title="Regional reporting across Western New York and the Finger Lakes.">
            <p>
              From Batavia and Genesee County outward, Forbes covers county, town, village, court, hearing, and meeting work across a broad regional footprint.
            </p>
          </SectionIntro>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {counties.slice(0, 8).map((county) => (
              <div key={county} className="flex items-center gap-3 border-b border-[var(--line)] py-3 text-[var(--primary)]">
                <MapPinned size={18} aria-hidden="true" />
                <span className="font-semibold">{county} County</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="rounded-lg border border-[var(--line)] bg-white p-6">
          <p className="eyebrow">Town and Village Courts</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {courts.slice(0, 24).map((court) => (
              <span key={court} className="rounded-full bg-[var(--serene-blue)] px-3 py-1.5 text-sm font-semibold text-[var(--primary)]">
                {court}
              </span>
            ))}
          </div>
          <Link className="btn-primary mt-8" href="/coverage">
            See Coverage Area
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

export function LegacySection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro eyebrow="Family Legacy" title="More than five decades of court reporting continuity.">
          <p>
            Forbes Court Reporting is built on working knowledge of court systems, freelance reporting, operations, and the responsibility of preserving the record.
          </p>
          <Link className="btn-secondary mt-6" href="/about">
            Read About Forbes
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </SectionIntro>
        <Reveal staggerChildren className="grid gap-4">
          {legacy.map((person) => (
            <RevealItem key={person.name} className="border-l-2 border-[var(--gold)] bg-white p-5">
              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--gold)]">{person.role}</p>
              <p className="mt-3 leading-7 text-[var(--slate)]">{person.detail}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

export function CareersPreview() {
  return (
    <Section className="bg-[var(--deep-navy)] text-white">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow text-[var(--gold)]">Careers & Students</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold uppercase leading-tight tracking-[0.04em]">
            A practical path into court reporting work.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/careers-students" className="rounded border border-white/18 bg-white/7 p-6 transition hover:bg-white/12">
            <BriefcaseBusiness size={26} aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em]">Reporters</h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Forbes is always on the hunt for experienced reporters and new graduates.
            </p>
          </Link>
          <Link href="/careers-students" className="rounded border border-white/18 bg-white/7 p-6 transition hover:bg-white/12">
            <GraduationCap size={26} aria-hidden="true" />
            <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em]">Students</h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Stenography students can sit in with professional reporters and gain courtroom experience.
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function ContactBand() {
  return (
    <Section className="bg-[var(--paper)]">
      <div className="grid gap-8 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
            Need a reporter for an upcoming proceeding?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[var(--slate)]">
            Call or send the proceeding details and Forbes will help determine fit, coverage, and transcript needs.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a className="btn-primary min-h-12" href={contact.phoneHref}>
            <PhoneCall size={16} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <Link className="btn-secondary min-h-12" href="/contact">
            Send Details
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export function ServicesList() {
  return (
    <Reveal staggerChildren className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <RevealItem key={service} className="flex min-h-20 items-center gap-3 rounded border border-[var(--line)] bg-white p-4">
          <Award className="shrink-0 text-[var(--gold)]" size={18} aria-hidden="true" />
          <span className="font-semibold text-[var(--primary)]">{service}</span>
        </RevealItem>
      ))}
    </Reveal>
  );
}

export function ReporterRoster() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {reporters.map((reporter) => (
        <div key={reporter} className="flex items-center gap-3 border-b border-[var(--line)] py-3">
          <Users size={17} className="text-[var(--gold)]" aria-hidden="true" />
          <span className="font-semibold text-[var(--primary)]">{reporter}</span>
        </div>
      ))}
    </div>
  );
}
