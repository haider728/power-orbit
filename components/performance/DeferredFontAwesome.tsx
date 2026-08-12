"use client";

import { useEffect } from "react";

const FA_HREF = "/assets/css/font-awesome-all.css";

export default function DeferredFontAwesome() {
  useEffect(() => {
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

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(load, { timeout: 4000 });
      return () => win.cancelIdleCallback?.(id);
    }

    const timer = window.setTimeout(load, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
