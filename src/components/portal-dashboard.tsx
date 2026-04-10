"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    LayoutDashboard, FileText, AlertCircle, FolderOpen,
    MessageCircle, Settings, LogOut, Bell, ChevronRight,
    Car, Home, Heart, Briefcase, Plus, Download, Eye,
    CheckCircle2, Clock, RefreshCw, X, Menu,
    TrendingUp, Shield, Calendar, Phone,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ── Mock data ──────────────────────────────────────────── */

const CLIENT = { name: "João Silva", email: "joao.silva@email.com", since: "2019" };

const POLICIES = [
    {
        id: "AP-2024-001",
        type: "Automóvel",
        detail: "Toyota Corolla • 2020 • AA-00-BB",
        insurer: "Fidelidade",
        premium: "€42/mês",
        renewal: "15 Jun 2025",
        daysLeft: 66,
        status: "active" as const,
        Icon: Car,
        accent: "bg-blue-50 text-blue-600 border-blue-100",
        dot: "bg-blue-500",
    },
    {
        id: "AP-2024-002",
        type: "Habitação",
        detail: "R. das Flores, 12 — Gavião",
        insurer: "Allianz",
        premium: "€28/mês",
        renewal: "03 Set 2025",
        daysLeft: 146,
        status: "active" as const,
        Icon: Home,
        accent: "bg-teal-50 text-teal-600 border-teal-100",
        dot: "bg-teal-500",
    },
    {
        id: "AP-2024-003",
        type: "Vida",
        detail: "Capital seguro: €150.000",
        insurer: "Zurich",
        premium: "€35/mês",
        renewal: "22 Jan 2026",
        daysLeft: 287,
        status: "active" as const,
        Icon: Heart,
        accent: "bg-rose-50 text-rose-600 border-rose-100",
        dot: "bg-rose-500",
    },
    {
        id: "AP-2024-004",
        type: "Acidentes Trabalho",
        detail: "Trabalhador independente",
        insurer: "AXA",
        premium: "€18/mês",
        renewal: "01 Ago 2025",
        daysLeft: 113,
        status: "renewal" as const,
        Icon: Briefcase,
        accent: "bg-amber-50 text-amber-600 border-amber-100",
        dot: "bg-amber-500",
    },
];

const CLAIMS = [
    {
        id: "SIN-2024-003",
        policy: "Automóvel",
        description: "Colisão traseira — Estrada Nacional 18",
        date: "12 Mar 2025",
        status: "in_progress" as const,
    },
    {
        id: "SIN-2023-011",
        policy: "Habitação",
        description: "Danos por inundação — cozinha",
        date: "08 Nov 2024",
        status: "resolved" as const,
    },
    {
        id: "SIN-2023-004",
        policy: "Automóvel",
        description: "Vidro partido — granizo",
        date: "22 Jun 2023",
        status: "resolved" as const,
    },
];

const DOCUMENTS = [
    { name: "Apólice Automóvel 2025",           ext: "PDF", size: "284 KB", date: "15 Jan 2025" },
    { name: "Apólice Habitação 2024–25",         ext: "PDF", size: "1.2 MB", date: "03 Set 2024" },
    { name: "Recibo Prémio — Março 2025",        ext: "PDF", size: "118 KB", date: "01 Mar 2025" },
    { name: "Participação Sinistro SIN-2024-003",ext: "PDF", size: "342 KB", date: "13 Mar 2025" },
    { name: "Condições Gerais Vida",             ext: "PDF", size: "2.1 MB", date: "22 Jan 2024" },
];

const MESSAGES = [
    {
        from: "AlenteSeguros",
        subject: "Renovação próxima — Acidentes de Trabalho",
        preview: "A sua apólice AXA renova a 01 de Agosto. Gostaríamos de rever as condições...",
        date: "Hoje",
        unread: true,
    },
    {
        from: "AlenteSeguros",
        subject: "Actualização do sinistro SIN-2024-003",
        preview: "A Fidelidade concluiu a peritagem. O valor indemnizatório acordado é de €1.240...",
        date: "Ontem",
        unread: true,
    },
    {
        from: "AlenteSeguros",
        subject: "Bem-vindo ao Portal do Cliente",
        preview: "Olá João, o seu acesso ao portal está activo. Aqui pode consultar todas as suas...",
        date: "15 Jan",
        unread: false,
    },
];

