<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
	import SvelteFa from "svelte-fa";

	export var slides: { url: string; desc: string }[] = [];
	var current = 0;

	onMount(() =>
		setInterval(() => {
			if (current === slides.length - 1) current = 0;
			else current++;
		}, 3000)
	);
</script>

<div id="container" class="flex items-center justify-evenly relative overflow-hidden">
	<slot />
	<button
		class="absolute text-7xl z-10 bottom-10 text-gray-200 hover:text-white"
		on:click={() =>
			document.getElementById("homepage-content").scrollIntoView({ behavior: "smooth" })}
	>
		<SvelteFa icon={faChevronDown} />
	</button>
	{#each slides as slide, i}
		{#if i === current}
			<div
				in:fly={{ x: 500, duration: 200 }}
				out:fly={{ x: -500, duration: 200 }}
				class="absolute w-full h-full "
			>
				<div
					style="background-image: url({slide.url});"
					id="img"
					class="bg-cover bg-center bg-no-repeat h-full w-full"
				/>
				<span class="absolute bottom-1 right-2 text-white italic">{slide.desc}</span>
			</div>
		{/if}
	{/each}
</div>

<style>
	#img {
		box-shadow: inset 0px 0px 20px 3px #1f1f1f;
	}

	#container {
		min-height: 550px;
	}
</style>
