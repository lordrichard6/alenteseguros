import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alenteseguros.vercel.app";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "AlenteSeguros | Mediação de Seguros em Gavião",
        template: "%s | AlenteSeguros",
    },
    description:
        "Mediação de seguros eficiente e confiável no Alentejo. Seguros de habitação, automóvel, saúde e vida. Atendimento personalizado em Gavião, Portugal.",
    keywords: [
        // Identidade
        "AlenteSeguros",
        "mediação de seguros",
        "mediadora de seguros",
        "corretora de seguros Alentejo",
        // Localização
        "seguros Gavião",
        "seguros Alentejo",
        "seguros Portugal",
        "Gavião Portalegre",
        // Produtos
        "seguro habitação",
        "seguro automóvel",
        "seguro saúde",
        "seguro vida",
        "seguro multirriscos",
        "seguro empresarial",
        "seguro acidentes pessoais",
        // Intenção
        "simular seguro",
        "pedido de seguro online",
        "orçamento seguro Alentejo",
        "seguro barato Portugal",
        "melhor seguro habitação Portugal",
        // Parceiros
        "HPR seguros",
        "SABSEG",
        "seguros ASF autorizada",
        // Long-tail
        "mediação de seguros Gavião Portalegre",
        "seguro automóvel Alentejo",
        "atendimento personalizado seguros",
    ],
    authors: [{ name: "AlenteSeguros" }],
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
        title: "AlenteSeguros | Mediação de Seguros em Gavião",
        description:
            "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
        url: BASE_URL,
        siteName: "AlenteSeguros",
        type: "website",
        locale: "pt_PT",
        images: [
            {
                url: `${BASE_URL}/hero-poster.jpg`,
                width: 1200,
                height: 630,
                alt: "AlenteSeguros — Mediação de Seguros em Gavião, Alentejo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AlenteSeguros | Mediação de Seguros em Gavião",
        description:
            "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado.",
        images: [`${BASE_URL}/hero-poster.jpg`],
    },
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", sizes: "any" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    alternates: {
        canonical: BASE_URL,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            name: "AlenteSeguros",
            url: BASE_URL,
            logo: `${BASE_URL}/logo.svg`,
            description: "Mediação de seguros eficiente e confiável no Alentejo.",
            email: "geral@alenteseguros.pt",
            address: {
                "@type": "PostalAddress",
                streetAddress: "R. Dr. Eusébio Leão, Nº10",
                addressLocality: "Gavião",
                addressRegion: "Alentejo",
                postalCode: "6040-000",
                addressCountry: "PT",
            },
            sameAs: [],
        },
        {
            "@type": "LocalBusiness",
            "@id": `${BASE_URL}/#localbusiness`,
            name: "AlenteSeguros",
            url: BASE_URL,
            image: `${BASE_URL}/logo.svg`,
            description:
                "Mediadora de seguros autorizada pela ASF, especializada em seguros de habitação, automóvel, saúde, vida e empresarial. Atendimento personalizado em Gavião, Alentejo.",
            email: "geral@alenteseguros.pt",
            address: {
                "@type": "PostalAddress",
                streetAddress: "R. Dr. Eusébio Leão, Nº10",
                addressLocality: "Gavião",
                addressRegion: "Alentejo",
                postalCode: "6040-000",
                addressCountry: "PT",
            },
            areaServed: [
                { "@type": "Place", name: "Gavião" },
                { "@type": "Place", name: "Alentejo" },
                { "@type": "Place", name: "Portugal" },
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Seguros",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Habitação" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Automóvel" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Saúde" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Vida" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Empresarial" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguro Acidentes Pessoais" } },
                ],
            },
        },
        {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            url: BASE_URL,
            name: "AlenteSeguros",
            publisher: { "@id": `${BASE_URL}/#organization` },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable} antialiased`}>
                <SmoothScroll>{children}</SmoothScroll>
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
