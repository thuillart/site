import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		a: ({ href, ...props }: LinkProps<Route>) => {
			const isExternal = href.toString().startsWith("http");
			return (
				<Link
					className="inline cursor-pointer align-baseline underline decoration-1 decoration-muted-foreground underline-offset-3 transition-none hover:text-foreground/80"
					href={href}
					target={isExternal ? "_blank" : undefined}
					{...props}
				/>
			);
		},
		h1: ({ className, ...props }: ComponentProps<"h1">) => (
			<h1
				className={cn("font-medium text-xl leading-8 lg:text-2xl", className)}
				{...props}
			/>
		),
		h2: ({ className, ...props }: ComponentProps<"h2">) => (
			<h2
				className={cn(
					"mt-12 mb-2 font-medium text-lg tracking-tight lg:text-xl",
					className,
				)}
				{...props}
			/>
		),
		li: ({ className, ...props }: ComponentProps<"li">) => (
			<li
				className={cn(
					"list-[square] text-lg marker:text-muted-foreground",
					className,
				)}
				{...props}
			/>
		),
		p: ({ className, ...props }: ComponentProps<"p">) => (
			<p className={cn("mt-5 not-last:mb-5 text-lg", className)} {...props} />
		),
		ul: ({ className, ...props }: ComponentProps<"ul">) => (
			<ul className={cn("space-y-1 pl-4", className)} {...props} />
		),
		...components,
	};
}
