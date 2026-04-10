"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const VP   = { once: true, margin: "0px 0px -80px 0px" };

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
    {
        question: "Posso transferir o meu seguro actual para a AlenteSeguros?",
        answer:
            "Sim. A transferência é simples e sem complicações. Basta contactar-nos com os dados do seu seguro actual — analisamos as condições vigentes, comparamos com as melhores alternativas do mercado e, se encontrarmos uma solução mais vantajosa, tratamos de todo o processo de transferência, incluindo o cancelamento do contrato anterior.",
    },
    {
        question: "Como devo proceder imediatamente após um sinistro?",
        answer:
            "Em primeiro lugar, garanta a segurança de todos os envolvidos e, se necessário, contacte as autoridades. De seguida, recolha o máximo de informação possível — fotografias, dados dos intervenientes e testemunhas. Depois, contacte-nos directamente: orientamos o processo de participação junto da seguradora e acompanhamos o sinistro até à sua resolução.",
    },
    {
        question: "Quanto tempo demora a obter uma proposta?",
        answer:
            "Na maioria dos casos, conseguimos apresentar propostas em menos de 24 horas após receber os dados necessários. Para seguros mais complexos — como seguros de vida com capitais elevados ou frota automóvel — o prazo pode ser ligeiramente superior, mas mantemo-lo sempre informado sobre o estado da análise.",
    },
    {
        question: "Como funciona a renovação do seguro?",
        answer:
            "Acompanhamos activamente as datas de renovação dos contratos dos nossos clientes. Antes de cada renovação, reavaliamos as condições do mercado e verificamos se existem soluções mais competitivas. Se sim, apresentamos-lhas com antecedência suficiente para decidir com calma. O objectivo é garantir que nunca paga mais do que o necessário.",
    },
    {
        question: "É necessário reunir presencialmente para contratar?",
        answer:
            "Não é obrigatório. A grande maioria dos processos pode ser concluída à distância — por telefone, email ou WhatsApp. Para quem prefira um atendimento presencial, recebemos no nosso escritório em Gavião com marcação prévia. Adaptamo-nos à preferência e disponibilidade de cada cliente.",
    },
    {
        question: "A AlenteSeguros está registada na autoridade competente?",
        answer:
            "Sim. A AlenteSeguros actua em conformidade com a legislação portuguesa em vigor e opera através dos nossos parceiros HPR e SABSEG, devidamente registados junto da Autoridade de Supervisão de Seguros e Fundos de Pensões (ASF). Pode consultar o registo de mediadores no portal oficial da ASF.",
    },
];

function FaqItem({
    question,
    answer,
    index,
}: {
    question: string;
    answer:   string;
    index:    number;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = `faq-answer-${index}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
            className={[
                "border rounded-2xl overflow-hidden bg-white transition-all duration-300",
                isOpen
                    ? "border-primary/40 shadow-md shadow-primary/[0.06]"
                    : "border-border/40 hover:border-primary/20",
            ].join(" ")}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
                {/* Numeral + question */}
                <div className="flex items-baseline gap-4 min-w-0">
                    <span
                        aria-hidden="true"
                        className="text-[11px] font-bold tracking-wider text-foreground/20 shrink-0 tabular-nums"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                        {question}
                    </span>
                </div>

                {/* Rotating chevron */}
                <div
                    className={[
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                        isOpen
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground",
                    ].join(" ")}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        key="content"
                        role="region"
                        aria-label={question}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed pl-[calc(1.5rem+2.25rem)]">
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
        <section className="py-20 md:py-28 bg-surface overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
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
