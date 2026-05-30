import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, FileText, Lock, Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/layout";
import { PageHero, Section } from "@/components/section";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Pay Invoice",
  description:
    "Pay your Forbes Court Reporting invoice securely online. Contact Forbes to receive your invoice and payment link.",
};

export default function PayPage() {
  return (
    <PageShell>
      <PageHero>
        <p className="eyebrow !text-white">Secure Payment</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold uppercase leading-[1.02] tracking-[0.035em] text-white sm:text-5xl lg:text-7xl">
          Pay your Forbes invoice online.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Online payment is available for transcript and reporting services. Contact Forbes to receive your invoice and secure payment link.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* How it works */}
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              Simple, secure, three steps.
            </h2>
            <div className="mt-8 grid gap-6">
              {[
                {
                  icon: <FileText size={22} />,
                  step: "01",
                  title: "Receive your invoice",
                  body: "After your proceeding or transcript delivery, Forbes will send you an itemized invoice by email.",
                },
                {
                  icon: <CreditCard size={22} />,
                  step: "02",
                  title: "Click your payment link",
                  body: "Your invoice includes a secure, one-time payment link. No account required.",
                },
                {
                  icon: <Lock size={22} />,
                  step: "03",
                  title: "Pay securely",
                  body: "Payments are processed through Stripe — the same platform used by millions of businesses worldwide. Your card data is never stored by Forbes.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[var(--line)] bg-[var(--surface-soft)] text-[var(--gold)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--slate)]">Step {item.step}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--slate)]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ready to pay — directly under steps */}
            <div className="flex flex-col justify-between rounded-lg border border-[var(--gold)] bg-white p-6">
              <div>
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-[var(--gold)]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[var(--primary)]">Ready to pay?</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--slate)]">
                  Have your invoice? Click below to complete payment securely through Stripe.
                </p>
              </div>
              <a href="/api/pay" className="btn-primary mt-4 flex min-h-11 items-center justify-center gap-2">
                Pay Invoice Now
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Secure payments note */}
            <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-4">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-[var(--gold)]" aria-hidden="true" />
                <p className="text-xs font-semibold text-[var(--primary)]">Secure payments via Stripe — 256-bit SSL encryption</p>
              </div>
            </div>
          </div>

          {/* Contact to get invoice */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-[var(--line)] bg-white p-6 sm:p-8">
              <p className="eyebrow">Need an Invoice?</p>
              <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
                Contact Forbes to get started.
              </h2>
              <p className="mt-3 leading-7 text-[var(--slate)]">
                Pricing for court reporting and transcript services varies based on proceeding type, length, and turnaround. Reach out and Forbes will provide an accurate quote and invoice for your matter.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={contact.phoneHref}
                  className="flex min-h-12 items-center gap-3 rounded border border-[var(--line)] bg-[var(--surface-soft)] px-4 font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white"
                >
                  <Phone size={16} className="text-[var(--gold)]" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
                <a
                  href={contact.emailHref}
                  className="flex min-h-12 items-center gap-3 rounded border border-[var(--line)] bg-[var(--surface-soft)] px-4 font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white"
                >
                  <Mail size={16} className="text-[var(--gold)]" aria-hidden="true" />
                  {contact.email}
                </a>
                <Link href="/contact" className="btn-primary mt-2 min-h-12">
                  Send a Message
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </PageShell>
  );
}
