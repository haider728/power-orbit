"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

type SectionScrollLinkProps = {
  sectionId: string;
  children: ReactNode;
  className?: string;
};

export default function SectionScrollLink({
  sectionId,
  children,
  className,
}: SectionScrollLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const href = isHome ? sectionId : `/${sectionId}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;

    e.preventDefault();
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
