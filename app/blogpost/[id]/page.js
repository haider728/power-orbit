import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/sections/home1/Newsletter";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

async function getArticles() {
    const res = await fetch(
        "https://power-orbit-omega.vercel.app/api/articles?populate=*",
        { cache: "no-store" }
    );

    const json = await res.json();
    return json.data;
}

export default async function BlogPage() {

    const articles = await getArticles();

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">

            <section className="blog-page">
                <div className="container">

                    <AnimatedTitle>
                        <h2>Latest Blogs</h2>
                    </AnimatedTitle>

                    <div className="row">

                        {articles?.map((data) => (

                            <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">

                                <div className="blog-one__single">

                                    {/* IMAGE */}
                                    <div className="blog-one__img">
                                        <Image
                                            src={
                                                data.cover?.data?.attributes?.url
                                                    ? `https://power-orbit-omega.vercel.app${data.cover.data.url}`
                                                    : "/assets/images/blog/blog-page-1-1.jpg"
                                            }
                                            alt="blog"
                                            width={410}
                                            height={248}
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="blog-one__content">

                                        <h3 className="blog-one__title">
                                            <Link href={`/blogpost/${data.documentId}`}>
                                                {data.title}
                                            </Link>
                                        </h3>

                                        <p className="blog-one__text">
                                            {data.description?.slice(0, 120)}
                                        </p>

                                        <div className="blog-one__btn-box">
                                            <Link
                                                href={`/blogpost/${data.documentId}`}
                                                className="thm-btn"
                                            >
                                                Read More
                                            </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <Newsletter />

        </Layout>
    );
}