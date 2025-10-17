import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import createI18n from "next-intl/plugin";

const nextConfig: NextConfig = {
	reactCompiler: true,
	typedRoutes: true,
};

const withI18n = createI18n();
const withMDX = createMDX();

export default withI18n(withMDX(nextConfig));
