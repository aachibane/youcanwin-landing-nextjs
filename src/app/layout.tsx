import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YouCanWin - Transformez chaque produit en expérience de jeu",
  description:
    "YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
