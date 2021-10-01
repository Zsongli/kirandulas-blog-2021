<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>Boldogkő vára</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/2/boldogko/35.jpg">Boldogkő vára</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/boldogko/35.jpg" alt="A vár bejárata">A vár bejárata</Picture>
		<Picture src="/img/2/boldogko/38.jpg" alt="Kilátó">Kilátó</Picture>
		<MapWidget name="Boldogkő vára" markerPos={{ lat: 48.3447158, lng: 21.2326899 }} />
		<Picture src="/img/2/boldogko/39.jpg" alt="Torony">Torony</Picture>
		<Picture src="/img/2/boldogko/37.jpg" alt="Látkép">Látkép a várról</Picture>
	</div>
	<Article prevUrl="/2/nyomda" nextUrl="/2/kollegium">
		<p>
			A vár mögött mély történelem áll, amit a helyi idegenvezetők el is meséltek a látogatóknak.
			Azonban a vár nem csak a történetéről, hanem a rendkívüli kilátásáról is híres. Gyönyörű
			látvány fogadott minket a tornyokban, ahonnan le lehetett látni egész Boldogkőváraljára.
			Mindezeken kívül sok érdekesség található a várfalakon belül is, például a nagy kerék, ami a
			malmot működtette, nagy valószínűséggel emberi energiával meghajtva, és a nyilvános ketrec,
			ahova az elítélteket zárták.
		</p>
	</Article>
</div>
