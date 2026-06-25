"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SmoothScroll = dynamic(() => import("@/components/elements/SmoothScroll"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/elements/CustomCursor"), {
  ssr: false,
});

/** Desktop-only enhancements — skipped on touch devices and reduced-motion. */
export default function ClientEnhancements() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reducedMotion);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
    </>
  );
}
