<template>
    <pre>
        <table-markdown>
        </table-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import TableMarkdown from '../../markdown/events/table.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import CorrectTableStyling from '../../mixins/CorrectTableStyling';

    export default {
        name: 'Table-Props',
        mixins: [CorrectTextStyling, CorrectTableStyling],
        components: {
            TableMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
