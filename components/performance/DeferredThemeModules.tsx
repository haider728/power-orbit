"use client";

import { useEffect } from "react";

const HREF = "/assets/css/style-deferred-modules.css";

export default function DeferredThemeModules() {
  useEffect(() => {
    if (document.querySelector(`link[href="${HREF}"]`)) return;

    const load = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = HREF;
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

    const timer = setTimeout(load, 2000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
