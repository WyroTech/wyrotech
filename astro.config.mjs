import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";
import icon from "astro-icon";
import vercel from '@astrojs/vercel';
// @ts-check
import {defineConfig} from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://wyro.tech",
	vite: {
		plugins: [tailwindcss()],
	},
	output: 'server',
	adapter: vercel({
		edgeMiddleware: true,
		imageService: true,
		webAnalytics: {
			enabled: true,
		}
	}),
	integrations: [react(), icon(), sitemap(), compressor()],
});
