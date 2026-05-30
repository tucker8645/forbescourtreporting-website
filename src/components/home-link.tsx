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
        className="h-10 w-10 rounded object-contain pointer-events-none sm:h-14 sm:w-14 lg:h-[72px] lg:w-[72px]"
      />
      <div>
        <span className="block font-display text-lg font-semibold uppercase tracking-[0.08em] text-[var(--primary)] sm:text-2xl lg:text-3xl">
          Forbes
        </span>
        <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[var(--slate)] sm:block lg:tracking-[0.22em]">
          Court Reporting
        </span>
      </div>
    </Link>
  );
}
