import { BlogHeader } from "@/components/blog.header";

export default async function PostsLayout({
	children,
}: LayoutProps<"/[locale]">) {
	return (
		<div className="flex flex-col gap-12 py-12">
			<BlogHeader isCollapsed={false} />
			{children}
		</div>
	);
}
