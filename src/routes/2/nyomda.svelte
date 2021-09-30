<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/2/nyomda/31.jpg">Vizsolyi Nyomda</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/nyomda/28.jpg" alt="Makett a templomról">Makett a templomról</Picture>
		<MapWidget
			name="Vizsolyi Nyomda"
			markerPos={{ lat: 48.3839031, lng: 21.2160835 }}
		/>
		<Picture src="/img/2/nyomda/30.jpg" alt="Kálvin János mellszobra"
			>Kálvin János mellszobra</Picture
		>
	</div>
	<Article prevUrl="/2/templom" nextUrl="/2/boldogko">
		<p>
			A nyomda egy kétszobás épületben helyezkedik el. Míg a külső teremben kiállítást láthattunk a
			reformáció történetéről, a belső teremben kipróbálhattuk azt, milyen technikával nyomtatták
			anno a Károlyi bibliát. A kiállítóteremben Láthattuk a templom makettjét, emelet szobrokat is.
			A padlón pedig egy nagymagyarországtérkép kapott helyet. A belső teremben volt a
			nyomdaszerkezet, ami fából készült. A mintára festéket kellett tenni majd rákerült a papír.
			ezután egy másik falemezt hajtottunk rá és becsúsztattuk egy prés alá, amit nekünk kellet
			letekerni. Ezután Mar csak ki kellet venni a nyomtatványt.
		</p>
	</Article>
</div>
