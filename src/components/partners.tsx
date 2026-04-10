"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

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
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    // #3: opposing parallax orbs
    const orbTopY    = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const orbBottomY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    return (
        <section
            ref={sectionRef}
            id="parceiros"
            aria-label="Os nossos parceiros"  // #4
            className="py-24 md:py-32 bg-surface relative overflow-hidden"  // #1
        >
            {/* Orb — top-right */}
            <motion.div
                style={{ y: orbTopY }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-primary/6 rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Orb — bottom-left */}
            <motion.div
                style={{ y: orbBottomY }}
                className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-primary/6 rounded-full filter blur-3xl pointer-events-none"
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
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Parcerias
                    </p>
                    {/* #2: fluid clamp H2 */}
                    <h2
                        className="font-display font-bold text-foreground mb-5"
                        style={{
                            fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Os Nossos Parceiros
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Trabalhamos com parceiros de referência para lhe garantir acesso às melhores
                        seguradoras e condições do mercado português.
                    </p>
                </motion.div>

                {/* Partner Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {partners.map((partner, index) => (
                        // ── Outer wrapper: entrance animation only ──
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.15, ease: EASE }}
                            className="h-full"
                        >
                            {/* ── Inner wrapper: hover lift ── */}
                            <motion.div
                                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                className="h-full"
                            >
                                <div className={[
                                    "group h-full bg-white rounded-3xl p-8",
                                    "border border-border/30 transition-[box-shadow,border-color] duration-500",
                                    "[@media(hover:hover)]:hover:shadow-xl",
                                    "[@media(hover:hover)]:hover:border-primary/20",
                                ].join(" ")}>

                                    {/* #7: Premium logo container — gradient border frame */}
                                    <div className="rounded-2xl p-px bg-gradient-to-br from-primary/25 via-teal-400/10 to-primary/5 mb-7">
                                        <div className="bg-white rounded-[calc(1rem-1px)] flex items-center justify-center h-20 relative overflow-hidden shadow-sm [@media(hover:hover)]:group-hover:shadow-md transition-shadow duration-300">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain p-4"
                                                sizes="320px"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                                        {partner.name}
                                    </h3>

                                    {/* #8: line-length cap on description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-7 max-w-[65ch]">
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
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* #6: Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
                    className="text-center mt-14"
                >
                    <p className="text-muted-foreground text-sm mb-5">
                        Acesso às melhores{" "}
                        <span className="font-semibold text-foreground">seguradoras do mercado</span>
                        {" "}— sempre com as condições mais competitivas
                    </p>

                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                    >
                        Peça uma Proposta
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <p className="text-muted-foreground text-xs mt-3 tracking-wide">
                        Grátis · Sem compromisso · Resposta em 24h
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
