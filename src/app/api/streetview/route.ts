import { NextRequest, NextResponse } from "next/server";

const LAT_RE = /^-?\d{1,3}(\.\d{1,10})?$/;
const LON_RE = /^-?\d{1,3}(\.\d{1,10})?$/;

function clampInt(val: string | null, fallback: number, min: number, max: number): number {
  const n = parseInt(val ?? String(fallback), 10);
  if (isNaN(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

function clampFloat(val: string | null, fallback: number, min: number, max: number): number {
  const n = parseFloat(val ?? String(fallback));
  if (isNaN(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon || !LAT_RE.test(lat) || !LON_RE.test(lon)) {
    return NextResponse.json({ error: "Valid lat and lon required" }, { status: 400 });
  }

  const key = process.env.GOOGLE_STREET_VIEW_KEY;
  if (!key) {
    return NextResponse.json({ error: "Street View not configured" }, { status: 503 });
  }

  // Clamp all numeric params — no raw string interpolation into upstream URL
  const width  = clampInt(searchParams.get("w"),     600,   64, 640);
  const height = clampInt(searchParams.get("h"),     400,   64, 640);
  const fov    = clampFloat(searchParams.get("fov"),  90,   20, 120);
  const pitch  = clampFloat(searchParams.get("pitch"), 10, -90,  90);

  const url = new URL("https://maps.googleapis.com/maps/api/streetview");
  url.searchParams.set("size", `${width}x${height}`);
  url.searchParams.set("location", `${lat},${lon}`);
  url.searchParams.set("fov", String(fov));
  url.searchParams.set("pitch", String(pitch));
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { next: { revalidate: 86400 } });

  if (!res.ok) {
    return NextResponse.json({ error: "Street View fetch failed" }, { status: res.status });
  }

  // Only pass through image content types — never relay HTML error pages
  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  if (!contentType.startsWith("image/")) {
    return NextResponse.json({ error: "Unexpected response from Street View" }, { status: 502 });
  }

  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
