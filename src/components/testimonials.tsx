"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

const CIRCLE_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`;

const testimonials = [
    {
        name: "Maria Santos",
        location: "Gavião",
        rating: 5,
        text: "Excelente atendimento! A Rita tratou de tudo com muita simpatia e profissionalismo. O processo foi muito mais simples do que esperava. Recomendo a toda a gente sem hesitar.",
    },
    {
        name: "João Ferreira",
        location: "Ponte de Sor",
        rating: 5,
        text: "Já sou cliente há vários anos. Sempre que preciso de ajuda ou tenho alguma questão, a resposta é rápida e clara. É bom saber que tenho alguém de confiança a cuidar dos meus seguros.",
    },
    {
        name: "Ana Costa",
        location: "Abrantes",
        rating: 5,
        text: "Conseguiram encontrar um seguro automóvel com melhor cobertura e preço mais baixo do que o que eu tinha. Fiquei muito satisfeita com o resultado e com a atenção que me dedicaram.",
    },
];

export function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    const orbTopY    = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const orbBottomY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    // Pattern parallax — opposite direction to orbs for depth layering
    const patternY   = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section
            ref={sectionRef}
            id="testemunhos"
            aria-label="Testemunhos dos clientes"
            className="py-24 md:py-32 relative overflow-hidden"
        >
            {/* Deep teal gradient — same family as HowItWorks, darker than CTA banner */}
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

            {/* Soft white glow — top-left */}
            <motion.div
                style={{ y: orbTopY }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Soft white glow — bottom-right */}
            <motion.div
                style={{ y: orbBottomY }}
                className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none"
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
                        Testemunhos
                    </p>
                    <h2
                        className="font-display font-bold text-white mb-5"
                        style={{
                            fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        O que Dizem os Clientes
                    </h2>
                    <p className="text-white/55 max-w-xl mx-auto leading-relaxed">
                        A satisfação dos nossos clientes é o reflexo mais honesto do nosso trabalho.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-5">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                            className="h-full"
                        >
                            <motion.div
                                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                className="h-full"
                            >
                                <div className={[
                                    "h-full rounded-2xl p-7 flex flex-col",
                                    "bg-white/[0.07] backdrop-blur-sm border border-white/10",
                                    "transition-[background,box-shadow] duration-500",
                                    "[@media(hover:hover)]:hover:bg-white/[0.11]",
                                    "[@media(hover:hover)]:hover:shadow-xl [@media(hover:hover)]:hover:shadow-black/20",
                                ].join(" ")}>
                                    <Quote className="w-7 h-7 text-teal-300/40 mb-5 shrink-0" />

                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>

                                    <p className="text-white/70 text-sm leading-relaxed flex-1 mb-7 italic">
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                                        <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-teal-300 font-bold text-sm">
                                                {t.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white text-sm leading-tight">{t.name}</p>
                                            <p className="text-white/45 text-xs mt-0.5">{t.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
                    className="text-center mt-14"
                >
                    <p className="text-white/50 text-sm mb-5">
                        Junte-se a mais de{" "}
                        <span className="font-semibold text-white/80">300 clientes satisfeitos</span>
                        {" "}em toda a região do Alentejo
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg shadow-black/20"
                    >
                        Peça uma Consulta Gratuita
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
