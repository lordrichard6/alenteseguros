"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-teal" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L45 50 L15 50 Z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Animated Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
                    >
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-medium">Mediação de Seguros Certificada</span>
                    </motion.div>

                    {/* Main Logo Title */}
                    <div className="flex justify-center mb-10">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={600}
                            height={150}
                            className="w-full max-w-2xl h-auto object-contain drop-shadow-xl brightness-0 invert"
                            priority
                        />
                    </div>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Mediação de seguros eficiente e confiável, com atendimento personalizado
                        para proteger o que mais valoriza.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
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
                            className="border-white/50 text-white hover:bg-white/10 font-semibold bg-transparent"
                        >
                            <a href="#servicos">
                                Conheça os Nossos Serviços
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
}
