"use client";

import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getMessage, translations } from "@/lib/i18n/translations";
import styles from "@/components/sections/home1/about.module.css";

export default function About() {
  const { locale, t } = useLanguage();
  const highlights =
    (getMessage(locale, "home.about.highlights") as readonly string[] | undefined) ??
    [];
  const stats = translations[locale].home.about.stats;

  return (
    <section className={`about-two ${styles.section}`} id="about">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <header
            className={`section-title text-left sec-title-animation animation-style2 ${styles.header}`}
          >
            <AnimatedTitle>
              <h2 className={`section-title__title title-animation ${styles.title}`}>
                {t("home.about.title")}{" "}
                <span>{t("home.about.titleHighlight")}</span>
              </h2>
            </AnimatedTitle>
          </header>

          <p className={styles.lead}>{t("home.about.lead")}</p>

          <ul className={styles.statements} role="list">
            {highlights.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>

          <div className={`about-two__experience-contact-and-btn ${styles.footer}`}>
            <div className={styles.callBox}>
              <div className={styles.callIcon}>
                <span className="icon-customer-service-headset" />
              </div>
              <div>
                <span className={styles.callLabel}>{t("home.about.callLabel")}</span>
                <p className={styles.callLink} dir="ltr">
                  <Link href={`tel:${t("home.about.phoneTel")}`} className={styles.phoneNumber}>
                    {t("home.about.phoneDisplay")}
                  </Link>
                </p>
              </div>
            </div>
            <div className="about-two__btn-box">
              <Link
                href={t("home.about.companyProfileHref")}
                className="thm-btn"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                {t("home.about.companyProfile")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
