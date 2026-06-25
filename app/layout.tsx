import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/app/tailwind.css";
import "@/app/scroll-fix.css";
import "@/app/theme-overrides.css";
import "@/app/rtl.css";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ClientEnhancements from "@/components/performance/ClientEnhancements";
import DeferredFontAwesome from "@/components/performance/DeferredFontAwesome";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Power Orbit",
    template: "%s | Power Orbit",
  },
  description:
    "Power Orbit delivers IoT infrastructure and telematics intelligence for mission-critical fleet and enterprise operations in Saudi Arabia and beyond.",
  icons: {
    icon: [{ url: "/power-orbit-favicon.png", type: "image/png" }],
    apple: "/power-orbit-favicon.png",
    shortcut: "/power-orbit-favicon.png",
  },
  manifest: "/assets/images/favicons/site.webmanifest",
  other: {
    "dns-prefetch": "https://avl-ksa.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://avl-ksa.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://avl-ksa.com" />
      </head>
      <body
        className={`custom-cursor ${spaceGrotesk.className}`}
        style={{ ["--font-space-grotesk" as string]: "Space Grotesk" }}
      >
        <LanguageProvider>
          <DeferredFontAwesome />
          <ClientEnhancements />
          <div className={marcellus.className} />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
