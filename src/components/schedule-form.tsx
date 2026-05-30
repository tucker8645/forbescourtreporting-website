"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { contact, counties, courts } from "@/lib/site-data";

const proceedingTypes = [
  "Deposition",
  "Hearing",
  "Jury trial",
  "Grand jury",
  "Arbitration",
  "50-H hearing",
  "Disciplinary hearing",
  "Examination under oath",
  "Town or village court",
  "Board / zoning / planning meeting",
  "Public hearing",
  "Other",
];

const transcriptOptions = ["E-copy", "Hard copy by mail", "Both", "No transcript needed"];
const urgencyOptions = ["Standard", "Expedited", "Same-day", "Rush"];

export function ScheduleForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    proceeding: "Deposition",
    date: "",
    time: "",
    county: "",
    courthouse: "",
    transcript: "E-copy",
    urgency: "Standard",
    notes: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Court Reporting Request - ${form.proceeding}${form.date ? ` - ${form.date}` : ""}`
    );
    const lines = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Organization: ${form.organization || "-"}`,
      `Proceeding Type: ${form.proceeding}`,
      `Date: ${form.date || "-"}`,
      `Time: ${form.time || "-"}`,
      `County: ${form.county || "-"}`,
      `Courthouse / Location: ${form.courthouse || "-"}`,
      `Transcript Needs: ${form.transcript}`,
      `Urgency: ${form.urgency}`,
      `Notes: ${form.notes || "-"}`,
    ].join("\n");
    return `${contact.emailHref}?subject=${subject}&body=${encodeURIComponent(lines)}`;
  }, [form]);

  function update(field: keyof typeof form, value: string) {
    setForm((cur) => ({ ...cur, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-[#CBD5E1] bg-white p-6 sm:p-8"
      style={{ maxWidth: "850px" }}
    >
      {/* Name | Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Name">
          <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" />
        </F>
        <F label="Email">
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" />
        </F>
      </div>

      {/* Phone | Organization */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Phone">
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 000-0000" />
        </F>
        <F label="Organization">
          <input value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Law firm or agency" />
        </F>
      </div>

      {/* Proceeding type — full width */}
      <F label="Proceeding type">
        <select value={form.proceeding} onChange={(e) => update("proceeding", e.target.value)}>
          {proceedingTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </F>

      {/* Date | Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Date">
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            placeholder="05/30/2026"
          />
        </F>
        <F label="Time">
          <input
            type="text"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            placeholder="e.g. 9:00 AM"
          />
        </F>
      </div>

      {/* County | Courthouse */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="County">
          <select value={form.county} onChange={(e) => update("county", e.target.value)}>
            <option value="">Select a county</option>
            {counties.map((c) => <option key={c} value={c}>{c} County</option>)}
          </select>
        </F>
        <F label="Courthouse / location">
          <select value={form.courthouse} onChange={(e) => update("courthouse", e.target.value)}>
            <option value="">Select a courthouse</option>
            {courts.map((c) => <option key={c.name} value={c.name}>{c.name} Town Court</option>)}
            <option value="Other">Other / Not listed</option>
          </select>
        </F>
      </div>

      {/* Transcript needs — full width */}
      <F label="Transcript needs">
        <select value={form.transcript} onChange={(e) => update("transcript", e.target.value)}>
          {transcriptOptions.map((t) => <option key={t}>{t}</option>)}
        </select>
      </F>

      {/* Urgency — full width */}
      <F label="Urgency">
        <select value={form.urgency} onChange={(e) => update("urgency", e.target.value)}>
          {urgencyOptions.map((u) => <option key={u}>{u}</option>)}
        </select>
      </F>

      {/* Notes — full width */}
      <F label="Notes">
        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Any additional details, deadlines, or questions"
          rows={4}
          style={{ minHeight: "120px" }}
        />
      </F>

      {/* Submit */}
      <div className="flex flex-col gap-3">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: "#0F172A", letterSpacing: "0.08em" }}
        >
          Prepare Email Request
          <Send size={15} aria-hidden="true" />
        </button>
        <p className="text-sm leading-6 text-slate-400">
          Clicking the button opens a pre-filled email to Forbes Court Reporting for your review before sending.
        </p>
      </div>
    </form>
  );
}

function F({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[#0F172A]">{label}</span>
      <span className="contents [&_input]:h-12 [&_input]:w-full [&_input]:rounded [&_input]:border [&_input]:border-[#CBD5E1] [&_input]:bg-white [&_input]:px-3 [&_input]:text-sm [&_input]:text-[#0F172A] [&_input]:outline-none [&_input]:transition [&_input:focus]:ring-2 [&_input:focus]:ring-blue-500 [&_input:focus]:ring-offset-1 [&_select]:h-12 [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-[#CBD5E1] [&_select]:bg-white [&_select]:px-3 [&_select]:text-sm [&_select]:text-[#0F172A] [&_select]:outline-none [&_select]:transition [&_select:focus]:ring-2 [&_select:focus]:ring-blue-500 [&_select:focus]:ring-offset-1 [&_textarea]:w-full [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-[#CBD5E1] [&_textarea]:bg-white [&_textarea]:p-3 [&_textarea]:text-sm [&_textarea]:text-[#0F172A] [&_textarea]:outline-none [&_textarea]:transition [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-blue-500 [&_textarea:focus]:ring-offset-1">
        {children}
      </span>
    </label>
  );
}
