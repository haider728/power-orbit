import type { Locale } from "@/lib/i18n/config";
import { avlBlogUrl } from "@/lib/avlUrls";

export type OnepageNavItem = {
  labelKey: string;
  /** In-page scroll target */
  id?: string;
  /** External or absolute link (used when `id` is omitted) */
  href?: string;
  external?: boolean;
};

/** @deprecated Use `avlBlogUrl(locale)` */
export const BLOG_EXTERNAL_URL = "https://avl-ksa.com/en/blogs/";

/** Home 1 one-page: must stay in sync with desktop `OnepageMenu_One`. */
export function getOnepageNavOne(locale: Locale): OnepageNavItem[] {
  return [
    { id: "#home", labelKey: "nav.home" },
    { id: "#about", labelKey: "nav.about" },
    { id: "#choose", labelKey: "nav.whyChoose" },
    { href: avlBlogUrl(locale), labelKey: "nav.blog", external: true },
  ];
}

/** @deprecated Use `getOnepageNavOne(locale)` */
export const ONEPAGE_NAV_ONE: OnepageNavItem[] = getOnepageNavOne("en");

/** Home 2 one-page section hashes (after Home); order matches `OnepageMenu_Two`. */
export const ONEPAGE_NAV_TWO_SECTIONS = [
  "#services",
  "#about",
  "#portfolio",
  "#contact",
  "#team",
  "#blog",
] as const;

/** Home 3 one-page section hashes (after Home); order matches `OnepageMenu_Three`. */
export const ONEPAGE_NAV_THREE_SECTIONS = [
  "#about",
  "#services",
  "#testimonial",
  "#portfolio",
  "#blog",
  "#contact",
] as const;
