import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";
import type { ReactNode } from "react";
import { Providers } from "@/app/providers";
import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	description: "",
	title: "Armand Thuillart",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html className="h-full" lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"mx-auto max-w-screen-sm antialiased h-full bg-background text-foreground",
					inter.className,
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
