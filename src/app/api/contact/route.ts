import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name, email, phone, organization,
    proceeding, date, time, county,
    courthouse, transcript, urgency, notes,
  } = body as Record<string, string>;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2 style="font-family:sans-serif;color:#0F172A;">Court Reporting Request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;width:180px;">Name</td><td style="padding:8px 12px;">${esc(name)}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Email</td><td style="padding:8px 12px;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Phone</td><td style="padding:8px 12px;">${esc(phone) || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Organization</td><td style="padding:8px 12px;">${esc(organization) || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Proceeding type</td><td style="padding:8px 12px;">${esc(proceeding)}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Date</td><td style="padding:8px 12px;">${esc(date) || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Time</td><td style="padding:8px 12px;">${esc(time) || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">County</td><td style="padding:8px 12px;">${esc(county) || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Courthouse</td><td style="padding:8px 12px;">${esc(courthouse) || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Transcript needs</td><td style="padding:8px 12px;">${esc(transcript)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Urgency</td><td style="padding:8px 12px;">${esc(urgency)}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Notes</td><td style="padding:8px 12px;">${esc(notes) || "—"}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Forbes Court Reporting <noreply@forbescourtreporting.com>",
    to: "kelly@forbescourtreporting.com",
    replyTo: email,
    subject: `Court Reporting Request — ${esc(proceeding)}${date ? ` — ${esc(date)}` : ""}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send. Please call us directly." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
