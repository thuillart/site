import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { i18n } from "./src/lib/i18n";

export default defineConfig({
	plugins: [
		mdx(await import("./source.config")),
		tailwindcss(),
		tsconfigPaths(),
		tanstackStart({
			pages: [
				...i18n.languages.map((lang) => ({
					path: `/${lang}`,
				})),
				{
					path: "/",
					prerender: { enabled: false },
				},
			],
			prerender: {
				enabled: false,
			},
			sitemap: {
				host: "https://armand-thuillart.com",
			},
		}),
		nitro({
			preset: "bun",
		}),
		react(),
	],
	server: {
		port: 3000,
	},
});
