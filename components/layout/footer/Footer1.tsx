"use client";

import Link from "next/link";
import Image from "next/image";
import SectionScrollLink from "@/components/layout/SectionScrollLink";
import XIcon from "@/components/elements/XIcon";
import { BLOG_EXTERNAL_URL } from "@/data/onepageNav";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer1() {
  const { t, isArabic } = useLanguage();
  const textDir = isArabic ? "rtl" : "ltr";

  return (
    <footer className="site-footer-two" dir={textDir}>
      <div className="site-footer-two__shape-1"></div>
      <div className="site-footer-two__shape-2"></div>
      <div className="site-footer-two__shape-3"></div>
      <div className="site-footer-two__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="site-footer-two__about">
                <div className="site-footer-two__logo">
                  <SectionScrollLink sectionId="#home">
                    <Image
                      src="/assets/images/resources/footer-logo.gif"
                      alt="Power Orbit"
                      width={320}
                      height={62}
                      priority
                      unoptimized
                      className="site-logo"
                    />
                  </SectionScrollLink>
                </div>
                <ul className="list-unstyled site-footer-two__contact-list">
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-contact"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        {t("siteFooter.contactInfo")}
                      </h5>
                      <p className="site-footer-two__contact-info">
                        <Link
                          href="mailto:info@eagle-iot.com"
                          className="site-footer-two__contact-mail"
                        >
                          info@eagle-iot.com
                        </Link>
                        <Link
                          href="tel:+966533085658"
                          className="site-footer-two__contact-phone"
                          dir="ltr"
                        >
                          +966 53 308 5658
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="site-footer-two__contact-icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="site-footer-two__contact-content">
                      <h5 className="site-footer-two__contact-title">
                        {t("siteFooter.location")}
                      </h5>
                      <p className="site-footer-two__contact-info">
                        9523 King Khaled St, Al Tubayshi, EDGA2389, 2389, <br /> Dammam 32233,
                        Saudi Arabia
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp d-none d-md-block"
              data-wow-delay="200ms"
            >
              <div className="footer-widget-two__quick-links">
                <h4 className="footer-widget-two__title">{t("siteFooter.pages")}</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <SectionScrollLink sectionId="#home">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.home")}
                    </SectionScrollLink>
                  </li>
                  <li>
                    <SectionScrollLink sectionId="#about">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.aboutUs")}
                    </SectionScrollLink>
                  </li>
                  <li>
                    <Link href={BLOG_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.blogs")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp d-none d-md-block"
              data-wow-delay="400ms"
            >
              <div className="footer-widget-two__services">
                <h4 className="footer-widget-two__title">{t("siteFooter.ourServices")}</h4>
                <ul className="footer-widget-two__quick-links-list list-unstyled">
                  <li>
                    <Link href="">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.fleetManagement")}
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.assetManagement")}
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.coldChainManagement")}
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span className="icon-right-arrow-2"></span>
                      {t("siteFooter.videoTelematics")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer-two__bottom-inner">
                <div className="site-footer-two__copyright">
                  <p className="site-footer-two__copyright-text">
                    ⓒ Copyright {new Date().getFullYear()}{" "}
                    <SectionScrollLink sectionId="#home">Power Orbit</SectionScrollLink>{" "}
                    {t("siteFooter.allRightsReserved")}
                  </p>
                </div>
                <div className="site-footer-two__social-box">
                  <h4 className="site-footer-two__social-title">{t("siteFooter.followUs")}</h4>
                  <div className="site-footer-two__social-box-inner">
                    <Link
                      href="https://www.facebook.com/EagleIoT/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <span className="icon-facebook"></span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/powerorbit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <span className="fab fa-instagram"></span>
                    </Link>
                    <Link
                      href="https://x.com/power_orbit_"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <XIcon className="site-footer-two__social-icon-x" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/eagle-iot"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <span className="icon-linkedin"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
