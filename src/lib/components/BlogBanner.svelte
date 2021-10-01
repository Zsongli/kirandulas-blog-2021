<script lang="ts">
    import { fly } from "svelte/transition";

    export var backgroundUrl: string;
</script>

<div class="relative w-full h-56 flex justify-evenly items-center bg-no-repeat bg-cover bg-center" style='background-image: url("{backgroundUrl}")'>
    <div class="absolute w-full h-full backdrop-blur-lg"></div>
    <div in:fly={{duration: 750, x: -500}} class="max-w-[90%] text-3xl font-normal z-10 p-5 bg-black bg-opacity-75 rounded-md text-gray-300 transform -skew-x-6">
        <slot/>
    </div>
</div>