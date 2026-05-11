
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#solutions", label: "Solutions" },
  { id: "#counter", label: "Counter" },
  { id: "#choose", label: "Why Choose Us" },
  { id: "#sliding-text", label: "Highlights" },
  { id: "#process", label: "Process" },
  { id: "#portfolio", label: "Portfolio" },
  { id: "#blog", label: "Blog" },
];

type OnepageMobileMenu_OneProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function OnepageMobileMenu_One({ isSidebar, handleMobileMenu }: OnepageMobileMenu_OneProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("");

  const toggleDropdown = (key: number) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

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
          <i className="fa fa-times"></i>
        </span>

        {/* Logo */}
        <div className="logo-box">
          <Link href="/" onClick={handleMobileMenu} aria-label="logo image">
            <Image
              src="/assets/images/resources/logo-1.gif"
              alt="Power Orbit"
              width={150}
              height={32}
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {/* Home Variants Dropdown */}
            <li className="dropdown">
              <Link href="#">Pages</Link>
              <ul style={{ display: activeDropdown === 0 ? "block" : "none" }}>
                <li>
                  <Link href="/" onClick={handleMobileMenu}>Home One Multi Page</Link>
                </li>
                <li>
                  <Link href="/onepage" onClick={handleMobileMenu}>Home One OnePage</Link>
                </li>
                <li>
                  <Link href="/index2" onClick={handleMobileMenu}>Home Two Multi Page</Link>
                </li>
                <li>
                  <Link href="/index2-onepage" onClick={handleMobileMenu}>Home Two OnePage</Link>
                </li>
                <li>
                  <Link href="/index3" onClick={handleMobileMenu}>Home Three Multi Page</Link>
                </li>
                <li>
                  <Link href="/index3-onepage" onClick={handleMobileMenu}>Home Three OnePage</Link>
                </li>
              </ul>
              <div
                className={`dropdown-btn ${activeDropdown === 0 ? "open" : ""}`}
                onClick={() => toggleDropdown(0)}
              >
                <span className="fa fa-angle-down" />
              </div>
            </li>

            {/* One Page Sections */}
            {sections.map((section) => (
              <li
                key={section.id}
                className={`scrollToLink ${currentSection === section.id ? "current" : ""}`}
              >
                <Link href={section.id} onClick={(e) => handleClick(e, section.id)}>
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <Link href="mailto:info@eagle-iot.com">info@eagle-iot.com</Link>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <Link href="tel:6668880000">666 888 0000</Link>
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
