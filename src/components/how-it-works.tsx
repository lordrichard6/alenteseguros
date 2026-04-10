"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, FileText, ShieldCheck } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

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
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={VP}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        O nosso processo
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                        Como Funciona
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Simplificamos o processo de mediação para que encontre a protecção ideal
                        sem complicações e sem esforço da sua parte.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line — desktop only */}
                    <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border/50 z-0" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={VP}
                                transition={{ duration: 0.55, delay: index * 0.12, ease: EASE }}
                                className="relative text-center z-10"
                            >
                                {/* Icon circle with step badge */}
                                <div className="relative inline-flex w-16 h-16 bg-primary rounded-2xl items-center justify-center mb-6 shadow-lg shadow-primary/20 ring-4 ring-white">
                                    <step.icon className="w-7 h-7 text-white" />
                                    {/* Step number */}
                                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-foreground text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-[210px] mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
