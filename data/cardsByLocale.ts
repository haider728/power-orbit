import type { Locale } from "@/lib/i18n/config";
import type { BestForItem, ProjectCard } from "./cards";
import { translations } from "@/lib/i18n/translations";

const cardAssets = [
  {
    // Use WebP for better mobile LCP performance.
    src: "Vehicle Tracking.webp",
    color: "#1A1D38",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.eagleiot_mobile&pli=1",
      appStore: "https://apps.apple.com/sa/app/eagleiot/id6502992364",
    },
  },
  {
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
  {
    src: "apps.webp",
    color: "#2D2B5A",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.rmsdriverapp",
      appStore: "https://apps.apple.com/sa/app/driver-eagle-iot/id6752689802",
    },
  },
] as const;

export function getCards(locale: Locale): ProjectCard[] {
  const items = translations[locale].home.cards.items;

  return cardAssets.map((assets, index) => {
    const content = items[index]!;

    return {
      ...assets,
      title: content.title,
      description: content.description,
      fullDescription: content.fullDescription,
      bestFor: content.bestFor.map((item) => ({
        icon: item.icon as BestForItem["icon"],
        label: item.label,
      })),
    };
  });
}
