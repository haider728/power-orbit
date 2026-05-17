import { NextResponse } from "next/server";
import { getStrapiServerUrl } from "@/lib/strapi";

export async function GET() {
  const base = getStrapiServerUrl();
  try {
    const res = await fetch(`${base}/api/articles?populate=*`, {
      next: { revalidate: 60 },
    });
    const bodyText = await res.text();
    if (!res.ok) {
      console.error("[strapi proxy] Strapi error:", res.status, bodyText.slice(0, 500));
      return NextResponse.json(
        { data: [], error: `Strapi ${res.status}`, detail: bodyText.slice(0, 200) },
        { status: 502 },
      );
    }
    const json = JSON.parse(bodyText) as unknown;
    return NextResponse.json(json);
  } catch (e) {
    console.error("[strapi proxy] fetch failed:", e);
    return NextResponse.json(
      { data: [], error: "Strapi unreachable from deployment" },
      { status: 502 },
    );
  }
}
