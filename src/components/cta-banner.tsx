"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

const CIRCLE_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`;

export function CtaBanner() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    // Pattern moves opposite to scroll — creates depth against the static gradient
    const patternY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section
            ref={sectionRef}
            aria-label="Pedido de orçamento"
            className="py-24 md:py-28 relative overflow-hidden"
        >
            {/* Bright teal gradient — more energetic than the dark sections */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-primary to-teal-500" />

            {/* Circle pattern — scroll-driven parallax */}
            <motion.div
                style={{
                    y:               patternY,
                    backgroundImage: CIRCLE_PATTERN,
                    backgroundSize:  "80px 80px",
                }}
                className="absolute -inset-x-0 -top-10 -bottom-10 opacity-[0.04] pointer-events-none"
            />

            {/* Ambient orbs */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={VP}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center text-white max-w-3xl mx-auto"
                >
                    <h2
                        className="font-display font-bold mb-6 leading-[1.1]"
                        style={{
                            fontSize:      "clamp(2rem, 5vw, 3.5rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Pronto para proteger<br />
                        o que mais valoriza?
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Contacte-nos hoje e receba um orçamento personalizado sem compromisso.
                        Estamos aqui para simplificar o mundo dos seguros para si.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-white/92 font-semibold h-12 px-8 text-base shadow-xl shadow-black/15"
                        >
                            <a href="/contacto" className="gap-2">
                                Peça um Orçamento
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-green-500 hover:bg-green-400 text-white font-semibold h-12 px-8 text-base border-0 shadow-xl shadow-black/15"
                        >
                            <a
                                href="https://wa.me/351938121196"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Falar por WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
