"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Choose() {
  const { t, isArabic } = useLanguage();

  return (
    <>
        <section className="why-choose-one" id="choose">
            <div className="why-choose-one__shape-3 float-bob-y">
                <Image src="/assets/images/shapes/why-choose-one-shape-3.png" alt="Shape" width={1022} height={751} priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="why-choose-one__left">
                            <div className={`section-title sec-title-animation animation-style2 ${isArabic ? "text-end" : "text-left"}`}>
                                <div className="section-title__tagline-box">
                                </div>
                                <AnimatedTitle>
                                    <h2
                                      className="section-title__title title-animation"
                                      dir={isArabic ? "rtl" : "ltr"}
                                    >
                                      {isArabic ? (
                                        <>
                                          {t("home.choose.titleLine1")}
                                          <br />
                                          <span>{t("home.choose.titleLine2")}</span>
                                        </>
                                      ) : (
                                        <>
                                          {t("home.choose.title")}
                                          <span>{t("home.choose.titleSpan1")}</span>
                                          <br />
                                          <span>{t("home.choose.titleSpan2")}</span>
                                        </>
                                      )}
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <p
                              className="why-choose-one__text why-choose-one__text-intro"
                              dir={isArabic ? "rtl" : "ltr"}
                            >
                            {t("home.choose.intro")}
                            </p>
                            {isArabic ? (
                              <p
                                className="why-choose-one__text why-choose-one__points-simple"
                                dir="rtl"
                              >
                                {t("home.choose.point1")}
                              </p>
                            ) : (
                              <ul className="why-choose-one__text why-choose-one__points-simple">
                                <li>{t("home.choose.point1")}</li>
                                <li>{t("home.choose.point2")}</li>
                              </ul>
                            )}
                            <div className="why-choose-one__btn-and-client-info">
                                <div className="why-choose-one__btn-box">
                                    <Link href={t("home.choose.aboutUsHref")} className="thm-btn">{t("home.choose.aboutUs")}
                                            </Link>
                                </div>
                                <div className="why-choose-one__client-box">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="why-choose-one__right wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="why-choose-one__img why-choose-one__img-card">
                                <Image
                                    src="/images/choose.png"
                                    alt="Fleet operations dashboard and compliance monitoring"
                                    width={670}
                                    height={470}
                                    className="why-choose-one__img-relatable"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
