import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPLEX = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-ibm-plex' });

export const metadata: Metadata = {
  title: "AI - Canvas",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        variables:{colorPrimary:'#624cf5'}
      }}>
      <body className={cn("font-IBMPLEX antialiased", IBMPLEX.variable)}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
