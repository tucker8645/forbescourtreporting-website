"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex justify-center bg-[var(--surface)] py-4">
      <motion.div
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--slate)]">
          Scroll
        </span>
        <div className="relative h-10 w-px bg-[var(--line)] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[var(--gold)]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
            style={{ height: "50%" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
