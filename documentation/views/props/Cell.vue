<template>
    <pre v-highlightjs>
        <cell-props-markdown>
        </cell-props-markdown>
    </pre>
</template>

<script>

    import CellPropsMarkdown from '../../markdown/props/cell.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import CorrectTableStyling from '../../mixins/CorrectTableStyling';

    export default {
        name: 'Cell-Props',
        mixins: [CorrectTextStyling, CorrectTableStyling],
        components: {
            // eslint-disable-next-line
            CellPropsMarkdown,
        },
    }
</script>
