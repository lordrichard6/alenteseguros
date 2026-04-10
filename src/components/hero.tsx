"use client";

import { useRef, useEffect, useState, useCallback, Fragment } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Home, Car, Heart, Briefcase, Lock, Award, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const coverages = [
    { icon: Home,      label: "Habitação"       },
    { icon: Car,       label: "Automóvel"       },
    { icon: Heart,     label: "Saúde"           },
    { icon: Briefcase, label: "Vida & Negócios"  },
];

const trustSignals = [
    { icon: Lock,  label: "Dados Protegidos"    },
    { icon: Award, label: "Serviço Certificado" },
    { icon: Phone, label: "Atendimento Rápido"  },
];

// T1 + T2: weight contrast (normal → extrabold) + italic accent on last line
const headingLines = [
    { words: ["Proteja", "o", "que"],  highlight: false, weight: "font-normal",    italic: false },
    { words: ["mais", "valoriza"],      highlight: false, weight: "font-normal",    italic: false },
    { words: ["com", "confiança."],    highlight: true,  weight: "font-extrabold", italic: true  },
];

// Cumulative word counts — global stagger index for A1 curtain reveal
const lineCumulativeWords = headingLines.reduce<number[]>((acc, line, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + headingLines[i - 1].words.length);
    return acc;
}, []);

const getWordDelay = (lineIdx: number, wordIdx: number) =>
    0.05 + (lineCumulativeWords[lineIdx] + wordIdx) * 0.08;

