<script lang="ts">
	import HomepageBanner from "$lib/components/HomepageBanner.svelte";
	import LinkedCard from "$lib/components/LinkedCard.svelte";
	import { fly, fade } from "svelte/transition";
	import { onMount } from "svelte";

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
			desc: 'Jósvafői mesterséges "tengerszem"'
		}
	];

	var ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<HomepageBanner {slides}>
		<div
			in:fade={{ duration: 500 }}
			class="font-medium text-6xl text-center p-5 rounded-md text-gray-200 z-10 bg-black bg-opacity-60 max-w-max w-5/6 transform -skew-x-6"
		>
			Üdvözlünk a kirándulási blogunkon!
		</div>
	</HomepageBanner>
	<div id="homepage-content" class="w-full mt-10 p-5">
		<p in:fly={{ duration: 500, x: -100 }} class="text-center text-3xl max-w-max m-auto">
			Ez a blog végigvezet a Szent László Gimnázium 2020-as F osztályának második tanulmányi
			osztálykirándulásának programjain, látnivalóin, érdekességein.
		</p>

		<h1
			in:fly={{ duration: 500, x: 100 }}
			class="text-2xl text-center max-w-max m-auto mt-12 pt-10 border-t-4 border-black border-opacity-60 dark:border-gray-400"
		>
			Kérlek válassz a napok közül!
		</h1>

		<div class="flex justify-evenly items-center flex-wrap mt-7 m-auto max-w-screen-2xl">
			<LinkedCard title="Első nap" bottomText="4 helyszín" href="/1">
				<p>
					A kalandunk itt kezdődik. Legelőször Hollókőre érkeztünk, majd megjártuk a Vörös-tói
					középtúrát. A nap végére megismerkedhettünk a szálláshellyel.
				</p>
			</LinkedCard>

			<LinkedCard title="Második nap" bottomText="5 helyszín" href="/2">
				<p>
					Ez a nap volt a leghosszabb és legfárasztóbb, de egyben a legtartalmasabb is mind közül.
					Meglátogattuk a kirándulás első várát, sőt, még nyomtattunk is.
				</p>
			</LinkedCard>

			<LinkedCard title="Harmadik nap" bottomText="4 helyszín" href="/3">
				<p>
					Az utolsó nap a előző két fárasztó nap után a lenyugvásról szólt. Egészen addig, amíg el
					nem mentünk bobozni. Utána újból le kellett nyugodnunk.
				</p>
			</LinkedCard>
		</div>
	</div>
{/if}
