"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" } as const;

const contactInfo = [
  {
    icon:   Phone,
    title:  "Telefone",
    value:  "241 095 100 · 938 121 196",
    href:   "tel:+351938121196",
    color:  "text-[#0ea5a0]",
    bg:     "bg-[#0ea5a0]/10",
  },
  {
    icon:   Mail,
    title:  "Email",
    value:  "seguros.ritareis@gmail.com",
    href:   "mailto:seguros.ritareis@gmail.com",
    color:  "text-[#c9a84c]",
    bg:     "bg-[#c9a84c]/10",
  },
  {
    icon:   MapPin,
    title:  "Morada",
    value:  "R. Doutor Eusébio Leão, 89 R/C\n6040-120 Gavião",
    href:   "https://maps.google.com/?q=R.+Doutor+Eusébio+Leão+89+Gavião+Portugal",
    color:  "text-[#0ea5a0]",
    bg:     "bg-[#0ea5a0]/10",
  },
];

// ── Input field ──────────────────────────────────────────────────────────────
function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a9bae]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          w-full px-4 py-3 rounded-xl
          bg-white/[0.05] border border-white/[0.08]
          text-[#f0ede8] placeholder:text-[#8a9bae]/60
          text-sm
          focus:outline-none focus:border-[#0ea5a0]/60 focus:bg-white/[0.08]
          transition-[border-color,background-color] duration-300
        "
      />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const shouldAnimate = !useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-[#0d1829] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%]   right-[0%]  w-[500px] h-[500px] rounded-full bg-[#0ea5a0]/[0.05] blur-[120px]" />
        <div className="absolute bottom-[0%] left-[5%]  w-[400px] h-[400px] rounded-full bg-[#c9a84c]/[0.04] blur-[100px]" />
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
            Fale Connosco
          </motion.span>

          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 24, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
            className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-[#f0ede8] leading-[1.1] tracking-tight mb-4"
          >
            Estamos aqui{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a0] to-[#c9a84c]">
              para si
            </span>
          </motion.h2>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            className="text-[#8a9bae] text-base md:text-lg leading-relaxed"
          >
            Entre em contacto para obter um orçamento personalizado ou esclarecer qualquer dúvida.
            Respondemos em menos de 24 horas.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ── Contact form ── */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -32, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Outer bezel */}
            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/[0.1] to-white/[0.03] ring-1 ring-white/[0.06]">
              <div className="rounded-[calc(1.5rem-1px)] bg-[#080f1e]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-8">

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-[#f0ede8] mb-6">
                        Envie-nos uma mensagem
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field id="name"  label="Nome"     placeholder="O seu nome"    required />
                        <Field id="phone" label="Telefone" placeholder="912 345 678" type="tel" />
                      </div>
                      <Field id="email"   label="Email"    placeholder="exemplo@email.com" type="email" required />

                      {/* Insurance type select */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="tipo" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a9bae]">
                          Tipo de seguro
                        </label>
                        <select
                          id="tipo"
                          name="tipo"
                          className="
                            w-full px-4 py-3 rounded-xl
                            bg-white/[0.05] border border-white/[0.08]
                            text-[#f0ede8] text-sm
                            focus:outline-none focus:border-[#0ea5a0]/60
                            transition-[border-color] duration-300
                            appearance-none
                          "
                        >
                          <option value="" className="bg-[#0d1829]">Selecione uma opção</option>
                          <option value="habitacao"   className="bg-[#0d1829]">Habitação</option>
                          <option value="automovel"   className="bg-[#0d1829]">Automóvel</option>
                          <option value="saude"       className="bg-[#0d1829]">Saúde</option>
                          <option value="vida"        className="bg-[#0d1829]">Vida</option>
                          <option value="empresarial" className="bg-[#0d1829]">Empresarial</option>
                          <option value="outro"       className="bg-[#0d1829]">Outro</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a9bae]">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Como podemos ajudar?"
                          className="
                            w-full px-4 py-3 rounded-xl resize-none
                            bg-white/[0.05] border border-white/[0.08]
                            text-[#f0ede8] placeholder:text-[#8a9bae]/60
                            text-sm
                            focus:outline-none focus:border-[#0ea5a0]/60 focus:bg-white/[0.08]
                            transition-[border-color,background-color] duration-300
                          "
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="
                          group w-full inline-flex items-center justify-center gap-2.5
                          px-8 py-4 rounded-full
                          bg-[#0ea5a0] text-white font-semibold text-sm
                          shadow-[0_0_24px_rgba(14,165,160,0.3)]
                          hover:shadow-[0_0_40px_rgba(14,165,160,0.5)]
                          hover:-translate-y-[1px]
                          disabled:opacity-60 disabled:cursor-not-allowed
                          transition-all duration-300 overflow-hidden relative
                        "
                      >
                        <span className="relative z-10">
                          {loading ? "A enviar..." : "Enviar Mensagem"}
                        </span>
                        {!loading && (
                          <span className="relative z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex flex-col items-center text-center gap-5 py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#0ea5a0]/15 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-[#0ea5a0]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-[#f0ede8] mb-2">
                          Mensagem enviada!
                        </h3>
                        <p className="text-[#8a9bae] text-sm leading-relaxed max-w-xs mx-auto">
                          Obrigado pelo contacto. Iremos responder em menos de 24 horas.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

          {/* ── Contact info + map ── */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: 32, filter: "blur(8px)" } : {}}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col gap-4"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === "Morada" ? "_blank" : undefined}
                  rel={info.title === "Morada" ? "noopener noreferrer" : undefined}
                  initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                  whileHover={{ x: 4 }}
                  className="
                    flex items-start gap-4 p-5
                    rounded-2xl border border-white/[0.07] bg-white/[0.03]
                    hover:border-white/[0.14] hover:bg-white/[0.05]
                    transition-all duration-300 group
                  "
                >
                  <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8a9bae] mb-0.5">
                      {info.title}
                    </p>
                    <p className="text-[#f0ede8] text-sm font-medium whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/351938121196"
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ delay: 0.35, duration: 0.55, ease: EASE }}
              className="
                group flex items-center justify-center gap-3
                w-full px-6 py-4 rounded-2xl
                bg-[#25D366]/10 border border-[#25D366]/20
                hover:bg-[#25D366]/15 hover:border-[#25D366]/40
                text-[#25D366] font-semibold text-sm
                transition-all duration-300
              "
            >
              <MessageCircle className="w-5 h-5" />
              Falar por WhatsApp
              <ArrowRight className="w-4 h-4 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Google Maps embed */}
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 16 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ delay: 0.45, duration: 0.55, ease: EASE }}
              className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-video"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.5!2d-7.9338!3d39.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzAwLjEiTiA3wrA1NicwMS43Ilc!5e0!3m2!1spt!2spt!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AlenteSeguros"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Floating WhatsApp button ── */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <motion.a
          href="https://wa.me/351938121196"
          target="_blank"
          rel="noopener noreferrer"
          initial={shouldAnimate ? { scale: 0 } : {}}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{  scale: 0.95 }}
          className="
            relative w-14 h-14 rounded-full
            bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.4)]
            flex items-center justify-center
          "
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.a>
      </div>
    </section>
  );
}
