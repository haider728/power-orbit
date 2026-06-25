"use client";

import { useId, useMemo, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import PortfolioDecorShape from "@/components/sections/home1/PortfolioDecorShape";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import blogStyles from "@/components/sections/home1/blog-carousel.module.css";
import BlogCoverImage from "@/components/sections/home1/BlogCoverImage";
import styles from "@/components/sections/home1/portfolio-industries.module.css";
import "@/lib/swiper-styles";

const desktopSwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-prev",
    prevEl: ".swiper-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

function chunkItems<T>(items: readonly T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size) as T[]);
  }
  return chunks;
}

type IndustryItem = {
  title: string;
  description: string;
  href: string;
  bg: string;
};

function IndustryTile({
  item,
  indexOffset,
  activeIndex,
  setActiveIndex,
}: {
  item: IndustryItem;
  indexOffset: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  const tileIndex = indexOffset;

  return (
    <li
      className={activeIndex === tileIndex ? "active" : ""}
      onMouseEnter={() => setActiveIndex(tileIndex)}
      onFocus={() => setActiveIndex(tileIndex)}
      onClick={() => setActiveIndex(tileIndex)}
    >
      <div className="portfolio-two__box-content">
        <div
          className="single-portfolio-two__bg"
          style={{ backgroundImage: `url(${item.bg})` }}
        />
        <div className="portfolio-two__title">
          <h3>
            <Link href={item.href}>{item.title}</Link>
          </h3>
        </div>
        <div className="portfolio-two__content-box">
          <div className="portfolio-two__icon">
            <Link href={item.href} className="img-popup">
              <span className="icon-right-arrow-1"></span>
            </Link>
          </div>
          <div className="portfolio-two__title-box">
            <h3 className="portfolio-two__title-2">
              <Link href={item.href}>{item.title}</Link>
            </h3>
            <p className="portfolio-two__text">{item.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

function IndustryMobileCard({ item }: { item: IndustryItem }) {
  return (
    <article className={blogStyles.card}>
      <Link
        href={item.href}
        className={blogStyles.cardLink}
        aria-label={item.title}
        target="_blank"
        rel="noopener noreferrer"
      />
      <BlogCoverImage src={item.bg} alt={item.title} />
      <div className={blogStyles.body}>
        <h3 className={blogStyles.title}>{item.title}</h3>
        <p className={blogStyles.excerpt}>{item.description}</p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const { locale, t } = useLanguage();
  const industries = translations[locale].home.industries;
  const slides = useMemo(
    () => chunkItems(industries.items, 4),
    [industries.items]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const navId = useId().replace(/:/g, "");
  const prevClass = `industries-carousel-prev-${navId}`;
  const nextClass = `industries-carousel-next-${navId}`;

  return (
    <section className="portfolio-two" id="portfolio">
      <div className="portfolio-two__shape-1 float-bob-y">
        <PortfolioDecorShape />
      </div>
      <div className="portfolio-two__shape-2"></div>
      <div className="portfolio-two__shape-3"></div>
      <div className="portfolio-two__shape-4"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box" />
          <AnimatedTitle>
            <h2 className="section-title__title title-animation">
              {t("home.industries.title")}{" "}
              <span>{t("home.industries.titleHighlight")}</span>
            </h2>
          </AnimatedTitle>
          <p className="portfolio-two__top-text">{industries.subtitle}</p>
        </div>

        <div className={styles.mobileCarousel}>
          <div className={blogStyles.carouselWrap}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              loop={industries.items.length > 1}
              navigation={{
                prevEl: `.${prevClass}`,
                nextEl: `.${nextClass}`,
              }}
              className="blog-carousel-swiper"
            >
              {industries.items.map((item) => (
                <SwiperSlide key={item.title}>
                  <IndustryMobileCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={blogStyles.nav}>
              <button
                type="button"
                className={`${blogStyles.navBtn} ${prevClass}`}
                aria-label="Previous industry"
              >
                ←
              </button>
              <button
                type="button"
                className={`${blogStyles.navBtn} ${nextClass}`}
                aria-label="Next industry"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className={`portfolio-two__carousel-container ${styles.desktopCarousel}`}>
          <Swiper key={locale} {...desktopSwiperOptions} className="portfolio-two__carousel">
            {slides.map((group, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="item">
                  <div className="portfolio-two__single-box">
                    <ul className="portfolio-two__box list-unstyled">
                      {group.map((item, itemIndex) => (
                        <IndustryTile
                          key={item.title}
                          item={item}
                          indexOffset={slideIndex * 4 + itemIndex}
                          activeIndex={activeIndex}
                          setActiveIndex={setActiveIndex}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            <div className="swiper-nav">
              <div className="swiper-prev">
                <span className="icon-right-up"></span>
              </div>
              <div className="swiper-next">
                <span className="icon-right-up"></span>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
