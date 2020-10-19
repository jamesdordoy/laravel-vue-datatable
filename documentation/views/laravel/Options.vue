<template>
    <div>
        <pre v-highlightjs>
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
