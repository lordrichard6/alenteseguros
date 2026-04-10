"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

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
    return (
        <section className="py-24 md:py-32 bg-surface overflow-hidden">
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
                        Testemunhos
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                        O que Dizem os Clientes
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        A satisfação dos nossos clientes é o reflexo mais honesto do nosso trabalho.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                        >
                            <Card className="h-full border-border/30 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                <CardContent className="p-7 flex flex-col h-full">
                                    {/* Quote icon */}
                                    <Quote className="w-8 h-8 text-primary/20 mb-5 shrink-0" />

                                    {/* Star rating */}
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-amber-400 fill-amber-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote text */}
                                    <p className="text-foreground/75 text-sm leading-relaxed flex-1 mb-7 italic">
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-primary font-bold text-sm">
                                                {t.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground text-sm leading-tight">
                                                {t.name}
                                            </p>
                                            <p className="text-muted-foreground text-xs mt-0.5">
                                                {t.location}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
