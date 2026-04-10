import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { FaqHero } from "@/components/faq-hero";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Perguntas Frequentes | AlenteSeguros",
    description:
        "Esclareça as suas dúvidas sobre mediação de seguros, coberturas, parceiros e muito mais. AlenteSeguros — Gavião, Alentejo.",
    alternates: {
        canonical: "https://alenteseguros.pt/faq",
    },
    openGraph: {
        title: "Perguntas Frequentes | AlenteSeguros",
        description:
            "Esclareça as suas dúvidas sobre mediação de seguros, coberturas, parceiros e muito mais.",
        url: "https://alenteseguros.pt/faq",
    },
};

export default function FaqPage() {
    return (
        <>
            <Header />
            <main>
                {/* Animated page hero */}
                <FaqHero />

                {/* FAQ accordion */}
                <Faq />

                {/* Mid-page nudge — catches users who didn't find their answer */}
                <div className="bg-surface py-10 text-center border-t border-border/20">
                    <p className="text-muted-foreground text-sm">
                        Ainda tem dúvidas?{" "}
                        <Link
                            href="/contacto"
                            className="text-primary font-semibold hover:underline underline-offset-4 transition-colors"
                        >
                            Contacte-nos directamente →
                        </Link>
                    </p>
                </div>

                {/* CTA */}
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}
