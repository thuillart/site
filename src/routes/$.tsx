import browserCollections from "fumadocs-mdx:collections/browser";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getMDXComponents } from "@/components/mdx-components";
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
	const data = Route.useLoaderData();
	const Comp = preloader.getComponent(data.path);

	return (
		<div className="px-8">
			<div className="mx-auto max-w-xl">
				<div className="py-16 lg:pt-32">
					<Comp />
				</div>
			</div>
		</div>
	);
}
