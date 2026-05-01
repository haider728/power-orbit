"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            lerp: 0.06,
            smoothWheel: true,
            wheelMultiplier: 0.9,
        });

        let rafId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
}
