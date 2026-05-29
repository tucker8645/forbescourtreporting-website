import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems } from "@/lib/site-data";
import { HomeLink } from "@/components/home-link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(249,249,249,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-16">
        <HomeLink />
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--slate)] transition hover:text-[var(--primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded border border-[var(--line)] px-4 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white sm:flex"
          >
            <Phone size={16} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <Link className="btn-primary min-h-11" href="/contact">
            Schedule
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-16">
        <div>
          <p className="font-display text-2xl font-semibold uppercase tracking-[0.06em]">
            Forbes Court Reporting Services, LLC.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
            Creating an honest record in and out of the courtroom across Western New York and the Finger Lakes since 1972.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/78">
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
        <div className="grid grid-cols-2 gap-2 text-sm text-white/78">
          {navItems.map((item) => (
            <Link key={item.href} className="transition hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/12 px-4 py-5 text-center text-xs text-white/58">
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
