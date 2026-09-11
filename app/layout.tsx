import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.islaspartyrentals.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Islas Party Rentals",
  url: "https://www.islaspartyrentals.com",
  telephone: "+1-831-540-0652",
  email: "islaspartyrentalsinc@gmail.com",
  image: "https://www.islaspartyrentals.com/images/social-share.png",
  description:
    "Renta de sillas, mesas, sombrillas y toldos para fiestas, reuniones y eventos en Salinas, California.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salinas",
    addressRegion: "CA",
    addressCountry: "US",
  },
};
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  {children}
</body>
    </html>
  );
}
