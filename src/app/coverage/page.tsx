import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountyCard, CoverageOverviewMap } from "@/components/county-map";
import { CourtExplorer } from "@/components/court-explorer";
import { PageShell } from "@/components/layout";
import { PageHero, Section, SectionIntro } from "@/components/section";
import { contact, counties, courts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Coverage Area",
  description:
    "Court reporting coverage across Western New York, the Finger Lakes, and regional county, town, and village courts.",
};

export default function CoveragePage() {
  return (
    <PageShell>
      <PageHero>
        <p className="eyebrow !text-white">Coverage Area</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-white sm:text-5xl lg:text-7xl">
          A regional court reporting footprint built from Batavia outward.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Forbes covers Western New York and the Finger Lakes, with county, town, village, court, meeting, and public hearing work across the region.
        </p>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Counties first on mobile, map second */}
          <div className="order-2 lg:order-1 flex flex-col gap-4">
            <div>
              <p className="eyebrow">Coverage Map</p>
              <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
                Service area
              </h2>
              <p className="mt-2 leading-7 text-[var(--slate)]">
                All 13 counties Forbes covers across Western New York and the Finger Lakes.
              </p>
            </div>
            <CoverageOverviewMap />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Counties</p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              County coverage
            </h2>
            <p className="mt-2 leading-7 text-[var(--slate)]">
              Click a county to view its boundary on a map and ask about exact availability for your proceeding date, location, and transcript needs.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {counties.map((county) => (
                <CountyCard key={county} county={county} />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[var(--surface-soft)]">
        <SectionIntro eyebrow="Town and Village Courts" title="Courts and municipalities Forbes has listed for service coverage.">
          <p>Click a court to view its location on the map.</p>
        </SectionIntro>
        <CourtExplorer courts={courts} />
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
