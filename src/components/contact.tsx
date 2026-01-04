"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

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
        <section id="contacto" className="py-20 md:py-28 bg-muted/50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Fale Connosco
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Estamos aqui para ajudar. Entre em contacto connosco para obter um orçamento
                        personalizado ou esclarecer qualquer dúvida.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-border/50 shadow-lg">
                            <CardContent className="p-6 md:p-8">
                                <h3 className="text-xl font-semibold text-foreground mb-6">
                                    Envie-nos uma mensagem
                                </h3>
                                <form className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nome</Label>
                                            <Input id="name" placeholder="O seu nome" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Telefone</Label>
                                            <Input id="phone" type="tel" placeholder="912 345 678" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="exemplo@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensagem</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Como podemos ajudar?"
                                            rows={4}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" size="lg">
                                        Enviar Mensagem
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.href}
                                target={info.title === "Morada" ? "_blank" : undefined}
                                rel={info.title === "Morada" ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-background rounded-xl hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                                    <p className="text-muted-foreground">{info.value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* WhatsApp CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-8"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="w-full bg-green-600 hover:bg-green-700 gap-2"
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

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="aspect-video bg-muted rounded-xl overflow-hidden"
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

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/351938121196"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </motion.a>
        </section>
    );
}
