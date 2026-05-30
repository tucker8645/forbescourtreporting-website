import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.STRIPE_PAYMENT_LINK;
  if (!url) return new Response("Payment not configured", { status: 503 });
  // Validate it's a Stripe URL before redirecting
  if (!url.startsWith("https://buy.stripe.com/") && !url.startsWith("https://stripe.com/")) {
    return new Response("Invalid payment configuration", { status: 503 });
  }
  return NextResponse.redirect(url, { status: 307 });
}
