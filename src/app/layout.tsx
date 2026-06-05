import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const doran = localFont({
  src: [
    {
      path: "./fonts/Doran-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Doran-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Doran-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-doran",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "لمسة | متجر تجميل فاخر",
    template: "%s | لمسة",
  },
  description: "صفحة بورتفوليو عربية لمتجر تجميل فاخر مستقل.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${doran.variable} min-h-[100svh] overflow-x-hidden bg-[#FFF8F0] font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
