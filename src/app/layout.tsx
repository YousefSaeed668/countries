import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { Header } from "@/components/header";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Where Is The World ?",
  description:
    "Where Is The World? is an interactive and informative web platform designed to provide a comprehensive atlas of all the countries around the globe. With a user-friendly interface and a visually engaging map, users can effortlessly browse through nations and click on any country of interest. Upon selection, the website presents a detailed profile of the country, including key statistics such as population, capital, region, and language information. Additionally, it highlights the country's neighboring nations, offering insights into its geographical context and bordering countries. Whether you're a geography enthusiast, a student seeking educational resources, or simply curious about the world, Where Is The World?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito_sans.className} bg-background`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
