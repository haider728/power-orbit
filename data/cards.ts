import { type MobileApp } from "./mobileApps";

export type ProjectCard = {
  title: string;
  description: string;
  fullDescription?: string;
  src: string;
  color: string;
  url: string;
  /** Optional mobile app shortcuts (icons + links) for this card */
  mobileApps?: MobileApp[];
  /** App store badge links (shown below See more when set) */
  storeLinks?: {
    googlePlay: string;
    appStore: string;
  };
};

export const cards: ProjectCard[] = [
  {
    title: "Eagle-IoT | Fleet Management & Vehicle Tracking Hub",
    description:
      "Eagle-IoT is a TGA-approved fleet management and vehicle tracking platform for regulated operations in Saudi Arabia. It combines real-time GPS vehicle tracking, driver behavior intelligence, and automated compliance reporting...",
    fullDescription:
      "In an environment where fuel costs, driver safety, and strict regulatory standards define your bottom line, Eagle-IoT provides the answer. As a TGA-Approved Service Provider, we move beyond basic GPS to offer a comprehensive, fully compliant command center for mobile assets.\n\nThe Challenge: Eliminating fuel leakage, preventing unauthorized vehicle use, and managing the high-stakes complexity of Wasl and TGA regulatory compliance.\n\nThe Solution: A unified platform delivering real-time visibility, advanced driver behavior analytics, and automated reporting. Our status as an approved provider ensures that your data is transmitted accurately and securely to the relevant Saudi authorities.\n\nCore Capabilities:\n- TGA & Wasl Integration: Seamless, automated data sharing with the Transport General Authority.\n- Fuel & Cost Governance: Real-time monitoring designed to eliminate waste and theft.\n- Safety Intelligence: Driver behavior scoring to reduce accidents and insurance liabilities.\n\nBest for: Logistics providers, government transport authorities, and large-scale commercial fleets requiring certified solutions.",
    src: "Vehicle Tracking.png",
    color: "#1A1D38",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.eagleiot_mobile&pli=1",
      appStore: "https://apps.apple.com/sa/app/eagleiot/id6502992364",
    },
  },
  {
    title: "SmartSense | Cold Chain & Temperature Monitoring ",
    description:
      "When your operational success depends on strict SFDA compliance and the precise condition of your cargo, SmartSense provides total visibility. This is the automated temperature and humidity monitoring layer engineered for fixed warehouses, cold chain logistics, and cold storage facilities across the Kingdom",
      fullDescription:
      "When your operational success depends on strict SFDA compliance and the precise condition of your cargo, SmartSense provides total visibility. This is the automated temperature and humidity monitoring layer engineered for fixed warehouses, cold chain logistics, and cold storage facilities across the Kingdom  ",
      src: "smart-sense.webp",
    color: "#23214A",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.smartsenseapp",
      appStore: "https://apps.apple.com/sa/app/smart-sense-eagle-iot/id6749008595",
    },
  },
  {
    title: "Integrated Mobility Apps | The Last Mile of Intelligence ",
    description:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications brings office intelligence to the field—bridging dispatchers and drivers with specialized mobile interfaces built for regulated operations.",
    fullDescription:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications ensures that the intelligence generated in the office is executed in the field. We bridge the gap between the dispatcher and the driver.\n\nSpecialized mobile interfaces include the Eagle-IoT Fleet Management app, Driver Dispatch app, Bus Transit apps, and the Smart Sense app—each tuned for its role in your operations.",
    src: "apps.webp",
    color: "#2D2B5A",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.rmsdriverapp",
      appStore: "https://apps.apple.com/sa/app/driver-eagle-iot/id6752689802",
    },
  },
];
