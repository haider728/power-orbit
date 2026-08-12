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
