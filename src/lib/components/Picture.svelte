<script lang="ts">
	import { fade, scale } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import { faTimes } from "@fortawesome/free-solid-svg-icons";
	import SvelteFa from "svelte-fa";

	export var src: string;
	export var alt: string;
	export var source: string | undefined = undefined;

	var isOpen = false;
</script>

<div
	in:scale={{ start: 0, duration: 500, easing: cubicInOut }}
	style="max-width: 22rem;"
	class="h-auto bg-gray-100 dark:bg-gray-700 px-6 pt-6 pb-4 rounded-md shadow-lg m-5"
>
	<img
		{src}
		{alt}
		class="rounded-md ring-1 ring-black dark:ring-gray-300 cursor-pointer"
		on:click={() => {
			isOpen = true;
		}}
	/>
	<span class="mt-3 mx-auto h-auto w-[fit-content] block break-words whitespace-normal text-center">
		<slot />
	</span>
</div>

{#if isOpen}
	<div
		transition:fade={{ duration: 500, easing: cubicInOut }}
		style="z-index: 69420"
		class="w-screen h-screen fixed top-0 left-0 bg-gray-800 bg-opacity-50"
	>
		<div
			style="max-width:95vw; max-height: 95vh;"
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 px-5 pt-10 pb-5 rounded-md shadow-xl"
		>
			<button
				aria-label="Kép bezárása"
				class="absolute top-2 right-2 hover:text-gray-500 dark:hover:text-gray-400"
				on:click={() => {
					isOpen = false;
				}}><SvelteFa icon={faTimes} /></button
			>
			<img
				{src}
				{alt}
				style="max-height: 95vh; max-width: 90%;"
				class="mb-5 rounded-md ring-2 ring-black dark:ring-gray-300 m-auto"
			/>
			{#if source}
				<span class="italic text-gray-500 h-auto w-[fit-content] mx-auto block"
					>Forrás: {source}</span
				>
			{/if}
		</div>
	</div>
{/if}
