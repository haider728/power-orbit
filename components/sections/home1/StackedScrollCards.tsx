"use client";

import { useScroll, AnimatePresence } from "framer-motion";
import { useMemo, useState, useRef } from "react";
import Card from "@/components/sections/home1/Card";
import CardDetailModal from "@/components/sections/home1/CardDetailModal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getCards } from "@/data/cardsByLocale";
import styles from "@/components/sections/home1/stacked-cards.module.css";

export default function StackedScrollCards() {
    const containerRef = useRef<HTMLElement | null>(null);
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const { locale, t } = useLanguage();
    const cards = useMemo(() => getCards(locale), [locale]);
    const activeCard = activeCardIndex != null ? cards[activeCardIndex] : null;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={containerRef} className={styles.main}>
            <div className="container">
                <div className={`section-title text-center sec-title-animation animation-style1 ${styles.sectionHeader}`}>
                    <div className="section-title__tagline-box" />
                    <h2 className="section-title__title title-animation">
                        {t("home.stackedCards.title")}{" "}
                        <span>{t("home.stackedCards.titleHighlight")}</span>
                    </h2>
                    <p className={styles.sectionDescription}>
                        {t("home.stackedCards.description")}
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
                    seeMoreLabel={t("home.cardActions.seeMore")}
                    onSeeMore={() => setActiveCardIndex(index)}
                />
            ))}
            <AnimatePresence>
                {activeCard ? (
                    <CardDetailModal
                        key={`${activeCard.title}-${locale}`}
                        card={activeCard}
                        onClose={() => setActiveCardIndex(null)}
                    />
                ) : null}
            </AnimatePresence>
        </main>
    );
}
