"use client";

import WhenVisible from "@/components/performance/WhenVisible";
import Choose from "@/components/sections/home1/Choose";
import type { AvlBlogListItem } from "@/lib/avlBlogs";

type HomeDeferredSectionsProps = {
  initialBlogsByLocale: Partial<Record<"en" | "ar", AvlBlogListItem[]>>;
};

const loadStacked = () => import("@/components/sections/home1/StackedScrollCardsLazy");
const loadLogos = () => import("@/components/sections/home1/LogoCarouselSection");
const loadTeam = () => import("@/components/sections/InnerSection/Team");
const loadProcess = () => import("@/components/sections/home1/Process");
const loadPortfolio = () => import("@/components/sections/home1/Portfolio");
const loadBlog = () => import("@/components/sections/home1/Blog");

/** Below-fold homepage islands — kept out of the initial JS/TBT window. */
export default function HomeDeferredSections({
  initialBlogsByLocale,
}: HomeDeferredSectionsProps) {
  return (
    <>
      <WhenVisible load={loadStacked} minHeight={720} />
      <WhenVisible load={loadLogos} minHeight={420} />
      <Choose />
      <WhenVisible load={loadTeam} minHeight={640} />
      <WhenVisible load={loadProcess} minHeight={720} />
      <WhenVisible load={loadPortfolio} minHeight={720} />
      <WhenVisible
        load={loadBlog}
        minHeight={560}
        componentProps={{ initialBlogsByLocale }}
      />
    </>
  );
}
