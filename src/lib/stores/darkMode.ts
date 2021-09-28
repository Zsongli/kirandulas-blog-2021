import { writable } from "svelte/store";

namespace DarkMode {
	export function enable() {
		DarkMode_enabled.set(true);
		document.documentElement.classList.add("dark");
		localStorage.setItem("dark", "true");
	}

	export function disable() {
		DarkMode_enabled.set(false);
		document.documentElement.classList.remove("dark");
		localStorage.setItem("dark", "false");
	}

	export function initialize() {
		if (localStorage.getItem("dark") === "true") enable();
		else if (localStorage.getItem("dark") === "false") disable();
		else if (window.matchMedia("(prefers-color-scheme: dark)").matches) enable();
		else disable();
	}
}

export const DarkMode_enabled = writable<boolean | undefined>(undefined);
export default DarkMode;
