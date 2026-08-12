"use client";

import { useState } from "react";
import Link from "next/link";
import SiteLogo from "@/components/elements/SiteLogo";
import {
  TimesIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@/components/elements/icons";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { getOnepageNavOne } from "@/data/onepageNav";

type OnepageMobileMenu_OneProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function OnepageMobileMenu_One({ isSidebar, handleMobileMenu }: OnepageMobileMenu_OneProps) {
  const { t, locale } = useLanguage();
  const sections = getOnepageNavOne(locale);
  const [currentSection, setCurrentSection] = useState<string>("");

  // Smooth scroll handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(id); // update current section on click
      handleMobileMenu(); // close mobile menu after click
    }
  };

  return (
    <div className={`mobile-nav__wrapper ${isSidebar ? "expanded" : ""}`}>
      {/* Overlay */}
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={handleMobileMenu}
      />

      {/* Mobile Menu Content */}
      <div className="mobile-nav__content">
        {/* Close Button */}
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={handleMobileMenu}
        >
          <TimesIcon className="mobile-nav__close-icon" />
        </span>

        {/* Logo */}
        <div className="logo-box">
          <Link href="/" onClick={handleMobileMenu} aria-label="logo image">
            <SiteLogo width={260} height={95} />
          </Link>
        </div>

        <div className="mobile-nav__lang">
          <LanguageToggle variant="mobile" />
        </div>

        {/* Navigation */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {sections.map((section) => {
              const key = section.id ?? section.href ?? section.labelKey;

              if (section.href) {
                return (
                  <li key={key}>
                    <Link
                      href={section.href}
                      onClick={handleMobileMenu}
                      {...(section.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {t(section.labelKey)}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={key}
                  className={`scrollToLink ${currentSection === section.id ? "current" : ""}`}
                >
                  <Link href={section.id!} onClick={(e) => handleClick(e, section.id!)}>
                    {t(section.labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Info */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <EnvelopeIcon className="mobile-nav__contact-icon" />
            <Link href="mailto:info@eagle-iot.com">info@eagle-iot.com</Link>
          </li>
          <li>
            <PhoneIcon className="mobile-nav__contact-icon" />
            <Link href="tel:+966533085658" dir="ltr">+966 53 308 5658</Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <Link href="#" className="fab fa-twitter"></Link>
            <Link href="#" className="fab fa-facebook-square"></Link>
            <Link href="#" className="fab fa-pinterest-p"></Link>
            <Link href="#" className="fab fa-instagram"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
