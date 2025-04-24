import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
// @ts-check
import {defineConfig} from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://wyro.tech",
	vite: {
		plugins: [tailwindcss()],
	},
	output: "server",
	adapter: vercel({
		edgeMiddleware: true,
		webAnalytics: {
			enabled: true,
		},
		isr: true,
	}),
	integrations: [react(), icon(), sitemap(), compress(), robotsTxt()],
});
