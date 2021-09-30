<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/1/falumuzeum/8.jpg">Hollókői Falumúzeum</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/1/falumuzeum/7.jpg" alt="Két macska a bejáratnál">Két macska a bejáratnál</Picture
		>
		<Picture src="/img/1/falumuzeum/8.jpg" alt="A szomszéd ház">A szomszéd ház</Picture
		>
		<MapWidget name="Falumúzeum" markerPos={{ lat: 47.998962, lng: 19.587692 }} />
		<Picture
			src="/img/1/falumuzeum/9.jpg"
			alt="Régimódi vasaló"
			>Régimódi vasaló</Picture
		>
		<Picture
			src="/img/1/falumuzeum/10.jpg"
			alt="A család pár tányérja"
			>A család pár tányérja</Picture
		>
	</div>
	<Article prevUrl="/1/tanosveny" nextUrl="/1/barlang">
		<p>
			Ez egy elégé kicsi paraszt ház. Az osztály épp, hogy csak befért. A múzeumban láttunk egy
			kamrát, ahol régen mindig a mamák aludtak, mivel náluk volt a kulcs. És a tisztaszobát, ahova
			szülni és meghalni jártak. A kettő között volt a konyha, ami az egyetlen fűtött helyiség volt a
			házban. Azt is megtudtuk, hogy a férfiak vagy a padláson, vagy a szénabálák között töltötték
			az éjszakát.
		</p>
	</Article>
</div>
