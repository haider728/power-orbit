"use client";

import Link from "next/link";
import type { MobileApp } from "@/data/mobileApps";
import styles from "@/components/sections/home1/stacked-cards.module.css";

function AppIcon({ id }: { id: MobileApp["id"] }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none" as const, "aria-hidden": true as const };
  switch (id) {
    case "fleet":
      return (
        <svg {...common}>
          <path
            d="M4 15.5V17a1 1 0 001 1h1.5M4 15.5h11M4 15.5v-4l1.5-5h9l1.2 4M15 15.5h4l1-3h2v3h-1M6.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 7V5a1 1 0 011-1h5a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "dispatch":
      return (
        <svg {...common}>
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9h.01M12 16h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M12 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bus":
      return (
        <svg {...common}>
          <path
            d="M5 17h14v-4l-2-6H7L5 13v4zm0 0H4M5 17v2h2v-2m12 0h1m-1 0v2h-2v-2M7 7h10M8 11h.01M16 11h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "smartsense":
      return (
        <svg {...common}>
          <path
            d="M12 3v3m0 12v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M3 12h3m12 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

type Props = {
  apps: MobileApp[];
};

export default function MobileAppTiles({ apps }: Props) {
  return (
    <div className={styles.appTiles}>
      {apps.map((app) => (
        <Link
          key={app.id}
          href={app.href}
          className={styles.appTile}
          data-app={app.id}
          onClick={app.href === "#" ? (e) => e.preventDefault() : undefined}
          scroll={app.href === "#" ? false : undefined}
          {...(app.href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <span className={styles.appTileIcon} aria-hidden>
            <AppIcon id={app.id} />
          </span>
          <span className={styles.appTileText}>
            <span className={styles.appTileName}>{app.name}</span>
            <span className={styles.appTileTag}>{app.tagline}</span>
          </span>
          <span className={styles.appTileArrow} aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7v8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
