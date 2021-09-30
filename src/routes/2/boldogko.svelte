<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam voluptatem quisquam.
			Placeat aliquid, animi minima, optio, soluta fugiat eius maiores iusto cupiditate quos ullam
			nobis asperiores. Vitae vel rem velit deserunt quod officiis, nobis accusamus modi dicta
			praesentium aspernatur maxime ipsam error ab eaque cupiditate, laborum veniam. Et, eius.
		</p>
	</Article>
</div>
