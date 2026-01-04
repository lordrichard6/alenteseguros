import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacidadePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>

                    <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                        <p className="text-lg text-foreground">
                            A AlenteSeguros respeita a sua privacidade e compromete-se a proteger os seus dados pessoais,
                            em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD).
                        </p>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">1. Responsável pelo Tratamento</h2>
                            <p>
                                A entidade responsável pelo tratamento dos seus dados é a <strong>AlenteSeguros - Mediação de Seguros, Lda.</strong>.
                                Qualquer questão relacionada com a proteção de dados deve ser endereçada para:
                                <a href="mailto:seguros.ritareis@gmail.com" className="text-primary hover:underline ml-1">seguros.ritareis@gmail.com</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">2. Dados Recolhidos e Finalidade</h2>
                            <p>
                                Recolhemos apenas os dados estritamente necessários para:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Apresentação de propostas e simulações de seguros;</li>
                                <li>Celebração e gestão de contratos de seguro;</li>
                                <li>Gestão de sinistros;</li>
                                <li>Cumprimento de obrigações legais perante a ASF e Seguradoras.</li>
                            </ul>
                            <p className="mt-2">
                                Os dados recolhidos podem incluir: nome, contactos, dados de identificação civil e fiscal, e dados do objeto do seguro (ex: matrícula, imóvel).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">3. Partilha de Dados</h2>
                            <p>
                                Para a finalidade de mediação de seguros, os seus dados poderão ser transmitidos às Companhias de Seguros com as quais trabalhamos (ex: HPR, SABSEG, etc.),
                                estritamente para efeitos de cotação e contratualização de apólices, bem como a entidades reguladoras quando legalmente exigido.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">4. Prazo de Conservação</h2>
                            <p>
                                Os dados pessoais serão conservados enquanto vigorar a relação contratual e, após o seu termo, pelo período legalmente exigido para cumprimento de obrigações fiscais e regulatórias.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">5. Direitos dos Titulares</h2>
                            <p>
                                Nos termos do RGPD, tem o direito de solicitar a qualquer momento:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>O acesso aos seus dados pessoais;</li>
                                <li>A retificação de dados inexatos ou incompletos;</li>
                                <li>O apagamento dos dados ("direito ao esquecimento"), quando aplicável;</li>
                                <li>A limitação ou oposição ao tratamento.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">6. Cookies</h2>
                            <p>
                                Este website utiliza cookies essenciais para garantir o seu correto funcionamento e melhorar a experiência de navegação.
                                Não utilizamos cookies para fins publicitários ou de rastreamento invasivo.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
