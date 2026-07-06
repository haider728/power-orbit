"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import styles from "@/components/sections/home1/logo-carousel-section.module.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
};

const brands = [
  {
    src: "/assets/images/brand/logo (2).png",
    alt: "Saudi Food and Drug Authority (SFDA) official logo",
  },
  {
    src: "/assets/images/brand/logo (3).png",
    alt: "Communications, Space and Technology Commission (CST) logo, Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (4).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (6).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (7).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (8).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (9).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (10).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
  {
    src: "/assets/images/brand/logo (11).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  }, {
    src: "/assets/images/brand/logo (12).png",
    alt: "Transport General Authority (TGA) Saudi Arabia",
  },
];

export default function LogoCarouselSection() {
  const { locale, t } = useLanguage();
  const compliance = translations[locale].home.compliance;

  return (
    <section id="ecosystem" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-title text-center">
            <h2 className="section-title__title">
              {t("home.compliance.title")}{" "}
              <span>{t("home.compliance.titleHighlight")}</span>
            </h2>
          </div>
          <p className={styles.description}>{compliance.description}</p>
        </div>

        <div className={styles.carouselWrap}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2300}
            arrows={false}
            showDots={false}
            containerClass={styles.carouselContainer}
            itemClass={styles.carouselItem}
          >
            {brands.map((brand, i) => (
              <div key={brand.src + i} className={styles.logoCard}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={40}
                  className={styles.logo}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.header}>
        <p className={styles.description}>
          <b>{compliance.footer}</b>
        </p>
      </div>
    </section>
  );
}
