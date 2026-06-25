"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  SITE_LOGO_ANIMATED_SRC,
  SITE_LOGO_POSTER_SRC,
} from "@/lib/site-assets";

type SiteLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function SiteLogo({
  width = 280,
  height = 54,
  priority = false,
  className = "site-logo",
}: SiteLogoProps) {
  const [src, setSrc] = useState(SITE_LOGO_POSTER_SRC);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const loadAnimated = () => {
      const animated = new window.Image();
      animated.decoding = "async";
      animated.src = SITE_LOGO_ANIMATED_SRC;
      animated.onload = () => {
        setSrc(SITE_LOGO_ANIMATED_SRC);
        setIsAnimated(true);
      };
    };

    const win = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(loadAnimated, { timeout: 4000 });
      return () => win.cancelIdleCallback?.(id);
    }

    const timer = setTimeout(loadAnimated, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Image
      src={src}
      alt="Power Orbit"
      width={width}
      height={height}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      unoptimized={isAnimated}
      className={className}
    />
  );
}
