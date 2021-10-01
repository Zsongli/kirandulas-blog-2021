<script lang="ts">
	import LinkedCard from "$lib/components/LinkedCard.svelte";
	import SelectionPageTitle from "$lib/components/SelectionPageTitle.svelte";
</script>

<svelte:head>
	<title>Harmadik nap</title>
</svelte:head>

<SelectionPageTitle>Harmadik nap</SelectionPageTitle>

<div style="max-width: 2560px;" class="flex items-center justify-evenly flex-wrap mt-20 m-auto">
	<LinkedCard title="Füzér vára" bottomText="Füzér település" href="/3/fuzer">
		<div
			style="background-image: url(/img/3/fuzer/61.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A vár egy domb tetejére épült, nagyjából fél kilométer magasra. Felfelé körülbelül félúton
				az alsó várban találhatjuk magunkat ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Csónakázás" bottomText="Lillafüred" href="/3/csonakazas">
		<div
			style="background-image: url(/img/3/csonakazas/0.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A lillafüredi tóban csónakázni rendkívül megnyugtató dolog. A csónakokba 4-5-fő fért be. Az
				evezéssel akadtak problémák, ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Lillafüredi vízesés" bottomText="Lillafüred" href="/3/vizeses">
		<div
			style="background-image: url(/img/3/vizeses/0.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A vízesés a 20. században mesterségesen lett kialakítva a Szinva folyóból és azóta is
				Magyarország legnagyobb függőleges ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Bobpálya" bottomText="Miskolctapolca" href="/3/bob">
		<div
			style="background-image: url(/img/3/bob/0.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A bobpálya hossza nagyjából háromnegyed kilóméter és az ott töltött idő alatt háromszor
				tudtunk lecsúszni, bár az idő nagyrésze ( ... )
			</p>
		</div>
	</LinkedCard>
</div>