export function Hero() {
    const sectionRef     = useRef<HTMLElement>(null);
    const videoRef       = useRef<HTMLVideoElement>(null);
    const prefersReduced = useReducedMotion();

    // ── Scroll detection — hides the scroll indicator ──────────────
    const [scrolled,   setScrolled]   = useState(false);
    // ── Video opacity — fades in once the browser can play ─────────
    const [videoReady, setVideoReady] = useState(false);

    // ── Parallax — video moves slower than page scroll ─────────────
    // Video is 160px taller than section (80px above + 80px below edges).
    // As section scrolls out, video shifts down by 160px — container
    // overflow-hidden clips the movement cleanly on both edges.
    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start start", "end start"],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 160]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Pause / resume video based on reduced-motion preference.
    // autoPlay is set unconditionally on the element — this effect
    // overrides it immediately on mount when reduced motion is on.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (prefersReduced) {
            video.pause();
        } else {
            video.play().catch(() => {/* autoplay blocked by browser — leave paused */});
        }
    }, [prefersReduced]);

    // ── #7 (perf): stable helper, not recreated on every render ────
    const makeTransition = useCallback(
        (duration: number, delay: number) =>
            prefersReduced ? { duration: 0 } : { duration, delay, ease: EASE },
        [prefersReduced],
    );

    const makeInitial = useCallback(
        (y: number, blur: number) =>
            prefersReduced
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y, filter: `blur(${blur}px)` },
        [prefersReduced],
    );

    const animateIn = { opacity: 1, y: 0, filter: "blur(0px)" };

    return (
        <section
            ref={sectionRef}
            id="inicio"
            aria-label="Secção inicial"
            className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden"
        >
            {/* ── Poster — always visible, parallax background ─────── */}
            {/* Oversized by 160px (80px above + 80px below) so parallax
                movement never reveals an edge inside overflow-hidden    */}
            <motion.div
                aria-hidden="true"
                style={{
                    y:                prefersReduced ? 0 : parallaxY,
                    backgroundImage:  "url('/hero-poster.jpg')",
                    top:              "-80px",
                    height:           "calc(100% + 160px)",
                }}
                className="absolute left-0 right-0 bg-cover bg-center bg-no-repeat"
            />

            {/* ── Video — fades in over poster once ready, parallax ─── */}
            <motion.video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setVideoReady(true)}
                style={{
                    y:      prefersReduced ? 0 : parallaxY,
                    top:    "-80px",
                    height: "calc(100% + 160px)",
                }}
                className={[
                    "absolute left-0 right-0 w-full object-cover transition-opacity duration-[1400ms]",
                    videoReady ? "opacity-100" : "opacity-0",
                ].join(" ")}
            >
                <source src="/hero.webm" type="video/webm" />
                <source src="/hero.mp4"  type="video/mp4"  />
            </motion.video>

            {/* ── Gradient overlay — darker left, lighter right ─────── */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />

            {/* ── Subtle teal tint ──────────────────────────────────── */}
            <div className="absolute inset-0 bg-teal-900/20" />

            {/* ── Logo watermark — top-right decorative, fades in late ─ */}
            <motion.div
                aria-hidden="true"
                initial={prefersReduced ? { opacity: 0.08 } : { opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 1.6, delay: 1.0, ease: EASE }}
                className="absolute top-24 md:top-28 right-6 md:right-10 w-44 md:w-64 pointer-events-none z-[1]"
            >
                <Image
                    src="/logo.svg"
                    alt=""
                    width={256}
                    height={256}
                    className="w-full h-auto brightness-0 invert"
                />
            </motion.div>


            <div className="container mx-auto px-4 relative z-10 py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">

                    {/* ── Left: Content ──────────────────────────────── */}
                    <div className="lg:py-24">

                        {/* Badge */}
                        <motion.div
                            initial={makeInitial(16, 8)}
                            animate={animateIn}
                            transition={makeTransition(0.6, 0)}
                            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-4 py-2 mb-8 border border-white/20"
                        >
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">
                                Mediação de Seguros Certificada
                            </span>
                        </motion.div>

                        {/* ── Heading: fluid type · tight tracking · curtain reveal ── */}
                        {/* T1: font-normal lines 1–2, font-extrabold line 3          */}
                        {/* T2: line 3 is italic — Playfair italic is calligraphic    */}
                        {/* A1: each word slides up from overflow-hidden clip wrapper  */}
                        <h1
                            className="font-display text-white mb-6"
                            style={{
                                fontSize:      "clamp(2.5rem, 5vw, 4.25rem)",
                                letterSpacing: "-0.02em",
                                lineHeight:    "1.15",
                            }}
                        >
                            {headingLines.map((line, lineIdx) => (
                                <span
                                    key={lineIdx}
                                    className={[
                                        "block",
                                        line.weight,
                                        line.italic   ? "italic"      : "",
                                        line.highlight ? "text-teal-300" : "",
                                    ].join(" ")}
                                >
                                    {line.words.map((word, wordIdx) => (
                                        <Fragment key={`${lineIdx}-${wordIdx}`}>
                                            {/* Clip wrapper — creates the curtain boundary */}
                                            <span
                                                className="inline-block overflow-hidden align-bottom pb-[0.08em]"
                                            >
                                                <motion.span
                                                    className="inline-block"
                                                    initial={prefersReduced ? { y: 0 } : { y: "105%" }}
                                                    animate={{ y: 0 }}
                                                    transition={
                                                        prefersReduced
                                                            ? { duration: 0 }
                                                            : {
                                                                duration: 0.7,
                                                                delay:    getWordDelay(lineIdx, wordIdx),
                                                                ease:     [0.16, 1, 0.3, 1],
                                                              }
                                                    }
                                                >
                                                    {word}
                                                </motion.span>
                                            </span>
                                            {/* Word-space lives outside the clip so it's always visible */}
                                            {wordIdx < line.words.length - 1 && (
                                                <span className="inline-block w-[0.28em]" aria-hidden="true" />
                                            )}
                                        </Fragment>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={makeInitial(20, 4)}
                            animate={animateIn}
                            transition={makeTransition(0.65, 0.72)}
                            className="text-lg text-white/75 mb-10 max-w-[60ch] leading-relaxed"
                        >
                            Mediação de seguros eficiente e confiável, com atendimento personalizado
                            para cada família e empresa no Alentejo.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={makeTransition(0.6, 0.86)}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8 text-base shadow-xl shadow-black/20"
                            >
                                <a href="/contacto" className="gap-2">
                                    Peça um Orçamento
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent h-12 px-8 text-base font-semibold backdrop-blur-sm"
                            >
                                <a href="#servicos">Os Nossos Serviços</a>
                            </Button>
                        </motion.div>

                        {/* ── #4: Trust signals — individually staggered ── */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {trustSignals.map((signal, i) => (
                                <motion.div
                                    key={signal.label}
                                    initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={makeTransition(0.45, 0.96 + i * 0.09)}
                                    className="flex items-center gap-2 text-sm text-white/65"
                                >
                                    <signal.icon className="w-4 h-4 text-teal-300 shrink-0" />
                                    <span>{signal.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right card — desktop only ──────────────────── */}
                    <div
                        className="hidden lg:flex justify-center"
                        aria-hidden="true"
                    >
                        <div className="relative w-full max-w-[380px]">
                            {/* Layered depth shadows */}
                            <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
                            <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-white/5" />

                            {/* Card */}
                            <motion.div
                                initial={makeInitial(36, 14)}
                                animate={animateIn}
                                transition={makeTransition(0.9, 0.2)}
                            >
                                <motion.div
                                    animate={prefersReduced ? {} : { y: [0, -9, 0] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative bg-gradient-to-br from-teal-800 via-primary to-teal-500 rounded-3xl shadow-2xl shadow-black/50 backdrop-blur-sm border border-white/10 overflow-hidden"
                                >
                                    {/* Subtle inner highlight — top edge glow */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                    {/* ── Logo section — full-width, framed ─────── */}
                                    <div className="px-7 pt-7 pb-5 border-b border-white/10">
                                        <Image
                                            src="/logo_full.svg"
                                            alt="AlenteSeguros"
                                            width={340}
                                            height={80}
                                            className="brightness-0 invert w-full h-auto"
                                            priority
                                        />
                                    </div>

                                    {/* ── Body ──────────────────────────────────── */}
                                    <div className="px-7 pt-5 pb-7">
                                        {/* Coverages label */}
                                        <p className="text-white/45 text-[9px] font-bold uppercase tracking-[0.22em] mb-3">
                                            Coberturas Disponíveis
                                        </p>

                                        {/* Coverage pills */}
                                        <div className="grid grid-cols-2 gap-2 mb-6">
                                            {coverages.map((c) => (
                                                <div
                                                    key={c.label}
                                                    className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2"
                                                >
                                                    <c.icon className="w-3.5 h-3.5 text-white/70 shrink-0" />
                                                    <span className="text-white/90 text-xs font-medium leading-tight">
                                                        {c.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Certified badge */}
                                        <div className="flex items-center gap-3 bg-white/8 rounded-2xl px-4 py-3 border border-white/10">
                                            <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                                                <Shield className="w-4.5 h-4.5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-white text-sm font-semibold leading-tight">
                                                    Mediador Certificado
                                                </p>
                                                <p className="text-white/50 text-xs leading-tight mt-0.5">
                                                    Autorizado pela ASF
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── #1: Scroll indicator — hides after user scrolls ──── */}
            {!prefersReduced && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{
                        opacity: scrolled ? 0 : 1,
                        y: scrolled ? 8 : 0,
                    }}
                    transition={{ duration: 0.6, delay: scrolled ? 0 : 1.2, ease: EASE }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 z-10 pointer-events-none"
                    aria-hidden="true"
                >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
