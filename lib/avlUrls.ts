import type { Locale } from "@/lib/i18n/config";

const AVL_BASE = "https://avl-ksa.com";

function avlLang(locale: Locale): "en" | "ar" {
  return locale === "ar" ? "ar" : "en";
}

/** e.g. `/fleet-management-solutions/` → full AVL URL for the active locale */
export function avlUrl(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${AVL_BASE}/${avlLang(locale)}${normalized}`;
}

export function avlHomeUrl(locale: Locale): string {
  return `${AVL_BASE}/${avlLang(locale)}/`;
}

export function avlBlogUrl(locale: Locale): string {
  return avlUrl(locale, "/blogs/");
}

export function avlContactUrl(locale: Locale): string {
  return avlUrl(locale, "/contact-us/");
}
