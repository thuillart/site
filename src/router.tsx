import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { Default } from "@/components/default";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	return createTanStackRouter({
		defaultNotFoundComponent: Default.NotFound,
		defaultPreload: "intent",
		routeTree,
		scrollRestoration: true,
	});
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
