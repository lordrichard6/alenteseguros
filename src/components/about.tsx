"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" } as const;

// ── Animated count-up hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  useEffect(() => {
    if (!inView) return;
    let start      = 0;
    const interval = 16;
    const steps    = duration / interval;
    const step     = target / steps;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

const counterData = [
  { target: 10,  suffix: "+", label: "Anos de Experiência"   },
  { target: 500, suffix: "+", label: "Clientes Satisfeitos"  },
  { target: 15,  suffix: "+", label: "Seguradoras Parceiras" },
];

const features = [
  {
    icon:  Users,
    title: "Atendimento Personalizado",
    desc:  "Conhecemos cada cliente pelo nome e pela história. O seu seguro é único, como a sua vida.",
  },
  {
    icon:  Award,
    title: "Parceiros de Confiança",
    desc:  "Trabalhamos com HPR e SABSEG — seguradoras de referência com cobertura nacional.",
  },
  {
    icon:  Clock,
    title: "Resposta em 24h",
    desc:  "Estamos sempre disponíveis para esclarecer dúvidas, apoiar sinistros e renovar apólices.",
  },
];

// ── Animated counter block ──────────────────────────────────────────────────
function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="text-center flex flex-col items-center gap-1">
      <p className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] to-[#c9a84c] tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-xs md:text-sm text-[#8a9bae] font-medium text-center leading-tight">
        {label}
      </p>
    </div>
  );
}

// ── Partners marquee ───────────────────────────────────────────────────────
function PartnersStrip() {
  const logos = [
    { src: "/hpr.webp",    alt: "HPR Mediação de Seguros", w: 120, h: 48  },
    { src: "/sabseg.svg",  alt: "SABSEG Seguros",          w: 120, h: 48  },
    { src: "/hpr.webp",    alt: "HPR Mediação de Seguros", w: 120, h: 48  },
    { src: "/sabseg.svg",  alt: "SABSEG Seguros",          w: 120, h: 48  },
  ];

  return (
    <div className="mt-10 pt-8 border-t border-white/[0.06]">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8a9bae] mb-6">
        Em parceria com
      </p>
      <div className="relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d1829] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d1829] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center animate-marquee gap-12 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white/[0.04] border border-white/[0.06] rounded-xl px-6 py-3 h-16 w-[160px] shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function About() {
  const shouldAnimate = !useReducedMotion();

  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[#080f1e] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%]  right-[0%]  w-[500px] h-[500px] rounded-full bg-[#0ea5a0]/[0.04] blur-[110px]" />
        <div className="absolute bottom-[5%] left-[0%] w-[400px] h-[400px] rounded-full bg-[#c9a84c]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[#8a9bae] text-[10px] font-semibold uppercase tracking-[0.2em] mb-5"
          >
            Quem Somos
          </motion.span>

          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 24, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
            className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-[#f0ede8] leading-[1.1] tracking-tight"
          >
            O Alentejo de{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] to-[#c9a84c]">
              confiança
            </span>{" "}
            em seguros
          </motion.h2>
        </div>

        {/* ── Main grid: image + content ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">

          {/* Left — image block */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -32, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] ring-1 ring-white/[0.08]">
              <Image
                src="/img_01.webp"
                alt="Escritório AlenteSeguros em Gavião"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/60 via-transparent to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={shouldAnimate ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute -bottom-6 -right-4 md:-right-8
                p-[1px] rounded-2xl
                bg-gradient-to-br from-[#0ea5a0]/30 to-[#c9a84c]/20
              "
            >
              <div className="
                rounded-[calc(1rem-1px)]
                bg-[#0d1829]
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5)]
                px-6 py-4 text-center min-w-[130px]
              ">
                <p className="font-[family-name:var(--font-playfair)] font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] to-[#c9a84c]">
                  10+
                </p>
                <p className="text-[11px] text-[#8a9bae] font-medium mt-0.5">
                  Anos de experiência
                </p>
              </div>
            </motion.div>

            {/* Decorative teal dot grid behind the image */}
            <div
              className="absolute -left-4 -top-4 w-32 h-32 opacity-30 pointer-events-none -z-10"
              style={{
                backgroundImage: "radial-gradient(circle, #0ea5a0 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 32, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
            className="space-y-8 pt-4 lg:pt-8"
          >
            {/* Body copy */}
            <div className="space-y-4">
              <p className="text-[#f0ede8]/90 text-base md:text-lg leading-[1.8]">
                A <strong className="text-[#f0ede8] font-semibold">AlenteSeguros</strong> é uma
                mediadora de seguros localizada em Gavião, no coração do Alentejo. Com um compromisso
                firme com a eficiência e a confiança, oferecemos soluções de seguros personalizadas
                para particulares e empresas.
              </p>
              <p className="text-[#8a9bae] text-sm md:text-base leading-[1.8]">
                A nossa missão é simplificar o mundo dos seguros — garantindo que cada cliente
                encontra a proteção ideal para as suas necessidades. Trabalhamos lado a lado
                consigo para que se sinta seguro em cada momento da vida.
              </p>
            </div>

            {/* ── Counter strip ── */}
            <div className="p-[1px] rounded-3xl bg-white/[0.05] ring-1 ring-white/[0.06]">
              <div className="rounded-[calc(1.5rem-1px)] bg-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] p-6 grid grid-cols-3 gap-4 divide-x divide-white/[0.06]">
                {counterData.map((c) => (
                  <Counter key={c.label} target={c.target} suffix={c.suffix} label={c.label} />
                ))}
              </div>
            </div>

            {/* ── Feature bullets ── */}
            <div className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={shouldAnimate ? { opacity: 0, x: 16 } : {}}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0ea5a0]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0ea5a0]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#f0ede8] text-sm mb-0.5">{f.title}</h4>
                      <p className="text-[#8a9bae] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA link */}
            <a
              href="#contacto"
              className="
                group inline-flex items-center gap-2
                text-sm font-semibold text-[#0ea5a0]
                hover:text-[#f0ede8] transition-colors duration-300
              "
            >
              Fale connosco hoje
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* ── Partners marquee ── */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <PartnersStrip />
        </motion.div>

      </div>
    </section>
  );
}
