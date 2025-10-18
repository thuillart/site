"use client";

import { useTranslations } from "next-intl";
import { BlogHeaderTabs } from "@/components/blog.header-tabs";
import { Avatar } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
// import portrait from "@/public/portrait.jpg";

export function BlogHeader({ isCollapsed }: { isCollapsed: boolean }) {
	const t = useTranslations("BlogHeader");

	return (
		<div className="flex flex-col gap-4 sm:flex-row">
			<Avatar
				className={cn(
					!isCollapsed &&
						"size-28 rounded-full border border-border bg-muted sm:size-32",
				)}
				render={(props) => <Link href="/" {...props} />}
			>
				{/* <AvatarImage
					alt={t("alt")}
					height={portrait.height}
					loading="eager"
					src={portrait.src}
					width={portrait.width}
				/> */}
			</Avatar>

			<div className="flex w-full flex-col gap-4">
				<Link
					className={cn(
						"font-medium",
						!isCollapsed ? "text-3xl" : "self-center text-xl",
					)}
					href="/"
				>
					{t("firstName")}
				</Link>

				{!isCollapsed && (
					<p>
						{t.rich("description", {
							link: (chunks) => (
								<Link
									className={buttonVariants({ variant: "link" })}
									href="https://www.try-crosspost.com"
									target="_blank"
								>
									{chunks}
									<ArrowUpRightIcon className="mb-1 inline size-3" />
								</Link>
							),
						})}
					</p>
				)}

				<BlogHeaderTabs />
			</div>
		</div>
	);
}
