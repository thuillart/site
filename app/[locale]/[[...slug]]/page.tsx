import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/site";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page({
	params,
}: PageProps<"/[locale]/[[...slug]]">) {
	const { locale, slug } = await params;
	const page = source.getPage(slug, locale);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<Site>
			<Site.Container>
				<Site.Content className="lg:pt-32">
					<MDX components={getMDXComponents()} />
				</Site.Content>
			</Site.Container>
		</Site>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata({
	params,
}: PageProps<"/[locale]/[[...slug]]">): Promise<Metadata> {
	const { slug } = await params;
	const page = source.getPage(slug);
	if (!page) notFound();

	return {
		description: page.data.description,
		title: page.data.title,
	};
}
