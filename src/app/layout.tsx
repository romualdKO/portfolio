import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import "./project-art.css";
import "./experience.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b1115",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-romuald-konan.vercel.app"),
  title: "Romuald Konan — Développeur Full Stack & Master BIHAR",
  description:
    "Portfolio officiel de Konan Konan N’Dri Romuald, Développeur Full Stack et étudiant en Master BIHAR à l’ESATIC × ESTIA. Découvrez ses projets primés (RespiraBox, NovaSMS, SmartWatt), son parcours et ses compétences.",
  applicationName: "Portfolio de Romuald Konan",
  authors: [{ name: "Konan Konan N’Dri Romuald", url: "https://github.com/romualdKO" }],
  creator: "Romuald Konan",
  keywords: [
    "Romuald Konan",
    "Konan Konan N’Dri Romuald",
    "Développeur Full Stack",
    "ESATIC",
    "ESTIA",
    "Master BIHAR",
    "Abidjan",
    "Côte d'Ivoire",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Python",
    "Django",
    "IoT",
    "RespiraBox",
    "NovaSMS",
    "SmartWatt",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-romuald-konan.vercel.app",
    title: "Romuald Konan — Développeur Full Stack & Master BIHAR",
    description:
      "Développeur Full Stack et étudiant en Master BIHAR (ESATIC × ESTIA). Projets primés en E-Santé IoT, plateformes SaaS et architectures logicielles.",
    siteName: "Portfolio de Romuald Konan",
    images: [
      {
        url: "/romuald-konon-profile.png",
        width: 800,
        height: 800,
        alt: "Portrait de Romuald Konan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romuald Konan — Développeur Full Stack",
    description:
      "Portfolio de Romuald Konan : projets primés, ingénierie logicielle, IoT et data.",
    images: ["/romuald-konon-profile.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
