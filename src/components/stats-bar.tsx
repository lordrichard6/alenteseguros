"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, MapPin } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -40px 0px" };

const stats = [
    {
        icon: ShieldCheck,
        title: "Mediador Certificado",
        description: "Registado e autorizado pela ASF",
    },
    {
        icon: Star,
        title: "Atendimento Personalizado",
        description: "Tratamos cada cliente de forma única",
    },
    {
        icon: Clock,
        title: "Resposta em 24 Horas",
        description: "Respondemos rapidamente a qualquer questão",
    },
    {
        icon: MapPin,
        title: "Cobertura no Alentejo",
        description: "Presente em Gavião e toda a região",
    },
];

export function StatsBar() {
    return (
        <section className="py-10 bg-white border-y border-border/40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.45, delay: index * 0.08, ease: EASE }}
                            className="flex items-start gap-3"
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                <stat.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-sm leading-tight">
                                    {stat.title}
                                </p>
                                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
