"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/lib/site-data";

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
    location: "",
    transcript: "E-copy",
    urgency: "Standard",
    notes: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Court reporting request from ${form.name || "website"}`);
    const body = encodeURIComponent(
      [
        "Court reporting request",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Organization: ${form.organization}`,
        `Proceeding type: ${form.proceeding}`,
        `Date/time: ${form.date}`,
        `County/location: ${form.location}`,
        `Transcript needs: ${form.transcript}`,
        `Urgency: ${form.urgency}`,
        "",
        "Notes:",
        form.notes,
      ].join("\n"),
    );

    return `${contact.emailHref}?subject=${subject}&body=${body}`;
  }, [form]);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="grid gap-4" action={mailto}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input value={form.name} onChange={(event) => update("name", event.target.value)} name="name" />
        </Field>
        <Field label="Email">
          <input value={form.email} onChange={(event) => update("email", event.target.value)} name="email" type="email" />
        </Field>
        <Field label="Phone">
          <input value={form.phone} onChange={(event) => update("phone", event.target.value)} name="phone" type="tel" />
        </Field>
        <Field label="Organization">
          <input value={form.organization} onChange={(event) => update("organization", event.target.value)} name="organization" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Proceeding type">
          <select value={form.proceeding} onChange={(event) => update("proceeding", event.target.value)} name="proceeding">
            {proceedingTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Date / time">
          <input value={form.date} onChange={(event) => update("date", event.target.value)} name="date" placeholder="Known date or requested window" />
        </Field>
        <Field label="County / location">
          <input value={form.location} onChange={(event) => update("location", event.target.value)} name="location" />
        </Field>
        <Field label="Transcript needs">
          <select value={form.transcript} onChange={(event) => update("transcript", event.target.value)} name="transcript">
            <option>E-copy</option>
            <option>Hard copy by mail</option>
            <option>Both</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>
      <Field label="Urgency">
        <select value={form.urgency} onChange={(event) => update("urgency", event.target.value)} name="urgency">
          <option>Standard</option>
          <option>Upcoming proceeding</option>
          <option>Rush request</option>
          <option>Question first</option>
        </select>
      </Field>
      <Field label="Notes">
        <textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} name="notes" rows={5} />
      </Field>
      <button className="btn-primary mt-2 min-h-12 w-full sm:w-fit" type="submit">
        Prepare Email Request
        <Send size={16} aria-hidden="true" />
      </button>
      <p className="text-sm leading-6 text-[var(--slate)]">
        This first version opens a pre-filled email to Forbes Court Reporting. A connected form backend can be added later.
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
