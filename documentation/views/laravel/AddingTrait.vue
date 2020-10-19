<template>
    <div>
        <pre v-highlightjs>
            <trait-markdown>
            </trait-markdown>
        </pre>
    </div>
</template>

<script>

    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import TraitMarkdown from '../../markdown/laravel/adding-trait.md';
    
    export default {
        name: 'Laravel-Adding-Trait',
        mixins: [CorrectTextStyling],
        components: {
            // eslint-disable-next-line
            TraitMarkdown
        },
    }
</script>
