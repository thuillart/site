import { createMDX } from "fumadocs-mdx/next";
import createI18n from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { turbopackFileSystemCacheForDev: true },
	poweredByHeader: false,
	reactStrictMode: true,
	typedRoutes: true,
};

const withMDX = createMDX();

const withI18n = createI18n({
	experimental: {
		extract: {
			sourceLocale: "en",
		},
		messages: {
			format: "json",
			locales: "infer",
			path: "./messages",
		},
		srcPath: ".",
	},
});

export default withI18n(withMDX(nextConfig));
