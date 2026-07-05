import type { Locale } from "@/lib/i18n/config";
import type { ProjectCard } from "./cards";

const shared = {
  eagle: {
    src: "Vehicle Tracking.png",
    color: "#1A1D38",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.eagleiot_mobile&pli=1",
      appStore: "https://apps.apple.com/sa/app/eagleiot/id6502992364",
    },
  },
  smartSense: {
    src: "smart-sense.webp",
    color: "#23214A",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.smartsenseapp",
      appStore:
        "https://apps.apple.com/sa/app/smart-sense-eagle-iot/id6749008595",
    },
  },
  apps: {
    src: "apps.webp",
    color: "#2D2B5A",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.rmsdriverapp",
      appStore: "https://apps.apple.com/sa/app/driver-eagle-iot/id6752689802",
    },
  },
} as const;

const cardsEn: ProjectCard[] = [
  {
    title: "Eagle-IoT | The Fleet Intelligence Hub",
    description:
      "Eagle-IoT is a TGA-approved command center for regulated fleet operations in Saudi Arabia. It combines real-time visibility, driver behavior intelligence, and automated compliance reporting in one unified platform to reduce risk and improve control.",
    fullDescription:
      "In an environment where fuel costs, driver safety, and strict regulatory standards define your bottom line, Eagle-IoT provides the answer. As a TGA-Approved Service Provider, we move beyond basic GPS to offer a comprehensive, fully compliant command center for mobile assets.\n\nThe Challenge: Eliminating fuel leakage, preventing unauthorized vehicle use, and managing the high-stakes complexity of Wasl and TGA regulatory compliance.\n\nThe Solution: A unified platform delivering real-time visibility, advanced driver behavior analytics, and automated reporting. Our status as an approved provider ensures that your data is transmitted accurately and securely to the relevant Saudi authorities.\n\nCore Capabilities:\n- TGA & Wasl Integration: Seamless, automated data sharing with the Transport General Authority.\n- Fuel & Cost Governance: Real-time monitoring designed to eliminate waste and theft.\n- Safety Intelligence: Driver behavior scoring to reduce accidents and insurance liabilities.\n\nBest for: Logistics providers, government transport authorities, and large-scale commercial fleets requiring certified solutions.",
    ...shared.eagle,
  },
  {
    title: "SmartSense | Connected Asset Intelligence",
    description:
      "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.",
    fullDescription:
      "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.\n\nThe Challenge: Maintaining 100% cold chain stability, preventing costly pharmaceutical spoilage, and manually logging data to meet strict Saudi Food and Drug Authority standards.\n\nThe Solution: An advanced sensor-driven ecosystem providing real-time monitoring of environment. SmartSense automates the data-logging process, providing the auditable digital trail required for SFDA compliance and pharmaceutical integrity.\n\nCore Capabilities:\n- Warehouse & Cold Storage: 24/7 monitoring of fixed storage environments.\n- SFDA-Ready Reporting: Automated temperature logs and historical data for regulatory audits.\n- Real-Time Alerts: Immediate notification via SMS/Email the moment temperature or humidity deviates from the safety threshold.\n\nBest for: Healthcare warehouses, pharmaceutical cold storage, food & beverage distributors, and sensitive environmental monitoring.",
    ...shared.smartSense,
  },
  {
    title: "Integrated Mobility Apps | The Last Mile of Intelligence",
    description:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications brings office intelligence to the fieldâ€”bridging dispatchers and drivers with specialized mobile interfaces built for regulated operations.",
    fullDescription:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications ensures that the intelligence generated in the office is executed in the field. We bridge the gap between the dispatcher and the driver.\n\nSpecialized mobile interfaces include the Eagle-IoT Fleet Management app, Driver Dispatch app, Bus Transit apps, and the Smart Sense appâ€”each tuned for its role in your operations.",
    ...shared.apps,
  },
];

