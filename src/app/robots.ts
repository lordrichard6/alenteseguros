import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alenteseguros.vercel.app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: ["/portal/", "/portal/dashboard/"] },
        ],
        sitemap: `${BASE}/sitemap.xml`,
    };
}
