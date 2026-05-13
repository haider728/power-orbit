"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const STRAPI_URL = "http://144.24.219.37:1337";

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type BlogItem = {
  id: number;
  Title: string;
  Slug: string;
  content: string;
  image?: {
    url?: string;
  };
};

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

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const closeDetail = useCallback(() => setSelectedBlog(null), []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
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

  if (loading) {
    return (
      <section className="blog-two">
        <div className="container">
          <p>Loading blogs...</p>
        </div>
      </section>
    );
  }

  const primaryBlog = blogs[0];

  const coverUrl = (blog: BlogItem) =>
    blog.image?.url
      ? `${STRAPI_URL}${blog.image.url}`
      : "/assets/images/blog/blog-2-1.jpg";

  return (
    <section className="blog-two" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="blog-two__left">
              <div className="section-title text-left">
                <AnimatedTitle>
                  <h2 className="section-title__title">
                    Explore Our Latest <span>Blogs</span>
                  </h2>
                </AnimatedTitle>
              </div>

              <p className="blog-two-text">
                Latest insights and updates from our articles.
              </p>

              {primaryBlog && (
                <div className="blog-two__single blog-two__single--clickable">
                  <button
                    type="button"
                    className="blog-two__card-hitbox"
                    onClick={() => setSelectedBlog(primaryBlog)}
                    aria-label={`Read full article: ${primaryBlog.Title}`}
                  />

                  <div className="blog-two__img">
                    <Image
                      src={coverUrl(primaryBlog)}
                      alt={primaryBlog.Title}
                      width={531}
                      height={257}
                    />
                  </div>

                  <div className="blog-two__content">
                    <h3 className="blog-two__title">{primaryBlog.Title}</h3>

                    <p className="blog-two__text">
                      {primaryBlog.content
                        ? `${primaryBlog.content.slice(0, 150)}`
                        : ""}
                      ...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="blog-two__right">
              {blogs.slice(1, 4).map((blog) => (
                <div key={blog.id} className="blog-two__single-two blog-two__single--clickable">
                  <button
                    type="button"
                    className="blog-two__card-hitbox"
                    onClick={() => setSelectedBlog(blog)}
                    aria-label={`Read full article: ${blog.Title}`}
                  />

                  <div className="blog-two__img-two">
                    <Image
                      src={coverUrl(blog)}
                      alt={blog.Title}
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="blog-two__content-two">
                    <h3 className="blog-two__title-two">{blog.Title}</h3>

                    <p className="blog-two__text">
                      {blog.content ? `${blog.content.slice(0, 80)}` : ""}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
