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
  alternates: {
  canonical: "/",
},
  title: "Islas Party Rentals | Party Rentals en Salinas, CA",
  description:
    "Renta de sillas, mesas, sombrillas y toldos para bodas, fiestas, reuniones y eventos en Salinas, California. Cotiza tu evento con Islas Party Rentals.",

  keywords: [
    "party rentals Salinas CA",
    "event rentals Salinas CA",
    "chair rentals Salinas CA",
    "table rentals Salinas CA",
    "tent rentals Salinas CA",
    "renta de sillas Salinas CA",
    "renta de mesas Salinas CA",
    "renta de toldos Salinas CA",
    "Islas Party Rentals",
  ],

  openGraph: {
    url: "https://www.islaspartyrentals.com",
    title: "Islas Party Rentals | Salinas, CA",
    description:
      "Sillas, mesas, sombrillas y toldos para bodas, fiestas, reuniones y eventos.",
    type: "website",
    locale: "en_US",
    siteName: "Islas Party Rentals",
    images: [
  {
    url: "/images/social-share.png",
    width: 1200,
    height: 630,
    alt: "Islas Party Rentals - Salinas, California",
  },
  
],

  },
twitter: {
  card: "summary_large_image",
  title: "Islas Party Rentals | Salinas, CA",
  description:
    "Sillas, mesas, sombrillas y toldos para bodas, fiestas, reuniones y eventos.",
  images: ["/images/social-share.png"],
},
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
      lang="en"
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
