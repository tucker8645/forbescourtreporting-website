"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { contact, counties, courts } from "@/lib/site-data";

const proceedingTypes = [
  "Deposition",
  "Grand jury",
  "Jury trial",
  "50-H hearing",
  "Disciplinary hearing",
  "Examination under oath",
  "Town or village court",
  "Board / zoning / planning meeting",
  "Public hearing",
  "Other",
];

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
    const subject = encodeURIComponent(`Court reporting request from ${form.name || "website"}`);
    const dateTime = [form.date, form.time].filter(Boolean).join(" at ");
    // Keep body short to avoid Safari's URL length limit
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.organization ? `Org: ${form.organization}` : "",
      `Proceeding: ${form.proceeding}`,
      dateTime ? `Date/time: ${dateTime}` : "",
      form.county ? `County: ${form.county}` : "",
      form.courthouse ? `Courthouse: ${form.courthouse}` : "",
      `Transcript: ${form.transcript}`,
      `Urgency: ${form.urgency}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean).join("\n");
    return `${contact.emailHref}?subject=${subject}&body=${encodeURIComponent(lines)}`;
  }, [form]);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {/* Row 1: Name | Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input value={form.name} onChange={(e) => update("name", e.target.value)} name="name" />
        </Field>
        <Field label="Email">
          <input value={form.email} onChange={(e) => update("email", e.target.value)} name="email" type="email" />
        </Field>
      </div>

      {/* Row 2: Phone | Organization */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone">
          <input value={form.phone} onChange={(e) => update("phone", e.target.value)} name="phone" type="tel" />
        </Field>
        <Field label="Organization">
          <input value={form.organization} onChange={(e) => update("organization", e.target.value)} name="organization" />
        </Field>
      </div>

      {/* Row 3: Proceeding | Date | Time */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Proceeding type">
          <select value={form.proceeding} onChange={(e) => update("proceeding", e.target.value)} name="proceeding">
            {proceedingTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Date">
          <input
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
        </Field>
        <Field label="Time">
          <input
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            name="time"
            type="text"
            placeholder="e.g. 9:00 AM"
          />
        </Field>
      </div>

      {/* Row 4: County | Courthouse */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="County">
          <select value={form.county} onChange={(e) => update("county", e.target.value)} name="county">
            <option value="">Select a county</option>
            {counties.map((county) => (
              <option key={county} value={county}>{county} County</option>
            ))}
          </select>
        </Field>
        <Field label="Courthouse / location">
          <select value={form.courthouse} onChange={(e) => update("courthouse", e.target.value)} name="courthouse">
            <option value="">Select a courthouse</option>
            {courts.map((court) => (
              <option key={court.name} value={court.name}>{court.name} Town Court</option>
            ))}
            <option value="Other">Other / Not listed</option>
          </select>
        </Field>
      </div>

      {/* Transcript */}
      <Field label="Transcript needs">
        <select value={form.transcript} onChange={(e) => update("transcript", e.target.value)} name="transcript">
          <option>E-copy</option>
          <option>Hard copy by mail</option>
          <option>Both</option>
          <option>Not sure yet</option>
        </select>
      </Field>

      {/* Urgency */}
      <Field label="Urgency">
        <select value={form.urgency} onChange={(e) => update("urgency", e.target.value)} name="urgency">
          <option>Standard</option>
          <option>Upcoming proceeding</option>
          <option>Rush request</option>
          <option>Question first</option>
        </select>
      </Field>

      {/* Notes */}
      <Field label="Notes">
        <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} name="notes" rows={4} placeholder="Any additional details, deadlines, or questions" />
      </Field>

      <button className="btn-primary mt-2 min-h-12 w-full sm:w-fit" type="submit">
        Prepare Email Request
        <Send size={16} aria-hidden="true" />
      </button>
      <p className="text-sm leading-6 text-[var(--slate)]">
        Clicking the button opens a pre-filled email to Forbes Court Reporting for your review before sending.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--primary)]">
      <span>{label}</span>
      <span className="contents [&_input]:min-h-12 [&_input]:rounded [&_input]:border [&_input]:border-[var(--line)] [&_input]:bg-white [&_input]:px-3 [&_input]:text-base [&_input]:font-medium [&_input]:text-[var(--ink)] [&_select]:min-h-12 [&_select]:rounded [&_select]:border [&_select]:border-[var(--line)] [&_select]:bg-white [&_select]:px-3 [&_select]:text-base [&_select]:font-medium [&_select]:text-[var(--ink)] [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-[var(--line)] [&_textarea]:bg-white [&_textarea]:p-3 [&_textarea]:text-base [&_textarea]:font-medium [&_textarea]:text-[var(--ink)]">
        {children}
      </span>
    </label>
  );
}
