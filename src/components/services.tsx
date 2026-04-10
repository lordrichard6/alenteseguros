"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Car, Heart, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

const services = [
    {
        icon: Home,
        title: "Habitação",
        description:
            "Proteja o seu lar com coberturas completas. Seguros para casa, recheio e responsabilidade civil, adaptados à sua realidade.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Casa moderna com jardim",
    },
    {
        icon: Car,
        title: "Automóvel",
        description:
            "Seguros auto adaptados às suas necessidades. Cobertura completa ou contra terceiros, sempre com as melhores condições.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Automóvel numa estrada",
    },
    {
        icon: Heart,
        title: "Saúde",
        description:
            "Cuide de si e da sua família com tranquilidade. Planos de saúde personalizados para que nunca falte apoio quando precisa.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Profissional de saúde",
    },
    {
        icon: Briefcase,
        title: "Vida & Negócios",
        description:
            "Soluções para proteger o seu futuro e o seu negócio. Seguros de vida e empresariais pensados para cada fase da vida.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Profissional de negócios",
    },
];

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });

    const orbBottomY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const orbTopY    = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section
            ref={sectionRef}
            id="servicos"
            aria-label="Os nossos serviços"
            className="py-24 md:py-32 bg-surface relative overflow-hidden"
        >
            {/* Counter-orb — top-left */}
            <motion.div
                style={{ y: orbTopY }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-primary/8 rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Main orb — bottom-right */}
            <motion.div
                style={{ y: orbBottomY }}
                className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-primary/8 rounded-full filter blur-3xl pointer-events-none"
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
                        O que oferecemos
                    </p>
                    <h2
                        className="font-display font-bold text-foreground mb-5"
                        style={{
                            fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Os Nossos Serviços
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Oferecemos uma gama completa de seguros para proteger o que mais valoriza.
                        Soluções personalizadas para cada necessidade.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        // ── Outer wrapper: entrance animation only ──
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                            className="h-full"
                        >
                            {/* ── Inner wrapper: hover lift + tap feedback ── */}
                            <motion.div
                                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                whileTap={{ scale: 0.97, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                className="h-full"
                            >
                                <Link href="/contacto" className="block h-full">
                                    {/* ── Card ── */}
                                    <article className="group relative overflow-hidden rounded-2xl cursor-pointer min-h-[400px] flex flex-col shadow-md transition-shadow duration-500 [@media(hover:hover)]:hover:shadow-2xl [@media(hover:hover)]:hover:shadow-black/25">

                                        {/* Background image with Ken Burns on hover */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={service.image}
                                                alt={service.imageAlt}
                                                fill
                                                className="object-cover object-center transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>

                                        {/* Base overlay — dark gradient from bottom + persistent teal tint */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                                        <div className="absolute inset-0 bg-teal-950/30" />

                                        {/* Hover overlay — deepens on interaction */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 [@media(hover:hover)]:group-hover:opacity-100" />

                                        {/* Ordinal — watermark top-right */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-5 right-5 font-display font-bold text-white/[0.12] leading-none select-none pointer-events-none transition-opacity duration-500 [@media(hover:hover)]:group-hover:text-white/[0.2]"
                                            style={{ fontSize: "3.5rem" }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Content */}
                                        <div className="relative flex flex-col h-full p-7 pt-8">
                                            {/* Icon — top, bare, white */}
                                            <service.icon className="w-8 h-8 text-white/70 transition-[color,transform] duration-300 [@media(hover:hover)]:group-hover:text-white [@media(hover:hover)]:group-hover:scale-110 shrink-0" />

                                            {/* Push title + body to bottom */}
                                            <div className="mt-auto">
                                                <h3
                                                    className="font-display font-bold text-white mb-2 leading-tight"
                                                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}
                                                >
                                                    {service.title}
                                                </h3>

                                                {/* Description — revealed slightly more on hover */}
                                                <p className="text-white/60 text-sm leading-relaxed mb-5 transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white/80">
                                                    {service.description}
                                                </p>

                                                {/* CTA */}
                                                <div className="flex items-center gap-1.5 text-sm font-semibold text-white/50 transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white">
                                                    <span>Saber mais</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Section CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
                    className="text-center mt-14"
                >
                    <p className="text-muted-foreground text-sm mb-5">
                        Mais de{" "}
                        <span className="font-semibold text-foreground">300 clientes</span>
                        {" "}satisfeitos em toda a região do Alentejo
                    </p>

                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/20"
                    >
                        Peça um Orçamento
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
