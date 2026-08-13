"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getOnepageNavOne } from "@/data/onepageNav";

export default function OnepageMenu_One() {
  const { t, locale } = useLanguage();
  const sections = getOnepageNavOne(locale);
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollPos = window.scrollY + 100;

        for (const section of sections) {
          if (!section.id) continue;
          const el = document.querySelector(section.id);
          if (!el) continue;
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          const offsetBottom = offsetTop + el.clientHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setCurrent(section.id);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="main-menu__list one-page-scroll-menu">
      {sections.map((section) => {
        const key = section.id ?? section.href ?? section.labelKey;

        if (section.href) {
          return (
            <li key={key}>
              <a
                href={section.href}
                {...(section.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {t(section.labelKey)}
              </a>
            </li>
          );
        }

        return (
          <li
            key={key}
            className={`scrollToLink ${current === section.id ? "current" : ""}`}
          >
            <a href={section.id} onClick={(e) => handleClick(e, section.id!)}>
              {t(section.labelKey)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
