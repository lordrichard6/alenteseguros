import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://alenteseguros.pt"),
    title: "AlenteSeguros | Mediação de Seguros em Gavião",
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
    },
    twitter: {
        card: "summary_large_image",
        title: "AlenteSeguros | Mediação de Seguros em Gavião",
        description:
            "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
    },
    icons: {
        icon: "/logo.svg",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    alternates: {
        canonical: "https://alenteseguros.pt",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className="scroll-smooth">
            <body className={`${playfair.variable} ${jakarta.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
