"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import type { ProjectCard } from "@/data/cards";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  CARD_SECTION_HEADINGS,
  translateCardSectionHeading,
} from "@/lib/i18n/translations";
import { publicImagePath } from "@/lib/publicImage";
import styles from "@/components/sections/home1/stacked-cards.module.css";

type ParsedSection = {
  heading?: string;
  paragraphs: string[];
  bullets: string[];
};

const SECTION_HEADING_PATTERN = CARD_SECTION_HEADINGS;

function parseFullDescription(content: string): ParsedSection[] {
  const sections: ParsedSection[] = [];
  const blocks = content.trim().split(/\n\n+/);

  for (const block of blocks) {
    const sectionMatch = block.match(SECTION_HEADING_PATTERN);

    if (sectionMatch) {
      const heading = sectionMatch[1];
      const body = sectionMatch[2] ?? "";
      const section: ParsedSection = { heading, paragraphs: [], bullets: [] };
      splitBlockContent(body, section);
      sections.push(section);
      continue;
    }

    const intro: ParsedSection = { paragraphs: [], bullets: [] };
    splitBlockContent(block, intro);
    if (intro.paragraphs.length > 0 || intro.bullets.length > 0) {
      sections.push(intro);
    }
  }

  return sections;
}

function splitBlockContent(text: string, section: ParsedSection) {
  const trimmed = text.trim();
  if (!trimmed) return;

  const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);

  if (lines.length === 0) {
    section.paragraphs.push(trimmed);
    return;
  }

  for (const line of lines) {
    const bulletMatch = line.match(/^[-*]\s*(.+)/);
    if (bulletMatch?.[1]) {
      section.bullets.push(bulletMatch[1]);
      continue;
    }

    const inlineParts = line.split(/\s+(?=[-*]\s)/);
    if (inlineParts.length > 1) {
      for (const part of inlineParts) {
        const inlineBullet = part.match(/^[-*]\s*(.+)/);
        if (inlineBullet?.[1]) {
          section.bullets.push(inlineBullet[1]);
        } else if (part.trim()) {
          section.paragraphs.push(part.trim());
        }
      }
      continue;
    }

    section.paragraphs.push(line);
  }
}

type CardDetailModalProps = {
  card: ProjectCard;
  onClose: () => void;
};

export default function CardDetailModal({ card, onClose }: CardDetailModalProps) {
  const { locale, t } = useLanguage();
  const content = card.fullDescription ?? card.description;
  const sections = useMemo(() => parseFullDescription(content), [content]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const modal = (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="card-detail-title"
    >
      <motion.div
        className={styles.modalCard}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        style={{ "--card-accent": card.color } as React.CSSProperties}
      >
          <div className={styles.modalHero}>
            <div className={styles.modalHeroImage}>
              <Image
                src={publicImagePath(card.src)}
                alt=""
                fill
                sizes="320px"
                className={styles.modalHeroImg}
                unoptimized
              />
            </div>
            <div className={styles.modalHeroContent}>
              <p className={styles.modalEyebrow}>{t("home.cardModal.eyebrow")}</p>
              <h3 id="card-detail-title" className={styles.modalTitle}>
                {card.title}
              </h3>
              <p className={styles.modalLead}>{card.description}</p>
            </div>
            <button
              type="button"
              className={styles.modalClose}
              onClick={onClose}
              aria-label={t("home.cardModal.closeLabel")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className={styles.modalBody}>
            {sections.map((section, index) => (
              <section
                key={`${section.heading ?? "intro"}-${index}`}
                className={
                  section.heading ? styles.modalSection : styles.modalSectionIntro
                }
              >
                {section.heading ? (
                  <h4 className={styles.modalSectionTitle}>
                    {translateCardSectionHeading(locale, section.heading)}
                  </h4>
                ) : null}

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className={styles.modalParagraph}>
                    {paragraph}
                  </p>
                ))}

                {section.bullets.length > 0 ? (
                  <ul className={styles.modalList}>
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className={styles.modalListItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {card.storeLinks ? (
            <div className={styles.modalFooter}>
              <p className={styles.modalFooterLabel}>{t("home.cardModal.availableOn")}</p>
              <div className={styles.modalStoreBadges}>
                <Link
                  href={card.storeLinks.googlePlay}
                  className={styles.storeBadge}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/gpaly.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={45}
                    className={styles.storeBadgeImg}
                  />
                </Link>
                <Link
                  href={card.storeLinks.appStore}
                  className={styles.storeBadge}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={150}
                    height={45}
                    className={styles.storeBadgeImg}
                  />
                </Link>
              </div>
            </div>
          ) : null}
        </motion.div>
      </motion.div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
}
