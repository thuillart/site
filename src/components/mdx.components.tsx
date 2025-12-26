import { Image } from "@unpic/react";
import { DynamicLink, type DynamicLinkProps } from "fumadocs-core/dynamic-link";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		a: ({ href, ...props }: DynamicLinkProps) => {
			const isExternal = href?.toString().startsWith("http");
			const finalTarget = isExternal ? "_blank" : undefined;
			return (
				<DynamicLink
					className="inline cursor-pointer align-baseline underline decoration-1 decoration-muted-foreground underline-offset-3 transition-none hover:text-foreground/80"
					href={href}
					target={finalTarget}
					{...props}
				/>
			);
		},
		em: ({ className, ...props }: ComponentProps<"em">) => (
			<em className={cn("font-medium", className)} {...props} />
		),
		Gallery,
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
		iframe: ({ className, ...props }: ComponentProps<"iframe">) => (
			<iframe className={cn("aspect-video rounded-md", className)} {...props} />
		),
		img: ({ className, ...props }: ComponentProps<"img">) => (
			<Image
				className={cn("rounded-md object-cover", className)}
				layout="fullWidth"
				src={props.src ?? ""}
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
		Reveal,
		ul: ({ className, ...props }: ComponentProps<"ul">) => (
			<ul className={cn("space-y-1 pl-4", className)} {...props} />
		),
		...components,
	};
}
