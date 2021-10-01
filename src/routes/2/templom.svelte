<script lang="ts">
	import MapWidget from "$lib/components/MapWidget.svelte";
	import BlogBanner from "$lib/components/BlogBanner.svelte";
	import Article from "$lib/components/Article.svelte";
	import Picture from "$lib/components/Picture.svelte";
</script>

<BlogBanner backgroundUrl="/img/2/templom/25.jpg">Vizsolyi Református Templom</BlogBanner>

<div
	style="min-height: 30rem;"
	class="bg-black bg-opacity-25 w-full mt-20 flex justify-evenly items-center flex-col shadow-xl p-5"
>
	<div class="flex items-center justify-evenly flex-wrap">
		<Picture src="/img/2/templom/24.jpg" alt="Restaurált freskó">Restaurált falfestmény a vakolat alól</Picture>
		<MapWidget name="Vizsolyi Református Templom" markerPos={{ lat: 48.3839031, lng: 21.2160835 }} />
		<Picture src="/img/2/templom/26.jpg" alt="A vizsolyi biblia hasonmása">A vizsolyi biblia hasonmása</Picture>
	</div>
	<Article prevUrl="/1/taborhely" nextUrl="/2/nyomda">
		<p>
			A Református templom a településhez köthető Károlyi bibliáról híres. Az épületet három részre
			lehet osztani: a toronyra a hajóra és a szentélre A fala tele van régi falfestményekkel, amik
			bibliai történeteket, szenteket ábrázolnak. A szószék felett lévő korona adomány volt. A
			templomban található az egyik eredeti vizsolyi bibliát, amit ma már csak üveg mögül lehet
			megtekinteni. A hasonmásába viszont belelapozhatunk, ami a templom közepén áll. A templomnak
			ma is van gyülekezete és minden vasárnap tartanak istentiszteleteket.
		</p>
	</Article>
</div>
