"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Home, Car, Heart, Briefcase, Lock, Award, Phone } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const coverages = [
    { icon: Home, label: "Habitação" },
    { icon: Car, label: "Automóvel" },
    { icon: Heart, label: "Saúde" },
    { icon: Briefcase, label: "Vida & Negócios" },
];

const trustSignals = [
    { icon: Lock, label: "Dados Protegidos" },
    { icon: Award, label: "Serviço Certificado" },
    { icon: Phone, label: "Atendimento Rápido" },
];

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* White base */}
            <div className="absolute inset-0 bg-white" />

            {/* Right teal surface — desktop only */}
            <div className="absolute right-0 top-0 bottom-0 w-0 lg:w-[48%] bg-surface" />

            {/* Subtle decorative orb — top right */}
            <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-primary/6 rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">

                    {/* ── Left: Content ─────────────────────────────── */}
                    <div className="order-2 lg:order-1 lg:py-24">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8"
                        >
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">
                                Mediação de Seguros Certificada
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
                            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-foreground leading-[1.1] mb-6"
                        >
                            Proteja o que<br />
                            mais valoriza<br />
                            <span className="text-primary">com confiança.</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
                            className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed"
                        >
                            Mediação de seguros eficiente e confiável, com atendimento personalizado
                            para cada família e empresa no Alentejo.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="font-semibold shadow-lg shadow-primary/20 h-13 px-8 text-base"
                            >
                                <a href="#contacto" className="gap-2">
                                    Peça um Orçamento
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-border/70 h-13 px-8 text-base font-semibold hover:bg-muted/50"
                            >
                                <a href="#servicos">Os Nossos Serviços</a>
                            </Button>
                        </motion.div>

                        {/* Trust signals */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
                            className="flex flex-wrap items-center gap-x-6 gap-y-3"
                        >
                            {trustSignals.map((signal) => (
                                <div
                                    key={signal.label}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <signal.icon className="w-4 h-4 text-primary shrink-0" />
                                    <span>{signal.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right: Floating protection card ───────────── */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
                        <div className="relative w-full max-w-[360px]">
                            {/* Layered shadow backgrounds */}
                            <div className="absolute -top-3 -right-3 w-full h-full bg-primary/12 rounded-3xl" />
                            <div className="absolute -top-6 -right-6 w-full h-full bg-primary/6 rounded-3xl" />

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 36, filter: "blur(14px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                            >
                                <motion.div
                                    animate={{ y: [0, -9, 0] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative bg-gradient-to-br from-teal-800 via-primary to-teal-500 rounded-3xl p-7 shadow-2xl shadow-primary/25"
                                >
                                    {/* Logo */}
                                    <div className="mb-7">
                                        <Image
                                            src="/logo_full.svg"
                                            alt="AlenteSeguros"
                                            width={200}
                                            height={48}
                                            className="brightness-0 invert w-40 h-auto"
                                            priority
                                        />
                                    </div>

                                    {/* Coverages label */}
                                    <p className="text-white/55 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                                        Coberturas Disponíveis
                                    </p>

                                    {/* Coverage pills */}
                                    <div className="grid grid-cols-2 gap-2.5 mb-7">
                                        {coverages.map((c) => (
                                            <div
                                                key={c.label}
                                                className="bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2.5 flex items-center gap-2"
                                            >
                                                <c.icon className="w-3.5 h-3.5 text-white/80 shrink-0" />
                                                <span className="text-white text-xs font-medium leading-tight">
                                                    {c.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-white/20 mb-5" />

                                    {/* Certified badge */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-semibold leading-tight">
                                                Mediador Certificado
                                            </p>
                                            <p className="text-white/55 text-xs leading-tight mt-0.5">
                                                Autorizado pela ASF
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
