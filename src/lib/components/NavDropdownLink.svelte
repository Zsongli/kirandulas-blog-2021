<script lang="ts">
    export var title: string;
    export var location: string;
    export var href: string;
</script>

<div>
    <a href={href} class="flex flex-col border rounded py-2 px-3 bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700">{title} <i class="text-gray-500 dark:text-gray-400 text-xs">{location}</i></a>
</div>
