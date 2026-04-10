import type { Metadata } from "next";
import { PortalLogin } from "@/components/portal-login";

export const metadata: Metadata = {
    title: "Portal do Cliente | AlenteSeguros",
    description:
        "Aceda à sua área reservada para gerir as suas apólices, acompanhar sinistros e consultar documentos.",
    alternates: {
        canonical: "https://alenteseguros.pt/portal",
    },
    robots: { index: false, follow: false },
};

export default function PortalPage() {
    return <PortalLogin />;
}
