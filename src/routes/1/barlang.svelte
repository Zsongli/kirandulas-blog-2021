<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/1/barlang/16.jpg">Baradla-barlang</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/1/barlang/16.jpg" alt="Cseppkövek a mennyezeten">Cseppkövek a mennyezeten</Picture
		>
		<MapWidget name="Baradla-barlang" markerPos={{ lat: 48.473709, lng: 20.519391 }} />
		<Picture
			src="/img/1/barlang/15.jpg"
			alt="A télapó oldala"
			>A "télapó" oldala</Picture
		>
	</div>
	<Article prevUrl="/1/falumuzeum" nextUrl="/1/taborhely">
		<p>
			A barlangot már évszázadok óta látogatják, ez Magyarország legismertebb cseppkőbarlangja.
			Régen még sok órába telt végig menni a barlangon, és a vízben kellet gázolni. Mostanra
			viszont, a Jósvafői kijáratnak, és a kiépített útrendszernek köszönhetően szárazon megúsztuk,
			és másfél órát voltunk lent. Az elején 598 lépcsőfokot ereszkedtünk, majd ezután sétáltunk végig
			a Vörös-tói középtúrán. Voltak névvel ellátott cseppkövek, mint például a sárkány, a kisiklott
			vonat vagy a rakott karfiol. Nagy örömömre felfele emelkedő vitt így nem kellet lépcsőt
			mászni. A túra után a Tengerszemet is megcsodáltuk, ami elképesztően szép volt. A tó kékeszöld
			tükréről visszacsillantak a körülvevő fák levelei.
		</p>
	</Article>
</div>