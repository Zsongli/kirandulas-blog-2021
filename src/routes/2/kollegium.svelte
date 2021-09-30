<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/2/kollegium/42.jpg">Sárospataki Református Kollégium könyvtára</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/kollegium/41.jpg" alt="Freskó a kupolán">Freskó a "kupolán"</Picture>
		<MapWidget name="Kollégium könyvtára" markerPos={{ lat: 48.323508, lng: 21.5692165 }} />
		<Picture src="/img/2/kollegium/40.jpg" alt="A vizsolyi biblia másik hasonmása">A vizsolyi biblia második hasonmása</Picture>
	</div>
	<Article prevUrl="/2/boldogko" nextUrl="/2/muzeum">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam voluptatem quisquam.
			Placeat aliquid, animi minima, optio, soluta fugiat eius maiores iusto cupiditate quos ullam
			nobis asperiores. Vitae vel rem velit deserunt quod officiis, nobis accusamus modi dicta
			praesentium aspernatur maxime ipsam error ab eaque cupiditate, laborum veniam. Et, eius.
		</p>
	</Article>
</div>
