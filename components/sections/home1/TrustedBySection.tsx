"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { TRUSTED_BY_LOGOS } from "@/data/trustedByLogos";
import styles from "@/components/sections/home1/trusted-by-section.module.css";

export default function TrustedBySection() {
  const { t, isArabic } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trusted-by"
      className={`${styles.section} ${styles.reveal} ${isVisible ? styles.revealVisible : ""}`}
      aria-labelledby="trusted-by-heading"
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.label}>{t("home.trustedBy.label")}</p>
            <h2
              id="trusted-by-heading"
              className={styles.heading}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {t("home.trustedBy.headline")}
            </h2>
            <p className={styles.description} dir={isArabic ? "rtl" : "ltr"}>
              {t("home.trustedBy.description")}
            </p>
            <Link
              href={t("home.trustedBy.ctaHref")}
              className={`thm-btn ${styles.cta}`}
              aria-label={t("home.trustedBy.ctaAriaLabel")}
            >
              {t("home.trustedBy.cta")}
            </Link>
          </div>

          <div className={styles.logoPanel}>
            <ul
              className={styles.logoRow}
              aria-label={t("home.trustedBy.logosLabel")}
            >
              {TRUSTED_BY_LOGOS.map((client) => (
                <li key={client.name} className={styles.logoCard}>
                  <Image
                    src={client.logoSrc}
                    alt={client.altText}
                    width={client.width}
                    height={client.height}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 575px) 28vw, (max-width: 991px) 22vw, 180px"
                    className={styles.logo}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
