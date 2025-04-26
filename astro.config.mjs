import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

// @astrojs/image has been replaced with @astrojs/image-integration
import {defineConfig} from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	site: "https://wyro.tech",
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: true,
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: true, // Remove console.logs in production
				},
			},
		},
		ssr: {
			noExternal: [], // Add packages that need bundling
		},
	},
	output: "server",
	build: {
		inlineStylesheets: "auto", // Inline small stylesheets for performance
	},
	compressHTML: true, // Minify HTML output
	adapter: netlify(),
	integrations: [
		react(),
		icon(),
		sitemap(),
		compress({
			css: true,
			html: true,
			img: true,
			js: true,
			svg: true,
			logger: 1, // 0 = disabled, 1 = basic, 2 = verbose
		}),
		robotsTxt(),
		prefetch(),
		// Security headers can be added through vercel.json instead
	],
});
