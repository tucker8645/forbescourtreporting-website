"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { counties, courts } from "@/lib/site-data";

const proceedingTypes = [
  "Deposition", "Hearing", "Jury trial", "Grand jury", "Arbitration",
  "50-H hearing", "Disciplinary hearing", "Examination under oath",
  "Town or village court", "Board / zoning / planning meeting", "Public hearing", "Other",
];

const transcriptOptions = ["E-copy", "Hard copy by mail", "Both", "No transcript needed"];
const urgencyOptions = ["Standard", "Expedited", "Same-day", "Rush"];

const empty = {
  name: "", email: "", phone: "", organization: "",
  proceeding: "Deposition", date: "", time: "",
  county: "", courthouse: "", transcript: "E-copy",
  urgency: "Standard", notes: "",
};

export function ScheduleForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((cur) => ({ ...cur, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setForm(empty);
    } else {
      setStatus("error");
      setErrorMsg(data.error || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-[#CBD5E1] bg-white p-12 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.04em] text-[#0F172A]">
          Request sent
        </h3>
        <p className="max-w-md text-sm leading-6 text-slate-500">
          Forbes Court Reporting has received your request and will be in touch shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-[#0F172A] underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-[#CBD5E1] bg-white p-6 sm:p-8"
      style={{ maxWidth: "850px" }}
    >
      {/* Name | Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Name" required>
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" />
        </F>
        <F label="Email" required>
          <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" />
        </F>
      </div>

      {/* Phone | Organization */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Phone">
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(585) 000-0000" />
        </F>
        <F label="Organization">
          <input value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Law firm or agency" />
        </F>
      </div>

      {/* Proceeding type */}
      <F label="Proceeding type">
        <select value={form.proceeding} onChange={(e) => update("proceeding", e.target.value)}>
          {proceedingTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </F>

      {/* Date | Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <F label="Date">
          <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} min={new Date().toISOString().split("T")[0]} />
        </F>
        <F label="Time">
          <input type="text" value={form.time} onChange={(e) => update("time", e.target.value)} placeholder="e.g. 9:00 AM" />
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

      {/* Transcript */}
      <F label="Transcript needs">
        <select value={form.transcript} onChange={(e) => update("transcript", e.target.value)}>
          {transcriptOptions.map((t) => <option key={t}>{t}</option>)}
        </select>
      </F>

      {/* Urgency */}
      <F label="Urgency">
        <select value={form.urgency} onChange={(e) => update("urgency", e.target.value)}>
          {urgencyOptions.map((u) => <option key={u}>{u}</option>)}
        </select>
      </F>

      {/* Notes */}
      <F label="Notes">
        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Any additional details, deadlines, or questions"
          rows={4}
          style={{ minHeight: "120px" }}
        />
      </F>

      {errorMsg && (
        <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</p>
      )}

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          style={{ backgroundColor: "#0F172A", letterSpacing: "0.08em" }}
        >
          {status === "sending" ? "Sending…" : "Send Request"}
          {status !== "sending" && <Send size={15} aria-hidden="true" />}
        </button>
        <p className="text-sm leading-6 text-slate-400">
          Your request will be sent directly to Forbes Court Reporting.
        </p>
      </div>
    </form>
  );
}

function F({ label, required, children }: { label: string; required?: boolean; children: React.ReactElement }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[#0F172A]">
        {label}{required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      <span className="contents [&_input]:h-12 [&_input]:w-full [&_input]:rounded [&_input]:border [&_input]:border-[#CBD5E1] [&_input]:bg-white [&_input]:px-3 [&_input]:text-sm [&_input]:text-[#0F172A] [&_input]:outline-none [&_input]:transition [&_input:focus]:ring-2 [&_input:focus]:ring-blue-500 [&_input:focus]:ring-offset-1 [&_select]:h-12 [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-[#CBD5E1] [&_select]:bg-white [&_select]:px-3 [&_select]:text-sm [&_select]:text-[#0F172A] [&_select]:outline-none [&_select]:transition [&_select:focus]:ring-2 [&_select:focus]:ring-blue-500 [&_select:focus]:ring-offset-1 [&_textarea]:w-full [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-[#CBD5E1] [&_textarea]:bg-white [&_textarea]:p-3 [&_textarea]:text-sm [&_textarea]:text-[#0F172A] [&_textarea]:outline-none [&_textarea]:transition [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-blue-500 [&_textarea:focus]:ring-offset-1">
        {children}
      </span>
    </label>
  );
}
