import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const CIRCLE_PATTERN = `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`;

const navLinks = [
    { href: "/#inicio",        label: "Início"         },
    { href: "/#servicos",      label: "Serviços"       },
    { href: "/#como-funciona", label: "Como Funciona"  },
    { href: "/#sobre",         label: "Sobre Nós"      },
    { href: "/#testemunhos",   label: "Testemunhos"    },
    { href: "/#parceiros",     label: "Parceiros"      },
    { href: "/contacto",       label: "Contacto"       },
    { href: "/faq",            label: "FAQ"            },
];

const legalLinks = [
    { href: "/termos",                        label: "Termos e Condições",   external: false },
    { href: "/privacidade",                   label: "Política de Privacidade", external: false },
    { href: "https://www.livroreclamacoes.pt", label: "Livro de Reclamações",   external: true  },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="text-white relative overflow-hidden py-14 md:py-20"
            style={{ backgroundColor: "oklch(0.12 0.04 175)" }}
        >
            {/* #1: Circle pattern — static, consistent with all dark sections */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: CIRCLE_PATTERN,
                    backgroundSize:  "80px 80px",
                }}
            />

            {/* Ambient glow — top-right */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full filter blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* #6: 4-column grid — Brand | Nav | Contacts | Legal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

                    {/* ── Col 1: Brand ── */}
                    <div>
                        <div className="mb-5">
                            <Image
                                src="/logo_full.svg"
                                alt="AlenteSeguros"
                                width={180}
                                height={50}
                                className="h-9 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        {/* #3: Warm, human brand tagline */}
                        <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[220px]">
                            Mediação de seguros no coração do Alentejo. Ao seu lado em cada momento.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=61581130140560"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook — Lopes2Tech"
                                className="text-white/40 hover:text-teal-300 transition-colors duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/lopes2tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram — Lopes2Tech"
                                className="text-white/40 hover:text-teal-300 transition-colors duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/lopes2tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn — Lopes2Tech"
                                className="text-white/40 hover:text-teal-300 transition-colors duration-200"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* ── Col 2: Navigation ── */}
                    <div>
                        <h4 className="font-semibold text-white/80 text-xs uppercase tracking-[0.15em] mb-5">
                            Navegação
                        </h4>
                        {/* #2 + #8: Full nav with fixed anchor links */}
                        <nav className="space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-white/55 hover:text-teal-300 transition-colors duration-200 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* ── Col 3: Contacts ── */}
                    <div>
                        <h4 className="font-semibold text-white/80 text-xs uppercase tracking-[0.15em] mb-5">
                            Contactos
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+351241000100"
                                className="flex items-center gap-3 text-white/55 hover:text-teal-300 transition-colors duration-200 text-sm"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                241 000 100
                            </a>
                            <a
                                href="tel:+351930000196"
                                className="flex items-center gap-3 text-white/55 hover:text-teal-300 transition-colors duration-200 text-sm"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                930 000 196
                            </a>
                            <a
                                href="mailto:geral@alenteseguros.pt"
                                className="flex items-center gap-3 text-white/55 hover:text-teal-300 transition-colors duration-200 text-sm"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                geral@alenteseguros.pt
                            </a>
                            <div className="flex items-start gap-3 text-white/55 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>
                                    R. Dr. Eusébio Leão, Nº10<br />
                                    6040-000 Gavião
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Col 4: Legal ── */}
                    {/* #5: Separated from contacts — breathes on its own column */}
                    <div>
                        <h4 className="font-semibold text-white/80 text-xs uppercase tracking-[0.15em] mb-5">
                            Informação Legal
                        </h4>
                        <div className="space-y-3">
                            {legalLinks.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-white/45 hover:text-teal-300 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-white/45 hover:text-teal-300 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* ASF certification note */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/35 text-xs leading-relaxed">
                                Mediador de Seguros registado na ASF.<br />
                                Actividade supervisionada pela Autoridade de Supervisão de Seguros e Fundos de Pensões.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-white/35 text-sm">
                        © {currentYear} AlenteSeguros. Todos os direitos reservados.
                    </p>
                    <p className="text-white/35 text-xs">
                        Desenvolvido por{" "}
                        <a
                            href="https://www.lopes2tech.ch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-300 transition-colors duration-200"
                        >
                            Lopes2Tech
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
}
