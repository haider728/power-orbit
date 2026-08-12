"use client";

import Link from "next/link";
import LanguageToggle from "../LanguageToggle";
import OnepageMobileMenu_One from "../OnepageMobileMenu_One";
import OnepageMenu_One from "../OnepageMenu_One";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SiteLogo from "@/components/elements/SiteLogo";
import { BarsIcon } from "@/components/elements/icons";

type Header2Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function Header2({ scroll, handleMobileMenu, handleSidebar }: Header2Props) {
  const { t } = useLanguage();

  return (
    <>
      <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
        <div className="main-menu-two__top">
          <div className="main-menu-two__top-inner">
            <p className="main-menu-two__top-text">
              Power Orbit formerly known as Digital Myth Solution
            </p>
            <ul className="list-unstyled main-menu-two__contact-list">
              <li>
                <div className="icon" />
                <div className="text" />
              </li>
              <li>
                <div className="icon">
                  <i className="icon-search-mail"></i>
                </div>
                <div className="text">
                  <p>
                    <Link href="mailto:example@domain.com">info@eagle-iot.com</Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call"></i>
                </div>
                <div className="text">
                  <p dir="ltr">
                    <Link href="tel:+966533085658">+966 53 308 5658</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link href="/">
                    <SiteLogo priority />
                  </Link>
                </div>
              </div>
              <div className="main-menu-two__main-menu-box">
                <Link
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={handleMobileMenu}
                  aria-label="Open menu"
                >
                  <BarsIcon className="mobile-nav__toggler-icon" />
                </Link>
                <OnepageMenu_One />
              </div>
              <div className="main-menu-two__right">
                <LanguageToggle variant="header" />
                <div className="main-menu-two__btn-box">
                  <Link href={t("externalLinks.contact")} className="thm-btn">
                    {t("nav.getInTouch")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className={`sticky-header main-menu main-menu-two ${scroll ? "animated slideInDown" : ""}`}>
          <div className="sticky-header__content">
            <div className="main-menu-two__wrapper">
              <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                  <div className="main-menu-two__logo">
                    <Link href="/">
                      <SiteLogo width={260} height={95} priority />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-two__main-menu-box">
                  <Link
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                    aria-label="Open menu"
                  >
                    <BarsIcon className="mobile-nav__toggler-icon" />
                  </Link>
                  <OnepageMenu_One />
                </div>
                <div className="main-menu-two__right">
                  <LanguageToggle variant="header" />
                  <div className="main-menu-two__btn-box">
                    <Link href={t("externalLinks.contact")} className="thm-btn">
                      {t("nav.getInTouch")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OnepageMobileMenu_One isSidebar={true} handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
