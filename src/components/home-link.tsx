"use client";
import Image from "next/image";
import Link from "next/link";

export function HomeLink() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image
        src="/logo-transparent.png"
        alt="Forbes Court Reporting Services logo"
        width={100}
        height={100}
        className="h-[100px] w-[100px] rounded object-contain pointer-events-none"
      />
      <div>
        <span className="block font-display text-2xl font-semibold uppercase tracking-[0.08em] text-[var(--primary)] sm:text-3xl">
          Forbes
        </span>
        <span className="block text-base font-semibold uppercase tracking-[0.22em] text-[var(--slate)]">
          Court Reporting
        </span>
      </div>
    </Link>
  );
}
