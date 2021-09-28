<script lang="ts">
	import Card from "$lib/components/Card.svelte";
</script>

<h1 class="text-5xl text-center max-w-max m-auto mt-20 font-semibold">Első nap</h1>

<div style="max-width: 2560px;" class="flex items-center justify-evenly flex-wrap mt-20 m-auto">
	<Card title="Tanösvények" bottomText="Hollókő" href="/1/tanosveny">
		<div
			style="background-image: url(/img/1/tanosveny/5.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora provident veniam
				perferendis. Velit iste deserunt, eaque cupiditate ipsum odio iure.
			</p>
		</div>
	</Card>

	<Card title="Falumúzeum" bottomText="Hollókő">
		<div
			style="background-image: url(/img/1/falumuzeum/8.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ullam ex deleniti velit
				nulla inventore doloribus non commodi voluptate deserunt!
			</p>
		</div>
	</Card>
	<Card title="Baradla-barlang" bottomText="Aggtelek">
		<div
			style="background-image: url(/img/1/barlang/16.jpg); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia corrupti vitae
				suscipit unde quasi aut expedita delectus similique reiciendis.
			</p>
		</div>
	</Card>

	<Card title="Táborhely" bottomText="Telkibánya">
		<div
			style="background-image: url(???); height: 6.25rem;"
			class="absolute left-0 w-full bg-no-repeat bg-cover bg-center"
		>
			<p class="backdrop-blur-sm backdrop-brightness-50 h-full p-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, expedita et! Nesciunt
				consequuntur, facilis laborum quos eius cupiditate excepturi! Ullam.
			</p>
		</div>
	</Card>
</div>
