"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import styles from "@/components/sections/home1/stacked-cards.module.css";

const StackedScrollCardsMotion = dynamic(
  () => import("@/components/sections/home1/StackedScrollCards"),
  { ssr: false },
);

export default function StackedScrollCardsLazy() {
  const { t } = useLanguage();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || shouldMount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldMount]);

  if (shouldMount) {
    return <StackedScrollCardsMotion />;
  }

  return (
    <section ref={sentinelRef} className={styles.main} aria-hidden="true">
      <div className="container">
        <div
          className={`section-title text-center sec-title-animation animation-style1 ${styles.sectionHeader}`}
        >
          <div className="section-title__tagline-box" />
          <h2 className="section-title__title title-animation">
            {t("home.stackedCards.title")}{" "}
            <span>{t("home.stackedCards.titleHighlight")}</span>
          </h2>
          <p className={styles.sectionDescription}>
            {t("home.stackedCards.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
