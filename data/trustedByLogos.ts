export type TrustedByLogo = {
  name: string;
  logoSrc: string;
  altText: string;
  width: number;
  height: number;
};

/** Featured client logos for the homepage trusted-by section */
export const TRUSTED_BY_LOGOS: readonly TrustedByLogo[] = [
  {
    name: "Saudi Food and Drug Authority",
    logoSrc: "/assets/images/clients/sfda.webp",
    altText: "Saudi Food and Drug Authority (SFDA) logo",
    width: 250,
    height: 100,
  },
  {
    name: "Communications, Space and Technology Commission",
    logoSrc: "/assets/images/clients/cst.webp",
    altText: "Communications, Space and Technology Commission (CST) logo",
    width: 250,
    height: 100,
  },
  {
    name: "Transport General Authority",
    logoSrc: "/assets/images/clients/tga.webp",
    altText: "Transport General Authority (TGA) logo",
    width: 250,
    height: 100,
  },
] as const;
