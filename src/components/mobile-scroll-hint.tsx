"use client";

import { useEffect, useState } from "react";

export function MobileScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 sm:hidden ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Scroll</span>
      <div className="relative h-8 w-px overflow-hidden bg-white/30">
        <div className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-line_1.2s_ease-in-out_infinite] bg-white" />
      </div>
    </div>
  );
}
