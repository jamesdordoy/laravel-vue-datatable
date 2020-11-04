<template>
    <pre>
        <column-props-markdown>
        </column-props-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import ColumnPropsMarkdown from '../../markdown/props/column.md';
    import CorrectTableStyling from '../../mixins/CorrectTableStyling';

    export default {
        name: 'Column-Props',
        mixins: [CorrectTextStyling, CorrectTableStyling],
        components: {
            ColumnPropsMarkdown
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
