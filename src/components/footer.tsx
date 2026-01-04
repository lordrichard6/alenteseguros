import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo_full.svg"
                                alt="AlenteSeguros"
                                width={180}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                            Eficiente e Confiável, Mediação de Seguros, Lda.
                        </p>
                        <a
                            href="https://www.instagram.com/ritmari/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="text-sm">@ritmari</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Navegação</h4>
                        <nav className="space-y-2">
                            {[
                                { href: "#inicio", label: "Início" },
                                { href: "#servicos", label: "Serviços" },
                                { href: "#sobre", label: "Sobre Nós" },
                                { href: "#contacto", label: "Contacto" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block text-white/70 hover:text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contactos</h4>
                        <div className="space-y-3">
                            <a
                                href="tel:+351938121196"
                                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                241 095 100 | 938 121 196
                            </a>
                            <a
                                href="mailto:seguros.ritareis@gmail.com"
                                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                seguros.ritareis@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-white/70 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                                <span>R. Doutor Eusébio Leão, Nº89 R/C<br />6040-120 Gavião</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {currentYear} AlenteSeguros. Todos os direitos reservados.
                    </p>
                    <p className="text-white/50 text-xs">
                        Desenvolvido por{" "}
                        <a
                            href="https://lopes2.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Lopes2Tech
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
