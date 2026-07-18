import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Puspa - Kampung Sehat Terpadu RW 06 Utan Kayu Selatan",
  description: "Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong dan inovasi pertanian perkotaan.",
  keywords: ["green puspa", "petani kota green puspa", "green puspa utan kayu", "urban farming jakarta timur", "hidroponik jakarta timur", "akuaponik jakarta timur", "kampung sehat terpadu", "smart urban farming jakarta", "rw 06 utan kayu selatan", "kelompok tani green puspa"],
  openGraph: {
    title: "Green Puspa",
    description: "Kampung Sehat Terpadu Green Puspa RW 06 Utan Kayu Selatan",
    url: "https://greenpuspa.org",
    siteName: "Green Puspa",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Puspa Urban Farming",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Puspa",
    description: "Kampung Sehat Terpadu Green Puspa RW 06 Utan Kayu Selatan",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
