"use client";

import Image from "next/image";
import styles from "@/components/sections/home1/bottom-showcase.module.css";

export default function BottomShowcase() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.visualWrap}>
                    <Image
                        src="/assets/images/custom/footer-analytics-bg.png"
                        alt="Analytics style dark gradient showcase"
                        width={1024}
                        height={644}
                        className={styles.visual}
                        priority={false}
                    />
                </div>
            </div>
        </section>
    );
}
