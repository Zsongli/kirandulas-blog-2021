<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/3/vizeses/0.jpg">Lillafüredi-vízesés</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/3/vizeses/1.jpg" alt="A vízesés lentről">A vízesés lentről</Picture>
		<MapWidget name="Vízesés" markerPos={{ lat: 48.104876, lng: 20.624057 }} />
		<Picture src="/img/3/vizeses/0.jpg" alt="A vízesés a dombról">A vízesés a dombról</Picture>
	</div>
	<Article prevUrl="/3/csonakazas" nextUrl="/3/bob">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam commodi alias tempore
			reprehenderit et dolore? Ullam consequuntur ipsum earum provident, assumenda sit voluptatum
			exercitationem ipsa numquam eaque molestias error saepe voluptate obcaecati fugit suscipit qui
			soluta. Pariatur perferendis obcaecati culpa nostrum sed a cumque explicabo nemo voluptatum,
			assumenda et?
		</p>
	</Article>
</div>
