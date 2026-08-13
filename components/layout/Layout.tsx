// components/layout/Layout.tsx
// ✅ SERVER COMPONENT (no "use client")

import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import LocaleBoundary from "@/components/providers/LocaleBoundary";
import HashScrollHandler from "@/components/layout/HashScrollHandler";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import DeferredFooter from "@/components/layout/DeferredFooter";

interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: 1 | 2 | 3 | 4 | 5; // choose header variant
  footerStyle?: 1 | 2;    // choose footer variant
  breadcrumbTitle?: string;
}

export default function Layout({
  children,
  headerStyle = 1,
  footerStyle = 1,
  breadcrumbTitle,
}: LayoutProps) {
  return (
    <div className="page-wrapper" id="top">
      <HashScrollHandler />
      {/* Header (client component) */}
      <Header style={headerStyle} />

      {/* Breadcrumbs (server components) */}
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {/* Main page content */}
      <main>
        <LocaleBoundary>{children}</LocaleBoundary>
      </main>

      {/* Footer (server component) */}
      <DeferredFooter style={footerStyle} />
      <WhatsAppFloat />
    </div>
  );
}
