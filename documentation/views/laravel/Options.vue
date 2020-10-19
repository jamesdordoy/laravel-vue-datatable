<template>
    <div>
        <pre v-highlightjs>
            <h2 class="markdown-header">Package Options</h2>
            <options-markdown>
            </options-markdown>
        </pre>
    </div>
</template>

<script>

    import OptionsMarkdown from '../../markdown/laravel/options.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'Laravel-Options',
        mixins: [CorrectTextStyling],
        components: {
            // eslint-disable-next-line
            OptionsMarkdown
        },
    }
</script>
