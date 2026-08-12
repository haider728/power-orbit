"use client";

import { useEffect } from "react";

const FA_HREF = "/assets/css/font-awesome-all.css";

export default function DeferredFontAwesome() {
  useEffect(() => {
    // Touch devices are more sensitive to layout shifts from late CSS injection.
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (document.querySelector(`link[href="${FA_HREF}"]`)) return;

    const load = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FA_HREF;
      document.head.appendChild(link);
    };

    const win = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    // Mobile/touch: load immediately to keep layout stable (better CLS).
    if (!finePointer) {
      load();
      return;
    }

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(load, { timeout: 3000 });
      return () => win.cancelIdleCallback?.(id);
    }

    const timer = setTimeout(load, 1500);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
