<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/2/kollegium/42.jpg"
	>A Sárospataki Református Kollégium könyvtára</BlogBanner
>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/kollegium/41.jpg" alt="Freskó a kupolán">Festmény a "kupolán"</Picture>
		<MapWidget name="Kollégium könyvtára" markerPos={{ lat: 48.323508, lng: 21.5692165 }} />
		<Picture src="/img/2/kollegium/40.jpg" alt="A vizsolyi biblia másik hasonmása"
			>A vizsolyi biblia másik hasonmása</Picture
		>
	</div>
	<Article prevUrl="/2/boldogko" nextUrl="/2/muzeum">
		<p>
			A kollégium Magyarország egyik leghíresebb oktatási intézménye, hiszen rengeteg híres magyar
			költő, írónak adott egykor otthont. Ezen felül érdemes ellátogatni valamikor a könyvtárába is,
			ahol megcsodálhatjuk az elképesztő festményeket az egykor kupolának tervezett mennyezeten,
			valamint a könyvtár kincseit, amik megelőzik párizsi és bécsi könyvtárakat is, mind ez nagyon
			jó minőségű idegenvezetés mellett. Előfordulhat, hogy megkérnek műanyag cipővédő felhúzására,
			azonban a fényképezés teljesen szabadon megengedett.
		</p>
	</Article>
</div>
