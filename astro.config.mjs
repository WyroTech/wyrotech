import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
// @astrojs/image has been replaced with @astrojs/image-integration
import {defineConfig} from "astro/config";

import preact from "@astrojs/preact";

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
	adapter: vercel({
		edgeMiddleware: true,
		webAnalytics: {
			enabled: true,
		},
		isr: {
			// Add expiration times for ISR
			expiration: 60 * 60, // Cache pages for 1 hour
		},
		// Add caching headers for static assets
		assets: {
			maxAge: 60 * 60 * 24 * 30, // Cache assets for 30 days
		},
	}),
	integrations: [
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
		robotsTxt(), // Security headers can be added through vercel.json instead
		prefetch(),
		preact(),
	],
});
