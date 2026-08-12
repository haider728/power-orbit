"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import HeroVisual from "@/components/sections/home1/HeroVisual";
import styles from "@/components/sections/home1/banner.module.css";
import { HERO_SLIDE_IMAGES } from "@/data/heroSlides";

/** Static first hero slide — no Swiper JS for faster mobile LCP/TBT. */
export default function BannerFirstSlide() {
  const { locale, t } = useLanguage();
  const banner = translations[locale].home.banner;

  return (
    <section className="main-slider-two" id="home">
      <div className="swiper-container thm-swiper__slider">
        <div className="swiper-slide swiper-slide-active">
          <div className="container">
            <div className={styles.heroRow}>
              <div className={styles.contentCol}>
                <div className="main-slider-two__content">
                  <div className="main-slider-two__sub-title-box">
                    <p className="main-slider-two__sub-title">
                      {t("home.banner.slide1.subtitle")}
                    </p>
                  </div>
                  <h2 className="main-slider-two__title">
                    {t("home.banner.slide1.title")}{" "}
                    <span>{t("home.banner.slide1.titleHighlight")}</span>
                  </h2>
                  <p className="main-slider-two__text">{t("home.banner.slide1.text")}</p>
                  <div className="main-slider-two__btns-box">
                    <div className="main-slider-two__btn-box-1">
                      <Link href={t("home.banner.slide1.cta1Href")} className="thm-btn">
                        {t("home.banner.slide1.cta1")}
                      </Link>
                    </div>
                    <div className="main-slider-two__btn-box-2">
                      <Link href={t("home.banner.slide1.cta2Href")} className="thm-btn">
                        {t("home.banner.slide1.cta2")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.visualCol}>
                <HeroVisual
                  imageSrc={HERO_SLIDE_IMAGES[0].src}
                  imageAlt={HERO_SLIDE_IMAGES[0].alt}
                  badges={banner.badges}
                  stats={banner.stats}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