const cardsAr: ProjectCard[] = [
  {
    title: "Ø§ÙŠØºÙ„-Ø¢Ù‰ Ø§Ùˆ ØªÙŠ Eagle-IoT | Ø§Ù„Ù…Ù†ØµØ© Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø³Ø§Ø·ÙŠÙ„ ÙˆØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª",
    description:
      "ØªÙ‚Ø¯Ù… Ù„Ùƒ Ù…Ù†ØµØ© Ø§ÙŠØºÙ„-Ø¢Ù‰ Ø§Ùˆ ØªÙŠ Eagle-IoT Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ù…Ù† Ø§Ù„Ù‡ÙŠØ¦Ø© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ù†Ù‚Ù„ (TGA) Ø®Ø¯Ù…Ø§Øª Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø³Ø§Ø·ÙŠÙ„ ÙˆØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©. ØªØ¬Ù…Ø¹ Ø§Ù„Ù…Ù†ØµØ© Ø¨Ø³Ù„Ø§Ø³Ø© Ø¨ÙŠÙ† ØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„ÙÙˆØ±ÙŠ (GPS) ÙˆØªØ­Ù„ÙŠÙ„ Ø³Ù„ÙˆÙƒ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙˆØ¥ØµØ¯Ø§Ø± ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ØŒ Ø¨Ù…Ø§ ÙŠÙ„Ø¨ÙŠ Ø§Ù„Ø§Ø´ØªØ±Ø§Ø·Ø§Øª Ø§Ù„Ø­ÙƒÙˆÙ…ÙŠØ© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ ÙˆØ¨Ø¯ÙˆÙ† Ø¹Ù†Ø§Ø¡.",
    fullDescription:
      "ØªÙ‚Ø¯Ù… Ù„Ùƒ Ù…Ù†ØµØ© Ø§ÙŠØºÙ„-Ø¢Ù‰ Ø§Ùˆ ØªÙŠ Eagle-IoT Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ù…Ù† Ø§Ù„Ù‡ÙŠØ¦Ø© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ù†Ù‚Ù„ (TGA) Ø®Ø¯Ù…Ø§Øª Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø£Ø³Ø§Ø·ÙŠÙ„ ÙˆØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©. ØªØ¬Ù…Ø¹ Ø§Ù„Ù…Ù†ØµØ© Ø¨Ø³Ù„Ø§Ø³Ø© Ø¨ÙŠÙ† ØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª Ø§Ù„ÙÙˆØ±ÙŠ (GPS) ÙˆØªØ­Ù„ÙŠÙ„ Ø³Ù„ÙˆÙƒ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙˆØ¥ØµØ¯Ø§Ø± ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ØŒ Ø¨Ù…Ø§ ÙŠÙ„Ø¨ÙŠ Ø§Ù„Ø§Ø´ØªØ±Ø§Ø·Ø§Øª Ø§Ù„Ø­ÙƒÙˆÙ…ÙŠØ© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ ÙˆØ¨Ø¯ÙˆÙ† Ø¹Ù†Ø§Ø¡.\n\nØ§Ù„ØªØ­Ø¯ÙŠ: ØªÙˆØ§Ø¬Ù‡ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø¹Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„ØªØ­Ø¯ÙŠØ§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…Ø­ÙˆØ±ÙŠØ© ÙˆØ§Ù„Ù…Ø¤Ø«Ø±Ø© Ù…Ø«Ù„ Ù‡Ø¯Ø± Ø§Ù„ÙˆÙ‚ÙˆØ¯ ÙˆØ³Ø±Ù‚ØªÙ‡ ÙˆØ§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙŠØ± Ø§Ù„Ù…ØµÙ‘Ø±Ø­ Ø¨Ù‡ Ù„Ù„Ø³ÙŠØ§Ø±Ø§Øª ÙˆØ§Ù„Ù…ØªØ·Ù„Ø¨Ø§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ù„Ù„Ù‡ÙŠØ¦Ø© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ù†Ù‚Ù„ ÙˆÙ…Ù†ØµØ© Â«ÙˆØµÙ„Â».\n\nØ§Ù„Ø­Ù„: ØªÙ‚Ø¯Ù… Eagle-IoT Ù…Ù†ØµØ© Ù…ÙˆØ­Ø¯Ø© ØªÙ…Ù†Ø­Ùƒ Ø±Ø¤ÙŠØ© ÙÙˆØ±ÙŠØ© ÙˆÙ…Ø¨Ø§Ø´Ø±Ø© Ù„ÙƒÙ„ Ù…Ø§ ÙŠØ­Ø¯Ø«ØŒ Ù…Ø¹ ØªØ­Ù„ÙŠÙ„ ØªÙØµÙŠÙ„ÙŠ Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ø³Ø§Ø¦Ù‚ ÙˆØ³Ù„ÙˆÙƒÙ‡ Ø¹Ù„Ù‰ Ø§Ù„Ø·Ø±ÙŠÙ‚ ÙˆØªÙ‚Ø§Ø±ÙŠØ± Ø¯Ù‚ÙŠÙ‚Ø© ØªØ³ØªØ¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø¨Ù…Ø§ ÙŠÙ„Ø¨ÙŠ Ø´Ø±ÙˆØ· Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ Ù„Ù„Ù‡ÙŠØ¦Ø§Øª Ø§Ù„Ù…Ø¹Ù†ÙŠØ©.\n\nCore Capabilities:\n- Ø§Ù„Ø±Ø¨Ø· Ù…Ø¹ Ù‡ÙŠØ¦Ø© Ø§Ù„Ù†Ù‚Ù„ ÙˆÙ…Ù†ØµØ© Â«ÙˆØµÙ„Â»: Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ ÙˆØ¨Ø³Ù„Ø§Ø³Ø© Ù…Ø¹ Ø§Ù„Ù‡ÙŠØ¦Ø© Ø§Ù„Ø¹Ø§Ù…Ø© Ù„Ù„Ù†Ù‚Ù„.\n- Ø¥Ø¯Ø§Ø±Ø© ÙˆØªÙˆÙÙŠØ± Ø§Ù„ÙˆÙ‚ÙˆØ¯ ÙˆØ§Ù„ØªÙƒØ§Ù„ÙŠÙ: Ù…Ø±Ø§Ù‚Ø¨Ø© Ø­ÙŠØ© ÙˆÙ…Ø¨Ø§Ø´Ø±Ø© Ù„Ù„ÙˆÙ‚ÙˆØ¯ Ù„Ù„Ù‚Ø¶Ø§Ø¡ Ø¹Ù„Ù‰ Ø§Ù„Ù‡Ø¯Ø± ÙˆØ§Ù„Ø³Ø±Ù‚Ø©.\n- Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø°ÙƒÙŠØ©: ØªÙ‚ÙŠÙŠÙ… Ø³Ù„ÙˆÙƒ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† Ù„ØªÙ‚Ù„ÙŠÙ„ Ø§Ù„Ø­ÙˆØ§Ø¯Ø« ÙˆØ£Ù‚Ø³Ø§Ø· Ø§Ù„ØªØ£Ù…ÙŠÙ†.\n\nBest for: Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ© ÙˆÙ‡ÙŠØ¦Ø§Øª Ø§Ù„Ù†Ù‚Ù„ Ø§Ù„Ø­ÙƒÙˆÙ…ÙŠØ© ÙˆØ£Ø³Ø§Ø·ÙŠÙ„ Ø§Ù„Ù†Ù‚Ù„ Ø§Ù„ØªØ¬Ø§Ø±ÙŠ Ø§Ù„ÙƒØ¨Ø±Ù‰ Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬ Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© ÙˆØ­Ù„ÙˆÙ„ Ù…Ø¹ØªÙ…Ø¯Ø©.",
    ...shared.eagle,
  },
  {
    title: "Ø³Ù…Ø§Ø±Øª Ø³ÙŠÙ†Ø³ SmartSense | Ø§Ù„Ù†Ø¸Ø§Ù… Ø§Ù„Ø°ÙƒÙŠ Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© Ø³Ù„Ø§Ø³Ù„ Ø§Ù„ØªØ¨Ø±ÙŠØ¯ ÙˆØ¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø©",
    description:
      "Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¹ØªÙ…Ø¯ Ù†Ø¬Ø§Ø­ Ø¹Ù…Ù„Ùƒ Ø¹Ù„Ù‰ Ø§Ù„Ø§Ù„ØªØ²Ø§Ù… Ø§Ù„ØµØ§Ø±Ù… Ø¨Ø§Ø´ØªØ±Ø§Ø·Ø§Øª Ù‡ÙŠØ¦Ø© Ø§Ù„ØºØ°Ø§Ø¡ ÙˆØ§Ù„Ø¯ÙˆØ§Ø¡ (SFDA) ÙˆØ§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù…Ø®Ø²Ù†Ø©ØŒ ÙŠØ£ØªÙŠ Ø¯ÙˆØ± Ø³Ù…Ø§Ø±Øª Ø³ÙŠÙ†Ø³ SmartSense  Ù„ÙŠÙ…Ù†Ø­Ùƒ Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø© ÙˆØ§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙƒØ§Ù…Ù„. ÙŠØ±Ø§Ù‚Ø¨ Ø§Ù„Ù†Ø¸Ø§Ù… Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© ÙˆØ§Ù„Ø±Ø·ÙˆØ¨Ø© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ù„Ø­Ø¸Ø© Ø¨Ù„Ø­Ø¸Ø©ØŒ Ù†Ø¸Ø§Ù… Ø°ÙƒÙŠ Ù…ØµÙ…Ù… Ù„Ø®Ø¯Ù…Ø© Ù…Ø±Ø§ÙÙ‚ Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø«Ø§Ø¨ØªØ© ÙˆØ®Ø¯Ù…Ø§Øª Ø§Ù„Ù†Ù‚Ù„ Ø§Ù„Ù…Ø¨Ø±Ø¯ ÙˆØ§Ù„Ù…Ø±Ø§ÙÙ‚ Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ© ÙˆÙ…Ù†Ø´Ø¢Øª Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø¨Ø§Ø±Ø¯ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ù…Ù…Ù„ÙƒØ©.",
    fullDescription:
      "Ø¹Ù†Ø¯Ù…Ø§ ÙŠØ¹ØªÙ…Ø¯ Ù†Ø¬Ø§Ø­ Ø¹Ù…Ù„Ùƒ Ø¹Ù„Ù‰ Ø§Ù„Ø§Ù„ØªØ²Ø§Ù… Ø§Ù„ØµØ§Ø±Ù… Ø¨Ø§Ø´ØªØ±Ø§Ø·Ø§Øª Ù‡ÙŠØ¦Ø© Ø§Ù„ØºØ°Ø§Ø¡ ÙˆØ§Ù„Ø¯ÙˆØ§Ø¡ (SFDA) ÙˆØ§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù…Ø®Ø²Ù†Ø©ØŒ ÙŠØ£ØªÙŠ Ø¯ÙˆØ± Ø³Ù…Ø§Ø±Øª Ø³ÙŠÙ†Ø³ SmartSense  Ù„ÙŠÙ…Ù†Ø­Ùƒ Ø§Ù„Ø±Ø¤ÙŠØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø© ÙˆØ§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙƒØ§Ù…Ù„. ÙŠØ±Ø§Ù‚Ø¨ Ø§Ù„Ù†Ø¸Ø§Ù… Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© ÙˆØ§Ù„Ø±Ø·ÙˆØ¨Ø© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ù„Ø­Ø¸Ø© Ø¨Ù„Ø­Ø¸Ø©ØŒ Ù†Ø¸Ø§Ù… Ø°ÙƒÙŠ Ù…ØµÙ…Ù… Ù„Ø®Ø¯Ù…Ø© Ù…Ø±Ø§ÙÙ‚ Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø«Ø§Ø¨ØªØ© ÙˆØ®Ø¯Ù…Ø§Øª Ø§Ù„Ù†Ù‚Ù„ Ø§Ù„Ù…Ø¨Ø±Ø¯ ÙˆØ§Ù„Ù…Ø±Ø§ÙÙ‚ Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ© ÙˆÙ…Ù†Ø´Ø¢Øª Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø¨Ø§Ø±Ø¯ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ù…Ù…Ù„ÙƒØ©.\n\nØ§Ù„ØªØ­Ø¯ÙŠ: ÙŠÙˆØ§Ø¬Ù‡ Ø§Ù„Ù‚Ø§Ø¦Ù…ÙˆÙ† Ø¹Ù„Ù‰ Ø¥Ø¯Ø§Ø±Ø© Ø³Ù„Ø§Ø³Ù„ Ø§Ù„ØªØ¨Ø±ÙŠØ¯ ÙˆØ§Ù„ØªØ®Ø²ÙŠÙ† ØµØ¹ÙˆØ¨Ø§Øª Ø´ØªÙ‰ ÙÙŠ Ø§Ù„Ø­ÙØ§Ø¸ Ø¹Ù„Ù‰ Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ø§Ù„ØªØ¨Ø±ÙŠØ¯ ÙˆÙ…Ù†Ø¹ ØªÙ„Ù Ø§Ù„Ø£Ø¯ÙˆÙŠØ© ÙˆØ§Ù„Ù…Ø³ØªØ­Ø¶Ø±Ø§Øª Ø§Ù„Ø·Ø¨ÙŠØ©ØŒ Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ù…Ø®Ø§Ø·Ø± Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ø§Ù„ÙŠØ¯ÙˆÙŠ Ù„Ù„Ø¨ÙŠØ§Ù†Ø§ØªØŒ Ø¨Ù…Ø§ ÙŠØ¹ÙˆÙ‚ ØªØ­Ù‚ÙŠÙ‚ Ù…Ø¹Ø§ÙŠÙŠØ± Ù‡ÙŠØ¦Ø© Ø§Ù„ØºØ°Ø§Ø¡ ÙˆØ§Ù„Ø¯ÙˆØ§Ø¡ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©.\n\nØ§Ù„Ø­Ù„: Ù…Ù†Ø¸ÙˆÙ…Ø© Ù…ØªØ·ÙˆØ±Ø© ØªØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø­Ø³Ø§Ø³Ø§Øª ÙˆØ£Ø¬Ù‡Ø²Ø© Ø§Ø³ØªØ´Ø¹Ø§Ø± Ø°ÙƒÙŠØ© Ù„Ù…Ø±Ø§Ù‚Ø¨Ø© Ø§Ù„Ø¨ÙŠØ¦Ø© Ø§Ù„Ù…Ø­ÙŠØ·Ø© ÙÙˆØ±ÙŠØ§Ù‹. ÙŠÙ‚Ø¯Ù… Ø³Ù…Ø§Ø±Øª Ø³ÙŠÙ†Ø³ Ø£ØªÙ…ØªØ© ÙˆØªØ³Ø¬ÙŠÙ„ Ø¢Ù„ÙŠ Ù„Ù„Ø¨ÙŠØ§Ù†Ø§ØªØŒ Ù…Ù…Ø§ ÙŠÙˆÙØ± Ø³Ø¬Ù„Ø§Ù‹ Ø±Ù‚Ù…ÙŠØ§Ù‹ Ø¬Ø§Ù‡Ø²Ø§Ù‹ Ù„Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© ÙˆØ§Ù„ØªÙØªÙŠØ´ Ù„Ø¶Ù…Ø§Ù† Ø§Ù„ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ù‡ÙŠØ¦Ø© Ø§Ù„ØºØ°Ø§Ø¡ ÙˆØ§Ù„Ø¯ÙˆØ§Ø¡ ÙˆØ³Ù„Ø§Ù…Ø© Ø§Ù„Ø£Ø¯ÙˆÙŠØ©.\n\nCore Capabilities:\n- Ø§Ù„Ù…Ø³ØªÙˆØ¯Ø¹Ø§Øª ÙˆØ«Ù„Ø§Ø¬Ø§Øª Ø§Ù„ØªØ®Ø²ÙŠÙ†: Ù…Ø±Ø§Ù‚Ø¨Ø© Ø¨ÙŠØ¦Ø© Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø© (24/7).\n- ØªÙ‚Ø§Ø±ÙŠØ± Ø¬Ø§Ù‡Ø²Ø© ØªÙ„Ø¨ÙŠ Ø´Ø±ÙˆØ· Ù‡ÙŠØ¦Ø© Ø§Ù„ØºØ°Ø§Ø¡ ÙˆØ§Ù„Ø¯ÙˆØ§Ø¡: ØªÙ‚Ø§Ø±ÙŠØ± ØªÙØµÙŠÙ„ÙŠØ© ØªØ³ØªØ¹Ø±Ø¶ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø¨Ø¯Ù‚Ø©ØŒ Ø¨Ù…Ø§ ÙŠØ³ØªÙˆÙÙŠ Ø´Ø±ÙˆØ· Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ ÙˆØ§Ù„ØªÙØªÙŠØ´ Ø§Ù„Ø±Ø³Ù…ÙŠØ©.\n- ØªÙ†Ø¨ÙŠÙ‡Ø§Øª ÙÙˆØ±ÙŠØ©: Ø¥Ø´Ø¹Ø§Ø±Ø§Øª ÙÙˆØ±ÙŠØ© Ø¹Ø¨Ø± Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù†ØµÙŠØ© (SMS) Ø£Ùˆ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø¨Ù…Ø¬Ø±Ø¯ Ø­Ø¯ÙˆØ« Ø£ÙŠ ØªØºÙŠÙŠØ± ÙÙŠ Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø© Ø£Ùˆ Ø§Ù„Ø±Ø·ÙˆØ¨Ø© Ø£Ùˆ ØªØ¬Ø§ÙˆØ² Ø§Ù„Ø­Ø¯ Ø§Ù„Ø¢Ù…Ù†.\n\nBest for: Ù…Ø®Ø§Ø²Ù† Ø§Ù„Ø£Ø¯ÙˆÙŠØ© ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ© ÙˆÙ…Ù†Ø§ÙØ° ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ø£ØºØ°ÙŠØ© ÙˆØ§Ù„Ù…Ø´Ø±ÙˆØ¨Ø§Øª ÙˆÙ…Ø±Ø§Ù‚Ø¨Ø© Ø§Ù„Ø¨ÙŠØ¦Ø§Øª Ø§Ù„Ø­Ø³Ø§Ø³Ø©.",
    ...shared.smartSense,
  },
  {
    title: "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ØªÙ†Ù‚Ù„ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø© | Ø£Ø­Ø¯Ø« Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ© Ù„Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø°ÙƒÙŠØ©",
    description:
      "ØªØ¶Ù…Ù† Ù„Ùƒ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© ÙˆØµÙˆÙ„ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© ÙÙˆØ±Ø§Ù‹ Ù„Ù„Ø´Ø®Øµ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ Ù„Ø§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ø³Ù„ÙŠÙ… ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ØŒ ÙˆØªÙ†Ù‚Ù„ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±Ø© Ù…Ù† Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙˆØ§Ù„Ø¹Ù…Ø§Ù„ ÙÙŠ Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø¹Ù…Ù„ Ø¨ÙƒÙ„ Ø³Ù„Ø§Ø³Ø©.   ",
    fullDescription:
      "Ø§Ù„Ù‡Ø¯Ù: Ø§Ø³ØªÙ…Ø±Ø§Ø± Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ù…Ù† Ø§Ù„Ø¨Ø¯Ø§ÙŠØ© ÙˆØ­ØªÙ‰ Ø§Ù„Ù†Ù‡Ø§ÙŠØ© Ø¨Ø³Ù„Ø§Ø³Ø© ÙˆØ¯ÙˆÙ† Ø§Ù†Ù‚Ø·Ø§Ø¹.\n\nØªØ¶Ù…Ù† Ù„Ùƒ Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ© ÙˆØµÙˆÙ„ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø© ÙÙˆØ±Ø§Ù‹ Ù„Ù„Ø´Ø®Øµ Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ Ù„Ø§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ø³Ù„ÙŠÙ… ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ØŒ ÙˆØ¹Ø¨Ø± Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª ØªÙ†ØªÙ‚Ù„ Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±Ø© Ù…Ù† Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† ÙˆØ§Ù„Ø¹Ù…Ø§Ù„ ÙÙŠ Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø¹Ù…Ù„ Ø¨ÙƒÙ„ Ø³Ù„Ø§Ø³Ø© ÙÙŠ ØºÙ…Ø¶Ø© Ø¹ÙŠÙ†ØŒ Ø¨Ù…Ø§ ÙŠØ¶Ù…Ù† Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ù…Ø³ØªÙ…Ø± Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¯Ø§Ø±Ø© ÙˆØ§Ù„Ø³Ø§Ø¦Ù‚.\n\nCore Capabilities:\n- ØªØ·Ø¨ÙŠÙ‚ Eagle-IoT Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø±ÙƒØ¨Ø§Øª (Eagle-IoT Fleet Management App)\n- ØªØ·Ø¨ÙŠÙ‚ Eagle-IoT Ù„ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ø³Ø§Ø¦Ù‚ÙŠÙ† (Driver Dispatch App)\n- ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ù†Ù‚Ù„ Ø§Ù„Ø¹Ø§Ù… ÙˆØ§Ù„Ø­Ø§ÙÙ„Ø§Øª (Bus Transit Apps)\n- ØªØ·Ø¨ÙŠÙ‚ Ø³Ù…Ø§Ø±Øª Ø³ÙŠÙ†Ø³",
    ...shared.apps,
  },
];

export function getCards(locale: Locale): ProjectCard[] {
  return locale === "ar" ? cardsAr : cardsEn;
}
