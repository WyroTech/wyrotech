import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-check
import {defineConfig} from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://wyro.tech",
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react(), icon(), sitemap()],
});
