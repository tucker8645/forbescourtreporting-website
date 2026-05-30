"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Court } from "@/lib/site-data";

interface Props {
  courts: Court[];
}

export function CourtExplorer({ courts }: Props) {
  const [selected, setSelected] = useState<Court | null>(null);

  return (
    <div className="mt-8 relative">
      {/* Bubble strip */}
      <div
        className={`flex flex-wrap gap-2 transition-all duration-500 ${
          selected ? "pr-0 lg:pr-[52%]" : ""
        }`}
      >
        {courts.map((court) => (
          <button
            key={court.name}
            onClick={() => setSelected(selected?.name === court.name ? null : court)}
            className={`rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-300 ${
              selected?.name === court.name
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[var(--line)] bg-white text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--surface-soft)]"
            }`}
          >
            {court.name}
          </button>
        ))}
      </div>

      {/* Expanded panel — slides in from right */}
      <div
        className={`mt-6 overflow-hidden transition-all duration-500 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[50%] ${
          selected ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 lg:pointer-events-none"
        }`}
      >
        {selected && <CourtPanel court={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}

function CourtPanel({ court, onClose }: { court: Court; onClose: () => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    // Clean up previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    if (!mapRef.current) return;

    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      // Fix broken default marker icons in Next.js/webpack
      // @ts-expect-error _getIconUrl is private
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        attributionControl: false,
      });
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18 }).addTo(map);

      const marker = L.marker([court.lat, court.lon]).addTo(map);
      marker.bindPopup(`${court.name} Town Court`).openPopup();
      map.setView([court.lat, court.lon], 13);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [court]);


  return (
    <div className="rounded-lg border border-[var(--line)] bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-[var(--line)] px-5 py-4">
        <div>
          <p className="eyebrow text-[var(--gold)]">{court.county} County</p>
          <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
            {court.name} Town Court
          </h3>
        </div>
        <button
          onClick={onClose}
          className="mt-1 shrink-0 rounded p-1 text-[var(--slate)] hover:text-[var(--primary)]"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Map */}
      <div className="relative z-0">
        <div ref={mapRef} className="h-64 w-full" />
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[var(--line)] px-5 py-4">
        <p className="text-xs text-[var(--slate)]">{court.address}</p>
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(court.name + " Town Court " + court.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-semibold text-[var(--primary)] underline underline-offset-2 hover:text-[var(--gold)]"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}
