<script lang="ts">
    import SvelteFa from "svelte-fa";
    import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
    import DividerLine from "./DividerLine.svelte";

    export var title: string = "Title";
    export var bottomText: string = "Bottom Text";
    export var href: string = "#";
</script>

<div style="min-width: 320px;" class="h-64 w-96 bg-gray-300 dark:bg-gray-700 rounded-md relative shadow-lg m-8">
    <div class="p-5">
        <h1 class="text-lg block w-max mb-5">
            {title}
            <DividerLine margin=".5rem" />
        </h1>
        <slot/>
        <span class="text-gray-400 italic absolute bottom-2.5">{bottomText}</span>
    </div>
    <div class="flex items-center justify-end w-full absolute bottom-10 p-1 bg-black bg-opacity-25 text-black text-opacity-75 dark:text-gray-200">
        <a {href} class="hover:underline text-xl font-normal mx-3">olvass tovább</a>
        <SvelteFa icon={faArrowRight}/>
    </div>
</div>