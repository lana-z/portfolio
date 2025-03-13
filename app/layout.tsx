import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif, IBM_Plex_Sans_Condensed, Shadows_Into_Light } from 'next/font/google'
import { ErrorBoundary } from "@/lib/error-boundary";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-mono',
});

const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-serif',
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-plex-condensed',
});

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shadows',
});

export const metadata: Metadata = {
  title: "Lana Zumbrunn | Portfolio",
  description: "Software developer and Technical PM with a background in Strategy. Explore my projects and expertise.",
  openGraph: {
    title: "Lana Zumbrunn | Portfolio",
    description: "Software developer and Technical PM with a background in Strategy. Explore my projects and expertise.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lana Zumbrunn Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lana Zumbrunn | Portfolio",
    description: "Software developer and Technical PM with a background in Strategy. Explore my projects and expertise.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${plexSerif.variable} ${plexCondensed.variable} ${shadowsIntoLight.variable} font-sans antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
