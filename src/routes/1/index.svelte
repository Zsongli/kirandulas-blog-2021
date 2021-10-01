<script lang="ts">
	import LinkedCard from "$lib/components/LinkedCard.svelte";
	import SelectionPageTitle from "$lib/components/SelectionPageTitle.svelte";
</script>

<SelectionPageTitle>Első nap</SelectionPageTitle>

<div style="max-width: 2560px;" class="flex items-center justify-evenly flex-wrap mt-20 m-auto">
	<LinkedCard title="Tanösvény" bottomText="Hollókő" href="/1/tanosveny">
		<div
			style="background-image: url(/img/1/tanosveny/5.jpg); height: 6.25rem; "
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 p-3 text-white h-full">
				Ez az ösvény az Ófalu északi részén a kertek alatt halad, a Hollókői patak völgyében. A
				kilátás falépcsőkről káprázatos, lejjebb ( ... )
			</p>
		</div>
	</LinkedCard>

	<LinkedCard title="Falumúzeum" bottomText="Hollókő" href="/1/falumuzeum">
		<div
			style="background-image: url(/img/1/falumuzeum/8.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				Ez egy elégé kicsi paraszt ház. Az osztály épp, hogy csak befért. A múzeumban láttunk egy
				kamrát, ahol régen mindig a mamák ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Baradla-barlang" bottomText="Aggtelek" href="/1/barlang">
		<div
			style="background-image: url(/img/1/barlang/16.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A barlangot már évszázadok óta látogatják, ez Magyarország legismertebb cseppkőbarlangja. 
				Régen még sok órába ( ... )
			</p>
		</div>
	</LinkedCard>

	<LinkedCard title="Táborhely" bottomText="Telkibánya" href="/1/taborhely">
		<div
			style="background-image: url(/img/1/taborhely/0.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A szálláshelyünk egy kis erdős részen található Telkibányán, a helyi református templommal
				szemben. Az udvaron ( ... )
			</p>
		</div>
	</LinkedCard>
</div>
