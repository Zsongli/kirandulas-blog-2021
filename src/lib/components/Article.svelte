<script lang="ts">
	import SvelteFa from "svelte-fa";
	import { fly } from "svelte/transition";
	import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

	export var nextUrl: string | undefined = undefined;
	export var prevUrl: string | undefined = undefined;
</script>

<div
	in:fly={{ x: -100, duration: 500 }}
	style="max-width: 510px;"
	class="w-5/6 bg-gray-100 dark:bg-gray-700 rounded-md shadow-lg p-8 m-6"
>
	<slot />

	<div class="flex justify-between items-center w-full mt-5">
		{#if prevUrl}
			<a href={prevUrl}><SvelteFa icon={faArrowLeft} /></a>
		{:else}
			<div />
		{/if}

		{#if nextUrl}
			<a href={nextUrl}><SvelteFa icon={faArrowRight} /></a>
		{:else}
			<div />
		{/if}
	</div>
</div>
