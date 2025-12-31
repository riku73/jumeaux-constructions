import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Construction Luxembourg | Maisons Clé en Main | Jumeaux Constructions",
  description:
    "Entreprise de construction au Luxembourg spécialisée en résidentiel, commercial et industriel. Maisons clé en main, qualité garantie. Devis gratuit!",
  keywords: [
    "construction Luxembourg",
    "maison clé en main Luxembourg",
    "constructeur maison Luxembourg",
    "entreprise construction Luxembourg",
    "construction résidentielle Luxembourg",
    "construction commerciale Luxembourg",
    "construction industrielle Luxembourg",
    "maison passive Luxembourg",
    "Jumeaux Constructions",
    "Tuntange",
  ],
  authors: [{ name: "Jumeaux Constructions S.à r.l." }],
  creator: "Jumeaux Constructions",
  publisher: "Jumeaux Constructions S.à r.l.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jumeaux-constructions.lu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jumeaux Constructions | Construction au Luxembourg",
    description:
      "Votre partenaire de confiance pour tous vos projets de construction au Luxembourg. Résidentiel, commercial, industriel - de la conception à la remise des clés.",
    url: "https://jumeaux-constructions.lu",
    siteName: "Jumeaux Constructions",
    locale: "fr_LU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jumeaux Constructions - Construction au Luxembourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumeaux Constructions | Construction au Luxembourg",
    description:
      "Entreprise de construction spécialisée en résidentiel, commercial et industriel au Luxembourg.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
