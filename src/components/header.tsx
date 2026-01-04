"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contacto", label: "Contacto" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-2">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={180}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            <Link href="/portal" className="gap-2">
                                <User className="w-4 h-4" />
                                Portal de Cliente
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button asChild className="w-full mt-2" variant="outline">
                                <Link href="/portal" onClick={() => setIsOpen(false)} className="gap-2 justify-center border-primary text-primary hover:bg-primary hover:text-white">
                                    <User className="w-4 h-4" />
                                    Portal de Cliente
                                </Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}
