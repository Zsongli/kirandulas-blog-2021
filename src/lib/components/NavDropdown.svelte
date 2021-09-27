<script lang="ts">
	import { fly } from "svelte/transition";

	export var isOpen: boolean = false;
</script>

{#if isOpen}
	<div
		id="container"
		class="w-max h-auto border p-3 absolute top-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-lg z-50"
		transition:fly={{ y: -20, duration: 100 }}
	>
		<slot />
	</div>
{/if}
