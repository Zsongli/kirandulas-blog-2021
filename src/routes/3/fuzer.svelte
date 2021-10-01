<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>Füzér vára</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/3/fuzer/61.jpg">Füzér vára</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/3/fuzer/63.jpg" alt="Látkép a várról">Látkép a várról</Picture>
		<Picture src="/img/3/fuzer/64.jpg" alt="A vár bejárata">A vár bejárata</Picture>
		<MapWidget name="Füzér vára" markerPos={{ lat: 48.542071, lng: 21.459407 }} />
		<Picture src="/img/3/fuzer/73.jpg" alt="A várkápolna ablaka">A várkápolna ablaka</Picture>
		<Picture src="/img/3/fuzer/72.jpg" alt="A várkápolna">A várkápolna</Picture>
	</div>
	<Article prevUrl="/2/muzeum" nextUrl="/3/csonakazas">
		<p>
			A vár egy domb tetejére épült, nagyjából fél kilométer magasra. Felfelé körülbelül félúton az
			alsó várban találhatjuk magunkat, ahol a jegyeket tudjuk megvásárolni. A várépület nemrégen
			lett felújítva, így igazán friss élményt nyújt a látogatása. A falakon belül sok érdekesség
			található, az ágyúktól kezdve a várkápolnán keresztül a kertig. A várkápolnán kívüli szoba
			mozi-szerűen van berendezve, elől egy TV-vel, amin 3 rendkívül profin meganimált és narrált
			kisfilm közül választhatunk, amik a vár történelmének különböző kategóriáiról szólnak. A felső
			emeleten pedig egy múzeumnak berendezett helyiség található, amely sok interaktív feladattal
			szórakoztat. Mindenképpen érdemes ellátogatni, az egyik legjobb tapasztalatot nyújtó
			látogatható vár Magyarországon!
		</p>
	</Article>
</div>
