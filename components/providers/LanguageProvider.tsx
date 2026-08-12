"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
  localeDirection,
} from "@/lib/i18n/config";
import { translations, t as translate } from "@/lib/i18n/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
  const fromCookie = match?.split("=")[1];
  if (fromCookie && isLocale(fromCookie)) return fromCookie;
  const fromStorage = localStorage.getItem(LOCALE_COOKIE);
  if (fromStorage && isLocale(fromStorage)) return fromStorage;
  return DEFAULT_LOCALE;
}

function persistLocale(locale: Locale) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
  localStorage.setItem(LOCALE_COOKIE, locale);
}

function applyDocumentSeo(locale: Locale) {
  const { title, description } = translations[locale].seo;
  document.title = title;

  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

function applyDocumentLocale(locale: Locale, options?: { emitResize?: boolean }) {
  const dir = localeDirection(locale);
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
  document.body.classList.toggle("locale-ar", locale === "ar");
  applyDocumentSeo(locale);

  // Only on user locale toggle — resize on first paint causes forced reflow / TBT.
  if (options?.emitResize) {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }
}

type LanguageProviderProps = {
  children: React.ReactNode;
};

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readStoredLocale();
    setLocaleState(stored);
    applyDocumentLocale(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    applyDocumentLocale(next, { emitResize: true });
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "ar" ? "en" : "ar");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key: string) => translate(locale, key),
      dir: localeDirection(locale),
      isArabic: locale === "ar",
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
