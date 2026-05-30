import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck, Mail } from "lucide-react";
import { ContactBand } from "@/components/content-blocks";
import { PageShell } from "@/components/layout";
import { PageHero, Section, SectionIntro } from "@/components/section";
import { ServicesAccordion } from "@/components/services-accordion";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Court Reporting Services",
  description:
    "Court reporting services for depositions, hearings, jury trials, grand juries, municipal meetings, federal court, and transcript delivery.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero>
        <p className="eyebrow !text-white">Our Services</p>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-5xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-white sm:text-6xl lg:text-7xl">
          Stenographic and voice reporting for courts, firms, and public proceedings.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Forbes Court Reporting takes down the record in courtroom, hearing, deposition, municipal, and public-sector settings, then provides hard-copy or e-copy transcripts.
        </p>
      </PageHero>
      <Section>
        <ServicesAccordion />
      </Section>
      <Section className="bg-[var(--surface-soft)]">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Litigation and court record",
              copy: "Experienced stenographic reporters cover grand jury, jury trial, town and village court, and federal court work.",
            },
            {
              title: "Hearings and examinations",
              copy: "Forbes supports depositions, arbitrations, disciplinary hearings, 50-H hearings, and examinations under oath.",
            },
            {
              title: "Transcript delivery",
              copy: "Clients can request hard copy transcripts delivered by mail or e-copy transcripts delivered by email.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded border border-[var(--line)] bg-white p-6">
              <FileCheck className="text-[var(--gold)]" size={26} aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[var(--slate)]">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-primary" href="/contact">
            Schedule a Reporter
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="btn-secondary" href={contact.emailHref}>
            <Mail size={16} aria-hidden="true" />
            Email Forbes
          </a>
        </div>
      </Section>
      <ContactBand />
    </PageShell>
  );
}
