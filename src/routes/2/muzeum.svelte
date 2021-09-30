<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/2/muzeum/55.jpg">A Magyar Nyelv Múzeuma</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/muzeum/54.jpg" alt="Bazsalikom a herbáriumban"
			>Bazsalikom a herbáriumban</Picture
		>
		<Picture src="/img/2/muzeum/45.jpg" alt="Besenyei György mellszobra"
			>Besenyei György mellszobra</Picture
		>
		<MapWidget name="A Magyar Nyelv Múzeuma" markerPos={{ lat: 48.4364157, lng: 21.6220948 }} />
		<Picture src="/img/2/muzeum/48.jpg" alt="Kazinczy Ferenc hajtincse"
			>Kazinczy Ferenc hajtincse</Picture
		>
		<Picture src="/img/2/muzeum/59.jpg" alt="Kazinczy Emlékcsarnok"
			>Kazinczy Ferenc emlékháza</Picture
		>
	</div>
	<Article prevUrl="/2/kollegium" nextUrl="/3/fuzer">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam voluptatem quisquam.
			Placeat aliquid, animi minima, optio, soluta fugiat eius maiores iusto cupiditate quos ullam
			nobis asperiores. Vitae vel rem velit deserunt quod officiis, nobis accusamus modi dicta
			praesentium aspernatur maxime ipsam error ab eaque cupiditate, laborum veniam. Et, eius.
		</p>
	</Article>
</div>
