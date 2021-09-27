<script lang="ts">
	import NavDropdown from "./NavDropdown.svelte";
	import NavDropdownLink from "./NavDropdownLink.svelte";
	import SvelteFa from "svelte-fa";
	import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
	import DarkMode, { DarkMode_enabled } from "$lib/stores/darkMode";

	var navDropdownOpen = false;
</script>

<nav class="p-3 border-b mb-5 flex items-center justify-between">
	<div id="left" class="flex items-center justify-evenly">
		<button
			id="dropdown-toggle"
			class="mr-5 p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded"
			on:click={() => {
				navDropdownOpen = !navDropdownOpen;
			}}
		>
			<SvelteFa icon={faBars} />
		</button>
		<div id="dropdown" class="relative">
			<NavDropdown isOpen={navDropdownOpen}>
				<h1 class="font-normal text-center pb-3 border-b">Programok</h1>
				<div class="page mt-3">
					<NavDropdownLink title="Tanösvények" location="Hollókő" href="#" />
					<NavDropdownLink title="Falumúzeum" location="Hollókő" href="#" />
					<NavDropdownLink title="Vöröstó" location="Aggtelek" href="#" />
					<NavDropdownLink title="Szálláshely" location="Telkibánya" href="#" />
				</div>

				<div class="flex items-center justify-evenly mt-5">
					<button id="prev" class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
						>◀</button
					>
					<span class="text-gray-500">1. nap</span>
					<button id="next" class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
						>▶</button
					>
				</div>
			</NavDropdown>
		</div>

		<a
			id="branding"
			href="/"
			class="text-xl p-2"
			>Tanulmányi Kirándulás Blog</a
		>
	</div>

	<div id="right" class="flex items-center justify-around">
		<button
			id="dark-toggle"
			class="p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded"
			on:click={() => {
				$DarkMode_enabled ? DarkMode.disable() : DarkMode.enable();
			}}
		>
			<SvelteFa icon={$DarkMode_enabled ? faSun : faMoon} />
		</button>
	</div>
</nav>
<slot />

<style>
	nav {
		box-shadow: 0px 1px 7px 0px;
	}

	.page {
		@apply grid grid-cols-2 gap-y-2 gap-x-10 relative;
	}
</style>
