export type ClientLogo = {
  name: string;
  logoSrc: string;
  altText: string;
  width: number;
  height: number;
  /** Photo placeholders without alpha — blend into dark section background */
  blendOnDark?: boolean;
};

/** Client / partner logos — brand PNGs (transparent) match LogoCarouselSection sources */
export const CLIENT_LOGOS: readonly ClientLogo[] = [
  {
    name: "Saudi Food and Drug Authority",
    logoSrc: "/assets/images/brand/brand--1.png",
    altText: "Saudi Food and Drug Authority (SFDA) logo",
    width: 200,
    height: 80,
  },
  {
    name: "Communications, Space and Technology Commission",
    logoSrc: "/assets/images/brand/st.png",
    altText: "Communications, Space and Technology Commission (CST) logo",
    width: 200,
    height: 80,
  },
  {
    name: "Transport General Authority",
    logoSrc: "/assets/images/brand/brand-4.png",
    altText: "Transport General Authority (TGA) logo",
    width: 200,
    height: 80,
  },
  {
    name: "Wasl Platform",
    logoSrc: "/assets/images/brand/brand--2.png",
    altText: "Wasl Platform logo",
    width: 200,
    height: 80,
  },
  {
    name: "CITC",
    logoSrc: "/assets/images/brand/brand--3.png",
    altText: "Communications and Information Technology Commission (CITC) logo",
    width: 200,
    height: 80,
  },
  {
    name: "National Logistics Partner",
    logoSrc: "/assets/images/brand/brand-1-4.png",
    altText: "National Logistics Partner logo",
    width: 200,
    height: 80,
  },
  {
    name: "Energy Sector Partner",
    logoSrc: "/assets/images/clients/energy-partner.webp",
    altText: "Energy Sector Partner logo",
    width: 200,
    height: 80,
    blendOnDark: true,
  },
  {
    name: "PWAS Solutions Partner",
    logoSrc: "/assets/images/clients/pwas-partner.webp",
    altText: "PWAS Solutions Partner logo",
    width: 200,
    height: 80,
    blendOnDark: true,
  },
  {
    name: "Video Telematics Partner",
    logoSrc: "/assets/images/clients/telematics-partner.webp",
    altText: "Video Telematics Partner logo",
    width: 200,
    height: 80,
    blendOnDark: true,
  },
  {
    name: "Fleet Logistics Partner",
    logoSrc: "/assets/images/clients/logistics-partner.webp",
    altText: "Fleet Logistics Partner logo",
    width: 200,
    height: 80,
    blendOnDark: true,
  },
] as const;
