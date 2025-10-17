"use client";

import { useTranslations } from "next-intl";
import { BlogHeaderTabs } from "@/components/blog.header-tabs";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
// import portrait from "@/public/portrait.jpg";

export function BlogHeader({ isCollapsed }: { isCollapsed: boolean }) {
	const t = useTranslations("BlogHeader");

	return (
		<div className="flex gap-4">
			<Avatar
				className={cn(!isCollapsed && "size-32")}
				render={(props) => <Link href="/" {...props} />}
			>
				{/* <AvatarImage
					alt={t("alt")}
					height={portrait.height}
					loading="eager"
					src={portrait.src}
					width={portrait.width}
				/> */}
				<div className="size-full bg-muted" />
			</Avatar>

			<div className="flex flex-col gap-4">
				<Link
					className={cn(
						"font-medium",
						!isCollapsed ? "text-3xl" : "self-center text-xl",
					)}
					href="/"
				>
					{t("firstName")}
				</Link>

				{!isCollapsed && <p>{t("description")}</p>}

				<BlogHeaderTabs />
			</div>
		</div>
	);
}
