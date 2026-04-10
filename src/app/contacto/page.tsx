import type { Metadata } from "next";
import { Users, Clock, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { ContactHero } from "@/components/contact-hero";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Contacto | AlenteSeguros",
    description:
        "Entre em contacto com a AlenteSeguros. Peça um orçamento personalizado para seguros de habitação, automóvel, saúde e vida em Gavião, Alentejo.",
    alternates: {
        canonical: "https://alenteseguros.pt/contacto",
    },
    openGraph: {
        title: "Contacto | AlenteSeguros",
        description:
            "Entre em contacto para obter um orçamento personalizado. Mediação de seguros em Gavião, Alentejo.",
        url: "https://alenteseguros.pt/contacto",
    },
};

const trustPoints = [
    { icon: Users,       metric: "300+",  label: "Clientes satisfeitos"  },
    { icon: Clock,       metric: "< 24h", label: "Tempo de resposta"     },
    { icon: ShieldCheck, metric: "100%",  label: "Sem compromisso"       },
];

export default function ContactoPage() {
    return (
        <>
            <Header />
            <main>
                {/* Animated page hero — client component */}
                <ContactHero />

                {/* Contact form + info */}
                <Contact />

                {/* Trust strip */}
                <div className="bg-white border-t border-border/20 py-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-border/20">
                            {trustPoints.map(({ icon: Icon, metric, label }, i) => (
                                <div key={i} className="flex items-center gap-3.5 px-10 md:px-14 py-4 sm:py-0">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-4.5 h-4.5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground leading-tight">{metric}</p>
                                        <p className="text-xs text-muted-foreground leading-snug">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
