import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const width = searchParams.get("w") ?? "600";
  const height = searchParams.get("h") ?? "400";
  const pitch = searchParams.get("pitch") ?? "10";
  const fov = searchParams.get("fov") ?? "90";

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat and lon required" }, { status: 400 });
  }

  const key = process.env.GOOGLE_STREET_VIEW_KEY;
  if (!key) {
    return NextResponse.json({ error: "Street View not configured" }, { status: 503 });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/streetview");
  url.searchParams.set("size", `${width}x${height}`);
  url.searchParams.set("location", `${lat},${lon}`);
  url.searchParams.set("fov", fov);
  url.searchParams.set("pitch", pitch);
  url.searchParams.set("key", key);

  const res = await fetch(url.toString(), { next: { revalidate: 86400 } });

  if (!res.ok) {
    return NextResponse.json({ error: "Street View fetch failed" }, { status: res.status });
  }

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
