"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Search, FileText, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

const CIRCLE_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`;

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Contacto",
        description:
            "Entre em contacto connosco por telefone, email ou WhatsApp. Estamos sempre disponíveis para ouvir as suas necessidades.",
    },
    {
        number: "02",
        icon: Search,
        title: "Análise",
        description:
            "Analisamos a sua situação e necessidades específicas para identificar o tipo de cobertura mais adequado para si.",
    },
    {
        number: "03",
        icon: FileText,
        title: "Proposta",
        description:
            "Apresentamos as melhores opções das nossas seguradoras parceiras, com total transparência e sem qualquer compromisso.",
    },
    {
        number: "04",
        icon: ShieldCheck,
        title: "Cobertura",
        description:
            "Fica protegido com o seguro mais adequado para si, com acompanhamento próximo em todo o processo.",
    },
];

export function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    const orbTopY    = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const orbBottomY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    // Pattern moves at a different rate than the page — creates depth
    const patternY   = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section
            ref={sectionRef}
            id="como-funciona"
            aria-label="Como funciona o nosso processo"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Deep teal gradient — darker than CTA banner */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800" />

            {/* Circle pattern — scroll-driven parallax */}
            <motion.div
                style={{
                    y:               patternY,
                    backgroundImage: CIRCLE_PATTERN,
                    backgroundSize:  "80px 80px",
                }}
                className="absolute -inset-x-0 -top-10 -bottom-10 opacity-[0.04] pointer-events-none"
            />

            {/* Soft white glow — top-right */}
            <motion.div
                style={{ y: orbTopY }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Soft white glow — bottom-left */}
            <motion.div
                style={{ y: orbBottomY }}
                className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={VP}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="text-center mb-16"
                >
                    <p className="text-teal-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        O nosso processo
                    </p>
                    <h2
                        className="font-display font-bold text-white mb-5"
                        style={{
                            fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Como Funciona
                    </h2>
                    <p className="text-white/55 max-w-xl mx-auto leading-relaxed">
                        Simplificamos o processo de mediação para que encontre a protecção ideal
                        sem complicações e sem esforço da sua parte.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Animated draw-on connector line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={VP}
                        transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
                        style={{ transformOrigin: "left" }}
                        className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10 z-0"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={VP}
                                transition={{ duration: 0.55, delay: index * 0.12, ease: EASE }}
                                className="relative z-10"
                            >
                                {/* Mobile vertical connector */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={VP}
                                        transition={{ duration: 0.5, delay: index * 0.12 + 0.25, ease: EASE }}
                                        style={{ transformOrigin: "top" }}
                                        className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full mt-1 w-px h-9 bg-gradient-to-b from-white/25 to-transparent"
                                    />
                                )}

                                <motion.div
                                    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                    className="text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0.7 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={VP}
                                        transition={{
                                            delay:     index * 0.12 + 0.18,
                                            type:      "spring",
                                            stiffness: 250,
                                            damping:   18,
                                        }}
                                        className="relative inline-flex w-16 h-16 bg-primary rounded-2xl items-center justify-center mb-6 shadow-lg shadow-black/30 ring-4 ring-white/10"
                                    >
                                        <step.icon className="w-7 h-7 text-white" />
                                        <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-gradient-to-br from-teal-300 to-teal-500 text-teal-950 text-[10px] font-bold rounded-full flex items-center justify-center leading-none shadow-sm">
                                            {step.number}
                                        </span>
                                    </motion.div>

                                    <h3 className="font-display text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/55 text-sm leading-relaxed max-w-[210px] mx-auto">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
                    className="text-center mt-16"
                >
                    <p className="text-white/50 text-sm mb-5">
                        Processo simples,{" "}
                        <span className="font-semibold text-white/80">sem burocracia</span>
                        {" "}— do primeiro contacto à cobertura em dias
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg shadow-black/20"
                    >
                        Peça uma Análise Gratuita
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-white/35 text-xs mt-3 tracking-wide">
                        Grátis · Sem compromisso · Resposta em 24h
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
