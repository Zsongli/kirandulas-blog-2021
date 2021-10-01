<script lang="ts">
	import NavDropdown from "$lib/components/NavDropdown.svelte";
	import SvelteFa from "svelte-fa";
	import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
	import DarkMode, { DarkMode_enabled } from "$lib/stores/darkMode";

	var dropdownOpen = false;
	const dropdownPages: { title: string; location: string; href: string }[][] = [
		[
			{ title: "Tanösvény", location: "Hollókő", href: "/1/tanosveny" },
			{ title: "Falumúzeum", location: "Hollókő", href: "/1/falumuzeum" },
			{ title: "Baradla-barlang", location: "Aggtelek", href: "/1/barlang" },
			{ title: "Táborhely", location: "Telkibánya", href: "/1/taborhely" }
		],
		[
			{ title: "Református templom", location: "Vizsoly", href: "/2/templom" },
			{ title: "Nyomda", location: "Vizsoly", href: "/2/nyomda" },
			{ title: "Boldogkő vára", location: "Boldogkőváralja", href: "/2/boldogko" },
			{ title: "Kollégium könyvtár", location: "Sárospatak", href: "/2/kollegium" },
			{ title: "A Magyar Nyelv Múzeuma", location: "Széphalom", href: "/2/muzeum" }
		],
		[
			{ title: "Füzér vára", location: "Füzér település", href: "/3/fuzer" },
			{ title: "Csónakázás", location: "Lillafüred", href: "/3/csonakazas" },
			{ title: "Lillafüredi-vízesés", location: "Lillafüred", href: "/3/vizeses" },
			{ title: "Bobpálya", location: "Miskolctapolca", href: "/3/bob" }
		]
	];

	var dropdownToggleBtn;
</script>

<nav style="box-shadow: 0px 1px 7px 0px;" class="p-3 border-b mb-5 flex items-center justify-between">
	<div id="left" class="flex items-center justify-evenly">
		<button
			aria-label="Lenyíló menü megnyitása"
			id="dropdown-toggle"
			class="mr-5 p-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded"
			on:click={() => {
				dropdownOpen = !dropdownOpen;
			}}
			bind:this={dropdownToggleBtn}
		>
			<SvelteFa icon={faBars} />
		</button>
		<div id="dropdown" class="relative">
			<NavDropdown
				exclude={[dropdownToggleBtn]}
				isOpen={dropdownOpen}
				pages={dropdownPages}
				on:close={() => {
					dropdownOpen = false;
				}}
			/>
		</div>

		<a href="/" class="text-xl p-2">Tanulmányi Kirándulás Blog</a>
	</div>

	<div id="right" class="flex items-center justify-around">
		<button
			aria-label="Téma változtatása"
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
