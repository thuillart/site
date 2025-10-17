"use client";

import { Avatar as Primitive } from "@base-ui-components/react/avatar";
import Image, { type ImageProps } from "next/image";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Avatar({
	className,
	...props
}: ComponentProps<typeof Primitive.Root>) {
	return (
		<Primitive.Root
			className={cn(
				"relative flex size-8 shrink-0 overflow-hidden rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarImage({
	className,
	...props
}: ComponentProps<typeof Primitive.Image>) {
	return (
		<Primitive.Image
			className={cn("aspect-square size-full", className)}
			render={<Image {...(props as ImageProps)} />}
			{...props}
		/>
	);
}

export { Avatar, AvatarImage };
