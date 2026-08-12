import Image from "next/image";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

type SiteLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function SiteLogo({
  width = 280,
  height = 102,
  priority = false,
  className = "site-logo",
}: SiteLogoProps) {
  return (
    <Image
      src={SITE_LOGO_SRC}
      alt="Power Orbit"
      width={width}
      height={height}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
