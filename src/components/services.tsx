"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Home, Car, Heart, Briefcase, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" } as const;

const services = [
  {
    key:         "habitacao",
    icon:        Home,
    title:       "Habitação",
    italicTitle: "& Recheio",
    description:
      "Proteja o seu lar com cobertura total — estrutura, recheio e responsabilidade civil. Soluções pensadas para a sua casa.",
    gradient:    "from-[#0ea5a0]/15 to-[#0ea5a0]/5",
    borderGlow:  "hover:shadow-[0_0_40px_rgba(14,165,160,0.12)]",
    iconBg:      "bg-[#0ea5a0]/10",
    iconColor:   "text-[#0ea5a0]",
    number:      "01",
  },
  {
    key:         "automovel",
    icon:        Car,
    title:       "Automóvel",
    italicTitle: "& Mobilidade",
    description:
      "Cobertura completa ou terceiros, com assistência em viagem. Seguros adaptados ao seu perfil de condutor e tipo de veículo.",
    gradient:    "from-[#c9a84c]/12 to-[#c9a84c]/4",
    borderGlow:  "hover:shadow-[0_0_40px_rgba(201,168,76,0.10)]",
    iconBg:      "bg-[#c9a84c]/10",
    iconColor:   "text-[#c9a84c]",
    number:      "02",
  },
  {
    key:         "saude",
    icon:        Heart,
    title:       "Saúde",
    italicTitle: "& Bem-estar",
    description:
      "Planos de saúde personalizados para si e para toda a família. Acesso a consultas, exames e hospitais sem esperas.",
    gradient:    "from-[#0ea5a0]/10 to-transparent",
    borderGlow:  "hover:shadow-[0_0_40px_rgba(14,165,160,0.10)]",
    iconBg:      "bg-[#0ea5a0]/10",
    iconColor:   "text-[#0ea5a0]",
    number:      "03",
  },
  {
    key:         "vida",
    icon:        Briefcase,
    title:       "Vida",
    italicTitle: "& Negócios",
    description:
      "Seguros de vida, acidentes pessoais e soluções empresariais. Proteja o seu futuro e o seu negócio com tranquilidade.",
    gradient:    "from-[#c9a84c]/10 to-transparent",
    borderGlow:  "hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]",
    iconBg:      "bg-[#c9a84c]/10",
    iconColor:   "text-[#c9a84c]",
    number:      "04",
  },
];

export function Services() {
  const shouldAnimate = !useReducedMotion();

  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-[#0d1829] overflow-hidden">

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%]  left-[5%]   w-[500px] h-[500px] rounded-full bg-[#0ea5a0]/[0.05] blur-[120px]" />
        <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#c9a84c]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[#8a9bae] text-[10px] font-semibold uppercase tracking-[0.2em] mb-5"
          >
            Os Nossos Serviços
          </motion.span>

          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 24, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
            className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-[#f0ede8] leading-[1.1] tracking-tight mb-4"
          >
            Cobertura para{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] to-[#c9a84c]">
              cada momento
            </span>
          </motion.h2>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            className="text-[#8a9bae] text-base md:text-lg leading-relaxed"
          >
            Trabalhamos com as principais seguradoras do mercado para garantir
            que encontra sempre a proteção certa, ao preço certo.
          </motion.p>
        </div>

        {/* Cards grid — 2×2 bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.key}
                initial={shouldAnimate ? { opacity: 0, y: 32, filter: "blur(6px)" } : {}}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={VP}
                transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
                whileHover={{ y: -6 }}
                className={`transition-shadow duration-500 ${svc.borderGlow}`}
              >
                {/* Outer bezel */}
                <div className={`p-[1px] rounded-3xl bg-gradient-to-br ${svc.gradient} ring-1 ring-white/[0.08] h-full`}>
                  {/* Inner card */}
                  <div className="rounded-[calc(1.5rem-1px)] bg-[#080f1e]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-7 md:p-8 h-full relative overflow-hidden flex flex-col">

                    {/* Ghost step number */}
                    <span className="absolute bottom-3 right-5 text-[7rem] font-bold text-white/[0.03] leading-none select-none font-[family-name:var(--font-playfair)] pointer-events-none">
                      {svc.number}
                    </span>

                    {/* Icon */}
                    <div className={`w-14 h-14 ${svc.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shrink-0`}>
                      <Icon className={`w-7 h-7 ${svc.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#f0ede8] font-bold text-xl mb-0.5">
                      {svc.title}
                      <span className="font-[family-name:var(--font-playfair)] italic text-[#8a9bae] font-normal ml-1.5 text-lg">
                        {svc.italicTitle}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-[#8a9bae] text-sm leading-[1.75] mt-3 flex-1">
                      {svc.description}
                    </p>

                    {/* Inline CTA */}
                    <a
                      href="#contacto"
                      className={`
                        inline-flex items-center gap-1.5 mt-6
                        text-xs font-semibold uppercase tracking-[0.12em]
                        ${svc.iconColor} opacity-70 hover:opacity-100
                        transition-opacity duration-300
                      `}
                    >
                      Saber mais
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
