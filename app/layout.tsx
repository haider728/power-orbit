import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/app/tailwind.css";
import "@/app/scroll-fix.css";
import "@/app/theme-overrides.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'
import CustomCursor from "@/components/elements/CustomCursor";
import SmoothScroll from "@/components/elements/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // available weights
  display: 'swap',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400', // you can choose available weights
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Power Orbit",
    template: "%s | Power Orbit",
  },
  description:
    "Power Orbit delivers IoT infrastructure and telematics intelligence for mission-critical fleet and enterprise operations in Saudi Arabia and beyond.",
  icons: {
    icon: [
      {
        url: "/assets/images/favicons/favicon%202.png",
        type: "image/png",
      },
    ],
    apple: {
      url: "/assets/images/favicons/favicon%202.png",
      type: "image/png",
    },
    shortcut: "/assets/images/favicons/favicon%202.png",
  },
  manifest: "/assets/images/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`custom-cursor ${spaceGrotesk.className}`}>
        <SmoothScroll />
        <CustomCursor />
        <div className={marcellus.className}></div>
        {children}
      </body>
    </html>
  );
}
