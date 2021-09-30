<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/3/csonakazas/0.jpg">Lillafüredi csónakázás</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/3/csonakazas/1.jpg" alt="Kép 1" source="Vánky Laura fotója" />
		<MapWidget name="Csónakázás" markerPos={{ lat: 48.104817, lng: 20.621459 }} />
		<Picture src="/img/3/csonakazas/0.jpg" alt="Kép 2" source="https://www.miskolc.hu/sites/default/files/latnivalo/elonezeti_kep/2018-02-18/15157/csonakazas_700x380_retina.jpg" />
	</div>
	<Article prevUrl="/3/fuzer" nextUrl="/3/vizeses">
		<p>
			A lillafüredi tóban csónakázni rendkívül megnyugtató dolog. A csónakokba 4-5-fő fért be. Az
			evezéssel akadtak problémák, de a végén beléjöttünk. a tó viszonylag nagy, a partján fák
			vannak, így voltak árnyékosabb és naposabb részei. Mivel a tó több méter mély és a vize hideg,
			így nem tanácsos beleesni.
		</p>
	</Article>
</div>
