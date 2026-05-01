
import { useEffect, useState } from "react";
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

export default function OnepageMenu_One() {
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    // Enable smooth scroll globally
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for early activation

      for (const section of sections) {
        const el = document.querySelector(section.id);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          const offsetBottom = offsetTop + el.clientHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setCurrent(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = ""; // cleanup
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="main-menu__list one-page-scroll-menu">
      {sections.map((section) => (
        <li
          key={section.id}
          className={`scrollToLink ${current === section.id ? "current" : ""}`}
        >
          <a href={section.id} onClick={(e) => handleClick(e, section.id)}>
            {section.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
