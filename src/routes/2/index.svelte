<script lang="ts">
	import LinkedCard from "$lib/components/LinkedCard.svelte";
	import SelectionPageTitle from "$lib/components/SelectionPageTitle.svelte";
</script>

<svelte:head>
	<title>Második nap</title>
</svelte:head>

<SelectionPageTitle>Második nap</SelectionPageTitle>

<div style="max-width: 2560px;" class="flex items-center justify-evenly flex-wrap mt-20 m-auto">
	<LinkedCard title="Református templom" bottomText="Vizsoly" href="/2/templom">
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
	<LinkedCard title="Nyomda" bottomText="Vizsoly" href="/2/nyomda">
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
	<LinkedCard title="Boldogkő vára" bottomText="Boldogkőváralja" href="/2/boldogko">
		<div
			style="background-image: url(/img/2/boldogko/35.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A vár mögött mély történelem áll, amit a helyi idegenvezetők el is meséltek a látogatóknak.
				Azonban a vár nem csak a ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="Kollégium könyvtár" bottomText="Sárospatak" href="/2/kollegium">
		<div
			style="background-image: url(/img/2/kollegium/42.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				A kollégium Magyarország egyik leghíresebb oktatási intézménye, hiszen rengeteg híres magyar
				költő, írónak adott egykor otthont. ( ... )
			</p>
		</div>
	</LinkedCard>
	<LinkedCard title="A Magyar Nyelv Múzeuma" bottomText="Széphalom" href="/2/muzeum">
		<div
			style="background-image: url(/img/2/muzeum/55.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3 text-white">
				Ez a múzeum Kazinczy Ferenc tiszteletére épült, aki a magyar nyelv megújításához való nagy
				mennyiségű hozzájárulásáról híres. ( ... )
			</p>
		</div>
	</LinkedCard>
</div>
