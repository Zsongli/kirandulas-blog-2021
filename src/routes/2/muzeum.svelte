<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>A Magyar Nyelv Múzeuma</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/2/muzeum/55.jpg">A Magyar Nyelv Múzeuma</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/muzeum/54.jpg" alt="Bazsalikom a herbáriumban"
			>Bazsalikom a herbáriumban</Picture
		>
		<Picture src="/img/2/muzeum/45.jpg" alt="Besenyei György mellszobra"
			>Besenyei György mellszobra</Picture
		>
		<MapWidget name="A Magyar Nyelv Múzeuma" markerPos={{ lat: 48.4364157, lng: 21.6220948 }} />
		<Picture src="/img/2/muzeum/48.jpg" alt="Kazinczy Ferenc hajtincse"
			>Kazinczy Ferenc hajtincse</Picture
		>
		<Picture src="/img/2/muzeum/59.jpg" alt="Kazinczy Emlékcsarnok"
			>Kazinczy Ferenc emlékháza</Picture
		>
	</div>
	<Article prevUrl="/2/kollegium" nextUrl="/3/fuzer">
		<p>
			Ez a múzeum Kazinczy Ferenc tiszteletére épült, aki a magyar nyelv megújításához való nagy
			mennyiségű hozzájárulásáról híres. Az ő egykori birtokán helyezkedik el a múzeum, valamint
			mellette egy mauzóleum is. A múzeumot egy hangulatos park veszi körül, középen egy
			szökőkúttal, és Kazinczy családtagjainak sírjaival. Az épületen belül és azon kívül is érdekes
			tények olvashatók Kazinczy Ferenc életéről, interaktív feladatokkal együtt. Egy fő érdekesség,
			hogy megőrizték Kazinczy egyetlen hajtincsét, amit az épületben bárki megtekinthet, továbbá
			fenttartanak egy "irodalmi herbáriumot" is, ahol a Kazinczy felesége által termesztett
			gyógynövényfajtákat tartják.
		</p>
	</Article>
</div>
