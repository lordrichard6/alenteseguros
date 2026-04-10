"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

const partners = [
    {
        logo: "/hpr.webp",
        name: "HPR Seguros",
        description:
            "Rede de distribuição de seguros com acesso às principais seguradoras do mercado português, garantindo sempre as melhores condições e coberturas para os nossos clientes.",
        highlights: [
            "Ampla rede de seguradoras parceiras",
            "Produtos para particulares e empresas",
            "Apoio técnico especializado",
        ],
    },
    {
        logo: "/sabseg.svg",
        name: "SABSEG",
        description:
            "Parceiro de referência no sector segurador, com soluções adaptadas às necessidades de mediadores e clientes exigentes em todo o território nacional.",
        highlights: [
            "Soluções personalizadas por perfil",
            "Plataforma digital integrada",
            "Cobertura em todo o país",
        ],
    },
];

export function Partners() {
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
                        Parcerias
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                        Os Nossos Parceiros
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Trabalhamos com parceiros de referência para lhe garantir acesso às melhores
                        seguradoras e condições do mercado português.
                    </p>
                </motion.div>

                {/* Partners cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.15, ease: EASE }}
                            className="bg-surface border border-border/30 rounded-3xl p-8 hover:shadow-xl hover:border-primary/25 transition-all duration-500 group"
                        >
                            {/* Logo container */}
                            <div className="bg-white border border-border/40 rounded-2xl flex items-center justify-center h-20 relative mb-7 shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain p-4"
                                    sizes="320px"
                                />
                            </div>

                            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                                {partner.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                                {partner.description}
                            </p>

                            <ul className="space-y-3">
                                {partner.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-center gap-3 text-sm text-foreground/80"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
