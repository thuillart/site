"use client";

import { Tabs as Primitive } from "@base-ui-components/react/tabs";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: ComponentProps<typeof Primitive.Root>) {
	return (
		<Primitive.Root
			className={cn("flex flex-col gap-2", className)}
			{...props}
		/>
	);
}

function TabList({
	className,
	children,
	...props
}: ComponentProps<typeof Primitive.List>) {
	return (
		<Primitive.List
			className={cn(
				"relative inline-flex h-8 w-fit items-center justify-center text-muted-foreground",
				className,
			)}
			{...props}
		>
			{children}
			<Primitive.Indicator className="-translate-y-1/2 -z-1 absolute top-1/2 left-0 h-8 w-(--active-tab-width) translate-x-(--active-tab-left) rounded-full bg-muted transition-transform ease-anticipate" />
		</Primitive.List>
	);
}

function Tab({
	className,
	href,
	...props
}: ComponentProps<typeof Primitive.Tab> & ComponentProps<typeof Link>) {
	return (
		<Primitive.Tab
			className={cn(
				"flex h-8 items-center px-3 font-medium text-foreground text-sm",
				className,
			)}
			nativeButton={false}
			render={<Link href={href} {...props} />}
			{...props}
		/>
	);
}

function TabPanel({
	className,
	...props
}: ComponentProps<typeof Primitive.Panel>) {
	return (
		<Primitive.Panel
			className={cn("flex-1 outline-none", className)}
			{...props}
		/>
	);
}

export { Tab, Tabs, TabList, TabPanel };
