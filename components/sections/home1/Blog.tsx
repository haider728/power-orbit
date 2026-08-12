"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import type { AvlBlogListItem } from "@/lib/avlBlogs";
import BlogCoverImage from "@/components/sections/home1/BlogCoverImage";
import styles from "@/components/sections/home1/blog-carousel.module.css";
import "@/lib/swiper-styles";

const FALLBACK_IMAGE = "/assets/images/resources/about-two-img-2.png";

function BlogCard({
  blog,
  coverUrl,
  readMore,
}: {
  blog: AvlBlogListItem;
  coverUrl: (blog: AvlBlogListItem) => string;
  readMore: string;
}) {
  return (
    <article className={styles.card}>
      <Link
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
        aria-label={blog.Title}
      >
        <BlogCoverImage src={coverUrl(blog)} alt={blog.Title} />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>{blog.Title}</h3>
        <Link
          href={blog.link}
          className={`thm-btn ${styles.cta}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {readMore}
        </Link>
      </div>
    </article>
  );
}

export default function Blog({
  initialBlogsByLocale,
}: {
  initialBlogsByLocale?: Partial<Record<"en" | "ar", AvlBlogListItem[]>>;
}) {
  const { locale, t } = useLanguage();
  const blogCopy = translations[locale].home.blog;
  const navId = useId().replace(/:/g, "");
  const prevClass = `blog-carousel-prev-${navId}`;
  const nextClass = `blog-carousel-next-${navId}`;

  const seeded = initialBlogsByLocale?.[locale] ?? [];
  const [blogs, setBlogs] = useState<AvlBlogListItem[]>(seeded);
  const [loading, setLoading] = useState(seeded.length === 0);

  useEffect(() => {
    const cached = initialBlogsByLocale?.[locale];
    if (cached && cached.length > 0) {
      setBlogs(cached);
      setLoading(false);
      return;
    }

    const fetchBlogs = async () => {
      setLoading(true);
      try {
        let items: AvlBlogListItem[] = [];

        const res = await fetch(`/api/avl-blogs?locale=${locale}`);
        const json = await res.json();
        items = json.data || [];

        if (items.length === 0) {
          const { fetchAvlBlogListClient } = await import("@/lib/avlBlogsClient");
          items = await fetchAvlBlogListClient(locale);
        }

        setBlogs(items);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        try {
          const { fetchAvlBlogListClient } = await import("@/lib/avlBlogsClient");
          const items = await fetchAvlBlogListClient(locale);
          setBlogs(items);
        } catch {
          setBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [locale, initialBlogsByLocale]);

  const coverUrl = (blog: AvlBlogListItem) => blog.image?.url || FALLBACK_IMAGE;
  const useCarousel = blogs.length > 3;

  if (loading) {
    return (
      <section className={`blog-two ${styles.section}`} id="blog">
        <div className="container">
          <p className={styles.loading}>{blogCopy.loading}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`blog-two ${styles.section}`} id="blog">
      <div className="container">
        <header className={styles.header}>
          <div className="section-title text-left">
            <AnimatedTitle>
              <h2 className="section-title__title">
                {t("home.blog.title")} <span>{t("home.blog.titleHighlight")}</span>
              </h2>
            </AnimatedTitle>
          </div>
          <p className={styles.intro}>
            {blogCopy.intro}
            {blogCopy.introLink ? (
              <>
                {" "}
                <Link href={t("externalLinks.blogs")} target="_blank" rel="noopener noreferrer">
                  {blogCopy.introLink}
                </Link>
                .
              </>
            ) : null}
          </p>
        </header>

        {blogs.length === 0 ? (
          <p className={styles.empty}>{blogCopy.empty}</p>
        ) : useCarousel ? (
          <div className={styles.carouselWrap}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              loop={blogs.length > 3}
              navigation={{
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
              }}
              breakpoints={{
                576: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1200: { slidesPerView: 3, spaceBetween: 28 },
              }}
              className="blog-carousel-swiper"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard blog={blog} coverUrl={coverUrl} readMore={blogCopy.readMore} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.nav}>
              <button type="button" className={`${styles.navBtn} ${prevClass}`} aria-label="Previous blog">
                ←
              </button>
              <button type="button" className={`${styles.navBtn} ${nextClass}`} aria-label="Next blog">
                →
              </button>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <BlogCard blog={blog} coverUrl={coverUrl} readMore={blogCopy.readMore} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
