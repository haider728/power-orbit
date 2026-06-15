"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import styles from "@/components/sections/home1/sliding-text-section.module.css";

function TickerMarqueeRow({
  message,
  repeat,
  isArabic,
  duplicate,
}: {
  message: string;
  repeat: number;
  isArabic: boolean;
  duplicate?: boolean;
}) {
  return (
    <ul
      className={`sliding-text-three__list list-unstyled ${styles.list} ${isArabic ? styles.listArabic : ""}`}
      aria-hidden={duplicate}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <li key={`${duplicate ? "b" : "a"}-${i}`}>
          <span className="sliding-text-three__ticker">
            <span className={`sliding-text-three__ticker-label ${styles.label}`}>
              {message}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function SlideingText() {
  const { locale, isArabic } = useLanguage();
  const message = translations[locale].home.slidingText;
  const repeat = isArabic ? 16 : 10;

  return (
    <section
      className={`sliding-text-three overflow-hidden ${styles.section}`}
      id="sliding-text"
      dir="ltr"
    >
      <div className={`sliding-text-three__wrap ${styles.wrap}`}>
        <TickerMarqueeRow message={message} repeat={repeat} isArabic={isArabic} />
        <TickerMarqueeRow
          message={message}
          repeat={repeat}
          isArabic={isArabic}
          duplicate
        />
      </div>
    </section>
  );
}
