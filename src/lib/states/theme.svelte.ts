import { MediaQuery } from "svelte/reactivity";
import { Persisted } from "$lib/states/persisted.svelte";

type ColorScheme = "light" | "dark";
type Mode = ColorScheme | "system";

class Theme {
	#preference = new Persisted<Mode>("ws:theme", "system");

	#query = new MediaQuery("prefers-color-scheme: dark");
	#system = $derived<ColorScheme>(this.#query.current ? "dark" : "light");

	get current() {
		return this.#preference.current === "system"
			? this.#system
			: this.#preference.current;
	}

	set current(value: ColorScheme) {
		this.#preference.current = value === this.#system ? "system" : value;
	}
}

export const theme = new Theme();
