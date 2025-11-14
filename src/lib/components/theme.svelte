<script lang="ts">
	import { theme } from "$lib/states/theme.svelte";

	function toggle() {
		theme.current = theme.current === "light" ? "dark" : "light";
	}

	$effect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme.current);
	});
</script>

<svelte:head>
	<script>
		{
			const theme = localStorage.getItem("ws:theme");

			document.documentElement.classList.add(
				!theme || theme === "system"
					? window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light"
					: theme,
			);
		}
	</script>
</svelte:head>
