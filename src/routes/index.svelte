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
		},
		{
			url: "/img/homepage/tengerszem.jpg",
			desc:"Jósvafői mesterséges \"tengerszem\""
		}
	];
</script>

<WelcomeBanner {slides}>
	<div class="font-medium text-6xl text-center p-5 rounded-md text-gray-200 z-10 bg-black bg-opacity-60 max-w-max w-5/6">
		Üdvözlünk a kirándulási blogunkon!
	</div>
</WelcomeBanner>
<div id="homepage-content" class="w-full mt-10 p-5">
	<p class="text-center text-3xl max-w-max m-auto">
		Ez a blog végigvezet a Szent László Gimnázium 2020-as F osztályának második tanulmányi
		osztálykirándulásának programjain, látnivalóin, érdekességein.
	</p>

	<h1
		class="text-2xl text-center max-w-max m-auto mt-12 pt-10 border-t-4 border-black border-opacity-60 dark:border-gray-400"
	>
		Kérlek válassz a napok közül!
	</h1>
	<div id="cards" class="flex justify-evenly items-center flex-wrap mt-7 m-auto max-w-screen-2xl">
		<HomepageCard>
			<div class="p-5">
				<h1 class="text-lg block w-max mb-5">
					Első nap
					<DividerLine margin=".5rem" />
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta omnis harum
					repudiandae quos, hic totam beatae ipsum dolores est.
				</p>
				<span class="text-gray-400 italic absolute bottom-2.5">4 helyszín</span>
			</div>
		</HomepageCard>

		<HomepageCard>
			<div class="p-5">
				<h1 class="text-lg block w-max mb-5">
					Második nap
					<DividerLine margin=".5rem" />
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio sit eligendi odit
					deserunt non dolor, recusandae maxime perspiciatis modi.
				</p>
				<span class="text-gray-400 italic absolute bottom-2.5">5 helyszín</span>
			</div>
		</HomepageCard>

		<HomepageCard>
			<div class="p-5">
				<h1 class="text-lg block w-max mb-5">
					Harmadik nap
					<DividerLine margin=".5rem" />
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aliquid dolore sapiente iure
					deserunt animi, voluptates officia deleniti neque blanditiis!
				</p>
				<span class="text-gray-400 italic absolute bottom-2.5">4 helyszín</span>
			</div>
		</HomepageCard>
	</div>
	<span class="text-center max-w-max m-auto block mt-10 italic">Szeretnél egy bizonyos programról olvasni? A bal-felső sarokban található menüben választhatsz.</span>
</div>
