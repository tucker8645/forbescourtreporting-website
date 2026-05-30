import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { ReporterRoster } from "@/components/content-blocks";
import { PageShell } from "@/components/layout";
import { PageHero, Section, SectionIntro } from "@/components/section";

export const metadata: Metadata = {
  title: "Careers & Students",
  description:
    "Reporter opportunities and stenography student sitting-in programs with Forbes Court Reporting.",
};

export default function CareersStudentsPage() {
  return (
    <PageShell>
      <PageHero>
        <p className="eyebrow !text-white">Careers &amp; Students</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-white sm:text-6xl lg:text-7xl">
          Build experience where the record matters.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Forbes hires experienced reporters and new graduates, and offers sitting-in opportunities for stenography students ready for real courtroom exposure.
        </p>
      </PageHero>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded border border-[var(--line)] bg-white p-6 sm:p-8">
            <BriefcaseBusiness className="text-[var(--gold)]" size={30} aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              Reporter opportunities
            </h2>
            <p className="mt-4 leading-7 text-[var(--slate)]">
              Forbes Court Reporting is always on the hunt for new reporters. Whether you are experienced or a new graduate, the team looks for the best fit for your skills.
            </p>
          </article>
          <article className="rounded border border-[var(--line)] bg-white p-6 sm:p-8">
            <GraduationCap className="text-[var(--gold)]" size={30} aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              Student sitting-in program
            </h2>
            <p className="mt-4 leading-7 text-[var(--slate)]">
              Stenography students at 200wpm can sit in with a professional reporter, build confidence in courtrooms and depositions, and gain practical experience before graduation or certification.
            </p>
          </article>
        </div>
      </Section>
      <Section className="bg-[var(--surface-soft)]">
        <SectionIntro eyebrow="Reporter Roster" title="The current roster carried forward from the Forbes site." />
        <div className="mt-8">
          <ReporterRoster />
        </div>
        <Link className="btn-primary mt-10" href="/contact">
          Contact About Opportunities
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Section>
    </PageShell>
  );
}
