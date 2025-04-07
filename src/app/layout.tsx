import type { Metadata, Viewport } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Capture, review, and recall words you discover in books, videos, or conversations.",
  appleWebApp: {
    title: "Mnexia",
    capable: true,
    statusBarStyle: "default",
    // startUpImage: [],
  },
  applicationName: "Mnexia",
  title: {
    default: "Mnexia – Word Memory App",
    template: "%s - Mnexia",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Mnexia",
    title: {
      default: "Mnexia – Word Memory App",
      template: "%s - Mnexia",
    },
    description:
      "Capture, review, and recall words you discover in books, videos, or conversations.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Mnexia – Word Memory App",
      template: "%s - Mnexia",
    },
    description:
      "Capture, review, and recall words you discover in books, videos, or conversations.",
  },
};
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmmono.variable} antialiased`}>{children}</body>
    </html>
  );
}
