"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

type FooterStyle = 1 | 2;

export default function DeferredFooter({ style = 1 }: { style?: FooterStyle }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || Comp) return;

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const load =
          style === 2
            ? import("@/components/layout/footer/Footer2")
            : import("@/components/layout/footer/Footer1");
        void load.then((mod) => {
          if (!cancelled) setComp(() => mod.default);
        });
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [Comp, style]);

  return (
    <div ref={ref} style={Comp ? undefined : { minHeight: 420 }}>
      {Comp ? <Comp /> : <footer className="site-footer-two" aria-hidden="true" />}
    </div>
  );
}
