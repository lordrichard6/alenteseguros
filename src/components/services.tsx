"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Car, Heart, Briefcase } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Habitação",
        description: "Proteja o seu lar com as melhores coberturas. Seguros para casa, recheio e responsabilidade civil.",
    },
    {
        icon: Car,
        title: "Automóvel",
        description: "Seguros auto adaptados às suas necessidades. Cobertura completa ou contra terceiros.",
    },
    {
        icon: Heart,
        title: "Saúde",
        description: "Cuide de si e da sua família com tranquilidade. Planos de saúde personalizados.",
    },
    {
        icon: Briefcase,
        title: "Vida e Negócios",
        description: "Soluções para proteger o seu futuro e o seu negócio. Seguros de vida e empresariais.",
    },
];

export function Services() {
    return (
        <section id="servicos" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Os Nossos Serviços
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Oferecemos uma gama completa de seguros para proteger o que mais valoriza.
                        Soluções personalizadas para cada necessidade.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer border-border/50">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
