import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import { fetchAvlBlogList } from "@/lib/avlBlogsServer";
import type { AvlBlogListItem } from "@/lib/avlBlogs";

const SlideingText = dynamic(() => import("@/components/sections/home1/SlideingText"));
const About = dynamic(() => import("@/components/sections/home1/About"));
const StackedScrollCards = dynamic(
  () => import("@/components/sections/home1/StackedScrollCardsLazy"),
);
const LogoCarouselSection = dynamic(
  () => import("@/components/sections/home1/LogoCarouselSection"),
);
const Choose = dynamic(() => import("@/components/sections/home1/Choose"));
const Team = dynamic(() => import("@/components/sections/InnerSection/Team"));
const Process = dynamic(() => import("@/components/sections/home1/Process"));
const Portfolio = dynamic(() => import("@/components/sections/home1/Portfolio"));
const Blog = dynamic(() => import("@/components/sections/home1/Blog"));

export default async function Home_OnePage() {
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
      <StackedScrollCards />
      <LogoCarouselSection />
      <Choose />
      <Team />
      <Process />
      <Portfolio />
      <Blog initialBlogsByLocale={initialBlogsByLocale} />
    </Layout>
  );
}
