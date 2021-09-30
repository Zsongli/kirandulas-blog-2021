<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam voluptatem quisquam.
			Placeat aliquid, animi minima, optio, soluta fugiat eius maiores iusto cupiditate quos ullam
			nobis asperiores. Vitae vel rem velit deserunt quod officiis, nobis accusamus modi dicta
			praesentium aspernatur maxime ipsam error ab eaque cupiditate, laborum veniam. Et, eius.
		</p>
	</Article>
</div>
