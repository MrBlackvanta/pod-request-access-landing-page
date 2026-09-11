import type { Metadata, Viewport } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";

const SITE_URL =
  "https://pod-request-access-landing-page.abdelrhman-ahmed8881.workers.dev";

const name = "pod";
const title = `${name} | Publish your podcasts everywhere`;
const description =
  "Upload your audio with a single click and pod distributes your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more. Request access.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "pod, the podcast platform that distributes to Spotify, Apple Podcasts, Google Podcasts and Pocket Casts.",
};

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121725",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chivo.variable} antialiased`}>
      <body className="bg-page">{children}</body>
    </html>
  );
}
