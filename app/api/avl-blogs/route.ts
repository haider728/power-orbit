import { NextRequest, NextResponse } from "next/server";
import { fetchAvlBlogList } from "@/lib/avlBlogsServer";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale") ?? DEFAULT_LOCALE;
  const locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;

  try {
    const data = await fetchAvlBlogList(locale);
    return NextResponse.json({ data, source: "https://avl-ksa.com/en/blogs/" });
  } catch (e) {
    console.error("[avl-blogs] fetch failed:", e);
    return NextResponse.json(
      { data: [], error: "Could not load blogs from AVL-KSA" },
      { status: 502 },
    );
  }
}
