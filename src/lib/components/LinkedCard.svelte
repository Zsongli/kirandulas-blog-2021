<script lang="ts">
	import SvelteFa from "svelte-fa";
	import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
	import DividerLine from "./DividerLine.svelte";
	import { scale } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";

	export var title: string = "Title";
	export var bottomText: string = "Bottom Text";
	export var href: string = "#";
</script>

<div
	in:scale={{ start: 0, duration: 500, easing: cubicInOut }}
	style="min-width: 320px; min-height: 16rem;"
	class="w-96 bg-gray-300 dark:bg-gray-700 rounded-md relative shadow-lg m-8"
>
	<div class="p-5">
		<h1 class="text-lg block w-[fit-content] mb-5">
			{title}
			<DividerLine margin=".5rem" />
		</h1>
		<slot />
		<span class="text-gray-400 italic absolute bottom-2.5">{bottomText}</span>
	</div>
	<div
		class="flex items-center justify-end w-full absolute bottom-10 p-1 bg-black bg-opacity-25 text-black text-opacity-75 dark:text-gray-200"
	>
		<a {href} class="hover:underline text-xl font-normal mx-3">olvass tovább</a>
		<SvelteFa icon={faArrowRight} />
	</div>
</div>
