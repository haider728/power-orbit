"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

type BlogItem = {
  id: number | string;
  slug?: string;
  title?: string;
  description?: string;
  image?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
  attributes?: {
    slug?: string;
    title?: string;
    description?: string;
    image?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
  };
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://apnabike.arhomeservices.com/api/articles?populate=*"
        );
        const data = await res.json();

        setBlogs(data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="blog-two" id="blog">
        <div className="container">
          <p>Loading blogs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-two" id="blog">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-xl-6">
            <div className="blog-two__left">

              <div className="section-title text-left">
                <span className="section-title__tagline">Our Blogs</span>

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
              {blogs.length > 0 && (() => {
                const primaryBlog = blogs[0];
                if (!primaryBlog) return null;

                const primaryImageUrl =
                  primaryBlog.attributes?.image?.data?.attributes?.url ??
                  primaryBlog.image?.data?.attributes?.url;
                const primarySlug = primaryBlog.slug ?? primaryBlog.attributes?.slug ?? "";
                const primaryTitle = primaryBlog.title ?? primaryBlog.attributes?.title ?? "";
                const primaryDescription = primaryBlog.description ?? primaryBlog.attributes?.description ?? "";

                return (
                  <div className="blog-two__single">
                    <div className="blog-two__img">
                      <Image
                        src={primaryImageUrl ? `https://apnabike.arhomeservices.com${primaryImageUrl}` : "/assets/images/blog/blog-2-1.jpg"}
                        alt="Image"
                        width={531}
                        height={257}
                      />
                    </div>

                    <div className="blog-two__content">
                      <h3 className="blog-two__title">
                        <Link href={`/blog/${primarySlug}`}>
                          {primaryTitle}
                        </Link>
                      </h3>

                      <p className="blog-two__text">
                        {primaryDescription.slice(0, 120)}
                      </p>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6">
            <div className="blog-two__right">

              {blogs.slice(1, 4).map((blog) => {
                const blogImageUrl =
                  blog.attributes?.image?.data?.attributes?.url ??
                  blog.image?.data?.attributes?.url;
                const blogSlug = blog.slug ?? blog.attributes?.slug ?? "";
                const blogTitle = blog.title ?? blog.attributes?.title ?? "";
                const blogDescription = blog.description ?? blog.attributes?.description ?? "";

                return (
                <div key={blog.id} className="blog-two__single-two">

                  <div className="blog-two__img-two">
                    <Image
                      src={
                        blogImageUrl
                          ? `https://apnabike.arhomeservices.com${blogImageUrl}`
                          : "/assets/images/blog/blog-2-2.jpg"
                      }
                      alt="Image"
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="blog-two__content-two">

                    <h3 className="blog-two__title-two">
                      <Link href={`/blog/${blogSlug}`}>
                        {blogTitle}
                      </Link>
                    </h3>

                    <p className="blog-two__text">
                      {blogDescription.slice(0, 80)}
                    </p>

                  </div>

                </div>
              )})}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}