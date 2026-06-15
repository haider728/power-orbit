"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/lib/i18n/translations";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".owl-prev",
    prevEl: ".owl-next",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 1, spaceBetween: 30 },
    767: { slidesPerView: 2, spaceBetween: 30 },
    991: { slidesPerView: 2, spaceBetween: 30 },
    1199: { slidesPerView: 3, spaceBetween: 30 },
    1350: { slidesPerView: 3, spaceBetween: 30 },
  },
};

export default function Team() {
  const { locale, t, isArabic } = useLanguage();
  const solutions = translations[locale].home.solutions;

  return (
    <section className="team-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="team-two__left">
              <div
                className={`section-title sec-title-animation animation-style2 ${isArabic ? "text-end" : "text-left"}`}
              >
                <div className="section-title__tagline-box" />
                <AnimatedTitle>
                  <h2
                    className="section-title__title title-animation"
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {t("home.solutions.title")}{" "}
                    <span>{t("home.solutions.titleHighlight")}</span>
                  </h2>
                </AnimatedTitle>
              </div>
              <p className="team-two__text" dir={isArabic ? "rtl" : "ltr"}>
                {solutions.intro}
              </p>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="team-two__right team-two__carousel">
              <Swiper key={locale} {...swiperOptions} className="team-two__carousel">
                {solutions.items.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="item">
                      <div className="team-two__single">
                        <div className="team-two__img-box">
                          <div className="team-two__img">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={410}
                              height={450}
                              priority
                            />
                          </div>
                          <div
                            className="team-two__title-box"
                            dir={isArabic ? "rtl" : "ltr"}
                          >
                            <h3>
                              <Link href={item.href}>{item.title}</Link>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="owl-nav">
                <div className="owl-prev">
                  <span className="icon-right-up"></span>
                </div>
                <div className="owl-next">
                  <span className="icon-right-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
