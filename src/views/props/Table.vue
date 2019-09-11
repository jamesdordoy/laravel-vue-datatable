<template>
    <pre v-highlightjs>
        <table-markdown>
        </table-markdown>
    </pre>
</template>

<script>
    import TableMarkdown from '../../markdown/props/table.md';

    export default {
        name: 'Table-Props',
        components: {
            TableMarkdown
        },
        mounted() {
            document.querySelectorAll("table").forEach(table => {
                table.classList.add("table");
                table.classList.add("table-bordered");
            })
        }
    }
</script>
