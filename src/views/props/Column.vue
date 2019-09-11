<template>
    <pre v-highlightjs>
        <column-props-markdown>
        </column-props-markdown>
    </pre>
</template>

<script>

    import ColumnPropsMarkdown from '../../markdown/props/column.md';

    export default {
        name: 'home',
        components: {
            ColumnPropsMarkdown
        },
        mounted() {
            document.querySelectorAll("table").forEach(table => {
                table.classList.add("table");
                table.classList.add("table-bordered");
            })
        }
    }
</script>
