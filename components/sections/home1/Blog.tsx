"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const STRAPI_URL = "http://144.24.219.37:1337";

// API Article type (based on your real response)
type BlogItem = {
  id: number;
  Title: string;
  Slug: string;
  content: string;
  image?: {
    url?: string;
  };
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/articles?populate=*`
        );

        const json = await res.json();

        // IMPORTANT: Strapi returns data inside "data"
        setBlogs(json.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

  return (
    <section className="blog-two" id="blog">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
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

              {/* MAIN BLOG */}
              {primaryBlog && (
                <div className="blog-two__single">

                  <div className="blog-two__img">

                    <Image
                      src={
                        primaryBlog.image?.url
                          ? `${STRAPI_URL}${primaryBlog.image.url}`
                          : "/assets/images/blog/blog-2-1.jpg"
                      }
                      alt={primaryBlog.Title}
                      width={531}
                      height={257}
                    />

                  </div>

                  <div className="blog-two__content">

                    <h3 className="blog-two__title">

                      <Link href={`/blog/${primaryBlog.Slug}`}>
                        {primaryBlog.Title}
                      </Link>

                    </h3>

                    <p className="blog-two__text">
                      {primaryBlog.content
                        ? primaryBlog.content.slice(0, 150)
                        : ""}
                      ...
                    </p>

                  </div>

                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6">
            <div className="blog-two__right">

              {blogs.slice(1, 4).map((blog) => (

                <div key={blog.id} className="blog-two__single-two">

                  <div className="blog-two__img-two">

                    <Image
                      src={
                        blog.image?.url
                          ? `${STRAPI_URL}${blog.image.url}`
                          : "/assets/images/blog/blog-2-2.jpg"
                      }
                      alt={blog.Title}
                      width={250}
                      height={250}
                    />

                  </div>

                  <div className="blog-two__content-two">

                    <h3 className="blog-two__title-two">

                      <Link href={`/blog/${blog.Slug}`}>
                        {blog.Title}
                      </Link>

                    </h3>

                    <p className="blog-two__text">
                      {blog.content
                        ? blog.content.slice(0, 80)
                        : ""}
                      ...
                    </p>

                  </div>

                </div>

              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}