<template>
    <pre v-highlightjs>
        <table-markdown>
        </table-markdown>
    </pre>
</template>

<script>

    import TableMarkdown from '../../markdown/props/table.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import CorrectTableStyling from '../../mixins/CorrectTableStyling';

    export default {
        name: 'Table-Props',
        mixins: [CorrectTextStyling, CorrectTableStyling],
        components: {
            // eslint-disable-next-line
            TableMarkdown
        },
    }
</script>
