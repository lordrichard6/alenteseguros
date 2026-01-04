import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermosPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos e Condições</h1>

                    <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">1. Identificação da Entidade</h2>
                            <p>
                                O presente website é propriedade da <strong>AlenteSeguros - Mediação de Seguros, Lda.</strong>,
                                com sede na R. Doutor Eusébio Leão, Nº89 R/C, 6040-120 Gavião, Portugal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">2. Objeto e Âmbito</h2>
                            <p>
                                Estes Termos e Condições regulam o acesso e utilização do website da AlenteSeguros.
                                Ao navegar neste site, o utilizador concorda com as presentes condições.
                                A AlenteSeguros reserva-se o direito de alterar estes termos a qualquer momento, sem aviso prévio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">3. Serviços Prestados</h2>
                            <p>
                                A AlenteSeguros atua como mediadora de seguros, devidamente autorizada pela ASF (Autoridade de Supervisão de Seguros e Fundos de Pensões).
                                As informações disponibilizadas neste site têm caráter meramente informativo e não dispensam a consulta da informação pré-contratual e contratual legalmente exigida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">4. Propriedade Intelectual</h2>
                            <p>
                                Todos os conteúdos deste site (textos, imagens, logótipos e design) são propriedade da AlenteSeguros ou de terceiros que autorizaram a sua utilização,
                                estando protegidos pela legislação sobre Direitos de Autor e Propriedade Industrial.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
                            <p>
                                A AlenteSeguros envida todos os esforços para garantir a atualidade e rigor da informação, mas não se responsabiliza por eventuais erros,
                                omissões ou danos resultantes da utilização da informação contida neste site.
                                As simulações efetuadas no site são meramente indicativas e sujeitas a confirmação.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">6. Lei Aplicável e Foro</h2>
                            <p>
                                Às presentes condições é aplicável a lei portuguesa. Para qualquer litígio emergente da utilização deste site,
                                será competente o Tribunal da Comarca onde se situa a sede da AlenteSeguros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">7. Contactos</h2>
                            <p>
                                Para qualquer esclarecimento sobre estes termos, contacte-nos através do email:
                                <a href="mailto:seguros.ritareis@gmail.com" className="text-primary hover:underline ml-1">seguros.ritareis@gmail.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
