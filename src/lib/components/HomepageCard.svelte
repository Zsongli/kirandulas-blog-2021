<script lang="ts">
    import SvelteFa from "svelte-fa";
    import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

    export var href: string = "#";
</script>

<div class="h-64 w-96 bg-gray-300 dark:bg-gray-700 rounded-md relative shadow-lg m-8">
    <slot/>
    <div class="flex items-center justify-end w-full absolute bottom-10 p-1 bg-black bg-opacity-25 text-black text-opacity-75 dark:text-gray-200">
        <a {href} class="hover:underline text-xl font-normal mx-3">olvass tovább</a>
        <SvelteFa icon={faArrowRight}/>
    </div>
</div>