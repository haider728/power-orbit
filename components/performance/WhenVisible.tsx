"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";

type WhenVisibleProps<P extends object> = {
  load: () => Promise<{ default: ComponentType<P> }>;
  minHeight?: number;
  rootMargin?: string;
  className?: string;
  style?: CSSProperties;
  componentProps?: P;
};

/** Loads a client chunk only when the placeholder nears the viewport. */
export default function WhenVisible<P extends object = Record<string, never>>({
  load,
  minHeight = 480,
  rootMargin = "280px 0px",
  className,
  style,
  componentProps,
}: WhenVisibleProps<P>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [Comp, setComp] = useState<ComponentType<P> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || Comp) return;

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        void load().then((mod) => {
          if (!cancelled) setComp(() => mod.default);
        });
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [Comp, load, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={Comp ? style : { minHeight, ...style }}
    >
      {Comp ? <Comp {...(componentProps as P)} /> : null}
    </div>
  );
}
