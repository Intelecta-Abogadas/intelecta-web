import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
  title: "Intelecta Abogadas | Propiedad Intelectual y Registro de Marcas Argentina",
  description:
    "Estudio jurídico boutique especializado en Propiedad Intelectual, registro de marcas ante el INPI, derecho tecnológico, patentes y custodia de marcas en toda Argentina.",
  keywords:
    "registro de marcas Argentina, abogado propiedad intelectual, INPI, custodia de marcas, derecho tecnológico, patentes, derechos de autor",
  authors: [{ name: "Intelecta Abogadas" }],
  openGraph: {
    type: "website",
    title: "Intelecta Abogadas | Propiedad Intelectual en Argentina",
    description:
      "Protegemos lo que hace única a tu marca. Registro de marcas, patentes, derecho tecnológico y más.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
