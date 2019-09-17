<template>
    <div>
        <pre v-highlightjs>
            <options-markdown>
            </options-markdown>
        </pre>
    </div>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import OptionsMarkdown from '../../markdown/laravel/options.md';

    export default {
        name: 'Options',
        mixins: [CorrectTextStyling],
        components: {
            OptionsMarkdown
        },
    }
</script>
