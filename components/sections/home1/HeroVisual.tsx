import Image from "next/image";
import styles from "@/components/sections/home1/banner.module.css";

type Stat = { value: string; label: string };

type HeroVisualProps = {
  imageSrc: string;
  imageAlt: string;
  badges?: readonly string[];
  stats?: readonly Stat[];
  highlights?: readonly string[];
  priority?: boolean;
  lazy?: boolean;
};

export default function HeroVisual({
  imageSrc,
  imageAlt,
  badges,
  stats,
  highlights,
  priority = false,
  lazy = false,
}: HeroVisualProps) {
  return (
    <div className={styles.visual}>
      <div className={styles.visualGlow} aria-hidden="true" />
      <div className={styles.visualFrame}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={480}
          height={480}
          className={styles.visualImg}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          loading={lazy ? "lazy" : priority ? "eager" : undefined}
          sizes="(max-width: 767px) 300px, (max-width: 991px) 85vw, 480px"
        />
      </div>

      {badges && badges.length > 0 ? (
        <div className={styles.badgeRow}>
          {badges.map((badge) => (
            <span key={badge} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      {stats && stats.length > 0 ? (
        <div className={styles.statGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {highlights && highlights.length > 0 ? (
        <ul className={styles.highlightList} role="list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
