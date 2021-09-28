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
</svelte:head>

<main
	id="main"
	class="bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-opacity-75 dark:text-opacity-80 transition-colors duration-150 ease-out"
>
	<Nav />

	<slot />

	<Footer>
		<h1 class="uppercase font-bold text-2xl m-auto max-w-max mb-6">Szent László Gimnázium</h1>
		<div class="w-1/2 flex flex-wrap justify-evenly items-center m-auto text-center max-w-screen-xl">
			<div class="m-4 text-lg">
				A forráskód nyilvánosan elérhető <a class="underline" href="https://github.com/">Github</a
				>-on.
			</div>
			<div class="m-4 text-lg">
				A webakalmazást a <a class="underline" href="https://kit.svelte.dev/">SvelteKit</a> keretrendszer
				működteti.
			</div>
			<!-- svelte-ignore missing-declaration -->
			<div
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

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	#main {
		min-height: 100vh;
		padding-bottom: 28rem;
		position: relative;
		font-weight: 300;
		font-family: "Source Sans Pro", sans-serif;
	}
</style>