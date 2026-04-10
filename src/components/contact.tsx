"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Lock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

const contactInfo = [
    {
        icon: Phone,
        title: "Telefones",
        value: "241 095 100 | 938 121 196",
        href: "tel:+351938121196",
    },
    {
        icon: Mail,
        title: "Email",
        value: "seguros.ritareis@gmail.com",
        href: "mailto:seguros.ritareis@gmail.com",
    },
    {
        icon: MapPin,
        title: "Morada",
        value: "R. Doutor Eusébio Leão, Nº89 R/C, 6040-120 Gavião",
        href: "https://maps.google.com/?q=R.+Doutor+Eusébio+Leão+89+Gavião+Portugal",
    },
];

export function Contact() {
    return (
        <section id="contacto" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            {/* Decorative orb */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

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
                        Contacto
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                        Fale Connosco
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Estamos aqui para ajudar. Entre em contacto connosco para obter um orçamento
                        personalizado ou esclarecer qualquer dúvida.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* ── Contact Form ──────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <Card className="border-border/30 shadow-xl bg-white">
                            <CardContent className="p-7 md:p-9">
                                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                                    Envie-nos uma mensagem
                                </h3>
                                <p className="text-sm text-muted-foreground mb-7">
                                    Respondemos em menos de 24 horas úteis.
                                </p>

                                <form className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="font-medium">Nome</Label>
                                            <Input
                                                id="name"
                                                placeholder="O seu nome"
                                                className="h-11 border-border/60 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="font-medium">Telefone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="912 345 678"
                                                className="h-11 border-border/60 focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="font-medium">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="exemplo@email.com"
                                            className="h-11 border-border/60 focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="font-medium">Mensagem</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Como podemos ajudar?"
                                            rows={4}
                                            className="border-border/60 focus:border-primary resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 font-semibold text-base shadow-md shadow-primary/15"
                                        size="lg"
                                    >
                                        Enviar Mensagem
                                    </Button>

                                    {/* Privacy note */}
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                                        <Lock className="w-3.5 h-3.5 shrink-0" />
                                        <span>Os seus dados são tratados com total confidencialidade.</span>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* ── Contact Info + Map ────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="space-y-4"
                    >
                        {/* Contact cards */}
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.href}
                                target={info.title === "Morada" ? "_blank" : undefined}
                                rel={info.title === "Morada" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={VP}
                                transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
                                className="flex items-start gap-4 p-5 bg-white border border-border/30 rounded-2xl hover:shadow-md hover:border-primary/30 transition-all duration-300 group block"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-semibold text-foreground text-sm mb-0.5">{info.title}</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* WhatsApp CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: 0.28, ease: EASE }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="w-full bg-green-600 hover:bg-green-700 gap-2.5 h-12 font-semibold text-base shadow-md shadow-green-600/20"
                            >
                                <a
                                    href="https://wa.me/351938121196"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Falar por WhatsApp
                                </a>
                            </Button>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: 0.36, ease: EASE }}
                            className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border/30 shadow-sm"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.5!2d-7.9338!3d39.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzAwLjEiTiA3wrA1NicwMS43Ilc!5e0!3m2!1sen!2spt!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização AlenteSeguros"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating WhatsApp button */}
            <motion.a
                href="https://wa.me/351938121196"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-all duration-200 z-50"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </motion.a>
        </section>
    );
}
