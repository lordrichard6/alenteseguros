import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Contacto | AlenteSeguros",
    description:
        "Entre em contacto com a AlenteSeguros. Peça um orçamento personalizado para seguros de habitação, automóvel, saúde e vida em Gavião, Alentejo.",
};

export default function ContactoPage() {
    return (
        <>
            <Header />
            <main className="pt-20 md:pt-24">
                <Contact />
            </main>
            <Footer />
        </>
    );
}
