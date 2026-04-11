export default function ShowcaseDisclaimer() {
    return (
        <div
            role="note"
            aria-label="Aviso de projeto de demonstração"
            className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 mb-8"
        >
            <span className="shrink-0 mt-0.5 text-base">⚠️</span>
            <p className="text-[0.8rem] leading-relaxed text-amber-900">
                <strong className="block font-semibold text-amber-950 mb-0.5">
                    Projeto de Demonstração — Demo Project
                </strong>
                Este website é um projeto de showcase criado pela{" "}
                <a
                    href="https://lopes2tech.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 hover:text-amber-700 transition-colors"
                >
                    Lopes2Tech
                </a>
                {" "}para fins de portfólio. Os dados de contacto são fictícios e nenhuma informação submetida é processada.{" "}
                <em>This is a portfolio project. Contact details are fictional and no submitted data is processed.</em>
            </p>
        </div>
    );
}
