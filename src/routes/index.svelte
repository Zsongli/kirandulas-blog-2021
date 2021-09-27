<script lang="ts">
	import WelcomeBanner from "$lib/components/WelcomeBanner.svelte";
	import HomepageCard from "$lib/components/HomepageCard.svelte";
	import DividerLine from "$lib/components/DividerLine.svelte";

	const slides = [
		{
			url: "/img/homepage/boldogko.jpg",
			desc: "Boldogkő vára"
		},
		{
			url: "/img/homepage/fuzer.jpg",
			desc: "Füzér vára"
		},
		{
			url: "/img/homepage/fuzer_kapolna.jpg",
			desc: "Füzér vára"
		},
		{
			url: "/img/homepage/biblia.jpg",
			desc: "A vizsolyi Biblia"
		},
		{
			url: "/img/homepage/baradla.jpg",
			desc: "Baradla-barlang"
		}
	];
</script>

<WelcomeBanner {slides}>
	<div
		id="welcome-title"
		class="font-medium text-6xl text-center p-10 rounded-md text-gray-200 z-10"
	>
		Üdvözlünk a kirándulási blogunkon!
	</div>
</WelcomeBanner>
<div id="homepage-content" class="w-full mt-10 p-5">
	<!-- TODO: cards, page summary -->

	<p class="text-center text-3xl max-w-max m-auto">
		Ez a blog végigvezet a Szent László Gimnázium 2020-as F osztályának második tanulmányi
		osztálykirándulásának programjain, látnivalóin, érdekességein.
	</p>

	<h1 class="text-2xl text-center max-w-max m-auto mt-12 pt-10 border-t-4 border-black border-opacity-60 dark:border-gray-400">
		Kérlek válassz a napok közül!
	</h1>
	<div id="cards" class="flex justify-evenly items-center flex-wrap mt-7">
		<HomepageCard>asda</HomepageCard>
		<HomepageCard>asda</HomepageCard>
		<HomepageCard>asda</HomepageCard>
	</div>
</div>

<style>
	#welcome-title {
		background-color: #00000080;
	}
</style>
