<template>
    <div>
        <pre v-highlightjs>
            <trait-markdown>
            </trait-markdown>
        </pre>
    </div>
</template>

<style scoped>

</style>

<script>

    import TraitMarkdown from '../../markdown/laravel/adding-trait.md';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'home',
        mixins: [CorrectTextStyling],
        components: {
            TraitMarkdown
        },
    }
</script>
