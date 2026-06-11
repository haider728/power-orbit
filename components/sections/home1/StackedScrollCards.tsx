"use client";

import { useScroll, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Card from "@/components/sections/home1/Card";
import CardDetailModal from "@/components/sections/home1/CardDetailModal";
import { cards, type ProjectCard } from "@/data/cards";
import styles from "@/components/sections/home1/stacked-cards.module.css";

export default function StackedScrollCards() {
    const containerRef = useRef<HTMLElement | null>(null);
    const [activeCard, setActiveCard] = useState<ProjectCard | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={containerRef} className={styles.main}>
            <div className="container">
                <div className={`section-title text-center sec-title-animation animation-style1 ${styles.sectionHeader}`}>
                    <div className="section-title__tagline-box">
                        {/* <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">Featured Work</span>
                        <div className="section-title__tagline-shape-2"></div> */}
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
                    onSeeMore={() => setActiveCard(card)}
                />
            ))}
            <AnimatePresence>
                {activeCard ? (
                    <CardDetailModal
                        key={activeCard.title}
                        card={activeCard}
                        onClose={() => setActiveCard(null)}
                    />
                ) : null}
            </AnimatePresence>
        </main>
    );
}
