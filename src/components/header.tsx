"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Phone } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
    { href: "/#inicio",        label: "Início",        sectionId: "inicio"        },
    { href: "/#servicos",      label: "Serviços",      sectionId: "servicos"      },
    { href: "/#como-funciona", label: "Como Funciona", sectionId: "como-funciona" },
    { href: "/#sobre",         label: "Sobre",         sectionId: "sobre"         },
    { href: "/contacto",       label: "Contacto",      sectionId: null            },
    { href: "/faq",            label: "FAQ",           sectionId: null            },
];

export function Header() {
    const pathname     = usePathname();
    const isHomePage   = pathname === "/";

    const [scrolled,      setScrolled]      = useState(false);
    const [activeSection, setActiveSection] = useState("inicio");
    const [isOpen,        setIsOpen]        = useState(false);

    // Transparent only when on the home page and at the very top
    const isTransparent = isHomePage && !scrolled;

    // ── Scroll detection ────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll(); // sync on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Active section via IntersectionObserver ─────────────────────
    useEffect(() => {
        if (!isHomePage) return;
        const ids = ["inicio", "servicos", "como-funciona", "sobre", "testemunhos", "parceiros"];
        const observers: IntersectionObserver[] = [];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, [isHomePage]);

    // ── Body scroll lock ────────────────────────────────────────────
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // ── Escape key closes mobile menu ───────────────────────────────
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // ── Active link helper ──────────────────────────────────────────
    const isActive = (link: (typeof navLinks)[0]) => {
        if (link.href === "/contacto") return pathname === "/contacto";
        if (link.href === "/faq")      return pathname === "/faq";
        return isHomePage && activeSection === link.sectionId;
    };

    return (
        <>
            {/* ── Header bar ───────────────────────────────────────── */}
            <header
                className={[
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isTransparent
                        ? "bg-transparent border-b border-transparent"
                        : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/40",
                ].join(" ")}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20 md:h-24">

                        {/* ── Logo — two layers, crossfade via opacity only ── */}
                        <Link href="/" className="flex items-center shrink-0">
                            <div className="relative w-40 md:w-48 h-9 md:h-10">
                                {/* Coloured — shown when scrolled / non-home */}
                                <Image
                                    src="/logo_full.svg"
                                    alt="AlenteSeguros"
                                    fill
                                    className={[
                                        "object-contain object-left transition-opacity duration-500",
                                        isTransparent ? "opacity-0" : "opacity-100",
                                    ].join(" ")}
                                    priority
                                />
                                {/* White — shown when transparent; filter applied statically, no animation */}
                                <Image
                                    src="/logo_full.svg"
                                    alt=""
                                    aria-hidden="true"
                                    fill
                                    className={[
                                        "object-contain object-left brightness-0 invert transition-opacity duration-500",
                                        isTransparent ? "opacity-100" : "opacity-0",
                                    ].join(" ")}
                                    priority
                                />
                            </div>
                        </Link>

                        {/* ── Desktop navigation ─────────────────────────── */}
                        <nav
                            className="hidden md:flex items-center gap-8 lg:gap-10"
                            aria-label="Navegação principal"
                        >
                            {navLinks.map((link) => {
                                const active = isActive(link);
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        className={[
                                            "relative group text-sm font-medium transition-colors duration-300",
                                            isTransparent
                                                ? active
                                                    ? "text-white"
                                                    : "text-white/65 hover:text-white"
                                                : active
                                                    ? "text-primary"
                                                    : "text-muted-foreground hover:text-primary",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                        <span
                                            className={[
                                                "absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300",
                                                isTransparent ? "bg-white" : "bg-primary",
                                                active ? "w-full" : "w-0 group-hover:w-full",
                                            ].join(" ")}
                                        />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* ── Right side: phone | divider | CTA | portal ─── */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* Phone */}
                            <a
                                href="tel:+351241095100"
                                className={[
                                    "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                                    isTransparent
                                        ? "text-white/65 hover:text-white"
                                        : "text-muted-foreground hover:text-primary",
                                ].join(" ")}
                            >
                                <Phone className="w-3.5 h-3.5 shrink-0" />
                                241 095 100
                            </a>

                            {/* Divider */}
                            <div
                                className={[
                                    "w-px h-5 transition-colors duration-300",
                                    isTransparent ? "bg-white/25" : "bg-border",
                                ].join(" ")}
                            />

                            {/* Conversion CTA — visible from md up */}
                            <Link
                                href="/contacto"
                                className={[
                                    "hidden md:flex items-center text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
                                    isTransparent
                                        ? "bg-white text-primary hover:bg-white/90"
                                        : "bg-primary text-white hover:bg-primary/90",
                                ].join(" ")}
                            >
                                Orçamento
                            </Link>

                            {/* Portal */}
                            <Link
                                href="/portal"
                                className={[
                                    "flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-300",
                                    isTransparent
                                        ? "border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                                        : "border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary",
                                ].join(" ")}
                            >
                                <User className="w-3.5 h-3.5 shrink-0" />
                                Portal
                            </Link>
                        </div>

                        {/* ── Mobile hamburger ────────────────────────────── */}
                        <button
                            onClick={() => setIsOpen(true)}
                            aria-label="Abrir menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className={[
                                "md:hidden p-2 rounded-lg transition-colors duration-200",
                                isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-foreground hover:bg-muted/60",
                            ].join(" ")}
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                    </div>
                </div>
            </header>

            {/* ── Full-screen mobile menu — slides in from right ────── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu de navegação"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.42, ease: EASE }}
                        className="fixed inset-0 z-[60] flex flex-col"
                        style={{ backgroundColor: "oklch(0.25 0.08 175)" }}
                    >
                        {/* Subtle circle pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.035] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='22' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                                backgroundSize: "60px 60px",
                            }}
                        />

                        {/* Top bar */}
                        <div className="relative flex items-center justify-between px-6 pt-7 pb-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.22, ease: EASE }}
                            >
                                <Image
                                    src="/logo_full.svg"
                                    alt="AlenteSeguros"
                                    width={160}
                                    height={38}
                                    className="h-9 w-auto object-contain brightness-0 invert"
                                />
                            </motion.div>
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.3, delay: 0.22, ease: EASE }}
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="Fechar menu"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Nav links — Playfair Display, slide in from right */}
                        <nav
                            className="relative flex flex-col justify-center flex-1 px-8 gap-1"
                            aria-label="Menu principal"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 32 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, delay: 0.16 + i * 0.07, ease: EASE }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={isActive(link) ? "page" : undefined}
                                        className="block font-display text-[2.25rem] font-bold text-white/80 hover:text-white py-2.5 border-b border-white/10 last:border-0 transition-colors duration-200 leading-tight"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom strip — CTA + utilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.38, delay: 0.44, ease: EASE }}
                            className="relative px-8 pb-10 pt-6 border-t border-white/10 flex flex-col gap-3"
                        >
                            {/* Primary CTA */}
                            <Link
                                href="/contacto"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center bg-white text-primary font-semibold text-sm py-3.5 rounded-2xl hover:bg-white/92 transition-colors"
                            >
                                Pedir Orçamento
                            </Link>
                            {/* Utility links */}
                            <div className="flex items-center gap-6 mt-1">
                                <a
                                    href="tel:+351241095100"
                                    className="flex items-center gap-2 text-white/55 hover:text-white transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4 shrink-0" />
                                    241 095 100
                                </a>
                                <Link
                                    href="/portal"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-white/55 hover:text-white transition-colors text-sm"
                                >
                                    <User className="w-4 h-4 shrink-0" />
                                    Portal
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
