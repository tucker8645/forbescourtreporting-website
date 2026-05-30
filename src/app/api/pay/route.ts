import { redirect } from "next/navigation";

export async function GET() {
  const url = process.env.STRIPE_PAYMENT_LINK;
  if (!url) return new Response("Payment not configured", { status: 503 });
  redirect(url);
}
