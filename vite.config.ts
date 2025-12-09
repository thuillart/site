import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as MdxConfig from "./source.config";
import { i18n } from "./src/lib/i18n";

export default defineConfig({
	plugins: [
		mdx(MdxConfig),
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
				enabled: true,
			},
		}),
		nitro(),
		viteReact(),
	],
	server: {
		port: 3000,
	},
});
