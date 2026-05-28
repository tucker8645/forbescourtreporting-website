import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout";
import { Section, SectionIntro } from "@/components/section";
import { legacy } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The family history and regional court reporting legacy behind Forbes Court Reporting Services, LLC.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="section-band border-b border-[var(--line)]">
        <SectionIntro eyebrow="About Forbes" title="Celebrating over 50 years of court reporting.">
          <p>
            Forbes Court Reporting grew from Edith Forbes&apos; freelance stenographic reporting work into a family business serving New York courts, law firms, and public-sector proceedings.
          </p>
        </SectionIntro>
      </Section>
      <Section>
        <div className="grid gap-5">
          {legacy.map((person, index) => (
            <article key={person.name} className={`grid gap-4 rounded border border-[var(--line)] bg-white p-6 md:grid-cols-[220px_1fr] ${index % 2 ? "lg:ml-16" : "lg:mr-16"}`}>
              <div>
                <p className="eyebrow">{person.role}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">{person.name}</h2>
              </div>
              <p className="text-lg leading-8 text-[var(--slate)]">{person.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-[var(--surface-soft)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Record Keeping</p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              Accuracy, relationships, and institutional memory.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--slate)]">
              Forbes&apos; current positioning should remain rooted in the same promise as the original site: quality transcripts and faithful preservation of the record.
            </p>
          </div>
          <Link className="btn-primary" href="/contact">
            Contact Forbes
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
