<script lang="ts">
	import { onMount } from "svelte";
	import DarkMode from "$lib/stores/darkMode";
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";

	onMount(() => {
		DarkMode.initialize();
	});
</script>

<svelte:head>
	<title>Kirándulás</title>
	<style>
		.dark ::-webkit-scrollbar-track {
			background: #1f2937;
		}
		.dark ::-webkit-scrollbar-thumb {
			background: #374151;
			border-radius: 1rem;
		}
		.dark ::-webkit-scrollbar-thumb:hover {
			background: #4b5563;
		}
		::-webkit-scrollbar {
			width: 10px;
		}
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}
		::-webkit-scrollbar-thumb {
			background: #d1d5db;
			border-radius: 1rem;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #9ca3af;
		}
	</style>
</svelte:head>

<main
	id="main"
	style='padding-bottom: 28rem; font-family: "Source Sans Pro", sans-serif;'
	class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-opacity-75 dark:text-opacity-80 transition-colors duration-150 ease-out relative min-h-screen font-light"
>
	<Nav />

	<slot />

	<Footer>
		<h1 class="uppercase font-bold text-2xl m-auto max-w-max mb-6">Szent László Gimnázium</h1>
		<div class="w-1/2 flex flex-wrap justify-evenly items-center m-auto text-center max-w-screen-xl">
			<div style="min-width: 150px;" class="m-4 text-lg">
				A forráskód nyilvánosan elérhető <a
					class="underline"
					rel="external"
					target="_blank"
					href="https://github.com/Zsongli/kirandulas-blog">Github</a
				>-on.
			</div>
			<div style="min-width: 150px;" class="m-4 text-lg">
				A webakalmazást a <a
					class="underline"
					rel="external"
					target="_blank"
					href="https://kit.svelte.dev/">SvelteKit</a
				> keretrendszer működteti.
			</div>
			<!-- svelte-ignore missing-declaration -->
			<div style="min-width: 150px;"
				class="m-4 italic"
				on:click={() => {
					const audio = new Audio("/nothing.mp3");
					audio.playbackRate = 1.7;
					audio.play();
				}}
			>
				A blogot készítette Horváth Ági és Mélykúti Ádám.
			</div>
		</div>
	</Footer>
</main>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
