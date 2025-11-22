import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { turbopackFileSystemCacheForDev: true },
	poweredByHeader: false,
	reactStrictMode: true,
	typedRoutes: true,
};

const withMDX = createMDX();

export default withMDX(nextConfig);
