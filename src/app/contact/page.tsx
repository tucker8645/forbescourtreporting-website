import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScheduleForm } from "@/components/schedule-form";
import { PageShell } from "@/components/layout";
import { Section, SectionIntro } from "@/components/section";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact and Schedule",
  description:
    "Contact Forbes Court Reporting to schedule a reporter or ask about coverage for an upcoming proceeding.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Section className="section-band border-b border-[var(--line)]">
        <SectionIntro eyebrow="Contact / Schedule" title="Send proceeding details or call Forbes directly.">
          <p>
            Use the form to prepare an email request, or contact Forbes Court Reporting directly by phone or email.
          </p>
        </SectionIntro>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded border border-[var(--line)] bg-[var(--surface-soft)] p-6">
            <p className="eyebrow">Direct Contact</p>
            <div className="mt-6 grid gap-4">
              <a className="flex items-center gap-3 font-semibold text-[var(--primary)]" href={contact.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
              <a className="flex items-center gap-3 font-semibold text-[var(--primary)]" href={contact.emailHref}>
                <Mail size={18} aria-hidden="true" />
                {contact.email}
              </a>
              <p className="flex items-start gap-3 font-semibold text-[var(--primary)]">
                <MapPin className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
                {contact.address}
              </p>
            </div>
          </aside>
          <div className="rounded border border-[var(--line)] bg-white p-6 sm:p-8">
            <ScheduleForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
