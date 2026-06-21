"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import type { AvlBlogListItem } from "@/lib/avlBlogs";
import BlogCoverImage from "@/components/sections/home1/BlogCoverImage";
import styles from "@/components/sections/home1/blog-carousel.module.css";

const EXCERPT_LENGTH = 160;
const FALLBACK_IMAGE = "/assets/images/blog/blog-2-1.jpg";

function excerpt(text: string, max = EXCERPT_LENGTH): string {
  const plain = text.trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max).trim()}…`;
}

function BlogArticleBody({ content }: { content: string }) {
  const raw = typeof content === "string" ? content : String(content ?? "");
  if (!raw.trim()) return null;
  const looksLikeHtml = /<[a-z][\s\S]*>/i.test(raw);
  if (looksLikeHtml) {
    return (
      <div
        className="blog-inline-detail__body blog-inline-detail__body--html"
        dangerouslySetInnerHTML={{ __html: raw }}
      />
    );
  }
  return (
    <div className="blog-inline-detail__body blog-inline-detail__body--text">
      {raw.split(/\n\n+/).map((block, i) => (
        <p key={i}>{block.trim()}</p>
      ))}
    </div>
  );
}

function BlogCard({
  blog,
  coverUrl,
  onSelect,
}: {
  blog: AvlBlogListItem;
  coverUrl: (blog: AvlBlogListItem) => string;
  onSelect: (blog: AvlBlogListItem) => void;
}) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.cardHitbox}
        onClick={() => onSelect(blog)}
        aria-label={`Read full article: ${blog.Title}`}
      />
      <BlogCoverImage src={coverUrl(blog)} alt={blog.Title} />
      <div className={styles.body}>
        <h3 className={styles.title}>{blog.Title}</h3>
        <p className={styles.excerpt}>{excerpt(blog.content || "")}</p>
      </div>
    </article>
  );
}

export default function Blog() {
  const { locale, t } = useLanguage();
  const blogCopy = translations[locale].home.blog;
  const navId = useId().replace(/:/g, "");
  const prevClass = `blog-carousel-prev-${navId}`;
  const nextClass = `blog-carousel-next-${navId}`;

  const [blogs, setBlogs] = useState<AvlBlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<AvlBlogListItem | null>(null);
  const [detailContent, setDetailContent] = useState<string>("");
  const [detailLoading, setDetailLoading] = useState(false);

  const closeDetail = useCallback(() => {
    setSelectedBlog(null);
    setDetailContent("");
  }, []);

  useEffect(() => {
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
  }, [locale]);

  useEffect(() => {
    if (!selectedBlog) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetail();
    };
    window.addEventListener("keydown", onKey);

    const loadDetail = async () => {
      setDetailLoading(true);
      setDetailContent("");
      try {
        const res = await fetch(`/api/avl-blogs/${selectedBlog.id}`);
        if (res.ok) {
          const json = await res.json();
          setDetailContent(json.data?.fullContent || selectedBlog.content);
          return;
        }
        const { fetchAvlBlogDetailClient } = await import("@/lib/avlBlogsClient");
        const detail = await fetchAvlBlogDetailClient(selectedBlog.id);
        setDetailContent(detail?.fullContent || selectedBlog.content);
      } catch {
        try {
          const { fetchAvlBlogDetailClient } = await import("@/lib/avlBlogsClient");
          const detail = await fetchAvlBlogDetailClient(selectedBlog.id);
          setDetailContent(detail?.fullContent || selectedBlog.content);
        } catch {
          setDetailContent(selectedBlog.content);
        }
      } finally {
        setDetailLoading(false);
      }
    };
    loadDetail();

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedBlog, closeDetail]);

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
            {blogCopy.intro}{" "}
            <Link href="https://avl-ksa.com/en/blogs/" target="_blank" rel="noopener noreferrer">
              {blogCopy.introLink}
            </Link>
            .
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
                  <BlogCard blog={blog} coverUrl={coverUrl} onSelect={setSelectedBlog} />
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
                <BlogCard blog={blog} coverUrl={coverUrl} onSelect={setSelectedBlog} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedBlog && (
        <div
          className="blog-inline-detail"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-inline-detail-title"
        >
          <button
            type="button"
            className="blog-inline-detail__backdrop"
            aria-label="Close article"
            onClick={closeDetail}
          />
          <div className="blog-inline-detail__panel">
            <button
              type="button"
              className="blog-inline-detail__close"
              onClick={closeDetail}
              aria-label="Close"
            >
              ×
            </button>

            <div className="blog-inline-detail__scroll">
              <div className="blog-inline-detail__img-wrap">
                <Image
                  src={coverUrl(selectedBlog)}
                  alt={selectedBlog.Title}
                  width={0}
                  height={0}
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="blog-inline-detail__img"
                  priority
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <h2 id="blog-inline-detail-title" className="blog-inline-detail__heading">
                {selectedBlog.Title}
              </h2>

              {detailLoading ? (
                <p className="blog-inline-detail__body--text">{blogCopy.loadingArticle}</p>
              ) : (
                <BlogArticleBody content={detailContent} />
              )}

              <p style={{ marginTop: "1.5rem" }}>
                <Link
                  href={selectedBlog.link}
                  className="thm-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blogCopy.readMore}
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
