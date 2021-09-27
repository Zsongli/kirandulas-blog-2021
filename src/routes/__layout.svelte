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
		<h1 class="uppercase font-bold text-2xl m-auto max-w-max mb-8">Szent László Gimnázium</h1>
		<div class="w-1/3 flex flex-wrap justify-evenly items-center m-auto">
			<div class="m-4">
				A forráskód nyilvánosan elérhető <a class="underline" href="https://github.com/">Github</a>-on.
			</div>
			<div class="m-4">
				A webakalmazást a <a class="underline" href="https://kit.svelte.dev/">SvelteKit</a> keretrendszer működteti.
			</div>
			<div class="m-4 italic">
				Készítette Horváth Ágnes és Mélykúti Ádám.
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
		padding-bottom: 300px;
		position: relative;
		font-weight: 300;
		font-family: "Source Sans Pro", sans-serif;
	}
</style>
