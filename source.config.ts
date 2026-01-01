import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import type { Element, Text } from "hast";

export const docs = defineDocs({
	dir: "content/docs",
});

export default defineConfig({
	mdxOptions: {
		remarkRehypeOptions: {
			footnoteBackContent(
				_: number,
				rereferenceIndex: number,
			): Array<Element | Text> {
				const result: Array<Element | Text> = [
					{
						children: [
							{
								children: [],
								properties: { d: "M7.49023 12L3.74023 15.75M3.74023 15.75L7.49023 19.5M3.74023 15.75H20.2402V4.49902" },
								tagName: "path",
								type: "element",
							},
						],
						properties: {
							ariaHidden: "true",
							className: ["size-4 inline-block -translate-y-0.5 hover:opacity-80"],
							fill: "none",
							height: 24,
							stroke: "currentColor",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 1.5,
							viewBox: "0 0 24 24",
							width: 24,
							xmlns: "http://www.w3.org/2000/svg",
						},
						tagName: "svg",
						type: "element",
					},
				];

				if (rereferenceIndex > 1) {
					result.push({
						children: [
							{
								type: "text",
								value: String(rereferenceIndex),
							},
						],
						properties: {},
						tagName: "sup",
						type: "element",
					});
				}

				return result;
			},
			footnoteLabelProperties: {
				className: "sr-only",
			},
			footnoteLabelTagName: "h5",
		},
	},
});
