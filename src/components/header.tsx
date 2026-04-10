"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "/contacto", label: "Contacto" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50"
                    : "bg-white/80 backdrop-blur-md border-b border-border/20",
            ].join(" ")}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={180}
                            height={40}
                            className="h-9 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative group text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                            >
                                {link.label}
                                {/* Animated underline */}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 font-semibold"
                        >
                            <Link href="/portal" className="gap-2">
                                <User className="w-4 h-4" />
                                Portal de Cliente
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted/60 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                        transition={{ duration: 0.28, ease: EASE }}
                        className="md:hidden bg-white/98 backdrop-blur-md border-b border-border/40 overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-5 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.22, delay: i * 0.05, ease: EASE }}
                                    className="text-foreground hover:text-primary transition-colors font-medium py-3 border-b border-border/30 last:border-0"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.22, delay: 0.2, ease: EASE }}
                                className="pt-3"
                            >
                                <Button
                                    asChild
                                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                                    variant="outline"
                                >
                                    <Link
                                        href="/portal"
                                        onClick={() => setIsOpen(false)}
                                        className="gap-2 justify-center"
                                    >
                                        <User className="w-4 h-4" />
                                        Portal de Cliente
                                    </Link>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
