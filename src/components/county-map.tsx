"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { contact } from "@/lib/site-data";

const GEOJSON_FILES: Record<string, string> = {
  Erie: "/erie-county.geojson",
  Allegany: "/allegany-county.geojson",
  Livingston: "/livingston-county.geojson",
  Orleans: "/orleans-county.geojson",
  Monroe: "/monroe-county.geojson",
  Genesee: "/genesee-county.geojson",
  Wyoming: "/wyoming-county.geojson",
  Ontario: "/ontario-county.geojson",
  Wayne: "/wayne-county.geojson",
  Yates: "/yates-county.geojson",
  Steuben: "/steuben-county.geojson",
  Cattaraugus: "/cattaraugus-county.geojson",
  Chautauqua: "/chautauqua-county.geojson",
};

interface CountyMapModalProps {
  county: string;
  onClose: () => void;
}

function CountyMapModal({ county, onClose }: CountyMapModalProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    location: county + " County",
    proceeding: "Deposition",
    transcript: "E-copy",
    notes: "",
  });

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const geojsonPath = GEOJSON_FILES[county];

    Promise.all([import("leaflet"), fetch(geojsonPath).then((r) => r.json())]).then(([L, geojson]) => {
      if (!mapRef.current || mapInstanceRef.current) return;
      // @ts-expect-error _leaflet_id is set by Leaflet on the DOM node
      if (mapRef.current._leaflet_id) return;

      const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: true, attributionControl: false });
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      const layer = L.geoJSON(geojson, {
        style: {
          color: "#131d34",
          fillColor: "#ae986c",
          fillOpacity: 0.25,
          weight: 2,
        },
      }).addTo(map);

      map.fitBounds(layer.getBounds(), { padding: [24, 24] });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [county]);

  function update(field: keyof typeof form, value: string) {
    setForm((cur) => ({ ...cur, [field]: value }));
  }

  const mailto = (() => {
    const subject = encodeURIComponent(`Availability inquiry — ${county} County`);
    const body = encodeURIComponent(
      [
        `Availability inquiry for ${county} County`,
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Proceeding type: ${form.proceeding}`,
        `Date / time: ${form.date}`,
        `County / location: ${form.location}`,
        `Transcript needs: ${form.transcript}`,
        "",
        "Notes:",
        form.notes,
      ].join("\n"),
    );
    return `${contact.emailHref}?subject=${subject}&body=${body}`;
  })();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-lg bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-4">
          <div>
            <p className="eyebrow text-[var(--gold)]">{county} County</p>
            <h2 className="mt-1 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[var(--primary)]">
              Coverage Area
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-[var(--slate)] hover:text-[var(--primary)]"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {/* Map */}
        <div ref={mapRef} className="h-52 w-full shrink-0 sm:h-72" />

        {/* Availability form */}
        <div className="border-t border-[var(--line)] px-6 py-6">
          <p className="eyebrow text-[var(--gold)]">Ask About Availability</p>
          <p className="mt-1 text-sm leading-6 text-[var(--slate)]">
            Enter your proceeding details and we&apos;ll confirm reporter availability for {county} County.
          </p>
          <form className="mt-4 grid gap-3" action={mailto}>
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniField label="Name">
                <input value={form.name} onChange={(e) => update("name", e.target.value)} />
              </MiniField>
              <MiniField label="Email">
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </MiniField>
              <MiniField label="Proceeding type">
                <select value={form.proceeding} onChange={(e) => update("proceeding", e.target.value)}>
                  {["Deposition", "Jury trial", "Grand jury", "Hearing", "50-H hearing", "Examination under oath", "Town or village court", "Public hearing", "Other"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </MiniField>
              <MiniField label="Date / time">
                <input value={form.date} onChange={(e) => update("date", e.target.value)} placeholder="Date or requested window" />
              </MiniField>
              <MiniField label="Transcript needs">
                <select value={form.transcript} onChange={(e) => update("transcript", e.target.value)}>
                  {["E-copy", "Hard copy by mail", "Both", "Not sure yet"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </MiniField>
              <MiniField label="Specific location / courthouse">
                <input value={form.location} onChange={(e) => update("location", e.target.value)} />
              </MiniField>
            </div>
            <MiniField label="Notes">
              <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} />
            </MiniField>
            <button className="btn-primary mt-1 min-h-11 w-full sm:w-fit" type="submit">
              Send Availability Request
              <Send size={15} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function MiniField({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold text-[var(--primary)]">
      <span>{label}</span>
      <span className="contents [&_input]:min-h-10 [&_input]:rounded [&_input]:border [&_input]:border-[var(--line)] [&_input]:bg-[var(--surface)] [&_input]:px-3 [&_input]:text-sm [&_input]:font-medium [&_input]:text-[var(--ink)] [&_select]:min-h-10 [&_select]:rounded [&_select]:border [&_select]:border-[var(--line)] [&_select]:bg-[var(--surface)] [&_select]:px-3 [&_select]:text-sm [&_select]:font-medium [&_select]:text-[var(--ink)] [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-[var(--line)] [&_textarea]:bg-[var(--surface)] [&_textarea]:p-3 [&_textarea]:text-sm [&_textarea]:font-medium [&_textarea]:text-[var(--ink)]">
        {children}
      </span>
    </label>
  );
}

export function CoverageOverviewMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const entries = Object.entries(GEOJSON_FILES);

    Promise.all([
      import("leaflet"),
      ...entries.map(([, path]) => fetch(path).then((r) => r.json())),
    ]).then(([L, ...geojsons]) => {
      if (!mapRef.current || mapInstanceRef.current) return;
      // @ts-expect-error _leaflet_id is set by Leaflet on the DOM node
      if (mapRef.current._leaflet_id) return;

      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: false,
      });
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      const el = mapRef.current!;
      el.addEventListener("mouseenter", () => map.scrollWheelZoom.enable());
      el.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());

      const allBounds: import("leaflet").LatLngBounds[] = [];

      entries.forEach(([name], i) => {
        const geojson = geojsons[i] as GeoJSON.Feature;
        const layer = (L as typeof import("leaflet")).geoJSON(geojson, {
          style: {
            color: "#131d34",
            fillColor: "#ae986c",
            fillOpacity: 0.18,
            weight: 1.5,
          },
        }).addTo(map);

        const bounds = layer.getBounds();
        allBounds.push(bounds);

        // Label at centroid
        const center = bounds.getCenter();
        (L as typeof import("leaflet")).marker(center, {
          icon: (L as typeof import("leaflet")).divIcon({
            className: "",
            html: `<span style="font-family:sans-serif;font-size:10px;font-weight:700;color:#131d34;white-space:nowrap;text-shadow:0 0 3px #fff,0 0 3px #fff,0 0 3px #fff">${name}</span>`,
            iconAnchor: [0, 0],
          }),
        }).addTo(map);
      });

      if (allBounds.length > 0) {
        let combined = allBounds[0];
        for (let i = 1; i < allBounds.length; i++) combined = combined.extend(allBounds[i]);
        map.fitBounds(combined, { padding: [-30, -30] });
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="relative z-0 h-full w-full min-h-[300px] rounded border border-[var(--line)] sm:min-h-[400px] lg:min-h-[480px]" />;
}

export function CountyCard({ county }: { county: string }) {
  const [open, setOpen] = useState(false);
  const hasMap = county in GEOJSON_FILES;

  return (
    <>
      <button
        onClick={() => hasMap && setOpen(true)}
        className={`flex h-14 w-full items-center gap-3 rounded border border-[var(--line)] bg-white px-4 text-left transition-colors ${hasMap ? "cursor-pointer hover:border-[var(--primary)] hover:bg-[var(--surface-soft)]" : "cursor-default"}`}
      >
        <svg className="shrink-0 text-[var(--gold)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <span className="flex-1 font-semibold text-[var(--primary)]">{county} County</span>
        {hasMap && (
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[var(--gold)]">View map →</span>
        )}
      </button>
      {open && <CountyMapModal county={county} onClose={() => setOpen(false)} />}
    </>
  );
}
