import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";
import Script from "next/script";

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
import DeferredThemeModules from "@/components/performance/DeferredThemeModules";
import { SITE_LOGO_ANIMATED_SRC } from "@/lib/site-assets";

const GTM_ID = "GTM-N33WTD2K";

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
  // Preload to avoid delaying FCP/LCP on slower mobile connections.
  preload: true,
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
  verification: {
    google: "3qOqKvadp9f73Fq82D76W-3cSR_vwQa2ZleUNXsO_pw",
  },
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
        <link
          rel="preload"
          as="image"
          href={SITE_LOGO_ANIMATED_SRC}
          type="image/gif"
          fetchPriority="high"
        />
      </head>
      <body
        className={`custom-cursor ${spaceGrotesk.className}`}
        style={{ ["--font-space-grotesk" as string]: "Space Grotesk" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="lazyOnload">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        {/* End Google Tag Manager */}

        <LanguageProvider>
          <DeferredFontAwesome />
          <DeferredThemeModules />
          <ClientEnhancements />
          <div className={marcellus.className} />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
