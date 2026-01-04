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
  title: "AlenteSeguros | Mediação de Seguros em Gavião",
  description: "Mediação de seguros eficiente e confiável no Alentejo. Seguros de habitação, automóvel, saúde e vida. Atendimento personalizado em Gavião, Portugal.",
  keywords: ["seguros", "mediação de seguros", "Gavião", "Alentejo", "Portugal", "habitação", "automóvel", "saúde", "vida"],
  authors: [{ name: "AlenteSeguros" }],
  openGraph: {
    title: "AlenteSeguros | Mediação de Seguros em Gavião",
    description: "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
    type: "website",
    locale: "pt_PT",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
