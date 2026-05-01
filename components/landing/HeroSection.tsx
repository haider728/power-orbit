"use client";

import { motion, type MotionValue } from "framer-motion";

type HeroSectionProps = {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
};

export default function HeroSection({ opacity, scale }: HeroSectionProps) {
  return (
    <motion.section
      style={{ opacity, scale }}
      className="sticky top-0 flex h-screen items-center justify-center bg-gradient-to-b from-black via-[#0b0b12] to-[#12121f]"
    >
      <h1 className="px-4 text-center text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
        Power Of
      </h1>
    </motion.section>
  );
}
