import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="text-white py-14 md:py-20"
            style={{ backgroundColor: "oklch(0.12 0.04 175)" }}
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <Image
                                src="/logo_full.svg"
                                alt="AlenteSeguros"
                                width={180}
                                height={50}
                                className="h-9 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-[220px]">
                            Eficiente e Confiável, Mediação de Seguros, Lda.
                        </p>
                        <a
                            href="https://www.instagram.com/ritmari/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/55 hover:text-primary transition-colors duration-200 text-sm"
                        >
                            <Instagram className="w-4 h-4" />
                            <span>@ritmari</span>
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Navegação
                        </h4>
                        <nav className="space-y-3">
                            {[
                                { href: "#inicio", label: "Início" },
                                { href: "#servicos", label: "Serviços" },
                                { href: "#sobre", label: "Sobre Nós" },
                                { href: "#contacto", label: "Contacto" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact + Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
                            Contactos
                        </h4>
                        <div className="space-y-3.5">
                            <a
                                href="tel:+351938121196"
                                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                241 095 100 | 938 121 196
                            </a>
                            <a
                                href="mailto:seguros.ritareis@gmail.com"
                                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                seguros.ritareis@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>
                                    R. Doutor Eusébio Leão, Nº89 R/C<br />
                                    6040-120 Gavião
                                </span>
                            </div>
                        </div>

                        {/* Legal links */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <h4 className="font-semibold text-white/80 text-xs uppercase tracking-wider mb-3">
                                Informação Legal
                            </h4>
                            <div className="flex flex-col space-y-2">
                                <Link
                                    href="/termos"
                                    className="text-white/45 hover:text-primary transition-colors duration-200 text-xs"
                                >
                                    Termos e Condições
                                </Link>
                                <Link
                                    href="/privacidade"
                                    className="text-white/45 hover:text-primary transition-colors duration-200 text-xs"
                                >
                                    Política de Privacidade
                                </Link>
                                <a
                                    href="https://www.livroreclamacoes.pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/45 hover:text-primary transition-colors duration-200 text-xs"
                                >
                                    Livro de Reclamações
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} AlenteSeguros. Todos os direitos reservados.
                    </p>
                    <p className="text-white/40 text-xs">
                        Desenvolvido por{" "}
                        <a
                            href="https://www.lopes2tech.ch/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            Lopes2Tech
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
