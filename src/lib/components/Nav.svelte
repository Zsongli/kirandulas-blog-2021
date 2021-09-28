<script lang="ts">
	import NavDropdown from "$lib/components/NavDropdown.svelte";
	import SvelteFa from "svelte-fa";
	import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
	import DarkMode, { DarkMode_enabled } from "$lib/stores/darkMode";

	var navDropdownOpen = false;
	const navDropdownPages: { title: string; location: string; href: string }[][] = [
		[
			{ title: "Tanösvények", location: "Hollókő", href: "#" },
			{ title: "Falumúzeum", location: "Hollókő", href: "#" },
			{ title: "Baradla-barlang", location: "Aggtelek", href: "#" },
			{ title: "Táborhely", location: "Telkibánya", href: "#" }
		],
		[
			{ title: "Református templom", location: "Vizsoly", href: "#" },
			{ title: "Nyomda", location: "Vizsoly", href: "#" },
			{ title: "Boldogkő vára", location: "Boldogkőváralja", href: "#" },
			{ title: "Kollégium könyvtár", location: "Sárospatak", href: "#" },
			{ title: "A Magyar Nyelv Múzeuma", location: "Széphalom", href: "#" }
		],
		[
			{ title: "Füzér vára", location: "Füzér település", href: "#" },
			{ title: "Csónakázás", location: "Lillafüred", href: "#" },
			{ title: "Anna-barlang", location: "Lillafüred", href: "#" },
			{ title: "Bobpálya", location: "Miskolctapolca", href: "#" }
		]
	];
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
			<NavDropdown isOpen={navDropdownOpen} pages={navDropdownPages} />
		</div>

		<a id="branding" href="/" class="text-xl p-2">Tanulmányi Kirándulás Blog</a>
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

<style lang="postcss">
	nav {
		box-shadow: 0px 1px 7px 0px;
	}
</style>
