"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { href: "#inicio",   label: "Início"    },
  { href: "#servicos", label: "Serviços"  },
  { href: "#sobre",    label: "Sobre"     },
  { href: "#contacto", label: "Contacto"  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on anchor click
  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled
          ? "bg-[#080f1e]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-18 md:h-20 py-4">

          {/* Logo */}
          <a href="#inicio" className="flex items-center shrink-0">
            <Image
              src="/logo_full.svg"
              alt="AlenteSeguros"
              width={180}
              height={44}
              className="h-9 md:h-10 w-auto object-contain brightness-0 invert"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative text-sm font-medium text-[#8a9bae]
                  hover:text-[#f0ede8] transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-0.5
                  after:h-px after:bg-[#0ea5a0]
                  after:w-0 hover:after:w-full
                  after:transition-[width] after:duration-300 after:ease-out
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Portal CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/portal"
              className="
                group inline-flex items-center gap-2
                px-5 py-2.5 rounded-full
                border border-[#0ea5a0]/40 text-[#0ea5a0]
                text-sm font-semibold
                hover:bg-[#0ea5a0] hover:text-white hover:border-[#0ea5a0]
                transition-all duration-300
              "
            >
              <User className="w-4 h-4" />
              Portal de Cliente
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#f0ede8]"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0      }}
            transition={{ duration: 0.35, ease: EASE }}
            className="md:hidden bg-[#0d1829]/98 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
          >
            <nav className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: EASE }}
                  className="text-[#f0ede8] font-medium py-2 border-b border-white/[0.05] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.35, ease: EASE }}
                className="pt-2"
              >
                <Link
                  href="/portal"
                  onClick={handleNavClick}
                  className="
                    flex items-center justify-center gap-2
                    w-full px-5 py-3 rounded-full
                    border border-[#0ea5a0] text-[#0ea5a0]
                    font-semibold text-sm
                    hover:bg-[#0ea5a0] hover:text-white
                    transition-all duration-300
                  "
                >
                  <User className="w-4 h-4" />
                  Portal de Cliente
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
