"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Users, Award, Clock, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

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
    const sectionRef     = useRef<HTMLElement>(null);
    const prefersReduced = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    // Parallax orbs — opposing directions
    const orbLeftY  = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const orbRightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    // Image parallax — moves slower than page scroll, creates depth
    // Image wrapper is oversized by 32px top + bottom so movement never reveals a gap
    const imageParallaxY = useTransform(scrollYProgress, [0, 1], [25, -25]);

    return (
        <section
            ref={sectionRef}
            id="sobre"
            aria-label="Sobre nós"
            className="py-24 md:py-32 bg-surface relative overflow-hidden"
        >
            {/* Orb — top-left */}
            <motion.div
                style={{ y: orbLeftY }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-primary/6 rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Orb — bottom-right */}
            <motion.div
                style={{ y: orbRightY }}
                className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-primary/6 rounded-full filter blur-3xl pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Asymmetric grid — image column slightly wider */}
                <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-20 items-center">

                    {/* ── Left: Content ───────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Sobre Nós
                        </p>

                        <h2
                            className="font-display font-bold text-foreground mb-6 leading-tight"
                            style={{
                                fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Quem Somos
                        </h2>

                        <p className="text-lg text-muted-foreground mb-5 leading-relaxed max-w-[65ch]">
                            A <strong className="text-foreground font-semibold">AlenteSeguros</strong> é uma mediadora
                            de seguros localizada em Gavião, no coração do Alentejo. Com um compromisso firme com a
                            eficiência e a confiança, oferecemos soluções de seguros personalizadas para particulares
                            e empresas.
                        </p>
                        <p className="text-muted-foreground mb-10 leading-relaxed max-w-[65ch]">
                            A nossa missão é{" "}
                            <span className="text-primary font-semibold">simplificar o mundo dos seguros</span>,
                            garantindo que cada cliente encontra a proteção ideal para as suas necessidades.
                            Trabalhamos lado a lado consigo para que se sinta seguro em cada momento da vida.
                        </p>

                        {/* Features */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    viewport={VP}
                                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: EASE }}
                                >
                                    <motion.div
                                        whileHover={{ x: 5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                                        className="flex items-start gap-4 group cursor-default"
                                    >
                                        <div className="flex items-center gap-3 shrink-0 pt-0.5">
                                            <div className="w-0.5 h-10 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                                            <feature.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-[color,transform] duration-300 group-hover:scale-110" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social proof + CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
                            className="mt-10"
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-5 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                                    Autorizado pela ASF
                                </span>
                                <span aria-hidden="true" className="text-border select-none">·</span>
                                <span className="flex items-center gap-1.5">
                                    <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                                    10+ anos de experiência
                                </span>
                                <span aria-hidden="true" className="text-border select-none">·</span>
                                <span className="flex items-center gap-1.5">
                                    <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                                    300+ clientes satisfeitos
                                </span>
                            </div>

                            <Link
                                href="/contacto"
                                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                            >
                                Fale Connosco
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Image + Partners ─────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        {/* Image with scroll-driven parallax */}
                        <div className="relative">
                            {/* Gradient border frame */}
                            <div className="rounded-3xl p-px bg-gradient-to-br from-primary/40 via-teal-400/20 to-primary/10">
                                {/* overflow-hidden clips the parallax movement cleanly */}
                                <div className="relative aspect-[4/3] rounded-[calc(1.5rem-1px)] overflow-hidden">
                                    {/* Image wrapper oversized by 32px top + bottom — absorbs parallax travel */}
                                    <motion.div
                                        className="absolute inset-x-0 -top-8 -bottom-8"
                                        style={{ y: prefersReduced ? 0 : imageParallaxY }}
                                        animate={prefersReduced ? {} : { scale: 1.06 }}
                                        transition={{
                                            duration:   14,
                                            repeat:     Infinity,
                                            repeatType: "reverse",
                                            ease:       "easeInOut",
                                        }}
                                    >
                                        <Image
                                            src="/img_01.webp"
                                            alt="Escritório AlenteSeguros em Gavião"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                                </div>
                            </div>

                            {/* Credential badge — static, no continuous animation */}
                            <div className="absolute bottom-5 left-5 z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-white/60 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Shield className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-foreground leading-tight">Certificado ASF</p>
                                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">Mediador Autorizado</p>
                                </div>
                            </div>
                        </div>

                        {/* Partners */}
                        <div className="mt-10 pt-8 border-t border-border/30">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">
                                Em parceria com
                            </p>
                            <div className="flex items-center justify-center gap-6">
                                <div className="bg-white border border-border/50 rounded-xl shadow-sm flex items-center justify-center h-16 w-36 relative overflow-hidden hover:shadow-md transition-shadow duration-200">
                                    <Image
                                        src="/hpr.webp"
                                        alt="HPR Seguros"
                                        fill
                                        className="object-contain p-3"
                                        sizes="144px"
                                    />
                                </div>
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
