import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vercel from '@astrojs/vercel';
import compress from "astro-compress";
// @ts-check
import {defineConfig} from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: "https://wyro.tech",
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'server',
    adapter: vercel({
        edgeMiddleware: true,
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [react(), icon(), sitemap(), compress(), robotsTxt()],
});