"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import styles from "@/components/sections/home1/blog-carousel.module.css";

const STRAPI_PUBLIC_BASE =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "")) ||
  "http://144.24.219.37:1337";

const EXCERPT_LENGTH = 160;

type BlogItem = {
  id: number;
  Title: string;
  Slug: string;
  content: string;
  image?: {
    url?: string;
  };
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function excerpt(text: string, max = EXCERPT_LENGTH): string {
  const plain = stripHtml(text);
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
  blog: BlogItem;
  coverUrl: (blog: BlogItem) => string;
  onSelect: (blog: BlogItem) => void;
}) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.cardHitbox}
        onClick={() => onSelect(blog)}
        aria-label={`Read full article: ${blog.Title}`}
      />
      <div className={styles.imageWrap}>
        <Image
          src={coverUrl(blog)}
          alt={blog.Title}
          width={420}
          height={262}
          className={styles.image}
          unoptimized
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{blog.Title}</h3>
        <p className={styles.excerpt}>{excerpt(blog.content || "")}</p>
      </div>
    </article>
  );
}

export default function Blog() {
  const navId = useId().replace(/:/g, "");
  const prevClass = `blog-carousel-prev-${navId}`;
  const nextClass = `blog-carousel-next-${navId}`;

  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const closeDetail = useCallback(() => setSelectedBlog(null), []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/strapi/articles");
        const json = await res.json();
        setBlogs(json.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!selectedBlog) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetail();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedBlog, closeDetail]);

  const coverUrl = (blog: BlogItem) =>
    blog.image?.url
      ? `${STRAPI_PUBLIC_BASE}${blog.image.url}`
      : "/assets/images/blog/blog-2-1.jpg";

  const useCarousel = blogs.length > 3;

  if (loading) {
    return (
      <section className={`blog-two ${styles.section}`} id="blog">
        <div className="container">
          <p className={styles.loading}>Loading blogs…</p>
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
                Explore Our Latest <span>Blogs</span>
              </h2>
            </AnimatedTitle>
          </div>
          <p className={styles.intro}>Latest insights and updates from our articles.</p>
        </header>

        {blogs.length === 0 ? (
          <p className={styles.empty}>No blog posts published yet.</p>
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
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="blog-inline-detail__img"
                  priority
                  unoptimized
                />
              </div>

              <h2 id="blog-inline-detail-title" className="blog-inline-detail__heading">
                {selectedBlog.Title}
              </h2>

              <BlogArticleBody content={selectedBlog.content || ""} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
