import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Partners } from "@/components/partners";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
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
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
