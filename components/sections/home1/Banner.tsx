'use client'
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
// import "swiper/css/effect-fade";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade", // 👈 enables fade transition
    fadeEffect: {
        crossFade: true, // smooth fade between slides
    },

    // Navigation
    navigation: {
        nextEl: '#main-slider__swiper-button-next',
        prevEl: '#main-slider__swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
  const { locale, t } = useLanguage();

  return (
    <>
        <section className="main-slider-two" id="home">
            <Swiper key={locale} {...swiperOptions} className="swiper-container thm-swiper__slider">
                <SwiperSlide>
                    <div className="swiper-slide">
                        {/* <ul className="list-unstyled main-slider-two__menu">
                            <li><Link href="/about">Help</Link></li>
                            <li><Link href="/contact">Support</Link></li>
                            <li><Link href="/faq">Faqs</Link></li>
                        </ul> */}
                        {/* <div className="main-slider-two__social-box">
                            <h4 className="main-slider-two__social-title">Follow Us:</h4>
                            <div className="main-slider-two__social-box-inner">
                                <Link href="/#"><span className="icon-facebook"></span></Link>
                                <Link href="/#"><span className="icon-dribble"></span></Link>

                                <Link href="/#"><span className="icon-linkedin"></span></Link>
                            </div>
                        </div> */}

                        {/* <div className="main-slider-two__shape-1"></div> */}
                        <div className="main-slider-two__shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                        </div>
                        <div className="main-slider-two__shape-3 float-bob-y">
                            <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <div className="main-slider-two__sub-title-box">
                                            {/* <div className="main-slider-two__sub-title-icon">
                                                <Image src="/assets/images/icon/main-slider-sub-title-icon.png" alt="icon" width={16} height={16} priority />
                                            </div> */}
                                            <p className="main-slider-two__sub-title">{t("home.banner.slide1.subtitle")}
                                            </p>
                                        </div>
                                        <h2 className="main-slider-two__title">
                                            {t("home.banner.slide1.title")} <br /> {t("home.banner.slide1.titleMid")}<br />
                                            <span> {t("home.banner.slide1.titleHighlight")} </span>
                                        </h2>
                                        <p className="main-slider-two__text"> {t("home.banner.slide1.text")} <br /></p>
                                        <div className="main-slider-two__btns-box">
                                            <div className="main-slider-two__btn-box-1">
                                                <Link href="https://avl-ksa.com/en/" className="thm-btn">{t("home.banner.slide1.cta1")}
                                                {/* <span
                                                        className="icon-right-arrow"></span> */}
                                                        </Link>
                                            </div>
                                            <div className="main-slider-two__btn-box-2">
                                                <Link href="/#ecosystem" className="thm-btn">{t("home.banner.slide1.cta2")}
                                                {/* <span
                                                        className="icon-right-arrow"></span> */}
                                                        </Link>
                                            </div>
                                        </div>
                                        {/* <div className="main-slider-two__shield-check-icon">
                                            <Image src="/assets/images/icon/main-slider-shield-check-icon.png" alt="shape" width={28} height={32} priority />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        {/* <ul className="list-unstyled main-slider-two__menu">
                            <li><Link href="/about">Help</Link></li>
                            <li><Link href="/contact">Support</Link></li>
                            <li><Link href="/faq">Faqs</Link></li>
                        </ul> */}
                        {/* <div className="main-slider-two__social-box">
                            <h4 className="main-slider-two__social-title">Follow Us:</h4>
                            <div className="main-slider-two__social-box-inner">
                                <Link href="/#"><span className="icon-facebook"></span></Link>
                                <Link href="/#"><span className="icon-dribble"></span></Link>

                                <Link href="/#"><span className="icon-linkedin"></span></Link>
                            </div>
                        </div> */}

                        {/* <div className="main-slider-two__shape-1"></div> */}
                        <div className="main-slider-two__shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                        </div>
                        <div className="main-slider-two__shape-3 float-bob-y">
                            <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <div className="main-slider-two__sub-title-box">
                                            {/* <div className="main-slider-two__sub-title-icon">
                                                <Image src="/assets/images/icon/main-slider-sub-title-icon.png" alt="icon" width={16} height={16} priority />
                                            </div> */}
                                            <p className="main-slider-two__sub-title">{t("home.banner.slide2.subtitle")}
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
                                                <Link href="https://avl-ksa.com/en/" className="thm-btn">{t("home.banner.slide2.cta1")}
                                                {/* <span
                                                        className="icon-right-arrow"></span> */}
                                                        </Link>
                                            </div>
                                            <div className="main-slider-two__btn-box-2">
                                                <Link href="/#ecosystem" className="thm-btn">{t("home.banner.slide2.cta2")}
                                                {/* <span
                                                        className="icon-right-arrow"></span> */}
                                                        </Link>
                                            </div>
                                        </div>
                                        {/* <div className="main-slider-two__shield-check-icon">
                                            <Image src="/assets/images/icon/main-slider-shield-check-icon.png" alt="shape" width={28} height={32} priority />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        {/* <ul className="list-unstyled main-slider-two__menu">
                            <li><Link href="/about">Help</Link></li>
                            <li><Link href="/contact">Support</Link></li>
                            <li><Link href="/faq">Faqs</Link></li>
                        </ul> */}
                        {/* <div className="main-slider-two__social-box">
                            <h4 className="main-slider-two__social-title">Follow Us:</h4>
                            <div className="main-slider-two__social-box-inner">
                                <Link href="/#"><span className="icon-facebook"></span></Link>
                                <Link href="/#"><span className="icon-dribble"></span></Link>

                                <Link href="/#"><span className="icon-linkedin"></span></Link>
                            </div>
                        </div> */}

                        {/* <div className="main-slider-two__shape-1"></div> */}
                        <div className="main-slider-two__shape-2 float-bob-x">
                            <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                        </div>
                        <div className="main-slider-two__shape-3 float-bob-y">
                            <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider-two__content">
                                        <div className="main-slider-two__sub-title-box">
                                            {/* <div className="main-slider-two__sub-title-icon">
                                                <Image src="/assets/images/icon/main-slider-sub-title-icon.png" alt="icon" width={16} height={16} priority />
                                            </div> */}
                                            <p className="main-slider-two__sub-title">IT Solutions Designed for Your Success
                                            </p>
                                        </div>
                                        <h2 className="main-slider-two__title">Power Orbit,  <span>formerly</span> <br />
                                            <span> Digital Myth Solutions (DMS),</span> <br />  is a Saudi technology company
                                        </h2>
                                        <p className="main-slider-two__text">delivering SFDA- and TGA-approved IoT and<br />
                                            telematics solutions for mission-critical <br /> operations.</p>
                                        <div className="main-slider-two__btns-box">
                                            <div className="main-slider-two__btn-box-1">
                                                <Link href="https://avl-ksa.com/en/" className="thm-btn">Visit Eagle-IoT Platform
                                                {/* <span
                                                        className="icon-right-arrow"></span> */}
                                                        </Link>
                                            </div>
                                            <div className="main-slider-two__btn-box-2">
                                                <Link href="/#ecosystem" className="thm-btn">Explore the Ecosystem
                                                {/* <span  className="icon-right-arrow"></span> */}
                                                </Link>
                                            </div>
                                        </div>
                                        {/* <div className="main-slider-two__shield-check-icon">
                                            <Image src="/assets/images/icon/main-slider-shield-check-icon.png" alt="shape" width={28} height={32} priority />
                                        </div> */}
                                    </div>
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
    </>
  )
}
