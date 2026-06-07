"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll to URL hash when landing on the home page (e.g. footer link from another route). */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    requestAnimationFrame(scrollToHash);
  }, [pathname]);

  return null;
}
