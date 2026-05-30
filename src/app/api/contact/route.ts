import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name, email, phone, organization,
    proceeding, date, time, county,
    courthouse, transcript, urgency, notes,
  } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const html = `
    <h2 style="font-family:sans-serif;color:#0F172A;">Court Reporting Request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;width:180px;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Phone</td><td style="padding:8px 12px;">${phone || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Organization</td><td style="padding:8px 12px;">${organization || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Proceeding type</td><td style="padding:8px 12px;">${proceeding}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Date</td><td style="padding:8px 12px;">${date || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Time</td><td style="padding:8px 12px;">${time || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">County</td><td style="padding:8px 12px;">${county || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Courthouse</td><td style="padding:8px 12px;">${courthouse || "—"}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Transcript needs</td><td style="padding:8px 12px;">${transcript}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#475569;">Urgency</td><td style="padding:8px 12px;">${urgency}</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:8px 12px;font-weight:600;color:#475569;">Notes</td><td style="padding:8px 12px;">${notes || "—"}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Forbes Court Reporting <onboarding@resend.dev>",
    to: "kelly@forbescourtreporting.com",
    replyTo: email,
    subject: `Court Reporting Request — ${proceeding}${date ? ` — ${date}` : ""}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send. Please call us directly." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
