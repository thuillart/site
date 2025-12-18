import browserCollections from "fumadocs-mdx:collections/browser";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getMDXComponents } from "@/components/mdx.components";
import { Site } from "@/components/site";
import { source } from "@/lib/source";

export const Route = createFileRoute("/$")({
	component: Page,
	loader: async ({ params }) => {
		const data = await loader({
			data: {
				slugs: params._splat?.split("/") ?? [],
			},
		});

		await preloader.preload(data.path);
		return data;
	},
});

const loader = createServerFn({
	method: "GET",
})
	.inputValidator((params: { slugs: string[] }) => params)
	.handler(async ({ data: { slugs } }) => {
		const page = source.getPage(slugs);
		if (!page) throw notFound();

		return {
			icon: page.data.icon,
			path: page.path,
			tree: source.getPageTree() as object,
		};
	});

const preloader = browserCollections.docs.createClientLoader({
	component({ default: MDX }) {
		return <MDX components={getMDXComponents()} />;
	},
});

function Page() {
	const { path } = Route.useLoaderData();
	const MDX = preloader.getComponent(path);
	return (
		<Site>
			<Site.Container>
				<Site.Content className="lg:pt-32">
					<MDX />
				</Site.Content>
			</Site.Container>
		</Site>
	);
}
