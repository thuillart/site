import { docs } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/lib/source.i18n";

export const source = loader({
	baseUrl: "/docs",
	i18n,
	source: docs.toFumadocsSource(),
});
