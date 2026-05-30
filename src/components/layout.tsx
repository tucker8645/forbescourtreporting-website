"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CreditCard, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { contact, navItems } from "@/lib/site-data";
import { HomeLink } from "@/components/home-link";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(249,249,249,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:px-16">
          <HomeLink />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-[var(--primary)] ${pathname === item.href ? "text-[var(--primary)]" : "text-[var(--slate)]"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Phone — icon only on md, full number on xl */}
            <a
              href={contact.phoneHref}
              className="hidden min-h-11 items-center gap-2 rounded border border-[var(--line)] px-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white md:flex xl:px-4"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="hidden xl:inline whitespace-nowrap">{contact.phoneDisplay}</span>
            </a>

            {/* Pay Now — always visible */}
            <Link
              href="/pay"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded border border-[var(--gold)] px-3 text-sm font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white xl:px-4"
            >
              <CreditCard size={15} aria-hidden="true" />
              <span>Pay Now</span>
            </Link>

            {/* Schedule button — always visible */}
            <Link className="btn-primary min-h-11 whitespace-nowrap" href="/contact">
              Schedule
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded border border-[var(--line)] text-[var(--primary)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-[var(--line)] bg-[rgba(249,249,249,0.98)] px-4 pb-6 pt-4 sm:px-8 lg:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-11 items-center rounded px-3 text-sm font-semibold transition hover:bg-[var(--surface-soft)] hover:text-[var(--primary)] ${pathname === item.href ? "text-[var(--primary)]" : "text-[var(--slate)]"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t border-[var(--line)] pt-4">
              <a
                href={contact.phoneHref}
                className="flex min-h-11 items-center gap-2 rounded px-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--surface-soft)]"
              >
                <Phone size={16} aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-10 lg:px-16 lg:py-14">
        <div>
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em]">
            Forbes Court Reporting Services, LLC.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
            Creating an honest record in and out of the courtroom across Western New York and the Finger Lakes since 1972.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <a className="flex items-center gap-2 transition hover:text-white" href={contact.emailHref}>
            <Mail size={16} aria-hidden="true" />
            {contact.email}
          </a>
          <a className="flex items-center gap-2 transition hover:text-white" href={contact.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 shrink-0" size={16} aria-hidden="true" />
            {contact.address}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-white/70">
          {navItems.map((item) => (
            <Link key={item.href} className="transition hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © 2026 Forbes Court Reporting Services, LLC.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
