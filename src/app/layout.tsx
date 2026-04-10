import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alenteseguros.pt"),
  title: {
    default: "AlenteSeguros | Mediação de Seguros em Gavião",
    template: "%s | AlenteSeguros",
  },
  description:
    "Mediação de seguros eficiente e confiável no Alentejo. Seguros de habitação, automóvel, saúde e vida. Atendimento personalizado em Gavião, Portugal.",
  keywords: [
    "seguros",
    "mediação de seguros",
    "Gavião",
    "Alentejo",
    "Portugal",
    "habitação",
    "automóvel",
    "saúde",
    "vida",
    "seguradoras",
    "HPR",
    "SABSEG",
  ],
  authors: [{ name: "AlenteSeguros" }],
  openGraph: {
    title: "AlenteSeguros | Mediação de Seguros em Gavião",
    description:
      "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
    url: "https://alenteseguros.pt",
    siteName: "AlenteSeguros",
    type: "website",
    locale: "pt_PT",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlenteSeguros | Mediação de Seguros em Gavião",
    description:
      "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "https://alenteseguros.pt" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-[#080f1e] text-[#f0ede8]`}
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
