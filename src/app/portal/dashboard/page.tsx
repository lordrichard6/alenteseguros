import type { Metadata } from "next";
import { PortalDashboard } from "@/components/portal-dashboard";

export const metadata: Metadata = {
    title: "Painel | AlenteSeguros",
    robots: { index: false, follow: false },
};

export default function DashboardPage() {
    return <PortalDashboard />;
}
