<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
    import Picture from "$lib/components/Picture.svelte";
</script>

<svelte:head>
	<title>Tanösvény</title>
</svelte:head>

<BlogBanner backgroundUrl="/img/1/tanosveny/5.jpg">Hollókői Tanösvény</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
        <Picture src="/img/1/tanosveny/5.jpg" alt="A tanösvény vége">A tanösvény vége</Picture>
		<MapWidget name="Tanösvény" markerPos={{ lat: 47.9993771, lng: 19.5854938 }} />
        <Picture src="https://kirandulastippek.hu/images/news/article/zoom/p150-41.jpg" alt="A tanösvény útja" source="https://kirandulastippek.hu/images/news/article/zoom/p150-41.jpg">A tanösvény útja</Picture>
	</div>
	<Article nextUrl="/1/falumuzeum">
		<p>
			Ez az ösvény az Ófalu északi részén a kertek alatt halad, a Hollókői patak völgyében. A
			kilátás falépcsőkről káprázatos, lejjebb pedig a csodaszép növényzetet csodálhatjuk. A
			ösvényen végig vezető fapalló alatt kis tavak is vannak, amikben ma már nem mosnak, hanem az
			élővilágot védik. Az ösvény nem hosszú, de annál csodásabb. A melegben árnyékot adó fák alatt
			nagyon jót sétáltunk az osztállyal.
		</p>
	</Article>
</div>
