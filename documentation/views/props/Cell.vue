<template>
    <pre>
        <cell-props-markdown>
        </cell-props-markdown>
    </pre>
</template>

<script>

    import Prism from 'prismjs';
    import CellPropsMarkdown from '../../markdown/props/cell.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import CorrectTableStyling from '../../mixins/CorrectTableStyling';

    export default {
        name: 'Cell-Props',
        mixins: [CorrectTextStyling, CorrectTableStyling],
        components: {
            CellPropsMarkdown,
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>
