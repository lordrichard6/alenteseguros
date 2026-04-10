"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

const features = [
    {
        icon: Users,
        title: "Atendimento Personalizado",
        description: "Conhecemos cada cliente pelo nome e tratamos cada caso com cuidado único.",
    },
    {
        icon: Award,
        title: "Parceiros de Confiança",
        description: "Trabalhamos com as melhores seguradoras para lhe garantir as melhores condições.",
    },
    {
        icon: Clock,
        title: "Resposta Rápida",
        description: "Estamos sempre disponíveis para si, com respostas ágeis a todas as suas questões.",
    },
];

export function About() {
    return (
        <section id="sobre" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* ── Left: Content ───────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        {/* Overline */}
                        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Sobre Nós
                        </p>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Quem Somos
                        </h2>

                        <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                            A <strong className="text-foreground font-semibold">AlenteSeguros</strong> é uma mediadora
                            de seguros localizada em Gavião, no coração do Alentejo. Com um compromisso firme com a
                            eficiência e a confiança, oferecemos soluções de seguros personalizadas para particulares
                            e empresas.
                        </p>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            A nossa missão é{" "}
                            <span className="text-primary font-semibold">simplificar o mundo dos seguros</span>,
                            garantindo que cada cliente encontra a proteção ideal para as suas necessidades.
                            Trabalhamos lado a lado consigo para que se sinta seguro em cada momento da vida.
                        </p>

                        {/* Features */}
                        <div className="space-y-5">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={VP}
                                    transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: EASE }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                        <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-0.5">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Image + Partners ─────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="space-y-8"
                    >
                        {/* Image with teal gradient border */}
                        <div className="relative rounded-3xl p-0.5 bg-gradient-to-br from-primary/35 via-primary/10 to-transparent">
                            <div className="relative aspect-[4/3] rounded-[calc(1.5rem-2px)] overflow-hidden">
                                <Image
                                    src="/img_01.webp"
                                    alt="Escritório AlenteSeguros em Gavião"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                        </div>

                        {/* Partners */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5 text-center">
                                Em parceria com
                            </p>
                            <div className="flex items-center justify-center gap-6">
                                {/* HPR */}
                                <div className="bg-white border border-border/50 rounded-xl shadow-sm flex items-center justify-center h-16 w-36 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
                                    <Image
                                        src="/hpr.webp"
                                        alt="HPR Seguros"
                                        fill
                                        className="object-contain p-3"
                                        sizes="144px"
                                    />
                                </div>
                                {/* SABSEG */}
                                <div className="bg-white border border-border/50 rounded-xl shadow-sm flex items-center justify-center h-16 w-36 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
                                    <Image
                                        src="/sabseg.svg"
                                        alt="SABSEG"
                                        fill
                                        className="object-contain p-3"
                                        sizes="144px"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
