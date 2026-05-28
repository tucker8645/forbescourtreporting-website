import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { PageShell } from "@/components/layout";
import { Section, SectionIntro } from "@/components/section";
import { contact, counties, courts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Coverage Area",
  description:
    "Court reporting coverage across Western New York, the Finger Lakes, and regional county, town, and village courts.",
};

export default function CoveragePage() {
  return (
    <PageShell>
      <Section className="section-band border-b border-[var(--line)]">
        <SectionIntro eyebrow="Coverage Area" title="A regional court reporting footprint built from Batavia outward.">
          <p>
            Forbes covers Western New York and the Finger Lakes, with county, town, village, court, meeting, and public hearing work across the region.
          </p>
        </SectionIntro>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Counties</p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              County coverage
            </h2>
            <p className="mt-4 leading-7 text-[var(--slate)]">
              Ask about exact availability for your proceeding date, location, and transcript needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {counties.map((county) => (
              <div key={county} className="flex items-center gap-3 rounded border border-[var(--line)] bg-white p-4">
                <MapPinned size={18} className="text-[var(--gold)]" aria-hidden="true" />
                <span className="font-semibold text-[var(--primary)]">{county} County</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-[var(--surface-soft)]">
        <SectionIntro eyebrow="Town and Village Courts" title="Examples of courts and municipalities Forbes has listed for service coverage." />
        <div className="mt-8 flex flex-wrap gap-2">
          {courts.map((court) => (
            <span key={court} className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm font-semibold text-[var(--primary)]">
              {court}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link className="btn-primary" href="/contact">
            Ask About a Location
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="btn-secondary" href={contact.phoneHref}>
            Call {contact.phoneDisplay}
          </a>
        </div>
      </Section>
    </PageShell>
  );
}
