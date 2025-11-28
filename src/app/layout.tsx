import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/cookies/cookie-consent";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  title: "MKC — Construction Project Management | Value Engineering & Delivery",
  description: "MKC delivers construction project management: value engineering, pre‑construction, procurement, and delivery with a focus on cost, risk, and quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {/* Keep app minimal: only core providers/components */}
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}