"use client";

import { useEffect } from "react";

const FA_HREF = "/assets/css/font-awesome-all.css";

/** Load FA after first interaction or a long idle delay (avoids LCP/TBT contention). */
export default function DeferredFontAwesome() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FA_HREF}"]`)) return;

    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      cleanup();
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FA_HREF;
      document.head.appendChild(link);
    };

    const onInteract = () => load();
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, onInteract));
      window.clearTimeout(timer);
    };

    events.forEach((e) =>
      window.addEventListener(e, onInteract, { once: true, passive: true }),
    );
    const timer = window.setTimeout(load, 8000);

    return cleanup;
  }, []);

  return null;
}
