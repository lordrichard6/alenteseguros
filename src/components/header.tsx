"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Phone } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
    { href: "#inicio",   label: "Início",    sectionId: "inicio" },
    { href: "#servicos", label: "Serviços",  sectionId: "servicos" },
    { href: "#sobre",    label: "Sobre",     sectionId: "sobre" },
    { href: "/contacto", label: "Contacto",  sectionId: null },
];

export function Header() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const [scrolled,       setScrolled]       = useState(false);
    const [activeSection,  setActiveSection]  = useState("inicio");
    const [isOpen,         setIsOpen]         = useState(false);

    // ── Transparent only on home page at the very top ──────────────
    const isTransparent = isHomePage && !scrolled;

    // ── Scroll detection ────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll(); // run once on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Active section via IntersectionObserver ─────────────────────
    useEffect(() => {
        if (!isHomePage) return;

        const ids = ["inicio", "servicos", "sobre"];
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

    // ── Body scroll lock when mobile menu is open ───────────────────
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // ── Active link helper ──────────────────────────────────────────
    const isActive = (link: (typeof navLinks)[0]) => {
        if (link.href === "/contacto") return pathname === "/contacto";
        return isHomePage && activeSection === link.sectionId;
    };

    return (
        <>
            {/* ── Main header bar ──────────────────────────────────── */}
            <header
                className={[
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isTransparent
                        ? "bg-transparent border-b border-transparent"
                        : "bg-white/96 backdrop-blur-md shadow-sm border-b border-border/40",
                ].join(" ")}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20 md:h-24">

                        {/* Logo — single file, CSS filter swaps colour */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/logo_full.svg"
                                alt="AlenteSeguros"
                                width={200}
                                height={48}
                                className={[
                                    "h-9 md:h-10 w-auto object-contain transition-all duration-400",
                                    isTransparent ? "brightness-0 invert" : "",
                                ].join(" ")}
                                priority
                            />
                        </Link>

                        {/* Desktop navigation */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => {
                                const active = isActive(link);
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
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
                                        {/* Active / hover underline */}
                                        <span
                                            className={[
                                                "absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300",
                                                isTransparent ? "bg-white" : "bg-primary",
                                                active ? "w-full" : "w-0 group-hover:w-full",
                                            ].join(" ")}
                                        />
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Right side — phone + divider + portal */}
                        <div className="hidden md:flex items-center gap-5">
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

                            {/* Portal button */}
                            <Link
                                href="/portal"
                                className={[
                                    "flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-300",
                                    isTransparent
                                        ? "border-white/40 text-white hover:bg-white/12 hover:border-white/60"
                                        : "border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary",
                                ].join(" ")}
                            >
                                <User className="w-3.5 h-3.5 shrink-0" />
                                Portal
                            </Link>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className={[
                                "md:hidden p-2 rounded-lg transition-colors duration-200",
                                isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-foreground hover:bg-muted/60",
                            ].join(" ")}
                            aria-label="Abrir menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                    </div>
                </div>
            </header>

            {/* ── Full-screen mobile menu overlay ──────────────────── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="fixed inset-0 z-[60] flex flex-col"
                        style={{ backgroundColor: "oklch(0.25 0.08 175)" }}
                    >
                        {/* Subtle pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='22' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                                backgroundSize: "60px 60px",
                            }}
                        />

                        {/* Top bar */}
                        <div className="relative flex items-center justify-between px-6 pt-7 pb-4">
                            <Image
                                src="/logo_full.svg"
                                alt="AlenteSeguros"
                                width={160}
                                height={38}
                                className="h-9 w-auto object-contain brightness-0 invert"
                            />
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="Fechar menu"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Nav links — large Playfair Display */}
                        <nav className="relative flex flex-col justify-center flex-1 px-8 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -28 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.38, delay: 0.12 + i * 0.08, ease: EASE }}
                                    className="font-display text-[2.75rem] font-bold text-white/80 hover:text-white py-3 border-b border-white/10 last:border-0 transition-colors duration-200 leading-tight"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Bottom contact strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.48, ease: EASE }}
                            className="relative px-8 pb-10 flex flex-col gap-3 border-t border-white/10 pt-6"
                        >
                            <a
                                href="tel:+351241095100"
                                className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                241 095 100
                            </a>
                            <Link
                                href="/portal"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm"
                            >
                                <User className="w-4 h-4 shrink-0" />
                                Portal de Cliente
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
