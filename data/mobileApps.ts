/**
 * Mobile app tiles shown on the "Integrated Mobility Apps" portfolio card.
 * Replace `href` with your App Store, Play Store, or web URLs when ready.
 */
export type MobileApp = {
  id: "fleet" | "dispatch" | "bus" | "smartsense";
  name: string;
  tagline: string;
  href: string;
};

export const mobilitySuiteApps: MobileApp[] = [
  {
    id: "fleet",
    name: "Eagle-IoT Fleet Management",
    tagline: "Regulated fleet control",
    href: "#",
  },
  {
    id: "dispatch",
    name: "Driver Dispatch",
    tagline: "Tasks, routes & proof",
    href: "#",
  },
  {
    id: "bus",
    name: "Bus Transit",
    tagline: "Passenger operations",
    href: "#",
  },
  {
    id: "smartsense",
    name: "Smart Sense",
    tagline: "Asset & environment sense",
    href: "#",
  },
];
