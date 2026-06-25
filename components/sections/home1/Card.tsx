"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import type { ProjectCard } from "@/data/cards";
import { publicImagePath } from "@/lib/publicImage";
import MobileAppTiles from "@/components/sections/home1/MobileAppTiles";
import styles from "@/components/sections/home1/stacked-cards.module.css";

type CardProps = ProjectCard & {
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    seeMoreLabel: string;
    onSeeMore: () => void;
};

export default function Card({
    index,
    title,
    description,
    src,
    color,
    mobileApps,
    storeLinks,
    progress,
    range,
    targetScale,
    seeMoreLabel,
    onSeeMore,
}: CardProps) {
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
                        <p className={styles.description}>{description}</p>

                        {mobileApps && mobileApps.length > 0 ? (
                            <MobileAppTiles apps={mobileApps} />
                        ) : null}

                        <div className={styles.seeMoreWrap}>
                            <button
                                type="button"
                                className={`thm-btn ${styles.seeMoreBtn}`}
                                onClick={onSeeMore}
                            >
                                {seeMoreLabel}
                            </button>
                        </div>

                        {storeLinks ? (
                            <div className={styles.storeBadges}>
                                <Link
                                    href={storeLinks.googlePlay}
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
                                    href={storeLinks.appStore}
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
                        ) : null}
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
