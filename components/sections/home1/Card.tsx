"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import type { ProjectCard } from "@/data/cards";
import MobileAppTiles from "@/components/sections/home1/MobileAppTiles";
import styles from "@/components/sections/home1/stacked-cards.module.css";

type CardProps = ProjectCard & {
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    onSeeMore: (title: string, content: string) => void;
};

export default function Card({
    index,
    title,
    description,
    src,
    color,
    fullDescription,
    mobileApps,
    progress,
    range,
    targetScale,
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

                        <span className={styles.linkWrap}>
                            <button
                                type="button"
                                className={styles.linkButton}
                                onClick={() => onSeeMore(title, fullDescription ?? description)}
                            >
                                See more
                            </button>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor" />
                            </svg>
                        </span>
                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div className={styles.inner} style={{ scale: imageScale }}>
                            <Image
                                src={`/images/${src}`}
                                alt="image"
                                fill
                                sizes="(max-width: 991px) 100vw, 60vw"
                                className={styles.image}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
}
