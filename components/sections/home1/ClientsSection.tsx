"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CLIENT_LOGOS } from "@/data/clients";
import styles from "@/components/sections/home1/clients-section.module.css";

export default function ClientsSection() {
  const { t } = useLanguage();

  const title = t("home.clients.title");
  const titleHighlight = t("home.clients.titleHighlight");
  const titleParts = titleHighlight ? title.split(titleHighlight) : null;

  return (
    <section
      id="clients"
      className={`about-two clients-partners ${styles.section}`}
      aria-labelledby="clients-section-title"
    >
      <div className={`container ${styles.inner}`}>
        <header className={`section-title text-center ${styles.header}`}>
          <h2 id="clients-section-title" className={`section-title__title ${styles.title}`}>
            {titleParts && titleParts.length === 2 ? (
              <>
                {titleParts[0]}
                <span>{titleHighlight}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p className={styles.subtitle}>{t("home.clients.subtitle")}</p>
        </header>

        <ul className={styles.grid}>
          {CLIENT_LOGOS.map((client) => (
            <li key={client.name} className={styles.card}>
              <Image
                src={client.logoSrc}
                alt={client.altText}
                width={client.width}
                height={client.height}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 42vw, (max-width: 1199px) 28vw, 160px"
                className={`${styles.logo}${client.blendOnDark ? ` ${styles.logoPhoto}` : ""}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
