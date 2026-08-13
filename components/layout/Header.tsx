"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Header2 from "./header/Header2";

const Header1 = dynamic(() => import("./header/Header1"));
const Header3 = dynamic(() => import("./header/Header3"));
const Header4 = dynamic(() => import("./header/Header4"));
const Header5 = dynamic(() => import("./header/Header5"));
const SidebarPopup = dynamic(() => import("./SidebarPopup"), { ssr: false });
const BackToTop = dynamic(() => import("../elements/BackToTop"), { ssr: false });

interface HeaderProps {
  style?: 1 | 2 | 3 | 4 | 5;
}

export default function Header({ style = 1 }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((s) => !s);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 100);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => {
      const next = !prev;
      document.body.classList.toggle("mobile-menu-visible", next);
      return next;
    });
  }, []);

  const headerProps = {
    scroll: isScrolled,
    isMobileMenu,
    handleMobileMenu,
    handleSidebar,
  };

  return (
    <>
      {style === 2 ? (
        <Header2 {...headerProps} />
      ) : style === 3 ? (
        <Header3 scroll={isScrolled} handleMobileMenu={handleMobileMenu} />
      ) : style === 4 ? (
        <Header4
          scroll={isScrolled}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />
      ) : style === 5 ? (
        <Header5
          scroll={isScrolled}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />
      ) : (
        <Header1
          scroll={isScrolled}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />
      )}
      {isSidebar ? (
        <SidebarPopup isOpen={isSidebar} onClose={handleSidebar} />
      ) : null}
      {isScrolled ? <BackToTop scroll={isScrolled} /> : null}
    </>
  );
}
