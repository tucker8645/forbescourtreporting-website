"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

const services = [
  {
    title: "Transcriptions",
    description:
      "The certified verbatim transcript produced from stenographic or voice reporting of any proceeding. Forbes delivers transcripts in hard-copy format by mail or as e-copy by email. Transcripts meet New York State and federal court formatting standards and serve as the official record for motions, appeals, hearings, and all downstream legal proceedings requiring an accurate account of what was said.",
  },
  {
    title: "Real-time reporting",
    description:
      "Live stenographic output delivered to a screen as testimony is given — word for word, in real time. Attorneys can read testimony as it happens, annotate the transcript instantly, and share the feed with remote co-counsel. Widely used in complex litigation, multi-party depositions, and trials where immediate review of the record drives strategy.",
  },
  {
    title: "Depositions",
    description:
      "Sworn out-of-court testimony taken during discovery, transcribed verbatim. Used to lock witnesses into their accounts, develop trial strategy, impeach testimony at trial, and preserve evidence if a witness becomes unavailable.",
  },
  {
    title: "Remote depositions",
    description:
      "Stenographic coverage of depositions conducted via video conference platforms. Forbes provides a certified reporter for remote proceedings, ensuring the verbatim record meets the same legal standards as in-person testimony. Exhibits, objections, and stipulations are captured in full regardless of where participants are located.",
  },
  {
    title: "Arbitrations",
    description:
      "Private, binding dispute resolution before neutral arbitrators — common in commercial, employment, insurance, and labor matters. A certified transcript is essential if either party later seeks to confirm, vacate, or modify the award in court.",
  },
  {
    title: "Disciplinary hearings",
    description:
      "Formal administrative proceedings adjudicating alleged misconduct by employees or licensed professionals. Outcomes can include termination, suspension, or loss of licensure — all routinely appealed. The verbatim transcript is the record for any Article 78 proceeding in New York State court.",
  },
  {
    title: "50-H hearings",
    description:
      "Statutory examinations under NY General Municipal Law §50-h allowing a municipality to examine a claimant under oath before a Notice of Claim becomes a lawsuit. The transcript often drives settlement strategy and may be the only sworn testimony taken before the case resolves.",
  },
  {
    title: "Workers compensation",
    description:
      "Hearings before the New York State Workers' Compensation Board where injured workers, employers, and insurers present evidence on benefits, disability determinations, and medical disputes. A certified transcript of Board proceedings supports any subsequent appeal to the Workers' Compensation Board Panel or the Appellate Division.",
  },
  {
    title: "Accident cases",
    description:
      "Depositions, examinations, and hearings arising from personal injury and motor vehicle accident claims. A verbatim record of witness accounts, expert testimony, and medical evidence is essential for trial preparation, settlement negotiations, and appellate review in high-stakes accident litigation.",
  },
  {
    title: "Examinations under oath",
    description:
      "Sworn proceedings conducted by insurers under a policy's cooperation clause, requiring claimants to testify before coverage is determined. Failure to appear or testify truthfully can result in denial. The transcript is the record insurers and courts rely on if coverage disputes escalate.",
  },
  {
    title: "Grand jury proceedings",
    description:
      "Secret sessions where a citizen panel hears prosecution evidence to determine whether to indict. The sealed verbatim record is used by defense counsel after indictment to challenge legal sufficiency or surface witness inconsistencies before trial.",
  },
  {
    title: "Jury trials",
    description:
      "Full real-time transcription of testimony, arguments, bench conferences, jury instructions, rulings, and verdicts. The certified transcript is the official record for post-trial motions, direct appeals, and collateral review — appellate courts cannot evaluate error without it.",
  },
  {
    title: "Town and village courts",
    description:
      "Many NY town and village courts have no staff reporter, making a certified stenographer essential to any reliable record. When a party appeals to County Court, that court reviews the matter on the record — not a new trial.",
  },
  {
    title: "Federal court",
    description:
      "Depositions, hearings, and trials in the Western District of New York under the Federal Rules of Civil and Criminal Procedure. Transcripts must meet USDC formatting standards and serve as the official record for Second Circuit appellate review.",
  },
  {
    title: "Town board meetings",
    description:
      "Public sessions where officials vote on resolutions, local laws, and budgets. A stenographic record captures the full substance of deliberation beyond what clerk minutes reflect — critical in land use, contract, and Open Meetings Law disputes.",
  },
  {
    title: "Zoning, planning, historical, and public hearings",
    description:
      "Quasi-judicial proceedings before local boards on land use, permits, and historic designations. In an Article 78 challenge, the reviewing court is limited to what appears in the hearing record — making a complete, accurate transcript the foundation of any appeal.",
  },
];


export function ServicesAccordion() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = useCallback((i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) { next.delete(i); } else { next.add(i); }
      return next;
    });
  }, []);

  return (
    <div>
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
        Click to read
      </p>
      <div className="grid gap-3 items-start">
        {services.map((service, i) => {
          const isOpen = open.has(i);

          return (
            <motion.div
              key={service.title}
              layout
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded border border-[var(--line)] bg-white overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left transition hover:bg-[var(--surface-soft)]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <Award className="shrink-0 text-[var(--gold)]" size={18} aria-hidden="true" />
                  <span className="font-semibold text-[var(--primary)]">{service.title}</span>
                </div>
                <motion.span
                  layout
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="shrink-0 text-[var(--slate)]"
                >
                  <ChevronDown size={16} aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="desc"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-[var(--line)] px-4 py-4 text-sm leading-6 text-[var(--slate)]">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
