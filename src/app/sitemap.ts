import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alenteseguros.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    return [
        { url: `${BASE}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
        { url: `${BASE}/contacto`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/faq`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/privacidade`, lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
        { url: `${BASE}/termos`,      lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    ];
}
