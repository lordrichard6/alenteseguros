"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    useMotionValueEvent,
    type MotionValue,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Update these values with the client's real numbers ──────────────
const stats = [
    { value: 300,  suffix: "+", label: "Clientes",            sub: "em toda a região"       },
    { value: 10,   suffix: "+", label: "Anos de Experiência", sub: "no mercado segurador"   },
    { value: 15,   suffix: "+", label: "Seguradoras",         sub: "parceiras disponíveis"  },
    { value: 24,   suffix: "h", label: "Resposta Garantida",  sub: "em dias úteis"          },
];

// ── Scroll-driven counter ───────────────────────────────────────────
// scrollProgress: MotionValue<number> [0 → 1] from the parent section.
// As the section scrolls into the viewport the number counts up in
// real-time; scrolling back counts back down.
// Reduced-motion: jumps straight to the final value on mount.
function CountUp({
    to,
    suffix,
    scrollProgress,
}: {
    to: number;
    suffix: string;
    scrollProgress: MotionValue<number>;
}) {
    const prefersReduced = useReducedMotion();
    const [count, setCount] = useState(0);

    // Map the scroll progress range [0, 1] → [0, to]
    const rawValue = useTransform(scrollProgress, [0, 1], [0, to]);

    // Sync the MotionValue → React state every frame scroll changes
    useMotionValueEvent(rawValue, "change", (v) => {
        if (prefersReduced) return;
        setCount(Math.min(Math.floor(v), to));
    });

    // Reduced-motion: show final value immediately
    useEffect(() => {
        if (prefersReduced) setCount(to);
    }, [prefersReduced, to]);

    return (
        <span>
            {/* Animated display — screen readers ignore */}
            <span aria-hidden="true" className="tabular-nums">
                {count}{suffix}
            </span>
            {/* Static final value for screen readers */}
            <span className="sr-only">{to}{suffix}</span>
        </span>
    );
}

// ── Section ─────────────────────────────────────────────────────────
export function StatsBar() {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress from section entering (top hits viewport
    // bottom) to section fully visible (bottom hits viewport bottom).
    // This is the window in which all counters animate.
    const { scrollYProgress: scrollProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    return (
        <section
            ref={sectionRef}
            className="py-14 relative overflow-hidden"
            style={{
                // Radial glow at top-centre — picks up the hero's teal,
                // fades to a deeper teal at the edges and bottom.
                background: "radial-gradient(ellipse 120% 160% at 50% -10%, oklch(0.58 0.13 175) 0%, oklch(0.42 0.10 175) 100%)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                            whileHover={{ y: -3, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                            className={[
                                "flex flex-col items-center text-center px-6 py-8 lg:py-4 cursor-default",
                                index < 2 ? "border-b border-white/20 lg:border-b-0" : "",
                                index % 2 === 0 ? "border-r border-white/20 lg:border-r-0" : "",
                            ].join(" ")}
                        >
                            {/* Accent mark */}
                            <div className="w-0.5 h-5 bg-white/70 rounded-full mb-3" />

                            {/* Scroll-driven number */}
                            <p
                                className="font-display font-bold text-white leading-none mb-2"
                                style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
                            >
                                <CountUp
                                    to={stat.value}
                                    suffix={stat.suffix}
                                    scrollProgress={scrollProgress}
                                />
                            </p>

                            {/* Label */}
                            <p className="font-semibold text-white/90 text-sm leading-tight mb-1">
                                {stat.label}
                            </p>

                            {/* Sub-label */}
                            <p className="text-white/60 text-xs leading-relaxed">
                                {stat.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
