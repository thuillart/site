import vercelAdapter from "@sveltejs/adapter-vercel";
import type { Config } from "@sveltejs/kit";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const svelteConfig: Config = {
	kit: {
		adapter: vercelAdapter(),
	},
	preprocess: vitePreprocess(),
};

export default svelteConfig;
