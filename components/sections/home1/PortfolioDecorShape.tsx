"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioDecorShape() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  if (!show) return null;

  return (
    <Image
      src="/assets/images/shapes/portfolio-two-shape-1.png"
      alt=""
      width={783}
      height={1104}
      loading="lazy"
      sizes="400px"
    />
  );
}
