"use client";

import { useState, useRef } from "react";
import {
    motion, AnimatePresence,
    useReducedMotion, useScroll, useTransform,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Phone, Mail, MapPin, MessageCircle,
    Lock, CheckCircle, ChevronDown,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

const SEGURO_OPTIONS = ["Automóvel", "Habitação", "Saúde", "Vida", "Outro"];

const HORARIO_OPTIONS = [
    { value: "manha",    label: "Manhã"        },
    { value: "tarde",    label: "Tarde"         },
    { value: "qualquer", label: "Qualquer hora" },
];

const contactInfo = [
    {
        icon:  Phone,
        title: "Telefones",
        value: "241 095 100 | 938 121 196",
        href:  "tel:+351938121196",
    },
    {
        icon:  Mail,
        title: "Email",
        value: "seguros.ritareis@gmail.com",
        href:  "mailto:seguros.ritareis@gmail.com",
    },
    {
        icon:  MapPin,
        title: "Morada",
        value: "R. Doutor Eusébio Leão, Nº89 R/C, 6040-120 Gavião",
        href:  "https://maps.google.com/?q=R.+Doutor+Eusébio+Leão+89+Gavião+Portugal",
    },
];

type Fields = {
    name:       string;
    phone:      string;
    email:      string;
    tipo:       string;
    localidade: string;
    horario:    string;
    message:    string;
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(fields: Fields): Errors {
    const errors: Errors = {};
    if (!fields.name.trim())
        errors.name = "Nome obrigatório.";
    if (!fields.email.trim() && !fields.phone.trim()) {
        errors.email = "Indique o email ou o telefone.";
        errors.phone = "Indique o email ou o telefone.";
    }
    if (!fields.message.trim())
        errors.message = "Mensagem obrigatória.";
    return errors;
}

// ── Row stagger helper ──────────────────────────────────────────────────────
function rowMotion(delay: number, prefersReduced: boolean | null) {
    return {
        initial:    prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
        animate:    { opacity: 1, y: 0 },
        transition: prefersReduced ? { duration: 0 } : { duration: 0.45, delay, ease: EASE },
    } as const;
}

export function Contact() {
    const sectionRef    = useRef<HTMLElement>(null);
    const prefersReduced = useReducedMotion();

    // ── Scroll-driven parallax for ambient orbs ─────────────────────────────
    const { scrollYProgress } = useScroll({
        target:  sectionRef,
        offset:  ["start end", "end start"],
    });
    const orb1Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const orb2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const orb3Y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    // ── Form state ──────────────────────────────────────────────────────────
    const [fields, setFields] = useState<Fields>({
        name: "", phone: "", email: "", tipo: "",
        localidade: "", horario: "", message: "",
    });
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const set =
        (key: keyof Fields) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setFields((f) => ({ ...f, [key]: e.target.value }));
            if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate(fields);
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setStatus("loading");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
    };

    const reset = () => {
        setFields({ name: "", phone: "", email: "", tipo: "", localidade: "", horario: "", message: "" });
        setErrors({});
        setStatus("idle");
    };

    return (
        <section
            ref={sectionRef}
            id="contacto"
            className="py-20 md:py-28 bg-surface relative overflow-hidden"
        >
            {/* ── Grain texture — analogue warmth, zero performance cost ── */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none select-none"
                aria-hidden="true"
            >
                <filter id="noise-contact">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise-contact)" />
            </svg>

            {/* ── Scroll-driven ambient orbs ─────────────────────────────── */}
            <motion.div
                style={{ y: prefersReduced ? 0 : orb1Y }}
                className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/5 rounded-full filter blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: prefersReduced ? 0 : orb2Y }}
                className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400/5 rounded-full filter blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: prefersReduced ? 0 : orb3Y }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.02] rounded-full filter blur-3xl pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* ── Contact Form ──────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        {/* Depth layers — creates a crafted 3-D lift effect */}
                        <div className="relative">
                            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-border/20" />
                            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl border border-border/25 bg-white/60" />

                            <Card className="relative border-border/30 shadow-2xl shadow-primary/[0.08] bg-white overflow-hidden">
                                {/* Top-edge inner highlight */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent z-10"
                                />

                                <CardContent className="p-7 md:p-9">
                                    <AnimatePresence mode="wait">

                                        {/* ── Success state ── */}
                                        {status === "success" ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                                animate={{ opacity: 1, scale: 1,    filter: "blur(0px)" }}
                                                exit={{    opacity: 0, scale: 0.95                       }}
                                                transition={{ duration: 0.5, ease: EASE }}
                                                className="flex flex-col items-center text-center py-10"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
                                                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                                                >
                                                    <CheckCircle className="w-10 h-10 text-primary" />
                                                </motion.div>

                                                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                                                    Mensagem enviada!
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed mb-1 max-w-xs">
                                                    {fields.tipo ? (
                                                        <>Recebemos o seu pedido sobre seguro{" "}
                                                            <span className="font-semibold text-foreground">{fields.tipo}</span>.
                                                        </>
                                                    ) : (
                                                        "Recebemos a sua mensagem."
                                                    )}
                                                </p>
                                                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                                                    Entraremos em contacto em menos de 24 horas úteis.
                                                </p>
                                                <button
                                                    onClick={reset}
                                                    className="text-sm text-primary font-semibold hover:underline underline-offset-4 transition-all"
                                                >
                                                    Enviar outra mensagem
                                                </button>
                                            </motion.div>

                                        ) : (

                                            /* ── Form state ── */
                                            <motion.div
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{    opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                                                    Envie-nos uma mensagem
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-7">
                                                    Respondemos em menos de 24 horas úteis.
                                                </p>

                                                <form
                                                    onSubmit={handleSubmit}
                                                    noValidate
                                                    aria-label="Formulário de contacto"
                                                    className="space-y-5"
                                                >
                                                    {/* ── Row 1: Name + Phone ── */}
                                                    <motion.div {...rowMotion(0.05, prefersReduced)}>
                                                        <div className="grid sm:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <Label htmlFor="name" className="font-medium">
                                                                    Nome <span className="text-red-400">*</span>
                                                                </Label>
                                                                <Input
                                                                    id="name"
                                                                    autoComplete="name"
                                                                    placeholder="O seu nome"
                                                                    value={fields.name}
                                                                    onChange={set("name")}
                                                                    className={[
                                                                        "h-11 border-border/60 focus:border-primary",
                                                                        errors.name ? "border-red-400 focus:border-red-400" : "",
                                                                    ].join(" ")}
                                                                />
                                                                {errors.name && (
                                                                    <p className="text-xs text-red-500">{errors.name}</p>
                                                                )}
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label htmlFor="phone" className="font-medium">Telefone</Label>
                                                                <Input
                                                                    id="phone"
                                                                    type="tel"
                                                                    autoComplete="tel"
                                                                    inputMode="tel"
                                                                    placeholder="912 345 678"
                                                                    value={fields.phone}
                                                                    onChange={set("phone")}
                                                                    className={[
                                                                        "h-11 border-border/60 focus:border-primary",
                                                                        errors.phone ? "border-red-400 focus:border-red-400" : "",
                                                                    ].join(" ")}
                                                                />
                                                                {errors.phone && (
                                                                    <p className="text-xs text-red-500">{errors.phone}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    {/* ── Row 2: Email + Tipo de Seguro ── */}
                                                    <motion.div {...rowMotion(0.13, prefersReduced)}>
                                                        <div className="grid sm:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <Label htmlFor="email" className="font-medium">Email</Label>
                                                                <Input
                                                                    id="email"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    inputMode="email"
                                                                    placeholder="exemplo@email.com"
                                                                    value={fields.email}
                                                                    onChange={set("email")}
                                                                    className={[
                                                                        "h-11 border-border/60 focus:border-primary",
                                                                        errors.email ? "border-red-400 focus:border-red-400" : "",
                                                                    ].join(" ")}
                                                                />
                                                                {errors.email && (
                                                                    <p className="text-xs text-red-500">{errors.email}</p>
                                                                )}
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label htmlFor="tipo" className="font-medium">Tipo de Seguro</Label>
                                                                <div className="relative">
                                                                    <select
                                                                        id="tipo"
                                                                        value={fields.tipo}
                                                                        onChange={set("tipo")}
                                                                        className={[
                                                                            "w-full h-11 rounded-md border border-border/60 bg-background px-3 py-2 text-sm",
                                                                            "appearance-none pr-9 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
                                                                            fields.tipo === "" ? "text-muted-foreground" : "text-foreground",
                                                                        ].join(" ")}
                                                                    >
                                                                        <option value="" disabled>Selecione...</option>
                                                                        {SEGURO_OPTIONS.map((o) => (
                                                                            <option key={o} value={o} className="text-foreground">{o}</option>
                                                                        ))}
                                                                    </select>
                                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    {/* ── Row 3: Localidade + Horário ── */}
                                                    <motion.div {...rowMotion(0.21, prefersReduced)}>
                                                        <div className="grid sm:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <Label htmlFor="localidade" className="font-medium">Localidade</Label>
                                                                <Input
                                                                    id="localidade"
                                                                    autoComplete="address-level2"
                                                                    placeholder="Ex: Gavião, Abrantes…"
                                                                    value={fields.localidade}
                                                                    onChange={set("localidade")}
                                                                    className="h-11 border-border/60 focus:border-primary"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label className="font-medium">Melhor horário</Label>
                                                                <div className="flex gap-2 h-11">
                                                                    {HORARIO_OPTIONS.map((opt) => (
                                                                        <button
                                                                            key={opt.value}
                                                                            type="button"
                                                                            onClick={() =>
                                                                                setFields((f) => ({
                                                                                    ...f,
                                                                                    horario: f.horario === opt.value ? "" : opt.value,
                                                                                }))
                                                                            }
                                                                            className={[
                                                                                "flex-1 rounded-md border text-xs font-medium transition-all duration-200",
                                                                                fields.horario === opt.value
                                                                                    ? "bg-primary border-primary text-white shadow-sm shadow-primary/20"
                                                                                    : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground bg-background",
                                                                            ].join(" ")}
                                                                        >
                                                                            {opt.label}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    {/* ── Message ── */}
                                                    <motion.div {...rowMotion(0.29, prefersReduced)}>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="message" className="font-medium">
                                                                Mensagem <span className="text-red-400">*</span>
                                                            </Label>
                                                            <Textarea
                                                                id="message"
                                                                placeholder="Como podemos ajudar?"
                                                                rows={4}
                                                                value={fields.message}
                                                                onChange={set("message")}
                                                                className={[
                                                                    "border-border/60 focus:border-primary resize-none",
                                                                    errors.message ? "border-red-400 focus:border-red-400" : "",
                                                                ].join(" ")}
                                                            />
                                                            {errors.message && (
                                                                <p className="text-xs text-red-500">{errors.message}</p>
                                                            )}
                                                        </div>
                                                    </motion.div>

                                                    {/* ── Submit + Privacy ── */}
                                                    <motion.div {...rowMotion(0.37, prefersReduced)} className="space-y-3">
                                                        <motion.div
                                                            whileTap={prefersReduced ? {} : { scale: 0.97 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                        >
                                                            <Button
                                                                type="submit"
                                                                disabled={status === "loading"}
                                                                className="w-full h-12 font-semibold text-base shadow-md shadow-primary/15"
                                                                size="lg"
                                                            >
                                                                {status === "loading" ? (
                                                                    <span className="flex items-center gap-2">
                                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                        A enviar...
                                                                    </span>
                                                                ) : (
                                                                    "Enviar Mensagem"
                                                                )}
                                                            </Button>
                                                        </motion.div>

                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                            <Lock className="w-3.5 h-3.5 shrink-0" />
                                                            <span>
                                                                Os seus dados são tratados com total confidencialidade.{" "}
                                                                <Link
                                                                    href="/privacidade"
                                                                    className="underline underline-offset-2 hover:text-primary transition-colors"
                                                                >
                                                                    Política de Privacidade
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </motion.div>

                                                </form>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* ── Contact Info + Map ────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="space-y-4"
                    >
                        {/* Column heading */}
                        <div className="mb-6">
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.18em] mb-1">
                                Contacto directo
                            </p>
                            <h3 className="font-display text-xl font-bold text-foreground">
                                Ou fale connosco directamente
                            </h3>
                        </div>

                        {/* Contact cards — left accent bar + bare icon pattern */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={VP}
                                transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
                            >
                                <motion.a
                                    href={info.href}
                                    target={info.title === "Morada" ? "_blank" : undefined}
                                    rel={info.title    === "Morada" ? "noopener noreferrer" : undefined}
                                    whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                    className="flex items-start gap-4 p-5 bg-white border border-border/30 rounded-2xl hover:shadow-md hover:border-primary/20 transition-[box-shadow,border-color] duration-300 group block"
                                >
                                    {/* Left accent bar + bare icon */}
                                    <div className="flex items-center gap-3 shrink-0 mt-0.5">
                                        <div className="w-0.5 h-10 rounded-full bg-primary/25 group-hover:bg-primary transition-colors duration-300" />
                                        <info.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-semibold text-foreground text-sm mb-0.5">{info.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                                    </div>
                                </motion.a>
                            </motion.div>
                        ))}

                        {/* WhatsApp CTA — with continuous pulse ring */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: 0.28, ease: EASE }}
                            className="relative"
                        >
                            {/* Pulse ring */}
                            {!prefersReduced && (
                                <motion.div
                                    className="absolute inset-0 rounded-md pointer-events-none"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0 0px rgba(34,197,94,0.45)",
                                            "0 0 0 14px rgba(34,197,94,0)",
                                        ],
                                    }}
                                    transition={{
                                        duration:    2.2,
                                        repeat:      Infinity,
                                        ease:        "easeOut",
                                        repeatDelay: 0.8,
                                    }}
                                />
                            )}
                            <Button
                                asChild
                                size="lg"
                                className="relative w-full bg-green-500 hover:bg-green-400 gap-2.5 h-12 font-semibold text-base shadow-md shadow-green-600/20"
                            >
                                <a href="https://wa.me/351938121196" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-5 h-5" />
                                    Falar por WhatsApp
                                </a>
                            </Button>
                        </motion.div>

                        {/* Map — with label + vignette overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: 0.36, ease: EASE }}
                        >
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.18em] mb-3">
                                Encontre-nos
                            </p>
                            <div className="relative h-72 bg-muted rounded-2xl overflow-hidden border border-border/30 shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.5!2d-7.9338!3d39.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzAwLjEiTiA3wrA1NicwMS43Ilc!5e0!3m2!1sen!2spt!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização AlenteSeguros"
                                />
                                {/* Inset vignette — crafted, not raw iframe */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 pointer-events-none rounded-2xl"
                                    style={{ boxShadow: "inset 0 0 28px rgba(0,0,0,0.10)" }}
                                />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
