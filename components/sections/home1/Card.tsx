"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import type { ProjectCard } from "@/data/cards";
import { publicImagePath } from "@/lib/publicImage";
import { useLanguage } from "@/components/providers/LanguageProvider";
import styles from "@/components/sections/home1/stacked-cards.module.css";

const PARENT_COMPANY_URL = "https://www.avl-ksa.com";

type CardProps = ProjectCard & {
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    onSeeMore: () => void;
};

export default function Card({
    index,
    title,
    description,
    src,
    color,
    progress,
    range,
    targetScale,
    onSeeMore,
}: CardProps) {
    const { t } = useLanguage();
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.article
                className={styles.card}
                style={{
                    backgroundColor: color,
                    scale,
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: "top",
                }}
            >
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.contentRow}>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>
                            {description}{" "}
                            <button
                                type="button"
                                className={styles.seeMoreLink}
                                onClick={onSeeMore}
                            >
                                {t("home.cardActions.seeMore")}
                            </button>
                        </p>

                        <div className={styles.parentCompanyWrap}>
                            <Link
                                href={PARENT_COMPANY_URL}
                                className={`thm-btn ${styles.parentCompanyBtn}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("home.cardActions.visitParentCompany")}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div className={styles.inner} style={{ scale: imageScale }}>
                            <Image
                                src={publicImagePath(src)}
                                alt="image"
                                fill
                                sizes="(max-width: 991px) 100vw, 60vw"
                                className={styles.image}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
}
