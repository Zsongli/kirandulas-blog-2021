<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/1/taborhely/0.jpg">Táborhely</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/1/taborhely/0.jpg" alt="A szállás utcaképe" source="https://hellozemplen.hu/wp-content/uploads/tabor-02.jpg">A szállás utcaképe</Picture>
		<Picture src="/img/1/taborhely/3.jpg" alt="Étkező" source="https://hellozemplen.hu/wp-content/uploads/%C3%A9tterem-02.jpg">Étkező</Picture>
		<MapWidget name="Táborhely" markerPos={{ lat: 48.484832, lng: 21.35993 }} />
		<Picture src="/img/1/taborhely/1.jpg" alt="Egy szoba" source="https://hellozemplen.hu/wp-content/uploads/szallas.jpg">Egy 6-fős szoba</Picture>
		<Picture src="/img/1/taborhely/2.jpg" alt="Kosárpálya az udvaron" source="https://hellozemplen.hu/wp-content/uploads/tabor-udvar-1.jpg">Kosárpálya az udvaron</Picture
		>
	</div>
	<Article prevUrl="/1/barlang" nextUrl="/2/templom">
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iusto consectetur impedit,
			minima nobis saepe eius sunt alias ex illum aperiam quis! Eum, vel culpa fugit vero esse error
			possimus?
		</p>
	</Article>
</div>
