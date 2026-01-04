"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Users,
        title: "Atendimento Personalizado",
        description: "Conhecemos cada cliente pelo nome.",
    },
    {
        icon: Award,
        title: "Parceiros de Confiança",
        description: "Trabalhamos com as melhores seguradoras.",
    },
    {
        icon: Clock,
        title: "Resposta Rápida",
        description: "Estamos sempre disponíveis para si.",
    },
];

export function About() {
    return (
        <section id="sobre" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Quem Somos
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            A <strong className="text-foreground">AlenteSeguros</strong> é uma mediadora de seguros
                            localizada em Gavião, no coração do Alentejo. Com um compromisso firme com a eficiência
                            e a confiança, oferecemos soluções de seguros personalizadas para particulares e empresas.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            A nossa missão é simplificar o mundo dos seguros, garantindo que cada cliente
                            encontra a proteção ideal para as suas necessidades. Trabalhamos lado a lado
                            consigo para que se sinta seguro em cada momento da vida.
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                        <feature.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image Placeholder + Partners */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Image Placeholder */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/img_01.jpeg"
                                alt="Escritório AlenteSeguros"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Partners */}
                        <div className="bg-muted/50 rounded-xl p-6">
                            <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
                                Em parceria com:
                            </p>
                            <div className="flex items-center justify-center gap-8">
                                {/* HPR Logo */}
                                <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center h-16 w-32 relative">
                                    <Image
                                        src="/hpr.png"
                                        alt="HPR Seguros"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                {/* SABSEG Logo */}
                                <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center h-16 w-32 relative">
                                    <Image
                                        src="/sabseg.svg"
                                        alt="SABSEG"
                                        fill
                                        className="object-contain p-2"
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
