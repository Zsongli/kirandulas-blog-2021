<script lang="ts">
	import LinkedCard from "$lib/components/LinkedCard.svelte";
	import SelectionPageTitle from "$lib/components/SelectionPageTitle.svelte";
</script>

<SelectionPageTitle>Második nap</SelectionPageTitle>

<div style="max-width: 2560px;" class="flex items-center justify-evenly flex-wrap mt-20 m-auto">
	<LinkedCard title="Református templom" bottomText="Vizsoly">
		<div
			style="background-image: url(/img/2/templom/25.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A Református templom a településhez köthető Károlyi bibliáról híres. Az épületet három
				részre lehet osztani: a toronyra, ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Nyomda" bottomText="Vizsoly">
		<div
			style="background-image: url(/img/2/nyomda/31.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A nyomda egy kétszobás épületben helyezkedik el. Míg a külső teremben kiállítást láthattunk
				a reformáció történetéről, ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Boldogkő vára" bottomText="Boldogkőváralja">
		<div
			style="background-image: url(/img/2/boldogko/35.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem totam dignissimos repellat
				id ratione, facilis vero architecto excepturi quas.
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Kollégium könyvtár" bottomText="Sárospatak">
		<div
			style="background-image: url(/img/2/kollegium/42.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magni quisquam. Culpa
				temporibus atque distinctio nulla doloremque iusto veritatis consectetur.
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="A Magyar Nyelv Múzeuma" bottomText="Széphalom">
		<div
			style="background-image: url(/img/2/muzeum/55.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam error debitis cum
				delectus deleniti cupiditate officia amet aliquam blanditiis!
			</p>
		</div>
	</LinkedCard>
</div>
