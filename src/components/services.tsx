"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Car, Heart, Briefcase } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

const services = [
    {
        icon: Home,
        title: "Habitação",
        description:
            "Proteja o seu lar com coberturas completas. Seguros para casa, recheio e responsabilidade civil, adaptados à sua realidade.",
    },
    {
        icon: Car,
        title: "Automóvel",
        description:
            "Seguros auto adaptados às suas necessidades. Cobertura completa ou contra terceiros, sempre com as melhores condições.",
    },
    {
        icon: Heart,
        title: "Saúde",
        description:
            "Cuide de si e da sua família com tranquilidade. Planos de saúde personalizados para que nunca falte apoio quando precisa.",
    },
    {
        icon: Briefcase,
        title: "Vida & Negócios",
        description:
            "Soluções para proteger o seu futuro e o seu negócio. Seguros de vida e empresariais pensados para cada fase da vida.",
    },
];

export function Services() {
    return (
        <section id="servicos" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            {/* Subtle decorative orb */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

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
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                        Os Nossos Serviços
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Oferecemos uma gama completa de seguros para proteger o que mais valoriza.
                        Soluções personalizadas para cada necessidade.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                        >
                            <Card className="group h-full relative overflow-hidden hover:shadow-xl transition-all duration-500 border-border/30 bg-white cursor-pointer">
                                {/* Top teal accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal-400" />

                                {/* Faint ordinal number */}
                                <span className="absolute top-4 right-5 font-display text-[3.5rem] font-bold text-primary/6 leading-none select-none pointer-events-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <CardContent className="p-8 text-left relative">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 group-hover:scale-105">
                                        <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Bottom hover line */}
                                    <div className="mt-6 h-0.5 w-0 bg-primary rounded-full group-hover:w-12 transition-all duration-400" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
