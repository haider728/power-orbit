"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import BannerFirstSlide from "@/components/sections/home1/BannerFirstSlide";

// Load the full Swiper banner only after initial paint (performance win for LCP/TBT).
const BannerSwiper = dynamic(() => import("@/components/sections/home1/BannerSwiper"), {
  ssr: false,
});

export default function Banner() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    // Mobile/touch users are more sensitive to layout shifts.
    // Keep the fast static hero on coarse pointers, and only enable Swiper for desktop.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reducedMotion) {
      setShowSwiper(false);
      return;
    }

    // Prefer idle; fallback to a short timeout.
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(() => setShowSwiper(true), {
        timeout: 2500,
      });
    } else {
      timeoutId = window.setTimeout(() => setShowSwiper(true), 1500);
    }

    return () => {
      if (typeof idleId === "number") window.cancelIdleCallback?.(idleId);
      if (typeof timeoutId === "number") window.clearTimeout(timeoutId);
    };
  }, []);

  if (!showSwiper) return <BannerFirstSlide />;
  return <BannerSwiper />;
}
