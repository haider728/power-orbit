import { mobilitySuiteApps, type MobileApp } from "./mobileApps";

export type ProjectCard = {
  title: string;
  description: string;
  fullDescription?: string;
  src: string;
  color: string;
  url: string;
  /** Optional mobile app shortcuts (icons + links) for this card */
  mobileApps?: MobileApp[];
};

export const cards: ProjectCard[] = [
  {
    title: "Eagle-IoT | The Fleet Intelligence Hub",
    description:
      "Eagle-IoT is a TGA-approved command center for regulated fleet operations in Saudi Arabia. It combines real-time visibility, driver behavior intelligence, and automated compliance reporting in one unified platform to reduce risk and improve control.",
    fullDescription:
      "In an environment where fuel costs, driver safety, and strict regulatory standards define your bottom line, Eagle-IoT provides the answer. As a TGA-Approved Service Provider, we move beyond basic GPS to offer a comprehensive, fully compliant command center for mobile assets.\n\nThe Challenge: Eliminating fuel leakage, preventing unauthorized vehicle use, and managing the high-stakes complexity of Wasl and TGA regulatory compliance.\n\nThe Solution: A unified platform delivering real-time visibility, advanced driver behavior analytics, and automated reporting. Our status as an approved provider ensures that your data is transmitted accurately and securely to the relevant Saudi authorities.\n\nCore Capabilities:\n- TGA & Wasl Integration: Seamless, automated data sharing with the Transport General Authority.\n- Fuel & Cost Governance: Real-time monitoring designed to eliminate waste and theft.\n- Safety Intelligence: Driver behavior scoring to reduce accidents and insurance liabilities.\n\nBest for: Logistics providers, government transport authorities, and large-scale commercial fleets requiring certified solutions.",
    src: "eagle.png",
    color: "#1A1D38",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
  },
  {
    title: "SmartSense | Connected Asset Intelligence ",
    description:
      "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.",
      fullDescription:
      " When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.\n\nThe Challenge: Maintaining 100% cold chain stability, preventing costly pharmaceutical spoilage, and manually logging data to meet strict Saudi Food and Drug Authority standards\n\nThe Solution: An advanced sensor-driven ecosystem providing real-time monitoring of enviornment. SmartSense automates the data-logging process, providing the auditable digital trail required for SFDA compliance and pharmaceutical integrity. \n\nCore Capabilities: * Warehouse & Cold Storage: 24/7 monitoring of fixed storage environments. \n-SFDA-Ready Reporting: Automated temperature logs and historical data for regulatory audits. \nReal-Time Alerts: Immediate notification via SMS/Email the moment temperature or humidity deviates from the safety threshold.  ",
      src: "smart.png",
    color: "#23214A",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
  },
  {
    title: "Integrated Mobility Apps | The Last Mile of Intelligence ",
    description:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications brings office intelligence to the field—bridging dispatchers and drivers with specialized mobile interfaces built for regulated operations.",
    fullDescription:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications ensures that the intelligence generated in the office is executed in the field. We bridge the gap between the dispatcher and the driver.\n\nSpecialized mobile interfaces include the Eagle-IoT Fleet Management app, Driver Dispatch app, Bus Transit apps, and the Smart Sense app—each tuned for its role in your operations.",
    src: "app.png",
    color: "#2D2B5A",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    mobileApps: mobilitySuiteApps,
  },
];
