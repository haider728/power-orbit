"use client";

import { useScroll } from "framer-motion";
import { useState, useRef } from "react";
import Card from "@/components/sections/home1/Card";
import { cards } from "@/data/cards";
import styles from "@/components/sections/home1/stacked-cards.module.css";

export default function StackedScrollCards() {
    const containerRef = useRef<HTMLElement | null>(null);
    const [activePopup, setActivePopup] = useState<{ title: string; content: string } | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={containerRef} className={styles.main}>
            <div className="container">
                <div className={`section-title text-center sec-title-animation animation-style1 ${styles.sectionHeader}`}>
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">Featured Work</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <h2 className="section-title__title title-animation">
                    A Unified Portfolio  <span> for Specialized Control</span> Cards
                    </h2>
                    <p className={styles.sectionDescription}>
                    Power Orbit does not offer a "one-size-fits-all" tool. We provide a modular ecosystem of specialized brands, each engineered to solve a specific set of operational challenges. Whether you are moving assets across the Kingdom or protecting sensitive cargo at rest, we provide the dedicated intelligence you need.

                    </p>
                </div>
            </div>
            {cards.map((card, index) => (
                <Card
                    key={`${card.title}-${index}`}
                    {...card}
                    index={index}
                    progress={scrollYProgress}
                    range={[index * 0.25, 1]}
                    targetScale={1 - (cards.length - index) * 0.05}
                    onSeeMore={(title, content) => setActivePopup({ title, content })}
                />
            ))}
            {activePopup && (
                <div className={styles.modalOverlay} onClick={() => setActivePopup(null)}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>{activePopup.title}</h3>
                            <button type="button" className={styles.modalClose} onClick={() => setActivePopup(null)}>
                                x
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <p>{activePopup.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
