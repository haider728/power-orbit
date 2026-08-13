import { preload } from "react-dom";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import SlideingText from "@/components/sections/home1/SlideingText";
import About from "@/components/sections/home1/About";
import TrustedBySection from "@/components/sections/home1/TrustedBySection";
import HomeDeferredSections from "@/components/sections/home1/HomeDeferredSections";
import { fetchAvlBlogList } from "@/lib/avlBlogsServer";
import type { AvlBlogListItem } from "@/lib/avlBlogs";
import { HERO_SLIDE_IMAGES } from "@/data/heroSlides";

export default async function Home_OnePage() {
  preload(HERO_SLIDE_IMAGES[0].src, { as: "image", fetchPriority: "high" });

  let initialBlogsByLocale: Partial<Record<"en" | "ar", AvlBlogListItem[]>> = {};

  try {
    const [en, ar] = await Promise.all([
      fetchAvlBlogList("en", 12),
      fetchAvlBlogList("ar", 12),
    ]);
    initialBlogsByLocale = { en, ar };
  } catch {
    /* Blog client will fetch via API */
  }

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner />
      <SlideingText />
      <About />
      <TrustedBySection />
      <HomeDeferredSections initialBlogsByLocale={initialBlogsByLocale} />
    </Layout>
  );
}
