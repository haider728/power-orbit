"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChooseDecorShape() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  if (!show) return null;

  return (
    <Image
      src="/assets/images/shapes/why-choose-one-shape-3.png"
      alt=""
      width={1022}
      height={751}
      loading="lazy"
      sizes="400px"
      aria-hidden
    />
  );
}
