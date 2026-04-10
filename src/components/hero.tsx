"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Shield, ChevronDown, Users, Clock, Building2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { icon: Users,     value: "500+", label: "Clientes Protegidos" },
  { icon: Clock,     value: "10+",  label: "Anos de Experiência"  },
  { icon: Building2, value: "15+",  label: "Seguradoras Parceiras" },
];

function fadeIn(delay = 0) {
  return {
    initial:    { opacity: 0, y: 28, filter: "blur(8px)" },
    animate:    { opacity: 1, y: 0,  filter: "blur(0px)" },
    transition: { duration: 0.85, delay, ease: EASE },
  };
}

export function Hero() {
  const shouldAnimate = !useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#080f1e] pt-20 pb-10"
    >
      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Teal orb — top right */}
        <div className="absolute top-[-8%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#0ea5a0]/[0.07] blur-[130px]" />
        {/* Gold orb — bottom left */}
        <div className="absolute bottom-[5%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[#c9a84c]/[0.06] blur-[110px]" />
        {/* Soft mid-navy orb */}
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#0ea5a0]/[0.04] blur-[100px]" />
      </div>

      {/* ── Diagonal line grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff 0px, #ffffff 1px,
            transparent 1px, transparent 48px
          )`,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col items-center text-center">

        {/* Eyebrow badge */}
        <motion.div
          {...(shouldAnimate ? fadeIn(0.2) : {})}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0ea5a0]/30 bg-[#0ea5a0]/[0.08] mb-8"
        >
          <Shield className="w-3.5 h-3.5 text-[#0ea5a0]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0ea5a0]">
            Mediação de Seguros Certificada · Gavião, Alentejo
          </span>
        </motion.div>

        {/* H1 — Playfair Display, editorial */}
        <div className="mb-8 overflow-visible">
          <motion.h1
            {...(shouldAnimate ? fadeIn(0.4) : {})}
            className="font-[family-name:var(--font-playfair)] font-bold text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight"
          >
            <span className="block text-[#f0ede8]">Proteja o que</span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] via-[#0ea5a0] to-[#c9a84c]">
              mais valoriza.
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          {...(shouldAnimate ? fadeIn(0.6) : {})}
          className="text-base md:text-lg text-[#8a9bae] leading-[1.75] max-w-[600px] mb-10"
        >
          Soluções de seguros personalizadas para particulares e empresas.
          Atendimento próximo, resposta rápida e coberturas que fazem sentido para si.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...(shouldAnimate ? fadeIn(0.75) : {})}
          className="flex flex-col sm:flex-row gap-4 items-center mb-16 md:mb-20"
        >
          {/* Primary */}
          <a
            href="#contacto"
            className="
              group relative inline-flex items-center gap-2.5
              px-8 py-4 rounded-full
              bg-[#0ea5a0] text-white font-semibold text-sm
              shadow-[0_0_24px_rgba(14,165,160,0.35)]
              hover:shadow-[0_0_40px_rgba(14,165,160,0.55)]
              hover:-translate-y-[2px]
              active:scale-[0.98]
              transition-all duration-400 overflow-hidden
            "
          >
            <span className="relative z-10">Peça um Orçamento</span>
            <span className="relative z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-400 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 motion-reduce:hidden" />
          </a>

          {/* Ghost */}
          <a
            href="#servicos"
            className="
              group inline-flex items-center gap-2
              px-8 py-4 rounded-full
              border border-white/15 text-[#8a9bae]
              text-sm font-semibold
              hover:border-white/30 hover:text-[#f0ede8]
              transition-all duration-300
            "
          >
            Os Nossos Serviços
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ── Floating stat cards ── */}
        <motion.div
          {...(shouldAnimate ? fadeIn(0.95) : {})}
          className="grid grid-cols-3 gap-3 md:gap-5 w-full max-w-[640px]"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.6, ease: EASE }}
                className="
                  p-[1px] rounded-2xl
                  bg-gradient-to-b from-white/[0.1] to-white/[0.03]
                "
              >
                <div className="
                  rounded-[calc(1rem-1px)]
                  bg-[#0d1829]/80 backdrop-blur-sm
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]
                  p-4 flex flex-col items-center gap-1.5
                ">
                  <Icon className="w-4 h-4 text-[#0ea5a0] mb-0.5" />
                  <p className="font-[family-name:var(--font-playfair)] font-bold text-xl md:text-2xl text-[#f0ede8]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-[11px] text-[#8a9bae] text-center leading-tight font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : {}}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none motion-reduce:hidden"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/25" />
        </motion.div>
      </motion.div>

      {/* ── Bottom wave transition ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="relative block w-full h-[80px]"
        >
          <path
            d="M0,80V48C180,16,360,0,540,8C720,16,900,56,1080,64C1260,72,1380,48,1440,40V80Z"
            fill="#0d1829"
          />
        </svg>
      </div>
    </section>
  );
}
