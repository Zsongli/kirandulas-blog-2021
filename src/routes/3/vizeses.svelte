<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>Lillafüredi-vízesés</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/3/vizeses/0.jpg">Lillafüredi-vízesés</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/3/vizeses/1.jpg" alt="A vízesés lentről">A vízesés lentről</Picture>
		<MapWidget name="Vízesés" markerPos={{ lat: 48.104876, lng: 20.624057 }} />
		<Picture src="/img/3/vizeses/0.jpg" alt="A vízesés a dombról">A vízesés a dombról</Picture>
	</div>
	<Article prevUrl="/3/csonakazas" nextUrl="/3/bob">
		<p>
			A vízesés a 20. században mesterségesen lett kialakítva a Szinva folyóból és azóta is
			Magyarország legnagyobb függőleges vízesése. Közvetlen mellette található az Anna-barlang
			bejárata is, amit szintén érdemes meglátogatni. A helyszínre jellemző a sok korláthoz
			rögzített szerelemlakat.
		</p>
	</Article>
</div>
