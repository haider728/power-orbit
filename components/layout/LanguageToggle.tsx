"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

type LanguageToggleProps = {
  className?: string;
  variant?: "menu" | "header" | "mobile";
};

export default function LanguageToggle({
  className = "",
  variant = "header",
}: LanguageToggleProps) {
  const { locale, toggleLocale, t, isArabic } = useLanguage();

  const label = isArabic
    ? t("language.switchToEnglish")
    : t("language.switchToArabic");

  return (
    <div
      className={`lang-toggle lang-toggle--${variant} ${className}`.trim()}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className={`lang-toggle__btn ${locale === "en" ? "is-active" : ""}`}
        onClick={() => locale !== "en" && toggleLocale()}
        aria-pressed={locale === "en"}
      >
        {t("language.en")}
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${locale === "ar" ? "is-active" : ""}`}
        onClick={() => locale !== "ar" && toggleLocale()}
        aria-pressed={locale === "ar"}
      >
        {t("language.ar")}
      </button>
    </div>
  );
}
