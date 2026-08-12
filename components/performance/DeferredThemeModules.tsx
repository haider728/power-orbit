"use client";

import { useEffect } from "react";

const HREF = "/assets/css/style-deferred-modules.css";

/** Below-fold theme modules — after load + idle so they never block FCP/LCP. */
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

    const schedule = () => {
      if (win.requestIdleCallback) {
        const id = win.requestIdleCallback(load, { timeout: 4000 });
        return () => win.cancelIdleCallback?.(id);
      }
      const timer = window.setTimeout(load, 1500);
      return () => window.clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      return schedule();
    }

    let cleanupIdle: (() => void) | undefined;
    const onLoad = () => {
      cleanupIdle = schedule();
    };
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      cleanupIdle?.();
    };
  }, []);

  return null;
}
