"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionIntro } from "@/components/section";

const faqs = [
  {
    q: "What is a court reporter and what do they do?",
    a: "A court reporter creates a verbatim written record of spoken proceedings — depositions, trials, hearings, and meetings — using stenographic machines or voice reporting methods. That record becomes the official transcript used by attorneys, judges, and appellate courts.",
  },
  {
    q: "What is the difference between stenographic and voice court reporting?",
    a: "Stenographic reporters use a specialized shorthand machine to capture speech in real time, converting keystrokes into text at speeds exceeding 225 words per minute. Voice reporters repeat spoken testimony into a mask-equipped recorder, then transcribe the recording. Both methods produce a certified verbatim transcript.",
  },
  {
    q: "What types of proceedings does Forbes cover?",
    a: "Forbes covers depositions, remote depositions, real-time reporting, arbitrations, 50-H hearings, examinations under oath, workers compensation hearings, accident cases, disciplinary hearings, grand jury proceedings, jury trials, town and village courts, federal court, town board meetings, and zoning, planning, and public hearings.",
  },
  {
    q: "How do I schedule a court reporter?",
    a: "Contact Forbes directly by phone at 585-343-8612, by email at kelly@forbescourtreporting.com, or through the scheduling form on our Contact page. Provide the proceeding type, date, time, and location and Forbes will confirm availability.",
  },
  {
    q: "What counties does Forbes serve?",
    a: "Forbes covers Western New York and the Finger Lakes, including Erie, Monroe, Genesee, Orleans, Livingston, Wyoming, Ontario, Wayne, Yates, Steuben, Allegany, Cattaraugus, and Chautauqua counties.",
  },
  {
    q: "How are transcripts delivered?",
    a: "Forbes delivers transcripts in two formats: hard copy by mail or e-copy by email. Both are certified and meet New York State and federal court formatting standards. Turnaround time can be discussed when scheduling.",
  },
  {
    q: "What is real-time reporting?",
    a: "Real-time reporting delivers live stenographic output to a screen as testimony is given — word for word, instantly. Attorneys can read testimony as it happens, annotate it, and share the feed with remote co-counsel. It is commonly used in complex litigation and multi-party proceedings.",
  },
  {
    q: "Can Forbes cover remote depositions via video conference?",
    a: "Yes. Forbes provides certified stenographic coverage for depositions conducted via Zoom, Teams, or other video platforms. The verbatim record meets the same legal standards as in-person testimony, with full capture of exhibits, objections, and stipulations.",
  },
  {
    q: "How long has Forbes Court Reporting been in business?",
    a: "Forbes Court Reporting was founded by Edith Forbes in 1972 and has served Western New York courts, law firms, municipalities, and public proceedings for over 50 years. The business is now owned and operated by Kelly Forbes, the third generation of the family business.",
  },
  {
    q: "What is a 50-H hearing?",
    a: "A 50-H hearing is a statutory examination under New York General Municipal Law §50-h that allows a municipality to examine a claimant under oath before a Notice of Claim becomes a lawsuit. The certified transcript often drives settlement strategy and may be the only sworn testimony taken before the case resolves.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section className="bg-[var(--surface-soft)]">
      <SectionIntro
        eyebrow="Frequently Asked Questions"
        title="Common questions about court reporting."
        className="mx-auto text-center"
      />
      <div className="mt-8 grid gap-2">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded border border-[var(--line)] bg-white overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[var(--surface-soft)]"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-[var(--primary)]">{faq.q}</span>
              <ChevronDown
                size={16}
                className={`shrink-0 text-[var(--slate)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {open === i && (
              <p className="border-t border-[var(--line)] px-5 py-4 text-sm leading-7 text-[var(--slate)]">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
