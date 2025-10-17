"use client";

import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import {
	BlueskyIcon,
	ThreadsIcon,
	XIcon,
	YouTubeIcon,
} from "@/components/ui/icons";
import { Tab, TabList, Tabs } from "@/components/ui/tabs";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function BlogHeaderTabs() {
	const t = useTranslations("BlogHeaderTabs");

	const tabs = [
		{
			href: "/",
			id: 1,
			label: t("about"),
		},
		{
			href: "/blog",
			id: 2,
			label: t("blog"),
		},
	];

	const links = [
		{
			href: "https://www.youtube.com/@armand.thuillart",
			id: 1,
			Logo: YouTubeIcon,
			label: t("youtube"),
		},
		{
			href: "https://bsky.app/profile/armand-thuillart.com",
			id: 2,
			Logo: BlueskyIcon,
			label: t("bluesky"),
		},
		{
			href: "https://www.threads.com/@armand.thuillart",
			id: 3,
			Logo: ThreadsIcon,
			label: t("threads"),
		},
		{
			href: "https://x.com/armandthuillart",
			id: 4,
			Logo: XIcon,
			label: t("x"),
		},
	];

	return (
		<div className="flex max-w-sm justify-between">
			<Tabs>
				<TabList className="-ms-3">
					{tabs.map(({ id, href, label }) => (
						<Tab href={href} key={id}>
							{label}
						</Tab>
					))}
				</TabList>
			</Tabs>

			<div className="-me-2 flex">
				{links.map(({ id, href, label, Logo }) => (
					<Link
						className={cn(
							buttonVariants({ size: "icon-sm", variant: "ghost" }),
							"rounded-full",
						)}
						href={href}
						key={id}
					>
						<Logo className="size-4" />
						<span className="sr-only">{label}</span>
					</Link>
				))}
			</div>
		</div>
	);
}
