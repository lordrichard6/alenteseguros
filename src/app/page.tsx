import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
    title: "AlenteSeguros | Mediação de Seguros em Gavião",
    description:
        "Mediação de seguros eficiente e confiável no Alentejo. Seguros de habitação, automóvel, saúde e vida. Atendimento personalizado em Gavião, Portugal.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "AlenteSeguros | Mediação de Seguros em Gavião",
        description: "Mediação de seguros eficiente e confiável no Alentejo. Atendimento personalizado em Gavião.",
        url: "/",
    },
};
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <HowItWorks />
        <About />
        <Testimonials />
        <Partners />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
