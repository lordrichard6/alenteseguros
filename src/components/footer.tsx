import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#inicio",   label: "Início"    },
    { href: "#servicos", label: "Serviços"  },
    { href: "#sobre",    label: "Sobre Nós" },
    { href: "#contacto", label: "Contacto"  },
  ];

  const legalLinks = [
    { href: "/termos",       label: "Termos e Condições"    },
    { href: "/privacidade",  label: "Política de Privacidade" },
    {
      href:     "https://www.livroreclamacoes.pt",
      label:    "Livro de Reclamações",
      external: true,
    },
  ];

  const contactInfo = [
    { icon: Phone,  value: "241 095 100 · 938 121 196",         href: "tel:+351938121196"                    },
    { icon: Mail,   value: "seguros.ritareis@gmail.com",         href: "mailto:seguros.ritareis@gmail.com"   },
    { icon: MapPin, value: "R. Doutor Eusébio Leão, 89 R/C\n6040-120 Gavião", href: "https://maps.google.com/?q=R.+Doutor+Eusébio+Leão+89+Gavião+Portugal" },
  ];

  return (
    <footer className="relative bg-[#050c18] border-t border-white/[0.06] overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#0ea5a0]/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 md:py-20 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="inline-block mb-5">
              <Image
                src="/logo_full.svg"
                alt="AlenteSeguros"
                width={160}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-[#8a9bae] text-sm leading-relaxed mb-6 max-w-[220px]">
              Mediação de seguros eficiente e confiável, no coração do Alentejo.
            </p>
            <a
              href="https://www.instagram.com/ritmari/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-[#8a9bae] hover:text-[#f0ede8]
                text-sm transition-colors duration-300
              "
            >
              <Instagram className="w-4 h-4" />
              <span>@ritmari</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a9bae] mb-5">
              Navegação
            </h5>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    block text-sm text-[#8a9bae]
                    hover:text-[#f0ede8]
                    transition-colors duration-300
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a9bae] mb-5">
              Contactos
            </h5>
            <div className="space-y-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.value}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="
                      flex items-start gap-3
                      text-[#8a9bae] hover:text-[#f0ede8]
                      text-sm transition-colors duration-300
                    "
                  >
                    <Icon className="w-4 h-4 mt-0.5 shrink-0 text-[#0ea5a0]" />
                    <span className="whitespace-pre-line leading-relaxed">{c.value}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a9bae] mb-5">
              Informação Legal
            </h5>
            <div className="space-y-3">
              {legalLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1.5
                      text-sm text-[#8a9bae]
                      hover:text-[#f0ede8]
                      transition-colors duration-300
                    "
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      block text-sm text-[#8a9bae]
                      hover:text-[#f0ede8]
                      transition-colors duration-300
                    "
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ASF reg note */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[11px] text-[#8a9bae]/60 leading-relaxed">
                Mediadora de seguros registada na ASF. Atividade sujeita a supervisão da Autoridade de Supervisão de Seguros e Fundos de Pensões.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-7">
          <p className="text-[#8a9bae]/60 text-xs">
            © {year} AlenteSeguros — Todos os direitos reservados.
          </p>
          <p className="text-[#8a9bae]/60 text-xs">
            Desenvolvido por{" "}
            <a
              href="https://www.lopes2tech.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ea5a0]/80 hover:text-[#0ea5a0] transition-colors duration-300"
            >
              Lopes2Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
