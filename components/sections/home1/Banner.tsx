"use client";

import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";
import HeroVisual from "@/components/sections/home1/HeroVisual";
import styles from "@/components/sections/home1/banner.module.css";

const swiperOptions = {
  modules: [Autoplay, Navigation, EffectFade],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
};

export default function Banner() {
  const { locale, t } = useLanguage();
  const banner = translations[locale].home.banner;

  return (
    <section className="main-slider-two" id="home">
      <Swiper key={locale} {...swiperOptions} className="swiper-container thm-swiper__slider">
        <SwiperSlide>
          <div className="swiper-slide">
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
                      {t("home.banner.slide1.title")} <br />
                      {t("home.banner.slide1.titleMid")}
                      <br />
                      <span>{t("home.banner.slide1.titleHighlight")}</span>
                    </h2>
                    <p className="main-slider-two__text">{t("home.banner.slide1.text")}</p>
                    <div className="main-slider-two__btns-box">
                      <div className="main-slider-two__btn-box-1">
                        <Link href="https://avl-ksa.com/en/" className="thm-btn">
                          {t("home.banner.slide1.cta1")}
                        </Link>
                      </div>
                      <div className="main-slider-two__btn-box-2">
                        <Link href="/#ecosystem" className="thm-btn">
                          {t("home.banner.slide1.cta2")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.visualCol}>
                  <HeroVisual
                    imageSrc="/images/eagle.png"
                    imageAlt="Eagle-IoT fleet intelligence platform"
                    badges={banner.badges}
                    stats={banner.stats}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <div className="container">
              <div className={styles.heroRow}>
                <div className={styles.contentCol}>
                  <div className="main-slider-two__content">
                    <div className="main-slider-two__sub-title-box">
                      <p className="main-slider-two__sub-title">
                        {t("home.banner.slide2.subtitle")}
                      </p>
                    </div>
                    <h2 className="main-slider-two__title">
                      <span>{t("home.banner.slide2.titleLine1")}</span>
                      <br />
                      {t("home.banner.slide2.titleLine2")}
                      <br />
                      <span>{t("home.banner.slide2.titleLine3")}</span>
                    </h2>
                    <p className="main-slider-two__text">{t("home.banner.slide2.text")}</p>
                    <div className="main-slider-two__btns-box">
                      <div className="main-slider-two__btn-box-1">
                        <Link href="https://avl-ksa.com/en/" className="thm-btn">
                          {t("home.banner.slide2.cta1")}
                        </Link>
                      </div>
                      <div className="main-slider-two__btn-box-2">
                        <Link href="/#ecosystem" className="thm-btn">
                          {t("home.banner.slide2.cta2")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.visualCol}>
                  <HeroVisual
                    imageSrc="/images/smart.png"
                    imageAlt="SmartSense connected asset intelligence"
                    highlights={banner.highlights}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <div className="container">
              <div className={styles.heroRow}>
                <div className={styles.contentCol}>
                  <div className="main-slider-two__content">
                    <div className="main-slider-two__sub-title-box">
                      <p className="main-slider-two__sub-title">
                        {t("home.banner.slide3.subtitle")}
                      </p>
                    </div>
                    <h2 className="main-slider-two__title">
                      {t("home.banner.slide3.title")}{" "}
                      <span>{t("home.banner.slide3.titleHighlight")}</span>
                      <br />
                      {t("home.banner.slide3.titleEnd")}
                    </h2>
                    <p className="main-slider-two__text">{t("home.banner.slide3.text")}</p>
                    <div className="main-slider-two__btns-box">
                      <div className="main-slider-two__btn-box-1">
                        <Link href="https://avl-ksa.com/en/" className="thm-btn">
                          {t("home.banner.slide3.cta1")}
                        </Link>
                      </div>
                      <div className="main-slider-two__btn-box-2">
                        <Link href="/#ecosystem" className="thm-btn">
                          {t("home.banner.slide3.cta2")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.visualCol}>
                  <HeroVisual
                    imageSrc="/images/app.png"
                    imageAlt="Power Orbit integrated mobility applications"
                    badges={banner.badges}
                    stats={banner.stats}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="main-slider-two__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-next">
            <i className="icon-right-up"></i>
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-prev">
            <i className="icon-right-up"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
