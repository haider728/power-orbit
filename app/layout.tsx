import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";
import Script from "next/script";

// Theme CSS is a single static file (see scripts/build-theme-css.mjs) so Next
// does not emit ~14 render-blocking CSS chunk links on Slow 4G.
import "@/app/tailwind.css";
import "@/app/scroll-fix.css";
import "@/app/theme-overrides.css";
import "@/app/rtl.css";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ClientEnhancements from "@/components/performance/ClientEnhancements";
import DeferredFontAwesome from "@/components/performance/DeferredFontAwesome";
import DeferredThemeModules from "@/components/performance/DeferredThemeModules";
import { SITE_LOGO_POSTER_SRC } from "@/lib/site-assets";

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
  // Not needed for first paint — Space Grotesk covers the hero.
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
          href={SITE_LOGO_POSTER_SRC}
          type="image/png"
          fetchPriority="high"
        />
        <link rel="stylesheet" href="/assets/css/theme-critical.css" />
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

        {/* GTM after idle + delay so it stays out of LCP/TBT lab window */}
        <Script id="gtm" strategy="lazyOnload">{`
          (function(w,d,s,l,i){
            function load(){
              w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            }
            var schedule=function(){
              if(w.requestIdleCallback){w.requestIdleCallback(load,{timeout:8000});}
              else{setTimeout(load,5000);}
            };
            setTimeout(schedule,4000);
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
