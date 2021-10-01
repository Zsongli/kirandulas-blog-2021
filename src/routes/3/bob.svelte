<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>Bobpálya</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/3/bob/0.jpg">Bobpálya</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture
			src="/img/3/bob/1.jpg"
			alt="Bobozás"
			source="https://gyerekkel.com/_next/image?url=https%3A%2F%2Fgyerekkel.com%2Fuploads%2Fmiskolcibob3-6912.jpg%3Fsize%3Dsmall&w=96&q=75"
			>Bobozás</Picture
		>
		<MapWidget name="Vízesés" markerPos={{ lat: 48.059435, lng: 20.746149 }} />
		<Picture
			src="/img/3/bob/2.jpg"
			alt="A csúcson"
			source="https://gyerekkel.com/_next/image?url=https%3A%2F%2Fgyerekkel.com%2Fuploads%2Fmiskolc-bob3-6913.jpg%3Fsize%3Dsmall&w=96&q=75"
			>A csúcson</Picture
		>
	</div>
	<Article prevUrl="/3/vizeses">
		<p>
			A bobpálya hossza nagyjából háromnegyed kilóméter és az ott töltött idő alatt háromszor
			tudtunk lecsúszni, bár az idő nagyrésze a felvonóval ment el. Ennek ellenére maradandó élményt
			hagyott az osztályban, a kirándulás egyik legemlékezetesebb programjaként. A pálya 3 és 99 év
			között használható, így a 100 évesek már sajnos nem ülhetnek fel. Viszont a weboldaluk 5 idegen
			nyelven is elérhető, így külföldieknek is remek választás.
		</p>
	</Article>
</div>
