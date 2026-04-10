"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP = { once: true, margin: "0px 0px -80px 0px" };

const faqs = [
    {
        question: "O que é um mediador de seguros?",
        answer:
            "Um mediador de seguros é um profissional autorizado que actua como intermediário entre o cliente e as seguradoras. Ao contrário de contratar directamente com uma seguradora, o mediador analisa o mercado e apresenta as melhores opções disponíveis para o perfil e necessidades de cada cliente.",
    },
    {
        question: "Qual a diferença entre contratar através de um mediador ou directamente?",
        answer:
            "Ao contratar através de um mediador, beneficia de aconselhamento independente e imparcial, acesso a múltiplas seguradoras e produtos, e apoio personalizado na análise das coberturas. O mediador trabalha para si — não para uma única companhia — garantindo a melhor relação qualidade-preço.",
    },
    {
        question: "Como posso solicitar um seguro?",
        answer:
            "O processo é simples: contacte-nos por telefone, email ou WhatsApp. Analisamos as suas necessidades, apresentamos propostas das nossas seguradoras parceiras e, após a sua escolha, tratamos de todo o processo de contratação sem complicações.",
    },
    {
        question: "Com que seguradoras trabalham?",
        answer:
            "Trabalhamos através dos nossos parceiros HPR e SABSEG, que nos dão acesso a uma vasta rede de seguradoras do mercado português. Isso permite-nos comparar condições e encontrar sempre a solução mais adequada para cada cliente.",
    },
    {
        question: "Os serviços de mediação têm custo para o cliente?",
        answer:
            "Não. Os serviços de mediação não têm qualquer custo directo para o cliente. A remuneração do mediador é feita através de comissões pagas pelas seguradoras, sem qualquer impacto no prémio que paga pelo seu seguro.",
    },
    {
        question: "O que acontece em caso de sinistro?",
        answer:
            "Em caso de sinistro, estamos ao seu lado para apoiar todo o processo de participação e acompanhamento junto da seguradora. O nosso objectivo é garantir que a sua situação seja resolvida da forma mais rápida e justa possível.",
    },
    {
        question: "Prestam serviço fora de Gavião?",
        answer:
            "Embora o nosso escritório esteja em Gavião, prestamos serviço a clientes em toda a região do Alentejo e arredores. Muitas questões podem ser tratadas por telefone, email ou WhatsApp, sem necessidade de deslocação.",
    },
];

function FaqItem({
    question,
    answer,
    index,
}: {
    question: string;
    answer: string;
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
            className={[
                "border rounded-2xl overflow-hidden bg-white transition-all duration-300",
                isOpen
                    ? "border-primary/40 shadow-md"
                    : "border-border/40 hover:border-primary/20",
            ].join(" ")}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-foreground text-sm md:text-base leading-snug pr-2">
                    {question}
                </span>
                <div
                    className={[
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen
                            ? "bg-primary text-white rotate-0"
                            : "bg-muted text-muted-foreground",
                    ].join(" ")}
                >
                    {isOpen ? (
                        <Minus className="w-4 h-4" />
                    ) : (
                        <Plus className="w-4 h-4" />
                    )}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function Faq() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={VP}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="text-center mb-12"
                    >
                        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Dúvidas frequentes
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Esclarecemos as dúvidas mais comuns sobre mediação de seguros.
                            Não encontra a sua resposta?{" "}
                            <a
                                href="#contacto"
                                className="text-primary font-semibold hover:underline underline-offset-4"
                            >
                                Contacte-nos.
                            </a>
                        </p>
                    </motion.div>

                    {/* FAQ accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <FaqItem key={faq.question} {...faq} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
