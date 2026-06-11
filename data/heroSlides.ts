import { cards } from "@/data/cards";
import { publicImagePath } from "@/lib/publicImage";

/** Hero carousel visuals — keep in sync with `data/cards.ts` image files. */
export const HERO_SLIDE_IMAGES = [
  {
    src: publicImagePath(cards[0]!.src),
    alt: "Eagle-IoT fleet intelligence platform",
  },
  {
    src: publicImagePath(cards[1]!.src),
    alt: "SmartSense connected asset intelligence",
  },
  {
    src: publicImagePath(cards[2]!.src),
    alt: "Power Orbit integrated mobility applications",
  },
] as const;