const NAV = [
    { key: "dashboard",  label: "Painel",       Icon: LayoutDashboard },
    { key: "policies",   label: "Apólices",     Icon: FileText },
    { key: "claims",     label: "Sinistros",    Icon: AlertCircle },
    { key: "documents",  label: "Documentos",   Icon: FolderOpen },
    { key: "messages",   label: "Mensagens",    Icon: MessageCircle },
    { key: "settings",   label: "Definições",   Icon: Settings },
];

/* ── Sub-components ─────────────────────────────────────── */

function StatusBadge({ status }: { status: "active" | "renewal" | "in_progress" | "resolved" }) {
    const map = {
        active:      { label: "Activa",      cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        renewal:     { label: "Renovar",     cls: "bg-amber-50 text-amber-700 border-amber-200" },
        in_progress: { label: "Em curso",    cls: "bg-blue-50 text-blue-700 border-blue-200" },
        resolved:    { label: "Resolvido",   cls: "bg-gray-50 text-gray-500 border-gray-200" },
    };
    const { label, cls } = map[status];
    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${cls}`}>
            {label}
        </span>
    );
}

/* ── Sections ───────────────────────────────────────────── */

function SectionDashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome */}
            <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-6 text-white relative overflow-hidden"
            >
                <div className="absolute right-0 top-0 w-48 h-48 bg-white/[0.05] rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute right-16 bottom-0 w-32 h-32 bg-white/[0.04] rounded-full translate-y-1/2" />
                <p className="text-teal-200 text-xs font-bold uppercase tracking-widest mb-1 relative z-10">Bem-vindo de volta</p>
                <h2 className="text-2xl font-bold relative z-10">João Silva</h2>
                <p className="text-teal-200/80 text-sm mt-1 relative z-10">Cliente desde {CLIENT.since} · 4 apólices activas</p>
                <div className="flex gap-3 mt-5 relative z-10">
                    <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium border border-white/15">
                        <Plus className="w-4 h-4" /> Nova apólice
                    </button>
                    <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium border border-white/15">
                        <Phone className="w-4 h-4" /> Contactar
                    </button>
                </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Apólices activas", value: "4",    Icon: Shield,      color: "text-teal-600",  bg: "bg-teal-50" },
                    { label: "Próx. renovação",  value: "66d",  Icon: Calendar,    color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "Sinistros abertos",value: "1",    Icon: AlertCircle, color: "text-blue-600",  bg: "bg-blue-50" },
                    { label: "Documentos",        value: "5",   Icon: FolderOpen,  color: "text-violet-600",bg: "bg-violet-50" },
                ].map(({ label, value, Icon, color, bg }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 * i, ease: EASE }}
                        className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                    >
                        <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                            <Icon className={`w-4 h-4 ${color}`} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Policies summary */}
            <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">As suas apólices</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                    {POLICIES.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 * i, ease: EASE }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 hover:border-teal-200 transition-colors cursor-pointer group"
                        >
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${p.accent}`}>
                                <p.Icon className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-semibold text-sm text-gray-900">{p.type}</p>
                                    <StatusBadge status={p.status} />
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5 truncate">{p.detail}</p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs text-gray-500">{p.insurer} · {p.premium}</span>
                                    <span className="text-xs text-gray-400">Renova {p.renewal}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Activity + Messages */}
            <div className="grid lg:grid-cols-2 gap-4">
                {/* Renewals */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h3 className="font-semibold text-sm text-gray-900 mb-4 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-amber-500" /> Próximas renovações
                    </h3>
                    <div className="space-y-3">
                        {POLICIES.filter(p => p.daysLeft < 150).sort((a,b) => a.daysLeft - b.daysLeft).map(p => (
                            <div key={p.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{p.type}</p>
                                        <p className="text-xs text-gray-400">{p.insurer} · {p.renewal}</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${p.daysLeft < 90 ? "bg-amber-50 text-amber-700" : "bg-gray-50 text-gray-500"}`}>
                                    {p.daysLeft}d
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent messages */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h3 className="font-semibold text-sm text-gray-900 mb-4 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-teal-500" /> Mensagens recentes
                    </h3>
                    <div className="space-y-3">
                        {MESSAGES.slice(0, 2).map((m, i) => (
                            <div key={i} className="flex gap-3 cursor-pointer group">
                                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${m.unread ? "bg-teal-500" : "bg-transparent"}`} />
                                <div className="min-w-0">
                                    <p className={`text-sm truncate ${m.unread ? "font-semibold text-gray-900" : "text-gray-700"}`}>{m.subject}</p>
                                    <p className="text-xs text-gray-400 truncate mt-0.5">{m.preview}</p>
                                </div>
                                <span className="text-xs text-gray-400 shrink-0 mt-0.5">{m.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionPolicies() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Apólices</h2>
                <button className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                    <Plus className="w-4 h-4" /> Pedir orçamento
                </button>
            </div>
            {POLICIES.map((p, i) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i, ease: EASE }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                >
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${p.accent}`}>
                            <p.Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="font-bold text-gray-900">{p.type}</h3>
                                <StatusBadge status={p.status} />
                            </div>
                            <p className="text-sm text-gray-500">{p.detail}</p>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Seguradora</p>
                                    <p className="text-sm font-medium text-gray-800">{p.insurer}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Prémio</p>
                                    <p className="text-sm font-medium text-gray-800">{p.premium}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Renovação</p>
                                    <p className="text-sm font-medium text-gray-800">{p.renewal}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors border border-gray-100">
                                <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors border border-gray-100">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-50">Nº de apólice: {p.id}</p>
                </motion.div>
            ))}
        </div>
    );
}

function SectionClaims() {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Sinistros</h2>
                <button
                    onClick={() => setShowForm(v => !v)}
                    className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" /> Participar sinistro
                </button>
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                    >
                        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-teal-900">Nova participação de sinistro</h3>
                                <button onClick={() => setShowForm(false)} className="text-teal-400 hover:text-teal-600"><X className="w-4 h-4" /></button>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-teal-800 mb-1.5">Apólice</label>
                                    <select className="w-full h-10 px-3 rounded-lg border border-teal-200 bg-white text-sm outline-none focus:ring-2 focus:ring-teal-300">
                                        {POLICIES.map(p => <option key={p.id}>{p.type} — {p.insurer}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-teal-800 mb-1.5">Data do sinistro</label>
                                    <input type="date" className="w-full h-10 px-3 rounded-lg border border-teal-200 bg-white text-sm outline-none focus:ring-2 focus:ring-teal-300" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-teal-800 mb-1.5">Descrição</label>
                                    <textarea rows={3} placeholder="Descreva o que aconteceu..." className="w-full px-3 py-2.5 rounded-lg border border-teal-200 bg-white text-sm outline-none focus:ring-2 focus:ring-teal-300 resize-none" />
                                </div>
                            </div>
                            <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-5 py-2 text-sm font-medium transition-colors">
                                Enviar participação
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {CLAIMS.map((c, i) => (
                <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i, ease: EASE }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4"
                >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.status === "in_progress" ? "bg-blue-50" : "bg-gray-50"}`}>
                        {c.status === "in_progress"
                            ? <Clock className="w-5 h-5 text-blue-500" />
                            : <CheckCircle2 className="w-5 h-5 text-gray-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <p className="font-semibold text-sm text-gray-900">{c.description}</p>
                            <StatusBadge status={c.status} />
                        </div>
                        <p className="text-xs text-gray-400">{c.policy} · {c.date}</p>
                    </div>
                    <p className="text-xs text-gray-400 shrink-0">{c.id}</p>
                </motion.div>
            ))}
        </div>
    );
}

function SectionDocuments() {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Documentos</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                {DOCUMENTS.map((d, i) => (
                    <motion.div
                        key={d.name}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.35, delay: 0.05 * i }}
                        className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50/50 transition-colors group"
                    >
                        <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                            <span className="text-[10px] font-bold text-red-500">PDF</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{d.name}</p>
                            <p className="text-xs text-gray-400">{d.size} · {d.date}</p>
                        </div>
                        <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all">
                            <Download className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function SectionMessages() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Mensagens</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                {MESSAGES.map((m, i) => (
                    <div key={i}>
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-start gap-4 px-5 py-4 hover:bg-gray-50/50 transition-colors text-left"
                        >
                            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${m.unread ? "bg-teal-500" : "bg-transparent"}`} />
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm ${m.unread ? "font-semibold text-gray-900" : "text-gray-700"}`}>{m.subject}</p>
                                <p className="text-xs text-gray-400 mt-0.5 truncate">{m.preview}</p>
                            </div>
                            <span className="text-xs text-gray-400 shrink-0 mt-0.5">{m.date}</span>
                        </button>
                        <AnimatePresence>
                            {open === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: EASE }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-11 pb-5 text-sm text-gray-600 leading-relaxed">{m.preview} Caso tenha questões adicionais, não hesite em contactar-nos directamente por telefone ou WhatsApp.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SectionSettings() {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Definições</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-4">Dados pessoais</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: "Nome completo", value: "João Silva" },
                            { label: "Email", value: "joao.silva@email.com" },
                            { label: "Telefone", value: "+351 912 345 678" },
                            { label: "NIF", value: "123 456 789" },
                            { label: "Morada", value: "R. das Flores, 12" },
                            { label: "Localidade", value: "Gavião, 6040-000" },
                        ].map(({ label, value }) => (
                            <div key={label}>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
                                <input
                                    defaultValue={value}
                                    className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:bg-white focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">Notificações</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Receber alertas de renovação e actualizações por email</p>
                    </div>
                    <div className="w-11 h-6 bg-teal-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-5 py-2 text-sm font-medium transition-colors">
                    Guardar alterações
                </button>
            </div>
        </div>
    );
}

const SECTION_MAP: Record<string, React.ReactNode> = {
    dashboard: <SectionDashboard />,
    policies:  <SectionPolicies />,
    claims:    <SectionClaims />,
    documents: <SectionDocuments />,
    messages:  <SectionMessages />,
    settings:  <SectionSettings />,
};

/* ── Root component ─────────────────────────────────────── */

export function PortalDashboard() {
    const [active, setActive]   = useState("dashboard");
    const [sideOpen, setSideOpen] = useState(false);

    const unread = MESSAGES.filter(m => m.unread).length;

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Sidebar overlay (mobile) */}
            <AnimatePresence>
                {sideOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/30 z-20 lg:hidden"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSideOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={[
                "fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-100 flex flex-col z-30 transition-transform duration-300",
                "lg:translate-x-0",
                sideOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
            ].join(" ")}>
                {/* Logo */}
                <div className="px-5 py-5 border-b border-gray-100">
                    <Link href="/" className="inline-block">
                        <Image src="/logo_full.svg" alt="AlenteSeguros" width={150} height={44} className="h-9 w-auto" />
                    </Link>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Portal do Cliente</p>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                    {NAV.map(({ key, label, Icon }) => {
                        const isActive = active === key;
                        return (
                            <button
                                key={key}
                                onClick={() => { setActive(key); setSideOpen(false); }}
                                className={[
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                                    isActive
                                        ? "bg-teal-50 text-teal-700"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                                ].join(" ")}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                {label}
                                {key === "messages" && unread > 0 && (
                                    <span className="ml-auto bg-teal-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {unread}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="px-3 pb-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3 px-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm shrink-0">
                            JS
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-800 truncate">{CLIENT.name}</p>
                            <p className="text-[10px] text-gray-400 truncate">{CLIENT.email}</p>
                        </div>
                    </div>
                    <Link
                        href="/portal"
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all"
                    >
                        <LogOut className="w-4 h-4" /> Terminar sessão
                    </Link>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8 h-14 flex items-center justify-between">
                    <button
                        onClick={() => setSideOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-50 text-gray-500"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <h1 className="text-sm font-semibold text-gray-800 capitalize">
                        {NAV.find(n => n.key === active)?.label ?? "Painel"}
                    </h1>
                    <div className="flex items-center gap-2">
                        <button className="relative p-2 rounded-lg hover:bg-gray-50 text-gray-500 transition-colors">
                            <Bell className="w-5 h-5" />
                            {unread > 0 && (
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-500 rounded-full" />
                            )}
                        </button>
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                            JS
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 px-4 lg:px-8 py-6 max-w-4xl w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3, ease: EASE }}
                        >
                            {SECTION_MAP[active]}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
