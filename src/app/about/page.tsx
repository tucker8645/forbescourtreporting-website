import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout";
import { PageHero, Section } from "@/components/section";
import { legacy } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The family history and regional court reporting legacy behind Forbes Court Reporting Services, LLC.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero>
        <p className="eyebrow !text-white">About Forbes</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-5xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-white sm:text-6xl lg:text-7xl">
          Celebrating over 50 years of court reporting.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Edna, Edith, Kelly, and Macrae — four generations of dedication to the record.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-12">
          {legacy.map((person, index) => (
            <article
              key={person.name}
              className={`grid gap-8 rounded-lg border border-[var(--line)] bg-white p-6 sm:p-8 lg:grid-cols-[220px_1fr] ${
                index % 2 !== 0 ? "lg:ml-12" : "lg:mr-12"
              }`}
            >
              {/* Identity + circle photo */}
              <div className="flex flex-col items-start gap-5">
                <div>
                  <p className="eyebrow">{person.role}</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
                    {person.name}
                  </h2>
                  {person.credentials && (
                    <p className="mt-2 text-sm leading-6 text-[var(--slate)]">{person.credentials}</p>
                  )}
                </div>
                {person.photo && (
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--serene-blue)] shadow-md">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
              </div>

              {/* Bio paragraphs */}
              <div className="flex flex-col justify-center gap-4">
                {person.bio.map((para, i) => (
                  <p key={i} className="leading-7 text-[var(--slate)]">{para}</p>
                ))}
              </div>
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
              Forbes&apos; promise has never changed: quality transcripts and faithful preservation of the record — across more than five decades and three generations.
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
