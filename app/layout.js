import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Augmente le taux de conversion de tes visiteurs en clients avec une page de vente sur-mesure | Territa",
  description:
    "Construisons ensemble la page de vente qui te colle à la peau et ainsi auugmenter la conversion des visiteurs en leads qualifiés avec une page de vente authentique et sur-mesure.",
  keywords: [
    "créer une page de vente",
    "page de vente copywriting",
    "comment augmenter le taux de conversion",
    "comment créer une page de vente",
    "comment améliorer le traffic de mon site",
    "page de vente personnalisée",
    "page de vente sur-mesure",
    "page de vente qui convertit",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      " Augmente le taux de conversion de tes visiteurs en clients avec une page de vente sur-mesure | Territa",
    description:
      "Construisons ensemble la page de vente qui te colle à la peau et ainsi auugmenter la conversion des visiteurs en leads qualifiés avec une page de vente authentique et sur-mesure.",
    url: "https://services.territa.fr",
    images: [
      {
        url: "https://services.territa.fr/img/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Territa",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={` ${inter.className} bg-[#FAFAFA]`}>{children}</body>
    </html>
  );
}
