"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, ShieldCheck, FileText, Clock } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const trustItems = [
    { icon: FileText,    label: "Apólices geridas",  value: "300+" },
    { icon: Clock,       label: "Atendimento",        value: "<24h" },
    { icon: ShieldCheck, label: "Certificação ASF",   value: "Activa" },
];

function fieldMotion(delay: number) {
    return {
        initial:    { opacity: 0, y: 14 },
        animate:    { opacity: 1, y: 0 },
        transition: { duration: 0.45, delay, ease: EASE },
    } as const;
}

type FormErrors = { email?: string; password?: string; general?: string };
type Status = "idle" | "loading" | "error";

export function PortalLogin() {
    const router = useRouter();
    const [email, setEmail]         = useState("");
    const [password, setPassword]   = useState("");
    const [showPass, setShowPass]   = useState(false);
    const [status, setStatus]       = useState<Status>("idle");
    const [errors, setErrors]       = useState<FormErrors>({});
    const [forgotOpen, setForgotOpen] = useState(false);

    function validate(): FormErrors {
        const e: FormErrors = {};
        if (!email)                             e.email    = "Introduza o seu email.";
        else if (!/\S+@\S+\.\S+/.test(email))  e.email    = "Email inválido.";
        if (!password)                          e.password = "Introduza a palavra-passe.";
        return e;
    }

    async function handleSubmit(ev: React.FormEvent) {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setErrors({});
        setStatus("loading");
        await new Promise(r => setTimeout(r, 1600));
        router.push("/portal/dashboard");
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            {/* ── Left Column ── */}
            <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden">
                {/* Background video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                >
                    <source src="/portal.mp4" type="video/mp4" />
                </video>

                {/* Teal overlay */}
                <div className="absolute inset-0 bg-teal-950/80" />

                {/* Gradient fade to bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent pointer-events-none" />

                {/* Logo */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                >
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={200}
                            height={60}
                            className="h-12 w-auto object-contain brightness-0 invert"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Centre headline */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
                >
                    <p className="text-teal-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Área reservada
                    </p>
                    <h2
                        className="text-white font-display mb-5"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
                    >
                        <span className="block font-normal">Gerir os seus</span>
                        <span className="block font-bold italic text-teal-300">seguros.</span>
                    </h2>
                    <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                        Consulte apólices, acompanhe sinistros e aceda aos seus documentos em qualquer momento.
                    </p>
                </motion.div>

                {/* Trust strip */}
                <motion.div
                    className="relative z-10 grid grid-cols-3 gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
                >
                    {trustItems.map(({ icon: Icon, label, value }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4"
                        >
                            <Icon className="w-4 h-4 text-teal-300 mb-2" />
                            <p className="text-white font-semibold text-lg leading-none">{value}</p>
                            <p className="text-white/50 text-xs mt-1 leading-tight">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── Right Column ── */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-background relative">
                {/* Subtle top-edge accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                {/* Logo watermark — top right */}
                <motion.div
                    className="absolute top-6 right-6 pointer-events-none select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6, delay: 1.0, ease: EASE }}
                >
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={160}
                        height={160}
                        aria-hidden="true"
                        className="w-28 lg:w-36 opacity-[0.07] [filter:saturate(3)_hue-rotate(0deg)]"
                    />
                </motion.div>

                <div className="w-full max-w-sm">
                    {/* Mobile logo */}
                    <motion.div className="lg:hidden flex justify-center mb-8" {...fieldMotion(0)}>
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={180}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Back link */}
                    <motion.div className="mb-8" {...fieldMotion(0.05)}>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar ao site
                        </Link>
                    </motion.div>

                    {/* Heading */}
                    <motion.div className="mb-8" {...fieldMotion(0.10)}>
                        <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1.5">
                            Bem-vindo de volta
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Introduza os seus dados para aceder à sua conta
                        </p>
                    </motion.div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">

                        {/* Email */}
                        <motion.div {...fieldMotion(0.16)}>
                            <label htmlFor="portal-email" className="block text-sm font-medium text-foreground mb-1.5">
                                Email
                            </label>
                            <input
                                id="portal-email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value);
                                    setErrors(prev => ({ ...prev, email: undefined, general: undefined }));
                                }}
                                placeholder="nome@exemplo.com"
                                className={[
                                    "w-full h-11 px-3.5 rounded-lg border bg-background text-sm transition-colors outline-none",
                                    "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                    errors.email
                                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                                        : "border-border",
                                ].join(" ")}
                            />
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                            )}
                        </motion.div>

                        {/* Password */}
                        <motion.div {...fieldMotion(0.22)}>
                            <div className="flex items-center justify-between mb-1.5">
                                <label htmlFor="portal-password" className="text-sm font-medium text-foreground">
                                    Palavra-passe
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setForgotOpen(v => !v)}
                                    className="text-xs font-medium text-primary hover:underline underline-offset-4 transition-colors"
                                >
                                    Esqueceu-se?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    id="portal-password"
                                    type={showPass ? "text" : "password"}
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                        setErrors(prev => ({ ...prev, password: undefined, general: undefined }));
                                    }}
                                    className={[
                                        "w-full h-11 px-3.5 pr-11 rounded-lg border bg-background text-sm transition-colors outline-none",
                                        "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                                        errors.password
                                            ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                                            : "border-border",
                                    ].join(" ")}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(v => !v)}
                                    aria-label={showPass ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
                            )}
                        </motion.div>

                        {/* Forgot password inline panel */}
                        <AnimatePresence>
                            {forgotOpen && (
                                <motion.div
                                    key="forgot"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25, ease: EASE }}
                                    className="overflow-hidden"
                                >
                                    <div className="rounded-lg bg-primary/5 border border-primary/15 px-4 py-3 text-sm text-muted-foreground">
                                        Para recuperar o acesso, contacte-nos em{" "}
                                        <a
                                            href="mailto:geral@alenteseguros.pt"
                                            className="text-primary font-medium hover:underline underline-offset-4"
                                        >
                                            geral@alenteseguros.pt
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* General error */}
                        <AnimatePresence>
                            {errors.general && (
                                <motion.div
                                    key="error"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600"
                                >
                                    {errors.general}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit */}
                        <motion.div {...fieldMotion(0.28)}>
                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                whileTap={{ scale: 0.97 }}
                                className="w-full h-11 rounded-lg bg-primary text-white font-semibold text-sm transition-opacity disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <motion.span
                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                        />
                                        A verificar…
                                    </>
                                ) : "Entrar"}
                            </motion.button>
                        </motion.div>
                    </form>

                    {/* Footer note */}
                    <motion.p
                        className="mt-6 text-center text-xs text-muted-foreground leading-relaxed"
                        {...fieldMotion(0.34)}
                    >
                        Ao entrar, aceita os nossos{" "}
                        <Link href="/termos" className="underline underline-offset-4 hover:text-primary transition-colors">
                            Termos
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="underline underline-offset-4 hover:text-primary transition-colors">
                            Privacidade
                        </Link>
                        .
                    </motion.p>

                    <motion.div
                        className="mt-4 flex items-start gap-2 text-xs bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 text-amber-700"
                        {...fieldMotion(0.4)}
                    >
                        <span className="shrink-0 mt-px">⚠️</span>
                        <span className="leading-relaxed">
                            <strong>Projeto de demonstração da{" "}
                            <a
                                href="https://lopes2tech.ch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-amber-900 transition-colors"
                            >
                                Lopes2Tech
                            </a></strong> — Introduza qualquer email e palavra-passe para explorar o portal. Nenhum dado é armazenado ou processado.
                        </span>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
