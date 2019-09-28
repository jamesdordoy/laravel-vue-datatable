<template>
    <pre v-highlightjs>
        <column-props-markdown>
        </column-props-markdown>
    </pre>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import ColumnPropsMarkdown from '../../markdown/props/column.md';

    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            ColumnPropsMarkdown
        },
        mounted() {
            document.querySelectorAll("table").forEach(table => {
                table.classList.add("table");
                table.classList.add("table-bordered");
                table.classList.add("table-striped");
            })
        }
    }
</script>
