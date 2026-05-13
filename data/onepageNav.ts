export type OnepageNavItem = { id: string; label: string };

/** Home 1 one-page: must stay in sync with desktop `OnepageMenu_One`. */
export const ONEPAGE_NAV_ONE: OnepageNavItem[] = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#choose", label: "Why Choose Us" },
  { id: "#blog", label: "Blog" },
];

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
