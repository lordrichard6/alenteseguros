"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const CIRCLE_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`;

// Weight contrast + italic accent — same technique as Hero and ContactHero
const headingLines = [
    { words: ["Perguntas"],   weight: "font-normal", italic: false, teal: false },
    { words: ["Frequentes."], weight: "font-bold",   italic: true,  teal: true  },
];

const lineCumulativeWords = headingLines.reduce<number[]>((acc, line, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + headingLines[i - 1].words.length);
    return acc;
}, []);

const getWordDelay = (lineIdx: number, wordIdx: number) =>
    0.08 + (lineCumulativeWords[lineIdx] + wordIdx) * 0.09;

export function FaqHero() {
    const prefersReduced = useReducedMotion();

    return (
        <section className="relative overflow-hidden pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800" />

            {/* Circle pattern */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: CIRCLE_PATTERN, backgroundSize: "80px 80px" }}
            />

            {/* Ambient glows */}
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-white/[0.04] rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/[0.03] rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">

                {/* Eyebrow */}
                <motion.p
                    className="text-teal-300 text-xs font-bold uppercase tracking-[0.2em] mb-5"
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: EASE }}
                >
                    Dúvidas frequentes
                </motion.p>

                {/* H1 — per-word curtain reveal */}
                <h1
                    className="font-display text-white mb-5"
                    style={{
                        fontSize:      "clamp(2.25rem, 5vw, 3.75rem)",
                        letterSpacing: "-0.02em",
                        lineHeight:    "1.2",
                    }}
                >
                    {headingLines.map((line, lineIdx) => (
                        <span
                            key={lineIdx}
                            className={[
                                "block",
                                line.weight,
                                line.italic ? "italic"       : "",
                                line.teal   ? "text-teal-300" : "",
                            ].join(" ")}
                        >
                            {line.words.map((word, wordIdx) => (
                                <Fragment key={`${lineIdx}-${wordIdx}`}>
                                    <span className="inline-block overflow-hidden align-bottom pb-[0.06em]">
                                        <motion.span
                                            className="inline-block"
                                            initial={prefersReduced ? { y: 0 } : { y: "105%" }}
                                            animate={{ y: 0 }}
                                            transition={
                                                prefersReduced
                                                    ? { duration: 0 }
                                                    : {
                                                          duration: 0.72,
                                                          delay:    getWordDelay(lineIdx, wordIdx),
                                                          ease:     EASE,
                                                      }
                                            }
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                    {wordIdx < line.words.length - 1 && (
                                        <span className="inline-block w-[0.28em]" aria-hidden="true" />
                                    )}
                                </Fragment>
                            ))}
                        </span>
                    ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                    className="text-white/60 max-w-xl mx-auto leading-relaxed text-lg"
                    initial={prefersReduced ? undefined : { opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, delay: 0.6, ease: EASE }}
                >
                    Esclarecemos as dúvidas mais comuns sobre mediação de seguros.
                    Não encontra a sua resposta?{" "}
                    <Link
                        href="/contacto"
                        className="text-teal-300 font-semibold hover:text-white transition-colors duration-200 underline underline-offset-4"
                    >
                        Contacte-nos.
                    </Link>
                </motion.p>

            </div>
        </section>
    );
}
