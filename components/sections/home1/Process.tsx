"use client";

import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import styles from "@/components/sections/home1/process.module.css";

export default function Process() {
  const { locale, t } = useLanguage();
  const process = translations[locale].home.process;
  const rows = process.rows ?? [];

  return (
    <section className={styles.section} id="process">
      <div className="container">
        <header className={styles.header}>
          <AnimatedTitle>
            <h2 className={`section-title__title ${styles.title}`}>
              {t("home.process.title")}{" "}
              <span>{t("home.process.titleHighlight")}</span>
            </h2>
          </AnimatedTitle>
          <p className={styles.subtitle}>{process.subtitle}</p>
        </header>

        <div className={styles.legend} aria-hidden="true">
          <span className={styles.legendItem}>{process.conventionalLabel}</span>
          <span className={styles.legendItemHighlight}>{process.powerOrbitLabel}</span>
        </div>

        <div className={styles.compare}>
          {rows.map((row) => (
            <article key={row.capability} className={styles.row}>
              <div className={styles.rowHead}>
                <h3 className={styles.rowTitle}>{row.capability}</h3>
              </div>

              <div className={styles.rowBody}>
                <div className={styles.panel}>
                  <span className={styles.panelLabel}>{process.conventionalLabel}</span>
                  <div className={styles.traits}>
                    {(row.conventional ?? []).map((item) => (
                      <span key={item} className={styles.traitMuted}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`${styles.panel} ${styles.panelHighlight}`}>
                  <span className={styles.panelLabelHighlight}>
                    {process.powerOrbitLabel}
                  </span>
                  <div className={styles.traits}>
                    {(row.powerOrbit ?? []).map((item) => (
                      <span key={item} className={styles.traitHighlight}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
