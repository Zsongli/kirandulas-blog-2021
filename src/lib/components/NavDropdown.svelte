<script lang="ts">
	import ClickOutside from "svelte-click-outside";
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";

	export var pages: { title: string; location: string; href: string }[][] = [];
	export var isOpen: boolean = false;
	export var exclude: any[] = [];

	const dispatch = createEventDispatcher();

	var current = 0;
</script>

{#if isOpen}
	<ClickOutside {exclude} on:clickoutside={() => dispatch("close")}>
		<div
			class="w-80 h-auto border p-3 absolute top-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-lg z-50"
			transition:fly={{ y: -20, duration: 100 }}
		>
			<h1 class="font-normal text-center pb-3 border-b">Programok</h1>

			<div class="relative">
				{#each pages as page, i}
					{#if i === current}
						<div class="grid grid-cols-2 gap-y-2 gap-x-10 relative mt-3">
							{#each page as item}
								<div>
									<a
										href={item.href}
										class="flex flex-col justify-evenly border rounded py-2 px-3 bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 h-24"
										>{item.title}
										<i class="text-gray-500 dark:text-gray-400 text-xs">{item.location}</i></a
									>
								</div>
							{/each}
						</div>

						<div class="flex items-center justify-evenly mt-5">
							<button
								id="prev"
								class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
								on:click|stopPropagation={() => {
									if (current === 0) current = pages.length - 1;
									else current--;
								}}>◀</button
							>
							<a class="text-gray-500" href="/{current + 1}">{current + 1}. nap</a>
							<button
								id="next"
								class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
								on:click|stopPropagation={() => {
									if (current === pages.length - 1) current = 0;
									else current++;
								}}>▶</button
							>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</ClickOutside>
{/if}
