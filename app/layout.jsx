import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://intelectaabogadas.com.ar"),
  title: "Intelecta Abogadas | Registro de Marcas y Propiedad Intelectual",
  description:
    "Abogadas especializadas en registro de marcas ante el INPI, propiedad intelectual, patentes y derecho tecnológico. Protegé tu marca en toda Argentina, 100% online.",
  keywords:
    "registro de marcas Argentina, registrar marca, propiedad intelectual, abogadas de marcas, INPI, protección de marca, custodia de marcas, patentes, derecho tecnológico",
  authors: [{ name: "Intelecta Abogadas" }],
  alternates: {
    canonical: "https://intelectaabogadas.com.ar/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://intelectaabogadas.com.ar/",
    siteName: "Intelecta Abogadas",
    title: "Intelecta Abogadas | Registro de Marcas y Propiedad Intelectual",
    description:
      "Protegemos lo que hace única a tu marca. Registro de marcas ante el INPI, patentes y derecho tecnológico en toda Argentina.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intelecta Abogadas — registro de marcas y propiedad intelectual en Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelecta Abogadas | Registro de Marcas en Argentina",
    description:
      "Registro de marcas ante el INPI, propiedad intelectual y derecho tecnológico. Protegé tu marca en toda Argentina.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport = {
  themeColor: "#46353e",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Intelecta Abogadas",
  description:
    "Estudio jurídico boutique especializado en propiedad intelectual, registro de marcas ante el INPI, patentes y derecho tecnológico. Trabajamos de forma online en toda Argentina.",
  url: "https://intelectaabogadas.com.ar/",
  image: "https://intelectaabogadas.com.ar/og-image.jpg",
  logo: "https://intelectaabogadas.com.ar/icon.png",
  areaServed: { "@type": "Country", name: "Argentina" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bahía Blanca",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  knowsAbout: [
    "Registro de marcas",
    "Propiedad intelectual",
    "INPI",
    "Protección de marca",
    "Patentes",
    "Derechos de autor",
    "Derecho tecnológico",
    "Custodia y vigilancia de marcas",
  ],
  telephone: "+5492915724707",
  sameAs: [
    "https://www.instagram.com/intelecta.abogadas",
    "https://wa.me/5492915724707",
    "https://www.linkedin.com/in/bianca-massarella-martinez-5909b02a3",
    "https://www.linkedin.com/in/delfinaalvarezp",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+5492915724707",
    availableLanguage: ["Spanish"],
    areaServed: "AR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
