import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/sections/home1/Newsletter";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

type Article = {
    id: number | string;
    documentId?: string;
    title?: string;
    description?: string;
    image?: {
        url?: string;
        data?: {
            attributes?: {
                url?: string;
            };
        };
    };
};

async function getArticles() {
    const res = await fetch(
        "https://apnabike.arhomeservices.com/api/articles?populate=*",
        { cache: "no-store" }
    );

    const json = await res.json();

    console.log("STRAPI RESPONSE:", json);

    return (json.data ?? []) as Article[];
}

export default async function BlogPage() {
    const articles = await getArticles();

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">

            <section className="blog-page">
                <div className="container">

                    <div className="section-title text-center">
                        <AnimatedTitle>
                            <h2>Latest Blogs</h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row">

                        {articles?.map((data: Article) => {

                            // ✅ STRAPI V5 SAFE IMAGE HANDLING
                            const imageUrl =
                                data?.image?.url
                                    ? `https://apnabike.arhomeservices.com${data.image.url}`
                                    : data?.image?.data?.attributes?.url
                                    ? `https://apnabike.arhomeservices.com${data.image.data.attributes.url}`
                                    : null;

                            return (
                                <div key={data.id} className="col-xl-4 col-lg-6 col-md-6">

                                    <div className="blog-one__single">

                                        {/* IMAGE */}
                                        {imageUrl && (
                                            <div className="blog-one__img">
                                                <Image
                                                    src={imageUrl}
                                                    alt={data.title || "blog image"}
                                                    width={410}
                                                    height={248}
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        )}

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
                            );
                        })}

                    </div>

                </div>
            </section>

            <Newsletter />

        </Layout>
    );
}