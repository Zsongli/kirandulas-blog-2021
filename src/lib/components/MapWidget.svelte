<script lang="ts">
	import { onMount } from "svelte";
	import { cubicInOut } from "svelte/easing";
	import { scale } from "svelte/transition";

	export var name: string;
	export var markerPos: { lat: number; lng: number };

	var map: L.Map;
	onMount(async () => {
		const L = (await import("leaflet")).default;

		const bounds = new L.LatLngBounds(
			new L.LatLng(48.6590427, 15.7873599),
			new L.LatLng(45.6957106, 23.2025655)
		);

		map = new L.Map(name, {
			attributionControl: false,
			maxBounds: bounds,
			maxBoundsViscosity: 0.8,
			minZoom: 6
		}).setView(markerPos, 7);

		new L.TileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			subdomains: "abcd",
			maxZoom: 14
		}).addTo(map);

		new L.Marker(markerPos, { title: name }).addTo(map);
	});
</script>

<div
	in:scale={{ start: 0, duration: 500, easing: cubicInOut }}
	id={name}
	style="max-width: 80vw"
	class="w-96 h-96 rounded-md shadow-xl ring-2 ring-gray-400 ring-offset-1 m-8"
/>

<style lang="postcss">
	@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
</style>
