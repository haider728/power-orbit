"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

/**
 * Remounts page content when locale changes so Swiper, carousels,
 * and motion-based images re-initialize correctly after RTL/LTR switch.
 */
export default function LocaleBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLanguage();

  return (
    <div key={locale} style={{ display: "contents" }} suppressHydrationWarning>
      {children}
    </div>
  );
}
