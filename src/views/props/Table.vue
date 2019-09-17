<template>
    <pre v-highlightjs>
        <table-markdown>
        </table-markdown>
    </pre>
</template>

<script>

    import TableMarkdown from '../../markdown/props/table.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'Table-Props',
        mixins: [CorrectTextStyling],
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
