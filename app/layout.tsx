import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { sfProDisplay } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

/* =========================
   SEO + OPEN GRAPH METADATA
   ========================= */
export const metadata: Metadata = {
  title: {
    default: "Ngurah Yudiantara — Frontend Developer & UI UX Designer",
    template: "%s | Ngurah Yudiantara",
  },

  description:
    "Ngurah Yudiantara is a Frontend Developer and UI UX Designer crafting clean, modern, and human-centered digital experiences with modern web technologies.",

  keywords: [
    "Ngurah Yudiantara",
    "Yudiantara",
    "Frontend Developer",
    "UI UX Designer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
  ],

  authors: [{ name: "Ngurah Yudiantara" }],
  creator: "Ngurah Yudiantara",
  publisher: "Ngurah Yudiantara",

  metadataBase: new URL("https://yudiantara.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ngurah Yudiantara — Frontend Developer & UI UX Designer",
    description:
      "Frontend Developer & UI UX Designer crafting clean, modern, and high-performing web interfaces.",
    url: "https://yudiantara.vercel.app",
    siteName: "Ngurah Yudiantara",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ngurah Yudiantara Portfolio Website",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ngurah Yudiantara — Frontend Developer & UI UX Designer",
    description:
      "Designing and developing modern, human-centered digital interfaces.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sfProDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
