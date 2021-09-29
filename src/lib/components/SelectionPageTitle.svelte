<script lang="ts">
    import { fly } from "svelte/transition";
</script>

<h1 in:fly={{x:-200, duration: 750}} class="text-5xl text-center max-w-max m-auto mt-20 font-semibold block">
    <slot/>
</h1>