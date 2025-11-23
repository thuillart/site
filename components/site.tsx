import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function SiteLayout({ children, className, ...props }: ComponentProps<"div">) {
	return (
		<div className={cn("h-full px-8", className)} {...props}>
			{children}
		</div>
	);
}

function SiteContainer({
	children,
	className,
	...props
}: ComponentProps<"div">) {
	return (
		<div className={cn("mx-auto h-full max-w-xl", className)} {...props}>
			{children}
		</div>
	);
}

function SiteContent({ children, className, ...props }: ComponentProps<"div">) {
	return (
		<div className={cn("h-full py-16", className)} {...props}>
			{children}
		</div>
	);
}

export const Site = Object.assign(SiteLayout, {
	Container: SiteContainer,
	Content: SiteContent,
});
