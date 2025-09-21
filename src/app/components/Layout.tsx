"use client";

import { ReactNode } from "react";
import Script from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import BottomNavPortal from "./BottomNavPortal";
import { Provider } from "../providers";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
// export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (
    <Provider>
      <div className="site_content">
        {/* Navbar full width */}
        <Navbar />

        {/* Konten full width (tanpa container) */}
        <main className="content">
          {children}
        </main>

        <BottomNavPortal />
        {/* Footer full width */}
        <Footer />

        {/* External Scripts */}
        <Script src="/assets/js/jquery-min-3.6.0.js" strategy="beforeInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </div>
    </Provider>
  );
}
