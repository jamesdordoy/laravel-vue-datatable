<template>
    <pre v-highlightjs>
        <cell-props-markdown>
        </cell-props-markdown>
    </pre>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import CellPropsMarkdown from '../../markdown/props/cell.md';

    export default {
        name: 'Cell Props',
        mixins: [CorrectTextStyling],
        components: {
            CellPropsMarkdown
        },
        mounted() {
            document.querySelectorAll("table").forEach(table => {
                table.classList.add("table");
                table.classList.add("table-bordered");
            })
        }
    }
</script>
