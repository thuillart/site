import "@/app/globals.css";
import { STIX_Two_Text } from "next/font/google";
import type { ReactNode } from "react";
import { ThemesProvider } from "@/components/provider.theme";
import { cn } from "@/lib/utils";

const myFont = STIX_Two_Text({
	weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className="h-full" lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"relative h-full bg-background text-foreground antialiased",
					myFont.className,
				)}
			>
				<ThemesProvider>{children}</ThemesProvider>
			</body>
		</html>
	);
}
