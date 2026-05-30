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
        className="h-20 w-20 rounded object-contain pointer-events-none lg:h-[80px] lg:w-[80px]"
      />
      <div>
        <span className="block font-display text-xl font-semibold uppercase tracking-[0.08em] text-[var(--primary)] lg:text-3xl">
          Forbes
        </span>
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--slate)] lg:text-sm lg:tracking-[0.22em]">
          Court Reporting
        </span>
      </div>
    </Link>
  );
}
